/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo/_base/lang","dojo/_base/array","dojo/Stateful"],function(_1,_2,_3){_1.declare("dojox.mvc.StatefulModel",[_1.Stateful],{data:null,store:null,valid:true,value:"",reset:function(){if(_1.isObject(this.data)){for(var x in this){if(this[x]&&_1.isFunction(this[x].reset)){this[x].reset();}}}else{this.set("value",this.data);}},commit:function(_4){this._commit();var ds=_4||this.store;if(ds){this._saveToStore(ds);}},toPlainObject:function(){var _5={};var _6=false;for(var p in this){if(this[p]&&_1.isFunction(this[p].toPlainObject)){if(!_6&&typeof this.get("length")==="number"){_5=[];}_6=true;_5[p]=this[p].toPlainObject();}}if(!_6){_5=this.value;}return _5;},add:function(_7,_8){var n,n1,_9,_a,_b=new dojox.mvc.StatefulModel({data:""});if(typeof this.get("length")==="number"&&/^[0-9]+$/.test(_7.toString())){n=_7;if(!this.get(n)){n1=n-1;if(!this.get(n1)){throw new Error("Out of bounds insert attempted, must be contiguous.");}this.set(n,_8);}else{n1=n-0+1;_9=_8;_a=this.get(n1);if(!_a){this.set(n1,_9);}else{do{this._copyStatefulProperties(_a,_b);this._copyStatefulProperties(_9,_a);this._copyStatefulProperties(_b,_9);this.set(n1,_a);_a=this.get(++n1);}while(_a);this.set(n1,_9);}}this.set("length",this.get("length")+1);}else{this.set(_7,_8);}},remove:function(_c){var n,_d,_e;if(typeof this.get("length")==="number"&&/^[0-9]+$/.test(_c.toString())){n=_c;_d=this.get(n);if(!_d){throw new Error("Out of bounds delete attempted - no such index: "+n);}else{this._removals=this._removals||[];this._removals.push(_d.toPlainObject());n1=n-0+1;_e=this.get(n1);if(!_e){this.set(n,undefined);delete this[n];}else{while(_e){this._copyStatefulProperties(_e,_d);_d=this.get(n1++);_e=this.get(n1);}this.set(n1-1,undefined);delete this[n1-1];}this.set("length",this.get("length")-1);}}else{_d=this.get(_c);if(!_d){throw new Error("Illegal delete attempted - no such property: "+_c);}else{this._removals=this._removals||[];this._removals.push(_d.toPlainObject());this.set(_c,undefined);delete this[_c];}}},constructor:function(_f){if(_f.data){this._createModel(_f.data);}},_createModel:function(obj){if(_1.isObject(obj)){for(var x in obj){var _10=new dojox.mvc.StatefulModel({data:obj[x]});this.set(x,_10);}if(_1.isArray(obj)){this.set("length",obj.length);}}else{this.set("value",obj);}},_commit:function(){for(var x in this){if(this[x]&&_1.isFunction(this[x]._commit)){this[x]._commit();}}this.data=this.toPlainObject();},_saveToStore:function(_11){if(this._removals){_1.forEach(this._removals,_1.hitch(this,function(d){_11.remove(_11.getIdentity(d));}));delete this._removals;}var _12=this.toPlainObject();if(_1.isArray(_12)){_1.forEach(_12,_1.hitch(this,function(d){_11.put(d);}));}else{_11.put(_12);}},_copyStatefulProperties:function(src,_13){for(var x in src){var o=src.get(x);if(o&&_1.isObject(o)&&_1.isFunction(o.get)){_13.set(x,o);}}}});dojox.mvc.newStatefulModel=function(_14){if(_14.data){return new dojox.mvc.StatefulModel({data:_14.data});}else{if(_14.store&&typeof _1.isFunction(_14.store.query)){var _15;var _16=_14.store.query(_14.query);if(_16.then){return (_16.then(function(_17){_15=new dojox.mvc.StatefulModel({data:_17});_15.store=_14.store;return _15;}));}else{_15=new dojox.mvc.StatefulModel({data:_16});_15.store=_14.store;return _15;}}}};return dojox.mvc.StatefulModel;});