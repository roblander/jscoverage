if (! _$jscoverage['javascript-for.js']) {
  _$jscoverage['javascript-for.js'] = [];
  _$jscoverage['javascript-for.js'][1] = 0;
  _$jscoverage['javascript-for.js'][2] = 0;
  _$jscoverage['javascript-for.js'][5] = 0;
  _$jscoverage['javascript-for.js'][6] = 0;
  _$jscoverage['javascript-for.js'][9] = 0;
  _$jscoverage['javascript-for.js'][10] = 0;
  _$jscoverage['javascript-for.js'][13] = 0;
  _$jscoverage['javascript-for.js'][14] = 0;
  _$jscoverage['javascript-for.js'][17] = 0;
  _$jscoverage['javascript-for.js'][18] = 0;
  _$jscoverage['javascript-for.js'][20] = 0;
  _$jscoverage['javascript-for.js'][21] = 0;
}
_$jscoverage['javascript-for.js'].source = ["<span class=\"k\">for</span> <span class=\"k\">(</span>i <span class=\"k\">in</span> x<span class=\"k\">)</span> <span class=\"k\">{</span>","  x<span class=\"k\">();</span>","<span class=\"k\">}</span>","","<span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i <span class=\"k\">in</span> x<span class=\"k\">)</span> <span class=\"k\">{</span>","  x<span class=\"k\">();</span>","<span class=\"k\">}</span>","","<span class=\"k\">for</span> <span class=\"k\">(</span>i <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span> i <span class=\"k\">&lt;</span> x<span class=\"k\">;</span> i<span class=\"k\">++)</span> <span class=\"k\">{</span>","  x<span class=\"k\">();</span>","<span class=\"k\">}</span>","","<span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> j <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span> j <span class=\"k\">&lt;</span> x<span class=\"k\">;</span> j<span class=\"k\">++)</span> <span class=\"k\">{</span>","  x<span class=\"k\">();</span>","<span class=\"k\">}</span>","","<span class=\"k\">for</span> <span class=\"k\">(</span>i <span class=\"k\">in</span> x<span class=\"k\">)</span>","  x<span class=\"k\">();</span>","","<span class=\"k\">for</span> <span class=\"k\">(</span>i<span class=\"k\">.</span>value <span class=\"k\">in</span> x<span class=\"k\">)</span> <span class=\"k\">{</span>","  x<span class=\"k\">();</span>","<span class=\"k\">}</span>"];
_$jscoverage['javascript-for.js'][1]++;
for (i in x) {
  _$jscoverage['javascript-for.js'][2]++;
  x();
}
_$jscoverage['javascript-for.js'][5]++;
for (var i in x) {
  _$jscoverage['javascript-for.js'][6]++;
  x();
}
_$jscoverage['javascript-for.js'][9]++;
for (i = 0; (i < x); (i++)) {
  _$jscoverage['javascript-for.js'][10]++;
  x();
}
_$jscoverage['javascript-for.js'][13]++;
for (var j = 0; (j < x); (j++)) {
  _$jscoverage['javascript-for.js'][14]++;
  x();
}
_$jscoverage['javascript-for.js'][17]++;
for (i in x) {
  _$jscoverage['javascript-for.js'][18]++;
  x();
}
_$jscoverage['javascript-for.js'][20]++;
for (i.value in x) {
  _$jscoverage['javascript-for.js'][21]++;
  x();
}
