(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[194],{8544:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/[username]/repos",function(){return r(2663)}])},2580:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(2010);r(6687);function o(e){var t=e.size;return(0,n.jsxs)("svg",{role:"status",className:"inline mr-2 w-".concat(t," h-").concat(t," text-bg_color animate-spin fill-gray-300"),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})}},7853:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(2010),o=(r(6687),r(5375)),s=r(4573),i=r(320);function c(){return(0,n.jsxs)("span",{className:"flex bg-pri_color items-center justify-center",children:[(0,n.jsx)(s.default,{href:"/",children:(0,n.jsxs)("header",{className:"flex items-center cursor-pointer text-white text-md p-4",children:[(0,n.jsx)(o.Z,{className:"h-5 w-5"}),(0,n.jsx)("h1",{children:"GitRepo"})]})}),(0,n.jsx)("span",{className:"flex mx-auto items-center justify-center h-8",children:(0,n.jsx)(i.Z,{})})]})}},5634:function(e,t,r){"use strict";r.d(t,{J:function(){return f}});var n=r(606),o=r.n(n),s=r(6687),i=r(838),c=r(2424),a=r.n(c),l=r(6832);function u(e,t,r,n,o,s,i){try{var c=e[s](i),a=c.value}catch(l){return void r(l)}c.done?t(a):Promise.resolve(a).then(n,o)}var f=function(){var e=(0,i.useRouter)().query.username,t=(0,s.useState)(Object.create(null)),r=t[0],n=t[1],c=(0,s.useState)("loading"),f=c[0],d=c[1];return(0,s.useEffect)((function(){var t=function(){var t,r=(t=o().mark((function t(){var r,s,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=11;break}if(r=JSON.parse(window.sessionStorage.getItem("userInfo")||"{}"),(0,l.isEmpty)(r)||r.login!==e){t.next=6;break}return n(r),d("ok"),t.abrupt("return");case 6:return s="https://api.github.com/users/".concat(e),t.next=9,a().get(s).then((function(e){return e.data})).catch((function(e){var t;403===(null===(t=e.response)||void 0===t?void 0:t.status)?(console.log("API rate limit exceeded"),d("403")):(console.log("API error"),d("error"))}));case 9:(i=t.sent)&&(n(i),window.sessionStorage.setItem("userInfo",JSON.stringify(i)),d("ok"));case 11:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var s=t.apply(e,r);function i(e){u(s,n,o,i,c,"next",e)}function c(e){u(s,n,o,i,c,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();t()}),[e]),[r,f]}},2663:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(2010),o=r(7639),s=r(838),i=r(4573),c=r(5634),a=r(606),l=r.n(a),u=r(6687),f=r(2424),d=r.n(f);function h(e,t,r,n,o,s,i){try{var c=e[s](i),a=c.value}catch(l){return void r(l)}c.done?t(a):Promise.resolve(a).then(n,o)}var x=function(){var e=(0,s.useRouter)().query.username,t=(0,u.useState)(!0),r=t[0],n=t[1],o=(0,u.useState)(1),i=o[0],c=o[1],a=(0,u.useState)([]),f=a[0],x=a[1],m=(0,u.useState)("loading"),v=m[0],p=m[1],g=function(){var t,r=(t=l().mark((function t(){var r,o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return r="https://api.github.com/users/".concat(e,"/repos?per_page=10&page=").concat(i),t.next=4,d().get(r).then((function(e){return e.data})).catch((function(e){var t;403===(null===(t=e.response)||void 0===t?void 0:t.status)?(console.log("API rate limit exceeded"),p("403")):(console.log("API error"),p("error"))}));case 4:(null===(o=t.sent)||void 0===o?void 0:o.length)?(x(f.concat(o)),n(!0),p("ok")):n(!1);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var s=t.apply(e,r);function i(e){h(s,n,o,i,c,"next",e)}function c(e){h(s,n,o,i,c,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,u.useEffect)((function(){x([]),g()}),[e]),(0,u.useEffect)((function(){g()}),[i]),[f,function(){c(i+1)},r,v]},m=r(7853),v=r(5722),p=r(2580);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,s=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(a){c=!0,o=a}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(){var e=(0,s.useRouter)().query.username,t=w((0,c.J)(),2),r=t[0],a=t[1],l=w(x(),4),u=l[0],f=l[1],d=l[2],h=l[3];return(0,n.jsxs)("div",{className:"flex flex-col h-screen w-screen bg-bg_color",children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"GitRepo - Repos Page"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(m.Z,{}),(0,n.jsx)("main",{className:"".concat("ok"===a?"flex-center":"hidden"," items-stretch h-full w-full p-2 bg-bg_color"),children:(0,n.jsxs)("div",{className:"flex-center flex-col md:flex-row w-5/6 rounded-lg bg-white m-4",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center space-y-4",children:[(0,n.jsx)(i.default,{href:"".concat(null===r||void 0===r?void 0:r.html_url),children:(0,n.jsx)("img",{src:"".concat(null===r||void 0===r?void 0:r.avatar_url),className:"flex w-4/5 max-w-[14rem] md:max-w-[24rem] rounded-full border-2 border-hov_color cursor-pointer hover:shadow-lg"})}),(0,n.jsxs)("header",{className:"text-xl",children:[" ",null===r||void 0===r?void 0:r.name," "]})]}),(0,n.jsxs)("div",{className:"flex flex-col md:flex-grow h-1/2 w-4/5 max-w-[30rem] p-5",children:[(0,n.jsx)("h3",{children:"Public Repositories ".concat(r?"("+(null===r||void 0===r?void 0:r.public_repos)+")":"",":")}),(0,n.jsx)("div",{className:"flex-center flex-grow h-52 w-full py-5",children:(0,n.jsx)(v.Z,{data:u,nextPage:f,hasMore:d,status:h})})]})]})}),(0,n.jsx)("h1",{id:"loading",className:"h-full w-full ".concat("loading"===a?"flex":"hidden"," items-center justify-center text-2xl text-gray-300"),children:(0,n.jsx)(p.Z,{size:20})}),(0,n.jsx)("h1",{id:"404",className:"h-full w-full ".concat("error"===a?"flex":"hidden"," items-center justify-center text-2xl text-gray-300"),children:'User "'.concat(e,'" Not Found!')}),(0,n.jsx)("h1",{id:"403",className:"h-full w-full ".concat("403"===a?"flex":"hidden"," items-center justify-center text-2xl text-gray-300"),children:"API rate limit exceeded !"})]})}}},function(e){e.O(0,[642,365,483,774,888,179],(function(){return t=8544,e(e.s=t);var t}));var t=e.O();_N_E=t}]);