(this.webpackJsonpbuildtestsl=this.webpackJsonpbuildtestsl||[]).push([[0],{53:function(t,e,n){},54:function(t,e,n){},85:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(0),r=n.n(i),c=n(17),s=n.n(c),A=(n(53),n.p,n(54),n(24)),o=n.n(A),l=n(29),u=n(14),d=n(10),g=n(9),f=n(18),j=n(21),b=n(88),p=n(89),O=n(15),m=n(90),h=n(20),x=n.n(h),I=n(47),v=n(6),y=n(2),B="SET_TEXT_TO_FILTER",C="SET_TYPE_TO_FILTER",E="SET_CATEGORY_TO_FILTER",Q="SET_FINAL",U="FETCH_REQUEST",F="FETCH_SUCCESS",D="FETCH_FAILURE",S="SET_ONLINE",w="SET_ID",T=function(t){return{type:F,payload:t}},N=function(){return function(t){x.a.get("https://raw.githubusercontent.com/SaHaRzZz/test/main/json/Data.json").then((function(e){var n=e.data;return n=JSON.stringify(n),localStorage.setItem("items-database",n),t(T(e.data))})).catch((function(e){if(localStorage.getItem("items-database")){var n=localStorage.getItem("items-database");return n=JSON.parse(n),t(T(n))}return t(function(t){return{type:D,payload:t}}(e.message))}))}},z="ADD_ITEM_TO_LIST",K="REMOVE_ITEM_FROM_LIST",k="CREATE_ITEM_IN_LIST",R="RESET_ITEM_FROM_LIST",P="SET_LIST",H="SET_NOTE",L="SET_IMAGES_SIZE",q="SET_TITLES_SIZE",V="SET_LANGAUGE",M=function(t){return{type:L,payload:t}},W=function(t){return{type:q,payload:t}},G=function(t){return{type:V,payload:t}},J=n(44),X=(n(79),"data:image/png;base64,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"),Y="https://raw.githubusercontent.com/SaHaRzZz/test/main/imgs/",Z=function(t,e,n,a,i,r){e[t]?80==e[t][0]?alert("\u05de\u05e7\u05e1\u05d9\u05de\u05d5\u05dd 80 \u05d9\u05d7\u05d9\u05d3\u05d5\u05ea \u05dc\u05de\u05d5\u05e6\u05e8!"):(n(t),r&&ut(i,Object(y.a)(Object(y.a)({},e),{},Object(v.a)({},t,[e[t][0]+1,e[t][1]])))):(a(t),r&&ut(i,Object(y.a)(Object(y.a)({},e),{},Object(v.a)({},t,[1,""]))))},_=function(t,e,n,a,i,r){t(e,n),i&&ut(a,Object(y.a)(Object(y.a)({},r),{},Object(v.a)({},e,[r[e][0],n])))},$=function(t){switch(t){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D";case 4:return"E";case 5:return"F";case 6:return"G";case 7:return"H";case 8:return"I";case 9:return"J";case 10:return"K";case 11:return"L";case 12:return"M";case 13:return"N";case 14:return"O";case 15:return"P";case 16:return"Q";case 17:return"R";case 18:return"S";case 19:return"T";case 20:return"U";case 21:return"V";case 22:return"W";case 23:return"X";case 24:return"Y";case 25:return"Z";case 26:return"8";case 27:return"9";case 28:return":";case 29:return";";case 30:return"<";case 31:return"=";case 32:return"a";case 33:return"b";case 34:return"c";case 35:return"d";case 36:return"e";case 37:return"f";case 38:return"g";case 39:return"h";case 40:return"i";case 41:return"j";case 42:return"k";case 43:return"l";case 44:return"m";case 45:return"n";case 46:return"o";case 47:return"p";case 48:return"q";case 49:return"r";case 50:return"s";case 51:return"t";case 52:return"u";case 53:return"v";case 54:return"w";case 55:return"x";case 56:return"y";case 57:return"z";case 58:return"4";case 59:return"5";case 60:return"6";case 61:return"7";case 62:return"!";case 63:return'"';case 64:return"#";case 65:return"$";case 66:return"%";case 67:return"&";case 68:return"'";case 69:return"(";case 70:return")";case 71:return"*";case 72:return"+";case 73:return",";case 74:return"-";case 75:return".";case 76:return"/";case 77:return"0";case 78:return"1";case 79:return"2";case 80:return"3"}};var tt=Object(u.b)((function(t){return{list:t.list,options:t.options,isOnline:t.api.isOnline,apiID:t.api.id}}),(function(t){return{addItemToList:function(e){return t({type:z,item:e})},removeItemFromList:function(e){return t({type:K,item:e})},createItemInList:function(e){return t({type:k,item:e})},resetItemFromList:function(e){return t({type:R,item:e})},setNote:function(e,n){return t({type:H,item:e,payload:n})}}}))((function(t){var e=Object(i.useState)(!1),n=Object(I.a)(e,2),r=n[0],c=n[1];return Object(a.jsxs)("div",{className:"card flex-row my-1 shadow text-center",style:{backgroundColor:t.list[t.id]?"rgb(0, 0, 255, 0.5)":"rgb(255, 0, 0, 0.5)"},children:[Object(a.jsxs)("div",{className:"card-header border-0",children:[Object(a.jsx)("img",{src:X,onError:function(t){return t.target.src=X},onLoad:function(){return c(!0)},className:"user-select-none",style:{width:t.options.imagesSize,display:r?"none":"block"}}),Object(a.jsx)("img",{src:"".concat(Y).concat(t.logo),onError:function(t){return t.target.src=X},className:"user-select-none",style:{width:t.options.imagesSize,display:r?"block":"none"}})]}),Object(a.jsxs)("div",{className:"card-body row p-0 m-0 text-wrap",children:[Object(a.jsx)("div",{className:"card-title text-decoration-underline font-weight-bold col-5 h5 m-0 user-select-none align-self-center text-capitalize",style:{fontSize:t.options.titlesSize},children:t.title}),t.list[t.id]?[Object(a.jsxs)("div",{className:"align-self-center",children:[Object(a.jsx)("div",{className:"col-1",style:{zIndex:3},onClick:function(){return Z(t.id,t.list,t.addItemToList,t.createItemInList,t.apiID,t.isOnline)},children:Object(a.jsx)(g.a,{size:"2x",icon:d.g})}),Object(a.jsx)("div",{className:"col-1",style:{zIndex:3},onClick:function(){return e=t.id,n=t.list,a=t.removeItemFromList,i=t.resetItemFromList,r=t.apiID,c=t.isOnline,void(1==n[e][0]?(i(e),c&&ut(r,Object(y.a)(Object(y.a)({},n),{},Object(v.a)({},e,"")))):n[e][0]&&(a(e),c&&ut(r,Object(y.a)(Object(y.a)({},n),{},Object(v.a)({},e,[n[e][0]-1,n[e][1]])))));var e,n,a,i,r,c},children:Object(a.jsx)(g.a,{size:"2x",icon:d.f})})]}),Object(a.jsx)("div",{className:"mx-2 font-italic user-select-none align-self-center",style:{fontSize:"2rem",zIndex:3,fontFamily:"numberpile"},onClick:function(){return window.confirm("\u05dc\u05d0\u05e4\u05e1 \u05d0\u05ea \u05d4\u05de\u05d5\u05e6\u05e8?")&&(e=t.resetItemFromList,n=t.id,a=t.apiID,i=t.isOnline,r=t.list,e(n),void(i&&ut(a,Object(y.a)(Object(y.a)({},r),{},Object(v.a)({},n,"")))));var e,n,a,i,r},children:$(t.list[t.id][0])}),Object(a.jsx)(O.a,{trigger:Object(a.jsx)("div",{className:"align-self-center mx-2",style:{zIndex:4},children:Object(a.jsx)(g.a,{icon:t.list[t.id][1]?d.h:J.a,size:"2x"})}),position:"left center",children:Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("div",{className:"font-weight-bold",children:t.title}),Object(a.jsx)("div",{children:t.list[t.id][1]}),t.list[t.id][1]?[Object(a.jsx)("button",{className:"btn btn-primary rounded-0",onClick:function(){return _(t.setNote,t.id,prompt("\u05d4\u05e2\u05e8\u05d4 \u05dc".concat(t.title,":"),t.list[t.id][1]),t.apiID,t.isOnline,t.list)},children:"\u05e9\u05e0\u05d4"}),Object(a.jsx)("button",{className:"btn btn-danger rounded-0",onClick:function(){return _(t.setNote,t.id,"",t.apiID,t.isOnline,t.list)},children:"\u05de\u05d7\u05e7"})]:Object(a.jsx)("button",{className:"btn btn-primary rounded-0",onClick:function(){return _(t.setNote,t.id,prompt("\u05d4\u05e2\u05e8\u05d4 \u05dc".concat(t.title,":")),t.apiID,t.isOnline,t.list)},children:"\u05d4\u05db\u05df \u05d4\u05e2\u05e8\u05d4"})]})})]:"",Object(a.jsx)("div",{className:"text-center h5 font-italic align-self-center",children:t.list[t.id]?[""]:Object(a.jsx)("div",{className:"rounded-circle shadow-lg col-1 font-italic mx-2",children:Object(a.jsx)("div",{className:"mr-2 position-absolute",style:{transform:"translate(-50%, -40%)"},onClick:function(){return Z(t.id,t.list,t.addItemToList,t.createItemInList,t.apiID,t.isOnline)},children:Object(a.jsx)(g.a,{size:"2x",icon:d.g})})})}),Object(a.jsx)("div",{className:"card-title h-100 text-muted m-0 user-select-none align-self-center position-absolute text-capitalize",style:{right:"10px"},children:t.category})]})]})})),et=function(t,e){t(e),localStorage.setItem("options-images-size",e)},nt=function(t,e){t(e),localStorage.setItem("options-titles-size",e)};var at,it,rt,ct=Object(u.b)((function(t){return{options:t.options,lang:t.options.lang,fetchData:t.api.data}}),(function(t){return{setImagesSize:function(e){return t(M(e))},setTitlesSize:function(e){return t(W(e))},setLangauge:function(e){return t(G(e))}}}))((function(t){return Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)(f.b,{to:"/ShoppingListReact",children:Object(a.jsx)(g.a,{type:"button",icon:d.d,size:"4x",className:"position-absolute border-right border-bottom",style:{left:0,zIndex:1}})}),Object(a.jsxs)("div",{className:"mb-2",children:[Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"".concat(t.fetchData[t.lang].strings[23],": ").concat("64px"==t.options.imagesSize?t.fetchData[t.lang].strings[19]:"96px"==t.options.imagesSize?t.fetchData[t.lang].strings[20]:t.fetchData[t.lang].strings[21])}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return et(t.setImagesSize,"64px")},children:t.fetchData[t.lang].strings[19]}),Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return et(t.setImagesSize,"96px")},children:t.fetchData[t.lang].strings[20]}),Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return et(t.setImagesSize,"128px")},children:t.fetchData[t.lang].strings[21]})]})]}),Object(a.jsx)("img",{src:"".concat(Y,"_400.png"),style:{width:t.options.imagesSize}})]}),Object(a.jsxs)("div",{className:"my-2",children:[Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"".concat(t.fetchData[t.lang].strings[24],": ").concat("2vw"==t.options.titlesSize?t.fetchData[t.lang].strings[18]:"3vw"==t.options.titlesSize?t.fetchData[t.lang].strings[19]:"4vw"==t.options.titlesSize?t.fetchData[t.lang].strings[20]:"5vw"==t.options.titlesSize?t.fetchData[t.lang].strings[21]:t.fetchData[t.lang].strings[22])}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton2",children:[Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return nt(t.setTitlesSize,"2vw")},children:t.fetchData[t.lang].strings[18]}),Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return nt(t.setTitlesSize,"3vw")},children:t.fetchData[t.lang].strings[19]}),Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return nt(t.setTitlesSize,"4vw")},children:t.fetchData[t.lang].strings[20]}),Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return nt(t.setTitlesSize,"5vw")},children:t.fetchData[t.lang].strings[21]}),Object(a.jsx)("a",{className:"dropdown-item",onClick:function(){return nt(t.setTitlesSize,"6vw")},children:t.fetchData[t.lang].strings[22]})]})]}),Object(a.jsx)("div",{className:"h5",style:{fontSize:t.options.titlesSize},children:t.fetchData[t.lang].strings[25]})]})]})})),st=function(t,e,n,i,r,c){if(i&&(n=n.filter((function(t){return t.filter==i}))),""!=t)if(t=t.toLowerCase(),e)n=n.filter((function(e){return e.title.includes(t)}));else for(var s=function(e){n=n.filter((function(n){return n.title[e]==t[e]}))},A=0;A<t.length;A++)s(A);return n=n.sort((function(t,e){return"".concat(t.order).concat(t.title)<"".concat(e.order).concat(e.title)?-1:1})),r&&(n=n.filter((function(t){return c[t.img.split("").reverse().join("").slice(8).split("").reverse().join("")]}))),n=n.map((function(t){return Object(a.jsx)(tt,{logo:t.img,title:t.title,category:t.category,id:t.img.split("").reverse().join("").slice(8).split("").reverse().join("")})}))},At=function(t){var e=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return at=t,at=JSON.stringify(at),at=Object(j.b)(at),e.abrupt("return",at);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(b.a,{url:e,children:Object(a.jsx)(p.a,{size:60})})},ot=function(t,e,n){var i=function(){var a=Object(l.a)(o.a.mark((function a(){var i,r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i=Object.keys(t),r=Object.values(t).map((function(t){return void 0!=t[0]?t[0]:t})),!(i=i.map((function(a,i){var c=e.find((function(t){return t.img.split("").reverse().join("").slice(8).split("").reverse().join("")==a}));if(c&&r[i]){c.title=c.title.replace(/(^\w{1})|(\s{1}\w{1})/g,(function(t){return t.toUpperCase()}));var s=t[c.img.split("").reverse().join("").slice(8).split("").reverse().join("")][1];return"".concat(c.title,": ").concat(r[i]).concat(s?", ".concat(n,": ").concat(s):"")}})))){a.next=6;break}return i=i.join("\n"),a.abrupt("return",i);case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(a.jsx)(b.a,{url:i,children:Object(a.jsx)(p.a,{size:60})})},lt=function(t,e,n,a){x.a.get("https://tabby-simplistic-router.glitch.me/dlist?id=".concat(t)).then((function(t){e(t.data,n,a)}))},ut=function(t,e){rt&&clearTimeout(rt),rt=setTimeout((function(){x.a.post("https://tabby-simplistic-router.glitch.me/dlist?id=".concat(t),e),rt=void 0}),500)},dt=function(t,e,n,a,i,r,c){try{var s=prompt("".concat(e));if(null==s)return;m.a(s)?(it&&(clearInterval(it),it=void 0,a(!1)),function(t,e,n,a,i,r){x.a.get("https://tabby-simplistic-router.glitch.me/dlist?id=".concat(t)).then((function(c){e(c.data,n,a),r(t),i(!0),it=setTimeout((function(){return lt(t,e,n,a)}),1e3)}))}(s,t,e,n,a,i)):(s=Object(j.a)(s),s=JSON.parse(s),c&&ut(r,s),t(s))}catch(A){alert("".concat(n,"!"))}},gt=function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)};var ft=Object(u.b)((function(t){return{filterText:t.filtering.filterText,filterType:t.filtering.filterType,filterCategory:t.filtering.filterCategory,final:t.filtering.final,fetchLoading:t.api.loading,fetchData:t.api.data,fetchError:t.api.error,isOnline:t.api.isOnline,id:t.api.id,list:t.list,notes:t.notes,lang:t.options.lang}}),(function(t){return{setFilterText:function(e){return t({type:B,payload:e})},setFilterType:function(e){return t({type:C,payload:e})},fetch:function(){return t(N())},setFilterCategory:function(e){return t({type:E,payload:e})},setFinal:function(e){return t({type:Q,payload:e})},setList:function(e){return t({type:P,payload:e})},setImagesSize:function(e){return t(M(e))},setTitlesSize:function(e){return t(W(e))},setLangauge:function(e){return t(G(e))},setOnline:function(e){return t({type:S,payload:e})},setId:function(e){return t({type:w,payload:e})}}}))((function(t){return Object(i.useEffect)(t.fetch,[]),Object(i.useEffect)((function(){return e=t.setImagesSize,n=t.setTitlesSize,a=t.setLangauge,localStorage.getItem("options-images-size")&&e(localStorage.getItem("options-images-size")),localStorage.getItem("options-titles-size")&&n(localStorage.getItem("options-titles-size")),void(localStorage.getItem("options-langauge")?a(localStorage.getItem("options-langauge")):(a("en"),localStorage.setItem("options-langauge","en")));var e,n,a}),[]),Object(i.useEffect)((function(){localStorage.getItem("saved-list")?(at=localStorage.getItem("saved-list"),at=Object(j.a)(at),at=JSON.parse(at),t.setList(at)):localStorage.setItem("saved-list",{})}),[]),Object(i.useEffect)((function(){at=t.list,at=JSON.stringify(at),at=Object(j.b)(at),localStorage.setItem("saved-list",at),function(t){for(var e in t)""==t[e]&&delete t[e]}(t.list)})),Object(i.useEffect)((function(){it&&(clearInterval(it),it=setTimeout((function(){return lt(t.id,t.setList,t.fetchData[t.lang].strings[15],t.fetchData[t.lang].strings[16])}),rt?1500:1e3))}),[t.list]),t.fetchLoading?Object(a.jsx)("div",{className:"text-center display-2",children:"en"==t.lang?"Loading":"\u05d8\u05d5\u05e2\u05df"}):Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)(f.b,{to:"/options",children:Object(a.jsx)(g.a,{type:"button",icon:d.a,size:"4x",className:"position-absolute border-right border-bottom",style:{left:0,zIndex:1}})}),Object(a.jsx)("img",{type:"button",onClick:function(){return e=t.setLangauge,n="en"==t.lang?"he":"en",e(n),void localStorage.setItem("options-langauge",n);var e,n},src:"en"==t.lang?"data:image/png;base64,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":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAOdQTFRF////AAD/AICA////v7//5ubm6urq7Ozs7+/vj6/V1ODn8vLy7+/vx9bl8PDw8PDwZ5XM7+/v8PDw8PDw7+/vSYHFR4DG8PDw8PDw8PDwUYjI8PDwPHnD7+/v8PDwUIjI8fHx5+ruOXjC8PDw8PDwGGK58PDwAFK0AVO0A1S1BFS1B1a2CFi2C1m3DVu3EF24FF+5FmC5GGG6GmO7H2a8JWq9LnDAOnjDQ37FWIzKaZfOd6DSfaTTkbHYnLnbo73dpb7dt8rivM7jxtTlydfm1N3p2ODq4ebs5+ru6Ovu6ezu7u/w8PDwk95hywAAACd0Uk5TAAECAwQKDBsfMEFMTldkaGpwdIqkrK22vsDJy9XV2N7l6+zy+P3+aHNKKQAAAeFJREFUWMOtV9d2wjAMNS27QMreqwwBhTJaIOyyacn/f0/NagtHNgniPnCOrHtFotiyxJgAVpfXH4ikcrlUJOD3uqzMEGxKOK+dIR9WbHrVFl+8qCEoxn0WHfJHT0YTIuN5vKZ/SmpSJJ+kcntUu4qoXax3Zr90IOsU6YOgE0E8ezHQjRiSS3MaDCBtvtQ/JMAQEg8XAUJgEKFz/XPZaIDy83+9owCGUXD86U0vcANeTL8B3J83wf27A5LaTUiedoNHuxGe4/mXnF9tOpU4M4f64JNQtp3OVuL27QPEJYwRwEjiju/rX1FMWDcAGmuxv7irk4rkH/q7792XEBQeICx2LyrQbEJlIWaEef3Pi90qzwDPgipm5K3MhSx3Xw/gz3/82aOLUF3Mi6zOStjeL80Qqpf5sSfrATTVFkBb5WgDtNQmQA9j+lkAW17VoDavQ3W5M5ZVqM/5wgpjBlgETc4Q4A1gcDAGe2OIEiMsha5/f/CXft8cjM07Nz6+UWKK5fDvM+Ga8ckYc2OC83L0AORXICeR/BnJG4m8lcmHiXycyQWFXtLIRZVc1ukXC/lqI1+u9Oud3GDQWxxyk0Vv8+iNJr3VJTfb9HafPnDcYeShD130se8Ogyd99L3D8G1s/P8BYQYPDv5h190AAAAASUVORK5CYII=",className:"position-absolute",style:{right:0,zIndex:1}}),Object(a.jsx)("input",{placeholder:"".concat(t.fetchData[t.lang].strings[0],": ").concat(t.filterType?t.fetchData[t.lang].strings[2]:t.fetchData[t.lang].strings[1]),className:"text-center",onChange:function(e){return t.setFilterText(e.target.value)}}),Object(a.jsxs)("div",{className:"dropdown mt-2",children:[Object(a.jsx)("button",{className:"btn btn-primary rounded-0 dropdown-toggle",dir:"rtl",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:t.fetchData[t.lang].strings[10+t.filterCategory]}),Object(a.jsx)("button",{className:"btn btn-primary rounded-0",type:"button",onClick:function(e){e.target.blur(),t.setFinal(!t.final)},children:"".concat(t.final?t.fetchData[t.lang].strings[3]:t.fetchData[t.lang].strings[4])}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsx)(O.a,{closeOnDocumentClick:!1,trigger:Object(a.jsx)("div",{className:"btn btn-info rounded-0",children:Object(a.jsx)(g.a,{icon:d.e,size:"1x"})}),children:Object(a.jsxs)("div",{className:"col text-center",children:[Object(a.jsx)("button",{className:"btn btn-secondary rounded-0 col-12",onClick:function(e){e.target.blur(),dt(t.setList,t.fetchData[t.lang].strings[15],t.fetchData[t.lang].strings[16],t.setOnline,t.setId,t.id,t.isOnline)},children:t.fetchData[t.lang].strings[5]}),Object(a.jsxs)(O.a,{closeOnDocumentClick:!1,trigger:Object(a.jsx)("div",{className:"btn btn-primary rounded-0 col-12",children:t.fetchData[t.lang].strings[6]}),children:[Object(a.jsx)(O.a,{closeOnDocumentClick:!0,trigger:Object(a.jsx)("div",{className:"btn btn-secondary rounded-0 col-12",children:t.fetchData[t.lang].strings[7]}),children:Object(a.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(a.jsx)("button",{className:"btn btn-secondary rounded-0",onClick:function(e){e.target.blur(),function(t,e,n,a){var i=Object.keys(t),r=Object.values(t).map((function(t){return void 0!=t[0]?t[0]:t}));(i=i.map((function(n,i){try{var c=e.find((function(t){return t.img.split("").reverse().join("").slice(8).split("").reverse().join("")==n}));if(c&&r[i]){c.title=c.title.replace(/(^\w{1})|(\s{1}\w{1})/g,(function(t){return t.toUpperCase()}));var s=t[c.img.split("").reverse().join("").slice(8).split("").reverse().join("")][1];return"".concat(c.title,": ").concat(r[i]).concat(s?", ".concat(a,": ").concat(s):"")}}catch(A){return}})))&&(i=i.join("\n"),gt(i),alert("".concat(n,"!")))}(t.list,t.fetchData[t.lang].items,t.fetchData[t.lang].strings[14],t.fetchData[t.lang].strings[26])},children:Object(a.jsx)(g.a,{icon:d.b,size:"2x"})}),ot(t.list,t.fetchData[t.lang].items,t.fetchData[t.lang].strings[26])]})}),Object(a.jsx)(O.a,{closeOnDocumentClick:!0,trigger:Object(a.jsx)("div",{className:"btn btn-secondary rounded-0 col-12",children:t.fetchData[t.lang].strings[8]}),children:Object(a.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(a.jsx)("button",{className:"btn btn-secondary rounded-0",onClick:function(e){var n,a;e.target.blur(),n=t.list,a=t.fetchData[t.lang].strings[14],n=JSON.stringify(n),n=Object(j.b)(n),gt(n),alert("".concat(a,"!"))},children:Object(a.jsx)(g.a,{icon:d.b,size:"2x"})}),At(t.list)]})})]}),Object(a.jsx)("button",{className:"btn btn-danger rounded-0 col-12",onClick:function(e){var n,a;e.target.blur(),window.confirm("".concat(t.fetchData[t.lang].strings[17],"?"))&&(n=t.setList,a=t.id,t.isOnline&&ut(a,{}),n(JSON.parse(atob("e30="))))},children:t.fetchData[t.lang].strings[9]})]})})})}),Object(a.jsxs)("div",{className:"dropdown-menu bg-secondary","aria-labelledby":"dropdownMenuButton",children:[Object(a.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return t.setFilterCategory(0)},children:t.fetchData[t.lang].strings[10]}),Object(a.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return t.setFilterCategory(1)},children:t.fetchData[t.lang].strings[11]}),Object(a.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return t.setFilterCategory(2)},children:t.fetchData[t.lang].strings[12]}),Object(a.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return t.setFilterCategory(3)},children:t.fetchData[t.lang].strings[13]})]})]}),Object(a.jsx)("button",{onClick:function(e){e.target.blur(),t.setFilterType(!t.filterType)},className:"btn btn-danger my-2",children:"".concat(t.fetchData[t.lang].strings[0],": ").concat(t.filterType?t.fetchData[t.lang].strings[2]:t.fetchData[t.lang].strings[1])}),t.isOnline?Object(a.jsxs)("div",{dir:"".concat("en"==t.lang?"ltr":"rtl"),className:"btn d-block",onClick:function(){window.confirm("".concat(t.fetchData[t.lang].strings[28],"?"))&&(clearInterval(it),it=void 0,t.setOnline(!1))},children:[Object(a.jsx)(g.a,{icon:d.c,size:"2x"}),Object(a.jsx)("div",{children:t.fetchData[t.lang].strings[27]})]}):"",st(t.filterText,t.filterType,t.fetchData[t.lang].items,t.filterCategory,t.final,t.list)]})})),jt=n(46),bt=n(19),pt={filterText:"",filterType:!1,filterCategory:0,final:!1},Ot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case B:return Object(y.a)(Object(y.a)({},t),{},{filterText:e.payload});case C:return Object(y.a)(Object(y.a)({},t),{},{filterType:e.payload});case E:return Object(y.a)(Object(y.a)({},t),{},{filterCategory:e.payload});case Q:return Object(y.a)(Object(y.a)({},t),{},{final:e.payload});default:return t}},mt={loading:!0,data:"",error:"",isOnline:!1,id:""},ht=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U:return Object(y.a)(Object(y.a)({},t),{},{loading:!0});case F:return Object(y.a)(Object(y.a)({},t),{},{loading:!1,data:e.payload,error:""});case D:return Object(y.a)(Object(y.a)({},t),{},{loading:!1,data:"",error:e.payload});case S:return Object(y.a)(Object(y.a)({},t),{},{isOnline:e.payload});case w:return Object(y.a)(Object(y.a)({},t),{},{id:e.payload});default:return t}},xt={},It=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,e=arguments.length>1?arguments[1]:void 0;if(t)switch(e.type){case z:return Object(y.a)(Object(y.a)({},t),{},Object(v.a)({},e.item,[t[e.item][0]+1,t[e.item][1]]));case K:return Object(y.a)(Object(y.a)({},t),{},Object(v.a)({},e.item,[t[e.item][0]-1,t[e.item][1]]));case k:return Object(y.a)(Object(y.a)({},t),{},Object(v.a)({},e.item,[1,""]));case R:return Object(y.a)(Object(y.a)({},t),{},Object(v.a)({},e.item,""));case P:return Object(y.a)({},e.payload);case H:return Object(y.a)(Object(y.a)({},t),{},Object(v.a)({},e.item,[t[e.item][0],e.payload]));default:return t}},vt={imagesSize:"96px",titlesSize:"4vw",lang:""},yt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L:return Object(y.a)(Object(y.a)({},t),{},{imagesSize:e.payload});case q:return Object(y.a)(Object(y.a)({},t),{},{titlesSize:e.payload});case V:return Object(y.a)(Object(y.a)({},t),{},{lang:e.payload});default:return t}},Bt=Object(bt.c)({filtering:Ot,api:ht,list:It,options:yt}),Ct=Object(bt.d)(Bt,Object(bt.a)(jt.a)),Et=n(5);var Qt=function(){return Object(a.jsx)(u.a,{store:Ct,children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)(Et.a,{component:ct,path:"/options",exact:!0}),Object(a.jsx)(Et.a,{component:ft,path:"/ShoppingListReact",exact:!0})]})})},Ut=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),r(t),c(t)}))};n(81),n(82),n(84);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Qt,{})}),document.getElementById("root")),Ut()}},[[85,1,2]]]);
//# sourceMappingURL=main.fa165119.chunk.js.map