(function(){"use strict";var t={586:function(t,e,n){n.d(e,{gY:function(){return l},YJ:function(){return g},c$:function(){return y},Fs:function(){return c},Zf:function(){return h},bR:function(){return w},vz:function(){return S},UO:function(){return u},Dy:function(){return b},QV:function(){return s},nJ:function(){return d},OF:function(){return p},rI:function(){return v},Qt:function(){return m},$A:function(){return f}});var r=n(9669),o=n.n(r);o().defaults.headers["Content-Type"]="application/json ; charset=utf-8";const a=o().create({baseURL:"http://39.105.141.55:8082"});a.interceptors.request.use((t=>{t.headers["Content-Type"]="application/json;charset=utf-8";let e=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null;return e&&(t.headers["token"]=e.token),t}),(t=>Promise.reject(t)));var i=a;const s=t=>i({url:"/user/register",method:"POST",data:t}),u=t=>i({url:"/user/login",method:"POST",data:t}),c=()=>i({url:"/cat",method:"GET"}),l=t=>i({url:"/cat/save",method:"POST",data:t}),d=t=>i({url:"/adopt/save",method:"POST",data:t}),f=t=>i({url:"/cat/save",method:"POST",data:t}),p=()=>i({url:"/cat",method:"GET"}),h=t=>i({url:"/cat/"+t,method:"GET"}),m=t=>i({url:"/gather/save",method:"POST",data:t}),v=t=>i({url:"/gather/"+t,method:"GET"}),g=()=>i({url:"/adopt/find",method:"GET"}),b=t=>i({url:"/adopt/"+t,method:"GET"}),y=t=>i({url:"/adopt/detail/"+t,method:"GET"}),w=t=>i({url:"/adopt/"+t,method:"DELETE"}),S=t=>i({url:"/cat/"+t,method:"DELETE"})},2224:function(t,e,n){var r=n(144),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.isRouterAlive?e("router-view"):t._e()],1)},a=[],i={name:"App",components:{},provide(){return{reload:this.reload}},data(){return{isRouterAlive:!0}},cread(){},methods:{reload(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}},mounted(){}},s=i,u=n(1001),c=(0,u.Z)(s,o,a,!1,null,null,null),l=c.exports,d=n(8345),f=function(){var t=this,e=t._self._c;return e("div",[e("welLogo"),e("el-row",{attrs:{gutter:0}},[e("el-col",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.isShow,expression:"this.$route.meta.isShow"}],attrs:{span:5}},[e("div",{staticClass:"grid-content"},[e("navMenu")],1)]),e("el-col",{attrs:{span:this.$route.meta.span}},[e("div",{staticClass:"grid-content"},[e("router-view")],1)])],1)],1)},p=[],h=(n(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-g"},[e("div",{staticClass:"logo",on:{click:function(e){return t.$router.push("/layout/user")}}},[e("img",{attrs:{src:n(7723),alt:"LOGO"}})]),e("div",{staticClass:"block"},[t.$store.state.isLogin?e("div",{staticClass:"login"},[e("el-button",{staticStyle:{"margin-left":"30px"},attrs:{size:"small",round:""},on:{click:function(e){return t.$router.push("/layout/register")}}},[t._v("注册 ")]),e("el-button",{attrs:{size:"small",round:""},on:{click:function(e){return t.$router.push("/layout/login")}}},[t._v("登录 ")])],1):t._e(),t.$store.state.isNew?e("div",{staticStyle:{float:"right",width:"84px",height:"40px"},on:{click:t.quit}},[e("el-badge",{staticClass:"item",attrs:{type:"warning"}},[e("el-button",{attrs:{size:"large"}},[t._v("退出")])],1)],1):t._e(),e("div",{staticStyle:{float:"right","margin-right":"30px","margin-top":"-10px"}},[e("el-avatar",{attrs:{icon:"el-icon-user-solid",size:50}})],1)])])}),m=[],v={name:"welLogo",data(){return{circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",squareUrl:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",sizeList:["large","medium","small"]}},methods:{quit(){this.$router.push("/layout/login"),this.$store.state.isNew=!1,this.$store.state.isLogin=!0}}},g=v,b=(0,u.Z)(g,h,m,!1,null,null,null),y=b.exports,w=function(){var t=this,e=t._self._c;return e("div",[e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1",router:""}},[e("el-menu-item",{attrs:{index:"/layout/user","default-active":""}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-s-home"}),e("span",[t._v("首页")])])],2),e("el-menu-item",{attrs:{index:"/layout/mine"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-user-solid"}),e("span",[t._v("我的申请")])])],2),e("el-menu-item",{attrs:{index:"/layout/like"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-star-off"}),e("span",[t._v("收藏")])])],2)],1)],1)},S=[],_={name:"navMenu"},C=_,k=(0,u.Z)(C,w,S,!1,null,null,null),O=k.exports,T={name:"layOut",components:{welLogo:y,navMenu:O},data(){return{xianshi:!0}},watch:{$route(){this.xianshi=this.$route.meta.isShow}}},x=T,E=(0,u.Z)(x,f,p,!1,null,null,null),L=E.exports,$=function(){var t=this,e=t._self._c;return e("div",[e("el-row",{attrs:{gutter:20}},t._l(t.catsALL,(function(n){return e("div",{key:n.cid},[e("el-col",{attrs:{span:5}},[e("div",{staticClass:"grid-content"},[e("el-image",{attrs:{src:n.curl},on:{click:function(e){return t.turnInto(n.cid)}}}),e("div",{staticClass:"title"},[t._v(t._s(n.cname))]),e("div",{staticClass:"status"},[t._v(t._s(n.ccolor))]),e("div",{staticClass:"content"},[t._v(t._s(n.cinfo))])],1)])],1)})),0)],1)},A=[],P=n(586),j={name:"myUser",data(){return{catNum:0,catsALL:[]}},methods:{indexs:async function(){const{data:t}=await(0,P.OF)();"200"===t.code?(this.catNum=t.data.length,this.catsALL=t.data):this.$message.error(t.msg)},async turnInto(t){const{data:e}=await(0,P.Zf)(t);"200"===e.code?(localStorage.setItem("cat",JSON.stringify(e.data)),this.$router.push("/layout/info")):this.$message.error(e.msg)}},created:async function(t){this.indexs()}},N=j,Z=(0,u.Z)(N,$,A,!1,null,"763d8d92",null),G=Z.exports;r["default"].use(d.Z);const I=[{path:"/",redirect:"/layout"},{path:"/layout",redirect:"/layout/user",component:L,children:[{path:"user",component:G,meta:{isShow:!0,span:19}},{path:"info",component:()=>n.e(79).then(n.bind(n,9079)),meta:{isShow:!0,span:19}},{path:"apply",component:()=>n.e(860).then(n.bind(n,3860)),meta:{isShow:!0,span:19}},{path:"register",component:()=>n.e(247).then(n.bind(n,4247)),meta:{isShow:!1,span:24}},{path:"login",component:()=>n.e(647).then(n.bind(n,4647)),meta:{isShow:!1,span:24}},{path:"admin",component:()=>n.e(873).then(n.bind(n,873)),redirect:"/layout/admin/catdb",meta:{isShow:!1,span:24},children:[{path:"catdb",component:()=>n.e(295).then(n.bind(n,3295))},{path:"applydb",component:()=>n.e(445).then(n.bind(n,3445))},{path:"addcat",component:()=>n.e(769).then(n.bind(n,1769))}]},{path:"like",component:()=>n.e(973).then(n.bind(n,9973)),meta:{isShow:!0,span:19}},{path:"mine",component:()=>n.e(184).then(n.bind(n,4184)),meta:{isShow:!0,span:19,needLogin:!0}},{path:"daily",component:()=>n.e(649).then(n.bind(n,6649)),meta:{isShow:!0,span:19}},{path:"applyInfo",component:()=>n.e(940).then(n.bind(n,6940)),meta:{isShow:!0,span:19}}]}],F=new d.Z({routes:I});var q=F,z=n(629);r["default"].use(z.ZP);var M=new z.ZP.Store({state:{isNew:!1,isLogin:!0},getters:{},mutations:{updatedToken(t,e){t.token=e}},actions:{},modules:{}}),R=n(4720),U=n.n(R),D=n(9669),J=n.n(D);r["default"].config.productionTip=!1,r["default"].use(U()),r["default"].prototype.$axios=J(),new r["default"]({render:t=>t(l),store:M,router:q}).$mount("#app")},7723:function(t,e,n){t.exports=n.p+"assets/img/logo-1.b283ed26.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"assets/js/"+t+"."+{79:"9f10cb50",184:"4351ec76",247:"2b6b17fd",295:"f34918ae",445:"096eab2b",647:"9af2c3ff",649:"842611c9",769:"7da3e354",860:"3d13d60d",873:"bf536bf3",940:"561442a8",973:"ddfb4ff1"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"assets/css/"+t+"."+{79:"fdece465",184:"bec234c3",247:"e3b84e52",295:"9389f351",647:"6f0f4d19",769:"cacdabcf",860:"63a1b34c",873:"676fc78a",940:"3de9c0c4",973:"4658e809"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="cat101_pre:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=r),t[r]=[o];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(e(i,s))return o();t(r,s,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={79:1,184:1,247:1,295:1,647:1,769:1,860:1,873:1,940:1,973:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(e&&e(r);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkcat101_pre"]=self["webpackChunkcat101_pre"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2224)}));r=n.O(r)})();
//# sourceMappingURL=app.c42188f1.js.map