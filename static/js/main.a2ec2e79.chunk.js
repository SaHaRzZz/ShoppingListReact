(this.webpackJsonpbuildtestsl=this.webpackJsonpbuildtestsl||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var i=n(1),A=n(0),r=n.n(A),o=n(16),a=n.n(o),c=(n(46),n.p,n(47),n(13)),s=n(12),l=n(11),d=n(17),u="SET_TEXT_TO_FILTER",b="SET_TYPE_TO_FILTER",g="SET_TYPE_TO_FILTER_HEBREW",j="SET_CATEGORY_TO_FILTER",p="SET_CATEGORY_TO_FILTER_HEBREW",f="SET_FINAL",m="SET_FINAL_HEBREW",O="FETCH_REQUEST",x="FETCH_SUCCESS",y="FETCH_FAILURE",E=n(37),B=n.n(E),I=function(e){return{type:x,payload:e}},h=function(){return function(e){B.a.get("https://raw.githubusercontent.com/SaHaRzZz/test/main/json/Data.json").then((function(t){var n=t.data.food;return n=JSON.stringify(n),localStorage.setItem("items-database",n),e(I(t.data.food))})).catch((function(t){if(localStorage.getItem("items-database")){var n=localStorage.getItem("items-database");return n=JSON.parse(n),e(I(n))}return e(function(e){return{type:y,payload:e}}(t.message))}))}},F="ADD_ITEM_TO_LIST",Q="REMOVE_ITEM_FROM_LIST",T="CREATE_ITEM_IN_LIST",C="RESET_ITEM_FROM_LIST",v="SET_LIST",U="SET_NOTE",S="SET_IMAGES_SIZE",w="SET_TITLES_SIZE",N=function(e){return{type:S,payload:e}},H=function(e){return{type:w,payload:e}},R=n(39),z=n(38),L=(n(70),"https://raw.githubusercontent.com/SaHaRzZz/test/main/imgs/"),K=function(e,t,n,i){t[e]?n(e):i(e)};var q=Object(c.b)((function(e){return{list:e.list,options:e.options}}),(function(e){return{addItemToList:function(t){return e({type:F,item:t})},removeItemFromList:function(t){return e({type:Q,item:t})},createItemInList:function(t){return e({type:T,item:t})},resetItemFromList:function(t){return e({type:C,item:t})},setNote:function(t,n){return e({type:U,item:t,payload:n})}}}))((function(e){return Object(i.jsxs)("div",{className:"card flex-row my-1 shadow text-center",style:{backgroundColor:e.list[e.id]?"rgb(0, 0, 255, 0.5)":"rgb(255, 0, 0, 0.5)"},children:[Object(i.jsx)("div",{className:"card-header border-0",children:Object(i.jsx)("img",{src:"".concat(L).concat(e.logo),onError:function(e){return e.target.src="data:image/png;base64,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"},className:"user-select-none",style:{width:e.options.imagesSize}})}),Object(i.jsxs)("div",{className:"card-body row p-0 text-wrap",children:[Object(i.jsx)("div",{className:"card-title text-decoration-underline font-weight-bold col-5 h5 m-0 user-select-none align-self-center",style:{fontSize:e.options.titlesSize},children:e.title}),e.list[e.id]?[Object(i.jsx)(z.a,{trigger:Object(i.jsx)("div",{className:"align-self-center mx-2",children:Object(i.jsx)(l.a,{icon:e.list[e.id][1]?s.e:R.a,size:"2x"})}),position:"center center",children:Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)("div",{className:"font-weight-bold",children:e.title}),Object(i.jsx)("div",{children:e.list[e.id][1]}),e.list[e.id][1]?[Object(i.jsx)("button",{className:"btn btn-primary rounded-0",onClick:function(){return e.setNote(e.id,prompt("\u05d4\u05e2\u05e8\u05d4 \u05dc".concat(e.title,":")))},children:"\u05e9\u05e0\u05d4"}),Object(i.jsx)("button",{className:"btn btn-danger rounded-0",onClick:function(){return e.setNote(e.id,"")},children:"\u05de\u05d7\u05e7"})]:Object(i.jsx)("button",{className:"btn btn-primary rounded-0",onClick:function(){return e.setNote(e.id,prompt("\u05d4\u05e2\u05e8\u05d4 \u05dc".concat(e.title,":")))},children:"\u05d4\u05db\u05df \u05d4\u05e2\u05e8\u05d4"})]})})]:"",Object(i.jsx)("div",{className:"text-center h5 font-italic border-left border-right align-self-center",children:e.list[e.id]?[Object(i.jsxs)("button",{className:"btn rounded-circle shadow-lg mx-2 font-italic",style:{backgroundColor:"rgb(0, 0, 255, 0.5)",fontSize:"1.1rem"},onClick:function(){return window.confirm("\u05dc\u05d0\u05e4\u05e1 \u05d0\u05ea \u05d4\u05de\u05d5\u05e6\u05e8?")&&(t=e.resetItemFromList,n=e.id,void t(n));var t,n},children:[Object(i.jsx)(l.a,{icon:s.f}),e.list[e.id][0]]})]:Object(i.jsx)("div",{className:"rounded-circle shadow-lg col-1 font-italic mx-2",children:Object(i.jsx)("div",{className:"col-1 mr-2 position-absolute",style:{transform:"translate(-50%, -40%)"},children:Object(i.jsx)(l.a,{size:"2x",onClick:function(){return K(e.id,e.list,e.addItemToList,e.createItemInList)},icon:s.d})})})}),e.list[e.id]?[Object(i.jsx)("div",{className:"col-1 align-self-center mx-2",style:{zIndex:3},onClick:function(){return K(e.id,e.list,e.addItemToList,e.createItemInList)},children:Object(i.jsx)(l.a,{size:"2x",icon:s.d})}),Object(i.jsx)("div",{className:"col-1 align-self-center",style:{zIndex:3},onClick:function(){return t=e.id,n=e.list,i=e.removeItemFromList,A=e.resetItemFromList,void(1==n[t][0]?A(t):n[t][0]&&i(t));var t,n,i,A},children:Object(i.jsx)(l.a,{size:"2x",icon:s.c})})]:"",Object(i.jsx)("div",{className:"card-title h-100 text-muted m-0 user-select-none align-self-center position-absolute",style:{right:"10px"},children:e.category})]})]})})),k=function(e,t){e(t),localStorage.setItem("options-images-size",t)},V=function(e,t){e(t),localStorage.setItem("options-titles-size",t)};var P=Object(c.b)((function(e){return{options:e.options}}),(function(e){return{setImagesSize:function(t){return e(N(t))},setTitlesSize:function(t){return e(H(t))}}}))((function(e){return Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)(d.b,{to:"/ShoppingListReact",children:Object(i.jsx)(l.a,{type:"button",icon:s.b,size:"4x",className:"position-absolute border-right border-bottom",style:{left:0,zIndex:1}})}),Object(i.jsxs)("div",{className:"mb-2",children:[Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"\u05d2\u05d5\u05d3\u05dc \u05ea\u05de\u05d5\u05e0\u05d5\u05ea: ".concat("64px"==e.options.imagesSize?"\u05e7\u05d8\u05df":"96px"==e.options.imagesSize?"\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9":"\u05d2\u05d3\u05d5\u05dc")}),Object(i.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return k(e.setImagesSize,"64px")},children:"\u05e7\u05d8\u05df"}),Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return k(e.setImagesSize,"96px")},children:"\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9"}),Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return k(e.setImagesSize,"128px")},children:"\u05d2\u05d3\u05d5\u05dc"})]})]}),Object(i.jsx)("img",{src:"".concat(L,"_400.png"),style:{width:e.options.imagesSize}})]}),Object(i.jsxs)("div",{className:"my-2",children:[Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"\u05d2\u05d5\u05d3\u05dc \u05db\u05d5\u05ea\u05e8\u05d5\u05ea \u05de\u05d5\u05e6\u05e8: ".concat("2vw"==e.options.titlesSize?"\u05e4\u05d9\u05e6\u05d9":"3vw"==e.options.titlesSize?"\u05e7\u05d8\u05df":"4vw"==e.options.titlesSize?"\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9":"5vw"==e.options.titlesSize?"\u05d2\u05d3\u05d5\u05dc":"\u05e2\u05e0\u05e7")}),Object(i.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton2",children:[Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return V(e.setTitlesSize,"2vw")},children:"\u05e4\u05d9\u05e6\u05d9"}),Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return V(e.setTitlesSize,"3vw")},children:"\u05e7\u05d8\u05df"}),Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return V(e.setTitlesSize,"4vw")},children:"\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9"}),Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return V(e.setTitlesSize,"5vw")},children:"\u05d2\u05d3\u05d5\u05dc"}),Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return V(e.setTitlesSize,"6vw")},children:"\u05e2\u05e0\u05e7"})]})]}),Object(i.jsx)("div",{className:"h5",style:{fontSize:e.options.titlesSize},children:"\u05db\u05d5\u05ea\u05e8\u05ea \u05dc\u05d3\u05d5\u05d2\u05de\u05d0"})]})]})})),D="FILTERING_TYPE_WHOLE",M="FILTERING_TYPE_SOME",W=function(e,t,n,A,r,o){if("\u05d4\u05db\u05dc"!=A&&(n=n.filter((function(e){return e.category==A}))),""!=e)switch(t){case D:for(var a=function(t){n=n.filter((function(n){return n.title[t]==e[t]}))},c=0;c<e.length;c++)a(c);break;case M:n=n.filter((function(t){return t.title.includes(e)}))}return r&&(n=n.filter((function(e){return o[e.img.split("").reverse().join("").slice(8).split("").reverse().join("")]}))),n=n.map((function(e){return Object(i.jsx)(q,{logo:e.img,title:e.title,category:e.category,id:e.img.split("").reverse().join("").slice(8).split("").reverse().join("")})}))},G=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};var Y=Object(c.b)((function(e){return{filterText:e.filtering.filterText,filterType:e.filtering.filterType,filterTypeHebrew:e.filtering.filterTypeHebrew,filterCategory:e.filtering.filterCategory,final:e.filtering.final,finalHebrew:e.filtering.finalHebrew,fetchLoading:e.api.loading,fetchData:e.api.data,fetchError:e.api.error,list:e.list,notes:e.notes}}),(function(e){return{setFilterText:function(t){return e({type:u,payload:t})},setFilterType:function(t){return e({type:b,payload:t})},setFilterTypeHebrew:function(t){return e({type:g,payload:t})},fetch:function(){return e(h())},setFilterCategory:function(t){return e({type:j,payload:t})},setFinal:function(t){return e({type:f,payload:t})},setFinalHebrew:function(t){return e({type:m,payload:t})},setList:function(t){return e({type:v,payload:t})},setImagesSize:function(t){return e(N(t))},setTitlesSize:function(t){return e(H(t))}}}))((function(e){return Object(A.useEffect)(e.fetch,[]),Object(A.useEffect)((function(){return t=e.setImagesSize,n=e.setTitlesSize,localStorage.getItem("options-images-size")&&t(localStorage.getItem("options-images-size")),void(localStorage.getItem("options-titles-size")&&n(localStorage.getItem("options-titles-size")));var t,n}),[]),Object(A.useEffect)((function(){if(localStorage.getItem("saved-list")){var t=localStorage.getItem("saved-list");t=atob(t),t=JSON.parse(t),e.setList(t)}else localStorage.setItem("saved-list",{})}),[]),Object(A.useEffect)((function(){var t=e.list;t=JSON.stringify(t),t=btoa(t),localStorage.setItem("saved-list",t);var n=e.notes;n=JSON.stringify(n),n=btoa(n),localStorage.setItem("saved-notes",n)})),e.fetchLoading?Object(i.jsx)("div",{className:"text-center display-1",children:"Loading..."}):Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)(d.b,{to:"/options",children:Object(i.jsx)(l.a,{type:"button",icon:s.a,size:"4x",className:"position-absolute border-right border-bottom",style:{left:0,zIndex:1}})}),Object(i.jsx)("input",{placeholder:"\u05d7\u05d9\u05e4\u05d5\u05e9 \u05dc\u05e4\u05d9: ".concat(e.filterTypeHebrew),className:"text-center",onChange:function(t){return e.setFilterText(t.target.value)}}),Object(i.jsxs)("div",{className:"dropdown mt-2",children:[Object(i.jsx)("button",{className:"btn btn-primary rounded-0 dropdown-toggle",dir:"rtl",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e.filterCategory}),Object(i.jsx)("button",{className:"btn btn-primary rounded-0",type:"button",onClick:function(){return function(e,t,n){switch(e){case!0:t(!1),n("\u05d4\u05db\u05e0\u05ea \u05e8\u05e9\u05d9\u05de\u05d4 \u05e1\u05d5\u05e4\u05d9\u05ea");break;case!1:t(!0),n("\u05d7\u05d6\u05e8\u05d4 \u05dc\u05d4\u05db\u05e0\u05ea \u05e8\u05e9\u05d9\u05de\u05d4")}}(e.final,e.setFinal,e.setFinalHebrew)},children:e.finalHebrew}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"btn btn-secondary rounded-0",onClick:function(){return function(e){try{var t=prompt("\u05d4\u05db\u05e0\u05d9\u05e1\u05d5 \u05e7\u05d5\u05d3 \u05e8\u05e9\u05d9\u05de\u05d4");t=atob(t),e(t=JSON.parse(t))}catch(n){alert("\u05e7\u05d5\u05d3 \u05e9\u05d2\u05d5\u05d9!")}}(e.setList)},children:"\u05d4\u05d3\u05d1\u05e7 \u05e8\u05e9\u05d9\u05de\u05d4"}),Object(i.jsx)("button",{className:"btn btn-secondary rounded-0",onClick:function(){return t=e.list,t=JSON.stringify(t),t=btoa(t),G(t),void alert("\u05d4\u05e8\u05e9\u05d9\u05de\u05d4 \u05d4\u05d5\u05e2\u05ea\u05e7\u05d4!");var t},children:"\u05d4\u05e2\u05ea\u05e7 \u05e8\u05e9\u05d9\u05de\u05d4"})]})}),Object(i.jsx)("button",{className:"btn btn-danger rounded-0",onClick:function(){(0,e.setList)(JSON.parse(atob("e30=")))},children:"\u05d0\u05d9\u05e4\u05d5\u05e1"}),Object(i.jsxs)("div",{className:"dropdown-menu bg-secondary","aria-labelledby":"dropdownMenuButton",children:[Object(i.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(t){return e.setFilterCategory(t.target.innerText)},children:"\u05d4\u05db\u05dc"}),Object(i.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(t){return e.setFilterCategory(t.target.innerText)},children:"\u05d0\u05d5\u05db\u05dc"}),Object(i.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(t){return e.setFilterCategory(t.target.innerText)},children:"\u05d4\u05d9\u05d2\u05d9\u05d9\u05e0\u05d4"}),Object(i.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(t){return e.setFilterCategory(t.target.innerText)},children:"\u05ea\u05d9\u05e0\u05d5\u05e7"})]})]}),Object(i.jsxs)("button",{onClick:function(){return function(e,t,n){switch(e){case D:t(M),n("\u05e9\u05dd \u05d7\u05dc\u05e7\u05d9");break;case M:t(D),n("\u05e9\u05dd \u05de\u05d3\u05d5\u05d9\u05e7")}}(e.filterType,e.setFilterType,e.setFilterTypeHebrew)},className:"btn btn-danger my-2",children:["\u05d7\u05d9\u05e4\u05d5\u05e9 \u05dc\u05e4\u05d9: ",e.filterTypeHebrew]}),W(e.filterText,e.filterType,e.fetchData,e.filterCategory,e.final,e.list)]})})),_=n(40),Z=n(18),J=n(2),X={filterText:"",filterType:"FILTERING_TYPE_WHOLE",filterTypeHebrew:"\u05e9\u05dd \u05de\u05d3\u05d5\u05d9\u05e7",filterCategoryHebrew:"\u05d4\u05db\u05dc",filterCategory:"\u05d4\u05db\u05dc",final:!1,finalHebrew:"\u05d4\u05db\u05e0\u05ea \u05e8\u05e9\u05d9\u05de\u05d4 \u05e1\u05d5\u05e4\u05d9\u05ea"},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(J.a)(Object(J.a)({},e),{},{filterText:t.payload});case b:return Object(J.a)(Object(J.a)({},e),{},{filterType:t.payload});case g:return Object(J.a)(Object(J.a)({},e),{},{filterTypeHebrew:t.payload});case j:return Object(J.a)(Object(J.a)({},e),{},{filterCategory:t.payload});case p:return Object(J.a)(Object(J.a)({},e),{},{filterCategoryHebrew:t.payload});case f:return Object(J.a)(Object(J.a)({},e),{},{final:t.payload});case m:return Object(J.a)(Object(J.a)({},e),{},{finalHebrew:t.payload});default:return e}},ee={loading:!0,data:"",error:""},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(J.a)(Object(J.a)({},e),{},{loading:!0});case x:return Object(J.a)(Object(J.a)({},e),{},{loading:!1,data:t.payload,error:""});case y:return Object(J.a)(Object(J.a)({},e),{},{loading:!1,data:"",error:t.payload});default:return e}},ne=n(14),ie={imageLoaded:0},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;if(e)switch(t.type){case F:return Object(J.a)(Object(J.a)({},e),{},Object(ne.a)({},t.item,[e[t.item][0]+1,e[t.item][1]]));case Q:return Object(J.a)(Object(J.a)({},e),{},Object(ne.a)({},t.item,[e[t.item][0]-1,e[t.item][1]]));case T:return Object(J.a)(Object(J.a)({},e),{},Object(ne.a)({},t.item,[1,""]));case C:return Object(J.a)(Object(J.a)({},e),{},Object(ne.a)({},t.item,""));case v:return Object(J.a)({imageLoaded:e.imageLoaded},t.payload);case U:return Object(J.a)(Object(J.a)({},e),{},Object(ne.a)({},t.item,[e[t.item][0],t.payload]));default:return e}},re={imagesSize:"96px",titlesSize:"4vw"},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(J.a)(Object(J.a)({},e),{},{imagesSize:t.payload});case w:return Object(J.a)(Object(J.a)({},e),{},{titlesSize:t.payload});default:return e}},ae=Object(Z.c)({filtering:$,api:te,list:Ae,options:oe}),ce=Object(Z.d)(ae,Object(Z.a)(_.a)),se=n(5);var le=function(){return Object(i.jsx)(c.a,{store:ce,children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(se.a,{component:P,path:"/options",exact:!0}),Object(i.jsx)(se.a,{component:Y,path:"/ShoppingListReact",exact:!0})]})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,i=t.getFID,A=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),A(e),r(e),o(e)}))};n(72),n(73),n(75);a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(le,{})}),document.getElementById("root")),de()}},[[76,1,2]]]);
//# sourceMappingURL=main.a2ec2e79.chunk.js.map