(this["webpackJsonpnova-market-it-marker"]=this["webpackJsonpnova-market-it-marker"]||[]).push([[24],{335:function(e,t,i){},336:function(e,t,i){},390:function(e,t,i){"use strict";i.r(t);var c=i(53),s=i(0),n=i(15),a=i(1),l=(i(335),i(14)),r=i(16),j=i(52),d=(i(336),i(3)),b=function(){return Object(d.jsx)("div",{className:"loadingio-spinner-spinner-jig0v45w2pd",children:Object(d.jsxs)("div",{className:"ldio-qiso3zjp6h",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})})},o=i(127),p=i(116);t.default=function(){var e=Object(r.c)((function(e){return e.profileClient.profileClient})),t=Object(r.c)((function(e){return e.profileClient.loading})),i=Object(r.c)((function(e){return e.categoryRegion.region})),u=Object(r.c)((function(e){return e.renameProfile})).loading,O=Object(r.b)(),x=Object(p.a)(),m=x.register,h=x.handleSubmit,v=x.reset,f=(x.watch,x.formState.errors);Object(a.useEffect)((function(){e&&(Object.entries(e).map((function(e){return Object(n.a)({},e[0],e[1])})),v(e))}),[e]);Object(a.useEffect)((function(){O(Object(o.a)())}),[]);var g=Object(a.useState)(""),N=Object(c.a)(g,2),_=N[0],y=N[1],w=Object(a.useState)([]),k=Object(c.a)(w,2),S=(k[0],k[1]);return Object(d.jsx)("div",{className:"wrapper",children:t?Object(d.jsx)("p",{children:"Loading..."}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"title user__title",children:e.name}),Object(d.jsx)("span",{className:"change__user",children:"\u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"isactive",children:"\u041c\u043e\u0438 \u0414\u0430\u043d\u043d\u044b\u0439"}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/user-setting",children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0430"})})]}),Object(d.jsxs)("div",{className:"img-input",children:[Object(d.jsxs)("div",{className:"factory-item-img",children:[Object(d.jsx)("label",{style:{fontSize:"50px"},for:"file-input",children:"+"}),Object(d.jsx)("input",{multiple:!0,name:"Ads[imageFiles][]",onchange:"loadImage(event)",type:"file",id:"file-input",className:"img-input",style:{display:"none"},onChange:function(e){!function(e,t){var i=new FileReader;i.addEventListener("load",(function(e){t.src=e.target.result})),i.readAsDataURL(e)}(e.target.files[0],document.querySelectorAll("#img_file")[0]),y(e.target.files[0]),S(e.target.files[0])}})]}),Object(d.jsx)("img",{style:{width:"150px",height:"150px"},src:"https://birmakon.loko.uz/".concat(null===e||void 0===e?void 0:e.photo),alt:"not found"}),Object(d.jsx)("img",{src:"",style:{width:"150px",height:"150px",marginLeft:"30px"},id:"img_file",alt:""})]}),Object(d.jsxs)("form",{onSubmit:h((function(e){var t,i=Object(s.a)(Object(s.a)({},e),{},{photo:_});O((t=i,function(e){e({type:"rename_profile_start",payload:t}),j.a.renameProfile(t).then((function(t){var i=t.data;e({type:"rename_profile_success",payload:i}),alert("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043b\u0438 !")})).catch((function(t){var i=t.response,c=i&&i.data.message||"Login error";e({type:"rename_profile_error",payload:c}),alert("\u0427\u0442\u043e \u0442\u0430\u043a !")}))}))})),children:[Object(d.jsxs)("div",{className:"inputs",children:[Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)("div",{className:"input__title",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0435 \u043b\u0438\u0446\u043e "}),Object(d.jsx)("input",{type:"text"})]}),Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)("div",{className:"input__title",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(d.jsx)("input",Object(s.a)({type:"text"},m("phone",{required:!0}))),f.phone&&Object(d.jsx)("span",{style:{color:"red"},children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f !"})]}),Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)("div",{className:"input__title",children:"\u0415\u043c\u0430\u0438\u043b"}),Object(d.jsx)("input",Object(s.a)(Object(s.a)({type:"email"},m("email",{required:!0})),{},{placeholder:"mirdesign1er@gmail.com"})),f.email&&Object(d.jsx)("span",{style:{color:"red"},children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f !"})]}),Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)("div",{className:"input__title",children:"\u0420\u0435\u0433\u0438\u043e\u043d"}),Object(d.jsx)("select",{children:i.map((function(e,t){return Object(d.jsx)("option",{value:e.id,children:e.name},t)}))})]}),Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)("div",{className:"input__title",children:"\u0410\u0434\u0440\u0435\u0441"}),Object(d.jsx)("input",{type:"text",placeholder:"\u041c\u0430\u0445\u043c\u0443\u0434\u0430 \u0442\u0430\u0440\u0430\u0431\u0438 23..."})]}),Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)("div",{className:"input__title",children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),Object(d.jsx)("input",Object(s.a)({type:"text",placeholder:"\u041c\u0438\u0440\u043e\u043d\u0448\u043e\u0445 \u041d\u0430\u0441\u0438\u043c\u043e\u0432"},m("name",{required:!0}))),f.name&&Object(d.jsx)("span",{style:{color:"red"},children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f !"})]})]}),Object(d.jsx)("div",{className:"data__title",children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430"}),Object(d.jsxs)("div",{className:"inputs tigr",children:[Object(d.jsxs)("div",{className:"input",id:"input",children:[Object(d.jsx)("div",{className:"input__title",children:"\u041b\u043e\u0433\u0438\u043d"}),Object(d.jsx)("input",{type:"text",placeholder:"\u041c\u0438\u0440\u043e\u043d\u0448\u043e\u0445020"})]}),Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)("div",{className:"input__title",children:"\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsx)("input",Object(s.a)({type:"password"},m("password",{required:!0}))),f.password&&Object(d.jsx)("span",{style:{color:"red"},children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f !"})]})]}),Object(d.jsx)("div",{className:"save-block",children:Object(d.jsx)("button",{className:"save",type:"submit",children:u?Object(d.jsx)(b,{}):"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]})})}}}]);
//# sourceMappingURL=24.a168360e.chunk.js.map