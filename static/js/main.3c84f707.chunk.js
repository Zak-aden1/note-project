(this["webpackJsonpnote-project"]=this["webpackJsonpnote-project"]||[]).push([[0],{109:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(16),o=a.n(r),i=(a(109),a(94)),s=a(17),l=a(95),j=a(178),d=a(33),b=function(e){var t=Object(c.useState)([]),a=Object(d.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(!0),i=Object(d.a)(o,2),s=i[0],l=i[1],j=Object(c.useState)(null),b=Object(d.a)(j,2),u=b[0],h=b[1];return Object(c.useEffect)((function(){fetch(e).then((function(e){if(e.ok)return e.json();throw Error("could not fetch data")})).then((function(e){r(e),l(!1),h(null)})).catch((function(e){h(e.message),l(!1)}))}),[e]),{notes:n,setNotes:r,ispending:s,error:u}},u=a(158),h=a(41),O=a(160),f=a(161),p=a(163),x=a(165),g=a(93),m=a.n(g),v=a(155),y=a(180),N=a(184),S=a(182),w=a(7),C=Object(v.a)({field:{marginTop:20,marginBottom:20,display:"block"}}),k=function(){var e=Object(s.f)(),t=Object(c.useState)(""),a=Object(d.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(""),i=Object(d.a)(o,2),l=i[0],j=i[1],b=Object(c.useState)("work"),g=Object(d.a)(b,2),v=g[0],k=g[1],T=Object(c.useState)(!1),I=Object(d.a)(T,2),D=I[0],M=I[1],P=Object(c.useState)(!1),B=Object(d.a)(P,2),E=B[0],W=B[1],A=C();return Object(w.jsxs)(u.a,{size:"sm",children:[Object(w.jsx)(h.a,{variant:"h6",component:"h2",gutterBottom:!0,color:"textSecondary",children:"Create A New Note"}),Object(w.jsxs)("form",{noValidate:!0,onSubmit:function(t){t.preventDefault(),M(!1),W(!1),""==n&&M(!0),""==l&&W(!0),n&&l&&fetch("http://localhost:8080/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n,details:l,category:v})}).then((function(){return e.push("/")}))},children:[Object(w.jsx)(y.a,{onChange:function(e){r(e.target.value)},className:A.field,label:"Note Title",color:"secondary",variant:"outlined",fullWidth:!0,required:!0,error:D}),Object(w.jsx)(y.a,{onChange:function(e){j(e.target.value)},className:A.field,label:"Details",variant:"outlined",color:"secondary",multiline:!0,rows:4,fullWidth:!0,required:!0,error:E}),Object(w.jsx)(O.a,{className:A.field,children:Object(w.jsxs)(N.a,{value:v,onChange:function(e){k(e.target.value)},children:[Object(w.jsx)(f.a,{children:"Note Category"}),Object(w.jsx)(p.a,{value:"work",control:Object(w.jsx)(S.a,{}),label:"Work"}),Object(w.jsx)(p.a,{value:"todos",control:Object(w.jsx)(S.a,{}),label:"Todos"}),Object(w.jsx)(p.a,{value:"reminders",control:Object(w.jsx)(S.a,{}),label:"Reminders"}),Object(w.jsx)(p.a,{value:"shopping",control:Object(w.jsx)(S.a,{}),label:"Shopping"})]})}),Object(w.jsx)(x.a,{endIcon:Object(w.jsx)(m.a,{}),type:"submit",color:"secondary",variant:"contained",children:"Submit"})]})]})},T=a(166),I=a(167),D=a(185),M=a(164),P=a(169),B=a(168),E=a(71),W=a(73),A=a(70),F=a(72),L=Object(v.a)((function(e){return{test:{color:function(e){if("work"==e.category)return E.a[700]}},avColor:{backgroundColor:function(e){return"work"==e.category?E.a[700]:"shopping"==e.category?W.a[500]:"todos"==e.category?A.a[500]:F.a[500]}}}})),z=function(e){var t=e.note,a=e.handleDelete,c=L(t);return Object(w.jsx)("div",{children:Object(w.jsxs)(T.a,{elevation:8,className:c.test,children:[Object(w.jsx)(I.a,{avatar:Object(w.jsx)(D.a,{className:c.avColor,children:t.category.charAt(0).toUpperCase()}),title:t.title,subheader:t.category,action:Object(w.jsx)(M.a,{onClick:function(){a(t.id)},children:Object(w.jsx)(B.a,{})})}),Object(w.jsx)(P.a,{children:Object(w.jsx)(h.a,{variant:"body2",color:"textSecondary",children:t.details})})]})})},J=a(96),R=function(){var e=b("http://localhost:8080/notes"),t=e.notes,a=e.setNotes,c=e.ispending,n=e.error;console.log(t);var r=function(e){fetch("http://localhost:8080/delete/"+e,{method:"DELETE"});var c=t.filter((function(t){return t.id!=e}));a(c)};return Object(w.jsxs)(u.a,{children:[c&&Object(w.jsx)("div",{children:"loading...."}),n&&Object(w.jsxs)("div",{children:[" ",n]}),Object(w.jsx)(J.a,{breakpointCols:{default:3,1100:2,700:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:t.map((function(e){return Object(w.jsx)("div",{children:Object(w.jsx)(z,{handleDelete:r,note:e})},e.id)}))})]})},q=a(177),G=a(183),U=a(162),K=a(174),Q=a(175),V=a(176),X=a(170),Y=a(171),Z=a(172),_=a(173),H=a(179),$=a(58);$.a.initializeApp({apiKey:"AIzaSyB38r5PTpMzX1lT7ia74cr8iSJ1oF5onrM",authDomain:"note-project-272fe.firebaseapp.com",projectId:"note-project-272fe",storageBucket:"note-project-272fe.appspot.com",messagingSenderId:"574689139198",appId:"1:574689139198:web:62cb06ee6638dcd47588af"});$.a.firestore(),$.a.auth();var ee=$.a,te=Object(c.createContext)({}),ae=function(e){var t=Object(c.useState)("please Sign in"),a=Object(d.a)(t,2),n=a[0],r=a[1],o=new ee.auth.GoogleAuthProvider;return Object(c.useEffect)((function(){ee.auth().onAuthStateChanged((function(e){r(e||null)}))}),[]),Object(w.jsx)(te.Provider,{value:{user:n,signIn:function(){ee.auth().signInWithRedirect(o)},signOut:function(){ee.auth().signOut().then((function(){r(null)}))}},children:e.children})},ce=Object(v.a)((function(e){return{page:{background:"#f9f9f9",width:"100%",padding:e.spacing(3)},drawer:{width:240},drawerPaper:{width:240},root:{display:"flex"},active:{background:"#f4f4f4"},title:{padding:e.spacing(2)},appbar:{backgroundColor:"#f4f4f4",color:"black",width:"calc(100% - ".concat(240,"px)")},toolbar:e.mixins.toolbar,date:{flexGrow:1},avatar:{marginLeft:e.spacing(2)}}})),ne=function(e){var t=e.children,a=ce(),c=Object(s.f)(),n=Object(s.g)(),r=[{text:"My Notes",icon:Object(w.jsx)(X.a,{color:"secondary"}),path:"/"},{text:"Create Note",icon:Object(w.jsx)(Y.a,{color:"secondary"}),path:"/create"}];return Object(w.jsxs)("div",{className:a.root,children:[Object(w.jsx)(Z.a,{className:a.appbar,children:Object(w.jsxs)(_.a,{children:[Object(w.jsxs)(h.a,{className:a.date,variant:"h5",children:["today is the ",Object(H.a)(new Date,"do MMMM Y")]}),Object(w.jsx)(h.a,{}),Object(w.jsx)(D.a,{className:a.avatar,children:"Z"})]})}),Object(w.jsxs)(G.a,{className:a.drawer,anchor:"left",variant:"permanent",classes:{paper:a.drawerPaper},children:[Object(w.jsx)("div",{children:Object(w.jsx)(h.a,{variant:"h5",className:a.title,children:"User Notes"})}),Object(w.jsx)(U.a,{children:r.map((function(e){return Object(w.jsxs)(K.a,{button:!0,onClick:function(){c.push(e.path)},className:n.pathname==e.path?a.active:null,children:[Object(w.jsx)(Q.a,{children:e.icon}),Object(w.jsx)(V.a,{primary:e.text})]},e.text)}))})]}),Object(w.jsxs)("div",{className:a.page,children:[Object(w.jsx)("div",{className:a.toolbar}),t]})]})},re=Object(l.a)({pallete:{secondary:q.a},typography:{fontFamily:"Quicksand",fontWeightLight:400,fontWeightRegular:500,fontWeightBold:600}}),oe=function(){return Object(w.jsx)(j.a,{theme:re,children:Object(w.jsx)(ae,{children:Object(w.jsx)(i.a,{children:Object(w.jsx)(ne,{children:Object(w.jsxs)(s.c,{children:[Object(w.jsx)(s.a,{exact:!0,path:"/",children:Object(w.jsx)(R,{})}),Object(w.jsx)(s.a,{path:"/create",children:Object(w.jsx)(k,{})})]})})})})})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,187)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))};o.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(oe,{})}),document.getElementById("root")),ie()}},[[124,1,2]]]);
//# sourceMappingURL=main.3c84f707.chunk.js.map