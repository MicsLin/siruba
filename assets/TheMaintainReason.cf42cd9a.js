import{u as e,a as t,m as a,c as l,r as s,w as n,b as u,d as i,g as o,t as r,k as c,J as p,F as v,y as d,E as m,h as b,B as L,l as f,f as h,q as y,s as R,o as w,n as x}from"./vendor.ee801e80.js";import{_ as B}from"./index.9e640917.js";const g=e=>(y("data-v-2790bf52"),e=e(),R(),e),A={class:"mt-12 flex sm:block py-4 sm:mb-4 text-4xl text-orange-siruba"},_={class:"w-full shadow sirubaBorder"},O={class:"flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 text-lg titleStyle border-b"},I={class:"flex items-center text-xl"},T=g((()=>o("i",{class:"pe-7s-close-circle pe-lg pe-va"},null,-1))),G={class:"ml-3 mr-1"},S={class:"w-96 md:w-7/12 sm:w-3/12"},E=["value"],M={class:"px-8 sm:px-2 py-6 sm:py-4 text-white text-sm"},k=["onSubmit"],C={class:"sm:hidden"},D={type:"submit",class:"btn btnBlueColor"},$=["onSubmit"],U={class:"table-fixed w-full shadow-2xl"},j={class:"tableThStyle"},N={class:"py-3"},P={class:"w-1/12 lg:w-1/6"},V={class:"w-1/12 lg:w-1/6 sm:w-1/12"},F={key:0},q={class:"bg-red-300"},z=g((()=>o("td",null,null,-1))),H={class:"py-1 pl-20 sm:pl-0"},J=g((()=>o("td",null,null,-1))),X=g((()=>o("td",null,null,-1))),K={key:1},Q={class:"tableBorderStyle px-2 py-3"},W=["onUpdate:modelValue","onChange"],Y={class:"tableBorderStyle text-center"},Z={class:"tableBorderStyle"},ee={class:"flex items-center justify-center sm:rounded-2xl tableRedColor_sm"},te=["onClick"],ae=["onClick"],le={class:"mt-8"},se={type:"submit",class:"mr-2 btn btnBlueColor"},ne={type:"button",class:"btn btnBlueColor"};var ue=B({props:{Title:String},setup(y){const R=y,B=e();t();const g=a();l((()=>B.state.resData.token)),l((()=>B.state.serverURL));const ue=s(g.locale.value),ie=s([{title:"tw",description:"繁體中文"},{title:"en",description:"English"},{title:"cn",description:"简体中文"},{title:"jp",description:"日本語"}]),oe=s(),re=s(ue.value),ce=s([{ReasonID:999}]),pe=s([]),ve=s([]),de=function(){ce.value=[],pe.value=[],ve.value.forEach((e=>{"tw"==ue.value&&"zh"==e.Language&&(ce.value.push(e),pe.value.push("繁體中文")),"cn"==ue.value&&"ch"==e.Language&&(ce.value.push(e),pe.value.push("简体中文")),"en"==ue.value&&"en"==e.Language&&(ce.value.push(e),pe.value.push("English")),"jp"==ue.value&&"ja"==e.Language&&(ce.value.push(e),pe.value.push("日本語"))}))},me=function(){},be=s([]),Le=function(){"tw"==ue.value&&(be.value=[{title:"maintain",description:"保養"},{title:"repair",description:"維修"}]),"cn"==ue.value&&(be.value=[{title:"maintain",description:"保养"},{title:"repair",description:"维修"}]),"jp"==ue.value&&(be.value=[{title:"maintain",description:"メンテナンス"},{title:"repair",description:"修理"}]),"en"==ue.value&&(be.value=[{title:"maintain",description:"maintain"},{title:"repair",description:"repair"}])};Le();const fe=function(){let e=B.state.fakeData.theMaintainReason;oe.value=e.Maintain_Time,ve.value=e.maintainReasonList,de()};fe();const he=s([]);n((()=>he.value.length),(e=>{e>0&&setTimeout((()=>{he.value=[]}),31e3)}));const ye=s([]),Re=s(!1),we=function(){},xe=function(){B.commit("onPopupForm","maintainReason")};n((()=>R.Title),(e=>{e&&fe()}));n((()=>g.locale.value),(e=>{ue.value=e,re.value=e,Le(),de()})),n((()=>re.value),(e=>{ue.value=e,Le(),de()})),n((()=>Re.value),(()=>{Re.value&&("tw"==ue.value&&alert("新增成功"),"en"==ue.value&&alert("Save Success"),"jp"==ue.value&&alert("新規追加に成功"),"cn"==ue.value&&alert("新增成功"))}));const Be=s(),ge=s(B.state.resData.adminPagesPermit),Ae=s(ge.value.split(",")),_e=function(e){return 0!=Ae.length&&Ae.value.find((t=>t==e))};return Be.value="/adminpersonalset",_e(3)&&(Be.value="/efficiency"),_e(2)&&(Be.value="/machine_status"),_e(13)&&(Be.value="/home_productivity"),_e(4)&&(Be.value="/"),_e(5)&&_e(6)&&_e(7)&&_e(8)&&_e(9)&&_e(10)&&_e(11)&&_e(12)&&(Be.value="/factory_settings"),(e,t)=>{const a=u("router-link");return w(),i(v,null,[o("h1",A,r(e.$t("MaintainReason.MR_TITLE")),1),o("div",_,[o("div",O,[o("div",null,[o("span",I,[T,o("span",G,r(e.$t("MaintainReason.MR_REASONLIST")),1)])]),o("div",S,[c(o("select",{class:"w-full myInputSearch","onUpdate:modelValue":t[0]||(t[0]=e=>re.value=e)},[(w(!0),i(v,null,d(ie.value,((e,t)=>(w(),i("option",{key:t,value:e.title},r(e.description),9,E)))),128))],512),[[p,re.value]])]),o("button",{type:"button",class:"btn btnBlueColor",onClick:xe},r(e.$t("GLOBAL.GLOBAL_ADD")),1)]),o("div",M,[o("form",{class:"flex items-center mb-6 sm:mb-4 w-full",onSubmit:m(me,["prevent"])},[o("span",null,[b(r(e.$t("MaintainReason.MR_REPAIR"))+r(e.$t("GLOBAL.GLOBAL_TIME"))+"(",1),o("span",C,r(e.$t("MaintainReason.MR_UNIT"))+":",1),b(r(e.$t("GLOBAL.GLOBAL_HOUR"))+"):",1)]),c(o("input",{type:"number",class:"mx-2 form-control myInput w-80 md:w-72 sm:w-4/12",min:"0",max:"3000","onUpdate:modelValue":t[1]||(t[1]=e=>oe.value=e),required:""},null,512),[[L,oe.value]]),o("button",D,r(e.$t("GLOBAL.GLOBAL_SUBMIT")),1)],40,k),o("form",{onSubmit:m(we,["prevent"])},[o("table",U,[o("thead",null,[o("tr",j,[o("th",N,r(e.$t("MaintainReason.MR_REASONNAME")),1),o("th",P,r(e.$t("MaintainReason.MR_LANGUAGE")),1),o("th",V,r(e.$t("GLOBAL.GLOBAL_DELETE")),1)])]),0==ce.value.length?(w(),i("tbody",F,[o("tr",q,[z,o("td",H,r(e.$t("GLOBAL.GLOBAL_NONEINFO")),1),J,X])])):(w(),i("tbody",K,[(w(!0),i(v,null,d(ce.value,((e,t)=>(w(),i("tr",{key:t,class:x([e.ReasonID==he.value[e.ReasonID]?"isNewBgColor":""])},[o("td",Q,[c(o("input",{type:"text",class:"form-control myInput w-full","onUpdate:modelValue":t=>e.Title=t,onChange:m((e=>function(e){let t=ce.value[e].ReasonID,a=ce.value[e].Title,l=ce.value[e].Type,s=ye.value.findIndex((e=>e.ReasonID==t));if(s>=0)ye.value[s].Title=a,ye.value[s].Type=l;else{let e={ReasonID:t,Title:a,Type:l};ye.value.push(e)}}(t)),["prevent"])},null,40,W),[[L,e.Title]])]),o("td",Y,r(pe.value[t]),1),o("td",Z,[o("div",ee,[o("button",{type:"button",class:"btn btnRedColor sm:hidden",onClick:t=>{e.ReasonID}},"刪除",8,te),o("span",{class:"hidden sm:block text-white h-11/12 cursor-pointer",onClick:t=>{e.ReasonID}},"X",8,ae)])])],2)))),128))]))]),o("div",le,[o("button",se,r(e.$t("GLOBAL.GLOBAL_SAVE")),1),f(a,{to:Be.value},{default:h((()=>[o("button",ne,r(e.$t("GLOBAL.GLOBAL_PREVIOUSPAGE")),1)])),_:1},8,["to"])])],40,$)])])],64)}}},[["__scopeId","data-v-2790bf52"]]);export{ue as default};
