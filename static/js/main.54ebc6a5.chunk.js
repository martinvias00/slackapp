(this["webpackJsonpslack-practice"]=this["webpackJsonpslack-practice"]||[]).push([[0],{14:function(e,t,s){},24:function(e,t,s){},34:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s(25),a=s.n(c),r=s(7),i=(s(34),s(4)),l=s(3),o=(s(14),s(1));var j="client",d=function(e){localStorage.setItem(j,JSON.stringify(e))},h=function(){return JSON.parse(localStorage.getItem(j))},b=function(){localStorage.removeItem(j)},u=function(e){var t=e.name,s=e.type,c=e.value,a=e.setState,r=e.errorMessage,l=e.placeholder,j=Object(n.useState)("#2d3038"),d=Object(i.a)(j,2),h=d[0],b=d[1];Object(n.useEffect)((function(){return""!==r&&(b("red"),document.querySelector(".errorSpan").classList.add("animated")),function(){b("#2d3038")}}),[r]);var u={width:"330px",height:"45px",borderRadius:"10px",border:"2px ".concat(h," solid")};return Object(o.jsxs)("fieldset",{style:x,children:[Object(o.jsx)("input",{type:s,name:t,id:t,value:c,placeholder:l,onChange:function(e){return a(e.target.value)},style:u}),Object(o.jsx)("span",{className:"errorSpan",style:p,children:r})]})},x={border:0,width:"fit-content",height:80,display:"flex",flexDirection:"column"},p={display:"block",color:"red",fontSize:".7em",position:"relative",textAlign:"left",top:-2},O=s(15).default,f=function(e){var t=e.setClient,s=(e.setonRegister,Object(l.f)()),c=Object(n.useState)(""),a=Object(i.a)(c,2),r=a[0],j=a[1],b=Object(n.useState)(""),x=Object(i.a)(b,2),p=x[0],f=x[1],N=Object(n.useState)({id:"",accessToken:"",client:"",expiry:"",uid:""}),k=Object(i.a)(N,2);k[0],k[1];return Object(o.jsxs)("div",{style:m,children:[Object(o.jsx)("header",{style:{height:"100px"}}),Object(o.jsx)("div",{style:g,children:Object(o.jsx)("h1",{children:"Slack App"})}),Object(o.jsx)("div",{style:y,children:Object(o.jsxs)("form",{style:v,children:[Object(o.jsx)(u,{name:"Username",placeholder:"Username",value:r,setState:j,type:"text",errorMessage:""}),Object(o.jsx)(u,{name:"password",placeholder:"Password",value:p,setState:f,type:"password",errorMessage:""}),Object(o.jsxs)("div",{style:S,children:[Object(o.jsx)("button",{style:C,onClick:function(e){return function(e){e.preventDefault(),O.post("".concat("http://206.189.91.54/api/v1","/auth/sign_in"),{email:r,password:p}).then((function(e){var n=e.data.data.id,c=e.headers["access-token"],a=e.headers,r=a.client,i=a.expiry,l=a.uid,o={id:n,accessToken:c,client:r,expiry:i,uid:l};alert("".concat(r," ").concat(i,"  ").concat(l," ").concat(c)),d(o),t(h()),s("/home",{replace:!0})})).catch((function(e){alert(e.response.data.errors)})),j(""),f("")}(e)},children:"Log In"}),Object(o.jsx)("button",{style:w,onClick:function(){return s("/register",{replace:!0})},children:"Sign up"})]})]})}),Object(o.jsx)("footer",{style:{height:"100px"}})]})},m={width:"100vw",height:"100vh",display:"flex",alignItems:"center"},g={width:"50vw",height:"500px",display:"flex",justifyContent:"center",alignItems:"center"},y={width:"inherit",height:"500px",display:"flex",alignItems:"center",fontFamily:"'Open Sans', sans-serif",fontSize:"20px"},v={margin:"auto",padding:"10px",borderRadius:"5px",background:"#f5f5f5",height:"315px",width:"396px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},S={height:"50%",width:"85%",display:"flex",justifyContent:"center",flexDirection:"column"},w={paddingTop:"20px",border:"none",backgroundColor:"transparent",resize:"none",outline:"none",color:"#2d3038",fontWeight:"bold"},C={width:"100%",height:"50px",borderRadius:"4px",backgroundColor:"#2d3038",color:"white",fontWeight:"bold"},N=(s(24),s(26)),k=function(){return Object(o.jsx)("div",{"v-show":"show",className:"overlay",children:Object(o.jsx)("div",{className:"dialog",children:Object(o.jsx)(N.a,{style:{color:"#2d3038",fontSize:"8em",fontWeight:"bold"}})})})},I=s(27),D=function(){return Object(o.jsx)("div",{"v-show":"show",className:"overlay",children:Object(o.jsx)("div",{className:"dialog",children:Object(o.jsx)(I.a,{style:{color:"#2d3038",fontSize:"8em",fontWeight:"bold"}})})})},M=s(15).default,T=function(e){e.onRegister,e.setonRegister;var t=Object(l.f)(),s=Object(n.useState)([]),c=Object(i.a)(s,1)[0],a=Object(n.useState)(""),r=Object(i.a)(a,2),j=r[0],d=r[1],h=Object(n.useState)(""),b=Object(i.a)(h,2),x=b[0],p=b[1],O=Object(n.useState)(""),f=Object(i.a)(O,2),m=f[0],g=f[1],y=Object(n.useState)(""),v=Object(i.a)(y,2),S=v[0],w=v[1],C=Object(n.useState)(""),N=Object(i.a)(C,2),I=N[0],T=N[1],L=Object(n.useState)(!1),J=Object(i.a)(L,2),B=J[0],U=J[1],q=Object(n.useState)(!1),H=Object(i.a)(q,2),Y=H[0],$=H[1];var G=function(e){var t=e.email,s=0;return""===t?(w("! Enter email address"),s++):c.find((function(e){return e.email===t}))?(w("! That email is taken. Try another."),s++):/[!#$%^&*()_+]+/.test(t)?(w("! Sorry, only letters(a-z), numbers(0-9),and perids(.)are allowed."),s++):w(""),x!==m?(T("! Those passwords didn\u2019t match. Try again."),s++):""===x||""===m?(T("! Enter password"),s++):T(""),s>0};return Object(o.jsxs)("div",{style:R,children:[Object(o.jsxs)("main",{style:_,children:[Object(o.jsx)("h1",{style:E,children:"Create your Account"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e=c,s={email:j,password:x,password_confirmation:m};G(s)||($(!0),e.push(s),console.log(s),M.post("".concat("http://206.189.91.54/api/v1","/auth/"),s).then((function(e){console.log(e),$(!1),U(!0)})).catch((function(e){$(!1),alert("Error: ".concat(e.response.data.errors.full_messages))})),d(""),p(""),g(""),setTimeout((function(){U(!1),t("/",{replace:!0})}),1e3))}()},style:F,children:[Y?Object(o.jsx)(k,{}):null,B?Object(o.jsx)(D,{}):null,Object(o.jsx)(u,{name:"Email",type:"email",placeholder:"Email",value:j,setState:d,inputStyle:{width:"430px",height:"30px"},errorMessage:S}),Object(o.jsx)(u,{name:"Password",type:"password",placeholder:"Password",value:x,setState:p,errorMessage:I}),Object(o.jsx)(u,{name:"Confirm",type:"password",placeholder:"Confirm",value:m,setState:g,errorMessage:I}),Object(o.jsxs)("div",{style:z,children:[Object(o.jsx)("button",{style:P,onClick:function(){return t("/",{replace:!0})},children:"Sign in instead"}),Object(o.jsx)("button",{type:"submit",style:A,children:"Create"})]})]})]}),Object(o.jsxs)("footer",{style:{width:"430px",display:"flex",justifyContent:"center"},children:[Object(o.jsx)("h5",{style:{flex:1,textAlign:"left"},children:"English"}),Object(o.jsxs)("ul",{style:{width:"50%",display:"flex",justifyContent:"space-around"},children:[Object(o.jsx)("li",{style:W,children:"Help"}),Object(o.jsx)("li",{style:W,children:"Privacy"}),Object(o.jsx)("li",{style:W,children:"Terms"})]})]})]})},W={listStyleType:"none"},R={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},_={width:"fit-content",display:"flex",flexDirection:"column",justifyContent:"center",border:"1px gray solid",borderRadius:"20px",padding:"20px"},E={paddingBottom:"10px",textAlign:"center"},F={width:"430px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},z={width:"100%",display:"flex",alignItems:"center"},A={width:"130px",height:"35px",borderRadius:"4px",backgroundColor:"#2d3038",color:"white",fontWeight:"bold",marginleft:"20px"},P={width:"50%",border:"none",backgroundColor:"transparent",resize:"none",outline:"none",color:"#2d3038",fontWeight:"bold"};var L=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("h2",{children:"Welcome to the homepage!"}),Object(o.jsx)("p",{children:"You can do this, I believe in you."}),Object(o.jsxs)("div",{className:"enterMessageDiv",children:[Object(o.jsx)("input",{className:"enterMessage"}),Object(o.jsx)("div",{})]})]})},J=s(8);var B=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("main",{children:[Object(o.jsx)("h2",{children:"Who are we?"}),Object(o.jsx)("p",{children:"That feels like an existential question, don't you think?"}),Object(o.jsxs)("div",{className:"enterMessageDiv",children:[Object(o.jsx)("input",{className:"enterMessage"}),Object(o.jsx)("div",{children:Object(o.jsx)(J.c,{})})]})]})})},U=s(11);s(54);var q=function(e){var t=e.setOpenSearchModal;return Object(o.jsx)("div",{className:"searchModalWrapper",children:Object(o.jsxs)("div",{id:"div",children:[Object(o.jsx)(J.a,{className:"closeIcon",onClick:function(){t(!1)}}),Object(o.jsx)(U.a,{className:"searchIcon"}),Object(o.jsx)("input",{type:"text",className:"searchInput",placeholder:"Search for files, facts, figures, and stats"})]})})},H=s(28),Y=s(29),$=function(e){e.setClient;var t=Object(l.f)(),s=Object(n.useState)(!0),c=Object(i.a)(s,2),a=c[0],j=c[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)(J.b,{className:"top_nav__Leftsidebar"}),Object(o.jsx)("span",{className:"search",onClick:function(){j(!0)},children:Object(o.jsx)(U.a,{id:"FaSearch"})}),Object(o.jsx)(H.a,{className:"top_nav__Rightsidebar"})]}),Object(o.jsxs)("aside",{className:"aside",children:[Object(o.jsxs)("span",{className:"workspaceWrapper",children:[Object(o.jsx)("span",{className:"workspaceName",children:"Workspace"}),Object(o.jsx)(Y.a,{className:"pencilIcon"})]}),Object(o.jsxs)("nav",{children:[Object(o.jsx)(r.b,{to:"/about"}),Object(o.jsx)("nav",{children:Object(o.jsx)(r.b,{to:"/",children:"Direct Messages"})})]})]}),Object(o.jsx)("span",{id:"messages",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/",element:Object(o.jsx)(L,{})}),Object(o.jsx)(l.a,{path:"about",element:Object(o.jsx)(B,{})})]})}),a&&Object(o.jsx)(q,{setOpenSearchModal:j}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),b(),t("/",{replace:!0})},children:"logout"})]})};var G=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),s=(t[0],t[1]),c=Object(n.useState)(!1),a=Object(i.a)(c,2),r=(a[0],a[1]);return Object(o.jsx)("div",{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",element:Object(o.jsx)(f,{setClient:s,setonRegister:r})}),Object(o.jsx)(l.a,{exact:!0,path:"/home",element:Object(o.jsx)($,{setClient:s})}),Object(o.jsx)(l.a,{exact:!0,path:"/register",element:Object(o.jsx)(T,{})}),Object(o.jsx)(l.a,{path:"*",element:Object(o.jsx)("h1",{children:"404 NOT FOUND"})})]})})},K=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,56)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};a.a.render(Object(o.jsx)(r.a,{children:Object(o.jsx)(G,{})}),document.getElementById("root")),K()}},[[55,1,2]]]);
//# sourceMappingURL=main.54ebc6a5.chunk.js.map