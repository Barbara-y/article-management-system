import{m as y,t as h,v as _,x as m,o as r,z as d,F as o,e as a,D as t,f as p,al as l,a2 as u,g as n,A as v,_ as g,I as S,c as C,b as f}from"./index-Bbtgh0EI.js";import{_ as $}from"./_plugin-vue_export-helper-CBiJMgzC.js";const b=y({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:h([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),w=_({name:"ElCard"}),k=_({...w,props:b,setup(i){const s=m("card");return(e,c)=>(r(),d("div",{class:o([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),d("div",{key:0,class:o(a(s).e("header"))},[t(e.$slots,"header",{},()=>[p(l(e.header),1)])],2)):u("v-if",!0),n("div",{class:o([a(s).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[t(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),d("div",{key:1,class:o(a(s).e("footer"))},[t(e.$slots,"footer",{},()=>[p(l(e.footer),1)])],2)):u("v-if",!0)],2))}});var B=g(k,[["__file","card.vue"]]);const N=S(B),P={class:"header"},z={class:"extra"},E={__name:"PageContainer",props:{title:{required:!0,type:String}},setup(i){return(s,e)=>{const c=N;return r(),C(c,{class:"page-container"},{header:f(()=>[n("div",P,[n("span",null,l(i.title),1),n("div",z,[t(s.$slots,"extra",{},void 0,!0)])])]),default:f(()=>[t(s.$slots,"default",{},void 0,!0)]),_:3})}}},A=$(E,[["__scopeId","data-v-cecc111e"]]);export{A as _};
