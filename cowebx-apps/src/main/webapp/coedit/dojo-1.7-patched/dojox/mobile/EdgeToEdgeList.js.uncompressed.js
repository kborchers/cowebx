/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["./RoundRectList"], function(RoundRectList){
	return dojo.declare("dojox.mobile.EdgeToEdgeList", dojox.mobile.RoundRectList, {
		buildRendering: function(){
			this.inherited(arguments);
			this.domNode.className = "mblEdgeToEdgeList";
		}
	});
});
