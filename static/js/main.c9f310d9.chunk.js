(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"l",(function(){return c})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"o",(function(){return E}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAILED",l="PURCHASE_BURGER_START",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAILED",g="AUTH_START",h="AUTH_SUCCESS",f="AUTH_FAILED",b="AUTH_LOGOUT",E="SET_AUTH_REDIRECT_PATH"},,,,,,,,,,function(e,t,n){"use strict";var r=n(1),a=n(17),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},u=n(20),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then((function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){n(function(e){return{type:r.g,error:e}}(e))}))}},p=n(31),m=n.n(p),g=function(e,t){return{type:r.e,idToken:e,userId:t}},h=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},f=function(e){return function(t){setTimeout((function(){t(h())}),1e3*e)}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat("AIzaSyBq_0P7VpD94LJTobIDFpqY93iYoUdtnH4");n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyBq_0P7VpD94LJTobIDFpqY93iYoUdtnH4")),m.a.post(i,o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("userId",e.data.localId),localStorage.setItem("expirationDate",t),a(g(e.data.idToken,e.data.localId)),a(f(e.data.expiresIn))})).catch((function(e){console.log(e),a(function(e){return{type:r.b,error:e}}(e.response.data.error))}))}},E=function(e){return{type:r.o,path:e}},_=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(h());else{var r=localStorage.getItem("userId");e(g(t,r)),e(f((n.getTime()-(new Date).getTime())/1e3))}}else e(h())}};n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return h})),n.d(t,"j",(function(){return E})),n.d(t,"c",(function(){return _}))},,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__wtQXh",BreadTop:"BurgerIngredients_BreadTop__3M2jF",Seeds1:"BurgerIngredients_Seeds1__p7_n-",Seeds2:"BurgerIngredients_Seeds2__1nv0c",Meat:"BurgerIngredients_Meat__1ylfY",Cheese:"BurgerIngredients_Cheese__3qWpp",Salad:"BurgerIngredients_Salad__nySHS",Bacon:"BurgerIngredients_Bacon__3HC-C"}},,function(e,t,n){"use strict";var r=n(31),a=n.n(r).a.create({baseURL:"https://burger-builder-46b8d.firebaseio.com/"});t.a=a},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(59),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(8),a=n(9),o=n(12),i=n(10),c=n(13),u=n(0),l=n.n(u),s=n(63),d=n.n(s),p=n(29),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{show:this.props.show,clicked:this.props.clicked}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=m},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(40),i=n.n(o);t.a=function(e){return a.a.createElement("button",{onClick:e.clicked,className:[i.a.Button,i.a[e.btnType]].join(" ")},e.children)}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(64),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(28),a=n(0),o=n.n(a),i=n(30);t.a=function(e,t){return function(n){var c=Object(a.useState)(null),u=Object(r.a)(c,2),l=u[0],s=u[1],d=t.interceptors.request.use((function(e){return s(null),e})),p=t.interceptors.response.use((function(e){return e}),(function(e){s(e)}));Object(a.useEffect)((function(e){return function(){t.interceptors.request.eject(e),t.interceptors.response.eject(p)}}),[d,p]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{show:l,clicked:function(e){s(e)}},l?l.message:null),o.a.createElement(e,n))}}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(66),a=n(0),o=n.n(a),i=n(62),c=n.n(i),u=n(8),l=n(9),s=n(12),d=n(10),p=n(13),m=n(15),g=n.n(m),h=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:g.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:g.a.BreadTop},o.a.createElement("div",{className:g.a.Seeds1}),o.a.createElement("div",{className:g.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:g.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:g.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:g.a.Salad});break;case"bacon":e=o.a.createElement("div",{className:g.a.Bacon});break;default:e=null}return e}}]),t}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(h,{type:t,key:t+n})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please add some ingredients to your burger.")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(h,{type:"bread-top"}),t,o.a.createElement(h,{type:"bread-bottom"}))}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},,function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,n){e.exports={DrawerToggle:"DrawToggle_DrawerToggle__1OfNP"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Content:"Layout_Content__2WLOk"}},,function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load2:"Spinner_load2__2gkgc"}},,,function(e,t,n){e.exports=n(95)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(26),i=n.n(o),c=(n(72),n(28)),u=n(32),l=n.n(u),s=n(54),d=n.n(s),p=n(55),m=n.n(p),g=function(e){return a.a.createElement("div",{className:m.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:d.a,alt:"My Burger"}))},h=n(19),f=n(35),b=n.n(f),E=function(e){return a.a.createElement("li",{className:b.a.NavigationItem},a.a.createElement(h.b,{exact:!0,to:e.link,activeClassName:b.a.active},e.children))},_=n(57),v=n.n(_),k=function(e){return a.a.createElement("ul",{className:v.a.NavigationItems},a.a.createElement(E,{link:"/"},"Burger Builder"),e.isAuthenticated?a.a.createElement(a.a.Fragment,null,a.a.createElement(E,{link:"/orders"},"Orders"),a.a.createElement(E,{link:"/logout"},"Logout")):a.a.createElement(E,{link:"/auth"},"Login"))},y=n(58),O=n.n(y),S=function(e){return a.a.createElement("div",{onClick:e.clicked,className:O.a.DrawerToggle},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},I=function(e){return a.a.createElement("header",{className:l.a.Toolbar},a.a.createElement(S,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:l.a.Logo},a.a.createElement(g,null)),a.a.createElement("nav",{className:l.a.DesktopOnly},a.a.createElement(k,{isAuthenticated:e.isAuth})))},C=n(29),B=n(22),T=n.n(B),N=function(e){var t=[T.a.SideDrawer,T.a.Close];return e.open&&(t=[T.a.SideDrawer,T.a.Open]),a.a.createElement(a.a.Fragment,null,a.a.createElement(C.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:T.a.Logo},a.a.createElement(g,null)),a.a.createElement("nav",null,a.a.createElement(k,{isAuthenticated:e.isAuth}))))},j=n(60),D=n.n(j),A=n(7);var w=Object(A.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))((function(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),o=n[0],i=n[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(I,{drawerToggleClicked:function(){i(!o)},isAuth:e.isAuthenticated}),a.a.createElement(N,{open:o,closed:function(){i(!1)},isAuth:e.isAuthenticated}),a.a.createElement("main",{className:D.a.Content},e.children))})),L=n(20),R=n(8),x=n(9),P=n(12),H=n(10),U=n(13),F=n(53),M=n(39),Y=n.n(M),q=n(25),G=n.n(q),X=function(e){return a.a.createElement("div",{className:G.a.BuildControl},a.a.createElement("div",{className:G.a.Label},e.label),a.a.createElement("button",{className:G.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:G.a.More,onClick:e.added},"More"))},z=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],W=function(e){return a.a.createElement("div",{className:Y.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),z.map((function(t){return a.a.createElement(X,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:Y.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},V=n(30),J=n(33),K=function(e){function t(){return Object(R.a)(this,t),Object(P.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: $",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to checkout?"),a.a.createElement(J.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(J.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),Q=n(41),$=n(42),Z=n(17),ee=n(11),te=function(e){function t(){var e,n;Object(R.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(P.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(a)))).state={purchaseable:!1,purchasing:!1,error:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchased(),n.props.history.push("/checkout")},n}return Object(U.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(L.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.state.error?a.a.createElement("p",{style:{textAlign:"center"}},"Ingredients can't be loaded!"):a.a.createElement(Q.a,null);return this.props.ings&&(r=a.a.createElement(a.a.Fragment,null,a.a.createElement(F.a,{ingredients:this.props.ings}),a.a.createElement(W,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})),n=a.a.createElement(K,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(a.a.Fragment,null,a.a.createElement(V.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),ne=Object(A.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,purchase:e.order.purchase,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(ee.a(t))},onIngredientRemoved:function(t){return e(ee.i(t))},onInitIngredients:function(){return e(ee.e())},onInitPurchased:function(){return e(ee.h())},onSetAuthRedirectPath:function(t){return e(ee.j(t))}}}))(Object($.a)(te,Z.a)),re=n(16),ae=function(e){function t(){return Object(R.a)(this,t),Object(P.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(re.a,{to:"/"})}}]),t}(r.Component),oe=Object(A.b)(null,(function(e){return{onLogout:function(){return e(ee.f())}}}))(ae),ie=a.a.lazy((function(){return n.e(3).then(n.bind(null,103))})),ce=a.a.lazy((function(){return n.e(5).then(n.bind(null,104))})),ue=a.a.lazy((function(){return n.e(4).then(n.bind(null,102))}));var le=Object(re.g)(Object(A.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSign:function(){return e(ee.c())}}}))((function(e){Object(r.useEffect)((function(){e.onTryAutoSign()}),[e]);var t=a.a.createElement(re.d,null,a.a.createElement(re.b,{path:"/",exact:!0,component:ne}),a.a.createElement(re.b,{path:"/auth",component:ue}),a.a.createElement(re.a,{to:"/"}));return e.isAuthenticated&&(t=a.a.createElement(re.d,null,a.a.createElement(re.b,{path:"/",exact:!0,component:ne}),a.a.createElement(re.b,{path:"/auth",component:ue}),a.a.createElement(re.b,{path:"/checkout",component:ie}),a.a.createElement(re.b,{path:"/orders",component:ce}),a.a.createElement(re.b,{path:"/logout",component:oe}))),a.a.createElement("div",null,a.a.createElement(w,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("p",null,"Loading...")},t)))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=n(18),de=n(23),pe=n(1),me=function(e,t){return Object(L.a)({},e,{},t)},ge={ingredients:null,totalPrice:4,error:!1,building:!1},he={salad:.5,cheese:.4,meat:1.3,bacon:.7},fe=function(e,t){var n=Object(de.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:me(e.ingredients,n),totalPrice:e.totalPrice+he[t.ingredientName],building:!0};return me(e,r)},be=function(e,t){var n=Object(de.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:me(e.ingredients,n),totalPrice:e.totalPrice+he[t.ingredientName],building:!0};return me(e,r)},Ee=function(e,t){return me(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},_e=function(e,t){return me(e,{error:!0})},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.a:return fe(e,t);case pe.n:return be(e,t);case pe.p:return Ee(e,t);case pe.f:return _e(e);default:return e}},ke={orders:[],loading:!1,purchase:!1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.h:return me(e,{loading:!0});case pe.i:return me(e,{orders:t.orders,loading:!1});case pe.g:return me(e,{loading:!1});case pe.m:return me(e,{purchase:!1});case pe.k:return me(e,{loading:!0});case pe.l:var n=me(t.orderData,{id:t.orderId});return me(e,{loading:!1,orders:e.orders.concat(n),purchase:!0});case pe.j:return me(e,{loading:!1});default:return e}},Oe={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.d:return me(e,{error:null,loading:!0});case pe.e:return me(e,{token:t.idToken,userId:t.userId,error:null,loading:!1});case pe.b:return me(e,{loading:!1,error:t.error});case pe.c:return me(e,{token:null,userId:null});case pe.o:return me(e,{path:t.path});default:return e}},Ie=n(65),Ce=Object(se.c)({burgerBuilder:ve,order:ye,auth:Se}),Be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d,Te=Object(se.e)(Ce,Be(Object(se.a)(Ie.a))),Ne=a.a.createElement(A.a,{store:Te},a.a.createElement(h.a,null,a.a.createElement(le,null)));i.a.render(Ne,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[67,1,2]]]);
//# sourceMappingURL=main.c9f310d9.chunk.js.map