(this["webpackJsonpflickr-image-searcher"]=this["webpackJsonpflickr-image-searcher"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(22),i=n.n(o),s=(n(76),n(16)),u=(n(77),n(23)),j=n(9),l=n(56),O=n(7),b=(n(82),n(8));!function(e){e.ADD_BOOKMARK="ADD_BOOKMARK",e.REMOVE_BOOKMARK="REMOVE_BOOKMARK"}(a||(a={}));var d,f={bookmarksList:{}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.ADD_BOOKMARK:var n=Object.assign(e.bookmarksList);return n[t.payload.bookmark]=t.payload,Object(b.a)(Object(b.a)({},e),{},{bookmarksList:n});case a.REMOVE_BOOKMARK:var c=Object.assign(e.bookmarksList);return delete c[t.payload],Object(b.a)(Object(b.a)({},e),{},{bookmarksList:c});default:return e}},m=n(141),g=n(132),E=n(133),p=n(134),v=n(135),S=n(136),T=n(137),x=n(140),_=(n(83),{FIRST_PAGE:1,EMPTY:"",TRUE:!0,FALSE:!1,SEARCH_DELAY_TIME:1e3,PAGE_SIZE:100,PAGES_PORTION:5,IDLE_DELAY_TIME:6e4,IDLE_DEBOUNCE:500,ZERO:0}),k="Back",A="Forward",L="Page",I="of",M="Bookmark it!",R="Remove it!",P="User is not active",N="for",y="seconds.",D="No images here. Would you try to search for anything else?",F="Image Finder",C="\xa9 Copyrights",Y="You have been authorized as ",B="You are not authorized",G="some tags?",K="main",U="bookmarks",w=n(2),z=function(e){var t=e.imageSrcPath,n=e.imageTitle,a=e.handleAddButtonClick,r=e.handleRemoveButtonClick,o=e.userTags,i=Object(c.useState)(_.EMPTY),u=Object(s.a)(i,2),l=u[0],O=u[1];return Object(w.jsxs)(m.a,{className:"ImageCard",children:[Object(w.jsxs)(g.a,{children:[Object(w.jsx)(E.a,{component:"img",height:"180",image:t,title:n}),Object(w.jsx)(p.a,{children:Object(w.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",noWrap:!0,children:n})})]}),Object(w.jsxs)(S.a,{className:"CardActionsContainer",children:[Object(w.jsxs)(j.a,{exact:!0,path:"/".concat(K),children:[Object(w.jsx)(T.a,{size:"small",color:"primary",variant:"contained",onClick:function(){return a(t,n,l)},children:M}),Object(w.jsx)(x.a,{placeholder:G,onChange:function(e){O(e.currentTarget.value)}})]}),Object(w.jsxs)(j.a,{exact:!0,path:"/".concat(U),children:[Object(w.jsx)(T.a,{size:"small",color:"primary",variant:"contained",onClick:function(){return r(t)},children:R}),Object(w.jsx)(v.a,{gutterBottom:!0,variant:"h5",title:o,noWrap:!0,children:o})]})]})]})},H=(n(86),function(){return Object(w.jsx)("div",{className:"Loader",children:Object(w.jsx)("div",{className:"spinner"})})}),V=function(){var e=Object(O.c)((function(e){return e.imagesList.imagesInfoList})),t=Object(O.c)((function(e){return Object.values(e.bookmarks.bookmarksList)})),n=Object(O.c)((function(e){return e.imagesList.isLoading})),c=Object(O.b)(),r=function(e,t,n){c(function(e,t,n){return{type:a.ADD_BOOKMARK,payload:{bookmark:e,imageTitle:t,tagValue:n}}}(e,t,n))},o=function(e){var t;c((t=e,{type:a.REMOVE_BOOKMARK,payload:t}))};return Object(w.jsxs)("div",{className:"ImagesContainer",children:[n&&Object(w.jsx)(H,{}),Object(w.jsx)(j.a,{exact:!0,path:"/".concat(K),children:e.page?e.photo.map((function(e){var t="https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg");if(t)return Object(w.jsx)(z,{imageSrcPath:t,imageTitle:e.title,handleAddButtonClick:r,handleRemoveButtonClick:o},e.id)})):"".concat(D)}),Object(w.jsx)(j.a,{exact:!0,path:"/".concat(U),children:t.map((function(e){if(e)return Object(w.jsx)(z,{imageSrcPath:e.bookmark,imageTitle:e.imageTitle,userTags:e.tagValue,handleAddButtonClick:r,handleRemoveButtonClick:o},e)}))})]})},J=(n(87),n(64)),q=n.n(J),W=n(65),Z=n.n(W),Q=n(43),X=n.n(Q),$=n(62),ee="459175857441-p5479p7qs6qjllf3p7n3f7678800h1li.apps.googleusercontent.com",te=n(63),ne=n.n(te),ae=function(e,t){return ne.a.get("".concat("https://www.flickr.com/services/rest/?").concat("method=flickr.photos.search","&api_key=").concat("de58ac752340901ded737da22c3fe0c0","&text=").concat(e,"&page=").concat(t,"&").concat("format=json&nojsoncallback=1")).then((function(e){return e.data}))};!function(e){e.SET_IMAGES_INFO="SET_IMAGES_INFO",e.SET_IS_LOADING="SET_IS_LOADING"}(d||(d={}));var ce,re={imagesInfoList:{page:0,pages:0,perpage:0,total:"0",photo:[]},isLoading:_.FALSE},oe=function(e){return{type:d.SET_IMAGES_INFO,payload:e}},ie=function(e){return{type:d.SET_IS_LOADING,payload:e}},se=function(e,t){return function(){var n=Object($.a)(X.a.mark((function n(a){var c;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=9;break}return a(ie(_.TRUE)),n.next=4,ae(e,t);case 4:c=n.sent,a(oe(c.photos)),a(ie(_.FALSE)),n.next=10;break;case 9:a(oe(re.imagesInfoList));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SET_IMAGES_INFO:return Object(b.a)(Object(b.a)({},e),{},{imagesInfoList:t.payload});case d.SET_IS_LOADING:return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.payload});default:return e}},je=function(){for(var e=Object(O.b)(),t=Object(O.c)((function(e){return e.searchForm.searchTerm})),n=Object(O.c)((function(e){return e.imagesList.imagesInfoList.page})),a=Object(O.c)((function(e){return e.imagesList.imagesInfoList.pages})),r=[],o=1;o<=a;o++)r.push(o);var i=Object(c.useState)(1),u=Object(s.a)(i,2),j=u[0],l=u[1],b=Math.ceil(a/_.PAGES_PORTION),d=(j-1)*_.PAGES_PORTION+1,f=j*_.PAGES_PORTION;return Object(w.jsxs)("div",{className:"Paginator",children:[j>1&&Object(w.jsx)(T.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return l(j-1)},startIcon:Object(w.jsx)(q.a,{}),children:k}),n!==_.ZERO&&L,r.filter((function(e){return e>=d&&e<=f})).map((function(a){return Object(w.jsx)("span",{className:"".concat(n===a&&"selected-page"),onClick:function(){e(se(t,a))},children:a},a)})),n!==_.ZERO&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("span",{children:[" ",I," "]}),Object(w.jsxs)("span",{children:[a," "]})]}),b>j&&Object(w.jsx)(T.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return l(j+1)},startIcon:Object(w.jsx)(Z.a,{}),children:A})]})};!function(e){e.SET_SEARCH_TERM="SET_SEARCH_TERM"}(ce||(ce={}));var le={searchTerm:""},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce.SET_SEARCH_TERM:return Object(b.a)(Object(b.a)({},e),{},{searchTerm:t.payload.toLowerCase()});default:return e}},be=(n(108),function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.searchForm.searchTerm})),n=function(e,t){var n=Object(c.useState)(e),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(c.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[t,e]),r}(t,_.SEARCH_DELAY_TIME),a=Object(O.c)((function(e){return e.imagesList.imagesInfoList.page})),r=Object(O.c)((function(e){return e.imagesList.isLoading}));Object(c.useEffect)((function(){n&&e(se(t,a||_.FIRST_PAGE))}),[a,n,e,t]);return Object(w.jsxs)("form",{className:"SearchForm",onSubmit:function(n){n.preventDefault(),t&&e(se(t,a||_.FIRST_PAGE))},children:[Object(w.jsx)("input",{className:"SearchInput",value:t,onChange:function(t){var n=t.target.value;e(function(e){return{type:ce.SET_SEARCH_TERM,payload:e}}(n))}}),r&&Object(w.jsx)("div",{children:"Searching ..."})]})}),de=(n(109),function(){return Object(w.jsxs)("div",{className:"MainPage",children:[Object(w.jsx)(be,{}),Object(w.jsx)(je,{}),Object(w.jsx)(V,{})]})}),fe=(n(110),function(){return Object(w.jsx)("div",{className:"BookmarksPage",children:Object(w.jsx)(V,{})})}),he=n(66),me=n.n(he),ge=n(67),Ee=n.n(ge),pe=(n(111),n(138)),ve=n(139),Se=function(){var e=r.a.useState("main"),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(w.jsx)("div",{className:"SideBar",children:Object(w.jsxs)(pe.a,{value:n,onChange:function(e,t){a(t)},className:"Nav",children:[Object(w.jsx)(ve.a,{component:u.b,to:K,label:"Main",value:K,className:"NavLink",icon:Object(w.jsx)(me.a,{fontSize:"large"})}),Object(w.jsx)(ve.a,{component:u.b,to:U,label:"Bookmarks",value:U,className:"NavLink",icon:Object(w.jsx)(Ee.a,{fontSize:"large"})})]})})},Te=(n(112),function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){a((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[n]),Object(w.jsxs)("div",{className:"IdleMask",children:[P," ",N," ",n," ",y]})}),xe=(n(113),n(37)),_e="SET_USER_DATA",ke="SET_USER_FAILURE",Ae="SET_DEFAULT_VALUES",Le="AUTH_REDUCER_TOGGLE_IS_LOADING_PROGRESS",Ie={userData:{Aa:_.EMPTY,accessToken:_.EMPTY,ft:{FS:_.EMPTY,Te:_.EMPTY,qU:_.EMPTY,lS:_.EMPTY,yJ:_.EMPTY},googleId:_.EMPTY,profileObj:{googleId:_.EMPTY,imageUrl:_.EMPTY,email:_.EMPTY,name:_.EMPTY,givenName:_.EMPTY},qc:{token_type:_.EMPTY,access_token:_.EMPTY},tokenId:_.EMPTY,tokenObj:{token_type:_.EMPTY,access_token:_.EMPTY,scope:_.EMPTY,login_hint:_.EMPTY}},isAuthorized:_.FALSE,isLoading:_.FALSE,userFailureMessage:_.EMPTY},Me=function(){return{type:Ae}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(b.a)(Object(b.a)({},e),{},{userData:t.userData,isAuthorized:_.TRUE});case Ae:return Object(b.a)(Object(b.a)({},e),{},{userData:Ie.userData,isAuthorized:_.FALSE,token:_.EMPTY});case ke:return Object(b.a)(Object(b.a)({},e),{},{userFailureMessage:t.userFailureMessage});case Le:return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.isLoading});default:return e}},Pe=function(){var e=Object(O.b)();return Object(w.jsx)(xe.GoogleLogin,{clientId:ee,buttonText:"Login",onSuccess:function(t){e({type:_e,userData:t})},onFailure:function(t){e({type:ke,userFailureMessage:t})},cookiePolicy:"single_host_origin"})},Ne=function(){var e=Object(O.b)();return Object(w.jsx)(xe.GoogleLogout,{clientId:ee,buttonText:"Logout",onLogoutSuccess:function(){e(Me())}})},ye=function(){var e=Object(O.c)((function(e){return e.auth.userData.profileObj.name})),t=Object(O.c)((function(e){return e.auth.isAuthorized}));return Object(w.jsxs)("div",{className:"Header",children:[Object(w.jsx)("h1",{children:F}),Object(w.jsx)(w.Fragment,{children:t?"".concat(Y," ").concat(e):B}),t?Object(w.jsx)(Ne,{}):Object(w.jsx)(Pe,{})]})},De=(n(114),function(){return Object(w.jsx)("div",{className:"Footer",children:C})});var Fe=function(){var e=Object(O.b)(),t=Object(c.useState)(_.FALSE),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(l.a)({timeout:_.IDLE_DELAY_TIME,onIdle:function(){r(_.TRUE),e(Me())},onActive:function(){r(_.FALSE)},debounce:_.IDLE_DEBOUNCE}),Object(w.jsxs)("div",{className:"App",children:[a&&Object(w.jsx)(Te,{}),Object(w.jsxs)(u.a,{children:[Object(w.jsx)(ye,{}),Object(w.jsx)(Se,{}),Object(w.jsx)(j.a,{exact:!0,path:"/".concat(K),children:Object(w.jsx)(de,{})}),Object(w.jsx)(j.a,{exact:!0,path:"/".concat(U),children:Object(w.jsx)(fe,{})}),Object(w.jsx)(De,{})]})]})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},Ye=n(25),Be=n(68),Ge=n(69),Ke=Object(Ye.combineReducers)({imagesList:ue,searchForm:Oe,bookmarks:h,auth:Re}),Ue=Object(Ye.createStore)(Ke,localStorage.reduxState?JSON.parse(localStorage.reduxState):{},Object(Be.composeWithDevTools)(Object(Ye.applyMiddleware)(Ge.a)));Ue.subscribe((function(){return localStorage.reduxState=JSON.stringify(Ue.getState())}));var we=Ue;i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(O.a,{store:we,children:Object(w.jsx)(Fe,{})})}),document.getElementById("root")),Ce()},76:function(e,t,n){},77:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.16c77ebd.chunk.js.map