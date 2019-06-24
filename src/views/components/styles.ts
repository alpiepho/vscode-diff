// tslint:disable
export default {
	"l13-diff-actions/l13-diff-actions.css": ":host{cursor:default;display:block;text-align:center;user-select:none}:host>button{background:transparent;border:0;height:21px;margin:0 5px 0 5px;padding:0 0 0 0;position:relative;width:21px}:host>button::before{background:var(--vscode-foreground);content:'';height:100%;left:0;-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;position:absolute;top:0;width:100%}:host>button:focus{outline:solid 1px var(--vscode-focusBorder, transparent)}:host>button:hover{cursor:pointer}:host>button:hover::before{background:var(--vscode-button-hoverBackground)}:host>button[disabled]{cursor:default;opacity:0.3}:host>button[disabled]:hover::before{background:var(--vscode-foreground) !important}:host>button#l13_copy_left{width:42px}:host>button#l13_copy_left::before{-webkit-mask-image:url(\"copy-left.svg\");mask-image:url(\"copy-left.svg\")}:host>button#l13_select_deleted::before{-webkit-mask-image:url(\"select-deleted.svg\");mask-image:url(\"select-deleted.svg\")}:host>button#l13_select_deleted:hover::before{background:var(--vscode-gitDecoration-deletedResourceForeground)}:host>button#l13_select_modified::before{-webkit-mask-image:url(\"select-modified.svg\");mask-image:url(\"select-modified.svg\")}:host>button#l13_select_modified:hover::before{background:var(--vscode-gitDecoration-modifiedResourceForeground)}:host>button#l13_select_untracked::before{-webkit-mask-image:url(\"select-untracked.svg\");mask-image:url(\"select-untracked.svg\")}:host>button#l13_select_untracked:hover::before{background:var(--vscode-gitDecoration-untrackedResourceForeground)}:host>button#l13_select_all::before{-webkit-mask-image:url(\"select-all.svg\");mask-image:url(\"select-all.svg\")}:host>button#l13_select_all:hover::before{background:var(--vscode-button-hoverBackground)}:host>button#l13_copy_right{width:42px}:host>button#l13_copy_right::before{-webkit-mask-image:url(\"copy-right.svg\");mask-image:url(\"copy-right.svg\")}\n",
	"l13-diff-compare/l13-diff-compare.css": ":host{display:block;padding-right:10px;text-align:right;user-select:none}button{background:var(--vscode-button-background);border:none;box-sizing:border-box;color:var(--vscode-button-foreground);cursor:pointer;font-size:0.8125rem;padding:2px 14px 3px 14px;position:relative;z-index:1}button:hover{background:var(--vscode-button-hoverBackground)}button[disabled]{opacity:0.3;cursor:default}button[disabled]:hover{background:var(--vscode-button-background) !important}\n",
	"l13-diff-input/l13-diff-input.css": ":host{position:relative;user-select:none}:host>input{background:var(--vscode-input-background);border:none;box-sizing:border-box;color:var(--vscode-input-foreground);display:block;font-size:0.8125rem;outline:solid 1px var(--vscode-input-border, transparent);outline-offset:-1px;padding:4px 35px 5px 7px;width:100%;z-index:0}:host>input::selection{background:var(--vscode-selection-background, var(--l13-selection-background))}:host>input:focus{outline-color:var(--vscode-focusBorder, transparent)}:host>input.-error{outline-color:var(--vscode-inputValidation-errorBorder, #c00)}:host>button{background:transparent;border:0;cursor:pointer;height:18px;margin-top:-10px;padding:0 0 0 0;position:absolute;right:7px;top:50%;width:21px}:host>button::before{background:var(--vscode-foreground);content:'';height:100%;left:0;-webkit-mask-image:url(\"folder.svg\");mask-image:url(\"folder.svg\");-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;position:absolute;top:0;width:100%}:host>button:focus{outline:solid 1px var(--vscode-focusBorder, transparent)}:host>button:hover::before{background:var(--vscode-button-hoverBackground)}:host>button[disabled]{cursor:default;opacity:0.3}:host>button[disabled]:hover::before{background:var(--vscode-foreground) !important}\n",
	"l13-diff-intro/l13-diff-intro.css": ":host{background:var(--l13-intro-backgroundUrl) no-repeat;background-size:260px 260px;background-position:50% 0;padding:270px 0 0 0;display:block;min-width:260px;text-align:center;user-select:none}l13-diff-shortcuts{display:inline-table}dl{color:var(--l13-intro-color);cursor:default;display:table-row;opacity:0.8}dt{color:var(--l13-intro-color);display:table-cell;letter-spacing:.04em;padding:0 5px 1em 0;text-align:right}dd{display:table-cell;padding:0 0 1em 5px;text-align:left}div.-keybinding{align-items:center;display:flex;line-height:10px}span.-key{background-color:var(--l13-intro-keyBackgroundColor);border:1px solid var(--l13-intro-keyBorderColor);border-bottom-color:var(--l13-intro-shadow);border-radius:3px;box-shadow:inset 0 -1px 0 var(--l13-intro-shadow);color:var(--l13-intro-color);display:inline-block;font-size:11px;line-height:10px;margin:0 2px;padding:3px 5px;vertical-align:middle}\n",
	"l13-diff-list/l13-diff-list.css": ":host{display:block;margin:0 0 0 0;overflow:auto;user-select:none}l13-diff-list-body{display:block;width:100%}l13-diff-list-body.-focus l13-diff-list-row.-selected{background:var(--vscode-list-activeSelectionBackground);color:var(--vscode-list-activeSelectionForeground)}l13-diff-list-body.-focus l13-diff-list-row.-selected l13-diff-list-file::before{background:var(--vscode-list-activeSelectionForeground)}l13-diff-list-row{display:flex;width:100%}l13-diff-list-row:hover{background:var(--vscode-list-hoverBackground);color:var(--vscode-list-hoverForeground)}l13-diff-list-row.-selected{background:var(--vscode-list-inactiveSelectionBackground);color:var(--vscode-list-inactiveSelectionForeground)}l13-diff-list-row.-selected l13-diff-list-file::before{background:var(--vscode-list-inactiveSelectionForeground, var(--vscode-foreground))}l13-diff-list-row.-deleted{color:var(--vscode-gitDecoration-deletedResourceForeground)}l13-diff-list-row.-modified{color:var(--vscode-gitDecoration-modifiedResourceForeground)}l13-diff-list-row.-conflicting{color:var(--vscode-gitDecoration-conflictingResourceForeground)}l13-diff-list-row.-untracked{color:var(--vscode-gitDecoration-untrackedResourceForeground)}l13-diff-list-row.-error{background:var(--vscode-list-errorForeground);color:#ffffff}l13-diff-list-row.-error l13-diff-list-file::before{background:#ffffff}l13-diff-list-file{box-sizing:border-box;overflow:hidden;padding:2px 0 3px 42px;position:relative;width:50%}l13-diff-list-file:first-child{padding-right:15px;padding-left:31px}l13-diff-list-file:first-child.-file::before,l13-diff-list-file:first-child.-folder::before{left:10px}l13-diff-list-file.-file::before,l13-diff-list-file.-folder::before{background:var(--vscode-foreground);content:'';display:block;height:16px;left:21px;-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;position:absolute;top:2px;width:16px}l13-diff-list-file.-file::before{-webkit-mask-image:url(\"file.svg\");mask-image:url(\"file.svg\")}l13-diff-list-file.-folder::before{-webkit-mask-image:url(\"folder.svg\");mask-image:url(\"folder.svg\")}l13-diff-list-file span.-dirname{opacity:0.5}\n",
	"l13-diff-menu/l13-diff-menu.css": ":host{background:var(--vscode-sideBar-background);box-shadow:0px 5px 8px var(--vscode-widget-shadow, transparent);box-sizing:border-box;display:block}:host>l13-diff-menu-lists>ul{border-top:solid 1px var(--vscode-pickerGroup-border);list-style-type:none;margin:0 0 0 0;padding:0 0 0 0}:host>l13-diff-menu-lists>ul:first-child{border:none}:host>l13-diff-menu-lists>ul::before{color:var(--vscode-pickerGroup-foreground);content:attr(data-text);float:right;padding:4px 10px 5px 10px}:host>l13-diff-menu-lists>ul>li{color:var(--vscode-foreground);cursor:pointer;margin:0 0 0 0;padding:4px 10px 5px 10px;user-select:none}:host>l13-diff-menu-lists>ul>li.-active,:host>l13-diff-menu-lists>ul>li.-selected,:host>l13-diff-menu-lists>ul>li:hover{background:var(--vscode-list-hoverBackground);color:var(--vscode-list-hoverForeground)}\n",
	"l13-diff-panel/l13-diff-panel.css": ":host{background:var(--vscode-sideBar-background);color:var(--vscode-foreground);display:block;position:relative;width:100%}l13-diff-loading{bottom:0;display:block;height:2px;left:0;overflow:hidden;position:absolute;right:0;width:100%;z-index:3}l13-diff-loading::after{animation:loading 2s linear infinite;background:linear-gradient(90deg, transparent 0%, var(--vscode-progressBar-background) 20%, var(--vscode-progressBar-background) 80%, transparent 100%) no-repeat;bottom:0;content:'';height:2px;position:absolute;left:0;width:5%}@keyframes loading{0%{left:0;width:3%}50%{width:5%}100%{left:100%;width:3%}}\n",
	"l13-diff-search/l13-diff-search.css": ":host{background:var(--vscode-editorWidget-background);box-shadow:0 2px 8px var(--vscode-widget-shadow);box-sizing:border-box;display:block;height:34px;max-width:calc(100% - 38px);min-width:232px;padding:4px 4px 5px 8px;position:relative;user-select:none;width:232px}#l13_resizer{background:var(--vscode-editorWidget-resizeBorder, var(--l13-searchWidget-borderColor));cursor:col-resize;display:block;height:100%;left:0;position:absolute;top:0;width:3px}div.l13-input{margin:0 22px 0 0;position:relative}div.l13-message{background:var(--vscode-inputValidation-errorBackground);box-sizing:border-box;border:solid 1px var(--vscode-inputValidation-errorBorder);color:var(--vscode-inputValidation-errorForeground);font-size:12px;line-height:17px;margin:-1px 0 0 0;padding:.4em .4em .4em .4em;width:100%}input[type=\"text\"]{background:var(--vscode-input-background);border:none;box-sizing:border-box;color:var(--vscode-input-foreground);display:block;font-size:0.8125rem;height:25px;outline:solid 1px var(--vscode-input-border, transparent);outline-offset:-1px;margin:0 0 0 0;padding:4px 46px 5px 7px;width:100%;z-index:0}input[type=\"text\"]::selection{background:var(--vscode-selection-background, var(--l13-selection-background))}input[type=\"text\"]:focus{outline-color:var(--vscode-focusBorder, transparent)}input[type=\"text\"].-error{outline-color:var(--vscode-inputValidation-errorBorder)}input[type=checkbox]{-webkit-appearance:none;appearance:none;box-sizing:border-box;display:inline-block;height:20px;margin:0 0 0 0;outline:solid 1px transparent;outline-offset:-1px;padding:0 0 0 0;position:absolute;top:3px;width:20px}input[type=checkbox]:focus{outline-color:var(--vscode-focusBorder, transparent)}input[type=checkbox]::after{background:var(--vscode-settings-checkboxForeground, var(--vscode-foreground));content:'';height:100%;left:0;-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;opacity:0.7;position:absolute;top:0;width:100%}input[type=checkbox]#l13_case_sensitive{right:27px}input[type=checkbox]#l13_case_sensitive::after{-webkit-mask-image:url(\"case-sensitive.svg\");mask-image:url(\"case-sensitive.svg\")}input[type=checkbox]#l13_use_regexp{right:5px}input[type=checkbox]#l13_use_regexp::after{-webkit-mask-image:url(\"regexp.svg\");mask-image:url(\"regexp.svg\")}input[type=checkbox]:checked{outline-color:var(--vscode-inputOption-activeBorder)}input[type=checkbox]:checked::after{opacity:1}button{background:transparent;border:0;height:20px;margin:0 0 0 0;padding:0 0 0 0;position:absolute;right:4px;top:7px;width:20px}button::before{background:var(--vscode-foreground);content:'';height:100%;left:0;-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;position:absolute;top:0;width:100%}button:focus{outline:solid 1px var(--vscode-focusBorder, transparent)}button:hover{background:var(--l13-searchButton-backgroundColor-hover);cursor:pointer}button[disabled]{opacity:0.3;cursor:default}button[disabled]:hover::before{background:var(--vscode-foreground) !important}button#l13_close::before{-webkit-mask-image:url(\"close.svg\");mask-image:url(\"close.svg\")}\n",
	"l13-diff-swap/l13-diff-swap.css": ":host{display:block;user-select:none}:host>button{background:transparent;border:0;cursor:pointer;height:21px;margin:2px 0 0 0;padding:0 0 0 0;position:relative;width:21px}:host>button::before{background:var(--vscode-foreground);content:'';height:100%;left:0;-webkit-mask-image:url(\"swap.svg\");mask-image:url(\"swap.svg\");-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;position:absolute;top:0;width:100%}:host>button:focus{outline:solid 1px var(--vscode-focusBorder, transparent)}:host>button:hover::before{background:var(--vscode-button-hoverBackground)}:host>button[disabled]{cursor:default;opacity:0.3}:host>button[disabled]:hover::before{background:var(--vscode-foreground) !important}\n",
	"l13-diff-views/l13-diff-views.css": ":host{cursor:default;display:block;padding-left:10px;user-select:none}:host>input[type=\"checkbox\"]{-webkit-appearance:none;appearance:none;background:transparent;cursor:pointer;height:21px;margin:0 10px 0 0;padding:0 0 0 0;position:relative;width:21px}:host>input[type=\"checkbox\"]::before{background:var(--vscode-foreground);content:'';height:100%;left:0;-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;position:absolute;top:0;width:100%}:host>input[type=\"checkbox\"]:focus{outline:solid 1px var(--vscode-focusBorder, transparent)}:host>input[type=\"checkbox\"]:hover{cursor:pointer}:host>input[type=\"checkbox\"]:hover::before{background:var(--vscode-button-hoverBackground)}:host>input[type=\"checkbox\"][disabled]{opacity:0.3;cursor:default}:host>input[type=\"checkbox\"][disabled]:hover::before{background:var(--vscode-foreground) !important}:host>input[type=\"checkbox\"]:checked::after{background:var(--vscode-settings-checkboxForeground, var(--vscode-foreground));content:'';height:10px;-webkit-mask-image:url(\"checked.svg\");mask-image:url(\"checked.svg\");-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;right:-5px;position:absolute;bottom:-5px;width:10px}:host>input[type=\"checkbox\"]#l13_show_unchanged::before{-webkit-mask-image:url(\"show-unchanged.svg\");mask-image:url(\"show-unchanged.svg\")}:host>input[type=\"checkbox\"]#l13_show_unchanged:hover::before{background:var(--vscode-button-hoverBackground)}:host>input[type=\"checkbox\"]#l13_show_deleted::before{-webkit-mask-image:url(\"show-deleted.svg\");mask-image:url(\"show-deleted.svg\")}:host>input[type=\"checkbox\"]#l13_show_deleted:hover::before{background:var(--vscode-gitDecoration-deletedResourceForeground)}:host>input[type=\"checkbox\"]#l13_show_modified::before{-webkit-mask-image:url(\"show-modified.svg\");mask-image:url(\"show-modified.svg\")}:host>input[type=\"checkbox\"]#l13_show_modified:hover::before{background:var(--vscode-gitDecoration-modifiedResourceForeground)}:host>input[type=\"checkbox\"]#l13_show_untracked::before{-webkit-mask-image:url(\"show-untracked.svg\");mask-image:url(\"show-untracked.svg\")}:host>input[type=\"checkbox\"]#l13_show_untracked:hover::before{background:var(--vscode-gitDecoration-untrackedResourceForeground)}\n",
	"l13-diff/l13-diff.css": ":host{display:flex;font-size:0.8125rem;flex-direction:column;height:100%;max-height:100%}l13-diff-panel{background:var(--vscode-sideBar-background);position:relative;z-index:1}l13-diff-folders{background:var(--vscode-sideBar-background);display:flex;position:relative;z-index:3}l13-diff-input{box-sizing:border-box;margin:10px 10px 0 16px;position:relative;width:50%;z-index:2}l13-diff-input:first-child{margin:10px 15px 0 10px}l13-diff-menu{max-height:50vh;overflow:auto;position:absolute;width:100%;z-index:4}l13-diff-swap{left:calc(50% - 10px);position:absolute;top:10px;z-index:2}l13-diff-tools{background:var(--vscode-sideBar-background);display:flex;padding:10px 0 7px 0;position:relative;z-index:2}l13-diff-views,l13-diff-compare{width:33%}l13-diff-actions{width:34%}l13-diff-widgets{display:block;position:relative;z-index:1}l13-diff-search{position:absolute;right:28px;top:0}l13-diff-search.-movein{animation:movein 0.1s linear}l13-diff-search.-moveout{animation:moveout 0.1s linear}@keyframes movein{0%{top:-42px}100%{top:0}}@keyframes moveout{0%{top:0}100%{top:-42px}}l13-diff-list{position:relative;transition:margin-top 0.1s linear;z-index:0}l13-diff-list:focus{outline:solid 1px var(--vscode-focusBorder, transparent);outline-offset:-1px}l13-diff-list.-widgets{margin-top:34px}l13-diff-intro{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}::-webkit-scrollbar{height:10px;width:10px}::-webkit-scrollbar-thumb{background-color:var(--vscode-scrollbarSlider-background)}::-webkit-scrollbar-thumb:hover{background-color:var(--vscode-scrollbarSlider-hoverBackground)}::-webkit-scrollbar-thumb:active{background-color:var(--vscode-scrollbarSlider-activeBackground)}\n"
};