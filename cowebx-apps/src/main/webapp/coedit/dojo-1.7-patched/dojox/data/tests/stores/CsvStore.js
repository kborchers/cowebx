/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","dojox/data/CsvStore","dojo/data/api/Read","dojo/data/api/Identity"],function(_1,_2,_3){_1.getObject("dojox.data.tests.stores.CsvStore",1);_3.data.tests.stores.CsvStore.getDatasource=function(_4){var _5={};if(_1.isBrowser){_5.url=_1.moduleUrl("dojox.data.tests",_4).toString();}else{var _6;switch(_4){case "stores/movies.csv":_6+="Title, Year, Producer\n";_6+="City of God, 2002, Katia Lund\n";_6+="Rain,, Christine Jeffs\n";_6+="2001: A Space Odyssey, 1968, Stanley Kubrick\n";_6+="\"This is a \"\"fake\"\" movie title\", 1957, Sidney Lumet\n";_6+="Alien, 1979   , Ridley Scott\n";_6+="\"The Sequel to \"\"Dances With Wolves.\"\"\", 1982, Ridley Scott\n";_6+="\"Caine Mutiny, The\", 1954, \"Dymtryk \"\"the King\"\", Edward\"\n";break;case "stores/movies2.csv":_6+="Title, Year, Producer\n";_6+="City of God, 2002, Katia Lund\n";_6+="Rain,\"\", Christine Jeffs\n";_6+="2001: A Space Odyssey, 1968, Stanley Kubrick\n";_6+="\"This is a \"\"fake\"\" movie title\", 1957, Sidney Lumet\n";_6+="Alien, 1979   , Ridley Scott\n";_6+="\"The Sequel to \"\"Dances With Wolves.\"\"\", 1982, Ridley Scott\n";_6+="\"Caine Mutiny, The\", 1954, \"Dymtryk \"\"the King\"\", Edward\"\n";break;case "stores/empty.csv":_6+="Title, Year, Producer\n";break;case "stores/movies3.csv":_6+="Title, Year, Producer\n";_6+="\"City\n of God\", 2002, Katia Lund\n";_6+="Rain,\"\", Christine Jeffs\n";_6+="2001: A Space Odyssey, 1968, Stanley Kubrick\n";_6+="\"This is a \"\"fake\"\" movie title\", 1957, Sidney Lumet\n";_6+="Alien, 1979   , Ridley Scott\n";_6+="\"The Sequel to \"\"Dances With\n Wolves.\"\"\", 1982, Ridley Scott\n";_6+="\"Caine Mutiny, The\", 1954, \"Dymtryk \"\"the King\"\", Edward\"\n";break;case "stores/books.csv":_6+="Title, Author\n";_6+="The Transparent Society, David Brin\n";_6+="The First Measured Century, Theodore Caplow\n";_6+="Maps in a Mirror, Orson Scott Card\n";_6+="Princess Smartypants, Babette Cole\n";_6+="Carfree Cities, Crawford J.H.\n";_6+="Down and Out in the Magic Kingdom, Cory Doctorow\n";_6+="Tax Shift, Alan Thein Durning\n";_6+="The Sneetches and other stories, Dr. Seuss\n";_6+="News from Tartary, Peter Fleming\n";break;case "stores/patterns.csv":_6+="uniqueId, value\n";_6+="9, jfq4@#!$!@Rf14r14i5u\n";_6+="6, BaBaMaSaRa***Foo\n";_6+="2, bar*foo\n";_6+="8, 123abc\n";_6+="4, bit$Bite\n";_6+="3, 123abc\n";_6+="10, 123abcdefg\n";_6+="1, foo*bar\n";_6+="7, \n";_6+="5, 123abc\n";break;case "stores/semicolonSeparator.csv":_6+="article;price\n";_6+="1008;4,59\n";_6+="1010;10,09\n";_6+="1011;5,13\n";_6+="1016;16,68\n";_6+="1019;15,5\n";_6+="1022;10,36\n";break;case "stores/pipeSeparator.csv":_6+="article|price\n";_6+="1008|4,59\n";_6+="1010|10,09\n";_6+="1011|5,13\n";_6+="1016|16,68\n";_6+="1019|15,5\n";_6+="1022|10,36\n";break;case "stores/pipeSeparatorInData.csv":_6+="article|price\n";_6+="1008|\"4,59|4,54\"\n";_6+="1010|10,09\n";_6+="1011|5,13\n";_6+="1016|16,68\n";_6+="1019|15,5\n";_6+="1022|10,36\n";break;}_5.data=_6;}return _5;};_3.data.tests.stores.CsvStore.verifyItems=function(_7,_8,_9,_a){if(_8.length!=_a.length){return false;}for(var i=0;i<_8.length;i++){if(!(_7.getValue(_8[i],_9)===_a[i])){return false;}}return true;};_3.data.tests.stores.CsvStore.error=function(t,d,_b){for(var i in _b){}d.errback(_b);};doh.register("dojox.data.tests.stores.CsvStore",[function testReadAPI_fetch_all(t){var _c=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _d=new _3.data.CsvStore(_c);var d=new doh.Deferred();function _e(_f){t.assertTrue((_f.length===7));d.callback(true);};_d.fetch({onComplete:_e,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_all_empty(t){var _10=_3.data.tests.stores.CsvStore.getDatasource("stores/empty.csv");var _11=new _3.data.CsvStore(_10);var d=new doh.Deferred();function _12(_13){t.assertTrue((_13.length===0));d.callback(true);};_11.fetch({onComplete:_12,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_all_semicolon(t){var _14=_3.data.tests.stores.CsvStore.getDatasource("stores/semicolonSeparator.csv");_14.separator=";";var _15=new _3.data.CsvStore(_14);var d=new doh.Deferred();function _16(_17){t.assertEqual(6,_17.length);d.callback(true);};_15.fetch({onComplete:_16,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_all_pipe(t){var _18=_3.data.tests.stores.CsvStore.getDatasource("stores/pipeSeparator.csv");_18.separator="|";var _19=new _3.data.CsvStore(_18);var d=new doh.Deferred();function _1a(_1b){t.assertEqual(6,_1b.length);d.callback(true);};_19.fetch({onComplete:_1a,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_all_pipe_indata(t){var _1c=_3.data.tests.stores.CsvStore.getDatasource("stores/pipeSeparatorInData.csv");_1c.separator="|";var _1d=new _3.data.CsvStore(_1c);var d=new doh.Deferred();function _1e(_1f){t.assertEqual(6,_1f.length);d.callback(true);};_1d.fetch({onComplete:_1e,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_all_withnewlinedCsv(t){var _20=_3.data.tests.stores.CsvStore.getDatasource("stores/movies3.csv");var _21=new _3.data.CsvStore(_20);var d=new doh.Deferred();function _22(_23){t.assertTrue((_23.length===7));d.callback(true);};_21.fetch({onComplete:_22,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_all_withEmptyStringField(t){var _24=_3.data.tests.stores.CsvStore.getDatasource("stores/movies2.csv");var _25=new _3.data.CsvStore(_24);var d=new doh.Deferred();function _26(_27){t.assertTrue((_27.length===7));d.callback(true);};_25.fetch({onComplete:_26,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_one(t){var _28=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _29=new _3.data.CsvStore(_28);var d=new doh.Deferred();function _2a(_2b,_2c){t.is(1,_2b.length);d.callback(true);};_29.fetch({query:{Title:"*Sequel*"},onComplete:_2a,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_one_preventcache(t){var _2d=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");_2d.urlPreventCache=true;var _2e=new _3.data.CsvStore(_2d);var d=new doh.Deferred();function _2f(_30,_31){t.is(1,_30.length);d.callback(true);};_2e.fetch({query:{Title:"*Sequel*"},onComplete:_2f,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_Multiple(t){var _32=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _33=new _3.data.CsvStore(_32);var d=new doh.Deferred();var _34=[false,false];function _35(_36,_37){_34[0]=true;t.is(1,_36.length);if(_34[0]&&_34[1]){d.callback(true);}};function _38(_39,_3a){_34[1]=true;t.is(1,_39.length);if(_34[0]&&_34[1]){d.callback(true);}};try{_33.fetch({query:{Title:"*Sequel*"},onComplete:_35,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});_33.fetch({query:{Title:"2001:*"},onComplete:_38,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});}catch(e){for(var i in e){}}return d;},function testReadAPI_fetch_MultipleMixed(t){var _3b=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _3c=new _3.data.CsvStore(_3b);var d=new doh.Deferred();var _3d=[false,false];function _3e(_3f,_40){_3d[0]=true;t.is(1,_3f.length);if(_3d[0]&&_3d[1]){d.callback(true);}};function _41(_42){_3d[1]=true;t.assertTrue(_42!==null);t.is("Dymtryk \"the King\", Edward",_3c.getValue(_42,"Producer"));t.is("Caine Mutiny, The",_3c.getValue(_42,"Title"));if(_3d[0]&&_3d[1]){d.callback(true);}};_3c.fetch({query:{Title:"*Sequel*"},onComplete:_3e,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});_3c.fetchItemByIdentity({identity:"6",onItem:_41,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_all_streaming(t){var _43=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _44=new _3.data.CsvStore(_43);var d=new doh.Deferred();var _45=0;function _46(_47,_48){t.assertTrue(_47===7);};function _49(_4a,_4b){t.assertTrue(_44.isItem(_4a));_45++;};function _4c(_4d,_4e){t.is(7,_45);t.is(null,_4d);d.callback(true);};_44.fetch({onBegin:_46,onItem:_49,onComplete:_4c,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_paging(t){var _4f=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _50=new _3.data.CsvStore(_4f);var d=new doh.Deferred();function _51(_52,_53){t.is(5,_52.length);d.callback(true);};function _54(_55,_56){t.is(0,_55.length);_56.start=2;_56.count=20;_56.onComplete=_51;_50.fetch(_56);};function _57(_58,_59){t.is(5,_58.length);_59.start=9;_59.count=100;_59.onComplete=_54;_50.fetch(_59);};function _5a(_5b,_5c){t.is(5,_5b.length);_5c.start=2;_5c.count=20;_5c.onComplete=_57;_50.fetch(_5c);};function _5d(_5e,_5f){t.is(1,_5e.length);_5f.start=0;_5f.count=5;_5f.onComplete=_5a;_50.fetch(_5f);};function _60(_61,_62){t.is(5,_61.length);_62.start=3;_62.count=1;_62.onComplete=_5d;_50.fetch(_62);};function _63(_64,_65){t.is(7,_64.length);_65.start=1;_65.count=5;_65.onComplete=_60;_50.fetch(_65);};_50.fetch({onComplete:_63,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_getLabel(t){var _66=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");_66.label="Title";var _67=new _3.data.CsvStore(_66);var d=new doh.Deferred();function _68(_69,_6a){t.assertEqual(_69.length,1);var _6b=_67.getLabel(_69[0]);t.assertTrue(_6b!==null);t.assertEqual("The Sequel to \"Dances With Wolves.\"",_6b);d.callback(true);};_67.fetch({query:{Title:"*Sequel*"},onComplete:_68,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_getLabelAttributes(t){var _6c=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");_6c.label="Title";var _6d=new _3.data.CsvStore(_6c);var d=new doh.Deferred();function _6e(_6f,_70){t.assertEqual(_6f.length,1);var _71=_6d.getLabelAttributes(_6f[0]);t.assertTrue(_1.isArray(_71));t.assertEqual("Title",_71[0]);d.callback(true);};_6d.fetch({query:{Title:"*Sequel*"},onComplete:_6e,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_getValue(t){var _72=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _73=new _3.data.CsvStore(_72);var d=new doh.Deferred();function _74(_75){t.assertTrue(_75!==null);t.is("Dymtryk \"the King\", Edward",_73.getValue(_75,"Producer"));t.is("Caine Mutiny, The",_73.getValue(_75,"Title"));d.callback(true);};_73.fetchItemByIdentity({identity:"6",onItem:_74,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_getValue_2(t){var _76=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _77=new _3.data.CsvStore(_76);var d=new doh.Deferred();function _78(_79){t.assertTrue(_79!==null);t.is("City of God",_77.getValue(_79,"Title"));t.is("2002",_77.getValue(_79,"Year"));d.callback(true);};_77.fetchItemByIdentity({identity:"0",onItem:_78,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_getValue_3(t){var _7a=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _7b=new _3.data.CsvStore(_7a);var d=new doh.Deferred();function _7c(_7d){t.assertTrue(_7d!==null);t.is("1979",_7b.getValue(_7d,"Year"));t.is("Alien",_7b.getValue(_7d,"Title"));d.callback(true);};_7b.fetchItemByIdentity({identity:"4",onItem:_7c,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_getValue_4(t){var _7e=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _7f=new _3.data.CsvStore(_7e);var d=new doh.Deferred();function _80(_81){t.assertTrue(_81!==null);t.is("2001: A Space Odyssey",_7f.getValue(_81,"Title"));t.is("Stanley Kubrick",_7f.getValue(_81,"Producer"));d.callback(true);};_7f.fetchItemByIdentity({identity:"2",onItem:_80,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_getValues(t){var _82=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _83=new _3.data.CsvStore(_82);var d=new doh.Deferred();function _84(_85){t.assertTrue(_85!==null);var _86=_83.getValues(_85,"Title");t.assertTrue(_1.isArray(_86));t.is(1,_86.length);t.is("Rain",_86[0]);d.callback(true);};_83.fetchItemByIdentity({identity:"1",onItem:_84,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testIdentityAPI_fetchItemByIdentity(t){var _87=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _88=new _3.data.CsvStore(_87);var d=new doh.Deferred();function _89(_8a){t.assertTrue(_8a!==null);d.callback(true);};_88.fetchItemByIdentity({identity:"1",onItem:_89,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testIdentityAPI_fetchItemByIdentity_withDefinedIdentifier(t){var _8b=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");_8b.identifier="Title";var _8c=new _3.data.CsvStore(_8b);var d=new doh.Deferred();function _8d(_8e){t.assertTrue(_8e!==null);d.callback(true);};_8c.fetchItemByIdentity({identity:"City of God",onItem:_8d,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testIdentityAPI_fetchItemByIdentity_withDefinedIdentifier_bad1(t){var _8f=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");_8f.identifier="Title";var _90=new _3.data.CsvStore(_8f);var d=new doh.Deferred();function _91(_92){t.assertTrue(_92===null);d.callback(true);};_90.fetchItemByIdentity({identity:"No Such Title",onItem:_91,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testIdentityAPI_fetchItemByIdentity_bad1(t){var _93=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _94=new _3.data.CsvStore(_93);var d=new doh.Deferred();function _95(_96){t.assertTrue(_96===null);d.callback(true);};_94.fetchItemByIdentity({identity:"7",onItem:_95,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testIdentityAPI_fetchItemByIdentity_bad2(t){var _97=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _98=new _3.data.CsvStore(_97);var d=new doh.Deferred();function _99(_9a){t.assertTrue(_9a===null);d.callback(true);};_98.fetchItemByIdentity({identity:"-1",onItem:_99,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testIdentityAPI_fetchItemByIdentity_bad3(t){var _9b=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _9c=new _3.data.CsvStore(_9b);var d=new doh.Deferred();function _9d(_9e){t.assertTrue(_9e===null);d.callback(true);};_9c.fetchItemByIdentity({identity:"999999",onItem:_9d,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testIdentityAPI_getIdentity(t){var _9f=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _a0=new _3.data.CsvStore(_9f);var d=new doh.Deferred();function _a1(_a2,_a3){t.is(7,_a2.length);var _a4=true;for(var i=0;i<_a2.length;i++){if(!(_a0.getIdentity(_a2[i])===i)){_a4=false;break;}}t.assertTrue(_a4);d.callback(true);};_a0.fetch({onComplete:_a1,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testIdentityAPI_getIdentity_withDefinedIdentifier(t){var _a5=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");_a5.identifier="Title";var _a6=new _3.data.CsvStore(_a5);var d=new doh.Deferred();function _a7(_a8,_a9){t.is(7,_a8.length);var _aa=true;for(var i=0;i<_a8.length;i++){if(!_a6.getIdentity(_a8[i])){_aa=false;break;}}t.assertTrue(_aa);d.callback(true);};_a6.fetch({onComplete:_a7,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testIdentityAPI_getIdentity_withBadDefinedIdentifier(t){var _ab=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");_ab.identifier="Not Column";var _ac=new _3.data.CsvStore(_ab);var d=new doh.Deferred();function _ad(_ae,_af){d.errback(new Error("Unexpected callback of success in failure case."));};function _b0(err){d.callback(true);};_ac.fetch({onComplete:_ad,onError:_b0});return d;},function testIdentityAPI_getIdentityAttributes(t){var _b1=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _b2=new _3.data.CsvStore(_b1);var d=new doh.Deferred();function _b3(_b4){t.assertTrue(_b2.isItem(_b4));t.assertEqual(null,_b2.getIdentityAttributes(_b4));d.callback(true);};_b2.fetchItemByIdentity({identity:"1",onItem:_b3,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_isItem(t){var _b5=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _b6=new _3.data.CsvStore(_b5);var d=new doh.Deferred();function _b7(_b8){t.assertTrue(_b6.isItem(_b8));t.assertTrue(!_b6.isItem({}));t.assertTrue(!_b6.isItem({item:"not an item"}));t.assertTrue(!_b6.isItem("not an item"));t.assertTrue(!_b6.isItem(["not an item"]));d.callback(true);};_b6.fetchItemByIdentity({identity:"1",onItem:_b7,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_hasAttribute(t){var _b9=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _ba=new _3.data.CsvStore(_b9);var d=new doh.Deferred();function _bb(_bc){t.assertTrue(_bc!==null);t.assertTrue(_ba.hasAttribute(_bc,"Title"));t.assertTrue(_ba.hasAttribute(_bc,"Producer"));t.assertTrue(!_ba.hasAttribute(_bc,"Year"));t.assertTrue(!_ba.hasAttribute(_bc,"Nothing"));t.assertTrue(!_ba.hasAttribute(_bc,"title"));var _bd=false;try{_ba.hasAttribute(_bc,null);}catch(e){_bd=true;}t.assertTrue(_bd);d.callback(true);};_ba.fetchItemByIdentity({identity:"1",onItem:_bb,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_containsValue(t){var _be=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _bf=new _3.data.CsvStore(_be);var d=new doh.Deferred();function _c0(_c1){t.assertTrue(_c1!==null);t.assertTrue(_bf.containsValue(_c1,"Title","Alien"));t.assertTrue(_bf.containsValue(_c1,"Year","1979"));t.assertTrue(_bf.containsValue(_c1,"Producer","Ridley Scott"));t.assertTrue(!_bf.containsValue(_c1,"Title","Alien2"));t.assertTrue(!_bf.containsValue(_c1,"Year","1979   "));t.assertTrue(!_bf.containsValue(_c1,"Title",null));var _c2=false;try{_bf.containsValue(_c1,null,"foo");}catch(e){_c2=true;}t.assertTrue(_c2);d.callback(true);};_bf.fetchItemByIdentity({identity:"4",onItem:_c0,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_getAttributes(t){var _c3=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _c4=new _3.data.CsvStore(_c3);var d=new doh.Deferred();function _c5(_c6){t.assertTrue(_c6!==null);t.assertTrue(_c4.isItem(_c6));var _c7=_c4.getAttributes(_c6);t.is(3,_c7.length);for(var i=0;i<_c7.length;i++){t.assertTrue((_c7[i]==="Title"||_c7[i]==="Year"||_c7[i]==="Producer"));}d.callback(true);};_c4.fetchItemByIdentity({identity:"4",onItem:_c5,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_getAttributes_onlyTwo(t){var _c8=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _c9=new _3.data.CsvStore(_c8);var d=new doh.Deferred();function _ca(_cb){t.assertTrue(_cb!==null);t.assertTrue(_c9.isItem(_cb));var _cc=_c9.getAttributes(_cb);t.assertTrue(_cc.length===2);t.assertTrue(_cc[0]==="Title");t.assertTrue(_cc[1]==="Producer");d.callback(true);};_c9.fetchItemByIdentity({identity:"1",onItem:_ca,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_getFeatures(t){var _cd=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _ce=new _3.data.CsvStore(_cd);var _cf=_ce.getFeatures();var _d0=0;for(var i in _cf){t.assertTrue((i==="dojo.data.api.Read"||i==="dojo.data.api.Identity"));_d0++;}t.assertTrue(_d0===2);},function testReadAPI_fetch_patternMatch0(t){var _d1=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _d2=new _3.data.CsvStore(_d1);var d=new doh.Deferred();function _d3(_d4,_d5){t.is(2,_d4.length);var _d6=["Alien","The Sequel to \"Dances With Wolves.\""];t.assertTrue(_3.data.tests.stores.CsvStore.verifyItems(_d2,_d4,"Title",_d6));d.callback(true);};_d2.fetch({query:{Producer:"* Scott"},onComplete:_d3,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_patternMatch1(t){var _d7=_3.data.tests.stores.CsvStore.getDatasource("stores/patterns.csv");var _d8=new _3.data.CsvStore(_d7);var d=new doh.Deferred();function _d9(_da,_db){t.assertTrue(_da.length===2);var _dc=["jfq4@#!$!@Rf14r14i5u","bit$Bite"];t.assertTrue(_3.data.tests.stores.CsvStore.verifyItems(_d8,_da,"value",_dc));d.callback(true);};_d8.fetch({query:{value:"*$*"},onComplete:_d9,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_patternMatch2(t){var _dd=_3.data.tests.stores.CsvStore.getDatasource("stores/patterns.csv");var _de=new _3.data.CsvStore(_dd);var d=new doh.Deferred();function _df(_e0,_e1){t.is(1,_e0.length);t.assertTrue(_de.getValue(_e0[0],"value")==="bar*foo");d.callback(true);};_de.fetch({query:{value:"bar\\*foo"},onComplete:_df,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_patternMatch_caseInsensitive(t){var _e2=_3.data.tests.stores.CsvStore.getDatasource("stores/patterns.csv");var _e3=new _3.data.CsvStore(_e2);var d=new doh.Deferred();function _e4(_e5,_e6){t.is(1,_e5.length);t.assertTrue(_e3.getValue(_e5[0],"value")==="bar*foo");d.callback(true);};_e3.fetch({query:{value:"BAR\\*foo"},queryOptions:{ignoreCase:true},onComplete:_e4,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_patternMatch_caseSensitive(t){var _e7=_3.data.tests.stores.CsvStore.getDatasource("stores/patterns.csv");var _e8=new _3.data.CsvStore(_e7);var d=new doh.Deferred();function _e9(_ea,_eb){t.is(0,_ea.length);d.callback(true);};_e8.fetch({query:{value:"BAR\\*foo"},queryOptions:{ignoreCase:false},onComplete:_e9,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_sortNumeric(t){var _ec=_3.data.tests.stores.CsvStore.getDatasource("stores/patterns.csv");var _ed=new _3.data.CsvStore(_ec);var d=new doh.Deferred();function _ee(_ef,_f0){t.assertTrue(_ef.length===10);var _f1=["1","10","2","3","4","5","6","7","8","9"];t.assertTrue(_3.data.tests.stores.CsvStore.verifyItems(_ed,_ef,"uniqueId",_f1));d.callback(true);};var _f2=[{attribute:"uniqueId"}];_ed.fetch({onComplete:_ee,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d),sort:_f2});return d;},function testReadAPI_fetch_sortNumericDescending(t){var _f3=_3.data.tests.stores.CsvStore.getDatasource("stores/patterns.csv");var _f4=new _3.data.CsvStore(_f3);var d=new doh.Deferred();function _f5(_f6,_f7){t.is(10,_f6.length);var _f8=["9","8","7","6","5","4","3","2","10","1"];t.assertTrue(_3.data.tests.stores.CsvStore.verifyItems(_f4,_f6,"uniqueId",_f8));d.callback(true);};var _f9=[{attribute:"uniqueId",descending:true}];_f4.fetch({sort:_f9,onComplete:_f5,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_sortNumericWithCount(t){var _fa=_3.data.tests.stores.CsvStore.getDatasource("stores/patterns.csv");var _fb=new _3.data.CsvStore(_fa);var d=new doh.Deferred();function _fc(_fd,_fe){t.is(5,_fd.length);var _ff=["9","8","7","6","5"];t.assertTrue(_3.data.tests.stores.CsvStore.verifyItems(_fb,_fd,"uniqueId",_ff));d.callback(true);};var _100=[{attribute:"uniqueId",descending:true}];_fb.fetch({sort:_100,count:5,onComplete:_fc,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_sortAlphabetic(t){var args=_3.data.tests.stores.CsvStore.getDatasource("stores/patterns.csv");var _101=new _3.data.CsvStore(args);var d=new doh.Deferred();function _102(_103,_104){var _105=["123abc","123abc","123abc","123abcdefg","BaBaMaSaRa***Foo","bar*foo","bit$Bite","foo*bar","jfq4@#!$!@Rf14r14i5u",undefined];t.is(10,_103.length);t.assertTrue(_3.data.tests.stores.CsvStore.verifyItems(_101,_103,"value",_105));d.callback(true);};var _106=[{attribute:"value"}];_101.fetch({sort:_106,onComplete:_102,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_sortAlphabeticDescending(t){var args=_3.data.tests.stores.CsvStore.getDatasource("stores/patterns.csv");var _107=new _3.data.CsvStore(args);var d=new doh.Deferred();function _108(_109,_10a){var _10b=[undefined,"jfq4@#!$!@Rf14r14i5u","foo*bar","bit$Bite","bar*foo","BaBaMaSaRa***Foo","123abcdefg","123abc","123abc","123abc"];t.is(10,_109.length);t.assertTrue(_3.data.tests.stores.CsvStore.verifyItems(_107,_109,"value",_10b));d.callback(true);};var _10c=[{attribute:"value",descending:true}];_107.fetch({sort:_10c,onComplete:_108,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_sortMultiple(t){var args=_3.data.tests.stores.CsvStore.getDatasource("stores/patterns.csv");var _10d=new _3.data.CsvStore(args);var d=new doh.Deferred();function _10e(_10f,_110){var _111=["8","5","3","10","6","2","4","1","9","7"];var _112=["123abc","123abc","123abc","123abcdefg","BaBaMaSaRa***Foo","bar*foo","bit$Bite","foo*bar","jfq4@#!$!@Rf14r14i5u",undefined];t.is(10,_10f.length);t.assertTrue(_3.data.tests.stores.CsvStore.verifyItems(_10d,_10f,"uniqueId",_111));t.assertTrue(_3.data.tests.stores.CsvStore.verifyItems(_10d,_10f,"value",_112));d.callback(true);};var _113=[{attribute:"value"},{attribute:"uniqueId",descending:true}];_10d.fetch({sort:_113,onComplete:_10e,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},function testReadAPI_fetch_sortMultipleSpecialComparator(t){var args=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _114=new _3.data.CsvStore(args);_114.comparatorMap={};_114.comparatorMap["Producer"]=function(a,b){var ret=0;function _115(name){if(typeof name==="undefined"){return undefined;}var _116=name.match(/\s*(\S+)$/);return _116?_116[1]:name;};var _117=_115(a);var _118=_115(b);if(_117>_118||typeof _117==="undefined"){ret=1;}else{if(_117<_118||typeof _118==="undefined"){ret=-1;}}return ret;};var _119=[{attribute:"Producer",descending:true},{attribute:"Title",descending:true}];var d=new doh.Deferred();function _11a(_11b,_11c){var _11d=[5,4,0,3,2,1,6];t.assertTrue(_11b.length===7);var _11e=true;for(var i=0;i<_11b.length;i++){if(!(_114.getIdentity(_11b[i])===_11d[i])){_11e=false;break;}}t.assertTrue(_11e);d.callback(true);};_114.fetch({sort:_119,onComplete:_11a,onError:_1.partial(_3.data.tests.stores.CsvStore.error,t,d)});return d;},{name:"testReadAPI_fetch_abort",runTest:function(t){if(_1.isBrowser){var args=_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv");var _11f=new _3.data.CsvStore(args);var d=new doh.Deferred();var _120=false;var _121=function(_122,_123){t.is(7,_122.length);if(_120){d.errback(new Error("Should not be here."));}else{d.callback(true);}};var _124=function(_125,_126){t.assertTrue(true);d.callback(true);};var req=_11f.fetch({onComplete:_121,onError:_124});_120=true;req.abort();return d;}}},function testReadAPI_functionConformance(t){var _127=new _3.data.CsvStore(_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv"));var _128=new _1.data.api.Read();var _129=true;for(var i in _128){if(i.toString().charAt(0)!=="_"){var _12a=_128[i];if(typeof _12a==="function"){var _12b=_127[i];if(!(typeof _12b==="function")){_129=false;break;}}}}t.assertTrue(_129);},function testIdentityAPI_functionConformance(t){var _12c=new _3.data.CsvStore(_3.data.tests.stores.CsvStore.getDatasource("stores/movies.csv"));var _12d=new _1.data.api.Identity();var _12e=true;for(var i in _12d){if(i.toString().charAt(0)!=="_"){var _12f=_12d[i];if(typeof _12f==="function"){var _130=_12c[i];if(!(typeof _130==="function")){_12e=false;break;}}}}t.assertTrue(_12e);}]);});require(["dojox/data/tests/stores/CsvStore"]);