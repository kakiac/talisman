webpackJsonp([16],{0:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var a=n(1),r=l(a),u=n(15),c=n(11),o=l(c),s=n(376);(0,u.render)(r.default.createElement(o.default,{algorithm:s.minimal}),document.getElementById("unine-minimal-mount"))},11:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=l(a),u=n(13),c=n(12),o=l(c),s=function(e){return e},d=function(e,t){return e===t},i=(0,u.compose)((0,u.withState)("wordOne","setWordOne",""),(0,u.withState)("wordTwo","setWordTwo","")),f=i(function(e){var t=e.algorithm,n=e.codeRenderer,l=void 0===n?s:n,a=e.comparator,u=void 0===a?d:a,c=e.wordOne,i=e.wordTwo,f=e.setWordOne,m=e.setWordTwo,g=c?t(c):null,h=i?t(i):null,v=g?l(g):"",E=h?l(h):"",w="·",b="default";return g&&h&&(console.log(g,h),u(g,h)?(w="=~",b="success"):(w="!~",b="error")),r.default.createElement("table",null,r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("td",null,r.default.createElement(o.default,{placeholder:"Word 1",value:c,onChange:function(e){return f(e.target.value)},status:b})),r.default.createElement("td",{style:{width:"15%",textAlign:"center"}},r.default.createElement("strong",null,w)),r.default.createElement("td",null,r.default.createElement(o.default,{placeholder:"Word 2",value:i,onChange:function(e){return m(e.target.value)},status:b}))),r.default.createElement("tr",null,r.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},v," "),r.default.createElement("td",null),r.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},E," "))))});t.default=f},376:function(e,t){"use strict";function n(e,t,n){return e.substr(0,t)+n+e.substr(t+n.length)}function l(e){if(e.length<5)return e;for(var t=0,l=e.length;t<l;t++){var a=e[t];switch(a){case"à":case"á":case"â":case"ä":e=n(e,t,"a");break;case"ò":case"ó":case"ô":case"ö":e=n(e,t,"o");break;case"è":case"é":case"ê":case"ë":e=n(e,t,"e");break;case"ù":case"ú":case"û":case"ü":e=n(e,t,"u");break;case"ì":case"í":case"î":case"ï":e=n(e,t,"i")}}var r=e[e.length-1];if("o"===r||"a"===r||"e"===r)return e.slice(0,-1);if("s"===r){var u=e[e.length-2],c=e[e.length-3],o=e[e.length-4];if("e"===u&&"s"===c&&"e"===o)return e.slice(0,-2);if("e"===u&&"c"===c)return e=n(e,e.length-3,"z"),e.slice(0,-2);if("o"===u||"a"===u||"e"===u)return e.slice(0,-2)}return e}Object.defineProperty(t,"__esModule",{value:!1}),t.minimal=l,t.default=l,e.exports=t.default,t.default.minimal=t.minimal}});