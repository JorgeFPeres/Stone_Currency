!function(e){function t(t){for(var o,s,a=t[0],c=t[1],l=t[2],u=0,p=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);p.length;)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={"sandbox-startup":0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=function(e){return s.p+"static/js/"+({}[e]||e)+"."+{3:"d2a9045e4",5:"7f773faf4"}[e]+".chunk.js"}(e);var c=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://codesandbox.io/",s.oe=function(e){throw console.error(e),e};var a=this.csbJsonP=this.csbJsonP||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=c;i.push(["./src/sandbox/startup.js","vendors~app~embed~sandbox~sandbox-startup","vendors~app~embed~sandbox-startup"]),n()}({"../../node_modules/worker-loader/dist/cjs.js?publicPath=/&name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.js":function(e,t){e.exports=function(){return new Worker("/babel-transpiler.3b00d3af.worker.js")}},"../codesandbox-api/dist/codesandbox.es5.js":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Protocol",(function(){return d})),n.d(t,"transformError",(function(){return r})),n.d(t,"clearErrorTransformers",(function(){return i})),n.d(t,"registerErrorTransformer",(function(){return s})),n.d(t,"actions",(function(){return b})),n.d(t,"isStandalone",(function(){return y})),n.d(t,"iframeHandshake",(function(){return S})),n.d(t,"resetState",(function(){return R})),n.d(t,"dispatch",(function(){return O})),n.d(t,"listen",(function(){return k})),n.d(t,"notifyListeners",(function(){return $})),n.d(t,"registerFrame",(function(){return A})),n.d(t,"reattach",(function(){return D}));var o=[];function r(e,t,n){return o.map((function(o){return o(e,t,n)})).filter((function(e){return null!=e}))[0]}function i(){o.length=0}function s(e){o.push(e)}var a=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(t){i(t)}}function a(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))},c=function(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},l=function(){return Math.floor(1e6*Math.random()+1e6*Math.random())},d=function(){function e(e,t,n){var o=this;this.type=e,this.handleMessage=t,this.target=n,this.outgoingMessages=new Set,this._messageListener=function(e){return a(o,void 0,void 0,(function(){var t,n,o;return c(this,(function(r){switch(r.label){case 0:return(t=e.data).$type!==this.getTypeId()||this.outgoingMessages.has(t.$id)?[2]:[4,this.handleMessage(t.$data)];case 1:return n=r.sent(),o={$originId:this.internalId,$type:this.getTypeId(),$data:n,$id:t.$id},e.source?e.source.postMessage(o,"*"):this._postMessage(o),[2]}}))}))},this.createConnection(),this.internalId=l(),this.isWorker="Worker"===function(e){try{return e.constructor.name}catch(t){return""}}(n)}return e.prototype.getTypeId=function(){return"p-"+this.type},e.prototype.createConnection=function(){self.addEventListener("message",this._messageListener)},e.prototype.dispose=function(){self.removeEventListener("message",this._messageListener)},e.prototype.sendMessage=function(e){var t=this;return new Promise((function(n){var o=l(),r={$originId:t.internalId,$type:t.getTypeId(),$data:e,$id:o};t.outgoingMessages.add(o);var i=function(e){var r=e.data;r.$type===t.getTypeId()&&r.$id===o&&r.$originId!==t.internalId&&(n(r.$data),self.removeEventListener("message",i))};self.addEventListener("message",i),t._postMessage(r)}))},e.prototype._postMessage=function(e){this.isWorker||"undefined"!==typeof DedicatedWorkerGlobalScope&&this.target instanceof DedicatedWorkerGlobalScope?this.target.postMessage(e):this.target.postMessage(e,"*")},e}();var u=Object.freeze({show:function(e,t,n){return void 0===t&&(t="notice"),void 0===n&&(n=2),{type:"action",action:"notification",title:e,notificationType:t,timeAlive:n}}});var p=Object.freeze({openModule:function(e,t,n){return{type:"action",action:"editor.open-module",path:e,lineNumber:t,column:n}}});var f=Object.freeze({add:function(e){return{type:"action",action:"source.dependencies.add",dependency:e}}}),h=Object.freeze({rename:function(e,t){return{type:"action",action:"source.module.rename",path:e,title:t}}});var b={notifications:u,editor:p,source:Object.freeze({dependencies:f,modules:h}),error:Object.freeze({show:function(e,t,n){var o=n.line,r=n.column,i=n.lineEnd,s=n.columnEnd;return{title:e,message:t,line:o,column:r,path:n.path,payload:n.payload,lineEnd:i,columnEnd:s,severity:"error",type:"action",action:"show-error",source:n.source||"browser"}},clear:function(e,t){return{type:"action",action:"clear-errors",path:e,source:t}}}),correction:Object.freeze({show:function(e,t){var n=void 0===t?{path:"",severity:"warning",source:""}:t,o=n.line,r=n.column,i=n.lineEnd,s=n.columnEnd,a=n.path,c=n.payload,l=n.severity,d=void 0===l?"warning":l,u=n.source;return{message:e,line:o,column:r,lineEnd:i,columnEnd:s,path:a,payload:c,severity:d,source:void 0===u?"":u,type:"action",action:"show-correction"}},clear:function(e,t){return{type:"action",action:"clear-corrections",path:e,source:t}}}),glyph:Object.freeze({show:function(e){return{line:e.line,path:e.path,className:e.className,type:"action",action:"show-glyph"}}})},m="undefined"!==typeof e&&"https://codesandbox.io"||"https://codesandbox.io",w=function(){return(w=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},v=new Map;var g,y="undefined"===typeof window||!!(window.location&&window.location.href.indexOf("?standalone")>-1)||!window.opener&&window.parent===window||!!(window.location&&window.location.href.indexOf(m)>-1),x=!1,S=new Promise((function(e){g=e})),U=null,_=null,j=function(e){var t;"register-frame"!==e.data.type||_||(U=e.data.origin,_=null!==(t=e.data.id)&&void 0!==t?t:null,x||(g(),x=!0),self.removeEventListener("message",j))};function R(){U=null,v.clear()}function O(e){if(e){var t=w(w({},e),{codesandbox:!0});null!==_&&(t.$id=_),$(t),function(e){var t=JSON.parse(JSON.stringify(e));v.forEach((function(e,n){n&&n.postMessage&&n.postMessage(w(w({},t),{codesandbox:!0}),e)}))}(t),y||null===U&&"initialized"!==e.type||(window.opener?window.opener.postMessage(t,null===U?"*":U):window.parent.postMessage(t,null===U?"*":U))}}"undefined"!==typeof window&&self.addEventListener("message",j);var E={},P=0;function k(e){var t=++P;return E[t]=e,function(){delete E[t]}}function $(e,t){Object.keys(E).forEach((function(n){if(E[n])try{E[n](e,t)}catch(o){}}))}function L(e){if(("initialized"===e.data.type||y)&&(x=!0),x){var t=e.data;!t||!t.codesandbox||null!==U&&e.origin!==U||null!=t.$id&&null!==_&&_!==t.$id||$(t,e.source)}}function A(e,t,n){v.set(e,t),e.postMessage({type:"register-frame",origin:document.location.origin,id:n},t)}function D(){window.addEventListener("message",L)}"undefined"!==typeof window&&window.addEventListener("message",L)}.call(this,n("../../node_modules/process/browser.js"))},"../common/lib/templates/helpers/is-server.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isServer=void 0;const o=["adonis","apollo","ember","gatsby","gridsome","marko","mdx-deck","nest","next","node","nuxt","quasar","sapper","styleguidist","unibit","vuepress","docusaurus"];t.isServer=e=>-1!==o.indexOf(e)},"../common/lib/utils/url-generator.js":function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.dashboard=t.teamInviteLink=t.getSandboxId=t.privacyUrl=t.tosUrl=t.curatorUrl=t.patronUrl=t.searchUrl=t.gitHubToSandboxUrl=t.optionsToParameterizedUrl=t.githubRepoUrl=t.profileLikesUrl=t.profileSandboxesUrl=t.teamOverviewUrl=t.exploreUrl=t.dashboardUrl=t.profileUrl=t.signInVercelUrl=t.signInUrl=t.signInPageUrl=t.forkSandboxUrl=t.frameUrl=t.embedUrl=t.sandboxUrl=t.editorUrl=t.uploadFromCliUrl=t.newCxJSSandboxUrl=t.newAngularSandboxUrl=t.newSvelteSandboxUrl=t.importFromGitHubUrl=t.newVueSandboxUrl=t.newPreactSandboxUrl=t.newDojoSandboxUrl=t.newReactTypeScriptSandboxUrl=t.parcelSandboxUrl=t.newSandboxUrl=t.newSandboxWizard=t.protocolAndHost=t.host=t.gitHubRepoPattern=void 0;const s=n("../common/lib/templates/helpers/is-server.js"),a=i(n("../common/lib/utils/url-generator/dashboard.js"));t.dashboard=a,t.gitHubRepoPattern=/(https?:\/\/)?((www.)?)github.com(\/[\w-]+){2,}/;const c=/(https?:\/\/)?((www.)?)github.com/,l=/(\.git)$/,d={"https://codesandbox.io":"https://csb.app","https://codesandbox.stream":"https://codesandbox.dev"},u=(e,...t)=>e[0]+t.map((t,n)=>`${encodeURIComponent(t)}${e[n+1]}`).join("");t.host=()=>"https://codesandbox.io".split("//")[1],t.protocolAndHost=()=>`${location.protocol}//${t.host()}`,t.newSandboxWizard=()=>"/s",t.newSandboxUrl=()=>"/s/new",t.parcelSandboxUrl=()=>"/s/vanilla",t.newReactTypeScriptSandboxUrl=()=>"/s/react-ts",t.newDojoSandboxUrl=()=>"/s/github/dojo/dojo-codesandbox-template",t.newPreactSandboxUrl=()=>"/s/preact",t.newVueSandboxUrl=()=>"/s/vue",t.importFromGitHubUrl=()=>"/s/github",t.newSvelteSandboxUrl=()=>"/s/svelte",t.newAngularSandboxUrl=()=>"/s/angular",t.newCxJSSandboxUrl=()=>"/s/github/codaxy/cxjs-codesandbox-template",t.uploadFromCliUrl=()=>"/s/cli";const p=e=>u`github/${e.username}/${e.repo}/tree/${e.branch}/`+e.path;t.editorUrl=()=>"/s/",t.sandboxUrl=e=>{if(e.git){const{git:n}=e;return`${t.editorUrl()}${p(n)}`}return e.alias?`${t.editorUrl()}${e.alias}`:`${t.editorUrl()}${e.id}`},t.embedUrl=e=>{if(e.git){const{git:t}=e;return"/embed/"+p(t)}return e.alias?"/embed/"+e.alias:"/embed/"+e.id};t.frameUrl=(e,n="",{useFallbackDomain:o=!1,port:r}={})=>{const i=0===n.indexOf("/")?n.substr(1):n,a=s.isServer(e.template);let c=t.host();return!("https://"+c in d)||o||a||(c=d["https://"+c].split("//")[1]),`${location.protocol}//${e.id}${r?"-"+r:""}.${a?"sse.":""}${c}/${i}`},t.forkSandboxUrl=e=>t.sandboxUrl(e)+"/fork",t.signInPageUrl=e=>{let t="/signin";return e&&(t+="?continue="+e),t},t.signInUrl=(e=!1)=>"/auth/github"+(e?"?scope=user:email,public_repo":""),t.signInVercelUrl=()=>"/auth/vercel",t.profileUrl=e=>"/u/"+e,t.dashboardUrl=()=>"/dashboard",t.exploreUrl=()=>"/explore",t.teamOverviewUrl=e=>"/dashboard/teams/"+e,t.profileSandboxesUrl=(e,n)=>`${t.profileUrl(e)}/sandboxes${n?"/"+n:""}`,t.profileLikesUrl=(e,n)=>`${t.profileUrl(e)}/likes${n?"/"+n:""}`,t.githubRepoUrl=({repo:e,branch:t,username:n,path:o})=>u`https://github.com/${n}/${e}/tree/${t}/`+o,t.optionsToParameterizedUrl=e=>{const t=Object.keys(e).sort().filter(t=>e[t]).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&");return t?"?"+t:""},t.gitHubToSandboxUrl=e=>e.replace(c,"/s/github").replace(l,""),t.searchUrl=e=>"/search"+(e?"?query="+e:""),t.patronUrl=()=>"/patron",t.curatorUrl=()=>"/curator",t.tosUrl=()=>"/legal/terms",t.privacyUrl=()=>"/legal/privacy",t.getSandboxId=function(){const e="https://codesandbox.io";let t;if([e,d[e]].filter(Boolean).forEach(e=>{const n=e.replace(/https?:\/\//,"").replace(/\./g,"\\."),o=new RegExp("(.*)\\."+n),r=document.location.host.match(o);r&&(t=r[1])}),!t)throw new Error("Can't detect sandbox ID from the current URL");return t},t.teamInviteLink=e=>`${t.protocolAndHost()}/invite/${e}`},"../common/lib/utils/url-generator/dashboard.js":function(e,t,n){"use strict";function o(e,t){return t?`${e}?workspace=${t}`:e}Object.defineProperty(t,"__esModule",{value:!0}),t.discoverSearch=t.discover=t.search=t.createWorkspace=t.teamInvite=t.permissionSettings=t.registrySettings=t.settings=t.home=t.liked=t.shared=t.deleted=t.recents=t.templates=t.alwaysOn=t.repos=t.drafts=t.allSandboxes=t.ALL_SANDBOXES_URL_PREFIX=t.DASHBOARD_URL_PREFIX=void 0,t.DASHBOARD_URL_PREFIX="/dashboard",t.ALL_SANDBOXES_URL_PREFIX=t.DASHBOARD_URL_PREFIX+"/all",t.allSandboxes=(e,n)=>o(`${t.ALL_SANDBOXES_URL_PREFIX}${function(e){return e.split("/").map(e=>e.split(" ").map(encodeURIComponent).join(" ")).join("/")}(e)}`,n),t.drafts=e=>o(t.DASHBOARD_URL_PREFIX+"/drafts",e),t.repos=e=>o(t.DASHBOARD_URL_PREFIX+"/repositories",e),t.alwaysOn=e=>o(t.DASHBOARD_URL_PREFIX+"/always-on",e),t.templates=e=>o(t.DASHBOARD_URL_PREFIX+"/templates",e),t.recents=e=>o(t.DASHBOARD_URL_PREFIX+"/recent",e),t.deleted=e=>o(t.DASHBOARD_URL_PREFIX+"/deleted",e),t.shared=e=>o(t.DASHBOARD_URL_PREFIX+"/shared",e),t.liked=e=>o(t.DASHBOARD_URL_PREFIX+"/liked",e),t.home=e=>o(t.DASHBOARD_URL_PREFIX+"/home",e),t.settings=e=>o(t.DASHBOARD_URL_PREFIX+"/settings",e),t.registrySettings=e=>o(t.DASHBOARD_URL_PREFIX+"/settings/npm-registry",e),t.permissionSettings=e=>o(t.DASHBOARD_URL_PREFIX+"/settings/permissions",e),t.teamInvite=e=>o(t.DASHBOARD_URL_PREFIX+"/settings/invite",e),t.createWorkspace=e=>o(t.DASHBOARD_URL_PREFIX+"/settings/new",e),t.search=(e,n)=>{let r=o(t.DASHBOARD_URL_PREFIX+"/search",n);return r.includes("?")?r+="&":r+="?",r+="query="+e,r},t.discover=(e,n)=>o(n?`${t.DASHBOARD_URL_PREFIX}/discover/${n}`:t.DASHBOARD_URL_PREFIX+"/discover",e),t.discoverSearch=(e,n)=>{let r=o(t.DASHBOARD_URL_PREFIX+"/discover/search",n);return r.includes("?")?r+="&":r+="?",r+="query="+e,r}},"../sandbox-hooks/console/index.js":function(e,t,n){var o,r,i;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t,n("../../node_modules/@babel/runtime/regenerator/index.js"),n("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),n("../codesandbox-api/dist/codesandbox.es5.js"),n("../../node_modules/console-feed/lib/Hook/index.js"),n("../../node_modules/console-feed/lib/Transform/index.js")],void 0===(i="function"===typeof(o=function(e,t,o,r,i,s){"use strict";var a=n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,i.default)(window.console,function(){var e=(0,o.default)(t.default.mark((function e(n){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iframeHandshake;case 2:(0,r.dispatch)({type:"console",log:n});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,r.listen)((function(e,t){if(t&&"evaluate"===e.type){var n=null,o=!1;try{if(e.command&&"{"===e.command.charAt(0))try{var i="(".concat(e.command,")");new Function(i),e.command=i}catch(a){}n=(0,eval)(e.command)}catch(a){n=a,o=!0}try{(0,r.dispatch)({type:"eval-result",error:o,result:(0,s.Encode)(n)})}catch(a){console.error(a)}}}))},t=a(t),o=a(o),i=a(i)})?o.apply(t,r):o)||(e.exports=i)},"../sandbox-hooks/preview-secret.js":function(e,t,n){var o,r,i;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t,n("../common/lib/utils/url-generator.js")],void 0===(i="function"===typeof(o=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.requestPreviewSecretFromApp=e.listenForPreviewSecret=e.setPreviewSecret=e.getPreviewSecret=void 0;var n=function(){return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)".concat("csb_sandbox_secret","\\s*\\=\\s*([^;]*).*$)|^.*$")),"$1")};e.getPreviewSecret=n;var o=function(e){if(null!==e){var t=n();(t&&!e||e&&!t||t!==e)&&(e?(document.cookie="".concat("csb_sandbox_secret","=").concat(e,";samesite=none;secure;"),setTimeout((function(){location.reload()}),1e3)):document.cookie="".concat("csb_sandbox_secret","=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"))}};function r(){var e={width:1020,height:618},t=e.width,n=e.height,o=function(e){var t=e.width,n=e.height,o=window.screenLeft?window.screenLeft:window.screenX,r=window.screenTop?window.screenTop:window.screenY,i=o+window.innerWidth/2-t/2;return{top:r+window.innerHeight/2-n/2,left:i}}({width:t,height:n}),r=o.top,i=o.left;return"width=".concat(t,",height=").concat(n,",top=").concat(r,",left=").concat(i)}e.setPreviewSecret=o,e.listenForPreviewSecret=function(){var e=function(e){if(e.data&&"preview-secret"===e.data.$type){var t=e.data.previewSecret;o(t)}};return window.addEventListener("message",e),function(){window.removeEventListener("message",e)}},e.requestPreviewSecretFromApp=function(e){var n=(0,t.protocolAndHost)(),i=window.open(n+"/auth/sandbox/"+e,name,"scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no, ".concat(r()));setInterval((function(){i.postMessage({$type:"request-preview-secret"},n)}),500),window.addEventListener("message",(function e(t){t.data&&"preview-secret"===t.data.$type&&(o(t.data.previewSecret),window.removeEventListener("message",e),i.close())}))}})?o.apply(t,r):o)||(e.exports=i)},"../sandbox-hooks/screenshot.js":function(e,t,n){var o,r,i;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t,n("../codesandbox-api/dist/codesandbox.es5.js")],void 0===(i="function"===typeof(o=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e;(0,t.listen)((function(o){"take-screenshot"===o.type?Promise.all([n.e(5),n.e(3)]).then(n.t.bind(null,"../sandbox-hooks/html2canvas-lib/index.js",7)).then((function(e){(0,e.default)(document.documentElement,{useCORS:function(e){return!(o.data.isPrivateSandbox||!e)},proxy:"https://h2c-proxy.csb.dev/",logging:!1,allowTaint:!1}).then((function(e){var n=document.createElement("canvas"),o=document.documentElement.scrollLeft,r=document.documentElement.scrollTop;n.width=e.width-o,n.height=e.height-r,n.getContext("2d").drawImage(e,o,r,n.width,n.height,0,0,n.width,n.height),(0,t.dispatch)({type:"screenshot-generated",screenshot:n.toDataURL()})}))})):"show-screenshot-cursor"===o.type?(e=document.documentElement.style.cursor,document.documentElement.style.cursor='url(\'data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16H0V8Z" fill="%23FF3B30"/></svg>\'), auto'):"hide-screenshot-cursor"===o.type&&(document.documentElement.style.cursor=e)})),window.addEventListener("keydown",(function(e){"s"===e.key&&e.shiftKey&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),(0,t.dispatch)({type:"screenshot-requested-from-preview"}))}))}})?o.apply(t,r):o)||(e.exports=i)},"../sandbox-hooks/url-listeners.js":function(e,t,n){var o,r,i;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,r=[t,n("../codesandbox-api/dist/codesandbox.es5.js")],void 0===(i="function"===typeof(o=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return Object.assign(window.history,{go:function(e){var t=r+e;if(t>=0&&t<=o.length-1){var a=o[r=t],c=a.url,l=a.state,d=document.location.href;n.replaceState.call(window.history,l,"",c);var u=document.location.href;s(u),window.dispatchEvent(new PopStateEvent("popstate",{state:l})),-1!==u.indexOf("#")&&(i=!0,window.dispatchEvent(new HashChangeEvent("hashchange",{oldURL:d,newURL:u})))}},back:function(){window.history.go(-1)},forward:function(){window.history.go(1)},pushState:function(e,t,o){n.replaceState.call(window.history,e,t,o),a(o,e),s(document.location.href)},replaceState:function(e,t,i){n.replaceState.call(window.history,e,t,i),o[r]={state:e,url:i},s(document.location.href)}}),Object.defineProperties(window.history,{length:{get:function(){return o.length}},state:{get:function(){return o[r].state}}}),window.addEventListener("hashchange",(function(){i?i=!1:(a(c(document.location),null),s(document.location.href))})),a(c(document.location),null),setTimeout((function(){s(document.location.href)})),(0,t.listen)((function(e,t){t&&("urlback"===e.type?history.back():"urlforward"===e.type?history.forward():"refresh"===e.type&&document.location.reload())}))};var n=window.history.__proto__,o=[],r=-1,i=!1;function s(e){(0,t.dispatch)({type:"urlchange",url:e,back:r>0,forward:r<o.length-1})}function a(e,t){o.splice(r+1),o.push({url:e,state:t}),r=o.length-1}function c(e){return"".concat(e.pathname).concat(e.hash)}})?o.apply(t,r):o)||(e.exports=i)},"./src/sandbox/startup.js":function(e,t,n){"use strict";n.r(t);var o=n("../../node_modules/worker-loader/dist/cjs.js?publicPath=/&name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.js"),r=n.n(o),i=n("../sandbox-hooks/console/index.js"),s=n.n(i),a=n("../sandbox-hooks/url-listeners.js"),c=n.n(a),l=n("../sandbox-hooks/screenshot.js"),d=n.n(l),u=n("../sandbox-hooks/preview-secret.js"),p=n("../codesandbox-api/dist/codesandbox.es5.js");!function(e){var t=document.createElement("link");t.href=e,t.rel="preload",t.as="script",document.head.appendChild(t)}("".concat("https://codesandbox.io","/static/js/babel.").concat("7.12.12",".min.js"));window.babelworkers=[];for(var f=0;f<3;f++){var h=new r.a;window.babelworkers.push(h),h.postMessage({type:"warmup",path:"test.js",code:'const a = "b"',config:{presets:["env"]},version:7,loaderOptions:{}})}p.isStandalone||(c()(),s()(),Object(u.listenForPreviewSecret)(),d()())}});
//# sourceMappingURL=sandbox-startup.62904b950.js.map