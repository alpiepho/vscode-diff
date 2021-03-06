//	Imports ____________________________________________________________________

import * as fs from 'fs';

//	Variables __________________________________________________________________



//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export type Callback = (error?:null|Error, result?:StatsMap) => void;

export type Dictionary<T> = { [token:string]:T };

export type DiffStats = {
	total:number,
	
	files:number,
	folders:number,
	symlinks:number,
	
	conflicting:number,
	deleted:number,
	modified:number,
	unchanged:number,
	untracked:number,
	
	eol:number,
};

export type Diff = {
	id:string,
	status:'conflicting'|'deleted'|'modified'|'unchanged'|'untracked',
	type:'file'|'folder'|'symlink'|'mixed',
	ignoredEOL:boolean,
	basename:string,
	dirname:string,
	extname:string,
	fileA:null|File,
	fileB:null|File,
};

export type File = {
	path:string,
	folder:string,
	relative:string,
	stat?:fs.Stats,
	type?:'file'|'folder'|'symlink',
};

export type WalkTreeJob = {
	error:null|Error,
	ignore:null|RegExp,
	tasks:number,
	result:StatsMap,
	done:(error?:Error) => void,
};

export type CopyFilesJob = {
	error:null|Error,
	tasks:number,
	done:(error?:Error) => void,
};

export type Options = {
	ignore?:string[],
};

export type StatsMap = { [pathname:string]:File };

export type Uri = {
	fsPath:string,
};

//	Functions __________________________________________________________________

