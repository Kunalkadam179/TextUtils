(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(15),n=a.n(o),l=(a(22),a(7)),i=(a(23),a(0));function r(){var e=Object(c.useState)({color:"black",backgroundColor:"white"}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)("Eable Dark Mode"),n=Object(l.a)(o,2),r=n[0],d=n[1];return Object(i.jsxs)("div",{className:"container",style:a,children:[Object(i.jsx)("h1",{classNameName:"my-3",children:"About Us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",style:a,children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button ",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{classNameName:"container my-3",children:Object(i.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){"white"===a.color?(s({color:"black",backgroundColor:"white"}),d("Enable Dark mode")):(s({color:"white",backgroundColor:"black",border:"1px solid white"}),d("Enable Light mode"))},children:r})}),Object(i.jsx)("br",{})]})}var d=a(9);function b(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],o=a[1];return console.log(),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){o(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"},id:"myBox",rows:"8"})}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=s.toUpperCase();o(t),e.showAlert("Converted to Upper Case!","success")},children:"Convert to UpperCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=s.toLowerCase();o(t),e.showAlert("Converted to Lower Case!","success")},children:"Convert to LowerCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){o(""),e.showAlert("Text is Cleared!","success")},children:"Clear Text"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text is Coppied!","success")},children:"Copt Text"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=s.split(/[ ]+/);o(t.join(" ")),e.showAlert("Extra Space Removed!","success")},children:"Remove Extra Space"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(i.jsx)("h2",{children:"You text Summary"}),Object(i.jsxs)("p",{children:[s.split(" ").length," words and ",s.length," characters"]}),Object(i.jsxs)("p",{children:[.008*s.split(" ").length," Munutes to Read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:s.length>0?s:"Enter something in the textbox above to preview it here"})]})]})}b.defaultProps={title:"Set title here",aboutText:"About"};var j=function(e){return e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})},m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null),n=Object(l.a)(o,2),u=n[0],p=n[1],x=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),1500)};return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(b,{title:"TextUtils",aboutText:"About",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#042743",x("Dark mode has been enabled","success")):(s("light"),document.body.style.backgroundColor="white",x("Light mode has been enabled","success"))}}),Object(i.jsx)(j,{alert:u}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{exact:!0,path:"/about",children:Object(i.jsx)(r,{})}),Object(i.jsx)(m.a,{exact:!0,path:"/",children:Object(i.jsx)(h,{heading:"Enter the text to analyze below",showAlert:x,mode:a})})]})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),o(e),n(e)}))};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.34eac0ff.chunk.js.map