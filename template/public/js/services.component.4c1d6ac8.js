"use strict";(self["webpackChunkmoleculerspa"]=self["webpackChunkmoleculerspa"]||[]).push([[851],{7101:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var a=n(3673),o=n(2323),r=n(8880);const l=(0,a.Wm)("thead",null,[(0,a.Wm)("tr",null,[(0,a.Wm)("th",{class:"text-left"},"Action Name"),(0,a.Wm)("th",{class:"text-center"},"Rest"),(0,a.Wm)("th",{class:"text-center"},"Paramaters"),(0,a.Wm)("th",{class:"text-right"})])],-1),s=(0,a.Uk)("cached"),i=(0,a.Wm)("td",null,null,-1);function c(e,t,n,c,u,d){const p=(0,a.up)("q-th"),m=(0,a.up)("q-tr"),f=(0,a.up)("q-btn"),w=(0,a.up)("q-td"),g=(0,a.up)("q-badge"),h=(0,a.up)("q-chip"),b=(0,a.up)("q-markup-table"),v=(0,a.up)("q-table");return(0,a.wg)(),(0,a.j4)(v,{title:"Service Status",rows:e.filteredServices,columns:e.columns,"row-key":"name"},{header:(0,a.w5)((e=>[(0,a.Wm)(m,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{"auto-width":""}),((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.cols,(t=>((0,a.wg)(),(0,a.j4)(p,{key:t.name,props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,a.w5)((t=>[(0,a.Wm)(m,{props:t},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{"auto-width":""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{size:"sm",color:"accent",round:"",dense:"",onClick:e=>t.expand=!t.expand,icon:t.expand?"remove":"add"},null,8,["onClick","icon"])])),_:2},1024),(0,a.Wm)(w,{key:"name",props:t},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t.row.name)+" ",1),t.row.version?((0,a.wg)(),(0,a.j4)(g,{key:0,transparent:"",color:"black"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)("v"+t.row.version),1)])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1032,["props"]),(0,a.Wm)(w,{key:"nodes",props:t},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(t.row.nodes,(e=>((0,a.wg)(),(0,a.j4)(h,{key:e,class:"glossy",square:"",color:"grey","text-color":"white"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e),1)])),_:2},1024)))),128))])),_:2},1032,["props"]),(0,a.Wm)(w,{key:"status",props:t},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{class:"glossy",square:"",color:t.row.nodes.length>0?"teal":"red","text-color":"white",icon:t.row.nodes.length>0?"done":"priority_high"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t.row.nodes.length>0?"Online":"Offline"),1)])),_:2},1032,["color","icon"])])),_:2},1032,["props"])])),_:2},1032,["props"]),(0,a.wy)((0,a.Wm)(m,{props:t},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{colspan:"100%"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[l,(0,a.Wm)("tbody",null,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.getServiceActions(t.row),(n=>((0,a.wg)(),(0,a.j4)("tr",{class:{action:!0,offline:!n.available,local:n.hasLocal},key:n.name},[(0,a.Wm)("td",null,[(0,a.Uk)((0,o.zw)(n.name)+" ",1),n.action.cache?((0,a.wg)(),(0,a.j4)(g,{key:0,transparent:"",color:"orange","text-color":"black"},{default:(0,a.w5)((()=>[s])),_:1})):(0,a.kq)("",!0)]),(0,a.Wm)("td",{innerHTML:e.getActionREST(t.row,n)},null,8,["innerHTML"]),(0,a.Wm)("td",{title:e.getActionParams(n,40)},(0,o.zw)(e.getActionParams(n,40)),9,["title"]),i,(0,a.Wm)("td",null,[(0,a.Wm)(h,{class:"glossy",square:"",color:n.available?"teal":"red","text-color":"white",icon:n.available?"done":"priority_high"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(n.available?"Online":"Offline"),1)])),_:2},1032,["color","icon"])])],2)))),128))])])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"]),[[r.F8,t.expand]])])),_:1},8,["rows","columns"])}var u=n(1959),d=n(9582),p=n(1768),m=n(8825),f=function(e,t,n,a){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function l(e){try{i(a.next(e))}catch(t){r(t)}}function s(e){try{i(a["throw"](e))}catch(t){r(t)}}function i(e){e.done?n(e.value):o(e.value).then(l,s)}i((a=a.apply(e,t||[])).next())}))};let w;const g=[{name:"name",required:!0,label:"Service name",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"nodes",align:"center",label:"Instances",field:"nodes",sortable:!0},{name:"status",align:"center",label:"Status",field:"nodes",sortable:!0}],h=(0,a.aZ)({name:"CompositionComponent",setup(){const e=(0,m.Z)(),t=(0,u.iH)([]);let n={};function o(t){return f(this,void 0,void 0,(function*(){return yield p.axios.get(t).then((e=>e.data)).catch((()=>{e.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})}))}))}const r=(0,a.Fl)((()=>{const e=t.value.filter((e=>!e.name.startsWith("$")));return e}));function l(){return f(this,void 0,void 0,(function*(){yield o("/api/~node/services?withActions=true").then((e=>{t.value=e,e.sort(((e,t)=>e.name.localeCompare(t.name))),e.forEach((e=>e.nodes.sort()))})).then((()=>f(this,void 0,void 0,(function*(){return yield o("/api/~node/actions")})))).then((e=>{e.sort(((e,t)=>e.name.localeCompare(t.name)));const t=e.reduce(((e,t)=>(e[t.name]=t,e)),{});n=t}))}))}function s(e){const t=Object.keys(e.actions).map((e=>n[e])).filter((e=>!!e));return t}function i(e,t){if(e.action&&e.action.params){const n=Object.keys(e.action.params).join(", ");return n.length>t?n.substr(0,t)+"…":n}return"-"}function c(e,t){if(t.action.rest){let n=e.fullName||e.name;if("string"==typeof e.settings.rest&&(n=e.settings.rest),"string"==typeof t.action.rest){if(-1!==t.action.rest.indexOf(" ")){const e=t.action.rest.split(" ");return`<div role="alert" class="q-badge flex inline items-center no-wrap q-badge--single-line bg-${"GET"==e[0]?"blue":"POST"==e[0]?"green":"PUT"==e[0]?"orange":"red"} q-badge--transparent">${e[0]}</div> ${n}${e[1]}`}return`<div role="alert" class="q-badge flex inline items-center no-wrap q-badge--single-line bg-black q-badge--transparent">*</div> ${n}${t.action.rest}`}return`<div role="alert" class="q-badge flex inline items-center no-wrap q-badge--single-line bg-black q-badge--transparent">${t.action.rest.method||"*"}</div>\t${n}${t.action.rest.path}`}return""}return(0,a.bv)((()=>{w=setInterval((()=>{l()}),2e3)})),(0,d.iS)(((e,t,n)=>{clearInterval(w),n()})),{filteredServices:r,getActionREST:c,getActionParams:i,getServiceActions:s,columns:g}}});var b=n(4877),v=n(8186),k=n(2414),y=n(3884),W=n(4607),q=n(9721),x=n(7030),_=n(481),j=n(7518),S=n.n(j);h.render=c;const T=h;S()(h,"components",{QTable:b.Z,QTr:v.Z,QTh:k.Z,QTd:y.Z,QBtn:W.Z,QBadge:q.Z,QChip:x.Z,QMarkupTable:_.Z})}}]);