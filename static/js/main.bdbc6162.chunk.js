(this["webpackJsonptasks-list-react"]=this["webpackJsonptasks-list-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),s=(n(13),n(7)),i=n(3),l=n(2),u=function(e){var t=e.title;return o.a.createElement("header",null,o.a.createElement("h1",null,t))},m=(n(14),function(e){var t=e.addNewTask,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1];return o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(r.trim()),s("")}},o.a.createElement("input",{className:"form__input",placeholder:"Co jest do zrobienia?",value:r,onChange:function(e){return s(e.target.value)}}),o.a.createElement("button",{className:"form__button"},"Dodaj zadanie"))}),d=(n(15),function(e){var t=e.tasks,n=e.hideDone,a=e.removeTask,c=e.toggleTaskDone;return o.a.createElement("ul",{className:"tasks"},t.map((function(e){return o.a.createElement("li",{className:"tasks__listItem ".concat(e.done&&n?"tasks__listItem--hidden":""),key:e.id},o.a.createElement("button",{className:"tasks__button tasks__button--done",onClick:function(){return c(e.id)}},e.done?"\u2714":""),o.a.createElement("span",{className:"".concat(e.done?"tasks__listItemText--done":"tasks__listItemText")},e.content),o.a.createElement("button",{className:"tasks__button tasks__button--remove",onClick:function(){return a(e.id)}},"\u2716"))})))}),f=(n(16),function(e){var t=e.tasks,n=e.hideDone,a=e.toggleHideDone,c=e.setAllDone;return o.a.createElement("div",{className:"buttons"},t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"buttons__button",onClick:a},n?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement("button",{className:"buttons__button",disabled:t.every((function(e){return e.done})),onClick:c},"Uko\u0144cz wszystkie")))}),k=(n(17),function(e){var t=e.title,n=e.extraHeaderContent,a=e.body;return o.a.createElement("section",{className:"section"},o.a.createElement("header",{className:"section__header"},o.a.createElement("h2",{className:"section__title"},t),n),o.a.createElement("div",{className:"section__body"},a))}),b=(n(18),function(e){var t=e.children;return o.a.createElement("main",{className:"container"},t)}),E=function(){var e=localStorage.getItem("tasks");return e?JSON.parse(e):[]};var _=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(E),_=Object(l.a)(r,2),h=_[0],g=_[1];return Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(h))}),[h]),o.a.createElement(b,null,o.a.createElement(u,{title:"Lista zada\u0144"}),o.a.createElement(k,{title:"Dodaj nowe zadanie",body:o.a.createElement(m,{addNewTask:function(e){g((function(t){return[].concat(Object(s.a)(t),[{id:t.length?t[t.length-1].id+1:1,content:e,done:!1}])}))}})}),o.a.createElement(k,{title:"Lista zada\u0144",extraHeaderContent:o.a.createElement(f,{tasks:h,hideDone:n,toggleHideDone:function(){c((function(e){return!e}))},setAllDone:function(){g((function(e){return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{done:!0})}))}))}}),body:o.a.createElement(d,{tasks:h,hideDone:n,removeTask:function(e){g((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleTaskDone:function(e){g((function(t){return t.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{done:!t.done}):t}))}))}})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.bdbc6162.chunk.js.map