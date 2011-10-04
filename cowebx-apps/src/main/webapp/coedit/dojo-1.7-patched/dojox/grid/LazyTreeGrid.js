/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","./_View","./TreeGrid","./cells/tree","./LazyTreeGridStoreModel"],function(_1,_2,_3){_1.declare("dojox.grid._LazyExpando",[_2._Widget,_2._TemplatedMixin],{itemId:"",cellIdx:-1,view:null,rowIdx:-1,expandoCell:null,level:0,open:false,templatePath:_1.moduleUrl("dojox.grid","resources/Expando.html"),onToggle:function(_4){this.setOpen(!this.view.grid.cache.getExpandoStatusByRowIndex(this.rowIdx));try{_1.stopEvent(_4);}catch(e){}},setOpen:function(_5){var g=this.view.grid,_6=g.cache.getItemByRowIndex(this.rowIdx);if(!g.treeModel.mayHaveChildren(_6)){g.stateChangeNode=null;return;}if(_6&&!g._loading){g.stateChangeNode=this.domNode;g.cache.updateCache(this.rowIdx,{"expandoStatus":_5});g.expandoFetch(this.rowIdx,_5);this.open=_5;}this._updateOpenState(_6);},_updateOpenState:function(_7){var _8=this.view.grid;if(_7&&_8.treeModel.mayHaveChildren(_7)){var _9=_8.cache.getExpandoStatusByRowIndex(this.rowIdx);this.expandoInner.innerHTML=_9?"-":"+";_1.toggleClass(this.domNode,"dojoxGridExpandoOpened",_9);_2.setWaiState(this.domNode.parentNode,"expanded",_9);}},setRowNode:function(_a,_b,_c){if(this.cellIdx<0||!this.itemId){return false;}this._initialized=false;this.view=_c;this.rowIdx=_a;this.expandoCell=_c.structure.cells[0][this.cellIdx];var d=this.domNode;if(d&&d.parentNode&&d.parentNode.parentNode){this._tableRow=d.parentNode.parentNode;}_1.style(this.domNode,"marginLeft",(this.level*1.125)+"em");this._updateOpenState(_c.grid.cache.getItemByRowIndex(this.rowIdx));return true;}});_1.declare("dojox.grid._TreeGridContentBuilder",_3.grid._ContentBuilder,{generateHtml:function(_d,_e){var _f=this.getTableArray(),_10=this.grid,v=this.view,_11=v.structure.cells,_12=_10.getItem(_e),_13=0,_14=_10.cache.getTreePathByRowIndex(_e),_15=[],_16=[];_3.grid.util.fire(this.view,"onBeforeRow",[_e,_11]);if(_12!==null&&_14!==null){_15=_14.split("/");_13=_15.length-1;_16[0]="dojoxGridRowToggle-"+_15.join("-");if(!_10.treeModel.mayHaveChildren(_12)){_16.push("dojoxGridNoChildren");}}for(var j=0,row;(row=_11[j]);j++){if(row.hidden||row.header){continue;}var tr="<tr style=\"\" class=\""+_16.join(" ")+"\" dojoxTreeGridPath=\""+_15.join("/")+"\" dojoxTreeGridBaseClasses=\""+_16.join(" ")+"\">";_f.push(tr);var k=0,_17=this._getColSpans(_13);var _18=0,_19=[];if(_17){_1.forEach(_17,function(c){for(var i=0,_1a;(_1a=row[i]);i++){if(i>=c.start&&i<=c.end){_18+=this._getCellWidth(row,i);}}_19.push(_18);_18=0;},this);}for(var i=0,_1b,m,cc,cs;(_1b=row[i]);i++){m=_1b.markup;cc=_1b.customClasses=[];cs=_1b.customStyles=[];if(_17&&_17[k]&&(i>=_17[k].start&&i<=_17[k].end)){var _1c=_17[k].primary?_17[k].primary:_17[k].start;if(i==_1c){m[5]=_1b.formatAtLevel(_15,_12,_13,false,_16[0],cc,_e);m[1]=cc.join(" ");var pbm=_1.marginBox(_1b.getHeaderNode()).w-_1.contentBox(_1b.getHeaderNode()).w;cs=_1b.customStyles=["width:"+(_19[k]-pbm)+"px"];m[3]=cs.join(";");_f.push.apply(_f,m);}else{if(i==_17[k].end){k++;continue;}else{continue;}}}else{m[5]=_1b.formatAtLevel(_15,_12,_13,false,_16[0],cc,_e);m[1]=cc.join(" ");m[3]=cs.join(";");_f.push.apply(_f,m);}}_f.push("</tr>");}_f.push("</table>");return _f.join("");},_getColSpans:function(_1d){var _1e=this.grid.colSpans;if(_1e&&(_1e[_1d])){return _1e[_1d];}else{return null;}},_getCellWidth:function(_1f,_20){var _21=_1f[_20].getHeaderNode();if(_20==_1f.length-1||_1.every(_1f.slice(_20+1),function(_22){return _22.hidden;})){var _23=_1.position(_1f[_20].view.headerContentNode.firstChild);return _23.x+_23.w-_1.position(_21).x;}else{var _24=_1f[_20+1].getHeaderNode();return _1.position(_24).x-_1.position(_21).x;}}});_1.declare("dojox.grid._TreeGridView",[_3.grid._View],{_contentBuilderClass:_3.grid._TreeGridContentBuilder,postCreate:function(){this.inherited(arguments);this._expandos={};this.connect(this.grid,"_cleanupExpandoCache","_cleanupExpandoCache");},_cleanupExpandoCache:function(_25,_26,_27){if(_25==-1){return;}_1.forEach(this.grid.layout.cells,function(_28){if(_28.openStates&&_26 in _28.openStates){delete _28.openStates[_26];}});for(var i in this._expandos){if(this._expandos[i]){this._expandos[i].destroy();}}this._expandos={};},onAfterRow:function(_29,_2a,_2b){_1.query("span.dojoxGridExpando",_2b).forEach(function(n){if(n&&n.parentNode){var _2c,_2d,_2e=this.grid._by_idx;if(_2e&&_2e[_29]&&_2e[_29].idty){_2c=_2e[_29].idty;_2d=this._expandos[_2c];}if(_2d){_1.place(_2d.domNode,n,"replace");_2d.itemId=n.getAttribute("itemId");_2d.cellIdx=parseInt(n.getAttribute("cellIdx"),10);if(isNaN(_2d.cellIdx)){_2d.cellIdx=-1;}}else{_2d=_1.parser.parse(n.parentNode)[0];if(_2c){this._expandos[_2c]=_2d;}}if(!_2d.setRowNode(_29,_2b,this)){_2d.domNode.parentNode.removeChild(_2d.domNode);}}},this);this.inherited(arguments);}});_3.grid.cells.LazyTreeCell=_1.mixin(_1.clone(_3.grid.cells.TreeCell),{formatAtLevel:function(_2f,_30,_31,_32,_33,_34,_35){if(!_30){return this.formatIndexes(_35,_2f,_30,_31);}if(!_1.isArray(_2f)){_2f=[_2f];}var _36="";var ret="";if(this.isCollapsable){var _37=this.grid.store,id="";if(_30&&_37.isItem(_30)){id=_37.getIdentity(_30);}_34.push("dojoxGridExpandoCell");ret="<span "+_1._scopeName+"Type=\"dojox.grid._LazyExpando\" level=\""+_31+"\" class=\"dojoxGridExpando\""+"\" toggleClass=\""+_33+"\" itemId=\""+id+"\" cellIdx=\""+this.index+"\"></span>";}_36=ret+this.formatIndexes(_35,_2f,_30,_31);if(this.grid.focus.cell&&this.index==this.grid.focus.cell.index&&_2f.join("/")==this.grid.focus.rowIndex){_34.push(this.grid.focus.focusClass);}return _36;},formatIndexes:function(_38,_39,_3a,_3b){var _3c=this.grid.edit.info,d=this.get?this.get(_39[0],_3a,_39):(this.value||this.defaultValue);if(this.editable&&(this.alwaysEditing||(_3c.rowIndex==_39[0]&&_3c.cell==this))){return this.formatEditing(d,_38,_39);}else{return this._defaultFormat(d,[d,_38,_3b,this]);}}});_1.declare("dojox.grid._LazyTreeLayout",_3.grid._Layout,{setStructure:function(_3d){var s=_3d;var g=this.grid;if(g&&!_1.every(s,function(i){return ("cells" in i);})){s=arguments[0]=[{cells:[s]}];}if(s.length==1&&s[0].cells.length==1){s[0].type="dojox.grid._TreeGridView";this._isCollapsable=true;s[0].cells[0][this.grid.expandoCell].isCollapsable=true;}this.inherited(arguments);},addCellDef:function(_3e,_3f,_40){var obj=this.inherited(arguments);return _1.mixin(obj,_3.grid.cells.LazyTreeCell);}});_1.declare("dojox.grid.TreeGridItemCache",null,{unInit:true,items:null,constructor:function(_41){this.rowsPerPage=_41.rowsPerPage;this._buildCache(_41.rowsPerPage);},_buildCache:function(_42){this.items=[];for(var i=0;i<_42;i++){this.cacheItem(i,{item:null,treePath:i+"",expandoStatus:false});}},cacheItem:function(_43,_44){this.items[_43]=_1.mixin({item:null,treePath:"",expandoStatus:false},_44);},insertItem:function(_45,_46){this.items.splice(_45,0,_1.mixin({item:null,treePath:"",expandoStatus:false},_46));},initCache:function(_47){if(!this.unInit){return;}this._buildCache(_47);this.unInit=false;},getItemByRowIndex:function(_48){return this.items[_48]?this.items[_48].item:null;},getItemByTreePath:function(_49){for(var i=0,len=this.items.length;i<len;i++){if(this.items[i].treePath===_49){return this.items[i].item;}}return null;},getTreePathByRowIndex:function(_4a){return this.items[_4a]?this.items[_4a].treePath:null;},getExpandoStatusByRowIndex:function(_4b){return this.items[_4b]?this.items[_4b].expandoStatus:null;},getInfoByItem:function(_4c){for(var i=0,len=this.items.length;i<len;i++){if(this.items[i].item==_4c){return _1.mixin({rowIdx:i},this.items[i]);}}return null;},updateCache:function(_4d,_4e){if(this.items[_4d]){_1.mixin(this.items[_4d],_4e);}},deleteItem:function(_4f){if(this.items[_4f]){this.items.splice(_4f,1);}},cleanChildren:function(_50){var _51=this.getTreePathByRowIndex(_50);for(var i=this.items.length-1;i>=0;i--){if(this.items[i].treePath.indexOf(_51)===0&&this.items[i].treePath!==_51){this.items.splice(i,1);}}},emptyCache:function(){this.unInit=true;this._buildCache(this.rowsPerPage);},cleanupCache:function(){this.items=null;}});_1.declare("dojox.grid.LazyTreeGrid",_3.grid.TreeGrid,{treeModel:null,_layoutClass:_3.grid._LazyTreeLayout,colSpans:null,postCreate:function(){this.inherited(arguments);this.cache=new _3.grid.TreeGridItemCache(this);if(!this.treeModel||!(this.treeModel instanceof _2.tree.ForestStoreModel)){throw new Error("dojox.grid.LazyTreeGrid: must use a treeModel and treeModel must be an instance of dijit.tree.ForestStoreModel");}_1.addClass(this.domNode,"dojoxGridTreeModel");_1.setSelectable(this.domNode,this.selectable);},createManagers:function(){this.rows=new _3.grid._RowManager(this);this.focus=new _3.grid._FocusManager(this);this.edit=new _3.grid._EditManager(this);},createSelection:function(){this.selection=new _3.grid.DataSelection(this);},setModel:function(_52){if(!_52){return;}this._setModel(_52);this._refresh(true);},setStore:function(_53,_54,_55){if(!_53){return;}this._setQuery(_54,_55);this.treeModel.query=_54;this.treeModel.store=_53;this.treeModel.root.children=[];this.setModel(this.treeModel);},_setQuery:function(_56,_57){this.inherited(arguments);this.treeModel.query=_56;},destroy:function(){this._cleanup();this.inherited(arguments);},_cleanup:function(){this.cache.emptyCache();this._cleanupExpandoCache();},setSortIndex:function(_58,_59){if(this.canSort(_58+1)){this._cleanup();}this.inherited(arguments);},_refresh:function(_5a){this._cleanup();this.inherited(arguments);},render:function(){this.inherited(arguments);this.setScrollTop(this.scrollTop);},_onNew:function(_5b,_5c){var _5d=false;var _5e;if(_5c&&this.store.isItem(_5c.item)&&_1.some(this.treeModel.childrenAttrs,function(c){return c===_5c.attribute;})){_5d=true;_5e=this.cache.getInfoByItem(_5c.item);}if(!_5d){this.inherited(arguments);var _5f=this.cache.items;var _60=(parseInt(_5f[_5f.length-1].treePath.split("/")[0],10)+1)+"";this.cache.insertItem(this.get("rowCount"),{item:_5b,treePath:_60,expandoStatus:false});}else{if(_5e&&_5e.expandoStatus&&_5e.rowIdx>=0){this.expandoFetch(_5e.rowIdx,false);this.expandoFetch(_5e.rowIdx,true);}else{if(_5e&&_5e.rowIdx){this.updateRow(_5e.rowIdx);}}}},_onDelete:function(_61){this._pages=[];this._bop=-1;this._eop=-1;this._refresh();},_cleanupExpandoCache:function(_62,_63,_64){},_fetch:function(_65,_66){_65=_65||0;this.reqQueue=[];var i=0,_67=[];var _68=Math.min(this.rowsPerPage,this.cache.items.length-_65);for(i=_65;i<_68;i++){if(this.cache.getItemByRowIndex(i)){_67.push(this.cache.getItemByRowIndex(i));}else{break;}}if(_67.length===_68){this._onFetchComplete(_67,{startRowIdx:_65,count:_68});}else{this.reqQueueIndex=0;var _69="",_6a="",_6b=_65,_6c=this.cache.getTreePathByRowIndex(_65);_68=0;for(i=_65+1;i<_65+this.rowsPerPage;i++){if(!this.cache.getTreePathByRowIndex(i)){break;}_69=this.cache.getTreePathByRowIndex(i-1).split("/").length-1;_6a=this.cache.getTreePathByRowIndex(i).split("/").length-1;if(_69!==_6a){this.reqQueue.push({startTreePath:_6c,startRowIdx:_6b,count:_68+1});_68=0;_6b=i;_6c=this.cache.getTreePathByRowIndex(i);}else{_68++;}}this.reqQueue.push({startTreePath:_6c,startRowIdx:_6b,count:_68+1});var len=this.reqQueue.length;for(i=0;i<len;i++){this._fetchItems(i,_1.hitch(this,"_onFetchBegin"),_1.hitch(this,"_onFetchComplete"),_1.hitch(this,"_onFetchError"));}}},_fetchItems:function(idx,_6d,_6e,_6f){if(!this._loading){this._loading=true;this.showMessage(this.loadingMessage);}var _70=this.reqQueue[idx].startTreePath.split("/").length-1;this._pending_requests[this.reqQueue[idx].startRowIdx]=true;if(_70===0){this.store.fetch({start:parseInt(this.reqQueue[idx].startTreePath,10),startRowIdx:this.reqQueue[idx].startRowIdx,count:this.reqQueue[idx].count,query:this.query,sort:this.getSortProps(),queryOptions:this.queryOptions,onBegin:_6d,onComplete:_6e,onError:_6f});}else{var _71=this.reqQueue[idx].startTreePath;var _72=_71.substring(0,_71.lastIndexOf("/"));var _73=_71.substring(_71.lastIndexOf("/")+1);var _74=this.cache.getItemByTreePath(_72);if(!_74){throw new Error("Lazy loading TreeGrid on fetch error:");}var _75=this.store.getIdentity(_74);this.queryObj={start:parseInt(_73,10),startRowIdx:this.reqQueue[idx].startRowIdx,count:this.reqQueue[idx].count,parentId:_75,sort:this.getSortProps()};this.treeModel.getChildren(_74,_6e,_6f,this.queryObj);}},_onFetchBegin:function(_76,_77){this.cache.initCache(_76);_76=this.cache.items.length;this.inherited(arguments);},filter:function(_78,_79){this.cache.emptyCache();this.inherited(arguments);},_onFetchComplete:function(_7a,_7b,_7c){var _7d="",_7e,_7f,_80;if(_7b){_7e=_7b.startRowIdx;_7f=_7b.count;_80=0;}else{_7e=this.queryObj.startRowIdx;_7f=this.queryObj.count;_80=this.queryObj.start;}for(var i=0;i<_7f;i++){_7d=this.cache.getTreePathByRowIndex(_7e+i);if(_7d){if(!this.cache.getItemByRowIndex(_7e+i)){this.cache.cacheItem(_7e+i,{item:_7a[_80+i],treePath:_7d,expandoStatus:false});}}}this._pending_requests[_7e]=false;if(!this.scroller){return;}var len=Math.min(_7f,_7a.length);for(i=0;i<len;i++){this._addItem(_7a[_80+i],_7e+i,true);}this.updateRows(_7e,len);if(this._lastScrollTop){this.setScrollTop(this._lastScrollTop);}if(this._loading){this._loading=false;if(!this.cache.items.length){this.showMessage(this.noDataMessage);}else{this.showMessage();}}},expandoFetch:function(_81,_82){if(this._loading){return;}this._loading=true;this.toggleLoadingClass(true);var _83=this.cache.getItemByRowIndex(_81);this.expandoRowIndex=_81;this._pages=[];if(_82){var _84=this.store.getIdentity(_83);var _85={start:0,count:this.keepRows,parentId:_84,sort:this.getSortProps()};this.treeModel.getChildren(_83,_1.hitch(this,"_onExpandoComplete"),_1.hitch(this,"_onFetchError"),_85);}else{this.cache.cleanChildren(_81);for(var i=_81+1,len=this._by_idx.length;i<len;i++){delete this._by_idx[i];}this.updateRowCount(this.cache.items.length);if(this.cache.getTreePathByRowIndex(_81+1)){this._fetch(_81+1);}else{this._fetch(_81);}this.toggleLoadingClass(false);}},_onExpandoComplete:function(_86,_87,_88){var _89=this.cache.getTreePathByRowIndex(this.expandoRowIndex);if(_88&&!isNaN(parseInt(_88,10))){_88=parseInt(_88,10);}else{_88=_86.length;}var i,j=0,len=this._by_idx.length;for(i=this.expandoRowIndex+1;j<_88;i++,j++){this.cache.insertItem(i,{item:null,treePath:_89+"/"+j,expandoStatus:false});}this.updateRowCount(this.cache.items.length);for(i=this.expandoRowIndex+1;i<len;i++){delete this._by_idx[i];}this.cache.updateCache(this.expandoRowIndex,{childrenNum:_88});for(i=0;i<_88;i++){this.cache.updateCache(this.expandoRowIndex+1+i,{item:_86[i]});}for(i=0;i<Math.min(_88,this.keepRows);i++){this._addItem(_86[i],this.expandoRowIndex+1+i,false);this.updateRow(this.expandoRowIndex+1+i);}this.toggleLoadingClass(false);this.stateChangeNode=null;if(this._loading){this._loading=false;}if(_88<this.keepRows&&this.cache.getTreePathByRowIndex(this.expandoRowIndex+1+_88)){this._fetch(this.expandoRowIndex+1+_88);}},toggleLoadingClass:function(_8a){if(this.stateChangeNode){_1.toggleClass(this.stateChangeNode,"dojoxGridExpandoLoading",_8a);}},styleRowNode:function(_8b,_8c){if(_8c){this.rows.styleRowNode(_8b,_8c);}},onStyleRow:function(row){if(!this.layout._isCollapsable){this.inherited(arguments);return;}var _8d=_1.attr(row.node,"dojoxTreeGridBaseClasses");if(_8d){row.customClasses=_8d;}var i=row;i.customClasses+=(i.odd?" dojoxGridRowOdd":"")+(i.selected?" dojoxGridRowSelected":"")+(i.over?" dojoxGridRowOver":"");this.focus.styleRow(i);this.edit.styleRow(i);},dokeydown:function(e){if(e.altKey||e.metaKey){return;}var dk=_1.keys,_8e=e.target,_8f=_8e&&_8e.firstChild?_2.byId(_8e.firstChild.id):null;if(e.keyCode===dk.ENTER&&_8f instanceof _3.grid._LazyExpando){_8f.onToggle();}this.onKeyDown(e);}});_3.grid.LazyTreeGrid.markupFactory=function(_90,_91,_92,_93){return _3.grid.TreeGrid.markupFactory(_90,_91,_92,_93);};return _3.grid.LazyTreeGrid;});