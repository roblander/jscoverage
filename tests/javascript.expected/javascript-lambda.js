/* automatically generated by JSCoverage - do not edit */
if (typeof top === 'object' && top !== null) {
  if (typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window
    if (typeof top.opener._$jscoverage === 'object' && top.opener._$jscoverage !== null) {
      var _$jscoverage = top._$jscoverage = top.opener._$jscoverage;
    }
    else {
      var _$jscoverage = top._$jscoverage = top.opener._$jscoverage = {};
    }
  }
  else {
    // this is a browser window
    if (typeof top._$jscoverage === 'object' && top._$jscoverage !== null) {
      var _$jscoverage = top._$jscoverage;
    }
    else {
      var _$jscoverage = top._$jscoverage = {};
    }
  }
}
else {
  // no "top" - this is not a browser window
  if (typeof _$jscoverage === 'object' && _$jscoverage !== null) {
    // nothing to do
  }
  else {
    var _$jscoverage = {};
  }
}
if (! _$jscoverage['javascript-lambda.js']) {
  _$jscoverage['javascript-lambda.js'] = [];
  _$jscoverage['javascript-lambda.js'][3] = 0;
}
_$jscoverage['javascript-lambda.js'].source = ["<span class=\"c\">// https://developer.mozilla.org/en/New_in_JavaScript_1.8</span>","","<span class=\"k\">var</span> square <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">(</span>x<span class=\"k\">)</span> x <span class=\"k\">*</span> x<span class=\"k\">;</span>"];
_$jscoverage['javascript-lambda.js'][3]++;
var square = (function (x) {
  return x * x;
});
