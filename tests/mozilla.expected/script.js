/* automatically generated by JSCoverage - do not edit */
try {
  Components.utils.import('resource://gre/modules/jscoverage.jsm');
  dump('script.js: successfully imported jscoverage module\n');
}
catch (e) {
  _$jscoverage = {};
  dump('script.js: failed to import jscoverage module - coverage not available for this file\n');
}
if (! _$jscoverage['script.js']) {
  _$jscoverage['script.js'] = [];
  _$jscoverage['script.js'][1] = 0;
  _$jscoverage['script.js'][4] = 0;
  _$jscoverage['script.js'][5] = 0;
}
_$jscoverage['script.js'].source = ["dump<span class=\"k\">(</span><span class=\"s\">\"hello\"</span><span class=\"k\">);</span>","","<span class=\"c\">// test formatting &amp;lt; &amp;gt; &amp;amp;</span>","<span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"s\">'a'</span> <span class=\"k\">&lt;</span> <span class=\"s\">'b'</span> <span class=\"k\">&amp;&amp;</span> <span class=\"s\">'a'</span> <span class=\"k\">&gt;</span> <span class=\"s\">'b'</span><span class=\"k\">)</span> <span class=\"k\">{</span>","  dump<span class=\"k\">(</span><span class=\"s\">\"?\"</span><span class=\"k\">);</span>","<span class=\"k\">}</span>"];
_$jscoverage['script.js'][1]++;
dump("hello");
_$jscoverage['script.js'][4]++;
if ("a" < "b" && "a" > "b") {
  _$jscoverage['script.js'][5]++;
  dump("?");
}
