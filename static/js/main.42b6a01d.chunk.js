(this.webpackJsonpbuildtestsl=this.webpackJsonpbuildtestsl||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(0),a=n.n(r),o=n(19),c=n.n(o),s=(n(44),n.p,n(45),n(13)),l=n(12),d=n(11),u=n(16),b="SET_TEXT_TO_FILTER",p="SET_TYPE_TO_FILTER",j="SET_TYPE_TO_FILTER_HEBREW",f="SET_CATEGORY_TO_FILTER",m="SET_CATEGORY_TO_FILTER_HEBREW",g="SET_FINAL",O="SET_FINAL_HEBREW",h="FETCH_REQUEST",y="FETCH_SUCCESS",x="FETCH_FAILURE",T=n(37),w=n.n(T),v=function(){return function(e){w.a.get("https://raw.githubusercontent.com/SaHaRzZz/test/main/json/Data.json").then((function(t){return e((n=t.data.food,{type:y,payload:n}));var n})).catch((function(t){return e(function(e){return{type:x,payload:e}}(t.message))}))}},S="ADD_ITEM_TO_LIST",E="REMOVE_ITEM_FROM_LIST",I="CREATE_ITEM_IN_LIST",N="RESET_ITEM_FROM_LIST",C="SET_LIST",z="SET_IMAGES_SIZE",_="SET_TITLES_SIZE",L=function(e){return{type:z,payload:e}},F=function(e){return{type:_,payload:e}},k="https://raw.githubusercontent.com/SaHaRzZz/test/main/imgs/",H=function(e,t,n,i){t[e]?n(e):i(e)};var R=Object(s.b)((function(e){return{list:e.list,options:e.options}}),(function(e){return{addItemToList:function(t){return e({type:S,item:t})},removeItemFromList:function(t){return e({type:E,item:t})},createItemInList:function(t){return e({type:I,item:t})},resetItemFromList:function(t){return e({type:N,item:t})}}}))((function(e){return Object(i.jsxs)("div",{className:"card flex-row my-1 shadow text-center",style:{backgroundColor:e.list[e.id]?"rgb(0, 0, 255, 0.5)":"rgb(255, 0, 0, 0.5)"},children:[Object(i.jsx)("div",{className:"card-header border-0",children:Object(i.jsx)("img",{src:"".concat(k).concat(e.logo),className:"user-select-none",style:{width:e.options.imagesSize}})}),Object(i.jsxs)("div",{className:"card-body row p-0 text-wrap",children:[Object(i.jsx)("div",{className:"card-title text-decoration-underline font-weight-bold col-5 h5 m-0 user-select-none align-self-center",style:{fontSize:e.options.titlesSize},children:e.title}),Object(i.jsx)("div",{className:"text-center h5 font-italic border-left border-right align-self-center",children:e.list[e.id]?[Object(i.jsxs)("button",{className:"btn rounded-circle shadow-lg mx-2 font-italic",style:{backgroundColor:"rgb(0, 0, 255, 0.5)",fontSize:"1.1rem"},onClick:function(){return window.confirm("\u05dc\u05d0\u05e4\u05e1 \u05d0\u05ea \u05d4\u05de\u05d5\u05e6\u05e8?")&&e.resetItemFromList(e.id)},children:[Object(i.jsx)(d.a,{icon:l.e}),e.list[e.id]]})]:Object(i.jsx)("div",{className:"rounded-circle shadow-lg col-1 font-italic mx-2",children:Object(i.jsx)("div",{className:"col-1 mr-2 position-absolute",style:{transform:"translate(-50%, -40%)"},children:Object(i.jsx)(d.a,{size:"2x",onClick:function(){return H(e.id,e.list,e.addItemToList,e.createItemInList)},icon:l.d})})})}),e.list[e.id]?[Object(i.jsx)("div",{className:"col-1 align-self-center mx-2",children:Object(i.jsx)(d.a,{size:"2x",onClick:function(){return H(e.id,e.list,e.addItemToList,e.createItemInList)},icon:l.d})}),Object(i.jsx)("div",{className:"col-1 align-self-center",children:Object(i.jsx)(d.a,{size:"2x",onClick:function(){return t=e.id,n=e.list,i=e.removeItemFromList,void(n[t]&&i(t));var t,n,i},icon:l.c})})]:"",Object(i.jsx)("div",{className:"card-title h-100 text-muted m-0 user-select-none align-self-center position-absolute",style:{right:"10px"},children:e.category})]})]})})),M=function(e,t){e(t),localStorage.setItem("options-images-size",t)},B=function(e,t){e(t),localStorage.setItem("options-titles-size",t)};var A=Object(s.b)((function(e){return{options:e.options}}),(function(e){return{setImagesSize:function(t){return e(L(t))},setTitlesSize:function(t){return e(F(t))}}}))((function(e){return Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)(u.b,{to:"/ShoppingListReact",children:Object(i.jsx)(d.a,{type:"button",icon:l.b,size:"4x",className:"position-absolute border-right border-bottom",style:{left:0,zIndex:1}})}),Object(i.jsxs)("div",{className:"mb-2",children:[Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"\u05d2\u05d5\u05d3\u05dc \u05ea\u05de\u05d5\u05e0\u05d5\u05ea: ".concat("64px"==e.options.imagesSize?"\u05e7\u05d8\u05df":"96px"==e.options.imagesSize?"\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9":"\u05d2\u05d3\u05d5\u05dc")}),Object(i.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return M(e.setImagesSize,"64px")},children:"\u05e7\u05d8\u05df"}),Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return M(e.setImagesSize,"96px")},children:"\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9"}),Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return M(e.setImagesSize,"128px")},children:"\u05d2\u05d3\u05d5\u05dc"})]})]}),Object(i.jsx)("img",{src:"".concat(k,"_400.png"),style:{width:e.options.imagesSize}})]}),Object(i.jsxs)("div",{className:"my-2",children:[Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"\u05d2\u05d5\u05d3\u05dc \u05db\u05d5\u05ea\u05e8\u05d5\u05ea \u05de\u05d5\u05e6\u05e8: ".concat("2vw"==e.options.titlesSize?"\u05e4\u05d9\u05e6\u05d9":"3vw"==e.options.titlesSize?"\u05e7\u05d8\u05df":"4vw"==e.options.titlesSize?"\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9":"5vw"==e.options.titlesSize?"\u05d2\u05d3\u05d5\u05dc":"\u05e2\u05e0\u05e7")}),Object(i.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton2",children:[Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return B(e.setTitlesSize,"2vw")},children:"\u05e4\u05d9\u05e6\u05d9"}),Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return B(e.setTitlesSize,"3vw")},children:"\u05e7\u05d8\u05df"}),Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return B(e.setTitlesSize,"4vw")},children:"\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9"}),Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return B(e.setTitlesSize,"5vw")},children:"\u05d2\u05d3\u05d5\u05dc"}),Object(i.jsx)("a",{className:"dropdown-item",onClick:function(){return B(e.setTitlesSize,"6vw")},children:"\u05e2\u05e0\u05e7"})]})]}),Object(i.jsx)("div",{className:"h5",style:{fontSize:e.options.titlesSize},children:"\u05db\u05d5\u05ea\u05e8\u05ea \u05dc\u05d3\u05d5\u05d2\u05de\u05d0"})]})]})})),P="FILTERING_TYPE_WHOLE",Y="FILTERING_TYPE_SOME",D=function(e,t,n,r,a,o){if("\u05d4\u05db\u05dc"!=r&&(n=n.filter((function(e){return e.category==r}))),""!=e)switch(t){case P:for(var c=function(t){n=n.filter((function(n){return n.title[t]==e[t]})),console.log()},s=0;s<e.length;s++)c(s);break;case Y:n=n.filter((function(t){return t.title.includes(e)}))}return a&&(n=n.filter((function(e){return o[e.img.split("").reverse().join("").slice(8).split("").reverse().join("")]}))),n=n.map((function(e){return Object(i.jsx)(R,{logo:e.img,title:e.title,category:e.category,id:e.img.split("").reverse().join("").slice(8).split("").reverse().join("")})}))},G=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};var J=Object(s.b)((function(e){return{filterText:e.filtering.filterText,filterType:e.filtering.filterType,filterTypeHebrew:e.filtering.filterTypeHebrew,filterCategory:e.filtering.filterCategory,final:e.filtering.final,finalHebrew:e.filtering.finalHebrew,fetchLoading:e.api.loading,fetchData:e.api.data,fetchError:e.api.error,list:e.list}}),(function(e){return{setFilterText:function(t){return e({type:b,payload:t})},setFilterType:function(t){return e({type:p,payload:t})},setFilterTypeHebrew:function(t){return e({type:j,payload:t})},fetch:function(){return e(v())},setFilterCategory:function(t){return e({type:f,payload:t})},setFinal:function(t){return e({type:g,payload:t})},setFinalHebrew:function(t){return e({type:O,payload:t})},setList:function(t){return e({type:C,payload:t})},setImagesSize:function(t){return e(L(t))},setTitlesSize:function(t){return e(F(t))}}}))((function(e){return Object(r.useEffect)(e.fetch,[]),Object(r.useEffect)((function(){return t=e.setImagesSize,n=e.setTitlesSize,localStorage.getItem("options-images-size")&&t(localStorage.getItem("options-images-size")),void(localStorage.getItem("options-titles-size")&&n(localStorage.getItem("options-titles-size")));var t,n}),[]),e.fetchLoading?Object(i.jsx)("div",{className:"text-center display-1",children:"Loading..."}):Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)(u.b,{to:"/options",children:Object(i.jsx)(d.a,{type:"button",icon:l.a,size:"4x",className:"position-absolute border-right border-bottom",style:{left:0,zIndex:1}})}),Object(i.jsx)("input",{placeholder:"\u05d7\u05d9\u05e4\u05d5\u05e9 \u05dc\u05e4\u05d9: ".concat(e.filterTypeHebrew),className:"text-center",onChange:function(t){return e.setFilterText(t.target.value)}}),Object(i.jsxs)("div",{className:"dropdown mt-2",children:[Object(i.jsx)("button",{className:"btn btn-primary rounded-0 dropdown-toggle",dir:"rtl",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:e.filterCategory}),Object(i.jsx)("button",{className:"btn btn-primary rounded-0",type:"button",onClick:function(){return function(e,t,n){switch(e){case!0:t(!1),n("\u05d4\u05db\u05e0\u05ea \u05e8\u05e9\u05d9\u05de\u05d4 \u05e1\u05d5\u05e4\u05d9\u05ea");break;case!1:t(!0),n("\u05d7\u05d6\u05e8\u05d4 \u05dc\u05d4\u05db\u05e0\u05ea \u05e8\u05e9\u05d9\u05de\u05d4")}}(e.final,e.setFinal,e.setFinalHebrew)},children:e.finalHebrew}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"btn btn-secondary rounded-0",onClick:function(){return function(e){var t=prompt("\u05d4\u05db\u05e0\u05d9\u05e1\u05d5 \u05e7\u05d5\u05d3 \u05e8\u05e9\u05d9\u05de\u05d4");t=atob(t),e(t=JSON.parse(t))}(e.setList)},children:"\u05d4\u05d3\u05d1\u05e7 \u05e8\u05e9\u05d9\u05de\u05d4"}),Object(i.jsx)("button",{className:"btn btn-secondary rounded-0",onClick:function(){return t=e.list,t=JSON.stringify(t),t=btoa(t),G(t),void alert("\u05d4\u05e8\u05e9\u05d9\u05de\u05d4 \u05d4\u05d5\u05e2\u05ea\u05e7\u05d4!");var t},children:"\u05d4\u05e2\u05ea\u05e7 \u05e8\u05e9\u05d9\u05de\u05d4"})]})}),Object(i.jsx)("button",{className:"btn btn-danger rounded-0",onClick:function(){(0,e.setList)(JSON.parse(atob("e30=")))},children:"\u05d0\u05d9\u05e4\u05d5\u05e1"}),Object(i.jsxs)("div",{className:"dropdown-menu bg-secondary","aria-labelledby":"dropdownMenuButton",children:[Object(i.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(t){return e.setFilterCategory(t.target.innerText)},children:"\u05d4\u05db\u05dc"}),Object(i.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(t){return e.setFilterCategory(t.target.innerText)},children:"\u05d0\u05d5\u05db\u05dc"}),Object(i.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(t){return e.setFilterCategory(t.target.innerText)},children:"\u05d4\u05d9\u05d2\u05d9\u05d9\u05e0\u05d4"}),Object(i.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(t){return e.setFilterCategory(t.target.innerText)},children:"\u05ea\u05d9\u05e0\u05d5\u05e7"})]})]}),Object(i.jsxs)("button",{onClick:function(){return function(e,t,n){switch(e){case P:t(Y),n("\u05e9\u05dd \u05d7\u05dc\u05e7\u05d9");break;case Y:t(P),n("\u05e9\u05dd \u05de\u05d3\u05d5\u05d9\u05e7")}}(e.filterType,e.setFilterType,e.setFilterTypeHebrew)},className:"btn btn-danger my-2",children:["\u05d7\u05d9\u05e4\u05d5\u05e9 \u05dc\u05e4\u05d9: ",e.filterTypeHebrew]}),D(e.filterText,e.filterType,e.fetchData,e.filterCategory,e.final,e.list)]})})),W=n(38),Z=n(17),U=n(2),Q={filterText:"",filterType:"FILTERING_TYPE_WHOLE",filterTypeHebrew:"\u05e9\u05dd \u05de\u05d3\u05d5\u05d9\u05e7",filterCategoryHebrew:"\u05d4\u05db\u05dc",filterCategory:"\u05d4\u05db\u05dc",final:!1,finalHebrew:"\u05d4\u05db\u05e0\u05ea \u05e8\u05e9\u05d9\u05de\u05d4 \u05e1\u05d5\u05e4\u05d9\u05ea"},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(U.a)(Object(U.a)({},e),{},{filterText:t.payload});case p:return Object(U.a)(Object(U.a)({},e),{},{filterType:t.payload});case j:return Object(U.a)(Object(U.a)({},e),{},{filterTypeHebrew:t.payload});case f:return Object(U.a)(Object(U.a)({},e),{},{filterCategory:t.payload});case m:return Object(U.a)(Object(U.a)({},e),{},{filterCategoryHebrew:t.payload});case g:return Object(U.a)(Object(U.a)({},e),{},{final:t.payload});case O:return Object(U.a)(Object(U.a)({},e),{},{finalHebrew:t.payload});default:return e}},X={loading:!0,data:"",error:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case y:return Object(U.a)(Object(U.a)({},e),{},{loading:!1,data:t.payload,error:""});case x:return Object(U.a)(Object(U.a)({},e),{},{loading:!1,data:"",error:t.payload});default:return e}},K=n(14),$={imageLoaded:0},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;if(e)switch(t.type){case S:return Object(U.a)(Object(U.a)({},e),{},Object(K.a)({},t.item,e[t.item]+1));case E:return Object(U.a)(Object(U.a)({},e),{},Object(K.a)({},t.item,e[t.item]-1));case I:return Object(U.a)(Object(U.a)({},e),{},Object(K.a)({},t.item,1));case N:return Object(U.a)(Object(U.a)({},e),{},Object(K.a)({},t.item,0));case C:return Object(U.a)({imageLoaded:e.imageLoaded},t.payload);default:return e}},te={imagesSize:"96px",titlesSize:"4vw"},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(U.a)(Object(U.a)({},e),{},{imagesSize:t.payload});case _:return Object(U.a)(Object(U.a)({},e),{},{titlesSize:t.payload});default:return e}},ie=Object(Z.c)({filtering:V,api:q,list:ee,options:ne}),re=Object(Z.d)(ie,Object(Z.a)(W.a)),ae=n(5);var oe=function(){return Object(i.jsx)(s.a,{store:re,children:Object(i.jsxs)(u.a,{children:[Object(i.jsx)(ae.a,{component:A,path:"/options",exact:!0}),Object(i.jsx)(ae.a,{component:J,path:"/ShoppingListReact",exact:!0})]})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))};n(69),n(70),n(72);c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(oe,{})}),document.getElementById("root")),ce()}},[[73,1,2]]]);
//# sourceMappingURL=main.42b6a01d.chunk.js.map