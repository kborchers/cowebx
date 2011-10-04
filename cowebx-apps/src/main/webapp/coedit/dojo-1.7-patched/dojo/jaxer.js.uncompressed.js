/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["./main"], function(dojo) {
	// module:
	//		dojo/jaxer
	// summary:
	//		TODOC


if(typeof print == "function"){
	console.debug = Jaxer.Log.debug;
	console.warn = Jaxer.Log.warn;
	console.error = Jaxer.Log.error;
	console.info = Jaxer.Log.info;
	console.log = Jaxer.Log.warn;
}

onserverload = dojo._loadInit;

return dojo;
});
