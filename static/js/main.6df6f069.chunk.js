(this.webpackJsonpfrontEnd=this.webpackJsonpfrontEnd||[]).push([[0],{42:function(e,t,a){},44:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(46),s=a.n(r),o=a(3),i=a(6),u=a(4),j=a.n(u),l=a(5),b=a.n(l),d=a(7),p=a(27),h=a(14),m=(a(42),a(1));function O(e){var t=e.setToken,a=e.setAdmin,c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],u=r[1],l=Object(n.useState)(""),O=Object(o.a)(l,2),x=O[0],f=O[1],g=Object(d.useHistory)(),v=function(){var e=Object(i.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat("https://games-hiji-backend.herokuapp.com","/login"),{email:s,password:x});case 3:n=e.sent,t(n.data.token),a(n.data.payload.admin),console.log(n.data),localStorage.setItem("token",JSON.stringify(n.data.token)),g.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("err");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"loginbox",children:[Object(m.jsx)("h1",{children:" LOGIN "}),Object(m.jsx)(h.b,{className:"log"}),Object(m.jsx)("input",{onChange:function(e){!function(e){u(e.target.value)}(e)},type:"text",placeholder:"email"}),Object(m.jsx)("br",{}),Object(m.jsx)(p.a,{className:"log"}),Object(m.jsx)("input",{onChange:function(e){!function(e){f(e.target.value)}(e)},type:"password",placeholder:"pass"}),Object(m.jsx)("button",{onClick:function(){v()},children:"logIn"})]})}var x=a(49);function f(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),u=s[0],l=s[1],d=Object(n.useState)(""),O=Object(o.a)(d,2),f=O[0],g=O[1],v=Object(x.useHistory)(),k=function(){var e=Object(i.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("".concat("https://games-hiji-backend.herokuapp.com","/signUp"),{name:a,email:u,password:f});case 2:201===e.sent.status&&v.push("/logIn");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"loginbox",children:[Object(m.jsx)("h1",{children:"SIGN UP"}),Object(m.jsx)(h.b,{className:"log"}),Object(m.jsx)("input",{onChange:function(e){!function(e){c(e.target.value)}(e)},type:"text",placeholder:"name"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(h.b,{className:"log"}),Object(m.jsx)("input",{onChange:function(e){!function(e){l(e.target.value)}(e)},type:"text",placeholder:"email"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(p.a,{className:"log"}),Object(m.jsx)("input",{onChange:function(e){!function(e){g(e.target.value)}(e)},type:"password",placeholder:"password"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){k()},children:"SignUp"})]})}var g=a(9);a(81);function v(e){var t=e.token,a=e.setToken,c=(e.admin,Object(n.useState)([])),r=Object(o.a)(c,2),s=r[0],u=r[1];return Object(n.useEffect)(Object(i.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("https://games-hiji-backend.herokuapp.com","/user"),{headers:{authorization:"Bearer "+t}});case 2:a=e.sent;try{u(a.data)}catch(n){console.log(n)}case 4:case"end":return e.stop()}}),e)}))),[t]),Object(m.jsx)("div",{className:"divNavBar",children:t?Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(g.b,{to:"/",children:"Games"})}),Object(m.jsx)("li",{children:1==s.admin?Object(m.jsx)(g.b,{to:"/PostGame",children:" PostGame "}):""}),Object(m.jsx)("li",{children:Object(m.jsx)(g.b,{to:"/Favorite",children:"Favorite"})}),Object(m.jsx)("li",{children:Object(m.jsx)(g.b,{onClick:function(){localStorage.setItem("token",JSON.stringify("")),a("")},to:"/logIn",children:"   log out "})}),Object(m.jsx)("li",{id:"profile-img",children:Object(m.jsx)(g.b,{to:"/Profile",children:Object(m.jsx)("img",{className:"imgNavBar",src:s.img})})})]}):Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(g.b,{to:"/logIn",children:"logIn"})}),Object(m.jsx)("li",{children:Object(m.jsx)(g.b,{to:"/SignUp",children:"SignUp"})})]})})}var k=a(19),N=a(33);a(82);function S(e){var t=e.token,a=(e.admin,Object(n.useState)([])),c=Object(o.a)(a,2),r=c[0],s=c[1],u=Object(n.useState)([]),l=Object(o.a)(u,2),p=l[0],h=l[1],O=Object(n.useState)([]),x=Object(o.a)(O,2),f=x[0],g=x[1],v=Object(n.useState)(""),S=Object(o.a)(v,2),w=S[0],y=S[1],C=Object(d.useHistory)();Object(n.useEffect)(Object(i.a)(j.a.mark((function e(){var a,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("https://games-hiji-backend.herokuapp.com","/games"));case 2:if(a=e.sent,console.log(a.data),s(a.data),!t){e.next=11;break}return e.next=8,b.a.get("".concat("https://games-hiji-backend.herokuapp.com","/Like"),{headers:{authorization:"Bearer "+t}});case 8:n=e.sent,console.log(n.data),h(n.data);case 11:return e.next=13,b.a.get("".concat("https://games-hiji-backend.herokuapp.com","/user"),{headers:{authorization:"Bearer "+t}});case 13:c=e.sent;try{g(c.data)}catch(r){console.log(r)}case 15:case"end":return e.stop()}}),e)}))),[]);var I=function(e){C.push("/Game/".concat(e))},B=function(){var e=Object(i.a)(j.a.mark((function e(a,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat("https://games-hiji-backend.herokuapp.com","/games/").concat(a),{headers:{authorization:"Bearer "+t}});case 2:e.sent,(c=Object(k.a)(r)).splice(n,1),s(c);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),z=function(){var e=Object(i.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat("https://games-hiji-backend.herokuapp.com","/Like/").concat(a),{},{headers:{authorization:"Bearer "+t}});case 3:n=e.sent,console.log(n.data),h(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(i.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("".concat("https://games-hiji-backend.herokuapp.com","/Like/").concat(a),{headers:{authorization:"Bearer "+t}});case 3:n=e.sent,console.log(n.data),h(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"serch-cont",children:[Object(m.jsx)("input",{type:"text",placeholder:"search",className:"inputSearch",onChange:function(e){!function(e){y(e.target.value)}(e)}}),Object(m.jsx)("button",{className:"buttonSearch",onClick:function(){!function(){var e=r.filter((function(e){if(e.name.toLowerCase().includes(w.toLocaleLowerCase()))return e}));s(e)}()},children:"\ud83d\udd0d"})]}),Object(m.jsx)("div",{className:"Gamediv",children:Object(m.jsx)("div",{className:"Gamediv",children:r.map((function(e,t){for(var a=0;a<p.length;a++)if(p[a]._id===e._id)return Object(m.jsxs)("div",{className:"gameDivCheldren",children:[Object(m.jsx)("p",{children:e.name}),Object(m.jsx)("img",{src:e.img,className:"imgGamess",onClick:function(){I(e._id)},alr:"no img"}),Object(m.jsx)(N.a,{className:"likeIcon",style:{color:"red"},onClick:function(){G(e._id)}}),1==f.admin?Object(m.jsx)("button",{onClick:function(){B(e._id,t)},children:"remove game"}):""]});return Object(m.jsxs)("div",{className:"gameDivCheldren",children:[Object(m.jsx)("p",{children:e.name}),Object(m.jsx)("img",{src:e.img,className:"imgGamess",onClick:function(){I(e._id)},alr:"no img"}),Object(m.jsx)(N.a,{className:"likeIcon",style:{color:"gray"},onClick:function(){z(e._id)}}),1==f.admin?Object(m.jsx)("button",{onClick:function(){B(e._id,t)},children:"remove game"}):""]})}))})})]})}var w=a(17),y=(a(83),a(50)),C=a.n(y),I=a(102),B=a(101);function z(e){var t=e.token,a=(e.admin,Object(n.useState)(null)),c=Object(o.a)(a,2),r=c[0],s=c[1],u=Object(n.useState)([]),l=Object(o.a)(u,2),p=l[0],O=l[1],x=Object(n.useState)(""),f=Object(o.a)(x,2),g=f[0],v=f[1],k=Object(n.useState)(""),N=Object(o.a)(k,2),S=N[0],y=N[1],z=Object(n.useState)(""),G=Object(o.a)(z,2),U=G[0],E=G[1],P=Object(n.useState)(""),_=Object(o.a)(P,2),L=_[0],D=_[1],R=Object(n.useState)(""),F=Object(o.a)(R,2),A=F[0],T=F[1],J=Object(n.useState)(0),H=Object(o.a)(J,2),M=H[0],V=H[1],q=Object(n.useState)(""),K=Object(o.a)(q,2),X=K[0],Y=K[1],Q=Object(d.useParams)().id;Object(n.useEffect)(Object(i.a)(j.a.mark((function e(){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,b.a.get("".concat("https://games-hiji-backend.herokuapp.com","/game/").concat(Q),{headers:{authorization:"Bearer "+t}});case 3:a=e.sent,s(a.data);case 5:return e.next=7,b.a.get("".concat("https://games-hiji-backend.herokuapp.com","/user"),{headers:{authorization:"Bearer "+t}});case 7:n=e.sent;try{console.log(n.data,"user hereeee"),O(n.data)}catch(c){console.log(c)}case 9:case"end":return e.stop()}}),e)}))),[]);var W=function(){var e=Object(i.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat("https://games-hiji-backend.herokuapp.com","/comment/").concat(Q),{comment:g,rating:M},{headers:{authorization:"Bearer "+t}});case 3:a=e.sent,s(Object(w.a)(Object(w.a)({},r),{},{comment:a.data.comment})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(i.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.put("".concat("https://games-hiji-backend.herokuapp.com","/comment/").concat(Q),{comment:a,rating:M},{headers:{authorization:"Bearer "+t}});case 3:n=e.sent,console.log(n.data),s(Object(w.a)(Object(w.a)({},r),{},{comment:n.data.comment})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.res.data,"error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),$=function(e){V(e.target.value)},ee=function(){var e=Object(i.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat("https://games-hiji-backend.herokuapp.com","/game/").concat(a),{name:S,description:A,img:U,video:L},{headers:{authorization:"Bearer "+t}});case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(i.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(X,Q,"hiji"),e.next=4,b.a.post("".concat("https://games-hiji-backend.herokuapp.com","/img/").concat(Q),{img:X},{headers:{authorization:"Bearer "+t}});case 4:a=e.sent,s(Object(w.a)(Object(w.a)({},r),{},{img:a.data.extraImg})),console.log(a.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"Gamediv",children:r?Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:r.name}),Object(m.jsx)("p",{children:r.description}),Object(m.jsx)("img",{className:"imgGame",src:r.img,alr:"no img",alt:""}),Object(m.jsx)("br",{}),Object(m.jsx)("iframe",{src:r.video,className:"video1",frameborder:"0"}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"divContainerCE",children:[Object(m.jsxs)("div",{className:"divAddCommentAndReating",children:[Object(m.jsx)("input",{className:"inputComment",placeholder:"comment",onChange:function(e){!function(e){v(e.target.value)}(e)},type:"text"}),Object(m.jsx)(B.a,{className:"buttonComment",onClick:function(){W()}}),Object(m.jsx)("br",{}),Object(m.jsxs)("select",{id:"cars",name:"cars",onChange:function(e){$(e)},children:[Object(m.jsx)("option",{value:"0",children:"Rate:"}),Object(m.jsx)("option",{children:"1"}),Object(m.jsx)("option",{children:"2"}),Object(m.jsx)("option",{children:"3"}),Object(m.jsx)("option",{children:"4"}),Object(m.jsx)("option",{children:"5"})]}),Object(m.jsx)("div",{className:"commentsCont",children:r.comment.map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:[" ",e.userName]}),Object(m.jsx)("p",{children:e.comment}),Object(m.jsx)(C.a,{count:5,onChange:$,ratingValue:M,size:24,value:e.rating,activeColor:"#ffd700"}),e.userId==p._id?Object(m.jsx)(I.a,{onClick:function(){Z(e.comment)}}):""]},t)}))})]}),Object(m.jsx)("div",{className:"extraImgessGame",children:r.extraImg.map((function(e){return Object(m.jsx)("div",{className:"divExtraIMG",children:Object(m.jsx)("img",{className:"extraImgGame",src:e,alt:""})})}))})]}),Object(m.jsxs)("div",{children:[1==p.admin?Object(m.jsxs)("div",{className:"adminDiv",children:[Object(m.jsx)("input",{className:"inputProfile",type:"text",placeholder:"new name",onChange:function(e){!function(e){y(e.target.value)}(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"inputProfile",type:"text",placeholder:"new img ",onChange:function(e){!function(e){E(e.target.value)}(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"inputProfile",type:"text",placeholder:"new dec",onChange:function(e){!function(e){T(e.target.value)}(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"inputProfile",type:"text",placeholder:"new video ",onChange:function(e){!function(e){D(e.target.value)}(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)(h.a,{className:"buttonUpdate",onClick:function(){ee(r._id)}}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"text",className:"input",placeholder:"extraImg",onChange:function(e){!function(e){Y(e.target.value)}(e)}}),Object(m.jsx)("br",{}),Object(m.jsxs)("button",{onClick:function(){te()},className:"add",children:[" ","Add ExtraImg"]})]})]}):"",Object(m.jsx)("br",{})]})]}):""})}a(44);var G=a(52),U=a(28),E=(a(100),a(89),U.initializeApp({apiKey:"AIzaSyCed1cnquFO1gAObfjuaegsrGVDXa57NY8",authDomain:"hiuerhfs.firebaseapp.com",projectId:"hiuerhfs",storageBucket:"hiuerhfs.appspot.com",messagingSenderId:"60781539582",appId:"1:60781539582:web:9104f111c9b8364027b5af"}),U.storage()),P=U.firestore(),_=function(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(null),u=Object(o.a)(s,2),l=u[0],b=u[1],d=Object(n.useState)(null),p=Object(o.a)(d,2),h=p[0],m=p[1];return Object(n.useEffect)((function(){var t=E.ref(e.name),a=P.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){b(e)}),Object(i.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:return n=e.sent,e.next=5,a.add({url:n});case 5:m(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:c,url:h,error:l}},L=function(e){var t=e.file,a=e.setFile,c=e.setImg,r=_(t),s=r.progress,o=r.url;return Object(n.useEffect)((function(){o&&(console.log(o),a(null),c(o))}),[o,a]),Object(m.jsxs)("div",{children:[s," %"]})},D=a(51);function R(e){var t=e.setImg,a=Object(n.useState)(null),c=Object(o.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(null),u=Object(o.a)(i,2),j=u[0],l=u[1],b=["image/png","image/jpeg"];return Object(m.jsxs)("form",{children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{id:"fileUpdateInput",type:"file",onChange:function(e){var t=e.target.files[0];t&&b.includes(t.type)?(s(t),l("")):(s(null),l("Please select an image file (png or jpg)"))}}),Object(m.jsxs)("label",{htmlFor:"fileUpdateInput",children:[" ",Object(m.jsx)(D.a,{className:"iconUplouad"})," "]}),Object(m.jsx)("span",{children:"+"})]}),Object(m.jsxs)("div",{className:"output",children:[j&&Object(m.jsx)("div",{className:"error",children:j}),r&&Object(m.jsx)("div",{children:r.name}),r&&Object(m.jsx)(L,{file:r,setFile:s,setImg:t})]})]})}function F(e){var t=e.token,a=e.setToken,c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],u=r[1],l=Object(n.useState)(""),p=Object(o.a)(l,2),O=p[0],x=p[1],f=Object(n.useState)(""),g=Object(o.a)(f,2),v=g[0],k=g[1],N=Object(d.useHistory)();Object(n.useEffect)(Object(i.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("https://games-hiji-backend.herokuapp.com","/user"),{headers:{authorization:"Bearer "+t}});case 2:a=e.sent;try{u(a.data)}catch(n){console.log(n)}case 4:case"end":return e.stop()}}),e)}))),[s]);var S=function(){var e=Object(i.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat("https://games-hiji-backend.herokuapp.com","/user/").concat(n),{headers:{authorization:"Bearer "+t}});case 2:c=e.sent,console.log(c),c.status===s&&u(c.data),200===c.status&&(a(""),N.push("/SignUp"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"mainDivUser",children:[Object(m.jsx)("p",{children:s.name}),Object(m.jsx)("img",{className:"imgUser",src:s.img,alt:"no img"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"inputProfile",type:"text",placeholder:"new name",onChange:function(e){!function(e){x(e.target.value)}(e)}}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"divIcon",children:[Object(m.jsxs)("div",{className:"Up",children:["  ",Object(m.jsx)(R,{setImg:k})]}),Object(m.jsxs)("div",{className:"GrUpdate",children:[" ",Object(m.jsx)(h.a,{className:"buttonUpdate",onClick:function(){!function(){var e=b.a.put("".concat("https://games-hiji-backend.herokuapp.com","/userName"),{name:O},{headers:{authorization:"Bearer "+t}});x(e.data)}(),function(){var e=b.a.put("".concat("https://games-hiji-backend.herokuapp.com","/userImg"),{img:v},{headers:{authorization:"Bearer "+t}});k(e.data)}()}})]}),Object(m.jsxs)("div",{className:"MdOutlineDeleteForever",children:[" ",Object(m.jsx)(G.a,{className:"reactIconDeleteUser",onClick:function(){S(s._id)}})]})]})]})}a(93);function A(e){var t=e.token,a=Object(n.useState)([]),c=Object(o.a)(a,2),r=c[0],s=c[1],u=Object(d.useHistory)();Object(n.useEffect)(Object(i.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,b.a.get("".concat("https://games-hiji-backend.herokuapp.com","/Like"),{headers:{authorization:"Bearer "+t}});case 3:a=e.sent,console.log(a.data),s(a.data);case 6:case"end":return e.stop()}}),e)}))),[]);var l=function(){var e=Object(i.a)(j.a.mark((function e(a,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat("https://games-hiji-backend.herokuapp.com","/Like/").concat(a),{headers:{authorization:"Bearer "+t}});case 2:e.sent,(c=Object(k.a)(r)).splice(n,1),s(c);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"divLike",children:r.map((function(e,t){return console.log(e),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:e.name}),Object(m.jsx)("img",{className:"imgLike",src:e.img,alr:"no img",onClick:function(){var t;t=e._id,u.push("/Game/".concat(t))}})]},t),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){l(e._id,t)},children:"remove like"})]})}))})}a(94);function T(e){var t=e.token,a=Object(n.useState)([]),c=Object(o.a)(a,2),r=c[0],s=c[1],u=Object(n.useState)(""),l=Object(o.a)(u,2),d=l[0],p=l[1],h=Object(n.useState)(""),O=Object(o.a)(h,2),x=O[0],f=O[1],g=Object(n.useState)(""),v=Object(o.a)(g,2),N=v[0],S=v[1],w=Object(n.useState)(""),y=Object(o.a)(w,2),C=y[0],I=y[1],B=function(){var e=Object(i.a)(j.a.mark((function e(){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("".concat("https://games-hiji-backend.herokuapp.com","/games"),{name:d,description:C,img:x,video:N},{headers:{authorization:"Bearer "+t}});case 2:a=e.sent,(n=Object(k.a)(r)).push(a.data),s(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"divPostGame",children:[Object(m.jsx)("input",{type:"text",className:"input",placeholder:"Name",onChange:function(e){!function(e){p(e.target.value)}(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",className:"input",placeholder:"Img",onChange:function(e){!function(e){f(e.target.value)}(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",className:"input",placeholder:"Desc",onChange:function(e){!function(e){I(e.target.value)}(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",className:"input",placeholder:"Video",onChange:function(e){!function(e){S(e.target.value)}(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){B()},className:"addGame",children:"add game"}),Object(m.jsx)("br",{})]})}function J(){console.log("https://games-hiji-backend.herokuapp.com","backend url");var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)((function(){var e=localStorage.getItem("token");return JSON.parse(e)})),s=Object(o.a)(r,2),i=s[0],u=s[1];return Object(n.useEffect)((function(){localStorage.getItem("token",JSON.stringify(i))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)(v,{admin:a,token:i,setToken:u}),Object(m.jsx)(d.Route,{exact:!0,path:"/",render:function(){return Object(m.jsx)(S,{admin:a,token:i})}}),Object(m.jsx)(d.Route,{exact:!0,path:"/PostGame",render:function(){return Object(m.jsx)(T,{token:i})}}),Object(m.jsx)(d.Route,{exact:!0,path:"/Favorite",render:function(){return Object(m.jsx)(A,{token:i})}}),Object(m.jsx)(d.Route,{exact:!0,path:"/Profile",render:function(){return Object(m.jsx)(F,{token:i,setToken:u})}}),Object(m.jsx)(d.Route,{exact:!0,path:"/Game/:id",render:function(){return Object(m.jsx)(z,{admin:a,token:i})}}),Object(m.jsx)(d.Route,{exact:!0,path:"/LogIn",render:function(){return Object(m.jsx)(O,{setToken:u,setAdmin:c})}}),Object(m.jsx)(d.Route,{exact:!0,path:"/SignUp",component:f})]})}a(95).config(),s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(g.a,{children:Object(m.jsx)(J,{})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.6df6f069.chunk.js.map