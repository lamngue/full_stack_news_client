"use strict";(self.webpackChunkfull_stack_news_client=self.webpackChunkfull_stack_news_client||[]).push([[758],{9758:function(e,r,n){n.r(r);var t=n(2285),a=n(6905),i=n(7031),l=n(4587),s=n(3099),o=n(7309),c=n(1087),u=n(9434),p=n(1638),m=n(2791),d=n(7689),f=n(184);r.default=function(){var e=(0,d.s0)(),r=(0,u.v9)((function(e){return e.user})),n=(0,u.I0)();(0,m.useEffect)((function(){r&&r.data&&("Wrong password!"===r.data?g("Wrong password"):r.data.user?e("/main/all-post"):"Wrong username or password!"===r.data&&g("Wrong username or password"))}),[r]);var g=function(e){t.Z.open({message:e,description:"Please try again"})};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(a.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(e){n((0,p.pH)(e))},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,f.jsx)(a.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,f.jsx)(i.Z,{})}),(0,f.jsx)(a.Z.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:(0,f.jsx)(i.Z.Password,{})}),(0,f.jsx)(a.Z.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:(0,f.jsx)(l.Z,{children:"Remember me"})}),(0,f.jsx)(a.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,f.jsxs)(s.Z,{children:[(0,f.jsx)(o.Z,{type:"primary",htmlType:"submit",children:(0,f.jsx)(c.rU,{to:"/register",children:"Register"})}),(0,f.jsx)(o.Z,{type:"primary",htmlType:"submit",children:"Login"})]})})]})})}},3099:function(e,r,n){n.d(r,{u:function(){return f},Z:function(){return h}});var t=n(7462),a=n(4942),i=n(9439),l=n(2791),s=n(1694),o=n.n(s),c=n(5501),u=n(3785);function p(e){var r=e.className,n=e.direction,i=e.index,s=e.marginDirection,o=e.children,c=e.split,u=e.wrap,p=l.useContext(f),m=p.horizontalSize,d=p.verticalSize,g=p.latestIndex,h={};return p.supportFlexGap||("vertical"===n?i<g&&(h={marginBottom:m/(c?2:1)}):h=(0,t.Z)((0,t.Z)({},i<g&&(0,a.Z)({},s,m/(c?2:1))),u&&{paddingBottom:d})),null===o||void 0===o?null:l.createElement(l.Fragment,null,l.createElement("div",{className:r,style:h},o),i<g&&c&&l.createElement("span",{className:"".concat(r,"-split"),style:h},c))}var m=n(8883),d=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n},f=l.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),g={small:8,middle:16,large:24};var h=function(e){var r,n=l.useContext(u.E_),s=n.getPrefixCls,h=n.space,v=n.direction,x=e.size,y=void 0===x?(null===h||void 0===h?void 0:h.size)||"small":x,w=e.align,Z=e.className,b=e.children,j=e.direction,z=void 0===j?"horizontal":j,C=e.prefixCls,P=e.split,k=e.style,E=e.wrap,F=void 0!==E&&E,I=d(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),O=(0,m.Z)(),N=l.useMemo((function(){return(Array.isArray(y)?y:[y,y]).map((function(e){return function(e){return"string"===typeof e?g[e]:e||0}(e)}))}),[y]),S=(0,i.Z)(N,2),_=S[0],G=S[1],W=(0,c.Z)(b,{keepEmpty:!0}),B=void 0===w&&"horizontal"===z?"center":w,R=s("space",C),q=o()(R,"".concat(R,"-").concat(z),(r={},(0,a.Z)(r,"".concat(R,"-rtl"),"rtl"===v),(0,a.Z)(r,"".concat(R,"-align-").concat(B),B),r),Z),A="".concat(R,"-item"),D="rtl"===v?"marginLeft":"marginRight",L=0,M=W.map((function(e,r){null!==e&&void 0!==e&&(L=r);var n=e&&e.key;return l.createElement(p,{className:A,key:"".concat(A,"-").concat(n||r),direction:z,index:r,marginDirection:D,split:P,wrap:F},e)})),T=l.useMemo((function(){return{horizontalSize:_,verticalSize:G,latestIndex:L,supportFlexGap:O}}),[_,G,L,O]);if(0===W.length)return null;var U={};return F&&(U.flexWrap="wrap",O||(U.marginBottom=-G)),O&&(U.columnGap=_,U.rowGap=G),l.createElement("div",(0,t.Z)({className:q,style:(0,t.Z)((0,t.Z)({},U),k)},I),l.createElement(f.Provider,{value:T},M))}}}]);
//# sourceMappingURL=758.d7e2748e.chunk.js.map