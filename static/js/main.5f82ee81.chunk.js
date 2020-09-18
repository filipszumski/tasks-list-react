(this["webpackJsonptasks-list-react"]=this["webpackJsonptasks-list-react"]||[]).push([[0],{16:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(11),c=t.n(a),i=t(15),u=t(3),l=t(4),s=t(2),d=t(1);function f(){var n=Object(s.a)(["\n    align-self: center;\n    padding: 10px;\n    border-radius: 5px;\n    border: none;\n    background: ",";\n    color: ",";\n    transition: background 0.5s, transform 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n        transform: scale(1.05);\n    }\n    &:active {\n        filter: brightness(120%);\n        transform: scale(1.05);\n    }\n"]);return f=function(){return n},n}function b(){var n=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n"]);return b=function(){return n},n}var m=d.d.header(b()),g=d.d.button(f(),(function(n){return n.theme.colors.sectionBackground}),(function(n){return n.theme.colors.button})),h=function(n){var e=n.title,t=n.toggleTheme;return o.a.createElement(m,null,o.a.createElement("h1",null,e),o.a.createElement(g,{onClick:function(){return t()}},"Zmie\u0144 t\u0142o"))};function p(){var n=Object(s.a)(["\n    padding: 10px;\n    background-color: ",";\n    color: ",";\n    border: none;\n    border-radius: 5px;\n    transition: background 0.5s, transform 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n        transform: scale(1.05);\n    }\n    &:active {\n        filter: brightness(110%);\n        transform: scale(1.05);\n    }\n"]);return p=function(){return n},n}function v(){var n=Object(s.a)(["\n    padding: 10px;\n    border: 1px solid ",";\n    border-radius: 5px;\n    background-color: ",";\n    color: ",";\n"]);return v=function(){return n},n}function k(){var n=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 10px;\n\n    @media (max-width: ",") {\n        grid-template-columns: 1fr\n    }\n"]);return k=function(){return n},n}var x=d.d.form(k(),(function(n){return n.theme.breakpoints.mobile})),j=d.d.input(v(),(function(n){return n.theme.colors.frame}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.text})),O=d.d.button(p(),(function(n){return n.theme.colors.button}),(function(n){return n.theme.colors.buttonInside})),E=function(n){var e=n.addNewTask,t=Object(r.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1];return o.a.createElement(x,{onSubmit:function(n){n.preventDefault(),e(c.trim()),i("")}},o.a.createElement(j,{placeholder:"Co jest do zrobienia?",value:c,onChange:function(n){return i(n.target.value)},required:!0}),o.a.createElement(O,null,"Dodaj zadanie"))};function w(){var n=Object(s.a)(["\n        background-color: ",";\n        transition: background 0.5s;\n\n    &:hover {\n        filter: brightness(150%);\n    }\n    &:active {\n        filter: brightness(120%);\n    }\n    "]);return w=function(){return n},n}function y(){var n=Object(s.a)(["\n        background-color: ",";\n        transition: background 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n    }\n    &:active {\n        filter: brightness(120%);\n    }\n    "]);return y=function(){return n},n}function S(){var n=Object(s.a)(["\n    border: none;\n    color: ",";\n    width: 30px;\n    height: 30px;\n\n    ","\n\n    ","\n"]);return S=function(){return n},n}function D(){var n=Object(s.a)(["\n        overflow-wrap: anywhere;\n        text-decoration: line-through;\n    "]);return D=function(){return n},n}function C(){var n=Object(s.a)(["\n    overflow-wrap: anywhere;\n\n    ","\n"]);return C=function(){return n},n}function z(){var n=Object(s.a)(["\n        display: none;\n    "]);return z=function(){return n},n}function I(){var n=Object(s.a)(["\n    padding: 10px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    align-items: center;\n    border-bottom: 2px solid ",";\n    transition: background 0.5s;\n  \n    ","\n"]);return I=function(){return n},n}function T(){var n=Object(s.a)(["\n    list-style-type: none;\n    padding: 0px;\n    margin: 0px;\n"]);return T=function(){return n},n}var B=d.d.ul(T()),J=d.d.li(I(),(function(n){return n.theme.colors.background}),(function(n){return n.hidden&&Object(d.c)(z())})),N=d.d.span(C(),(function(n){return n.done&&Object(d.c)(D())})),A=d.d.button(S(),(function(n){return n.theme.colors.buttonInside}),(function(n){return n.done&&Object(d.c)(y(),(function(n){return n.theme.colors.ckeck}))}),(function(n){return n.remove&&Object(d.c)(w(),(function(n){return n.theme.colors.remove}))})),H=function(n){var e=n.tasks,t=n.hideDone,r=n.removeTask,a=n.toggleTaskDone;return o.a.createElement(B,null,e.map((function(n){return o.a.createElement(J,{hidden:n.done&&t,key:n.id},o.a.createElement(A,{done:!0,onClick:function(){return a(n.id)}},n.done?"\u2714":""),o.a.createElement(N,{done:n.done},n.content),o.a.createElement(A,{remove:!0,onClick:function(){return r(n.id)}},"\u2716"))})))};function F(){var n=Object(s.a)(["\n    margin-left: 10px;\n    background: transparent;\n    border: none;\n    color: ",";\n\n    @media (max-width: ","px) {\n        flex-basis: 100%;\n        margin: 20px 0px 0px 0px;\n    }\n\n    &:hover {\n        filter: brightness(110%)\n    }\n    &:active {\n        filter: brightness(120%)\n    }\n    &:disabled {\n        color: ",";\n    }\n"]);return F=function(){return n},n}function L(){var n=Object(s.a)(["\n    display: flex;\n    flex-wrap: wrap;\n\n    @media (max-width: ","px) {\n        flex-basis: 100%;\n    }\n"]);return L=function(){return n},n}var M=d.d.div(L(),(function(n){return n.theme.breakpoints.mobile})),U=d.d.button(F(),(function(n){return n.theme.colors.button}),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.theme.colors.disabled})),W=function(n){var e=n.tasks,t=n.hideDone,r=n.toggleHideDone,a=n.setAllDone;return o.a.createElement(M,null,e.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(U,{onClick:r},t?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement(U,{disabled:e.every((function(n){return n.done})),onClick:a},"Uko\u0144cz wszystkie")))};function q(){var n=Object(s.a)(["\n    padding: 20px;\n"]);return q=function(){return n},n}function P(){var n=Object(s.a)(["\n    margin: 0px;\n    font-size: 20px;\n"]);return P=function(){return n},n}function Z(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: 20px;\n    border-bottom: 3px solid ",";\n"]);return Z=function(){return n},n}function $(){var n=Object(s.a)(["\n    background-color: ",";\n    margin: 10px 0px;\n"]);return $=function(){return n},n}var G=d.d.section($(),(function(n){return n.theme.colors.sectionBackground})),K=d.d.header(Z(),(function(n){return n.theme.colors.background})),Q=d.d.h2(P()),R=d.d.div(q()),V=function(n){var e=n.title,t=n.extraHeaderContent,r=n.body;return o.a.createElement(G,null,o.a.createElement(K,null,o.a.createElement(Q,null,e),t),o.a.createElement(R,null,r))};function X(){var n=Object(s.a)(["\n    max-width: 900px;\n    padding: 20px;\n    margin: 0 auto;\n"]);return X=function(){return n},n}var Y=d.d.main(X()),_=function(n){var e=n.children;return o.a.createElement(Y,null,e)};function nn(){var n=Object(s.a)(["\n    html {\n    box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n    box-sizing: inherit;\n    }\n\n    body {\n    font-family: ",";\n    background-color: ",";\n    color: ",";\n    }\n"]);return nn=function(){return n},n}var en=Object(d.b)(nn(),(function(n){return n.theme.fonts.primaryFont}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.text})),tn={colors:{background:"#eee",sectionBackground:"white",button:"hsl(221, 79%, 55%)",disabled:"gray",frame:"#C9C9C9",text:"black",ckeck:"green",buttonInside:"white",remove:"#E81111"},breakpoints:{mobile:540},fonts:{primaryFont:"'Montserrat', sans-serif"}},rn=Object(u.a)(Object(u.a)({},tn),{},{colors:{background:"#23232A",sectionBackground:"#333342",button:"#10A278",disabled:"black",frame:"#333342",text:"white",ckeck:"green",buttonInside:"white",remove:"#E81111"}}),on=function(){var n=localStorage.getItem("tasks");return n?JSON.parse(n):[]},an=function(){var n=localStorage.getItem("theme");return n?JSON.parse(n):tn};var cn=function(){var n=Object(r.useState)(!1),e=Object(l.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)(on),s=Object(l.a)(c,2),f=s[0],b=s[1],m=Object(r.useState)(an),g=Object(l.a)(m,2),p=g[0],v=g[1];return Object(r.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(f))}),[f]),Object(r.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(p))}),[p]),o.a.createElement(d.a,{theme:p},o.a.createElement(en,null),o.a.createElement(_,null,o.a.createElement(h,{title:"Lista zada\u0144",toggleTheme:function(){v((function(n){return n===tn?rn:tn}))}}),o.a.createElement(V,{title:"Dodaj nowe zadanie",body:o.a.createElement(E,{addNewTask:function(n){b((function(e){return[].concat(Object(i.a)(e),[{id:e.length?e[e.length-1].id+1:1,content:n,done:!1}])}))}})}),o.a.createElement(V,{title:"Lista zada\u0144",extraHeaderContent:o.a.createElement(W,{tasks:f,hideDone:t,toggleHideDone:function(){a((function(n){return!n}))},setAllDone:function(){b((function(n){return n.map((function(n){return Object(u.a)(Object(u.a)({},n),{},{done:!0})}))}))}}),body:o.a.createElement(H,{tasks:f,hideDone:t,removeTask:function(n){b((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){b((function(e){return e.map((function(e){return e.id===n?Object(u.a)(Object(u.a)({},e),{},{done:!e.done}):e}))}))}})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(cn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.5f82ee81.chunk.js.map