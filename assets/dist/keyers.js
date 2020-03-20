webpackJsonp([1],{0:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(1),u=n(o),i=r(14),s=r(11),a=n(s),c=r(314),f=n(c),l=r(315),p=n(l),d=r(316),y=n(d);(0,i.render)(u.default.createElement(a.default,{algorithm:f.default}),document.getElementById("fingerprint-mount")),(0,i.render)(u.default.createElement(a.default,{algorithm:c.ngramsFingerprint.bind(null,2)}),document.getElementById("bigram-fingerprint-mount")),(0,i.render)(u.default.createElement(a.default,{algorithm:c.ngramsFingerprint.bind(null,3)}),document.getElementById("trigram-fingerprint-mount")),(0,i.render)(u.default.createElement(a.default,{algorithm:p.default}),document.getElementById("omission-mount")),(0,i.render)(u.default.createElement(a.default,{algorithm:y.default}),document.getElementById("skeleton-mount"))},5:function(t,e,r){"use strict";var n=r(15),o=n.Symbol;t.exports=o},6:function(t,e){"use strict";function r(t,e){var r=[];if(!t.global){var n=t.exec(e);return n&&r.push(n),r}for(var o=void 0;o=t.exec(e);)r.push(o);return t.lastIndex=0,r}function n(t){return"string"==typeof t?t.split(""):t}function o(t){for(var e="string"==typeof t,r=n(t),o=[r[0]],u=1,i=r.length;u<i;u++)r[u]!==r[u-1]&&o.push(r[u]);return e?o.join(""):o}function u(t,e){var r={};if(t=t.split(""),e=e.split(""),t.length!==e.length)throw Error("talisman/helpers#translation: given strings don't have the same length.");for(var n=0,o=t.length;n<o;n++)r[t[n]]=e[n];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.findall=r,e.seq=n,e.squeeze=o,e.translation=u},7:function(t,e,r){"use strict";function n(t){return t=u(t),t&&t.replace(i,o).replace(p,"")}var o=r(34),u=r(29),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",c="\\u20d0-\\u20ff",f=s+a+c,l="["+f+"]",p=RegExp(l,"g");t.exports=n},11:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(1),u=n(o),i=r(13),s=r(12),a=n(s),c=function(t){return t},f=function(t,e){return t===e},l=(0,i.compose)((0,i.withState)("wordOne","setWordOne",""),(0,i.withState)("wordTwo","setWordTwo","")),p=l(function(t){var e=t.algorithm,r=t.codeRenderer,n=void 0===r?c:r,o=t.comparator,i=void 0===o?f:o,s=t.wordOne,l=t.wordTwo,p=t.setWordOne,d=t.setWordTwo,y=s?e(s):null,v=l?e(l):null,g=y?n(y):"",m=v?n(v):"",h="·",_="default";return y&&v&&(console.log(y,v),i(y,v)?(h="=~",_="success"):(h="!~",_="error")),u.default.createElement("table",null,u.default.createElement("tbody",null,u.default.createElement("tr",null,u.default.createElement("td",null,u.default.createElement(a.default,{placeholder:"Word 1",value:s,onChange:function(t){return p(t.target.value)},status:_})),u.default.createElement("td",{style:{width:"15%",textAlign:"center"}},u.default.createElement("strong",null,h)),u.default.createElement("td",null,u.default.createElement(a.default,{placeholder:"Word 2",value:l,onChange:function(t){return d(t.target.value)},status:_}))),u.default.createElement("tr",null,u.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},g," "),u.default.createElement("td",null),u.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},m," "))))});e.default=p},15:function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=r(23),u="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,i=o||u||Function("return this")();t.exports=i},18:function(t,e,r){"use strict";function n(t){return null==t?void 0===t?a:s:c&&c in Object(t)?u(t):i(t)}var o=r(5),u=r(24),i=r(25),s="[object Null]",a="[object Undefined]",c=o?o.toStringTag:void 0;t.exports=n},21:function(t,e){"use strict";function r(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}t.exports=r},22:function(t,e,r){"use strict";function n(t){if("string"==typeof t)return t;if(i(t))return u(t,n)+"";if(s(t))return f?f.call(t):"";var e=t+"";return"0"==e&&1/t==-a?"-0":e}var o=r(5),u=r(21),i=r(26),s=r(28),a=1/0,c=o?o.prototype:void 0,f=c?c.toString:void 0;t.exports=n},23:function(t,e){(function(e){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n="object"==("undefined"==typeof e?"undefined":r(e))&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},24:function(t,e,r){"use strict";function n(t){var e=i.call(t,a),r=t[a];try{t[a]=void 0;var n=!0}catch(t){}var o=s.call(t);return n&&(e?t[a]=r:delete t[a]),o}var o=r(5),u=Object.prototype,i=u.hasOwnProperty,s=u.toString,a=o?o.toStringTag:void 0;t.exports=n},25:function(t,e){"use strict";function r(t){return o.call(t)}var n=Object.prototype,o=n.toString;t.exports=r},26:function(t,e){"use strict";var r=Array.isArray;t.exports=r},27:function(t,e){"use strict";function r(t){return null!=t&&"object"==("undefined"==typeof t?"undefined":n(t))}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=r},28:function(t,e,r){"use strict";function n(t){return"symbol"==("undefined"==typeof t?"undefined":o(t))||i(t)&&u(t)==s}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=r(18),i=r(27),s="[object Symbol]";t.exports=n},29:function(t,e,r){"use strict";function n(t){return null==t?"":o(t)}var o=r(22);t.exports=n},33:function(t,e){"use strict";function r(t){return function(e){return null==t?void 0:t[e]}}t.exports=r},34:function(t,e,r){"use strict";var n=r(33),o={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},u=n(o);t.exports=u},50:function(t,e,r){"use strict";function n(t,e){for(var r=t.length;r--;)if(o(t[r][0],e))return r;return-1}var o=r(198);t.exports=n},51:function(t,e,r){"use strict";function n(t,e){var r=t.__data__;return o(e)?r["string"==typeof e?"string":"hash"]:r.map}var o=r(182);t.exports=n},52:function(t,e,r){"use strict";var n=r(63),o=n(Object,"create");t.exports=o},63:function(t,e,r){"use strict";function n(t,e){var r=u(t,e);return o(r)?r:void 0}var o=r(171),u=r(176);t.exports=n},93:function(t,e){"use strict";function r(t,e){if(t<1)throw Error("talisman/tokenizers/ngrams: first argument should be a positive integer > 0.");for(var r="string"==typeof e,n=[],o=0,u=e.length;o<u-t+1;o++){for(var i=[],s=0;s<t;s++)i.push(e[o+s]);n.push(r?i.join(""):i)}return n}Object.defineProperty(e,"__esModule",{value:!1}),e.default=r;var n=r.bind(null,2),o=r.bind(null,3),u=r.bind(null,4);e.bigrams=n,e.trigrams=o,e.quadrigrams=u,t.exports=e.default,e.default.bigrams=e.bigrams,e.default.trigrams=e.trigrams,e.default.quadrigrams=e.quadrigrams},100:function(t,e){"use strict";function r(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}t.exports=r},101:function(t,e){"use strict";function r(t){var e="undefined"==typeof t?"undefined":n(t);return null!=t&&("object"==e||"function"==e)}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=r},140:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){t=t||{};var e=t.ngrams||v.ngrams,r=t.digits===!1||!v.digits,n=t.minTokenSize||v.minTokenSize,o=t.sort===!1,u=t.stopwords||v.stopwords;u&&(u=new RegExp("(?:"+u.map(function(t){return"\\b"+(0,l.escapeRegexp)(t)+"\\b"}).join("|")+")","gi"));var s=t.split||v.split;s&&(s=new RegExp("["+(0,l.escapeRegexp)(s.join(""))+"]","g"));var c=void 0;return n>1&&(c=new RegExp("\\b\\S{1,"+n+"}\\b","g")),function(t,n){e||(n=t),s&&(n=n.replace(s," ")),u&&(n=n.replace(u,"")),r&&(n=n.replace(d,"")),n=n.toLowerCase(),c&&(n=n.replace(c,"")),n=n.replace(y,""),n=(0,i.default)(n),n=n.trim();var l=void 0;return l=e?(0,f.default)(t,n.replace(p,"")):n.split(p),l=(0,a.default)(l),o||l.sort(),l}}Object.defineProperty(e,"__esModule",{value:!1}),e.ngramsFingerprint=void 0,e.createTokenizer=o;var u=r(7),i=n(u),s=r(201),a=n(s),c=r(93),f=n(c),l=r(350),p=/\s+/g,d=/\d/g,y=new RegExp("[\\u2000-\\u206F\\u2E00-\\u2E7F'!\"#$%&()*+,\\-.\\/:;<=>?@\\[\\]^_`{|}~\\x00-\\x08\\x0A-\\x1F\\x7F]","g"),v={digits:!0,minTokenSize:1,ngrams:!1,sort:!0,split:null,stopwords:null};e.default=o();e.ngramsFingerprint=o({ngrams:!0});t.exports=e.default,e.default.createTokenizer=e.createTokenizer,e.default.ngramsFingerprint=e.ngramsFingerprint},160:function(t,e,r){"use strict";function n(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}var o=r(177),u=r(178),i=r(179),s=r(180),a=r(181);n.prototype.clear=o,n.prototype.delete=u,n.prototype.get=i,n.prototype.has=s,n.prototype.set=a,t.exports=n},161:function(t,e,r){"use strict";function n(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}var o=r(184),u=r(185),i=r(186),s=r(187),a=r(188);n.prototype.clear=o,n.prototype.delete=u,n.prototype.get=i,n.prototype.has=s,n.prototype.set=a,t.exports=n},162:function(t,e,r){"use strict";var n=r(63),o=r(15),u=n(o,"Map");t.exports=u},163:function(t,e,r){"use strict";function n(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}var o=r(189),u=r(190),i=r(191),s=r(192),a=r(193);n.prototype.clear=o,n.prototype.delete=u,n.prototype.get=i,n.prototype.has=s,n.prototype.set=a,t.exports=n},164:function(t,e,r){"use strict";var n=r(63),o=r(15),u=n(o,"Set");t.exports=u},165:function(t,e,r){"use strict";function n(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new o;++e<r;)this.add(t[e])}var o=r(163),u=r(194),i=r(195);n.prototype.add=n.prototype.push=u,n.prototype.has=i,t.exports=n},166:function(t,e,r){"use strict";function n(t,e){var r=null==t?0:t.length;return!!r&&o(t,e,0)>-1}var o=r(169);t.exports=n},167:function(t,e){"use strict";function r(t,e,r){for(var n=-1,o=null==t?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1}t.exports=r},168:function(t,e){"use strict";function r(t,e,r,n){for(var o=t.length,u=r+(n?1:-1);n?u--:++u<o;)if(e(t[u],u,t))return u;return-1}t.exports=r},169:function(t,e,r){"use strict";function n(t,e,r){return e===e?i(t,e,r):o(t,u,r)}var o=r(168),u=r(170),i=r(196);t.exports=n},170:function(t,e){"use strict";function r(t){return t!==t}t.exports=r},171:function(t,e,r){"use strict";function n(t){if(!i(t)||u(t))return!1;var e=o(t)?y:c;return e.test(s(t))}var o=r(199),u=r(183),i=r(101),s=r(197),a=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,p=f.toString,d=l.hasOwnProperty,y=RegExp("^"+p.call(d).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=n},172:function(t,e,r){"use strict";function n(t,e,r){var n=-1,l=u,p=t.length,d=!0,y=[],v=y;if(r)d=!1,l=i;else if(p>=f){var g=e?null:a(t);if(g)return c(g);d=!1,l=s,v=new o}else v=e?[]:y;t:for(;++n<p;){var m=t[n],h=e?e(m):m;if(m=r||0!==m?m:0,d&&h===h){for(var _=v.length;_--;)if(v[_]===h)continue t;e&&v.push(h),y.push(m)}else l(v,h,r)||(v!==y&&v.push(h),y.push(m))}return y}var o=r(165),u=r(166),i=r(167),s=r(173),a=r(175),c=r(100),f=200;t.exports=n},173:function(t,e){"use strict";function r(t,e){return t.has(e)}t.exports=r},174:function(t,e,r){"use strict";var n=r(15),o=n["__core-js_shared__"];t.exports=o},175:function(t,e,r){"use strict";var n=r(164),o=r(200),u=r(100),i=1/0,s=n&&1/u(new n([,-0]))[1]==i?function(t){return new n(t)}:o;t.exports=s},176:function(t,e){"use strict";function r(t,e){return null==t?void 0:t[e]}t.exports=r},177:function(t,e,r){"use strict";function n(){this.__data__=o?o(null):{},this.size=0}var o=r(52);t.exports=n},178:function(t,e){"use strict";function r(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=r},179:function(t,e,r){"use strict";function n(t){var e=this.__data__;if(o){var r=e[t];return r===u?void 0:r}return s.call(e,t)?e[t]:void 0}var o=r(52),u="__lodash_hash_undefined__",i=Object.prototype,s=i.hasOwnProperty;t.exports=n},180:function(t,e,r){"use strict";function n(t){var e=this.__data__;return o?void 0!==e[t]:i.call(e,t)}var o=r(52),u=Object.prototype,i=u.hasOwnProperty;t.exports=n},181:function(t,e,r){"use strict";function n(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=o&&void 0===e?u:e,this}var o=r(52),u="__lodash_hash_undefined__";t.exports=n},182:function(t,e){"use strict";function r(t){var e="undefined"==typeof t?"undefined":n(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=r},183:function(t,e,r){"use strict";function n(t){return!!u&&u in t}var o=r(174),u=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=n},184:function(t,e){"use strict";function r(){this.__data__=[],this.size=0}t.exports=r},185:function(t,e,r){"use strict";function n(t){var e=this.__data__,r=o(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():i.call(e,r,1),--this.size,!0}var o=r(50),u=Array.prototype,i=u.splice;t.exports=n},186:function(t,e,r){"use strict";function n(t){var e=this.__data__,r=o(e,t);return r<0?void 0:e[r][1]}var o=r(50);t.exports=n},187:function(t,e,r){"use strict";function n(t){return o(this.__data__,t)>-1}var o=r(50);t.exports=n},188:function(t,e,r){"use strict";function n(t,e){var r=this.__data__,n=o(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var o=r(50);t.exports=n},189:function(t,e,r){"use strict";function n(){this.size=0,this.__data__={hash:new o,map:new(i||u),string:new o}}var o=r(160),u=r(161),i=r(162);t.exports=n},190:function(t,e,r){"use strict";function n(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=r(51);t.exports=n},191:function(t,e,r){"use strict";function n(t){return o(this,t).get(t)}var o=r(51);t.exports=n},192:function(t,e,r){"use strict";function n(t){return o(this,t).has(t)}var o=r(51);t.exports=n},193:function(t,e,r){"use strict";function n(t,e){var r=o(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var o=r(51);t.exports=n},194:function(t,e){"use strict";function r(t){return this.__data__.set(t,n),this}var n="__lodash_hash_undefined__";t.exports=r},195:function(t,e){"use strict";function r(t){return this.__data__.has(t)}t.exports=r},196:function(t,e){"use strict";function r(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}t.exports=r},197:function(t,e){"use strict";function r(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var n=Function.prototype,o=n.toString;t.exports=r},198:function(t,e){"use strict";function r(t,e){return t===e||t!==t&&e!==e}t.exports=r},199:function(t,e,r){"use strict";function n(t){if(!u(t))return!1;var e=o(t);return e==s||e==a||e==i||e==c}var o=r(18),u=r(101),i="[object AsyncFunction]",s="[object Function]",a="[object GeneratorFunction]",c="[object Proxy]";t.exports=n},200:function(t,e){"use strict";function r(){}t.exports=r},201:function(t,e,r){"use strict";function n(t){return t&&t.length?o(t):[]}var o=r(172);t.exports=n},314:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){t=t||{};var e=(0,u.createTokenizer)(t);return t.ngrams?function(t,r){return e(t,r).join("")}:function(t){return e(t).join(" ")}}Object.defineProperty(e,"__esModule",{value:!1}),e.nameFingerprint=e.ngramsFingerprint=void 0,e.createKeyer=o;var u=r(140),i=r(361),s=n(i);e.default=o();var a=o({ngrams:!0}),c=function(t){return(0,s.default)(t).join(" ")};e.ngramsFingerprint=a,e.nameFingerprint=c,t.exports=e.default,e.default.createKeyer=e.createKeyer,e.default.ngramsFingerprint=e.ngramsFingerprint,e.default.nameFingerprint=e.nameFingerprint},315:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){t=(0,i.default)(t),t=t.toUpperCase(),t=t.replace(s,"");for(var e="",r=new Set,n=new Set(t),o=0,u=a.length;o<u;o++){var f=a[o];n.has(f)&&(e+=f)}for(var l=0,p=t.length;l<p;l++){var d=t[l];c.has(d)||r.has(d)||(r.add(d),e+=d)}return e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var u=r(7),i=n(u),s=/[^A-Z]/g,a="JKQXZVWYBFMGPDHCLNTSR",c=new Set(a);t.exports=e.default},316:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return Array.from(t).join("")}function u(t){t=(0,s.default)(t),t=t.toUpperCase(),t=t.replace(a,"");var e=t[0];if(!e)return"";for(var r=new Set,n=new Set,u=1,i=t.length;u<i;u++){var f=t[u];f!==e&&(c.has(f)?n.add(f):r.add(f))}return e+o(r)+o(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var i=r(7),s=n(i),a=/[^A-Z]/g,c=new Set("AEIOU");t.exports=e.default},350:function(t,e){"use strict";function r(t){return t.replace(o,"\\$1")}function n(t){return t.split("").map(function(t){return"("+r(t)+")"}).join(".*?")}Object.defineProperty(e,"__esModule",{value:!0}),e.escapeRegexp=r,e.createFuzzyPattern=n;var o=/([|\\{}()[\]^$+*?.\-])/g},361:function(t,e,r){"use strict";function n(t){t=t.toLowerCase();for(var e=0,r=i.length;e<r;e++)t=t.replace(i[e][0],i[e][1]);return a(t).map(u.squeeze)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var o=r(140),u=r(6),i=[[/\bmc(?=\w)/g,"mac"],[/\b(ma?c\s+)(?=\w)/g,"mac"],[/\blee\b/g,"li"],[/ski\b/g,"sky"],[/\bvan\b/g,"von"],[/ö/g,"oe"],[/ü/g,"ue"]],s={digits:!1,split:["-"],stopwords:["the","le","la","da","di","of","doctor","dr","esq","mgr","professor","prof","md","phd","sir","lord","mr","mrs","ms","mme","mlle","jr","junior","sr","senior"]},a=(0,o.createTokenizer)(s);t.exports=e.default}});