(this["webpackJsonptodo-list-react-redux"]=this["webpackJsonptodo-list-react-redux"]||[]).push([[0],{31:function(t,e,a){},37:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(11),o=a.n(c),r=a(21),i=a(3),d=a(14),u=(a(31),a(1));var j=Object(i.b)(null,(function(t){return{removeTask:function(e){return t(function(t){return{type:"REMOVE_TASK",payload:t}}(e))},finishTask:function(e){return t(function(t){return{type:"FINISH_TASK",payload:t}}(e))},prepareToUpdateTask:function(e){return t(function(t){return{type:"PREPARE_TO_UPDATE_TASK",payload:t}}(e))}}}))((function(t){var e=t.task,a=t.removeTask,n=t.finishTask,s=t.prepareToUpdateTask;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"task-card-textTask",children:e.textTask}),Object(u.jsx)("button",{className:"task-card-button",type:"button",onClick:function(){return n(e)},children:"Finalizar"}),Object(u.jsx)("button",{className:"task-card-button",type:"button",onClick:function(){return a(e.id)},children:"Deletar"}),Object(u.jsx)("button",{className:"task-card-button",type:"button",onClick:function(){return s(e)},children:"Atualizar"})]})}));var l=Object(i.b)((function(t){return{tasksList:t.todolist.tasksTodo}}))((function(t){var e=t.tasksList;return Object(u.jsx)("div",{children:e.map((function(t){return Object(u.jsx)(j,{task:t})}))})}));a(8);var b=Object(i.b)(null,(function(t){return{addTask:function(e){return t({type:"ADD_TASK",payload:e})}}}))((function(t){var e=t.addTask,a=Object(n.useState)(""),s=Object(d.a)(a,2),c=s[0],o=s[1];return Object(u.jsx)("div",{className:"tasks-to-do-container",children:Object(u.jsxs)("div",{className:"tasks-to-do-context",children:[Object(u.jsxs)("div",{className:"tasks-to-do-header",children:[Object(u.jsx)("h3",{children:"Tasks To-Do"}),Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){return o(t.target.value)},className:"task-to-do-input"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(){return e(c),void o("")},className:"tasks-to-do-button-add-task",children:"Acrescentar Tarefa"})]}),Object(u.jsx)("div",{className:"tasks-to-do-list",children:Object(u.jsx)(l,{})})]})})}));var k=function(t){var e=t.task;return Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:e.textTask})})};var O=Object(i.b)((function(t){return{tasksDone:t.todolist.tasksDone}}))((function(t){var e=t.tasksDone;return Object(u.jsx)("div",{children:e.map((function(t){return Object(u.jsx)(k,{task:t})}))})}));var T=function(){return Object(u.jsx)("div",{className:"tasks-to-do-container",children:Object(u.jsx)("div",{className:"tasks-to-do-context",children:Object(u.jsxs)("div",{className:"tasks-to-do-header",children:[Object(u.jsx)("h3",{children:"Tasks Done"}),Object(u.jsx)(O,{})]})})})};var p=Object(i.b)((function(t){return{taskToUpdate:t.todolist.taskToUpdate}}),(function(t){return{updateTask:function(e){return t(function(t){return{type:"UPDATE_TASK",payload:t}}(e))}}}))((function(t){var e=t.taskToUpdate,a=t.updateTask,s=Object(n.useState)(e),c=Object(d.a)(s,2),o=c[0],r=c[1];return Object(u.jsx)("div",{className:"tasks-to-do-container",children:Object(u.jsx)("div",{className:"tasks-to-do-context",children:Object(u.jsxs)("div",{className:"tasks-to-do-header",children:[Object(u.jsx)("h3",{children:"Task para Atualizar"}),Object(u.jsx)("p",{children:e.textTask}),Object(u.jsx)("input",{type:"text",onChange:function(t){return function(t){var a={id:e.id,textTask:t};r(a)}(t.target.value)},className:"task-to-do-input"}),Object(u.jsx)("button",{className:"tasks-to-do-button-update-task",onClick:function(){return function(){var t={id:e.id,textTask:o.textTask};a(t)}()},children:"Atualizar Tarefa"})]})})})}));var x=Object(i.b)((function(t){return{taskBeingUpdated:t.todolist.taskBeingUpdated}}))((function(t){var e=t.taskBeingUpdated;return Object(u.jsxs)("div",{className:"home-container",children:[e?Object(u.jsx)(p,{}):Object(u.jsx)(b,{}),Object(u.jsx)(T,{})]})})),f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),n(t),s(t),c(t),o(t)}))},h=a(13),v=a(15),m=a(6),_={tasksTodo:[],tasksDone:[],taskToUpdate:{},taskBeingUpdated:!1},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TASK":var a={id:t.tasksTodo.length,textTask:e.payload};return Object(m.a)(Object(m.a)({},t),{},{tasksTodo:[].concat(Object(v.a)(t.tasksTodo),[a])});case"REMOVE_TASK":var n=t.tasksTodo.filter((function(t){return t.id!=e.payload}));return Object(m.a)(Object(m.a)({},t),{},{tasksTodo:n});case"FINISH_TASK":var s=t.tasksTodo.filter((function(t){return t.id!=e.payload.id}));return{tasksTodo:s,tasksDone:[].concat(Object(v.a)(t.tasksDone),[e.payload])};case"PREPARE_TO_UPDATE_TASK":return Object(m.a)(Object(m.a)({},t),{},{taskToUpdate:e.payload,taskBeingUpdated:!0});case"UPDATE_TASK":var c={id:e.payload.id,textTask:e.payload.textTask},o=null;t.tasksTodo.forEach((function(t,a){t.id===e.payload.id&&(o=a)}));var r=Object(v.a)(t.tasksTodo);return r[o]=c,Object(m.a)(Object(m.a)({},t),{},{tasksTodo:r,taskToUpdate:{},taskBeingUpdated:!1});default:return t}},N=Object(h.a)({todolist:y}),A=Object(h.b)(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(u.jsx)(i.a,{store:A,children:Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(r.a,{basename:"/todo-list-react-redux",children:Object(u.jsx)(x,{})})})}),document.getElementById("root")),f()},8:function(t,e,a){}},[[37,1,2]]]);
//# sourceMappingURL=main.e61d2b52.chunk.js.map