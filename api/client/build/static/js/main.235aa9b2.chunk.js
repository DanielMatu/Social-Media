(this["webpackJsonpreact-social"]=this["webpackJsonpreact-social"]||[]).push([[0],{113:function(e,t,s){},114:function(e,t,s){},115:function(e,t,s){},116:function(e,t,s){},117:function(e,t,s){},118:function(e,t,s){},119:function(e,t,s){},120:function(e,t,s){},121:function(e,t,s){},122:function(e,t,s){},123:function(e,t,s){},124:function(e,t,s){},125:function(e,t,s){},126:function(e,t,s){},127:function(e,t,s){},128:function(e,t,s){},158:function(e,t,s){},159:function(e,t,s){},160:function(e,t,s){},161:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(73),r=s.n(a),i=s(3),o=s.n(i),l=s(4),u=(s(87),s(176)),j=s(177),d=s(178),b=s(179),m=s(10),p=s(5),h=s(36),O=s(24),f=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:t.payload};case"FOLLOW":return Object(O.a)(Object(O.a)({},e),{},{user:Object(O.a)(Object(O.a)({},e.user),{},{followings:[].concat(Object(h.a)(e.user.followings),[t.payload])})});case"UNFOLLOW":return Object(O.a)(Object(O.a)({},e),{},{user:Object(O.a)(Object(O.a)({},e.user),{},{followings:e.user.followings.filter((function(e){return e!==t.payload}))})});default:return e}},x=s(0),g={user:null,isFetching:!1,error:!1},v=Object(c.createContext)(g),N=function(e){var t=e.children,s=Object(c.useReducer)(f,g),n=Object(p.a)(s,2),a=n[0],r=n[1];return Object(x.jsx)(v.Provider,{value:{user:a.user,isFetching:a.isFetching,error:a.error,dispatch:r},children:t})},I=s(74),w=s.n(I),k=(console.log("it was productoin"),w.a.create({baseURL:"https://dmatu-social-media.herokuapp.com/api/"}));console.log("hers axios instance"),console.log(k);var y=s(6);function C(){var e=Object(c.useContext)(v).user,t="http://localhost:8800/images/",s=Object(c.useRef)(),n=Object(c.useRef)(),a=Object(y.g)(),r=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,r,i,l,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.length>1&&void 0!==u[1]&&u[1],t.preventDefault(),e.next=4,k.get("/user/users");case 4:r=e.sent,i=[],l=c?n.current.value:s.current.value,r.data.map((function(e){e.username.split(" ").some((function(e){return l.includes(e)}))&&i.push(e)})),a.push({pathname:"/search",state:{filteredUsers:i}});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"topbarContainer",children:[Object(x.jsx)("div",{className:"topbarLeft",children:Object(x.jsx)(m.b,{to:"/",style:{textDecoration:"none"},children:Object(x.jsx)("span",{className:"logo",children:"Lamasocial"})})}),Object(x.jsx)("div",{className:"topbarCenter",children:Object(x.jsxs)("form",{className:"searchBar",onSubmit:function(e){return r(e)},children:[Object(x.jsx)(u.a,{className:"searchIcon"}),Object(x.jsx)("input",{ref:s,placeholder:"Search for friends",className:"searchInput"})]})}),Object(x.jsxs)("div",{className:"topbarRight",children:[Object(x.jsxs)("div",{className:"topbarIcons",children:[Object(x.jsxs)("div",{className:"topbarIconItem",children:[Object(x.jsx)(j.a,{}),Object(x.jsx)("span",{className:"topbarIconBadge",children:"1"})]}),Object(x.jsxs)("div",{className:"topbarIconItem",children:[Object(x.jsx)(m.b,{to:"/messenger",className:"topbarIconItemLink",children:Object(x.jsx)(d.a,{})}),Object(x.jsx)("span",{className:"topbarIconBadge",children:"2"})]}),Object(x.jsxs)("div",{className:"topbarIconItem",children:[Object(x.jsx)(b.a,{}),Object(x.jsx)("span",{className:"topbarIconBadge",children:"1"})]})]}),Object(x.jsx)(m.b,{to:"/profile/".concat(e.username),children:Object(x.jsx)("img",{src:e.profilePic?t+e.profilePic:t+"person/noAvatar.png",alt:"",className:"topbarImg"})})]})]}),Object(x.jsxs)("div",{className:"searchBarMobileContainer",children:[Object(x.jsx)("form",{className:"searchBar searchBarMobile",onSubmit:function(e){return r(e,!0)},children:Object(x.jsx)("input",{ref:n,placeholder:"Search for friends",className:"searchInput"})}),Object(x.jsx)("div",{onClick:function(e){return r(e,!0)},className:"searchIconContainerMobile",children:Object(x.jsx)(u.a,{className:"mobileSearchIcon"})})]})]})}s(113);var L=s(180),P=s(181),S=s(182),_=s(183),F=s(184),T=s(185),B=[{id:1,profilePicture:"person/1.jpeg",username:"Safak Kocaoglu"},{id:2,profilePicture:"person/2.jpeg",username:"Janell Shrum"},{id:3,profilePicture:"person/3.jpeg",username:"Alex Durden"},{id:4,profilePicture:"person/4.jpeg",username:"Dora Hawks"},{id:5,profilePicture:"person/5.jpeg",username:"Thomas Holden"},{id:6,profilePicture:"person/6.jpeg",username:"Shirley Beauchamp"},{id:7,profilePicture:"person/7.jpeg",username:"Travis Bennett"},{id:8,profilePicture:"person/8.jpeg",username:"Kristen Thomas"},{id:9,profilePicture:"person/9.jpeg",username:"Gary Duty"},{id:10,profilePicture:"person/10.jpeg",username:"Safak Kocaoglu"}];s(114);function R(e){var t=e.user;return Object(x.jsx)("div",{children:Object(x.jsxs)("li",{className:"sidebarFriend",children:[Object(x.jsx)("img",{className:"sidebarFriendImg",src:"http://localhost:8800/images/"+t.profilePicture,alt:""}),Object(x.jsx)("span",{className:"sidebarFriendName",children:t.username})]})})}function A(){return Object(x.jsx)("div",{className:"sidebar",children:Object(x.jsxs)("div",{className:"sidebarWrapper",children:[Object(x.jsxs)("ul",{className:"sidebarList",children:[Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(L.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Videos"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(P.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Groups"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(S.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Bookmarks"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(_.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Questions"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(F.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Jobs"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(T.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Events"})]})]}),Object(x.jsx)("button",{className:"sidebarButton",children:"Show More"}),Object(x.jsx)("hr",{className:"sidebarHr"}),Object(x.jsx)("ul",{className:"sidebarFriendList",children:B.map((function(e){return Object(x.jsx)(R,{user:e},e.id)}))})]})})}s(115);var E=s(186),U=s(187),D=s(188),W=s(189),M=s(190);function G(){var e=Object(c.useContext)(v).user,t="http://localhost:8800/images/",s=Object(c.useRef)(),n=Object(c.useState)(null),a=Object(p.a)(n,2),r=a[0],i=a[1],u=function(){var t=Object(l.a)(o.a.mark((function t(c){var n,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),n={userId:e._id,desc:s.current.value},!r){t.next=16;break}return a=new FormData,i=Date.now()+r.name,a.append("name",i),a.append("file",r),n.img=i,t.prev=8,t.next=11,k.post("/upload",a);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(8),console.log(t.t0);case 16:return t.prev=16,t.next=19,k.post("/posts",n);case 19:window.location.reload(),t.next=25;break;case 22:t.prev=22,t.t1=t.catch(16),console.log(t.t1);case 25:case"end":return t.stop()}}),t,null,[[8,13],[16,22]])})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"share",children:Object(x.jsxs)("div",{className:"shareWrapper",children:[Object(x.jsxs)("div",{className:"shareTop",children:[Object(x.jsx)("img",{className:"shareProfileImg",src:e.profilePic?t+e.profilePic:t+"person/noAvatar.png",alt:""}),Object(x.jsx)("input",{placeholder:"Whats on your mind "+e.username+"?",className:"shareInput",ref:s})]}),Object(x.jsx)("hr",{className:"shareHr"}),r&&Object(x.jsxs)("div",{className:"shareImgContainer",children:[Object(x.jsx)("img",{className:"shareImg",src:URL.createObjectURL(r),alt:""}),Object(x.jsx)(E.a,{className:"shareCancelImg",onClick:function(){return i(null)}})]}),Object(x.jsxs)("form",{className:"shareBottom",onSubmit:u,children:[Object(x.jsxs)("div",{className:"shareOptions",children:[Object(x.jsxs)("label",{htmlFor:"file",className:"shareOption",children:[Object(x.jsx)(U.a,{htmlColor:"tomato",className:"shareIcon"}),Object(x.jsx)("span",{className:"shareOptionText",children:"Photo or Video"}),Object(x.jsx)("input",{style:{display:"none"},type:"file",id:"file",accept:".png,.jpeg,.jpg",onChange:function(e){return i(e.target.files[0])}})]}),Object(x.jsxs)("div",{className:"shareOption",children:[Object(x.jsx)(D.a,{htmlColor:"blue",className:"shareIcon"}),Object(x.jsx)("span",{className:"shareOptionText",children:"Tag"})]}),Object(x.jsxs)("div",{className:"shareOption",children:[Object(x.jsx)(W.a,{htmlColor:"green",className:"shareIcon"}),Object(x.jsx)("span",{className:"shareOptionText",children:"Location"})]}),Object(x.jsxs)("div",{className:"shareOption",children:[Object(x.jsx)(M.a,{htmlColor:"goldenrod",className:"shareIcon"}),Object(x.jsx)("span",{className:"shareOptionText",children:"Feelings"})]})]}),Object(x.jsx)("button",{className:"shareButton",type:"submit",children:"Share"})]})]})})}s(116);var V=s(191),K=s(27);s(117);function q(e){var t=e.comment,s="http://localhost:8800/images/",n=Object(c.useState)(),a=Object(p.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/user?userId="+t.sender);case 2:s=e.sent,console.log("heres the commenter"),console.log(s.data),console.log("heres the comment sender"),i(s.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){console.log("heres commenter"),console.log(null===r||void 0===r?void 0:r.username)}),[r]),Object(x.jsxs)("div",{className:"comment",children:[Object(x.jsxs)("div",{className:"commentTop",children:[Object(x.jsx)("img",{src:(null===r||void 0===r?void 0:r.profilePic)?s+(null===r||void 0===r?void 0:r.profilePic):s+"person/noAvatar.png",className:"commentProfilePic"}),Object(x.jsxs)("div",{className:"commentTimeAgo",children:[null===r||void 0===r?void 0:r.username," \xa0 - \xa0 ",Object(K.a)(t.createdAt)]})]}),Object(x.jsx)("div",{className:"commentBody",children:t.text})]})}s(118);function H(e){var t=e.post,s=e.populateComments,n="http://localhost:8800/images/",a=Object(c.useContext)(v).user,r=Object(c.useRef)(),i=function(){var e=Object(l.a)(o.a.mark((function e(c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),n={postId:t._id,sender:a._id,text:r.current.value},e.next=4,k.post("/comments/"+t._id,n);case 4:r.current.value="",s();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"commentPreview",children:[Object(x.jsx)("img",{src:a.profilePic?n+a.profilePic:n+"person/noAvatar.png",className:"commentPreviewProfilePic"}),Object(x.jsx)("form",{style:{width:"90%"},onSubmit:function(e){i(e)},children:Object(x.jsx)("input",{ref:r,type:"text",placeholder:"What do you think?",className:"commentPreviewInput"})})]})}function J(e){var t=e.post,s=Object(c.useState)(t.likes.length),n=Object(p.a)(s,2),a=n[0],r=n[1],i=Object(c.useState)(!1),u=Object(p.a)(i,2),j=u[0],d=u[1],b=Object(c.useState)({}),m=Object(p.a)(b,2),h=m[0],O=m[1],f=Object(c.useState)([]),g=Object(p.a)(f,2),N=g[0],I=g[1],w="http://localhost:8800/images/",y=Object(c.useContext)(v).user,C=function(){var e=Object(l.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/comments/".concat(t._id));case 2:s=e.sent,I(s.data.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){C(),console.log("just populated them")}),[t]),Object(c.useEffect)((function(){d(t.likes.includes(y._id))}),[y._id,t.likes]),Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/user?userId=".concat(t.userId));case 2:s=e.sent,O(s.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.userId]);var L=function(){try{k.put("/posts/"+t._id+"/like",{userId:y._id})}catch(e){}r(j?a-1:a+1),d(!j)};return Object(x.jsx)("div",{className:"post",children:Object(x.jsxs)("div",{className:"postWrapper",children:[Object(x.jsxs)("div",{className:"postTop",children:[Object(x.jsxs)("div",{className:"postTopLeft",children:[Object(x.jsx)("img",{className:"postProfileImg",src:h.profilePic?w+h.profilePic:w+"person/noAvatar.png",alt:""}),Object(x.jsx)("span",{className:"postUsername",children:h.username}),Object(x.jsx)("span",{className:"postDate",children:Object(K.a)(t.createdAt)})]}),Object(x.jsx)("div",{className:"postTopRight",children:Object(x.jsx)(V.a,{})})]}),Object(x.jsxs)("div",{className:"postCenter",children:[Object(x.jsx)("span",{className:"postText",children:null===t||void 0===t?void 0:t.desc}),Object(x.jsx)("img",{className:"postImg",src:w+t.img,alt:""})]}),Object(x.jsxs)("div",{className:"postBottom",children:[Object(x.jsxs)("div",{className:"postBottomLeft",children:[Object(x.jsx)("img",{className:"likeButton",src:"".concat(w,"like.png"),onClick:L,alt:""}),Object(x.jsx)("img",{className:"likeButton",src:"".concat(w,"heart.png"),onClick:L,alt:""}),Object(x.jsxs)("span",{className:"postLikeCounter",children:[a," people like it"]})]}),Object(x.jsx)("div",{className:"postBottomRight",children:Object(x.jsxs)("span",{className:"postCommentText",children:[N.length," comments"]})})]}),Object(x.jsx)("div",{className:"postComments",children:N.map((function(e){return Object(x.jsx)(q,{comment:e},e._id)}))}),Object(x.jsx)(H,{post:t,populateComments:C})]})})}s(119);function z(e){var t=e.username,s=Object(c.useState)([]),n=Object(p.a)(s,2),a=n[0],r=n[1],i=Object(c.useContext)(v).user;return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,k.get("/posts/profile/"+t);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,k.get("/posts/timeline/"+i._id);case 8:e.t0=e.sent;case 9:s=e.t0,r(s.data.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,i._id]),Object(x.jsx)("div",{className:"feed",children:Object(x.jsxs)("div",{className:"feedWrapper",children:[(!t||t===i.username)&&Object(x.jsx)(G,{}),a.map((function(e){return Object(x.jsx)(J,{post:e},e._id)}))]})})}s(120),s(121);function Q(e){var t=e.user;return Object(x.jsxs)("li",{className:"rightbarFriend",children:[Object(x.jsxs)("div",{className:"rightbarProfileImgContainer",children:[Object(x.jsx)("img",{className:"rightbarProfileImg",src:"http://localhost:8800/images/"+t.profilePicture,alt:""}),Object(x.jsx)("span",{className:"rightbarOnline"})]}),Object(x.jsx)("span",{className:"rightbarUserName",children:t.username})]})}var X=s(192),Y=s(193);function Z(e){var t=e.user,s="http://localhost:8800/images/",n=Object(c.useState)([]),a=Object(p.a)(n,2),r=a[0],i=a[1],u=Object(c.useContext)(v),j=u.user,d=u.dispatch,b=Object(c.useState)(t),h=Object(p.a)(b,2),O=h[0],f=h[1],g=Object(c.useState)(j.followings.includes(null===O||void 0===O?void 0:O._id)),N=Object(p.a)(g,2),I=N[0],w=N[1],C=Object(y.h)(),L=null===C||void 0===C?void 0:C.state;Object(c.useEffect)((function(){L&&0!==Object.keys(L).length&&f(L)}),[j]),Object(c.useEffect)((function(){w(j.followings.includes(null===O||void 0===O?void 0:O._id))}),[j,O]),Object(c.useEffect)((function(){var e=!1;return function(){var t=Object(l.a)(o.a.mark((function t(){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!O||0===Object.keys(O).length){t.next=7;break}return t.next=4,k.get("/user/friends/"+O._id);case 4:s=t.sent,t.next=10;break;case 7:return t.next=9,k.get("/user/friends/"+j._id);case 9:s=t.sent;case 10:e||i(s.data),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!0}}),[j,O]);var P=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!I){e.next=7;break}return e.next=4,k.put("/user/"+O._id+"/unfollow",{userId:j._id});case 4:d({type:"UNFOLLOW",payload:O._id}),e.next=10;break;case 7:return e.next=9,k.put("/user/"+O._id+"/follow",{userId:j._id});case 9:d({type:"FOLLOW",payload:O._id});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:w(!I);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),S=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"birthdayContainer",children:[Object(x.jsx)("img",{className:"birthdayImg",src:"assets/gift.png",alt:""}),Object(x.jsxs)("span",{className:"birthdayText",children:[" ",Object(x.jsx)("b",{children:"Pola Foster"})," and ",Object(x.jsx)("b",{children:"3 other friends"})," have a birthday today"]})]}),Object(x.jsx)("img",{className:"rightbarAd",src:"assets/ad.png",alt:""}),Object(x.jsx)("h4",{className:"rightbarTitle",children:"Online Friends"}),Object(x.jsx)("ul",{className:"rightbarFriendList",children:B.map((function(e){return Object(x.jsx)(Q,{user:e},e.id)}))})]})},_=function(){return Object(x.jsxs)(x.Fragment,{children:[t.username!==j.username&&Object(x.jsxs)("button",{className:"rightbarFollowButton",onClick:P,children:[I?"Unfollow":"Follow",I?Object(x.jsx)(X.a,{}):Object(x.jsx)(Y.a,{})]}),Object(x.jsx)("h4",{className:"rightbarTitle",children:"User Information "}),Object(x.jsxs)("div",{className:"rightbarInfo",children:[Object(x.jsxs)("div",{className:"rightbarInfoItem",children:[Object(x.jsx)("span",{className:"rightbarInfoKey",children:"City:"}),Object(x.jsx)("span",{className:"rightbarInfoValue",children:t.city})]}),Object(x.jsxs)("div",{className:"rightbarInfoItem",children:[Object(x.jsx)("span",{className:"rightbarInfoKey",children:"From:"}),Object(x.jsx)("span",{className:"rightbarInfoValue",children:t.from})]}),Object(x.jsxs)("div",{className:"rightbarInfoItem",children:[Object(x.jsx)("span",{className:"rightbarInfoKey",children:"Relationship:"}),Object(x.jsx)("span",{className:"rightbarInfoValue",children:1===t.relationship?"Single":2===t.relationship?"Married":"-"})]})]}),Object(x.jsx)("h4",{className:"rightbarTitle",children:"User friends"}),Object(x.jsx)("div",{className:"rightbarFollowings",children:r.map((function(e){return Object(x.jsx)(m.b,{to:"/profile/"+e.username,style:{textDecoration:"none"},onClick:function(){return f(e)},children:Object(x.jsxs)("div",{className:"rightbarFollowing",children:[Object(x.jsx)("img",{src:e.profilePicture?s+e.profilePicture:s+"person/noAvatar.png",alt:"",className:"rightbarFollowingImg"}),Object(x.jsx)("span",{className:"rightbarFollowingName",children:e.username})]})},e._id)}))})]})};return Object(x.jsx)("div",{className:"rightbar",children:Object(x.jsx)("div",{className:"rightbarWrapper",children:t?Object(x.jsx)(_,{}):Object(x.jsx)(S,{})})})}s(59);function $(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{}),Object(x.jsxs)("div",{className:"homeContainer",children:[Object(x.jsx)(A,{}),Object(x.jsx)(z,{}),Object(x.jsx)(Z,{})]})]})}s(122);var ee=function(){var e=Object(l.a)(o.a.mark((function e(t,s){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"LOGIN_START"}),e.prev=1,e.next=4,k.post("/auth/login",t);case 4:c=e.sent,console.log("user credential"),console.log(t),console.log("the res from apicall"),console.log(c),s({type:"LOGIN_SUCCESS",payload:c.data}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),s({type:"LOGIN_FAILURE",payload:e.t0});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,s){return e.apply(this,arguments)}}(),te=s(194);function se(){var e=Object(c.useRef)(),t=Object(c.useRef)(),s=Object(c.useContext)(v),n=(s.user,s.isFetching),a=(s.error,s.dispatch);return Object(x.jsx)("div",{className:"login",children:Object(x.jsxs)("div",{className:"loginWrapper",children:[Object(x.jsxs)("div",{className:"loginLeft",children:[Object(x.jsx)("h3",{className:"loginLogo",children:"Lamasocial"}),Object(x.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on Lamasocial"})]}),Object(x.jsx)("div",{className:"loginRight",children:Object(x.jsxs)("form",{className:"loginBox",onSubmit:function(s){s.preventDefault(),ee({email:e.current.value,password:t.current.value},a)},children:[Object(x.jsx)("input",{placeholder:"Email",type:"email",className:"loginInput",ref:e}),Object(x.jsx)("input",{required:!0,placeholder:"Password",type:"password",minLength:"6",className:"loginInput",ref:t}),Object(x.jsx)("button",{className:"loginButton",disabled:n,children:n?Object(x.jsx)(te.a,{color:"white",size:"20px"}):"Log in"}),Object(x.jsx)("span",{className:"loginForgot",children:"Forgot password?"}),Object(x.jsx)(m.b,{to:"/register",className:"linkToLogin",children:Object(x.jsx)("button",{className:"loginRegisterButton",disabled:n,children:n?Object(x.jsx)(te.a,{color:"white",size:"20px"}):"Create a New Account"})})]})})]})})}s(123);function ce(){var e="http://localhost:8800/images/",t=Object(c.useState)({}),s=Object(p.a)(t,2),n=s[0],a=s[1],r=Object(y.i)().username;return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/user?username=".concat(r));case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(x.jsx)("div",{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{}),Object(x.jsxs)("div",{className:"profile",children:[Object(x.jsx)(A,{}),Object(x.jsxs)("div",{className:"profileRight",children:[Object(x.jsxs)("div",{className:"profileRightTop",children:[Object(x.jsxs)("div",{className:"profileCover",children:[Object(x.jsx)("img",{className:"profileCoverImg",src:n.coverPicture?e+n.coverPicture:e+"/person/noCover.png",alt:""}),Object(x.jsx)("img",{className:"profileUserImg",src:n.profilePic?e+n.profilePic:e+"/person/noAvatar.png",alt:""})]}),Object(x.jsxs)("div",{className:"profileInfo",children:[Object(x.jsx)("h4",{className:"profileInfoName",children:n.username}),Object(x.jsx)("span",{className:"profileInfoDesc",children:n.desc})]})]}),Object(x.jsxs)("div",{className:"profileRightBottom",children:[Object(x.jsx)(z,{username:r}),Object(x.jsx)(Z,{user:n})]})]})]})]})})}s(124);function ne(){var e=Object(c.useRef)(),t=Object(c.useRef)(),s=Object(c.useRef)(),n=Object(c.useRef)(),a=Object(y.g)(),r=Object(c.useContext)(v).dispatch,i=function(){var c=Object(l.a)(o.a.mark((function c(i){var l;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(i.preventDefault(),n.current.value===s.current.value){c.next=5;break}n.current.setCustomValidity("Passwords don't match!"),c.next=16;break;case 5:return l={username:e.current.value,email:t.current.value,password:s.current.value},c.prev=6,c.next=9,k.post("/auth/register",l);case 9:ee({email:t.current.value,password:s.current.value},r),a.push("/login"),c.next=16;break;case 13:c.prev=13,c.t0=c.catch(6),console.log(c.t0);case 16:case"end":return c.stop()}}),c,null,[[6,13]])})));return function(e){return c.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"login",children:Object(x.jsxs)("div",{className:"loginWrapper",children:[Object(x.jsxs)("div",{className:"loginLeft",children:[Object(x.jsx)("h3",{className:"loginLogo",children:"Lamasocial"}),Object(x.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on Lamasocial"})]}),Object(x.jsx)("div",{className:"loginRight",children:Object(x.jsxs)("form",{className:"loginBox",onSubmit:i,children:[Object(x.jsx)("input",{placeholder:"Username",required:!0,ref:e,className:"loginInput"}),Object(x.jsx)("input",{placeholder:"Email",type:"email",required:!0,ref:t,className:"loginInput"}),Object(x.jsx)("input",{placeholder:"Password",type:"password",required:!0,minLength:"6",ref:s,className:"loginInput"}),Object(x.jsx)("input",{placeholder:"Password Again",type:"password",required:!0,ref:n,className:"loginInput"}),Object(x.jsx)("button",{className:"loginButton",children:"Sign Up"}),Object(x.jsx)(m.b,{to:"/login",className:"loginRegisterLink",children:Object(x.jsx)("button",{type:"submit",className:"loginRegisterButton",children:"Log into Account"})})]})})]})})}s(125),s(126);function ae(e){var t=e.conversation,s=e.currentUser,n=Object(c.useState)({}),a=Object(p.a)(n,2),r=a[0],i=a[1],u="http://localhost:8800/images/";return Object(c.useEffect)((function(){var e=t.members.find((function(e){return e!==s._id}));(function(){var t=Object(l.a)(o.a.mark((function t(){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k("/user?userId="+e);case 3:s=t.sent,i(s.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[s,t]),Object(x.jsxs)("div",{className:"conversation",children:[Object(x.jsx)("img",{className:"conversationImg",src:r.profilePic?u+r.profilePic:u+"person/noAvatar.png",alt:""}),Object(x.jsx)("span",{className:"conversationName",children:r.username})]})}s(127);function re(e){var t=e.message,s=e.own,n="http://localhost:8800/images/";console.log("heres message"),console.log(t);var a=Object(c.useState)(),r=Object(p.a)(a,2),i=r[0],u=r[1],j=function(){var e=Object(l.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/user?userId="+t.sender);case 2:s=e.sent,u(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(x.jsxs)("div",{className:s?"message own":"message",children:[Object(x.jsxs)("div",{className:"messageTop",children:[Object(x.jsx)("img",{className:"messageImg",src:(null===i||void 0===i?void 0:i.data.profilePic)?n+(null===i||void 0===i?void 0:i.data.profilePic):n+"person/noAvatar.png",alt:""}),Object(x.jsx)("p",{className:"messageText",children:t.text})]}),Object(x.jsx)("div",{className:"messageBottom",children:Object(K.a)(t.createdAt)})]})}s(128);function ie(e){var t=e.onlineUsers,s=e.currentId,n=e.setCurrentChat,a=Object(c.useState)([]),r=Object(p.a)(a,2),i=r[0],u=r[1],j=Object(c.useState)([]),d=Object(p.a)(j,2),b=d[0],m=d[1],h="http://localhost:8800/images/";Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/user/friends/"+s);case 2:t=e.sent,u(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(c.useEffect)((function(){console.log("heres friends"),console.log(i),m(i.filter((function(e){return t.includes(e._id)})))}),[i,t]);var O=function(){var e=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("current id"),console.log(s),console.log("friend id"),console.log(t._id),e.next=7,k.get("/conversations/find/".concat(s,"/").concat(t._id));case 7:c=e.sent,n(c.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"chatOnline",children:b.map((function(e){return Object(x.jsxs)("div",{className:"chatOnlineFriend",onClick:function(){return O(e)},children:[Object(x.jsxs)("div",{className:"chatOnlineImgContainer",children:[Object(x.jsx)("img",{className:"chatOnlineImg",src:(null===e||void 0===e?void 0:e.profilePic)?h+e.profilePic:h+"person/noAvatar.png",alt:""}),Object(x.jsx)("div",{className:"chatOnlineBadge"})]}),Object(x.jsx)("div",{className:"chatOnlineName",children:e.username})]})}))})}var oe=s(80);function le(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(null),r=Object(p.a)(a,2),i=r[0],u=r[1],j=Object(c.useState)([]),d=Object(p.a)(j,2),b=d[0],m=d[1],O=Object(c.useState)(""),f=Object(p.a)(O,2),g=f[0],N=f[1],I=Object(c.useState)(null),w=Object(p.a)(I,2),y=w[0],L=w[1],P=Object(c.useState)([]),S=Object(p.a)(P,2),_=S[0],F=S[1],T=Object(c.useRef)(),B=Object(c.useContext)(v).user,R=Object(c.useRef)();Object(c.useEffect)((function(){T.current=Object(oe.io)("wss://dmatu-social-media.herokuapp.com"),T.current.on("connect",(function(){console.log("connected")})),T.current.on("time",(function(e){console.log("lmaoz timestringgg from messgng"),console.log(e)}));setTimeout((function(){console.log("heres socket current"),console.log(T.current.connected)}),5e3),T.current.on("getMessage",(function(e){L({sender:e.senderId,text:e.text,createdAt:Date.now()})}))}),[]),Object(c.useEffect)((function(){y&&(null===i||void 0===i?void 0:i.members.includes(y.sender))&&m((function(e){return[].concat(Object(h.a)(e),[y])}))}),[y,i]),Object(c.useEffect)((function(){T.current.emit("addUser",B._id),T.current.on("getUsers",(function(e){F(B.followings.filter((function(t){return e.some((function(e){return e.userId===t}))})))}))}),[B]),Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("/conversations/"+B._id);case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[B._id]),Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("/messages/"+(null===i||void 0===i?void 0:i._id));case 3:t=e.sent,m(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[i]);var A=function(){var e=Object(l.a)(o.a.mark((function e(t){var s,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={sender:B._id,text:g,conversationId:i._id},c=i.members.find((function(e){return e!==B._id})),T.current.emit("sendMessage",{senderId:B._id,receiverId:c,text:g}),e.prev=4,e.next=7,k.post("/messages",s);case 7:n=e.sent,m([].concat(Object(h.a)(b),[n.data])),N(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e;null===(e=R.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[b]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{}),Object(x.jsxs)("div",{className:"messenger",children:[Object(x.jsx)("div",{className:"chatMenu",children:Object(x.jsxs)("div",{className:"chatMenuWrapper",children:[Object(x.jsx)("input",{placeholder:"Search for friends",className:"chatMenuInput"}),s.map((function(e){return Object(x.jsx)("div",{onClick:function(){return u(e)},children:Object(x.jsx)(ae,{conversation:e,currentUser:B},e._id)},e._id)}))]})}),Object(x.jsx)("div",{className:"chatBox",children:Object(x.jsx)("div",{className:"chatBoxWrapper",children:i?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"chatBoxTop",children:b.map((function(e){return Object(x.jsx)("div",{ref:R,children:Object(x.jsx)(re,{message:e,own:e.sender===B._id},e._id)},e._id)}))}),Object(x.jsxs)("div",{className:"chatBoxBottom",children:[Object(x.jsx)("textarea",{className:"chatMessageInput",placeholder:"write something...",onChange:function(e){return N(e.target.value)},value:g}),Object(x.jsx)("button",{className:"chatSubmitButton",onClick:A,children:"Send"})]})]}):Object(x.jsx)("span",{className:"noConversationText",children:"Open a conversation to start a chat."})})}),Object(x.jsx)("div",{className:"chatOnline",children:Object(x.jsx)("div",{className:"chatOnlineWrapper",children:Object(x.jsx)(ie,{onlineUsers:_,currentId:B._id,setCurrentChat:u})})})]})]})}s(158),s(159);function ue(e){var t=e.name,s=e.profilePic,c=e.result,n="http://localhost:8800/images/",a=Object(y.g)(),r=function(){var e=t.split(" "),s="";return e.map((function(e){s+=e+"%20"})),("/profile/"+s).slice(0,-3)};return Object(x.jsxs)("div",{className:"resultContainer",onClick:function(){return a.push({pathname:r(),state:c})},children:[Object(x.jsx)("img",{src:s?n+s:n+"person/noAvatar.png",className:"resultImg"}),Object(x.jsx)("div",{className:"resultName",children:t})]})}function je(e){var t=e.results;return Object(x.jsx)("div",{className:"results",children:Object(x.jsxs)("div",{className:"resultsWrapper",children:[0===Object.keys(t).length&&Object(x.jsx)("div",{children:" Sorry, we couldn't find anyone with that username"}),t.map((function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(ue,{name:e.username,profilePic:e.profilePic,result:e})})}))]})})}s(160);function de(){var e=Object(y.h)().state.filteredUsers;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{}),Object(x.jsxs)("div",{className:"searchContainer",children:[Object(x.jsx)(A,{}),Object(x.jsx)(je,{results:e}),Object(x.jsx)(Z,{})]})]})}var be=function(){var e=Object(c.useContext)(v).user;return Object(x.jsx)(m.a,{children:Object(x.jsxs)(y.d,{children:[Object(x.jsx)(y.b,{exact:!0,path:"/",children:e?Object(x.jsx)($,{}):Object(x.jsx)(ne,{})}),Object(x.jsx)(y.b,{path:"/login",children:e?Object(x.jsx)(y.a,{to:"/"}):Object(x.jsx)(se,{})}),Object(x.jsx)(y.b,{path:"/register",children:e?Object(x.jsx)(y.a,{to:"/"}):Object(x.jsx)(ne,{})}),Object(x.jsx)(y.b,{path:"/messenger",children:e?Object(x.jsx)(le,{}):Object(x.jsx)(y.a,{to:"/"})}),Object(x.jsx)(y.b,{path:"/profile/:username",children:e?Object(x.jsx)(ce,{}):Object(x.jsx)(y.a,{to:"/"})}),Object(x.jsx)(y.b,{path:"/search",children:e?Object(x.jsx)(de,{}):Object(x.jsx)(y.a,{to:"/"})})]})})};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(N,{children:Object(x.jsx)(be,{})})}),document.getElementById("root"))},59:function(e,t,s){},87:function(e,t,s){}},[[161,1,2]]]);
//# sourceMappingURL=main.235aa9b2.chunk.js.map