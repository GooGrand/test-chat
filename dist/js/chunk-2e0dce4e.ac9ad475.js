(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e0dce4e"],{a20a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialog "},[t.loading?a("Loader"):a("div",{staticClass:"dialog-window"},[t.chat.parts[0]?a("div",t._l(t.chat.parts,(function(e){return a("Message",{key:e.id,attrs:{part:e,chat:t.chat}})})),1):a("p",[t._v("There is no messages yet")])]),a("div",{staticClass:"dialog-form"},[a("CreateMessage",{attrs:{chat:t.chat}})],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"message",class:{owner:t.isOwner}},[a("small",[a("strong",[t._v(t._s(t.part.author))])]),a("p",[t._v(t._s(t.part.text))]),a("small",[t._v(t._s(t.part.created))])])])},n=[],c={name:"Message",props:{part:{type:Object},chat:{type:Object,required:!0},loading:{type:Boolean,default:!1}},computed:{isOwner:function(t){return"Mario"!=t.author}}},o=c,l=(a("c2d8"),a("2877")),d=Object(l["a"])(o,r,n,!1,null,"8c0c0e46",null),u=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("form",{attrs:{action:"submit"},on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[a("div",{staticClass:"input-field col s10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",id:"text",placeholder:"Write a message...",disabled:t.loading,required:""},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),a("button",{staticClass:"btn waves-effect waves-light",attrs:{type:"submit",disabled:t.loading}},[a("i",{staticClass:"material-icons"},[t._v("send")])])])])},f=[],g={name:"createMessage",props:{chat:{type:Object}},data:function(){return{text:"",author:"",created:"",loading:!1}},methods:{dateNow:function(){var t=new Date,e=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),a=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),s=e+" "+a;return this.created=s},sendMessage:function(){var t=this;this.loading=!0,setTimeout((function(){t.$store.dispatch("createNewMessage",{id:t.chat.id,message:{messageId:Date.now(),text:t.text,author:"Alex",created:t.dateNow()}}),t.text="",t.loading=!1}),3e3)}}},v=g,h=Object(l["a"])(v,p,f,!1,null,"17cbcb39",null),m=h.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"preloader-wrapper big active"},[a("div",{staticClass:"spinner-layer spinner-blue-only"},[a("div",{staticClass:"circle-clipper left"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"gap-patch"},[a("div",{staticClass:"circle"})]),a("div",{staticClass:"circle-clipper right"},[a("div",{staticClass:"circle"})])])])}],_={},C=Object(l["a"])(_,b,w,!1,null,null,null),x=C.exports,y={name:"Dialog",props:{loading:{type:Boolean,default:!1}},computed:{chat:function(){return this.$store.getters.chatById(+this.$route.params.id)}},components:{Message:u,CreateMessage:m,Loader:x},created:function(){var t=this;this.$router.beforeEach((function(e,a,s){t.loading=!0,setTimeout(s,1e3)})),this.$router.afterEach((function(e,a){t.loading=!1}))}},M=y,$=(a("f2da"),Object(l["a"])(M,s,i,!1,null,"730bffdc",null));e["default"]=$.exports},b348:function(t,e,a){},c2d8:function(t,e,a){"use strict";var s=a("c42b"),i=a.n(s);i.a},c42b:function(t,e,a){},f2da:function(t,e,a){"use strict";var s=a("b348"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-2e0dce4e.ac9ad475.js.map