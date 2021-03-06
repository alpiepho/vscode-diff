//	Imports ____________________________________________________________________

import * as fs from 'fs';
import { basename, dirname, extname, sep } from 'path';
import * as vscode from 'vscode';

import { createFindGlob, walktree } from './@l13/fse';

import { Dictionary, Diff, File, StatsMap } from '../types';
import { sortCaseInsensitive } from './common';
import { DiffMessage } from './DiffMessage';
import { DiffOutput } from './DiffOutput';
import { DiffResult } from './DiffResult';
import { DiffStats } from './DiffStats';
import { DiffStatus } from './DiffStatus';

const push = Array.prototype.push;

type TextFiles = {
	extensions:string[],
	filenames:string[],
	glob:RegExp,
};

//	Variables __________________________________________________________________

const findPlaceholder = /\$\{([a-zA-Z]+)(?:\:((?:\\\}|[^\}])*))?\}/;
const findPlaceholders = /\$\{([a-zA-Z]+)(?:\:((?:\\\}|[^\}])*))?\}/g;
const findEscapedEndingBrace = /\\\}/g;

const textfiles:TextFiles = {
	extensions: [],
	filenames: [],
	glob: null,
};

//	Initialize _________________________________________________________________

buildWhitelistForTextFiles();

vscode.extensions.onDidChange(() => buildWhitelistForTextFiles());

//	Exports ____________________________________________________________________

export class DiffCompare {
	
	private readonly context:vscode.ExtensionContext;
	
	private readonly status:DiffStatus;
	private readonly output:DiffOutput;
	
	private disposables:vscode.Disposable[] = [];
	
	public constructor (private msg:DiffMessage, context:vscode.ExtensionContext) {
		
		this.context = context;
		this.status = DiffStatus.createStatusBar(context);
		this.output = DiffOutput.createOutput();
		
		msg.on('create:diffs', (data) => this.createDiffs(data));
		
	}
	
	public dispose () :void {
		
		while (this.disposables.length) {
			const disposable = this.disposables.pop();
			if (disposable) disposable.dispose();
		}
		
	}
	
	private saveHistory (pathA:string, pathB:string) :void {
		
		const history:string[] = this.context.globalState.get('history') || [];
		
		addToRecentlyUsed(history, pathB);
		addToRecentlyUsed(history, pathA);
		
		const maxLength:number = <number>vscode.workspace.getConfiguration('l13Diff').get('maxRecentlyUsed', 10);
		
		this.context.globalState.update('history', history.slice(0, maxLength));
		
	}
	
	private createDiffs (data:any) :void {
		
		this.status.update();
		this.output.clear();
		this.output.msg('LOG');
		this.output.msg();
		
		const pathA = parsePredefinedVariables(data.pathA);
		const pathB = parsePredefinedVariables(data.pathB);
		
		if (findPlaceholder.test(pathA) || findPlaceholder.test(pathB)) {
			return this.postEmptyResult(pathA, pathB);
		}
		
		if (pathA === pathB) {
			vscode.window.showInformationMessage(`The left and right path is the same.`);
			return this.postEmptyResult(pathA, pathB);
		}
		
		if (!fs.existsSync(pathA)) {
			return this.postError(`The left path '${pathA}' does not exist.`, pathA, pathB);
		}
		
		if (!fs.existsSync(pathB)) {
			return this.postError(`The right path '${pathB}' does not exist.`, pathA, pathB);
		}
		
		const statA = fs.lstatSync(pathA);
		const statB = fs.lstatSync(pathB);
		
		if (statA.isFile() && statB.isFile()) this.compareFiles(data, pathA, pathB);
		else if (statA.isDirectory() && statB.isDirectory()) this.compareFolders(data, pathA, pathB);
		else this.postError(`The left and right path is not of the same type.`, pathA, pathB);
		
	}
	
	private compareFiles (data:any, pathA:string, pathB:string) {
		
		const left = vscode.Uri.file(pathA);
		const right = vscode.Uri.file(pathB);
		const openToSide = vscode.workspace.getConfiguration('l13Diff').get('openToSide', false);
		
		this.saveHistory(data.pathA, data.pathB);
		this.output.log(`Comparing '${pathA}' ↔ '${pathB}'`);
		
		vscode.commands.executeCommand('vscode.diff', left, right, `${pathA} ↔ ${pathB}`, {
			preview: false,
			viewColumn: openToSide ? vscode.ViewColumn.Beside : vscode.ViewColumn.Active,
		});
		
		this.postEmptyResult(pathA, pathB);
		
	}
	
	private compareFolders (data:any, pathA:string, pathB:string) {
		
		this.saveHistory(data.pathA, data.pathB);
		this.output.log(`Comparing '${pathA}' ↔ '${pathB}'`);
		
		this.createDiffList(pathA, pathB, (error:null|Error, diffResult:undefined|DiffResult) => {
			
			if (error) vscode.window.showErrorMessage(error.message);
			
			if (!diffResult) this.status.update();
			
			this.msg.send('create:diffs', { diffResult });
			
		});
		
	}
	
	private postError (text:string, pathA:string, pathB:string) {
		
		this.output.log(text);
		vscode.window.showErrorMessage(text);
		
		this.postEmptyResult(pathA, pathB);
		
	}
	
	private postEmptyResult (pathA:string, pathB:string) {
		
		this.msg.send('create:diffs', { diffResult: new DiffResult(pathA, pathB) });
		
	}
	
	private createDiffList (dirnameA:string, dirnameB:string, callback:(error:null|Error, diff?:DiffResult) => void) :void {
		
		if (!isDirectory(dirnameA)) return callback(new Error(`Path '${dirnameA}' is not a folder!`));
		if (!isDirectory(dirnameB)) return callback(new Error(`Path '${dirnameB}' is not a folder!`));
		
		const ignore = <string[]>vscode.workspace.getConfiguration('l13Diff').get('ignore');
		const diffResult:DiffResult = new DiffResult(dirnameA, dirnameB);
		const diffs:Dictionary<Diff> = {};
		
		this.output.log('Scanning left folder');
		
		walktree(dirnameA, { ignore }, (errorA, resultA) => {
			
			if (errorA) return callback(errorA);
			
			createListA(diffs, <StatsMap>resultA);
			
			this.output.log('Scanning right folder');
			
			walktree(dirnameB, { ignore }, (errorB, resultB) => {
			
				if (errorB) return callback(errorB);
				
				this.output.log('Comparing files');
					
				createListB(diffs, <StatsMap>resultB);
				
				this.output.log('Compared files');
				
				diffResult.diffs = Object.keys(diffs).sort(sortCaseInsensitive).map((relative) => diffs[relative]);
				
				const diffStats = new DiffStats(diffResult);
				const total = diffStats.all.total;
				
				this.status.update(`Compared ${total} entr${total > 2 ? 'ies' : 'y'}`);
				
				this.output.msg();
				this.output.msg();
				this.output.msg(diffStats.report());
				
				callback(null, diffResult);
				
			});
			
		});
		
	}
	
}

//	Functions __________________________________________________________________

function addToRecentlyUsed (history:string[], path:string) {
	
	const index = history.indexOf(path);
	
	if (index !== -1) history.splice(index, 1);
	
	history.unshift(path);
	
}

function isDirectory (folder:string) :boolean {
	
	const stat = fs.existsSync(folder) ? fs.lstatSync(folder) : false;
	
	return !!(stat && stat.isDirectory());
	
}

function createListA (diffs:Dictionary<Diff>, result:StatsMap) {
	
	Object.keys(result).forEach((pathname) => {
		
		const file = result[pathname];
		const relative = file.relative;
		const name = dirname(relative);
		
		diffs[file.relative] = {
			id: relative,
			basename: basename(relative),
			dirname: name !== '.' ? name + sep : '',
			extname: extname(relative),
			status: 'deleted',
			type: file.type,
			ignoredEOL: false,
			fileA: file,
			fileB: null,
		};
		
	});
	
}

function createListB (diffs:Dictionary<Diff>, result:StatsMap) {
	
	const ignoreEndOfLine = vscode.workspace.getConfiguration('l13Diff').get('ignoreEndOfLine', false);
	
	Object.keys(result).forEach((pathname) => {
				
		const file = result[pathname];
		const relative = file.relative;
		const diff = diffs[relative];
		
		if (diff) {
			diff.status = 'unchanged';
			
			const fileB = diff.fileB = file;
			const fileA = <File>diff.fileA;
			
			const statA = <fs.Stats>fileA.stat;
			const statB = <fs.Stats>fileB.stat;
			
			if (fileA.type !== fileB.type) {
				diff.status = 'conflicting';
				diff.type = 'mixed';
			} else if (fileA.type === 'file' && fileB.type === 'file') {
				if (ignoreEndOfLine &&
					(textfiles.extensions.includes(diff.extname) ||
					textfiles.filenames.includes(diff.basename) ||
					textfiles.glob && textfiles.glob.test(diff.basename))) {
					const bufferA = fs.readFileSync(fileA.path);
					const bufferB = fs.readFileSync(fileB.path);
				//	If files are equal normalizing is not necessary
					if (statA.size === statB.size && bufferA.equals(bufferB)) return;
					const maxLength = Math.max(bufferA.length, bufferB.length);
					diff.ignoredEOL = true;
					if (!normalizeBuffer(bufferA, maxLength).equals(normalizeBuffer(bufferB, maxLength))) diff.status = 'modified';
				} else {
					if (statA.size !== statB.size) {
						diff.status = 'modified';
					} else {
						const bufferA = fs.readFileSync(fileA.path);
						const bufferB = fs.readFileSync(fileB.path);
						if (!bufferA.equals(bufferB)) diff.status = 'modified';
					}
				}
			}
		} else {
			const name = dirname(relative);
			
			diffs[file.relative] = {
				id: relative,
				basename: basename(relative),
				dirname: name !== '.' ? name + sep : '',
				extname: extname(relative),
				status: 'untracked',
				type: file.type,
				ignoredEOL: false,
				fileA: null,
				fileB: file,
			};
		}
		
	});
	
}

function buildWhitelistForTextFiles () {
	
	const config = vscode.workspace.getConfiguration();
	
	textfiles.extensions = ['.txt'];
	textfiles.filenames = [];
	
	vscode.extensions.all.forEach((extension) => {
	
		const packageJSON = extension.packageJSON;
		
		if (packageJSON.contributes && packageJSON.contributes.languages) {
			packageJSON.contributes.languages.forEach((language:any) => {
				
				if (language.extensions) push.apply(textfiles.extensions, language.extensions);
				if (language.filenames) push.apply(textfiles.filenames, language.filenames);
				
			});
		}
		
	});
	
	if (config.has('files.associations')) {
		textfiles.glob = createFindGlob(Object.keys(config.get<object>('files.associations', {})));
	} else textfiles.glob = null;
	
	textfiles.extensions.sort();
	textfiles.filenames.sort();
	
}

function hasUTF16BOM (buffer:Buffer) {
	
	return buffer[0] === 254 && buffer[1] === 255 || buffer[0] === 255 && buffer[1] === 254;
	
}

function normalizeBuffer (buffer:Buffer, maxLength:number) {
	
	const cache = Buffer.alloc(maxLength);
	const length = buffer.length;
	const utf16Fix = hasUTF16BOM(buffer) ? 1 : 0;
	let index = 0;
	let i = 0;
	
	while (i < length) {
		const value = buffer[i++];
		if (value === 13) {
			if (buffer[i + utf16Fix] !== 10) cache[index++] = 10;
			i += utf16Fix;
		} else cache[index++] = value;
	}
	
	return cache;
	
}

function parsePredefinedVariables (pathname:string) {
	
	// tslint:disable-next-line: only-arrow-functions
	return pathname.replace(findPlaceholders, function (match, placeholder, value) {
		
		const workspaceFolders = vscode.workspace.workspaceFolders;
		
		switch (placeholder) {
			case 'workspaceFolder':
				if (!workspaceFolders) {
					vscode.window.showErrorMessage('No workspace folder available!');
					return match;
				}
				value = parseInt(value, 10);
				if (value && !(value < workspaceFolders.length)) {
					vscode.window.showErrorMessage(`No workspace folder with index ${value} available!`);
					return match;
				}
				value = value || 0;
				return workspaceFolders.filter(({ index }) => index === value)[0].uri.fsPath;
			case 'workspaceFolderBasename':
				if (!workspaceFolders) {
					vscode.window.showErrorMessage('No workspace folder available!');
					return match;
				}
				value = value.replace(findEscapedEndingBrace, '}');
				const folder = workspaceFolders.filter(({ name }) => name === value)[0];
				if (!folder) {
					vscode.window.showErrorMessage(`No workspace folder with name '${value}' available!`);
					return match;
				}
				return folder.uri.fsPath;
		}
		
		vscode.window.showErrorMessage(`Variable '${match}' not valid!`);
		return match;
		
	});
	
}