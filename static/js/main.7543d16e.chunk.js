(this["webpackJsonpteste-ifood"]=this["webpackJsonpteste-ifood"]||[]).push([[0],{36:function(e,n,t){"use strict";t.r(n);var r,o,a,i,c,s,l,d,b,j,h,u,p,x,g,O,m,f,v,y,z,w=t(1),M=t.n(w),S=t(21),k=t.n(S),D=t(7),T=t(0),C=Object(w.createContext)(),q=function(e){var n=e.children,t=Object(w.useState)([{id:1,flavor:"Calabresa",typeDough:"Tradicional",size:"M\xe9dia",promotionalDay:"Domingo"},{id:2,flavor:"Mussarela",typeDough:"Tradicional",size:"M\xe9dia",promotionalDay:"Segunda"},{id:3,flavor:"Toscana",typeDough:"Tradicional",size:"M\xe9dia",promotionalDay:"Ter\xe7a"},{id:4,flavor:"Portuguesa",typeDough:"Tradicional",size:"M\xe9dia",promotionalDay:"Quarta"},{id:5,flavor:"Margherita",typeDough:"Tradicional",size:"M\xe9dia",promotionalDay:"Quita"},{id:6,flavor:"4 queijos",typeDough:"Tradicional",size:"M\xe9dia",promotionalDay:"Sexta"},{id:7,flavor:"Frango com catupiry",typeDough:"Tradicional",size:"M\xe9dia",promotionalDay:"S\xe1bado"}]),r=Object(D.a)(t,1)[0],o=Object(w.useState)([{text:"Escolha o tipo de massa:",type:"dough",options:["Tradicional","Nova-iorquina","Siciliana"]},{text:"Escolha o tamanho:",type:"size",options:["Pequena","M\xe9dia","Grande"]},{text:"Escolha o sabor:",type:"flavor",options:["4 queijos","Calabresa","Frango com catupiry","Margherita","Mussarela","Portuguesa","Toscana"]}]),a=Object(D.a)(o,1)[0],i=Object(w.useState)(),c=Object(D.a)(i,2),s=c[0],l=c[1];return Object(T.jsx)(C.Provider,{value:{carte:r,steps:a,order:s,setOrder:l},children:n})},P=t(2),F=t(3),L=Object(F.a)(r||(r=Object(P.a)(["\n    /* http://meyerweb.com/eric/tools/css/reset/ \n    v2.0 | 20110126\n    License: none (public domain)\n    */\n\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        font: inherit;\n        vertical-align: baseline;\n    }\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n    body {\n        line-height: 1;\n    }\n    ol, ul {\n        list-style: none;\n    }\n    blockquote, q {\n        quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: '';\n        content: none;\n    }\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n    * {\n        box-sizing: border-box;\n    }\n"]))),E=Object(F.a)(o||(o=Object(P.a)(['\n    :root {\n        --generic-color: #dcdcdc;\n        --header-color: #f7f7f7;\n        --primary-color: #ea1d2c;\n        --text-color: #3f3e3e;\n        --white: #fff;\n    }\n    body {\n        font-family: "SulSans", Helvetica, sans-serif;\n    }\n    a {\n        text-decoration: none;\n    }\n']))),B=t(10),I=t(4),A=F.b.main(a||(a=Object(P.a)(["\n    background-color: var(--primary-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n"]))),H=F.b.div(i||(i=Object(P.a)(["\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    padding: 0 15px;\n"]))),J=F.b.h1(c||(c=Object(P.a)(["\n    color: var(--white);\n    font-size: 2rem;\n    font-weight: bold;\n    text-align: center;\n    margin: 2rem 0;\n"]))),Q=F.b.h2(s||(s=Object(P.a)(["\n    color: var(--white);\n    font-size: 1rem;\n    font-weight: normal;\n    line-height: 2rem;\n    margin: 2rem 0;\n    text-align: center;\n"]))),G=function(e){var n=e.width,t=e.height,r=e.color;return Object(T.jsxs)("svg",{width:n,height:t,viewBox:"0 0 80 43",fill:r,xmlns:"http://www.w3.org/2000/svg",children:[Object(T.jsx)("path",{d:"M0 24.258h6.09L9.498 7.472h-6.09L0 24.258zM3.947 4.836h6.087L11.016 0H4.922l-.975 4.836zM8.498 28.985h6.09l3.695-18.167h4.444l.7-3.346h-4.482l.154-.776c.286-1.431.751-3.096 3.047-3.096 1.361 0 2.665.148 3.93.68L26.77.744A13.22 13.22 0 0 0 22.381 0c-4.894 0-8.265 2.914-9.499 7.472h-2.114l-.662 3.346h2.084L8.498 28.985z"}),Object(T.jsx)("path",{d:"M27.79 24.633c7.19 0 12.18-6.569 12.18-11.927 0-3.902-3.688-5.608-7.195-5.608-7.89 0-12.183 7.063-12.183 11.927 0 3.902 3.726 5.608 7.198 5.608zM47 24.633c7.192 0 12.181-6.569 12.181-11.927 0-3.902-3.696-5.608-7.199-5.608-7.886 0-12.186 7.063-12.186 11.927 0 3.902 3.73 5.608 7.202 5.608M69.082 24.258h6.055L80 .374h-6.09l-1.451 7.097a12.51 12.51 0 0 0-2.46-.281c-5.966 0-11.391 7.588-11.391 13.011 0 2.231 1.45 4.43 3.912 4.43 3.5 0 5.921-1.712 6.932-3.317h.378l-.748 2.944zM50.322 36.91c-4.454 3.792-10.408 5.739-16.879 5.337-8.16-.502-13.816-6.82-14.954-13.227h.387c1.836 4.091 6.304 7.869 11.911 8.49 5.475.604 12.184-1.87 15.866-5.402l-4.13-3.124 12.263.036-2.639 12.983-1.825-5.093z"})]})},N=t(20),V=F.b.div(l||(l=Object(P.a)(["\n    background-color: ",";\n    cursor: pointer;\n    display: inline-block;\n    padding: 1rem 2rem;\n    border: 1px solid var(--generic-color); \n    border-radius: 4px;\n    font-weight: bold;\n    color: ",";\n    text-align: center;\n    text-decoration: none;\n    text-transform: uppercase;\n\n    &:hover {\n        background-color: ",";\n    }\n"])),(function(e){return e.primary?"var(--primary-color)":"var(--white)"}),(function(e){return e.primary?"var(--white)":"var(--primary-color)"}),(function(e){return e.primary?"var(--primary-color)":"var(--generic-color)"})),_=function(e){var n=e.children;return Object(T.jsx)(V,Object(N.a)(Object(N.a)({},e),{},{children:n}))},R=function(){return Object(T.jsx)(A,{children:Object(T.jsxs)(H,{children:[Object(T.jsx)(G,{width:"180",height:"90",color:"var(--white)"}),Object(T.jsx)(J,{children:"Nunca foi t\xe3o f\xe1cil pedir pizza"}),Object(T.jsx)(B.b,{to:"/pedido",children:Object(T.jsx)(_,{children:"Monte sua pizza"})}),Object(T.jsx)(Q,{children:"Ganhe pontos de benef\xedcios escolhendo a pizza do dia."}),Object(T.jsx)(B.b,{to:"/pizza-do-dia",children:Object(T.jsx)(_,{children:"Ver recomenda\xe7\xe3o"})})]})})},U=F.b.section(d||(d=Object(P.a)([""]))),X=F.b.header(b||(b=Object(P.a)(["\n    align-items: center;\n    background-color: var(--header-color);\n    border: 1px solid var(--generic-color);\n    display: flex;\n    height: 80px;\n    justify-content: center;\n    padding: 0 30px;\n    position: fixed;\n    width: 100%;\n"]))),K=F.b.main(j||(j=Object(P.a)(["\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    min-height: 100vh;\n    padding: 100px 15px 20px;\n"]))),W=function(e){var n=e.children;return Object(T.jsxs)(U,{children:[Object(T.jsx)(X,{children:Object(T.jsx)(B.b,{to:"/",children:Object(T.jsx)(G,{width:"80",height:"43",color:"var(--primary-color)"})})}),Object(T.jsx)(K,{children:n})]})},Y=F.b.div(h||(h=Object(P.a)([""]))),Z=F.b.div(u||(u=Object(P.a)(["\n    background-color: var(--primary-color);\n    border: 1px solid var(--primary-color);\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    color: var(--white);\n    font-weight: bold;\n    line-height: 1.5rem;\n    padding: 18px;\n    text-align: center;\n"]))),$=F.b.div(p||(p=Object(P.a)(["\n    border: 1px solid var(--generic-color);\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    padding: 18px;\n"]))),ee=function(e){var n=e.title,t=e.children;return Object(T.jsxs)(Y,{children:[Object(T.jsx)(Z,{children:n}),Object(T.jsx)($,{children:t})]})},ne=F.b.div(x||(x=Object(P.a)(["\n    color: var(--text-color);\n    font-weight: bold;\n    margin-bottom: 20px;\n"]))),te=function(e){var n=e.children,t=e.title;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(ne,{children:t}),Object(T.jsx)("form",{children:n})]})},re=F.b.label(g||(g=Object(P.a)(['\n    border: 1px solid var(--generic-color);\n    border-radius: 4px;\n    color: var(--text-color);\n    display: block;\n    font-weight: bold;\n    margin-bottom: 10px;\n    padding: 10px;\n\n    &:hover, &[data-selected="true"] {\n        background-color: var(--primary-color);\n        color: var(--white);\n    }\n\n    input {\n        display: none;\n    }\n']))),oe=function(e){var n=e.checked,t=e.id,r=e.onChange,o=e.text,a=e.value;return Object(T.jsxs)(re,{htmlFor:t,"data-selected":n,children:[Object(T.jsx)("input",{id:t,type:"radio",checked:n,onChange:r,value:a}),o]})},ae=function(e){var n=e.currentStep,t=e.onChange,r=e.options,o=e.selected,a=e.textForm,i=e.totalSteps;return Object(T.jsx)(ee,{title:"Passo ".concat(n," de ").concat(i," para a sua pizza \ud83c\udf55"),children:Object(T.jsx)(te,{title:a,children:r.map((function(e,n){var r="option__".concat(n),a=o===e;return Object(T.jsx)(oe,{id:r,checked:a,text:e,value:e,onChange:t},r)}))})})},ie=function(){var e=Object(w.useContext)(C),n=Object(w.useState)(!1),t=Object(D.a)(n,2),r=t[0],o=t[1],a=e.steps,i=a.length,c=Object(w.useState)(0),s=Object(D.a)(c,2),l=s[0],d=s[1],b=l,j=a[b],h=j.options,u=j.text,p=j.type,x=Object(w.useState)(""),g=Object(D.a)(x,2),O=g[0],m=g[1],f=Object(w.useState)(null),v=Object(D.a)(f,2),y=v[0],z=v[1],M={};return Object(T.jsxs)(W,{children:[!r&&Object(T.jsx)(ae,{currentStep:l+1,onChange:function(e){var n=e.target.value;m(n),M[p]=n,z(0===b?M:Object.assign(y,M));var t=b+1;return t<i?d(t):o(!0)},options:h,selected:O,textForm:u,totalSteps:i}),r&&Object(T.jsxs)(ee,{title:"BOM APETITE!",children:[Object(T.jsxs)("p",{style:{textAlign:"center"},children:["Uma pizza ",y.size," de ",y.flavor," com massa ",y.dough,Object(T.jsx)("br",{}),"est\xe1 sendo preparada para voc\xea!"]}),Object(T.jsx)("br",{}),Object(T.jsx)("img",{src:"https://media.giphy.com/media/J3bafobsatIqc/source.gif",width:"100%",alt:"Pedido finalizado"})]})]})},ce=F.b.div(O||(O=Object(P.a)(["\n    color: var(--text-color);\n    text-align: center;\n"]))),se=F.b.h1(m||(m=Object(P.a)(["\n    font-size: 1.5rem;\n    font-weight: bold;\n    line-height: 1.8rem;\n    margin-bottom: 20px;\n\n    span {\n        color: var(--primary-color);\n        text-transform: uppercase;\n    }\n"]))),le=F.b.h2(f||(f=Object(P.a)(["\n    font-style: italic;\n    line-height: 1.25rem;\n    margin: 20px 0;\n"]))),de=function(){var e={0:function(){return"Domingo"},1:function(){return"Segunda"},2:function(){return"Ter\xe7a"},3:function(){return"Quarta"},4:function(){return"Quinta"},5:function(){return"Sexta"},6:function(){return"S\xe1bado"},default:function(){return"Dia da semana n\xe3o encontrado"}};return(e[(new Date).getDay()]||e.default)()},be=function(){var e=Object(w.useContext)(C).carte,n=Object(w.useState)(null),t=Object(D.a)(n,2),r=t[0],o=t[1],a=Object(w.useState)(null),i=Object(D.a)(a,2),c=i[0],s=i[1],l=Object(w.useState)(!1),d=Object(D.a)(l,2),b=d[0],j=d[1];return Object(w.useEffect)((function(){var n=de();o(n);var t=e.filter((function(e){return e.promotionalDay===n}))[0].flavor;s(t)}),[e]),Object(T.jsxs)(W,{children:[!b&&Object(T.jsxs)(ce,{children:[Object(T.jsxs)(se,{children:[Object(T.jsxs)("span",{children:[r," "]}),"combina com uma",Object(T.jsx)("br",{}),Object(T.jsxs)("span",{children:[" pizza de ",c]})]}),Object(T.jsx)("img",{src:"https://media.giphy.com/media/jn2iXu2HRpMuovBrrV/source.gif",width:"auto",height:"200",alt:"Pedido finalizado"}),Object(T.jsx)(le,{children:"Ganhe pontos de benef\xedcios escolhendo a pizza do dia."}),Object(T.jsx)(_,{primary:!0,onClick:function(){return j(!0)},children:"Confirmar pedido"})]}),b&&Object(T.jsxs)(ce,{children:[Object(T.jsx)(se,{children:Object(T.jsx)("span",{children:"BOM APETITE!"})}),Object(T.jsx)("img",{src:"https://media.giphy.com/media/J3bafobsatIqc/source.gif",width:"100%",height:"auto",alt:"Pedido finalizado"}),Object(T.jsx)(le,{children:"Al\xe9m de pontos de benef\xedcios, h\xe1 uma pizza maravilhosa sendo preparada para voc\xea! ;)"})]})]})},je=F.b.section(v||(v=Object(P.a)(["\n    color: var(--text-color);\n    text-align: center;\n"]))),he=F.b.h1(y||(y=Object(P.a)(["\n    font-size: 3rem;\n    line-height: 3rem;\n    margin-bottom: 20px;\n"]))),ue=F.b.div(z||(z=Object(P.a)(["\n    font-size: 1.25rem;\n    line-height: 25px;\n    margin-bottom: 20px;\n"]))),pe=function(){return Object(T.jsx)(W,{children:Object(T.jsxs)(je,{children:[Object(T.jsx)(he,{children:"Puxa, esta p\xe1gina n\xe3o existe"}),Object(T.jsxs)(ue,{children:["Confira se voc\xea digitou algo errado.",Object(T.jsx)("br",{}),"Talvez o endere\xe7o n\xe3o esteja mais dispon\xedvel na web."]}),Object(T.jsx)(B.b,{to:"/",children:Object(T.jsx)(_,{primary:!0,children:"ir para o in\xedcio"})})]})})},xe=function(){return Object(T.jsxs)(q,{children:[Object(T.jsx)(L,{}),Object(T.jsx)(E,{}),Object(T.jsx)(B.a,{children:Object(T.jsxs)(I.c,{children:[Object(T.jsx)(I.a,{exact:!0,path:"/",children:Object(T.jsx)(R,{})}),Object(T.jsx)(I.a,{path:"/pedido",children:Object(T.jsx)(ie,{})}),Object(T.jsx)(I.a,{path:"/pizza-do-dia",children:Object(T.jsx)(be,{})}),Object(T.jsx)(I.a,{path:"*",children:Object(T.jsx)(pe,{})})]})})]})},ge=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),a(e),i(e)}))};k.a.render(Object(T.jsx)(M.a.StrictMode,{children:Object(T.jsx)(xe,{})}),document.getElementById("root")),ge()}},[[36,1,2]]]);
//# sourceMappingURL=main.7543d16e.chunk.js.map