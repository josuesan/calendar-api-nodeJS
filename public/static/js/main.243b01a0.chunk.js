(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=a(8),s=a(35),u=a(9),i=a(11),m=a.n(i),d=a(20),p="[ui] Open modal",f="[ui] Close modal",v="[calendar] : Add set active",b="[calendar] : Add new event",E="[calendar] : Clear active event",h="[calendar] : Event updated",g="[calendar] : Event deleted",O="[calendar] :  Events loaded",j="[calendar] :  Events clean",y="[auth] Finish checking login state",w="[auth] Login",N="[auth] Logout",k="https://node-calendar-app-api.herokuapp.com/api",x=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(k,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},S=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n=localStorage.getItem("token")||"",r="".concat(k,"/").concat(e);return"GET"===a?fetch(r,{method:a,headers:{"x-token":n}}):fetch(r,{method:a,headers:{"Content-type":"application/json","x-token":n},body:JSON.stringify(t)})},C=a(13),D=a.n(C),T=a(4),P=a(16),I=a.n(P),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{start:I()(e.start).toDate(),end:I()(e.end).toDate()})}))},R=function(e){return{type:b,payload:e}},_=function(){return{type:E}},G=function(e){return{type:h,payload:e}},V=function(){return{type:g}},H=function(){return{type:y}},J=function(e){return{type:w,payload:e}},L=function(){return function(e){localStorage.clear(),e(M()),e({type:j})}},M=function(){return{type:N}},F=a(14),U=(a(77),a(53)),X=(a(78),function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null,a),r.a.createElement("span",null,"- ",n.name))}),q=a(24),z=a(48),B=a.n(z),W=a(50),K=a.n(W),Q=function(){return{type:p}},Y=(a(112),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}});K.a.setAppElement("#root");var Z=I()().minutes(0).seconds(0).add(1,"hours"),$=Z.clone().add(1,"hours"),ee={title:"",notes:"",start:Z.toDate(),end:$.toDate()},te=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(Z.toDate()),o=Object(F.a)(c,2),s=o[0],u=o[1],i=Object(n.useState)($.toDate()),p=Object(F.a)(i,2),v=p[0],b=p[1],E=Object(n.useState)(!0),h=Object(F.a)(E,2),g=h[0],O=h[1],j=Object(n.useState)(ee),y=Object(F.a)(j,2),w=y[0],N=y[1],k=w.notes,x=w.title,C=w.start,P=w.end;Object(n.useEffect)((function(){N(t||ee)}),[t]);var A=function(e){var t=e.target;N(Object(T.a)(Object(T.a)({},w),{},Object(q.a)({},t.name,t.value)))},V=function(){a({type:f}),a(_()),N(ee)};return r.a.createElement(K.a,{isOpen:e,onRequestClose:V,style:Y,className:"modal",overlayClassName:"modal-bg",closeTimeoutMS:200},t?r.a.createElement("h1",null,"Edit event"):r.a.createElement("h1",null,"New event"),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n,r=I()(C),c=I()(P);return r.isSameOrAfter(c)?D.a.fire("Error","The end date should be greater than start date.","error"):x.trim().length<2?O(!1):(a(t?(n=w,function(){var e=Object(d.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("events/".concat(n.id),n,"PUT");case 2:return a=e.sent,e.next=5,a.json();case 5:if((r=e.sent).ok){e.next=8;break}return e.abrupt("return",D.a.fire("Error",r.msg,"error"));case 8:t(G(n));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a,n){var r,c,o,l,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,S("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:if((s=t.sent).ok){t.next=10;break}return t.abrupt("return",D.a.fire("Error",s.msg,"error"));case 10:e.id=s.event.id,e.user={_id:c,name:o},a(R(e)),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,a){return t.apply(this,arguments)}}()}(w)),O(!0),void V())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date & hour to start"),r.a.createElement(B.a,{onChange:function(e){u(e),N(Object(T.a)(Object(T.a)({},w),{},{start:e}))},value:s,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date & hour to end"),r.a.createElement(B.a,{onChange:function(e){b(e),N(Object(T.a)(Object(T.a)({},w),{},{end:e}))},value:v,className:"form-control",minDate:s})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Title & notes"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!g&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:x,onChange:A,autoComplete:"off"}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Short description")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",value:k,onChange:A,name:"notes"}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Additional Information")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},ae=function(){var e=Object(l.c)((function(e){return e.auth})).name,t=Object(l.b)();return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},e),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){t(L())}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},ne={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},re=(a(113),function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(Q())}},r.a.createElement("i",{className:"fas fa-plus"}))}),ce=(a(114),function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.next=3,S("events/".concat(n),{},"DELETE");case 3:return r=e.sent,e.next=6,r.json();case 6:if((c=e.sent).ok){e.next=9;break}return e.abrupt("return",D.a.fire("Error",c.msg,"error"));case 9:t(V());case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Delete event"))});I.a.locale("es");var oe=Object(U.b)(I.a),le=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.calendar})),a=t.events,c=t.activeEvent,o=Object(l.c)((function(e){return e.auth})).uid,s=Object(n.useState)(localStorage.getItem("lastView")||"month"),u=Object(F.a)(s,2),i=u[0],p=u[1];return Object(n.useEffect)((function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("events");case 2:return a=e.sent,e.next=5,a.json();case 5:if((n=e.sent).ok){e.next=8;break}return e.abrupt("return",D.a.fire("Error",n.msg,"error"));case 8:r=A(n.events),t({type:O,payload:r});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement("div",{className:"calendar-page"},r.a.createElement(ae,null),r.a.createElement(U.a,{localizer:oe,events:a,startAccessor:"start",endAccessor:"end",view:i,messages:ne,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:o===e.user._id?"#367cf7":"#465660",borderRadius:"0",opacity:.8,display:"block",color:"white"}}},components:{event:X},onSelectSlot:function(){e(_())},selectable:!0,onSelectEvent:function(t){e({type:v,payload:t})},onDoubleClickEvent:function(){e(Q())},onView:function(e){localStorage.setItem("lastView",e),p(e)}}),c&&r.a.createElement(ce,null),r.a.createElement(re,null),r.a.createElement(te,null))},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(F.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(T.a)(Object(T.a)({},r),{},Object(q.a)({},t.name,t.value)))};return[r,l,o]},ue=(a(115),function(){var e=Object(l.b)(),t=se({lEmail:"",lPassword:""}),a=Object(F.a)(t,2),n=a[0],c=a[1],o=se({rName:"",rEmail:"",rPassword:"",rPasswordRepeat:""}),s=Object(F.a)(o,2),u=s[0],i=s[1],p=n.lEmail,f=n.lPassword,v=u.rName,b=u.rEmail,E=u.rPassword,h=u.rPasswordRepeat;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=p,n=f,function(){var e=Object(d.a)(m.a.mark((function e(t){var r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:if((c=e.sent).ok){e.next=8;break}return e.abrupt("return",D.a.fire("Error",c.msg,"error"));case 8:localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(J({uid:c.uid,name:c.name}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"lEmail",placeholder:"Email",onChange:c,value:p})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",name:"lPassword",placeholder:"Password",onChange:c,value:f})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),E!==h)return D.a.fire("Error","The passwords dont match","error");var a,n,r;e((a=v,n=b,r=E,function(){var e=Object(d.a)(m.a.mark((function e(t){var c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("auth/register",{name:a,email:n,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:if((o=e.sent).ok){e.next=8;break}return e.abrupt("return",D.a.fire("Error",o.msg,"error"));case 8:localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(J({uid:o.uid,name:o.name}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",name:"rName",value:v,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",name:"rEmail",value:b,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",name:"rPassword",value:E,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm password",name:"rPasswordRepeat",value:h,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit"}))))))}),ie=a(39),me=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ie.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",n.location.pathname),r.a.createElement(u.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(u.a,{to:"/login"})}}))},de=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ie.a)(e,["isAuthenticated","component"]);return console.log(t),r.a.createElement(u.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(u.a,{to:"/"}):r.a.createElement(a,e)}}))},pe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:if((n=e.sent).ok){e.next=8;break}return e.abrupt("return",t(H()));case 8:localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(J({uid:n.uid,name:n.name}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h1",null,"Waiting.."):r.a.createElement(s.a,null,r.a.createElement(u.d,null,r.a.createElement(de,{isAuthenticated:!!c,path:"/login",component:ue}),r.a.createElement(me,{isAuthenticated:!!c,path:"/",component:le}),r.a.createElement(u.a,{to:"/login"})))},fe=a(21),ve=a(66),be={modalOpen:!1},Ee=a(54),he={events:[],activeEvent:null},ge={checking:!0},Oe=Object(fe.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(T.a)(Object(T.a)({},e),{},{modalOpen:!0});case f:return Object(T.a)(Object(T.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(T.a)(Object(T.a)({},e),{},{events:[].concat(Object(Ee.a)(e.events),[t.payload])});case v:return Object(T.a)(Object(T.a)({},e),{},{activeEvent:t.payload});case E:return Object(T.a)(Object(T.a)({},e),{},{activeEvent:null});case h:return Object(T.a)(Object(T.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case g:return Object(T.a)(Object(T.a)({},e),{},{activeEvent:null,events:e.events.filter((function(t){return t.id!==e.activeEvent.id}))});case O:return Object(T.a)(Object(T.a)({},e),{},{events:Object(Ee.a)(t.payload)});case j:return Object(T.a)({},he);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(T.a)(Object(T.a)(Object(T.a)({},e),t.payload),{},{checking:!1});case y:return Object(T.a)(Object(T.a)({},e),{},{checking:!1});case N:return{checking:!1};default:return e}}}),je="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.d,ye=Object(fe.e)(Oe,je(Object(fe.a)(ve.a))),we=function(){return r.a.createElement(l.a,{store:ye},r.a.createElement(pe,null))};a(117);o.a.render(r.a.createElement(we,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(119)}},[[67,1,2]]]);
//# sourceMappingURL=main.243b01a0.chunk.js.map