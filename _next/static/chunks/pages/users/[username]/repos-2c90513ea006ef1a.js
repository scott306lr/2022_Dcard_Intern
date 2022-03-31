(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[194],{8544:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/[username]/repos",function(){return r(2663)}])},7853:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(2010),o=(r(6687),r(5375)),c=r(4573),s=r(320);function i(){return(0,n.jsxs)("span",{className:"flex bg-pri_color items-center justify-center",children:[(0,n.jsx)(c.default,{href:"/",children:(0,n.jsxs)("header",{className:"flex items-center cursor-pointer text-white text-md p-4",children:[(0,n.jsx)(o.Z,{className:"h-5 w-5"}),(0,n.jsx)("h1",{children:"GitRepo"})]})}),(0,n.jsx)("span",{className:"flex mx-auto items-center justify-center h-8",children:(0,n.jsx)(s.Z,{})})]})}},5634:function(e,t,r){"use strict";r.d(t,{J:function(){return f}});var n=r(606),o=r.n(n),c=r(6687),s=r(838),i=r(2424),a=r.n(i),u=r(6832);function l(e,t,r,n,o,c,s){try{var i=e[c](s),a=i.value}catch(u){return void r(u)}i.done?t(a):Promise.resolve(a).then(n,o)}var f=function(){var e=(0,s.useRouter)().query.username,t=(0,c.useState)(Object.create(null)),r=t[0],n=t[1],i=(0,c.useState)("404"),f=i[0],d=i[1];return(0,c.useEffect)((function(){var t=function(){var t,r=(t=o().mark((function t(){var r,c,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=11;break}if(r=JSON.parse(window.sessionStorage.getItem("userInfo")||"{}"),(0,u.isEmpty)(r)||r.login!==e){t.next=6;break}return n(r),d("ok"),t.abrupt("return");case 6:return c="https://api.github.com/users/".concat(e),t.next=9,a().get(c).then((function(e){return e.data})).catch((function(e){var t;403===(null===(t=e.response)||void 0===t?void 0:t.status)?(console.log("API rate limit exceeded"),d("403")):(console.log("API error"),d("error"))}));case 9:(s=t.sent)&&(n(s),window.sessionStorage.setItem("userInfo",JSON.stringify(s)),d("ok"));case 11:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function s(e){l(c,n,o,s,i,"next",e)}function i(e){l(c,n,o,s,i,"throw",e)}s(void 0)}))});return function(){return r.apply(this,arguments)}}();t()}),[e]),[r,f]}},2663:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(2010),o=r(7639),c=r(838),s=r(4573),i=r(5634),a=r(606),u=r.n(a),l=r(6687),f=r(2424),d=r.n(f);function h(e,t,r,n,o,c,s){try{var i=e[c](s),a=i.value}catch(u){return void r(u)}i.done?t(a):Promise.resolve(a).then(n,o)}var x=function(){var e=(0,c.useRouter)().query.username,t=(0,l.useState)(!0),r=t[0],n=t[1],o=(0,l.useState)(1),s=o[0],i=o[1],a=(0,l.useState)([]),f=a[0],x=a[1],m=function(){var t,r=(t=u().mark((function t(){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return r="https://api.github.com/users/".concat(e,"/repos?per_page=10&page=").concat(s),t.next=4,d().get(r).then((function(e){return e.data})).catch((function(e){var t;403===(null===(t=e.response)||void 0===t?void 0:t.status)?console.log("API rate limit exceeded"):console.log("API error")}));case 4:(null===(o=t.sent)||void 0===o?void 0:o.length)?(x(f.concat(o)),n(!0)):n(!1);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function s(e){h(c,n,o,s,i,"next",e)}function i(e){h(c,n,o,s,i,"throw",e)}s(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,l.useEffect)((function(){x([]),m()}),[e]),(0,l.useEffect)((function(){m()}),[s]),[f,r,function(){i(s+1)}]},m=r(7853),v=r(5722);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);s=!0);}catch(a){i=!0,o=a}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=function(){var e=(0,c.useRouter)().query.username,t=w((0,i.J)(),2),r=t[0],a=t[1],u=w(x(),3),l=u[0],f=u[1],d=u[2];return(0,n.jsxs)("div",{className:"flex flex-col h-screen w-screen bg-bg_color",children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"GitRepo - Repos Page"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(m.Z,{}),(0,n.jsx)("main",{className:"".concat("ok"===a?"flex-center":"hidden"," items-stretch h-full w-full p-2 bg-bg_color"),children:(0,n.jsxs)("div",{className:"flex-center flex-col md:flex-row w-5/6 rounded-lg bg-white m-4",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center space-y-4",children:[(0,n.jsx)(s.default,{href:"".concat(null===r||void 0===r?void 0:r.html_url),children:(0,n.jsx)("img",{src:"".concat(null===r||void 0===r?void 0:r.avatar_url),className:"flex w-4/5 max-w-[14rem] md:max-w-[24rem] rounded-full border-2 border-hov_color cursor-pointer hover:shadow-lg"})}),(0,n.jsxs)("header",{className:"text-xl",children:[" ",null===r||void 0===r?void 0:r.name," "]})]}),(0,n.jsxs)("div",{className:"flex flex-col md:flex-grow w-4/5 max-w-[30rem] p-5",children:[(0,n.jsx)("h3",{children:"Public Repositories ".concat(r?"("+(null===r||void 0===r?void 0:r.public_repos)+")":"",":")}),(0,n.jsx)(v.Z,{data:l,height:280,nextPage:d,hasMore:f})]})]})}),(0,n.jsx)("h1",{id:"404",className:"h-full w-full ".concat("error"===a?"flex":"hidden"," items-center justify-center text-2xl text-gray-300"),children:'User "'.concat(e,'" Not Found!')}),(0,n.jsx)("h1",{id:"403",className:"h-full w-full ".concat("403"===a?"flex":"hidden"," items-center justify-center text-2xl text-gray-300"),children:"API rate limit exceeded !"})]})}}},function(e){e.O(0,[642,365,483,774,888,179],(function(){return t=8544,e(e.s=t);var t}));var t=e.O();_N_E=t}]);