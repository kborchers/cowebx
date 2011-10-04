/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","dojox/dtl/dom","dojox/dtl/Context","dojox/dtl/tests/dom/util"],function(_1,_2,_3){_1.getObject("dojox.dtl.tests.dom.tag",1);doh.register("dojox.dtl.dom.tag",[function test_errors(t){var dd=_3.dtl;var _4;var _5=false;try{_4=new dd.DomTemplate("No div");dd.tests.dom.util.render(_4);}catch(e){t.is("Text should not exist outside of the root node in template",e.message);_5=true;}t.t(_5);var _6=new _3.dtl.Context({test:"Pocket"});_5=false;try{_4=new dd.DomTemplate("{{ test }}");dd.tests.dom.util.render(_4,_6);}catch(e){t.is("Text should not exist outside of the root node in template",e.message);_5=true;}t.t(_5);_4=new dd.DomTemplate("<div></div>extra content");_5=false;try{dd.tests.dom.util.render(_4);}catch(e){t.is("Content should not exist outside of the root node in template",e.message);_5=true;}t.t(_5);_4=new dd.DomTemplate("<div></div><div></div>");_5=false;try{dd.tests.dom.util.render(_4);}catch(e){t.is("Content should not exist outside of the root node in template",e.message);_5=true;}t.t(_5);_4=new dd.DomTemplate("{% if missing %}<div></div>{% endif %}");_5=false;try{dd.tests.dom.util.render(_4);}catch(e){t.is("Rendered template does not have a root node",e.message);_5=true;}t.t(_5);},function test_tag_attributes(){var dd=_3.dtl;var _7=new dd.DomTemplate("<div>{% for item in items %}<a index=\"{{forloop.counter0}}\" id=\"id_{{item.param}}\">{{item.param}}</a>{% endfor %}</div>");var _8=new dd.Context({items:[{name:"apple",param:"appleparam"},{name:"banana",param:"bananaparam"},{name:"orange",param:"orangeparam"}]});doh.is("<div><a index=\"0\" id=\"id_appleparam\">appleparam</a><a index=\"1\" id=\"id_bananaparam\">bananaparam</a><a index=\"2\" id=\"id_orangeparam\">orangeparam</a></div>",dd.tests.dom.util.render(_7,_8));},function test_tag_extend(t){var dd=_3.dtl;var _9=new dd.Context({base:_1.moduleUrl("dojox.dtl.tests.templates","base.html")});var _a=new dd.DomTemplate("{% extends base %}{% block base %}<p>1</p><p>2</p><ul><li>2a</li><li>2b</li><li>2c</li></ul><p>3</p><ul><li>3a</li><li>3b</li><li>3c</li></ul><p>4</p><ul><li>4a</li><li>4b</li><li>4c</li></ul><p>5</p>{% endblock %}");t.is("<div>BaseBefore<p>1</p><p>2</p><ul><li>2a</li><li>2b</li><li>2c</li></ul><p>3</p><ul><li>3a</li><li>3b</li><li>3c</li></ul><p>4</p><ul><li>4a</li><li>4b</li><li>4c</li></ul><p>5</p>BaseAfter</div>",dd.tests.dom.util.render(_a,_9));},function test_tag_for(t){var dd=_3.dtl;var _b=new dd.Context({items:["apple","banana","lemon"]});var _c=new dd.DomTemplate("<div><ul>{% for item in items %}<li class=\"{{ item|length }}\">{{ item }}</li>{% endfor %}</ul></div>");t.is("<div><ul><li class=\"5\">apple</li><li class=\"6\">banana</li><li class=\"5\">lemon</li></ul></div>",dd.tests.dom.util.render(_c,_b));_c=new dd.DomTemplate("<div><select>{% for item in items %}<option>{{ item }}</option>\n{% endfor %}</select></div>");t.is("<div><select><option>apple</option><option>banana</option><option>lemon</option></select></div>",dd.tests.dom.util.render(_c,_b));},function test_tag_if(t){var dd=_3.dtl;var _d=new dd.Context({key:true});var _e=new dd.DomTemplate("{% if key %}<div>has key</div>{% else %}<div>no key</div>{% endif %}");t.is("<div>has key</div>",dd.tests.dom.util.render(_e,_d));_d.key=false;t.is("<div>no key</div>",dd.tests.dom.util.render(_e,_d));},function test_tag_ifchanged(t){var dd=_3.dtl;var _f=new dd.Context({year:2008,days:[new Date(2008,0,12),new Date(2008,0,28),new Date(2008,1,1),new Date(2008,1,1),new Date(2008,1,1)]});var _10=new dd.DomTemplate("<div><h1>Archive for {{ year }}</h1>"+"{% for date in days %}"+"{% ifchanged %}<h3>Month: </h3><h3>{{ date|date:\"F\" }}</h3>{% endifchanged %}"+"<a href=\"{{ date|date:'M/d'|lower }}/\">{{ date|date:'j' }}</a>"+"{% endfor %}</div>");t.is("<div><h1>Archive for 2008</h1>"+"<h3>Month: </h3><h3>January</h3>"+"<a href=\"jan/12/\">12</a>"+"<a href=\"jan/28/\">28</a>"+"<h3>Month: </h3><h3>February</h3>"+"<a href=\"feb/01/\">1</a>"+"<a href=\"feb/01/\">1</a>"+"<a href=\"feb/01/\">1</a></div>",dd.tests.dom.util.render(_10,_f));_10=new dd.DomTemplate("<div>{% for date in days %}"+"{% ifchanged date.date %} {{ date.date }} {% endifchanged %}"+"{% ifchanged date.hour date.date %}"+"{{ date.hour }}"+"{% endifchanged %}"+"{% endfor %}</div>");t.is("<div> 2008-01-12 0 2008-01-28 0 2008-02-01 0</div>",dd.tests.dom.util.render(_10,_f));},function test_tag_ifequal(t){var dd=_3.dtl;var _11=new dd.Context({items:[{name:"apple",color:"red"},{name:"banana",color:"yellow"},{name:"pear",color:"green"},{name:"kiwi",color:"brown"}],edit_item:"banana"});var _12=new dd.DomTemplate("<div><ul>{% for item in items %}<li>{{ item.name }}</li>{% endfor %}</ul></div>");t.is("<div><ul><li>apple</li><li>banana</li><li>pear</li><li>kiwi</li></ul></div>",dd.tests.dom.util.render(_12,_11));_12=new dd.DomTemplate("<div><ul>{% for item in items %}<li><span>{{ item.name }}</span><br/><p>{{ item.color }}</p></li>{% endfor %}</ul></div>");t.is("<div><ul><li><span>apple</span><br/><p>red</p></li><li><span>banana</span><br/><p>yellow</p></li><li><span>pear</span><br/><p>green</p></li><li><span>kiwi</span><br/><p>brown</p></li></ul></div>",dd.tests.dom.util.render(_12,_11));_12=new dd.DomTemplate("<div><ul>{% for item in items %}<li>{% ifequal item.name edit_item %}<label>Name: <input type='text' name='name' value=\"{{ item.name }}\"/></label><br/><label>Color: <textarea name='color'>{{ item.color }}</textarea></label>{% else %}<span>{{ item.name }}</span><br/><p>{{ item.color }}</p>{% endifequal %}</li>{% endfor %}</ul></div>");t.is("<div><ul><li><span>apple</span><br/><p>red</p></li><li><label>Name: <input name=\"name\" value=\"banana\"/></label><br/><label>Color: <textarea name=\"color\">yellow</textarea></label></li><li><span>pear</span><br/><p>green</p></li><li><span>kiwi</span><br/><p>brown</p></li></ul></div>",dd.tests.dom.util.render(_12,_11));_12=new dd.DomTemplate("<div><ul>{% for item in items %}<li>{% ifequal item.name edit_item %}<div><label>Name: <input type='text' name='name' value=\"{{ item.name }}\"/></label><br/><label>Color: <textarea name='color'>{{ item.color }}</textarea></label></div>{% else %}<div><span>{{ item.name }}</span><br/><p>{{ item.color }}</p></div>{% endifequal %}</li>{% endfor %}</ul></div>");t.is("<div><ul><li><div><span>apple</span><br/><p>red</p></div></li><li><div><label>Name: <input name=\"name\" value=\"banana\"/></label><br/><label>Color: <textarea name=\"color\">yellow</textarea></label></div></li><li><div><span>pear</span><br/><p>green</p></div></li><li><div><span>kiwi</span><br/><p>brown</p></div></li></ul></div>",dd.tests.dom.util.render(_12,_11));_12=new dd.DomTemplate("<div><ul>{% for item in items %}{% ifequal item.name edit_item %}<li><label>Name: <input type='text' name='name' value=\"{{ item.name }}\"/></label><br/><label>Color: <textarea name='color'>{{ item.color }}</textarea></label></li>{% else %}<li><span>{{ item.name }}</span><br/><p>{{ item.color }}</p></li>{% endifequal %}{% endfor %}</ul></div>");t.is("<div><ul><li><span>apple</span><br/><p>red</p></li><li><label>Name: <input name=\"name\" value=\"banana\"/></label><br/><label>Color: <textarea name=\"color\">yellow</textarea></label></li><li><span>pear</span><br/><p>green</p></li><li><span>kiwi</span><br/><p>brown</p></li></ul></div>",dd.tests.dom.util.render(_12,_11));},function test_tag_include(t){var dd=_3.dtl;var _13=new dd.Context({hello:_1.moduleUrl("dojox.dtl.tests.templates","hello.html"),person:"Bob",people:["Charles","Ralph","Julia"]});var _14=new dd.DomTemplate("<div>{% include hello %}</div>");t.is("<div>Hello, <span>Bob</span></div>",dd.tests.dom.util.render(_14,_13));_14=new dd.DomTemplate("<div>{% include \"../../dojox/dtl/tests/templates/hello.html\" %}</div>");t.is("<div>Hello, <span>Bob</span></div>",dd.tests.dom.util.render(_14,_13));_14=new dd.DomTemplate("<div>{% for person in people %}<div class=\"include\">{% include hello %} </div>{% endfor %}</div>");t.is("<div><div class=\"include\">Hello, <span>Charles</span> </div><div class=\"include\">Hello, <span>Ralph</span> </div><div class=\"include\">Hello, <span>Julia</span> </div></div>",dd.tests.dom.util.render(_14,_13));},function test_tag_spaceless(t){var dd=_3.dtl;var _15=new dd.DomTemplate("{% spaceless %}<ul> \n <li>Hot</li> \n\n<li>Pocket </li>\n </ul>{% endspaceless %}");t.is("<ul><li>Hot</li><li>Pocket </li></ul>",dd.tests.dom.util.render(_15));},function test_tag_ssi(t){var dd=_3.dtl;var _16=new dd.Context({hello:_1.moduleUrl("dojox.dtl.tests.templates","hello.html"),person:"Bob",people:["Charles","Ralph","Julia"]});var _17=new dd.DomTemplate("<div>{% ssi hello parsed %}</div>");t.is("<div>Hello, <span>Bob</span></div>",dd.tests.dom.util.render(_17,_16));_17=new dd.DomTemplate("<div>{% ssi hello %}</div>");t.is("<div>Hello, <span>{{ person }}</span></div>",dd.tests.dom.util.render(_17,_16));_17=new dd.DomTemplate("<div>{% ssi \"../../dojox/dtl/tests/templates/hello.html\" parsed %}</div>");t.is("<div>Hello, <span>Bob</span></div>",dd.tests.dom.util.render(_17,_16));_17=new dd.DomTemplate("<div>{% for person in people %}{% ssi hello parsed %} {% endfor %}</div>");t.is("<div>Hello, <span>Charles</span> Hello, <span>Ralph</span> Hello, <span>Julia</span> </div>",dd.tests.dom.util.render(_17,_16));},function test_tag_comment(t){var dd=_3.dtl;var _18=new dd.Context({});var _19=new dd.DomTemplate("<div>abc{% comment %}{% endif %}<div>{% ssi hello parsed %}</div>{% for item in items %}{% endcomment %}xyz</div>");t.is("<div>abcxyz</div>",dd.tests.dom.util.render(_19,_18));},function test_annoying_nesting(){var dd=_3.dtl;var _1a=new dd.Context({items:["apple","banana","orange"]});var _1b=new dd.DomTemplate("<div><select>{% for item in items %}{% ifequal item 'apple' %}<option>=====</option>{% endifequal %}<option>{{ item }}</option>{% endfor %}</select></div>");doh.is("<div><select><option>=====</option><option>apple</option><option>banana</option><option>orange</option></select></div>",dd.tests.dom.util.render(_1b,_1a));_1b=new dd.DomTemplate("<div><table><tr><td>Fruit</td></tr>{% for fruit in items %}<tr><td>{{ fruit }}</td></tr>{% endfor %}</table></div>");doh.is("<div><table><tbody><tr><td>Fruit</td></tr><tr><td>apple</td></tr><tr><td>banana</td></tr><tr><td>orange</td></tr></tbody></table></div>",dd.tests.dom.util.render(_1b,_1a));_1b=new dd.DomTemplate("<div><table><tbody><tr><td>Fruit</td></tr>{% for fruit in items %}<tr><td>{{ fruit }}</td></tr>{% endfor %}</tbody></table></div>");doh.is("<div><table><tbody><tr><td>Fruit</td></tr><tr><td>apple</td></tr><tr><td>banana</td></tr><tr><td>orange</td></tr></tbody></table></div>",dd.tests.dom.util.render(_1b,_1a));_1b=new dd.DomTemplate("<div><table><tr>{% for item in items %}{% ifequal item 'apple' %}<th>=====</th>{% endifequal %}<th>{{ item }}</th>{% endfor %}</tr></table></div>");doh.is("<div><table><tbody><tr><th>=====</th><th>apple</th><th>banana</th><th>orange</th></tr></tbody></table></div>",dd.tests.dom.util.render(_1b,_1a));_1b=new dd.DomTemplate("<div><table><tr>{% for item in items %}{% ifequal item 'apple' %}<td>=====</td>{% endifequal %}<td>{{ item }}</td>{% endfor %}</tr></table></div>");doh.is("<div><table><tbody><tr><td>=====</td><td>apple</td><td>banana</td><td>orange</td></tr></tbody></table></div>",dd.tests.dom.util.render(_1b,_1a));var old=_1.isWebKit;_1.isWebKit=true;_1b=new dd.DomTemplate("<div><table>\n<thead><tr><th>Name</th><th>Count</th></tr></thead>\n<tbody>\n{% for fruit in items %}\n<tr><td>{{ fruit }}</td><td>{{ fruit }}</td></tr>\n{% endfor %}\n</tbody></table></div>");doh.is("<div><table><thead><tr><th>Name</th><th>Count</th></tr></thead><tbody><tr><td>apple</td><td>apple</td></tr><tr><td>banana</td><td>banana</td></tr><tr><td>orange</td><td>orange</td></tr></tbody></table></div>",dd.tests.dom.util.render(_1b,_1a));_1.isWebKit=old;},function test_custom_attributes(){var dd=_3.dtl;var _1c=new dd.Context({frag:{start:10,stop:20}});var _1d=new dd.DomTemplate("<div startLine=\"{{ frag.start }}\" stopLine=\"{{ frag.stop }}\">abc</div>");doh.is("<div startline=\"10\" stopline=\"20\">abc</div>",dd.tests.dom.util.render(_1d,_1c));},function test_emptiness(){var dd=_3.dtl;var _1e=new dd.Context({});var _1f=new dd.DomTemplate("<div>{% if data %}{% else %}<p>Please select a file using the left panel.</p>{% endif %}</div>");doh.is("<div><p>Please select a file using the left panel.</p></div>",dd.tests.dom.util.render(_1f,_1e));_1e.data=true;doh.is("<div/>",dd.tests.dom.util.render(_1f,_1e));},function test_bools(){var dd=_3.dtl;var _20=new dd.Context({checked:false});var _21=new dd.DomTemplate("<div><input checked=\"{{ checked }}\"></div>");doh.is("<div><input checked=\"false\"/></div>",dd.tests.dom.util.render(_21,_20));},function test_mixedCase(){var dd=_3.dtl;var _22=new dd.Context();var _23=new dd.DomTemplate("<div simplecase=\"simple\" mixedCase=\"mixed\">content</div>");doh.is("<div simplecase=\"simple\" mixedcase=\"mixed\">content</div>",dd.tests.dom.util.render(_23,_22));},function test_tabindex_lowercase(){var dd=_3.dtl;var _24=new dd.Context();var _25=new dd.DomTemplate("<div tabindex=\"-1\"></div>");dd.tests.dom.util.render(_25,_24);},function test_tabIndex(){var dd=_3.dtl;var _26=new dd.Context();var _27=new dd.DomTemplate("<div tabIndex=\"-1\"></div>");dd.tests.dom.util.render(_27,_26);}]);});require(["dojox/dtl/tests/dom/tag"]);