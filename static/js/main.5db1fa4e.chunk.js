(this["webpackJsonpfirebase-auth"]=this["webpackJsonpfirebase-auth"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),u=(a(69),a(19),a(2)),i=a.n(u),o=a(6),s=a(3),m=a(9),p=a.n(m),d=(a(93),a(37)),f=function(e){var t=new d.default,a=[];e.forEach((function(e){a.push([e.name,e.numbers,e.price,e.numbers*e.price])})),t.autoTable({columns:["Candy","Amount","Price per unit","Total cost"],body:a});var n=Date().split(" "),r=n[0]+n[1]+n[2]+n[3]+n[4];t.save("report_".concat(r,".pdf"))},h=a(15),b=a.n(h),E=(a(96),b.a.initializeApp({apiKey:"AIzaSyBz0mn92VagynSWDAwd0rvKPr8uZDfMupw",authDomain:"candyshop-3a788.firebaseapp.com",projectId:"candyshop-3a788",storageBucket:"candyshop-3a788.appspot.com",messagingSenderId:"864697354101",appId:"1:864697354101:web:33f7616b94842042f8f53c"})),v=r.a.createContext(),g=function(e){var t=e.children,a=Object(n.useState)(null),l=Object(s.a)(a,2),c=l[0],u=l[1],i=Object(n.useState)(!0),o=Object(s.a)(i,2),m=o[0],p=o[1];return Object(n.useEffect)((function(){E.auth().onAuthStateChanged((function(e){u(e),p(!1)}))}),[]),m?r.a.createElement("div",null,r.a.createElement("h1",null,"Loading....Loading....Loading....Loading....Loading....")):r.a.createElement(v.Provider,{value:{currentUser:c}},t)};function w(e,t,a){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(i.a.mark((function e(t,a,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.auth().createUserWithEmailAndPassword(t,a);case 2:b.a.auth().currentUser.updateProfile({displayName:n});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,a){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(i.a.mark((function e(t,a,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=b.a.auth.EmailAuthProvider.credential(t,a),e.next=3,b.a.auth().currentUser.reauthenticateWithCredential(r);case 3:return e.next=5,b.a.auth().currentUser.updatePassword(n);case 5:return e.next=7,P();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.auth().signInWithEmailAndPassword(t,a);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,"google"===t&&(a=new b.a.auth.GoogleAuthProvider),e.next=4,b.a.auth().signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.auth().sendPasswordResetEmail(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return I.apply(this,arguments)}function I(){return(I=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.auth().signOut();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=function(){return r.a.createElement("button",{type:"button",onClick:P},"Sign Out")};var B=function(){var e=Object(n.useContext)(v).currentUser,t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],c=a[1],u=function(){var t=Object(o.a)(i.a.mark((function t(a){var n,r,l,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=a.target.elements,r=n.currentPassword,l=n.newPasswordOne,u=n.newPasswordTwo,l.value===u.value){t.next=5;break}return c("New Passwords do not match, please try again"),t.abrupt("return",!1);case 5:return t.prev=5,t.next=8,k(e.email,r.value,l.value);case 8:alert("Password has been changed. You will now be logged out"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),alert(t.t0);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}();return"password"===e.providerData[0].providerId?r.a.createElement("div",null,l&&r.a.createElement("h4",{className:"error"},l),r.a.createElement("h2",null,"Change Password"),r.a.createElement("form",{onSubmit:u},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Current Password:",r.a.createElement("input",{className:"form-control",name:"currentPassword",id:"currentPassword",type:"password",placeholder:"Current Password",autoComplete:"off",required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"New Password:",r.a.createElement("input",{className:"form-control",name:"newPasswordOne",id:"newPasswordOne",type:"password",placeholder:"Password",autoComplete:"off",required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Confirm New Password:",r.a.createElement("input",{className:"form-control",name:"newPasswordTwo",id:"newPasswordTwo",type:"password",placeholder:"Confirm Password",autoComplete:"off",required:!0}))),r.a.createElement("button",{type:"submit"},"Change Password")),r.a.createElement("br",null)):r.a.createElement("div",null,r.a.createElement("h2",null,"You are signed in using a Social Media Provider, You cannot change your password"))};var A=function(){var e=Object(n.useContext)(v).currentUser,t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),d=m[0],h=m[1],b=Object(n.useState)(!0),E=Object(s.a)(b,2),g=E[0],w=E[1];return Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("https://final554groupnull.herokuapp.com/order/"+e.email);case 3:a=t.sent,n=a.data,c(n),w(!1),h(!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),h(!0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.email]),d?r.a.createElement("div",null,r.a.createElement("h2",null,"404 page not find")):g?r.a.createElement("div",null,r.a.createElement("h2",null,"Loading . . .")):r.a.createElement("div",null,r.a.createElement("h2",null,"Account Page"),r.a.createElement(B,null),r.a.createElement(R,null),r.a.createElement("br",null),r.a.createElement("h3",null,"Past Orders"),l&&e&&r.a.createElement("ul",{id:"reviewList"},l.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("h4",null,"Order #",e._id),r.a.createElement("h5",null,"Purchased Items:"),e.order.candy.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("img",{src:e.image,alt:"candy"}),r.a.createElement("p",null,"Item: ",e.name," "),r.a.createElement("p",null,"Price Per Unit: ",e.price),r.a.createElement("p",null,"Quantity Purchased: ",e.numbers),r.a.createElement("p",null,"Item total: ",e.numbers*e.price))})),r.a.createElement("h5",null,"Total Price ",e.order.total),r.a.createElement("h5",null,"Payment Info: "),r.a.createElement("p",null,"Billing Address: ",e.order.address," "),r.a.createElement("p",null,"Payment Made With Card Ending In: ",e.order.payment),r.a.createElement("button",{onClick:function(){return f(e.order.candy)}},"Generate Recipt"))}))))},T=a(12),L=a(4);var D=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"This is the Home page"))};var F=function(){return r.a.createElement("div",{className:"landing"},r.a.createElement("h1",null,"Welcome to Group Null's CandyShop"),r.a.createElement("h2",null,"Start browsing our selection of candies using the search bar above."),r.a.createElement("h3",null,"If something catches your eye, be sure to add it to your cart!"))},U="https://see.fontimg.com/api/renderfont4/X3WjK/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTI1MCwiZnMiOjUyLCJmZ2MiOiIjRkZGRUZFIiwiYmdjIjoiI0RCMzAzMCIsInQiOjF9/R3JvdXAgTnVsbA/uncracked-free-trial.png",W=function(){var e=r.a.useRef(null),t=Object(n.useContext)(v).currentUser,a=function(t){t.preventDefault(),window.location.href="/candies/"+e.current.value},l=function(){return r.a.createElement("nav",{className:"navigation"},r.a.createElement(T.c,{className:"weblink",to:"/"},r.a.createElement("img",{src:U,alt:"logo failed to load"})),r.a.createElement("div",{className:"searchBar"},r.a.createElement(T.c,{className:"weblink",to:"/candies"},r.a.createElement("input",{className:"allButton",type:"submit",value:"All"})),r.a.createElement("form",{className:"searchForm",onSubmit:a},r.a.createElement("input",{type:"search",size:"50",placeholder:"Search For Candies",ref:e}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fa fa-search"})))),r.a.createElement(T.c,{className:"weblink",to:"/account"},r.a.createElement("i",{className:"fa fa-user-circle","aria-hidden":"true"},"Account")),r.a.createElement(T.c,{className:"weblink",to:"/shoppingcart"},r.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"},"My Cart")))},c=function(){return r.a.createElement("nav",{className:"navigation"},r.a.createElement(T.c,{className:"weblink",to:"/"},r.a.createElement("img",{src:U,alt:"logo failed to load"})),r.a.createElement("div",{className:"searchBar"},r.a.createElement(T.c,{className:"weblink",to:"/candies"},r.a.createElement("input",{className:"allButton",type:"submit",value:"All"})),r.a.createElement("form",{className:"searchForm",onSubmit:a},r.a.createElement("input",{type:"search",size:"50",placeholder:"Search For Candies",ref:e}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fa fa-search"})))),r.a.createElement(T.c,{className:"weblink",to:"/signup"},"Sign-up"),r.a.createElement(T.c,{className:"weblink",to:"/signin"},"Sign-In"))};return t?r.a.createElement(l,null):r.a.createElement(c,null)},M=function(){var e=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("img",{onClick:function(){return e("google")},alt:"google signin",src:"/imgs/btn_google_signin.png"}))};var Y=function(){var e=Object(n.useContext)(v).currentUser,t=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.elements,n=a.email,r=a.password,e.prev=2,e.next=5,O(n.value,r.value);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return e?r.a.createElement(L.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Log in"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:",r.a.createElement("input",{className:"form-control",name:"email",id:"email",type:"email",placeholder:"Email",required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password:",r.a.createElement("input",{className:"form-control",name:"password",type:"password",placeholder:"Password",autoComplete:"off",required:!0}))),r.a.createElement("button",{type:"submit"},"Log in"),r.a.createElement("button",{className:"forgotPassword",onClick:function(e){e.preventDefault();var t=document.getElementById("email").value;t?(!function(e){S.apply(this,arguments)}(t),alert("An email has been sent so that you can reset your password")):alert("Please enter an email address below before you click the forgot Password link")}},"Forgot Password")),r.a.createElement("br",null),r.a.createElement(M,null))};var _=function(){var e=Object(n.useContext)(v).currentUser,t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],c=a[1],u=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n,r,l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target.elements,n=a.displayName,r=a.email,l=a.passwordOne,u=a.passwordTwo,l.value===u.value){e.next=5;break}return c("PAsswords do not match"),e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,w(r.value,l.value,n.value);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t){return e.apply(this,arguments)}}();return e?r.a.createElement(L.a,{to:"/home"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Sign up"),l&&r.a.createElement("h4",{className:"error"},l),r.a.createElement("form",{onSubmit:u},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name:",r.a.createElement("input",{className:"form-control",required:!0,name:"displayName",type:"text",placeholder:"Name"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:",r.a.createElement("input",{className:"form-control",required:!0,name:"email",type:"email",placeholder:"Email"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password:",r.a.createElement("input",{className:"form-control",id:"passwordOne",name:"passwordOne",type:"password",placeholder:"Password",autoComplete:"off",required:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Confirm Password:",r.a.createElement("input",{className:"form-control",name:"passwordTwo",type:"password",placeholder:"Confirm Password",autoComplete:"off",required:!0}))),r.a.createElement("button",{id:"submitButton",name:"submitButton",type:"submit"},"Sign Up")),r.a.createElement("br",null),r.a.createElement(M,null))},q=a(118),z=a(120),Z=a(126),G=a(121),J=a(122),H=a(123),$=a(124),K=a(125),Q=Object(q.a)({card:{maxWidth:350,height:"auto",marginLeft:"auto",marginRight:"auto",borderRadius:5,border:"1px solid #1e8678",boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);"},titleHead:{borderBottom:"1px solid #1e8678",fontWeight:"bold"},grid:{flexGrow:1,flexDirection:"row"},media:{height:"100%",width:"100%"},button:{color:"#1e8678",fontWeight:"bold",fontSize:12}});var V=function(){var e,t=Object(n.useContext)(v).currentUser,a=Object(n.useState)(void 0),l=Object(s.a)(a,2),c=l[0],u=l[1],m=Object(n.useState)(!1),d=Object(s.a)(m,2),f=d[0],h=d[1],b=Object(n.useState)(!0),E=Object(s.a)(b,2),g=E[0],w=E[1],y=Object(n.useState)(!1),k=Object(s.a)(y,2),x=k[0],O=k[1],j=Object(n.useState)(void 0),N=Object(s.a)(j,2),C=N[0],S=N[1],P=Object(n.useState)([]),I=Object(s.a)(P,2),R=I[0],B=I[1],A=Object(n.useState)(!1),L=Object(s.a)(A,2),D=L[0],F=L[1],U=Object(n.useState)(""),W=Object(s.a)(U,2),M=W[0],Y=W[1],_=Object(n.useState)(""),q=Object(s.a)(_,2),V=q[0],X=q[1],ee=Object(n.useState)(""),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(""),le=Object(s.a)(re,2),ce=le[0],ue=le[1],ie=Object(n.useState)(""),oe=Object(s.a)(ie,2),se=oe[0],me=oe[1],pe=Object(n.useState)(0),de=Object(s.a)(pe,2),fe=de[0],he=de[1],be=Object(n.useState)(0),Ee=Object(s.a)(be,2),ve=Ee[0],ge=Ee[1],we=Q(),ye=/^\+?[1-9][0-9]*$/;Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.delegateYield(i.a.mark((function e(){var a,n,r,l,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://final554groupnull.herokuapp.com/usershopcart/"+t.email);case 2:return a=e.sent,e.next=5,p.a.get("https://final554groupnull.herokuapp.com/Candies");case 5:n=e.sent,r=[],l=[],c=i.a.mark((function e(l){var c,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(c=n.data.filter((function(e){return a.data[l].id===e._id})))[0].stock){e.next=7;break}return e.next=4,p.a.delete("https://final554groupnull.herokuapp.com/usershopcartid/"+t.email,{data:{id:c[0]._id}});case 4:!1===D&&F(!0),e.next=16;break;case 7:if(!(c[0].stock<a.data[l].numbers)){e.next=15;break}return a.data[l].numbers=c[0].stock,u={id:c[0]._id,name:c[0].name,price:c[0].price,image:c[0].image,numbers:a.data[l].numbers},e.next=12,p.a.put("https://final554groupnull.herokuapp.com/usershopcart/"+t.email,u);case 12:r.push(a.data[l]),e.next=16;break;case 15:r.push(a.data[l]);case 16:case"end":return e.stop()}}),e)})),o=0;case 10:if(!(o<a.data.length)){e.next=15;break}return e.delegateYield(c(o),"t0",12);case 12:o++,e.next=10;break;case 15:B(l),u(r),S(n.data),w(!1),h(!1);case 20:case"end":return e.stop()}}),e)}))(),"t0",2);case 2:e.next=8;break;case 4:e.prev=4,e.t1=e.catch(0),h(!0),console.log(e.t1);case 8:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.email,D]);var ke=function(){var e=Object(o.a)(i.a.mark((function e(a,n,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("https://final554groupnull.herokuapp.com/usershopcartid/"+t.email,{data:{id:a}}).then(function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=c.filter((function(e,a){return e.id!==t.data.id})),alert("You have successfully deleted item: "+r+" from your cart"),u(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,a,n){return e.apply(this,arguments)}}(),xe=function(){var e=Object(o.a)(i.a.mark((function e(a,n,r,l,o){var s,m,d,f,h,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://final554groupnull.herokuapp.com/Candy/"+a);case 3:m=e.sent,d=m.data,s=d,console.log(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:if(f=document.getElementById(a).value,h=Number(f),!(isNaN(h)||isNaN(h)||isNaN(h))){e.next=19;break}alert("input must be number"),document.getElementById(a).value="",e.next=43;break;case 19:if(!1!==ye.test(f)){e.next=24;break}alert("input must be integer"),document.getElementById(a).value="",e.next=43;break;case 24:if(!(h>s.stock)){e.next=29;break}alert("input must less than candy left"),document.getElementById(a).value="",e.next=43;break;case 29:if(b={id:a,name:n,price:r,image:l,numbers:h},h!==o){e.next=33;break}return alert("You already have ".concat(o," units in your cart, you can only edit to change the value")),e.abrupt("return");case 33:return e.prev=33,e.next=36,p.a.put("https://final554groupnull.herokuapp.com/usershopcart/"+t.email,b).then((function(e){var t=c.map((function(t,a){return t.id===e.data.id?e.data:t}));u(t)}));case 36:alert("you have edited your shopping cart"),e.next=42;break;case 39:e.prev=39,e.t1=e.catch(33),alert(e.t1);case 42:document.getElementById(a).value="";case 43:case"end":return e.stop()}}),e,null,[[0,9],[33,39]])})));return function(t,a,n,r,l){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=c.reduce((function(e,t){return e+t.price*t.numbers}),0),"string"===typeof M&&""!==M){e.next=5;break}return alert("please enter a valid firstName"),e.abrupt("return");case 5:if("string"===typeof V&&""!==V){e.next=8;break}return alert("please enter a valid lastName"),e.abrupt("return");case 8:if("string"===typeof ae&&""!==ae){e.next=11;break}return alert("please enter a valid street"),e.abrupt("return");case 11:if("string"===typeof ce&&""!==ce){e.next=14;break}return alert("please enter a valid city"),e.abrupt("return");case 14:if("string"===typeof se&&""!==se){e.next=17;break}return alert("please enter a valid state"),e.abrupt("return");case 17:if("string"===typeof fe&&!isNaN(parseInt(fe))){e.next=20;break}return alert("please enter a valid zipcode"),e.abrupt("return");case 20:if("string"===typeof ve&&!isNaN(parseInt(ve))){e.next=23;break}return alert("please enter a valid credit card number"),e.abrupt("return");case 23:je(c,a);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(o.a)(i.a.mark((function e(a,n){var r,l,c,u,s,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=ve.substring(ve.length-4),l=ae+", "+ce+", "+se+", "+fe,e.prev=2,e.next=5,p.a.get("https://final554groupnull.herokuapp.com/Candies");case 5:if(c=e.sent,u=!1,a.forEach((function(e){if(c.data.filter((function(t){return t._id===e.id}))[0].stock<e.numbers)return alert("There has been a change in stock, cannot complete order"),u=!0,void window.location.reload()})),!1!==u){e.next=16;break}return e.next=11,p.a.post("https://final554groupnull.herokuapp.com/order",{email:t.email,candy:a,address:l,total:n,payment:r});case 11:return a.forEach(function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=C.filter((function(e){return e._id===t.id})),s={id:t.id,newStockNumber:m[0].stock-t.numbers},e.next=4,p.a.post("https://final554groupnull.herokuapp.com/Candies/updateStock",s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=14,p.a.delete("https://final554groupnull.herokuapp.com/usershopcart/".concat(t.email));case 14:alert("thank you for your purchase"),window.location.reload(!1);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),alert(e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t,a){return e.apply(this,arguments)}}();if(!0===f)return r.a.createElement("div",null,r.a.createElement("h2",null,"404 page not find"));if(!0===g)return r.a.createElement("div",null,r.a.createElement("h2",null,"Loading . . ."));if(void 0===c||0===c.length)return r.a.createElement("div",null,!0===D&&t&&r.a.createElement("h2",{id:"itemDeleted"},"Due to changes in stock, one or more items have been removed from your cart. Please review your items before checking out"),r.a.createElement("h2",null,"Your didn't add any candy in to shopping cart go add some!!!"));var Ne=0;return e=c&&c.map((function(e){return Ne+=e.price*e.numbers,a=e,r.a.createElement(z.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,key:a.id},r.a.createElement(Z.a,{className:we.card,variant:"outlined"},r.a.createElement(G.a,null,r.a.createElement(T.b,{to:"/Candy/".concat(a.id)},r.a.createElement(J.a,{className:we.media,component:"img",image:a.image,title:"image"}),r.a.createElement(H.a,null,r.a.createElement($.a,{className:we.titleHead,gutterBottom:!0,variant:"h6",component:"h3"},a.name))),r.a.createElement("h2",null,"You have ",a.numbers," ",a.name," in your shopping cart "),R.includes(a.id)&&t&&r.a.createElement("h3",null,"This quantity has changed!! "),r.a.createElement("label",null,r.a.createElement("input",{id:a.id,name:"number",placeholder:"Change amount"})),r.a.createElement(K.a,{onClick:function(){return xe(a.id,a.name,a.price,a.image,a.numbers)}}," Edit Quantity"),r.a.createElement(K.a,{onClick:function(){return ke(a.id,a.numbers,a.name)}},"Delete this candy"))));var a})),r.a.createElement("div",null,0!==R.length&&t&&r.a.createElement("h1",{id:"quantChange"},"'Please review your cart, changes have been made due to changes in available stock"),!0===D&&t&&r.a.createElement("h2",{id:"itemDeleted"},"Due to changes in stock, one or more items have been removed from your cart. Please review your items before checking out"),r.a.createElement(z.a,{container:!0,className:we.grid,spacing:5},e),r.a.createElement("h1",null,"Total Price: ",Ne.toFixed(2)),r.a.createElement("button",{onClick:function(){return O(!x)}},"Check out"),r.a.createElement("form",{id:"checkout",hidden:!x,onSubmit:Oe},r.a.createElement("label",null,"First Name",r.a.createElement("input",{type:"text",value:M,onChange:function(e){return Y(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("label",null,"Last Name",r.a.createElement("input",{type:"text",value:V,onChange:function(e){return X(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("h3",null,"Address:"),r.a.createElement("label",null,"Street Address",r.a.createElement("input",{type:"text",id:"street",value:ae,onChange:function(e){return ne(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("label",null,"City",r.a.createElement("input",{type:"text",id:"city",value:ce,onChange:function(e){return ue(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("label",null," State",r.a.createElement("input",{type:"text",id:"state",value:se,onChange:function(e){return me(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("label",null,"Zipcode",r.a.createElement("input",{type:"number",id:"zip",value:fe,onChange:function(e){return he(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("label",null,"Credit Card Number",r.a.createElement("input",{type:"number",id:"payment",value:ve,onChange:function(e){return ge(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})))},X=Object(q.a)({card:{maxWidth:350,height:"auto",marginLeft:"auto",marginRight:"auto",borderRadius:5,border:"1px solid #1e8678",boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);"},titleHead:{borderBottom:"1px solid #1e8678",fontWeight:"bold"},grid:{flexGrow:1,flexDirection:"row"},media:{height:"100%",width:"100%"},button:{color:"#1e8678",fontWeight:"bold",fontSize:12}}),ee=function(){var e=Object(n.useState)(void 0),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),u=Object(s.a)(c,2),m=u[0],d=u[1],f=Object(n.useState)(!0),h=Object(s.a)(f,2),b=h[0],E=h[1],v=Object(n.useState)(""),g=Object(s.a)(v,2),w=g[0],y=g[1],k=Object(n.useState)(""),x=Object(s.a)(k,2),O=x[0],j=x[1],N=Object(L.i)(),C=X();Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://final554groupnull.herokuapp.com/Candies");case 3:t=e.sent,a=t.data,E(!1),d(!1),l(a),N.searchTerm?y(N.searchTerm):y(""),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),d(!0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[N]);var S=function(e){var t;t=e,e=Math.round(2*t)/2;for(var a=[],n=0;n<5;n++)e-n===.5?a.push(r.a.createElement("i",{className:"fa fa-star-half-full checked",key:"star".concat(n)})):e-n>0?a.push(r.a.createElement("i",{className:"fa fa-star checked",key:"star".concat(n)})):a.push(r.a.createElement("i",{className:"fa fa-star-o checked",key:"star".concat(n)}));return a},P=a&&a.filter((function(e){return""===w&&""===O||(!(!e.name.toLowerCase().includes(w.toLowerCase())||""!==O)||(parseInt(O)<e.rating&&""===w||!!(e.name.toLowerCase().includes(w.toLowerCase())&&parseInt(O)<e.rating)))}));return m?r.a.createElement("div",null,r.a.createElement("h2",null,"404 page not find")):b?r.a.createElement("div",null,r.a.createElement("h2",null,"Loading . . .")):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"rating"},"filter this by rating:",r.a.createElement("select",{name:"rating",id:"rating",onChange:function(e){return j(e.target.value)}},r.a.createElement("option",{value:""}," "),r.a.createElement("option",{value:"0"},"1"),r.a.createElement("option",{value:"1"},"2"),r.a.createElement("option",{value:"2"},"3"),r.a.createElement("option",{value:"3"},"4"),r.a.createElement("option",{value:"4"},"5"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),P&&P.length>0?r.a.createElement(z.a,{container:!0,className:C.grid,spacing:5},P.map((function(e){return function(e){return r.a.createElement(z.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,key:e._id},r.a.createElement(Z.a,{className:C.card,variant:"outlined"},r.a.createElement(G.a,null,r.a.createElement(T.b,{to:"/Candy/".concat(e._id)},r.a.createElement(J.a,{className:C.media,component:"img",image:e.image,title:"image"}),r.a.createElement(H.a,null,r.a.createElement("h2",null,e.name),r.a.createElement("h2",null,S(e.rating)," ",e.numRatings),r.a.createElement("h2",null,"$",e.price.toFixed(2)))))))}(e)}))):r.a.createElement("p",null,"No Results"))},te=(a(100),function(){var e=Object(n.useContext)(v).currentUser,t=Object(n.useState)(void 0),a=Object(s.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)(0),m=Object(s.a)(u,2),d=m[0],f=m[1],h=Object(n.useState)(0),b=Object(s.a)(h,2),E=b[0],g=b[1],w=Object(n.useState)(void 0),y=Object(s.a)(w,2),k=y[0],x=y[1],O=Object(n.useState)(!0),j=Object(s.a)(O,2),N=j[0],C=j[1],S=Object(L.i)(),P=/^\+?[1-9][0-9]*$/,I=Object(n.useState)(0),R=Object(s.a)(I,2),B=R[0],A=R[1];Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(i.a.mark((function t(){var a,n,r,l,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=S.id,t.next=4,p.a.get("https://final554groupnull.herokuapp.com/Candy/"+a);case 4:if(n=t.sent,r=n.data,c(r),g(r.stock),null===e){t.next=17;break}return r.reviews.forEach((function(t){t.email===e.email&&x(t)})),t.next=12,p.a.get("https://final554groupnull.herokuapp.com/usershopcart/"+e.email);case 12:return l=t.sent,t.next=15,l.data.filter((function(e){return e.id===a}));case 15:0!==(u=t.sent).length&&u[0].numbers&&f(u[0].numbers);case 17:C(!1),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),console.log(t.t0);case 23:case"end":return t.stop()}}),t,null,[[0,20]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[d,e,S.id]);var T=function(){var t=Object(o.a)(i.a.mark((function t(){var a,n,r,c,u,o,s,m;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(a=B)){t.next=4;break}return alert("Please enter a Rating"),t.abrupt("return");case 4:return(n=document.getElementById("review").value)||(n=" "),0===n.trim(" ").length&&(n=" "),r=e.email,c=l._id,t.prev=9,t.next=12,p.a.post("https://final554groupnull.herokuapp.com/review",{candyId:c,email:r,review:n,rating:a});case 12:document.getElementById("review").value="",u=new Date,o=String(u.getDate()).padStart(2,"0"),s=String(u.getMonth()+1).padStart(2,"0"),m=u.getFullYear(),x({candyId:c,email:r,review:n,rating:a,date:u=s+"/"+o+"/"+m}),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(9),alert(t.t0);case 25:case"end":return t.stop()}}),t,null,[[9,22]])})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.post("https://final554groupnull.herokuapp.com/review/delete",{candyId:l._id,email:e.email});case 3:x(void 0),A(0),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),F=function(){var t=Object(o.a)(i.a.mark((function t(){var a,n,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=document.getElementById("number").value,n=Number(a),!(isNaN(n)||isNaN(n)||isNaN(n))){t.next=7;break}alert("input must be number"),document.getElementById("number").value="",t.next=29;break;case 7:if(!1!==P.test(a)){t.next=12;break}alert("input must be integer"),document.getElementById("number").value="",t.next=29;break;case 12:if(!(n+d>l.stock)){t.next=17;break}alert("There is not enough stock available to add that amount to your cart"),document.getElementById("number").value="",t.next=29;break;case 17:return r=n+d,c={id:S.id,name:l.name,price:l.price,image:l.image,numbers:r},t.prev=19,t.next=22,p.a.put("https://final554groupnull.herokuapp.com/usershopcart/"+e.email,c).then((function(e){f(e.data.numbers)}));case 22:alert("You successfully added ".concat(n," units to your cart")),t.next=28;break;case 25:t.prev=25,t.t0=t.catch(19),alert(t.t0);case 28:document.getElementById("number").value="";case 29:case"end":return t.stop()}}),t,null,[[19,25]])})));return function(){return t.apply(this,arguments)}}(),U=function(e){var t;t=e,e=Math.round(2*t)/2;for(var a=[],n=0;n<5;n++)e-n===.5?a.push(r.a.createElement("i",{className:"fa fa-star-half-full checked",key:"star".concat(n)})):e-n>0?a.push(r.a.createElement("i",{className:"fa fa-star checked",key:"star".concat(n)})):a.push(r.a.createElement("i",{className:"fa fa-star-o checked",key:"star".concat(n)}));return a},W=function(e){A(e)};if(N)return r.a.createElement("div",null,r.a.createElement("h2",null,"Loading..."));if(void 0===l)return r.a.createElement("div",null,r.a.createElement("h1",null,"Sorry, there is no such candy"));var M=[];return l.reviews.forEach((function(t){e?t.email!==e.email&&0!==t.review.trim(" ").length&&M.push(t):0!==t.review.trim(" ").length&&M.push(t)})),r.a.createElement("div",{className:"Candy-body"},r.a.createElement("div",{className:"Top-Info"},r.a.createElement("img",{src:l.image,alt:"Candy"}),r.a.createElement("div",{className:"Right-Top"},r.a.createElement("div",{className:"Top-Top-Info"},r.a.createElement("p",null,r.a.createElement("u",null,l&&l.manufacturer)),l.vegan&&r.a.createElement("img",{src:"https://iamgoingvegan.b-cdn.net/wp-content/uploads/2020/05/European-Vegetarian-Symbol-961x1024.png",width:40,height:40,alt:"veganCheck"})),r.a.createElement("h1",null,l&&l.name),r.a.createElement("div",{className:"Review-Info"},r.a.createElement("div",{className:"starsBig"},U(l.rating)),r.a.createElement("p",null,"(",l.rating.toFixed(1),")"),r.a.createElement("a",{className:"numReviews",href:"#reviews"},l.numRatings," ",l.numRatings>1?"Ratings":"Rating")),r.a.createElement("h2",null,"Price: $",l&&l.price.toFixed(2)),r.a.createElement("div",{className:"add"},e&&r.a.createElement("div",{className:"input-selection"},r.a.createElement("p",null,"You currently have ",d," units:"),r.a.createElement("label",null,"Purchase more:",r.a.createElement("input",{id:"number",name:"number",placeholder:"quantity"}))),e&&r.a.createElement("button",{onClick:F}," add to cart"),!e&&r.a.createElement("p",null," Must be logged in to add candy to shopping cart"),r.a.createElement("h3",null,"There is ",E," left in stock"),r.a.createElement("p",null,l&&l.descrption)))),!k&&e&&r.a.createElement("div",{id:"newReview"},r.a.createElement("div",{className:"review-input"},r.a.createElement("h3",null,"Review this product"),r.a.createElement("div",{className:"star-rating"},r.a.createElement("input",{type:"radio",name:"stars",id:"star-a",value:"5",onClick:function(){return W(5)}}),r.a.createElement("label",{htmlFor:"star-a"}),r.a.createElement("input",{type:"radio",name:"stars",id:"star-b",value:"4",onClick:function(){return W(4)}}),r.a.createElement("label",{htmlFor:"star-b"}),r.a.createElement("input",{type:"radio",name:"stars",id:"star-c",value:"3",onClick:function(){return W(3)}}),r.a.createElement("label",{htmlFor:"star-c"}),r.a.createElement("input",{type:"radio",name:"stars",id:"star-d",value:"2",onClick:function(){return W(2)}}),r.a.createElement("label",{htmlFor:"star-d"}),r.a.createElement("input",{type:"radio",name:"stars",id:"star-e",value:"1",onClick:function(){return W(1)}}),r.a.createElement("label",{htmlFor:"star-e"})),r.a.createElement("label",{htmlFor:"review"},"Write a new Review:",r.a.createElement("textarea",{cols:"40",rows:"5",id:"review",name:"review",placeholder:"Write a review on this product..."}))),r.a.createElement("button",{onClick:T}," Write Review")),k&&e&&r.a.createElement("div",{id:"userReview"},r.a.createElement("h3",null,"Your Review"),r.a.createElement("p",null,"Review by ",k.email,"  on ",k.date),r.a.createElement("p",null,U(k.rating)),r.a.createElement("p",null,"Review: ",k.review),r.a.createElement("button",{onClick:D},"Delete Review")),r.a.createElement("p",null,r.a.createElement("b",null,"Reviews: ")),r.a.createElement("ul",{id:"reviewList"},M.map((function(e){return r.a.createElement("li",{key:e.email},r.a.createElement("p",null,"Review by ",e.email,"  on ",e.date),r.a.createElement("p",null,U(e.rating)),r.a.createElement("p",null,"Review: ",e.review))}))))}),ae=function(){return Object(n.useContext)(v).currentUser?r.a.createElement(L.b,null):r.a.createElement(L.a,{to:"/signin"})};var ne=function(){return r.a.createElement(g,null,r.a.createElement(T.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(W,null))),r.a.createElement(L.e,null,r.a.createElement(L.c,{path:"/",element:r.a.createElement(F,null)}),r.a.createElement(L.c,{path:"/home",element:r.a.createElement(ae,null)},r.a.createElement(L.c,{path:"/home",element:r.a.createElement(D,null)})),r.a.createElement(L.c,{path:"/shoppingcart",element:r.a.createElement(V,null)}),r.a.createElement(L.c,{path:"/account",element:r.a.createElement(ae,null)},r.a.createElement(L.c,{path:"/account",element:r.a.createElement(A,null)})),r.a.createElement(L.c,{path:"/signin",element:r.a.createElement(Y,null)}),r.a.createElement(L.c,{path:"/signup",element:r.a.createElement(_,null)}),r.a.createElement(L.c,{path:"/Candies",element:r.a.createElement(ee,null)}),r.a.createElement(L.c,{path:"/Candies/:searchTerm",element:r.a.createElement(ee,null)}),r.a.createElement(L.c,{path:"/Candy/:id",element:r.a.createElement(te,null)}))))};c.a.render(r.a.createElement(ne,null),document.getElementById("root"))},19:function(e,t,a){},64:function(e,t,a){e.exports=a(101)},69:function(e,t,a){}},[[64,1,3]]]);
//# sourceMappingURL=main.5db1fa4e.chunk.js.map