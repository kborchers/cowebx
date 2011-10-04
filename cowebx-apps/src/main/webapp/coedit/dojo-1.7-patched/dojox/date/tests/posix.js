/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","dojox/date/posix","dojo/i18n","dojo/cldr/nls/gregorian"],function(_1,_2,_3){_1.getObject("dojox.date.tests.posix",1);tests.register("dojox.date.tests.posix",[{name:"dojox.date.tests.posix",setUp:function(){var _4=["en"];_1.forEach(_4,function(_5){_1.requireLocalization("dojo.cldr","gregorian",_5);});},runTest:function(t){},tearDown:function(){}},{name:"strftime",runTest:function(t){var _6=new Date(2006,7,11,0,55,12,3456);t.is("06/08/11",_3.date.posix.strftime(_6,"%y/%m/%d"));var dt=null;var _7="";var _8="";dt=new Date(2006,0,1,18,23);_7="%a";_8="Sun";t.is(_8,_3.date.posix.strftime(dt,_7,"en"));_7="%A";_8="Sunday";t.is(_8,_3.date.posix.strftime(dt,_7,"en"));_7="%b";_8="Jan";t.is(_8,_3.date.posix.strftime(dt,_7,"en"));_7="%B";_8="January";t.is(_8,_3.date.posix.strftime(dt,_7,"en"));_7="%c";_8="Sunday, January 1, 2006 6:23:00 PM";t.is(_8,_3.date.posix.strftime(dt,_7).substring(0,_8.length));_7="%C";_8="20";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%d";_8="01";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%D";_8="01/01/06";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%e";_8=" 1";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%h";_8="Jan";t.is(_8,_3.date.posix.strftime(dt,_7,"en"));_7="%H";_8="18";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%I";_8="06";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%j";_8="001";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%k";_8="18";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%l";_8=" 6";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%m";_8="01";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%M";_8="23";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%p";_8="PM";t.is(_8,_3.date.posix.strftime(dt,_7,"en"));_7="%r";_8="06:23:00 PM";t.is(_8,_3.date.posix.strftime(dt,_7,"en"));_7="%R";_8="18:23";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%S";_8="00";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%T";_8="18:23:00";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%u";_8="7";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%w";_8="0";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%x";_8="Sunday, January 1, 2006";t.is(_8,_3.date.posix.strftime(dt,_7,"en"));_7="%X";_8="6:23:00 PM";t.is(_8,_3.date.posix.strftime(dt,_7,"en").substring(0,_8.length));_7="%y";_8="06";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%Y";_8="2006";t.is(_8,_3.date.posix.strftime(dt,_7));_7="%%";_8="%";t.is(_8,_3.date.posix.strftime(dt,_7));}},{name:"getStartOfWeek",runTest:function(t){var _9;var _a=new Date(2007,0,1);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,1),1);t.is(_a,_9);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,2),1);t.is(_a,_9);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,3),1);t.is(_a,_9);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,4),1);t.is(_a,_9);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,5),1);t.is(_a,_9);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,6),1);t.is(_a,_9);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,7),1);t.is(_a,_9);_a=new Date(2007,0,7);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,7),0);t.is(_a,_9);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,8),0);t.is(_a,_9);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,9),0);t.is(_a,_9);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,10),0);t.is(_a,_9);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,11),0);t.is(_a,_9);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,12),0);t.is(_a,_9);_9=_3.date.posix.getStartOfWeek(new Date(2007,0,13),0);t.is(_a,_9);}},{name:"setIsoWeekOfYear",runTest:function(t){var _b=new Date(2006,10,10);var _c=_3.date.posix.setIsoWeekOfYear(_b,1);t.is(new Date(2006,0,6),_c);_c=_3.date.posix.setIsoWeekOfYear(_b,10);_c=_3.date.posix.setIsoWeekOfYear(_b,2);t.is(new Date(2006,0,13),_c);_c=_3.date.posix.setIsoWeekOfYear(_b,10);t.is(new Date(2006,2,10),_c);_c=_3.date.posix.setIsoWeekOfYear(_b,52);t.is(new Date(2006,11,29),_c);var _c=_3.date.posix.setIsoWeekOfYear(_b,-1);t.is(new Date(2006,11,29),_c);var _c=_3.date.posix.setIsoWeekOfYear(_b,-2);t.is(new Date(2006,11,22),_c);var _c=_3.date.posix.setIsoWeekOfYear(_b,-10);t.is(new Date(2006,9,27),_c);_b=new Date(2004,10,10);_c=_3.date.posix.setIsoWeekOfYear(_b,1);t.is(new Date(2003,11,31),_c);_c=_3.date.posix.setIsoWeekOfYear(_b,2);t.is(new Date(2004,0,7),_c);_c=_3.date.posix.setIsoWeekOfYear(_b,-1);t.is(new Date(2004,11,29),_c);}},{name:"getIsoWeekOfYear",runTest:function(t){var _d=_3.date.posix.getIsoWeekOfYear(new Date(2006,0,1));t.is(52,_d);_d=_3.date.posix.getIsoWeekOfYear(new Date(2006,0,4));t.is(1,_d);_d=_3.date.posix.getIsoWeekOfYear(new Date(2006,11,31));t.is(52,_d);_d=_3.date.posix.getIsoWeekOfYear(new Date(2007,0,1));t.is(1,_d);_d=_3.date.posix.getIsoWeekOfYear(new Date(2007,11,31));t.is(53,_d);_d=_3.date.posix.getIsoWeekOfYear(new Date(2008,0,1));t.is(1,_d);_d=_3.date.posix.getIsoWeekOfYear(new Date(2007,11,31));t.is(53,_d);}},{name:"getIsoWeeksInYear",runTest:function(t){var _e=[4,9,15,20,26,32,37,43,48,54,60,65,71,76,82,88,93,99,105,111,116,122,128,133,139,144,150,156,161,167,172,178,184,189,195,201,207,212,218,224,229,235,240,246,252,257,263,268,274,280,285,291,296,303,308,314,320,325,331,336,342,348,353,359,364,370,376,381,387,392,398];var i,j,_f,_10;for(i=0;i<400;i++){_f=52;if(i==_e[0]){_f=53;_e.shift();}_10=_3.date.posix.getIsoWeeksInYear(new Date(2000+i,0,1));t.is(_f,_10);}}}]);});require(["dojox/date/tests/posix"]);