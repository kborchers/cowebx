/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo/_base/array","dojo/_base/html","dojo/DeferredList"],function(_1,_2,_3){return function(_4,to,_5){var _6=(_5&&_5.reverse)?" mblReverse":"";if(!_5||!_5.transition){dojo.style(_4,"display","none");dojo.style(to,"display","");}else{var _7=[];dojo.style(_4,"display","");dojo.style(to,"display","");if(_4){var _8=new dojo.Deferred();var _9=dojo.connect(_4,"webkitAnimationEnd",function(){dojo.style(_4,"display","none");dojo.forEach([_5.transition,"mblIn","mblOut","mblReverse"],function(_a){dojo.removeClass(_4,_a);});dojo.disconnect(_9);_8.resolve(_4);});_7.push(_8);}var _b=new dojo.Deferred();var _c=dojo.connect(to,"webkitAnimationEnd",function(){dojo.forEach([_5.transition,"mblIn","mblOut","mblReverse"],function(_d){dojo.removeClass(to,_d);});dojo.disconnect(_c);_b.resolve(to);});_7.push(_b);_5.transition="mbl"+(_5.transition.charAt(0).toUpperCase()+_5.transition.substring(1));dojo.addClass(_4,_5.transition+" mblOut"+_6);dojo.addClass(to,_5.transition+" mblIn"+_6);return new dojo.DeferredList(_7);}};});