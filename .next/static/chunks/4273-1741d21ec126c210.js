"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4273],{82951:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getRenderPropValue=void 0,t.getRenderPropValue=e=>e?"function"==typeof e?e():e:null},38321:function(e,t,r){var n=r(72899).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(86006));let l=a.createContext({});t.default=l},87717:function(e,t,r){var n=r(78997).default,a=r(72899).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(86006)),o=n(r(8683)),i=n(r(47277)),s=r(38861),u=r(10501);r(63547);var d=r(49050),c=n(r(51766)),p=n(r(48752)),f=n(r(38321)),g=n(r(74110)),m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};let v=l.forwardRef((e,t)=>{let r;let[n,a]=l.useState(1),[v,b]=l.useState(!1),[y,O]=l.useState(!0),h=l.useRef(null),$=l.useRef(null),x=(0,s.composeRef)(t,h),{getPrefixCls:j,avatar:C}=l.useContext(d.ConfigContext),E=l.useContext(f.default),P=()=>{if(!$.current||!h.current)return;let t=$.current.offsetWidth,r=h.current.offsetWidth;if(0!==t&&0!==r){let{gap:n=4}=e;2*n<r&&a(r-2*n<t?(r-2*n)/t:1)}};l.useEffect(()=>{b(!0)},[]),l.useEffect(()=>{O(!0),a(1)},[e.src]),l.useEffect(P,[e.gap]);let{prefixCls:w,shape:k,size:S,src:_,srcSet:N,icon:z,className:M,rootClassName:R,alt:W,draggable:I,children:B,crossOrigin:F}=e,V=m(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),A=(0,c.default)(e=>{var t,r;return null!==(r=null!==(t=null!=S?S:null==E?void 0:E.size)&&void 0!==t?t:e)&&void 0!==r?r:"default"}),H=Object.keys("object"==typeof A&&A||{}).some(e=>["xs","sm","md","lg","xl","xxl"].includes(e)),T=(0,p.default)(H),D=l.useMemo(()=>{if("object"!=typeof A)return{};let e=u.responsiveArray.find(e=>T[e]),t=A[e];return t?{width:t,height:t,lineHeight:`${t}px`,fontSize:t&&(z||B)?t/2:18}:{}},[T,A]),G=j("avatar",w),[L,q]=(0,g.default)(G),U=(0,o.default)({[`${G}-lg`]:"large"===A,[`${G}-sm`]:"small"===A}),X=l.isValidElement(_),Y=k||(null==E?void 0:E.shape)||"circle",Z=(0,o.default)(G,U,null==C?void 0:C.className,`${G}-${Y}`,{[`${G}-image`]:X||_&&y,[`${G}-icon`]:!!z},M,R,q),J="number"==typeof A?{width:A,height:A,lineHeight:`${A}px`,fontSize:z?A/2:18}:{};if("string"==typeof _&&y)r=l.createElement("img",{src:_,draggable:I,srcSet:N,onError:()=>{let{onError:t}=e,r=null==t?void 0:t();!1!==r&&O(!1)},alt:W,crossOrigin:F});else if(X)r=_;else if(z)r=z;else if(v||1!==n){let e=`scale(${n}) translateX(-50%)`,t="number"==typeof A?{lineHeight:`${A}px`}:{};r=l.createElement(i.default,{onResize:P},l.createElement("span",{className:`${G}-string`,ref:$,style:Object.assign(Object.assign({},t),{msTransform:e,WebkitTransform:e,transform:e})},B))}else r=l.createElement("span",{className:`${G}-string`,style:{opacity:0},ref:$},B);return delete V.onError,delete V.gap,L(l.createElement("span",Object.assign({},V,{style:Object.assign(Object.assign(Object.assign(Object.assign({},J),D),null==C?void 0:C.style),V.style),className:Z,ref:x}),r))});t.default=v},47409:function(e,t,r){var n=r(72899).default,a=r(78997).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(8683)),o=a(r(16268)),i=n(r(86006)),s=r(49050),u=a(r(57481)),d=r(60285),c=a(r(87717)),p=a(r(38321)),f=a(r(74110));let g=e=>{let{size:t,shape:r}=i.useContext(p.default),n=i.useMemo(()=>({size:e.size||t,shape:e.shape||r}),[e.size,e.shape,t,r]);return i.createElement(p.default.Provider,{value:n},e.children)};t.default=e=>{let{getPrefixCls:t,direction:r}=i.useContext(s.ConfigContext),{prefixCls:n,className:a,rootClassName:p,style:m,maxCount:v,maxStyle:b,size:y,shape:O,maxPopoverPlacement:h="top",maxPopoverTrigger:$="hover",children:x}=e,j=t("avatar",n),C=`${j}-group`,[E,P]=(0,f.default)(j),w=(0,l.default)(C,{[`${C}-rtl`]:"rtl"===r},a,p,P),k=(0,o.default)(x).map((e,t)=>(0,d.cloneElement)(e,{key:`avatar-key-${t}`})),S=k.length;if(v&&v<S){let e=k.slice(0,v),t=k.slice(v,S);return e.push(i.createElement(u.default,{key:"avatar-popover-key",content:t,trigger:$,placement:h,overlayClassName:`${C}-popover`},i.createElement(c.default,{style:b},`+${S-v}`))),E(i.createElement(g,{shape:O,size:y},i.createElement("div",{className:w,style:m},e)))}return E(i.createElement(g,{shape:O,size:y},i.createElement("div",{className:w,style:m},k)))}},74273:function(e,t,r){var n=r(78997).default;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Group",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var a=n(r(87717)),l=n(r(47409));let o=a.default;o.Group=l.default,t.default=o},74110:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(3492),a=r(42309);let l=e=>{let{antCls:t,componentCls:r,iconCls:a,avatarBg:l,avatarColor:o,containerSize:i,containerSizeLG:s,containerSizeSM:u,textFontSize:d,textFontSizeLG:c,textFontSizeSM:p,borderRadius:f,borderRadiusLG:g,borderRadiusSM:m,lineWidth:v,lineType:b}=e,y=(e,t,n)=>({width:e,height:e,lineHeight:`${e-2*v}px`,borderRadius:"50%",[`&${r}-square`]:{borderRadius:n},[`${r}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${r}-icon`]:{fontSize:t,[`> ${a}`]:{margin:0}}});return{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,n.resetComponent)(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:o,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:l,border:`${v}px ${b} transparent`,"&-image":{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),y(i,d,f)),{"&-lg":Object.assign({},y(s,c,g)),"&-sm":Object.assign({},y(u,p,m)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},o=e=>{let{componentCls:t,groupBorderColor:r,groupOverlapping:n,groupSpace:a}=e;return{[`${t}-group`]:{display:"inline-flex",[`${t}`]:{borderColor:r},"> *:not(:first-child)":{marginInlineStart:n}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:a}}}};t.default=(0,a.genComponentStyleHook)("Avatar",e=>{let{colorTextLightSolid:t,colorTextPlaceholder:r}=e,n=(0,a.mergeToken)(e,{avatarBg:r,avatarColor:t});return[l(n),o(n)]},e=>{let{controlHeight:t,controlHeightLG:r,controlHeightSM:n,fontSize:a,fontSizeLG:l,fontSizeXL:o,fontSizeHeading3:i,marginXS:s,marginXXS:u,colorBorderBg:d}=e;return{containerSize:t,containerSizeLG:r,containerSizeSM:n,textFontSize:Math.round((l+o)/2),textFontSizeLG:i,textFontSizeSM:a,groupSpace:u,groupOverlapping:-s,groupBorderColor:d}})},55968:function(e,t,r){var n=r(72899).default,a=r(78997).default;Object.defineProperty(t,"__esModule",{value:!0}),t.getOverlay=t.default=t.RawPurePanel=void 0;var l=a(r(8683)),o=r(99753),i=n(r(86006)),s=r(49050),u=r(82951),d=a(r(92272)),c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};let p=(e,t,r)=>{if(t||r)return i.createElement(i.Fragment,null,t&&i.createElement("div",{className:`${e}-title`},(0,u.getRenderPropValue)(t)),i.createElement("div",{className:`${e}-inner-content`},(0,u.getRenderPropValue)(r)))};t.getOverlay=p;let f=e=>{let{hashId:t,prefixCls:r,className:n,style:a,placement:s="top",title:u,content:d,children:c}=e;return i.createElement("div",{className:(0,l.default)(t,r,`${r}-pure`,`${r}-placement-${s}`,n),style:a},i.createElement("div",{className:`${r}-arrow`}),i.createElement(o.Popup,Object.assign({},e,{className:t,prefixCls:r}),c||p(r,u,d)))};t.RawPurePanel=f,t.default=e=>{let{prefixCls:t}=e,r=c(e,["prefixCls"]),{getPrefixCls:n}=i.useContext(s.ConfigContext),a=n("popover",t),[l,o]=(0,d.default)(a);return l(i.createElement(f,Object.assign({},r,{prefixCls:a,hashId:o})))}},57481:function(e,t,r){var n=r(78997).default,a=r(72899).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(86006)),o=n(r(8683)),i=r(82951),s=r(61792),u=r(49050),d=n(r(90879)),c=n(r(55968)),p=n(r(92272)),f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};let g=e=>{let{title:t,content:r,prefixCls:n}=e;return l.createElement(l.Fragment,null,t&&l.createElement("div",{className:`${n}-title`},(0,i.getRenderPropValue)(t)),l.createElement("div",{className:`${n}-inner-content`},(0,i.getRenderPropValue)(r)))},m=l.forwardRef((e,t)=>{let{prefixCls:r,title:n,content:a,overlayClassName:i,placement:c="top",trigger:m="hover",mouseEnterDelay:v=.1,mouseLeaveDelay:b=.1,overlayStyle:y={}}=e,O=f(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:h}=l.useContext(u.ConfigContext),$=h("popover",r),[x,j]=(0,p.default)($),C=h(),E=(0,o.default)(i,j);return x(l.createElement(d.default,Object.assign({placement:c,trigger:m,mouseEnterDelay:v,mouseLeaveDelay:b,overlayStyle:y},O,{prefixCls:$,overlayClassName:E,ref:t,overlay:n||a?l.createElement(g,{prefixCls:$,title:n,content:a}):null,transitionName:(0,s.getTransitionName)(C,"zoom-big",O.transitionName),"data-popover-inject":!0})))});m._InternalPanelDoNotUseOrYouWillBeFired=c.default,t.default=m},92272:function(e,t,r){var n=r(78997).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(3492),l=r(79762),o=n(r(50726)),i=r(42309);let s=e=>{let{componentCls:t,popoverColor:r,titleMinWidth:n,fontWeightStrong:l,popoverPadding:i,boxShadowSecondary:s,colorTextHeading:u,borderRadiusLG:d,zIndexPopup:c,marginXS:p,colorBgElevated:f,popoverBg:g}=e;return[{[t]:Object.assign(Object.assign({},(0,a.resetComponent)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:c,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":f,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:g,backgroundClip:"padding-box",borderRadius:d,boxShadow:s,padding:i},[`${t}-title`]:{minWidth:n,marginBottom:p,color:u,fontWeight:l},[`${t}-inner-content`]:{color:r}})},(0,o.default)(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},u=e=>{let{componentCls:t}=e;return{[t]:i.PresetColors.map(r=>{let n=e[`${r}6`];return{[`&${t}-${r}`]:{"--antd-arrow-background-color":n,[`${t}-inner`]:{backgroundColor:n},[`${t}-arrow`]:{background:"transparent"}}}})}},d=e=>{let{componentCls:t,lineWidth:r,lineType:n,colorSplit:a,paddingSM:l,controlHeight:o,fontSize:i,lineHeight:s,padding:u}=e,d=o-Math.round(i*s);return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${d/2}px ${u}px ${d/2-r}px`,borderBottom:`${r}px ${n} ${a}`},[`${t}-inner-content`]:{padding:`${l}px ${u}px`}}}};t.default=(0,i.genComponentStyleHook)("Popover",e=>{let{colorBgElevated:t,colorText:r,wireframe:n}=e,a=(0,i.mergeToken)(e,{popoverPadding:12,popoverBg:t,popoverColor:r});return[s(a),u(a),n&&d(a),(0,l.initZoomMotion)(a,"zoom-big")]},e=>({width:177,minWidth:177,titleMinWidth:177,zIndexPopup:e.zIndexPopupBase+30}),{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})}}]);