!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!w[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--v&&0===g&&C()}(e,n),t&&t(e,n)};var n,r=!0,o="a06e5955b746673501dc",a=1e4,i={},l=[],c=[];function s(e){var t=j[e];if(!t)return D;var r=function(r){return t.hot.active?(j[r]?-1===j[r].parents.indexOf(e)&&j[r].parents.push(e):(l=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),l=[]),D(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(t){D[e]=t}}};for(var a in D)Object.prototype.hasOwnProperty.call(D,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,o(a));return r.e=function(e){return"ready"===f&&p("prepare"),g++,D.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(b[e]||E(e),0===g&&0===v&&C())}},r.t=function(e,t){return 1&t&&(e=r(e)),D.t(e,-2&t)},r}function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:k,apply:H,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:i[e]};return n=void 0,t}var d=[],f="idle";function p(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,m,y,v=0,g=0,b={},_={},w={};function O(e){return+e+""===e?+e:e}function k(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=a,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=D.p+""+o+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;_={},b={},w=e.c,y=e.h,p("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});m={};return E(0),"prepare"===f&&0===g&&0===v&&C(),t});var t}function E(e){w[e]?(_[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=D.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function C(){p("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return H(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(O(n));e.resolve(t)}}function H(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,c,s;function u(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,i=o.chain;if((c=j[a])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var l=0;l<c.parents.length;l++){var s=c.parents[l],u=j[s];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[a]?(n[s]||(n[s]=[]),d(n[s],[a])):(delete n[s],t.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},v=[],g={},b=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var _ in m)if(Object.prototype.hasOwnProperty.call(m,_)){var k;s=O(_);var E=!1,C=!1,H=!1,P="";switch((k=m[_]?u(s):{type:"disposed",moduleId:_}).chain&&(P="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+k.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(E=new Error("Aborted because "+s+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(k),C=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),H=!0;break;default:throw new Error("Unexception type "+k.type)}if(E)return p("abort"),Promise.reject(E);if(C)for(s in g[s]=m[s],d(v,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,s)&&(h[s]||(h[s]=[]),d(h[s],k.outdatedDependencies[s]));H&&(d(v,[k.moduleId]),g[s]=b)}var I,x=[];for(r=0;r<v.length;r++)s=v[r],j[s]&&j[s].hot._selfAccepted&&g[s]!==b&&x.push({module:s,errorHandler:j[s].hot._selfAccepted});p("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var M,S,$=v.slice();$.length>0;)if(s=$.pop(),c=j[s]){var T={},A=c.hot._disposeHandlers;for(a=0;a<A.length;a++)(n=A[a])(T);for(i[s]=T,c.hot.active=!1,delete j[s],delete h[s],a=0;a<c.children.length;a++){var L=j[c.children[a]];L&&((I=L.parents.indexOf(s))>=0&&L.parents.splice(I,1))}}for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(c=j[s]))for(S=h[s],a=0;a<S.length;a++)M=S[a],(I=c.children.indexOf(M))>=0&&c.children.splice(I,1);for(s in p("apply"),o=y,g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);var F=null;for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(c=j[s])){S=h[s];var U=[];for(r=0;r<S.length;r++)if(M=S[r],n=c.hot._acceptedDependencies[M]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(S)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:S[r],error:e}),t.ignoreErrored||F||(F=e)}}}for(r=0;r<x.length;r++){var q=x[r];s=q.module,l=[s];try{D(s)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||F||(F=n),F||(F=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||F||(F=e)}}return F?(p("fail"),Promise.reject(F)):(p("idle"),new Promise(function(e){e(v)}))}var j={};function D(t){if(j[t])return j[t].exports;var n=j[t]={i:t,l:!1,exports:{},hot:u(t),parents:(c=l,l=[],c),children:[]};return e[t].call(n.exports,n,n.exports,s(t)),n.l=!0,n.exports}D.m=e,D.c=j,D.d=function(e,t,n){D.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,t){if(1&t&&(e=D(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(D.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)D.d(n,r,function(t){return e[t]}.bind(null,r));return n},D.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(t,"a",t),t},D.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},D.p="",D.h=function(){return o},s(0)(D.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dataTableProfiles=this.createProfiles(t),this.dataTableGroups=this.createGroups(n)}var t,n,o;return t=e,(n=[{key:"createProfiles",value:function(e){return e.DataTable({order:[[1,"asc"]],columns:[{orderable:!1,targets:0},null,null,null],lengthChange:!1,pageLength:100,sDom:"ltipr"})}},{key:"createGroups",value:function(e){return e.DataTable({lengthChange:!1,pageLength:100,sDom:"ltipr"})}},{key:"applySearchFunctionality",value:function(e){$("#filterbox").keyup(function(){e.search(this.value).draw()})}}])&&r(t.prototype,n),o&&r(t,o),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.burgerBtnHtmlElement=t,this.navbarHtmlElement=n}var t,n,r;return t=e,(n=[{key:"toggleMenuOnClick",value:function(){var e=this;this.burgerBtnHtmlElement.addEventListener("click",function(){e.navbarHtmlElement.style.display="inline-block"==e.navbarHtmlElement.style.display?"none":"inline-block"})}},{key:"disappearMenuOnMovingCursorAway",value:function(){this.navbarHtmlElement.onmouseout=function(e){e.target;var t=e.relatedTarget;(t.className.includes("container")||"body"==t.id)&&(navbar.style.display="none")}}}])&&a(t.prototype,n),r&&a(t,r),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.multiselectFormHtmlElements=t,this.selectorsWithOldStyle=n,this.minItemsInListForMultiselect=r}var t,n,r;return t=e,(n=[{key:"applySettings",value:function(){this.addMultiselectClassTo(),this.enableSearchForListWithAtLeast(this.minItemsInListForMultiselect),$(".multiselect-form").multiselect({numberDisplayed:1})}},{key:"addMultiselectClassTo",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,o=this.selectorsWithOldStyle[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){r.value.removeClass("selectmultiple").addClass("form-control multiselect-form")}}catch(e){t=!0,n=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}}},{key:"enableSearchForListWithAtLeast",value:function(e){var t="select-with-at-least-"+e+"-items";this.addClassNameToListsWithAtLeast(e,t),$("."+t).multiselect({enableCaseInsensitiveFiltering:!0})}},{key:"addClassNameToListsWithAtLeast",value:function(e,t){var n=this.multiselectFormHtmlElements,r=!0,o=!1,a=void 0;try{for(var i,l=n[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var c=i.value;c.length>e&&c.addClass(t)}}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}}}])&&l(t.prototype,n),r&&l(t,r),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.htmlElements=t}var t,n,r;return t=e,(n=[{key:"toggleEachElementOnClick",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,o=this.htmlElements[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var a=r.value;this.toggleOnClick(a)}}catch(e){t=!0,n=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}}},{key:"toggleOnClick",value:function(e){var t=!0,n=!1,r=void 0;try{for(var o,a=e.togglers[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){o.value.on("click",function(){e.confirm_field.style.display="block"==e.confirm_field.style.display?"none":"block",e.toggle_btn.style.display="none"==e.toggle_btn.style.display?"inline-block":"none"})}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}}])&&s(t.prototype,n),r&&s(t,r),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.imageHtmlElement=t,this.imageChangeHtmlElements=n,this.imageClearHtmlElements=r}var t,n,r;return t=e,(n=[{key:"toggleImageChangeOnClick",value:function(){var e=this.imageChangeHtmlElements.container;console.log(this.imageChangeHtmlElements.toggle),this.imageChangeHtmlElements.toggle.on("click",function(){e.style.display="block"==e.style.display?"none":"block"})}},{key:"removeImageClearOnInput",value:function(){var e=this.imageClearHtmlElements.container,t=this.imageClearHtmlElements.checkbox,n=this.imageHtmlElement;n.on("change",function(){""!=n.value&&(e.css("display","none"),t.prop("checked",!1))})}}])&&d(t.prototype,n),r&&d(t,r),e}();$(document).ready(function(){var e=new o($("#datatable-profiles"),$("datatable-groups"));e.applySearchFunctionality(e.dataTableProfiles),e.applySearchFunctionality(e.dataTableGroups);var t=new i(document.getElementById("burger-btn"),document.getElementById("navbar"));t.toggleMenuOnClick(),t.disappearMenuOnMovingCursorAway();var n=[$("#id_local_groups"),$("#id_available_as_speaker"),$("#id_open_to_job_offers"),$("#id_available_to_volunteer")],r=$(".multiselect-form");new c(r,n,10).applySettings();var a={toggle_btn:$("#claim_group_toggle"),confirm_field:$("#claim_group_confirm_field"),togglers:$("#claim_group_toggler")},l={toggle_btn:$("#report_group_inactive_toggle"),confirm_field:$("#report_group_inactive_confirm_field"),togglers:$("#report_group_inactive_toggler")};new u([a,l]).toggleEachElementOnClick();var s=$("#id_image"),d={container:$("#image-change"),toggle:$("#image-change-toggle")},p={container:$("#image-clear"),checkbox:$("#image-clear_id")},h=new f(s,d,p);h.toggleImageChangeOnClick(),h.removeImageClearOnInput()})}]);