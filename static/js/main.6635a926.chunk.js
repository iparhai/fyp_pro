(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{64:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var c,s,a,r,i=n(1),j=n.n(i),o=n(13),l=n.n(o),b=(n(64),n(34)),d=n(10),h=n(21),u=n(96),O=n(99),x=n(22),g=n(97),p=n(2),m=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(f,{className:"fixed-top",children:[Object(p.jsx)(g.a.Brand,{href:""}),Object(p.jsx)("a",{href:"/",style:{textDecoration:"none",pointerEvents:"none",color:"white"},children:Object(p.jsx)("h2",{className:"d-inline-block ml-3 mt-2 ",style:{fontSize:40},children:"WELCOME"})})]})})},f=Object(x.a)(g.a)(c||(c=Object(h.a)(["\n\nbackground: #1F386B;\ncolor:white;\n"]))),w=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{}),Object(p.jsxs)(u.a,{children:[Object(p.jsx)("a",{href:"/beginner/2",children:Object(p.jsx)(v,{variant:"danger",className:"mb-3",children:" BEGINNERS LEVEL "})}),Object(p.jsx)("br",{}),Object(p.jsx)(v,{variant:"warning",className:"mb-3",children:" INTERMEDIATE LEVEL "}),Object(p.jsx)("br",{}),Object(p.jsx)(v,{variant:"success",className:"mb-3",children:" ADVANCED LEVEL "})]})]})},v=Object(x.a)(O.a)(s||(s=Object(h.a)(["\n\nmargin-bottom:10px;\n"]))),S=n(23),E=n(9),N=n(35),k=n.n(N),y=n(98),C=n(55),F=n(27),L=function(){var e=Object(d.g)().id,t=Object(d.f)(),n=Object(i.useState)([]),c=Object(E.a)(n,2),s=c[0],a=c[1],r=Object(i.useState)([]),j=Object(E.a)(r,2),o=j[0],l=j[1],b=Object(i.useState)(10),h=Object(E.a)(b,2),x=h[0],g=h[1],f=Object(i.useState)(0),w=Object(E.a)(f,2),v=w[0],N=w[1],L=Object(i.useState)(0),A=Object(E.a)(L,2),T=A[0],D=A[1],R=Object(i.useState)(1),B=Object(E.a)(R,2),q=B[0],V=B[1],P=Object(i.useState)(!1),_=Object(E.a)(P,2),J=_[0],z=_[1],G=Object(i.useState)([]),H=Object(E.a)(G,2),Q=H[0],W=H[1],Y=Object(i.useState)(""),K=Object(E.a)(Y,2),U=K[0],X=K[1],Z=Object(i.useState)(0),$=Object(E.a)(Z,2),ee=$[0],te=$[1],ne=[0],ce=Object(i.useState)(""),se=Object(E.a)(ce,2),ae=se[0],re=se[1],ie=Object(C.useStopwatch)({autoStart:!0}),je=ie.seconds,oe=ie.minutes,le=ie.pause,be=function(e){if(e.length<4)return e;var t=e.slice(0,1),n=e.slice(1,-1),c=e.slice(-1);return t+n.split("").sort((function(){return.5-Math.random()})).join("")+c},de=function(e){return e.split(/("[^"]+"|[^"\s]+)/g).map(be).join("")};function he(e,t){return Array(t-e+1).fill().map((function(t,n){return e+n}))}var ue=function(e){if(X(""),e==Q[T])if(N(v+1),q<x){console.log(q),console.log(x),console.log(q<x);for(var t=Math.floor(0+Math.random()*(x-0));ne.includes(t);)t=Math.floor(0+Math.random()*(x-0));ne.push(t),D(t),V(q+1),Q[t]&&Q[t].includes(" ")?re(de(Q[t])):Q[t]&&Q[t].length>1?re(be(Q[t])):re("")}else z(!0);else te(ee+1)};return Object(i.useEffect)((function(){k.a.get("http://localhost:5000/api/"+e+"/questions").then((function(e){console.log(e.data.questions),console.log(e.data.images),console.log(e.data.answers),a(e.data.questions),l(e.data.images),g(e.data.questions.length),W(e.data.answers),e.data.answers[0]&&e.data.answers[0].includes(" ")?re(de(e.data.answers[0])):e.data.answers[0]&&e.data.answers[0].length>1?re(be(e.data.answers[0])):re("")}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{}),Object(p.jsxs)(u.a,{children:[Object(p.jsxs)(M,{border:"dark",className:"float-left text-left",children:[Object(p.jsx)(F.d,{children:Object(p.jsxs)(F.c,{children:[" Timer : ",oe,":",je]})}),Object(p.jsx)(F.b,{children:Object(p.jsxs)("h2",{children:[Object(p.jsxs)("span",{style:{marginRight:"30px"},children:["Scores : ",v]}),Object(p.jsxs)("span",{children:["Penalties : ",ee]})]})})]}),J?null:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h1",{children:["Question No. ",q]}),Object(p.jsx)("h1",{children:s[T]}),Object(p.jsx)("div",{children:o[T]?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{src:"/images/"+o[T],alt:" "}),Object(p.jsx)("br",{})]}):null}),Object(p.jsxs)("div",{style:{height:"150px",marginTop:"20px"},children:["insert_tab.jpeg"===o[T]?Object(S.a)(he(1,11)).map((function(e){return Object(p.jsx)(O.a,{className:"btn-lg",style:{marginRight:"3px"},onClick:function(){return ue(e)},children:e})})):"home_tab.jpg"===o[T]?Object(S.a)(he(1,25)).map((function(e){return Object(p.jsx)(O.a,{style:{marginRight:"3px"},onClick:function(){return ue(e)},children:e})})):"ribbon.png"===o[T]?Object(S.a)(he(1,3)).map((function(e){return Object(p.jsx)(O.a,{className:"btn-lg",style:{marginRight:"10px"},onClick:function(){return ue(e)},children:e})})):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h4",{children:[" Hint: ",ae]}),Object(p.jsx)(y.a,{onSubmit:function(e){e.preventDefault()},children:Object(p.jsx)(y.a.Control,{type:"text",value:U,onChange:function(e){return X(e.target.value)},placeholder:"Your Answer"})}),Object(p.jsx)(I,{onClick:function(){ue(U)},children:"Submit Answer"})]}),Object(p.jsx)("br",{})]})]}),Object(p.jsx)("div",{style:{height:"80px"},children:Object(p.jsx)(I,{variant:"success",disabled:!J,onClick:function(){le(),k.a.post("http://localhost:5000/api/save_answers",{minutes:oe,seconds:je,scores:v,penalty:ee,moduleId:e}).then((function(n){console.log("saved"),e<8?(t.push("/beginner/"+(parseInt(e)+1)),window.location.reload(!1)):t.push("/intermediate/"+(parseInt(e)+1))}))},children:"Finish Test"})})]})]})},I=Object(x.a)(O.a)(a||(a=Object(h.a)(["\nfloat:right;\nmargin-right: 3px;\n// margin-bottom:20px;\n"]))),M=Object(x.a)(F.a)(r||(r=Object(h.a)(["\nbackground: white;\nbox-shadow: 6px 5px 5px rgb(0 0 0 );\n    width: 400px;\n    // height: 350px;\n   border: 2px solid black;\n  padding:20px;\n"])));var A=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{path:"/",exact:!0,component:w}),Object(p.jsx)(d.a,{path:"/beginner/:id",component:L})]})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};l.a.render(Object(p.jsx)(j.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),T()}},[[89,1,2]]]);
//# sourceMappingURL=main.6635a926.chunk.js.map