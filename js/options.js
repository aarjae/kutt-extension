!function(n){var t={};function s(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=n,s.c=t,s.d=function(e,r,n){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(r,e){if(1&e&&(r=s(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)s.d(n,t,function(e){return r[e]}.bind(null,t));return n},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="",s(s.s=139)}({139:function(e,r,n){n(140),e.exports=n(141)},140:function(e,r,n){"use strict";n.r(r);var t=n(24),s=n.n(t);document.addEventListener("DOMContentLoaded",function(){s.a.storage.local.get(["key","pwd"]).then(function(e){var r="".concat(e.key),n="".concat(e.pwd);"undefined"===r?document.getElementById("api__key--value").value="":(document.getElementById("api__key--value").value=r,document.getElementById("password--value").value=n)})});var a=function(){var e=document.getElementById("api__key--value").value,r=document.getElementById("password--value").value;s.a.storage.local.set({key:e,pwd:r}).then(function(){});var n=document.querySelector(".saved__alert");n.classList.toggle("v-none"),setTimeout(function(){n.classList.toggle("v-none")},1300)};document.getElementById("button__submit").addEventListener("click",function(){a()}),document.addEventListener("keypress",function(e){13===e.keyCode&&a()}),document.getElementById("password__view--checkbox").addEventListener("click",function(){var e=document.getElementById("password--value");"password"===e.type?e.type="text":e.type="password"})},141:function(e,r){e.exports="../options.css"},24:function(e,r,n){var t,s,a;function m(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function d(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function y(e,r){return!r||"object"!==x(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):r}function b(e,r,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,r,n){var t=function(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=w(e)););return e}(e,r);if(t){var s=Object.getOwnPropertyDescriptor(t,r);return s.get?s.get.call(n):s.value}})(e,r,n||e)}function v(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&i(e,r)}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return o(e,arguments,w(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,e)})(e)}function o(e,r,n){return(o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,r,n){var t=[null];t.push.apply(t,r);var s=new(Function.bind.apply(e,t));return n&&i(s,n.prototype),s}).apply(null,arguments)}function i(e,r){return(i=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}s=[e],void 0===(a="function"==typeof(t=function(e){"use strict";"undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype?e.exports=function(){var e={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getBrowserInfo:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(e).length)throw new Error("api-metadata.json has not been included in browser-polyfill");var r=function(e){function t(e){var r,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:void 0;return c(this,t),(r=y(this,w(t).call(this,n))).createItem=e,r}var r,n;return v(t,e),d((r=t).prototype,[{key:"get",value:function(e){return this.has(e)||this.set(e,this.createItem(e)),b(w(t.prototype),"get",this).call(this,e)}}]),n&&d(r,n),t}(h(WeakMap)),A=function(t,s){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];chrome.runtime.lastError?t.reject(chrome.runtime.lastError):s.singleCallbackArg||r.length<=1?t.resolve(r[0]):t.resolve(r)}},u=function(e){return 1==e?"argument":"arguments"},f=function(t,e,s){return new Proxy(e,{apply:function(e,r,n){return s.call.apply(s,[r,t].concat(m(n)))}})},p=Function.call.bind(Object.prototype.hasOwnProperty),n=function i(g){var m=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},l=Object.create(null),e={has:function(e,r){return r in g||r in l},get:function(e,r,n){if(r in l)return l[r];if(r in g){var t=g[r];if("function"==typeof t)if("function"==typeof m[r])t=f(g,g[r],m[r]);else if(p(c,r)){var s=(o=c[a=r],function(n){for(var e=arguments.length,t=new Array(1<e?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];if(t.length<o.minArgs)throw new Error("Expected at least ".concat(o.minArgs," ").concat(u(o.minArgs)," for ").concat(a,"(), got ").concat(t.length));if(t.length>o.maxArgs)throw new Error("Expected at most ".concat(o.maxArgs," ").concat(u(o.maxArgs)," for ").concat(a,"(), got ").concat(t.length));return new Promise(function(r,e){if(o.fallbackToNoCallback)try{n[a].apply(n,t.concat([A({resolve:r,reject:e},o)]))}catch(e){console.warn("".concat(a," API method doesn't seem to support the callback parameter, ")+"falling back to call it without a callback: ",e),n[a].apply(n,t),o.fallbackToNoCallback=!1,o.noCallback=!0,r()}else o.noCallback?(n[a].apply(n,t),r()):n[a].apply(n,t.concat([A({resolve:r,reject:e},o)]))})});t=f(g,g[r],s)}else t=t.bind(g);else{if("object"!==x(t)||null===t||!p(m,r)&&!p(c,r))return Object.defineProperty(l,r,{configurable:!0,enumerable:!0,get:function(){return g[r]},set:function(e){g[r]=e}}),t;t=i(t,m[r],c[r])}return l[r]=t}var a,o},set:function(e,r,n,t){return r in l?l[r]=n:g[r]=n,!0},defineProperty:function(e,r,n){return Reflect.defineProperty(l,r,n)},deleteProperty:function(e,r){return Reflect.deleteProperty(l,r)}},r=Object.create(g);return new Proxy(r,e)},t=function(a){return{addListener:function(e,r){for(var n=arguments.length,t=new Array(2<n?n-2:0),s=2;s<n;s++)t[s-2]=arguments[s];e.addListener.apply(e,[a.get(r)].concat(t))},hasListener:function(e,r){return e.hasListener(a.get(r))},removeListener:function(e,r){e.removeListener(a.get(r))}}},l=!1,s=new r(function(c){return"function"!=typeof c?c:function(e,r,n){var t,s,a=!1,o=new Promise(function(r){t=function(e){l||(console.warn("Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",(new Error).stack),l=!0),a=!0,r(e)}});try{s=c(e,r,t)}catch(e){s=Promise.reject(e)}var i,g=!0!==s&&((i=s)&&"object"===x(i)&&"function"==typeof i.then);if(!0!==s&&!g&&!a)return!1;var m=function(e){e.then(function(e){n(e)},function(e){var r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",n({__mozWebExtensionPolyfillReject__:!0,message:r})}).catch(function(e){console.error("Failed to send onMessage rejected reply",e)})};return m(g?s:o),!0}}),o=function(e,r){var n=e.reject,t=e.resolve;chrome.runtime.lastError?"The message port closed before a response was received."===chrome.runtime.lastError.message?t():n(chrome.runtime.lastError):r&&r.__mozWebExtensionPolyfillReject__?n(new Error(r.message)):t(r)},a=function(e,r,t){for(var n=arguments.length,s=new Array(3<n?n-3:0),a=3;a<n;a++)s[a-3]=arguments[a];if(s.length<r.minArgs)throw new Error("Expected at least ".concat(r.minArgs," ").concat(u(r.minArgs)," for ").concat(e,"(), got ").concat(s.length));if(s.length>r.maxArgs)throw new Error("Expected at most ".concat(r.maxArgs," ").concat(u(r.maxArgs)," for ").concat(e,"(), got ").concat(s.length));return new Promise(function(e,r){var n=o.bind(null,{resolve:e,reject:r});s.push(n),t.sendMessage.apply(t,s)})},i={runtime:{onMessage:t(s),onMessageExternal:t(s),sendMessage:a.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:a.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},g={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return e.privacy={network:{networkPredictionEnabled:g,webRTCIPHandlingPolicy:g},services:{passwordSavingEnabled:g},websites:{hyperlinkAuditingEnabled:g,referrersEnabled:g}},n(chrome,i,e)}():e.exports=browser})?t.apply(r,s):t)||(e.exports=a)}});