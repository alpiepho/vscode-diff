//	Imports ____________________________________________________________________

import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

import { copyFile, mkdirsSync } from './@l13/fse';

import { CopyFilesJob, Diff, File } from '../types';
import { DiffMessage } from './DiffMessage';

//	Variables __________________________________________________________________



//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export class DiffCopy {
	
	private disposables:vscode.Disposable[] = [];
	
	public constructor (private msg:DiffMessage) {
		
		this.msg.on('copy:left', (data) => this.showCopyFromToDialog(data, 'A', 'B'));
		this.msg.on('copy:right', (data) => this.showCopyFromToDialog(data, 'B', 'A'));
		
	}
	
	public dispose () :void {
		
		while (this.disposables.length) {
			const disposable = this.disposables.pop();
			if (disposable) disposable.dispose();
		}
		
	}
	
	private copy (file:File, dest:string, callback:any) :void {
		
		const stat = fs.lstatSync(file.path);
		
		if (stat.isDirectory()) {
			if (!fs.existsSync(dest)) {
				try {
					mkdirsSync(dest);
					callback();
				} catch (error) {
					callback(error);
				}
			} else {
				if (fs.statSync(dest).isDirectory()) callback();
				else callback(new Error(`'${dest}' exists, but is not a folder!`));
			}
		} else if (stat.isFile()) {
			if (!fs.existsSync(dest) || fs.statSync(dest).isFile()) {
				copyFile(file.path, dest, (error:Error) => {
					
					if (error) callback(error);
					else callback();
					
				});
			} else callback(new Error(`'${dest}' exists, but is not a file!`));
		}
		
	}
	
	private showCopyFromToDialog (data:any, from:'A'|'B', to:'A'|'B') :void {
		
		const length = data.diffResult.diffs.length;
		
		if (!length) return;
		
		const text = `Copy ${length} file${length === 1 ? '' : 's'} to "${data.diffResult['path' + to]}"?`;
		
		vscode.window.showInformationMessage(text, { modal: true }, 'Copy').then((value) => {
			
			if (value) this.copyFromTo(data, from, to);
			
		});
		
	}
	
	private copyFromTo (data:any, from:'A'|'B', to:'A'|'B') :void {
		
		const folderTo = data.diffResult['path' + to];
		const diffs:Diff[] = data.diffResult.diffs;
		let length:number = diffs.length;
		const job:CopyFilesJob = {
			error: null,
			tasks: length,
			done: () => {
				
				if (!job.error) vscode.window.showInformationMessage(`Copied ${length} file${length === 1 ? '' : 's'} to '${folderTo}'`);
				
				if (!job.tasks) this.msg.send(from === 'A' ? 'copy:left' : 'copy:right', data);
				
			},
		};
		
		diffs.forEach((diff:Diff) => {
			
			if (diff.status === 'unchanged') return --job.tasks;
			
			const fileFrom:File = (<any>diff)['file' + from];
			
			if (fileFrom && fs.existsSync(fileFrom.path)) {
				const dest = path.join(folderTo, fileFrom.relative);
				this.copy(fileFrom, dest, (error:null|Error) => {
					
					--job.tasks;
					
					if (error) {
						job.error = error;
						vscode.window.showErrorMessage(error.message);
					} else {
						diff.status = 'unchanged';
						if (!(<any>diff)['file' + to]) {
							(<any>diff)['file' + to] = {
								folder: folderTo,
								path: dest,
								relative: fileFrom.relative,
								type: fileFrom.type,
							};
						}
					}
					
					if (!job.tasks) job.done();
					
				});
			} else {
				--job.tasks;
				--length;
				if (!job.tasks) job.done();
			}
			
		});
		
	}
	
}

//	Functions __________________________________________________________________

