(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8861:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8518)}])},8518:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(2010),l=r(5375),s=r(7639),a=r(5722),o=r(320),i=r(606),c=r.n(i),u=r(6687),f=r(2424),h=r.n(f);function x(e,t,r,n,l,s,a){try{var o=e[s](a),i=o.value}catch(c){return void r(c)}o.done?t(i):Promise.resolve(i).then(n,l)}var d=function(){var e=(0,u.useState)(!0),t=e[0],r=e[1],n=(0,u.useState)(1),l=n[0],s=n[1],a=(0,u.useState)([]),o=a[0],i=a[1],f=(0,u.useState)("error"),d=f[0],m=f[1],p=function(){var e,t=(e=c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.github.com/search/repositories?q=stars:%3E15000&per_page=10&page=".concat(l),e.next=3,h().get(t).then((function(e){return e.data.items})).catch((function(e){var t;403===(null===(t=e.response)||void 0===t?void 0:t.status)?(console.log("API rate limit exceeded"),m("403")):(console.log("API error"),m("error"))}));case 3:(null===(n=e.sent)||void 0===n?void 0:n.length)?(i(o.concat(n)),r(!0),m("ok")):r(!1);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,l){var s=e.apply(t,r);function a(e){x(s,n,l,a,o,"next",e)}function o(e){x(s,n,l,a,o,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,u.useEffect)((function(){p()}),[l]),[o,function(){s(l+1)},t,d]};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,s=[],a=!0,o=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);a=!0);}catch(i){o=!0,l=i}finally{try{a||null==r.return||r.return()}finally{if(o)throw l}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(){var e=p(d(),4),t=e[0],r=e[1],i=e[2],c=e[3];return(0,n.jsxs)("div",{className:"flex flex-col h-screen items-center justify-center py-2 bg-bg_color",children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:"GitRepo - Home Page"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:"flex flex-col h-full w-full items-start justify-start text-center p-5",children:[(0,n.jsxs)("div",{className:"flex-center flex-col sm:flex-row w-full py-5",children:[(0,n.jsxs)("div",{className:"flex h-full items-center text-white bg-bg_color rounded-l-2xl pr-5",children:[(0,n.jsx)(l.Z,{className:"h-14 w-14"}),(0,n.jsx)("h1",{className:"text-5xl",children:"GitRepo"})]}),(0,n.jsx)("div",{className:"flex h-20 flex-grow items-center justify-center",children:(0,n.jsx)(o.Z,{})})]}),(0,n.jsx)("hr",{className:"flex w-full border-t-2 border-gray-300"}),(0,n.jsxs)("div",{className:"flex flex-col h-3/5 w-full items-start justify-start text-white",children:[(0,n.jsx)("h1",{className:"text-4xl pt-2 flex truncate",children:"OR..."}),(0,n.jsx)("h1",{className:"text-2xl truncate hidden sm:flex",children:"below are some popular repositories:"}),(0,n.jsx)("div",{className:"flex-center flex-grow h-52 w-full py-5",children:(0,n.jsx)(a.Z,{data:t,nextPage:r,hasMore:i,status:c})})]})]})]})}}},function(e){e.O(0,[365,483,774,888,179],(function(){return t=8861,e(e.s=t);var t}));var t=e.O();_N_E=t}]);