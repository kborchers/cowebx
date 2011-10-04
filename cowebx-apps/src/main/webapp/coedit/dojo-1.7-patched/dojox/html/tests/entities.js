/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","dojox/html/entities"],function(_1,_2,_3){_1.getObject("dojox.html.tests.entities",1);doh.register("dojox.html.tests.entities",[{name:"Encode:  Basic HTML Entities",runTest:function(t){var _4="This is some \" text \" with & entities inside it that <need to be escaped>";var _5="This is some &quot; text &quot; with &amp; entities inside it that &lt;need to be escaped&gt;";var _6=_3.html.entities.encode(_4);doh.assertEqual(_5,_6);}},{name:"Decode:  Basic HTML Entities",runTest:function(t){var _7="This is some &quot; text &quot; with &amp; entities inside it that &lt;need to be escaped&gt;";var _8="This is some \" text \" with & entities inside it that <need to be escaped>";var _9=_3.html.entities.decode(_7);doh.assertEqual(_8,_9);}},{name:"Encode:  Basic Latin Entities",runTest:function(t){var _a="";var _b="";var _c=_3.html.entities.latin;var i;for(i=0;i<_c.length;i++){_a+=_c[i][0];_b+="&"+_c[i][1]+";";}var _d=_3.html.entities.encode(_a);doh.assertEqual(_b,_d);}},{name:"Decode:  Basic Latin Entities",runTest:function(t){var _e="";var _f="";var map=_3.html.entities.latin;var i;for(i=0;i<map.length;i++){_e+="&"+map[i][1]+";";_f+=map[i][0];}var _10=_3.html.entities.decode(_e);doh.assertEqual(_f,_10);}},{name:"Encode:  Custom entity map",runTest:function(t){var txt="This is some \" text with & entities inside it that <need to be escaped>";var _11="This is some &quot; text with & entities inside it that <need to be escaped>";var _12=_3.html.entities.encode(txt,[["\"","quot"]]);doh.assertEqual(_11,_12);}},{name:"Decode:  Custom entity map",runTest:function(t){var txt="This is some &quot; text with & entities inside it that <need to be escaped>";var _13="This is some \" text with & entities inside it that <need to be escaped>";var _14=_3.html.entities.decode(txt,[["\"","quot"]]);doh.assertEqual(_13,_14);}}]);});require(["dojox/html/tests/entities"]);