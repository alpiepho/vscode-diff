//	Imports ____________________________________________________________________

import { ViewModel } from '../../@l13/component/view-model.abstract';

//	Variables __________________________________________________________________

const SEARCHTERM = Symbol.for('searchterm');
const ERROR = Symbol.for('error');



//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export class L13DiffSearchViewModel extends ViewModel {
	
	public disabled:boolean = false;
	
	public useRegExp:boolean = false;
	
	public useCaseSensitive:boolean = false;
	
	public useFiles:boolean = true;
	
	public useFolders:boolean = true;
	
	private [SEARCHTERM]:string = '';
	
	public get searchterm () {
		
		return this[SEARCHTERM];
		
	}
	
	public set searchterm (value) {
		
		this[SEARCHTERM] = value;
		if (!value) this.error = null;
		this.requestUpdate();
		
	}
	
	private [ERROR]:null|string = '';
	
	public get error () {
		
		return this[ERROR];
		
	}
	
	public set error (value) {
		
		this[ERROR] = value;
		this.requestUpdate();
		
	}
	
	public clearSearchterm () {
		
		this.searchterm = '';
		
	}
	
	public disable () :Promise<any> {
		
		this.disabled = true;
		
		return this.requestUpdate();
		
	}
	
	public enable () :Promise<any> {
		
		this.disabled = false;
		
		return this.requestUpdate();
		
	}
	
}

//	Functions __________________________________________________________________

