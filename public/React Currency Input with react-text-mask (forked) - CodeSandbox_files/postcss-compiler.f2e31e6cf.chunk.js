(this.csbJsonP=this.csbJsonP||[]).push([["postcss-compiler"],{"./src/sandbox/eval/transpilers/postcss/loader.ts":function(e,n,r){"use strict";r.r(n);var t=r("../../node_modules/@babel/runtime/regenerator/index.js"),s=r.n(t),a=r("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),u=r.n(a),o=r("../../node_modules/postcss/lib/postcss.js"),c=r.n(o),i=r("../../node_modules/postcss-import/index.js"),p=r.n(i),l=r("../../node_modules/path-browserify/index.js"),d=r("./src/sandbox/eval/utils/is-dependency-path.ts");function f(e,n,r){return v.apply(this,arguments)}function v(){return(v=u()(s.a.mark((function e(n,r,t){var a,u,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(d.a)(r)){e.next=15;break}return e.prev=2,e.next=5,n.resolveTranspiledModuleAsync(Object(l.join)(r,"package.json"));case 5:if(a=e.sent,!(u=JSON.parse(a.module.code)).style){e.next=10;break}return o=Object(l.join)(r,u.style),e.abrupt("return",n.resolveTranspiledModuleAsync(o));case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(2);case 14:return e.abrupt("return",n.resolveTranspiledModuleAsync(r));case 15:return c="/"===r.charAt(0)?r:Object(l.join)(t,r),e.abrupt("return",n.resolveTranspiledModuleAsync(c));case 17:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}n.default=function(e,n){return new Promise((function(r,t){var a=[p()({resolve:function(){var e=u()(s.a.mark((function e(r,t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(n,r,t);case 3:return a=e.sent,e.abrupt("return",a.module.path);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,r){return e.apply(this,arguments)}}(),load:function(){var e=u()(s.a.mark((function e(r){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.resolveTranspiledModuleAsync(r);case 2:return t=e.sent,e.abrupt("return",t.module.code);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})],o={to:n.path,from:n.path,map:{inline:!0,annotation:!0}};return c()(a).process(null===e?void 0:e,o).then((function(e){e.messages&&e.messages.forEach((function(e){"dependency"===e.type&&n.addDependency(e.file)}));var t=e.map&&e.map.toJSON();return r({transpiledCode:e.css,sourceMap:t}),null})).catch((function(e){return t(e)}))}))}},"./src/sandbox/eval/utils/is-dependency-path.ts":function(e,n,r){"use strict";r.d(n,"a",(function(){return t}));var t=function(e){return/^(\w|@\w|@-)/.test(e)}},18:function(e,n){},19:function(e,n){},20:function(e,n){}}]);
//# sourceMappingURL=postcss-compiler.f2e31e6cf.chunk.js.map