/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox"],function(_1,_2,_3){_1.getObject("dojox.lang.oo.rearrange",1);(function(){var _4=_1._extraNames,_5=_4.length,_6=Object.prototype.toString,_7={};_3.lang.oo.rearrange=function(_8,_9){var _a,_b,_c,i,t;for(_a in _9){_b=_9[_a];if(!_b||_6.call(_b)=="[object String]"){_c=_8[_a];if(!(_a in _7)||_7[_a]!==_c){if(!(delete _8[_a])){_8[_a]=undefined;}if(_b){_8[_b]=_c;}}}}if(_5){for(i=0;i<_5;++i){_a=_4[i];_b=_9[_a];if(!_b||_6.call(_b)=="[object String]"){_c=_8[_a];if(!(_a in _7)||_7[_a]!==_c){if(!(delete _8[_a])){_8[_a]=undefined;}if(_b){_8[_b]=_c;}}}}}return _8;};})();});require(["dojox/lang/oo/rearrange"]);