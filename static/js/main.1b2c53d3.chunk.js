(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{17:function(t,e,i){},18:function(t,e,i){},20:function(t,e,i){"use strict";i.r(e);var n=i(10),a=i.n(n),s=i(2),r=i(9),c=i(12),o=i(11),l=i(3),m=i(4),h=i(6),j=i(5),d=i(1),u=i.n(d),p=(i(17),i(18),i(0)),b=function(t){Object(h.a)(i,t);var e=Object(j.a)(i);function i(){var t;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={position:0},t.switchPosition=function(e){var i=t.props,n=i.images,a=i.itemWidth,s=i.step,r=i.frameSize,c=i.infinite,o=document.querySelector("ul"),l=e.currentTarget,m=t.state.position,h=-a*(n.length-r);"Next"===l.textContent&&(m-=a*s,m=Math.max(m,h),c&&t.state.position===h&&(m=0)),"Prev"===l.innerText&&(m+=a*s,m=Math.min(m,0),c&&0===t.state.position&&(m=h)),t.setState({position:m}),o.style.transform="translate(".concat(m,"px)")},t}return Object(m.a)(i,[{key:"render",value:function(){var t=this.props,e=t.images,i=t.itemWidth,n=t.frameSize,a=t.infinite,s=t.animationDuration,r=this.state.position,c=-i*(e.length-n);return Object(p.jsxs)("div",{className:"Carousel",style:{width:"".concat(i*n,"px")},children:[Object(p.jsx)("ul",{className:"Carousel__list",style:{transition:"".concat(s,"ms")},children:e.map((function(t){var e=t.slice(-5,-4);return Object(p.jsx)("li",{style:{height:"".concat(i,"px"),width:"".concat(i,"px")},className:"Carousel__item",children:Object(p.jsx)("img",{src:t,alt:e,height:"".concat(i,"px")})},e)}))}),Object(p.jsxs)("div",{style:{width:"100%",height:"25px"},children:[Object(p.jsx)("button",{className:"button prev",type:"button",onClick:this.switchPosition,disabled:0===r&&!a,children:"Prev"}),Object(p.jsx)("button",{className:"button next",type:"button",onClick:this.switchPosition,"data-cy":"next",disabled:r===c&&!a,children:"Next"})]})]})}}]),i}(u.a.Component),f=b,g=function(t){Object(h.a)(i,t);var e=Object(j.a)(i);function i(){var t;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),m=0;m<n;m++)a[m]=arguments[m];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],frameSize:3,animationDuration:1e3,step:3,itemWidth:130,infinite:!1},t.getSettingsFromForm=function(){var e,i=document.querySelector("#form"),n=new FormData(i),a=Object(o.a)(n);try{var l=function(){var i=Object(c.a)(e.value,2),n=i[0],a=i[1];t.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(s.a)({},n,a))}))};for(a.s();!(e=a.n()).done;)l()}catch(m){a.e(m)}finally{a.f()}},t}return Object(m.a)(i,[{key:"render",value:function(){var t=this,e=this.state,i=e.images,n=e.animationDuration,a=e.itemWidth,s=e.step,r=e.frameSize,c=e.infinite;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"title","data-cy":"title",children:"Carousel with ".concat(i.length," images")}),Object(p.jsxs)("form",{id:"form",className:"form",children:[Object(p.jsxs)("div",{className:"form__field",children:[Object(p.jsx)("label",{htmlFor:"itemWidth",className:"form__label",children:"Item width"}),Object(p.jsx)("span",{children:a}),Object(p.jsx)("input",{type:"range",name:"itemWidth",id:"itemWidth",max:"300",value:a,min:"50",onChange:this.getSettingsFromForm})]}),Object(p.jsxs)("div",{className:"form__field",children:[Object(p.jsx)("label",{htmlFor:"frameSize",className:"form__label",children:"Frame Size"}),Object(p.jsx)("span",{children:r}),Object(p.jsx)("input",{type:"range",name:"frameSize",id:"frameSize",min:"1",max:"5",value:r,onChange:this.getSettingsFromForm})]}),Object(p.jsxs)("div",{className:"form__field",children:[Object(p.jsx)("label",{htmlFor:"step",className:"form__label",children:"Step"}),Object(p.jsx)("span",{children:s}),Object(p.jsx)("input",{type:"range",name:"step",id:"step",min:"1",max:"5",value:s,onChange:this.getSettingsFromForm})]}),Object(p.jsxs)("div",{className:"form__field",children:[Object(p.jsx)("label",{htmlFor:"animationDuration",className:"form__label",children:"Animation Duration"}),Object(p.jsx)("span",{children:n}),Object(p.jsx)("input",{type:"range",name:"animationDuration",id:"animationDuration",max:"3000",min:"500",value:n,onChange:this.getSettingsFromForm})]}),Object(p.jsxs)("div",{className:"form__field",children:[Object(p.jsx)("label",{htmlFor:"infinite",children:"infinite"}),Object(p.jsx)("input",{id:"infinite",name:"infinite",type:"checkbox",checked:c,onChange:function(){return t.setState({infinite:!c})}})]})]}),Object(p.jsx)(f,{images:i,frameSize:r,itemWidth:a,animationDuration:n,step:s,infinite:c})]})}}]),i}(u.a.Component),x=g;a.a.render(Object(p.jsx)(x,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1b2c53d3.chunk.js.map