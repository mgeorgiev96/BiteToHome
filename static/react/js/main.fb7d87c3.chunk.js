(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(10),s=a.n(i),r=(a(110),a(111),a(112),a(1));var o=function(){return Object(r.jsxs)("div",{id:"home",children:[Object(r.jsx)("img",{src:"./static/react/images/cake3.jpg",className:"left_background"}),Object(r.jsx)("img",{src:"./static/react/images/toa12.jpg",className:"right_background"}),Object(r.jsxs)("footer",{children:[Object(r.jsxs)("div",{className:"terms",children:[Object(r.jsx)("a",{href:"#home",children:"Terms of Service"}),Object(r.jsx)("a",{href:"#home",children:"Privacy and Policy"}),Object(r.jsx)("p",{children:"\xa9 2021 BiteToHome"})]}),Object(r.jsxs)("div",{className:"terms",children:[Object(r.jsx)("a",{href:"#home",children:"8154 East Mayflower Ave.Brooklyn, NY 11224"}),Object(r.jsx)("p",{children:"New York"})]}),Object(r.jsxs)("div",{className:"terms",children:[Object(r.jsx)("a",{href:"#home",children:"(999)-999-9999"}),Object(r.jsx)("p",{children:"bitetohome@tax.co"})]})]})]})},j=a(37),m=a.n(j),l=a(14),d="ORDER",u="USER",b="ADD_CART",h="REMOVE_CART",O=function(e,t){return{type:b,payload:{total:e,item:t}}},g=function(e){return{type:u,payload:e}};var p=Object(l.b)((function(e){return{menu:e.menu}}),(function(e){return{userData:function(t){return e(g(t))}}}))((function(e){return Object(c.useEffect)((function(){m.a.get("/info").then((function(t){e.userData(t.data)}))}),[]),Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("img",{className:"logo_image",src:"./static/react/images/logo.png"}),Object(r.jsxs)("ul",{className:"home_navbar",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#home",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#menu",children:"Menu"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#order",children:"Order"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#about",children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#contact",children:"Contact"})})]})]})})),x=a(59),f=a(186),v=a(188),y=a(190),N=a(23),C=a(16),z=a.n(C),k=Object(f.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"}}}));var _=Object(l.b)((function(e){return{menu:e.menu}}))((function(e){var t=k(),a=n.a.useState(!1),c=Object(x.a)(a,2);return c[0],c[1],Object(r.jsxs)("div",{id:"menu",children:[Object(r.jsx)("h5",{children:"OUR MENU"}),Object(r.jsx)("h1",{children:"Specialties From The Kitchen"}),Object(r.jsx)("div",{className:"container_menu",children:e.menu.menu.map((function(e){return Object(r.jsxs)(v.a,{className:"card_container",children:[Object(r.jsx)(y.a,{className:t.media,image:e.image,title:e.title}),Object(r.jsx)(N.b,{to:"/".concat(e.title.toLowerCase()),children:Object(r.jsxs)("h3",{className:"card_title",children:[e.icon," ",e.title]})})]},z()())}))})]})})),T=a(199),S=a(191),E=a(91),w=a.n(E),P=a(92),D=a.n(P);var B=Object(l.b)((function(e){return{menu:e.menu}}),(function(e){return{order:function(){return e({type:d})},userData:function(t){return e(g(t))}}}))((function(e){return Object(r.jsx)(w.a,{stripeKey:"pk_test_51GxXTwJWnlXzpGEmHhKz3nGdCrzRjY8QE4fuYMo6CNYAuJXIQCDMy2LXCAVyTbME9zrYK60HxAjBEaE9ulvYSRJ700jdk4z5x2",token:function(t,a){m.a.post("/save-purchase",{amount:e.menu.total,items:e.menu.cart,date:D()(Date.now()).format("LLLL")}).then((function(t){e.userData(t.data),e.order()}))},name:"BiteToHome",description:"Fresh Food",image:"https://i.imgur.com/YtRT1Kq.png",ComponentClass:"div",panelLabel:"Pay",amount:100*e.menu.total,currency:"USD",children:Object(r.jsx)(S.a,{className:"stripe_button",style:{color:"white",backgroundColor:"black"},variant:"outlined",children:"Pay With Card"})})}));var M=Object(l.b)((function(e){return{menu:e.menu}}),(function(e){return{removeCart:function(t,a){return e(function(e,t){return{type:h,payload:{total:e,item:t}}}(t,a))},userData:function(t){return e(g(t))}}}))((function(e){var t=function(){var t=document.getElementById("username"),a=document.getElementById("password");m.a.post("/login",{username:t.value,password:a.value}).then((function(c){"password"===c.data?a.style.border="1px solid red":"username"===c.data?t.style.border="1px solid red":e.userData(c.data)}))};return Object(r.jsx)("div",{id:"order",children:Object(r.jsxs)("div",{className:"form_container",children:[Object(r.jsxs)("div",{className:"cart",children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("i",{className:"fas fa-shopping-basket"})," Basket: $",e.menu.total]}),Object(r.jsx)("ul",{children:Object(r.jsxs)("li",{children:[Object(r.jsx)("img",{style:{opacity:0},src:""}),Object(r.jsx)("p",{children:"Product"}),Object(r.jsx)("p",{children:"Qty"}),Object(r.jsx)("p",{children:"Price"}),Object(r.jsx)("i",{style:{opacity:0},className:"fas fa-trash-alt"})]})}),Object(r.jsx)("ul",{className:"cart_items",children:e.menu.cart.map((function(t,a){return Object(r.jsxs)("li",{children:[Object(r.jsx)("img",{src:t.image}),Object(r.jsx)("p",{children:t.name}),Object(r.jsx)("p",{children:t.qty}),Object(r.jsxs)("p",{children:["$",t.price*t.qty]}),Object(r.jsx)("i",{onClick:function(){return a=t.price*t.qty,c={name:t.name},void e.removeCart(a,c);var a,c},className:"fas fa-trash-alt"})]},z()())}))})]}),e.menu.user.name?Object(r.jsxs)("div",{className:"user_container",children:[Object(r.jsxs)("h2",{children:["Welcome,",Object(r.jsx)("br",{}),e.menu.user.name]}),Object(r.jsx)(N.b,{to:"/history",children:"View Purchase History"}),Object(r.jsx)("br",{}),Object(r.jsx)(B,{})]},z()()):Object(r.jsxs)("div",{className:"user_container",children:[Object(r.jsx)("h2",{children:"Login to order."}),Object(r.jsxs)("h4",{children:["No account? Click ",Object(r.jsx)(N.b,{to:"/signup",className:"page_button",children:"HERE"}),"."]}),Object(r.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(r.jsx)(T.a,{required:!0,id:"username",name:"username",type:"email",label:"Email...",variant:"outlined",onSubmit:function(e){return e.preventDefault()}}),Object(r.jsx)("br",{}),Object(r.jsx)(T.a,{required:!0,id:"password",name:"password",type:"password",label:"Password...",variant:"outlined"}),Object(r.jsx)("br",{}),Object(r.jsx)(S.a,{onClick:t,type:"submit",variant:"outlined",children:"Login"})]})]},z()())]})})}));var q=function(){return Object(r.jsx)("div",{id:"about",children:Object(r.jsxs)("div",{className:"content_container",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"./static/react/images/toa22.png"})}),Object(r.jsxs)("div",{className:"text_container",children:[Object(r.jsx)("span",{children:"PHILOSOPHY"}),Object(r.jsx)("h2",{children:"Only the best for our customers"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, in qui mundi denique. Pri in mundi legendos. Graeci prompta persecuti mel eu, ei duo sonet ignota civibus."}),Object(r.jsx)("a",{href:"#about",children:"READ MORE"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"./static/react/images/toa24.png"})}),Object(r.jsxs)("div",{className:"text_container",children:[Object(r.jsx)("span",{children:"FRESH FOOD"}),Object(r.jsx)("h2",{children:"All of our dishes are made on the same day"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, in qui mundi denique. Pri in mundi legendos. Graeci prompta persecuti mel eu, ei duo sonet ignota civibus."}),Object(r.jsx)("a",{href:"#about",children:"READ MORE"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"./static/react/images/toa26.png"})}),Object(r.jsxs)("div",{className:"text_container",children:[Object(r.jsx)("span",{children:"HISTORY"}),Object(r.jsx)("h2",{children:"Created to make your life easy and tasty"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, in qui mundi denique. Pri in mundi legendos. Graeci prompta persecuti mel eu, ei duo sonet ignota civibus."}),Object(r.jsx)("a",{href:"#about",children:"READ MORE"})]})]})})},A=a(13);var R=function(){return Object(r.jsxs)("div",{className:"navbarMenu",children:[Object(r.jsx)("img",{className:"logo_image",src:"./static/react/images/logo.png"}),Object(r.jsx)("ul",{className:"navbar_menu",children:Object(r.jsx)("li",{children:Object(r.jsx)(N.b,{to:"/",children:"Home"})})})]})},L=Object(f.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"}}}));var F=Object(l.b)((function(e){return{menu:e.menu}}),(function(e){return{addToCart:function(t,a){return e(O(t,a))}}}))((function(e){var t=L();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{}),Object(r.jsx)("div",{className:"food_container",children:e.menu.menu[0].items.map((function(a){return Object(r.jsxs)(v.a,{className:"pizza_item",children:[Object(r.jsx)(y.a,{className:t.media,title:a.name,image:a.image}),Object(r.jsx)("h3",{children:a.name}),Object(r.jsxs)("h5",{children:["$",a.price]}),a.ingredients.map((function(e,t){return t===a.ingredients.length-1?Object(r.jsx)("span",{children:e},z()()):Object(r.jsx)("span",{children:e+", "},z()())})),Object(r.jsxs)("div",{className:"food_actions",children:[Object(r.jsx)("span",{children:Object(r.jsx)("strong",{children:'Size - 12"'})}),Object(r.jsx)("i",{className:"fas fa-shopping-cart",onClick:function(){return e.addToCart(a.price,{name:a.name,price:a.price,image:a.image,qty:1})}})]})]},z()())}))})]})})),H=a(18);a(152),a(200),a(201),a(60);var W=Object(f.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"}}}));var I=Object(l.b)((function(e){return{menu:e.menu}}),(function(e){return{addToCart:function(t,a){return e(O(t,a))}}}))((function(e){var t=W();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{}),Object(r.jsx)("div",{className:"food_container",children:e.menu.menu[1].items.map((function(a){return Object(r.jsxs)(v.a,{className:"food_item",children:[Object(r.jsx)(y.a,{className:t.media,title:a.name,image:a.image}),Object(r.jsx)("h3",{children:a.name}),Object(r.jsxs)("h5",{children:["$",a.price]}),Object(r.jsxs)("div",{className:"food_actions",children:[Object(r.jsx)("span",{children:Object(r.jsx)("strong",{children:a.size})}),Object(r.jsx)("i",{className:"fas fa-shopping-cart",onClick:function(){return e.addToCart(a.price,{name:a.name,price:a.price,image:a.image,qty:1})}})]})]},z()())}))})]})})),Y=Object(f.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"}}}));var $=Object(l.b)((function(e){return{menu:e.menu}}),(function(e){return{addToCart:function(t,a){return e(O(t,a))}}}))((function(e){var t=Y();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{}),Object(r.jsx)("div",{className:"food_container",children:e.menu.menu[2].items.map((function(a){return Object(r.jsxs)(v.a,{className:"food_item",children:[Object(r.jsx)(y.a,{className:t.media,title:a.name,image:a.image}),Object(r.jsx)("h3",{children:a.name}),Object(r.jsxs)("h5",{children:["$",a.price]}),Object(r.jsxs)("div",{className:"food_actions",children:[Object(r.jsx)("span",{children:Object(r.jsx)("strong",{children:a.size})}),Object(r.jsx)("i",{className:"fas fa-shopping-cart",onClick:function(){return e.addToCart(a.price,{name:a.name,price:a.price,image:a.image,qty:1})}})]})]},z()())}))})]})})),G=Object(f.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"}}}));var J=Object(l.b)((function(e){return{menu:e.menu}}),(function(e){return{addToCart:function(t,a){return e(O(t,a))}}}))((function(e){var t=G();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{}),Object(r.jsx)("div",{className:"food_container",children:e.menu.menu[3].items.map((function(a){return Object(r.jsxs)(v.a,{className:"food_item",children:[Object(r.jsx)(y.a,{className:t.media,title:a.name,image:a.image}),Object(r.jsx)("h3",{children:a.name}),Object(r.jsxs)("h5",{children:["$",a.price]}),Object(r.jsxs)("div",{className:"food_actions",children:[Object(r.jsx)("span",{children:Object(r.jsx)("strong",{children:a.size})}),Object(r.jsx)("i",{className:"fas fa-shopping-cart",onClick:function(){return e.addToCart(a.price,{name:a.name,price:a.price,image:a.image,qty:1})}})]})]},z()())}))})]})})),K=a(57),Q=a(192),U=a(202);var V=function(){var e=Object(c.useState)({checkedA:!1}),t=Object(x.a)(e,2),a=t[0],n=t[1];return Object(r.jsxs)("div",{id:"contact",children:[Object(r.jsxs)("div",{className:"contact_form",children:[Object(r.jsx)("h2",{children:"Contact"}),Object(r.jsx)("div",{children:Object(r.jsxs)("form",{children:[Object(r.jsx)(T.a,{label:"Email...",variant:"outlined"}),Object(r.jsx)(T.a,{label:"Name...",variant:"outlined"}),Object(r.jsx)("textarea",{placeholder:"Subject..."}),Object(r.jsx)(Q.a,{control:Object(r.jsx)(U.a,{className:"checkbox_black",checked:a.checkedA,onChange:function(e){n(Object(H.a)(Object(H.a)({},a),{},Object(K.a)({},e.target.name,e.target.checked)))},name:"checkedA"}),label:'I agree with the "Terms of Service".'}),Object(r.jsx)("br",{}),Object(r.jsx)(S.a,{type:"submit",variant:"contained",children:"Submit"})]})})]}),Object(r.jsx)("footer",{children:Object(r.jsxs)("div",{className:"social_media",children:[Object(r.jsx)("i",{className:"fab fa-instagram"}),Object(r.jsx)("i",{className:"fab fa-facebook-f"}),Object(r.jsx)("i",{className:"fab fa-twitter"})]})})]})};var X=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{}),Object(r.jsx)("div",{className:"signup_container",children:Object(r.jsxs)("form",{action:"/create-user",method:"POST",children:[Object(r.jsx)("h2",{children:"Create Account"}),Object(r.jsx)(T.a,{required:!0,name:"username",type:"email",label:"Email...",variant:"outlined"}),Object(r.jsx)("br",{}),Object(r.jsx)(T.a,{required:!0,name:"password",type:"password",label:"Password...",variant:"outlined"}),Object(r.jsx)("br",{}),Object(r.jsx)(T.a,{required:!0,name:"name",type:"text",label:"Name...",variant:"outlined"}),Object(r.jsx)("br",{}),Object(r.jsx)(S.a,{type:"submit",variant:"outlined",children:"Signup"})]})})]})},Z=a(5),ee=a(196),te=a(198),ae=a(193),ce=a(195),ne=a(197),ie=a(194),se=a(151),re=Object(Z.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(ae.a),oe=Object(Z.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(ie.a),je=Object(f.a)({table:{minWidth:700}});var me=Object(l.b)((function(e){return{menu:e.menu}}))((function(e){var t=je();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{}),Object(r.jsx)(ce.a,{component:se.a,className:"history_table",children:Object(r.jsxs)(ee.a,{className:t.table,"aria-label":"customized table",children:[Object(r.jsx)(ne.a,{children:Object(r.jsxs)(ie.a,{children:[Object(r.jsx)(re,{align:"center",children:"#"}),Object(r.jsx)(re,{align:"center",children:"Date"}),Object(r.jsx)(re,{align:"center",children:"Amount"}),Object(r.jsx)(re,{align:"center",children:"Items"})]})}),Object(r.jsx)(te.a,{children:e.menu.user.history?0!==e.menu.user.history.length?e.menu.user.history.map((function(e,t){return Object(r.jsxs)(oe,{children:[Object(r.jsx)(re,{align:"center",children:t+1}),Object(r.jsx)(re,{align:"center",children:e.date}),Object(r.jsxs)(re,{align:"center",children:["$",e.amount]}),Object(r.jsx)(re,{align:"center",children:e.items.length})]},z()())})):function(){return Object(r.jsx)(oe,{children:Object(r.jsx)(re,{align:"center",children:"No Purchase History"})},z()())}:""})]})})]})}));var le=function(){return Object(r.jsx)("div",{className:"error_page",children:Object(r.jsxs)("div",{className:"message_container",children:[Object(r.jsx)("img",{src:"./static/react/images/404.png"}),Object(r.jsxs)("h1",{children:["Ooops, the email is already in use :","("]}),Object(r.jsx)(S.a,{style:{color:"white",backgroundColor:"black"},variant:"outlined",children:Object(r.jsx)(N.b,{style:{textDecoration:"none"},to:"/signup",children:"BACK"})})]})})};var de=function(){return Object(r.jsx)(N.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(A.a,{exact:!0,path:"/",component:p}),Object(r.jsx)(A.a,{exact:!0,path:"/",component:o}),Object(r.jsx)(A.a,{exact:!0,path:"/",component:_}),Object(r.jsx)(A.a,{exact:!0,path:"/",component:M}),Object(r.jsx)(A.a,{exact:!0,path:"/",component:q}),Object(r.jsx)(A.a,{exact:!0,path:"/",component:V}),Object(r.jsx)(A.a,{path:"/pizza",component:F}),Object(r.jsx)(A.a,{path:"/sides",component:I}),Object(r.jsx)(A.a,{path:"/desserts",component:$}),Object(r.jsx)(A.a,{path:"/drinks",component:J}),Object(r.jsx)(A.a,{path:"/signup",component:X}),Object(r.jsx)(A.a,{path:"/history",component:me}),Object(r.jsx)(A.a,{path:"/email-used",component:le})]})})},ue=a(93),be={menu:[{title:"Pizza",items:[{price:17,name:"Meat Fiesta",image:"./static/react/images/toa31.png",ingredients:["Tomato Sauce","Pepperoni","Cheese","Sausage","Ham","MeatBalls"]},{price:15,name:"Margherita",image:"./static/react/images/toa65.png",ingredients:["Tomato Sauce","Mozzarella","Basil"]},{price:20,name:"New York-Style",image:"./static/react/images/toa32.png",ingredients:["Tomato Sauce","Mozzarella","Cheddar Cheese","Basil"]},{price:16,name:"Pepperoni",image:"./static/react/images/toa28.png",ingredients:["Tomato Sauce","Pepperoni","Cheddar Cheese"]},{price:18,name:"Pugliese",image:"./static/react/images/toa30.png",ingredients:["Tomato Sauce","Sun-dried Tomato","Cheddar Cheese","Tomato"]},{price:16,name:"Pinsa Romana",image:"./static/react/images/toa35.png",ingredients:["Tomato Sauce","Sun-dried Tomato","Cheddar Cheese","Tomato","Onions"]},{price:18,name:"Carbonara",image:"./static/react/images/toa33.png",ingredients:["Tomato Sauce","Mushrooms ","Mozzarella","Bacon","Basil"]},{price:18,name:"BBQ Chicken Pizza",image:"./static/react/images/toa34.png",ingredients:["BBQ Sauce","Chicken ","Mozzarella"]}],icon:Object(r.jsx)("i",{class:"fas fa-pizza-slice"}),image:"./static/react/images/toa11.png"},{title:"Sides",items:[{price:3,name:"French Fries",image:"./static/react/images/toa36.png",size:"350g"},{price:4,name:"Potato Wedges",image:"./static/react/images/toa37.png",size:"400g"},{price:5,name:"Nachos",image:"./static/react/images/toa38.png",size:"400g"},{price:5,name:"Chicken Nuggets",image:"./static/react/images/toa39.png",size:"300g"},{price:4,name:"Chicken Wings",image:"./static/react/images/toa40.png",size:"350g"},{price:5,name:"Buffalo Wings",image:"./static/react/images/toa41.png",size:"300g"},{price:4,name:"Chicken Strippers",image:"./static/react/images/toa42.png",size:"350g"},{price:3,name:"Coleslaw",image:"./static/react/images/toa43.png",size:"450g"}],icon:Object(r.jsx)("i",{class:"fas fa-utensils"}),image:"./static/react/images/toa21.png"},{title:"Desserts",items:[{price:3,name:"Chocolate Ice Cream",image:"./static/react/images/toa44.png",size:"250g"},{price:3,name:"Vanilla Ice Cream",image:"./static/react/images/toa45.png",size:"250g"},{price:3,name:"Pistachio Ice Cream",image:"./static/react/images/toa46.png",size:"250g"},{price:3,name:"Blueberry Pancakes",image:"./static/react/images/toa47.png",size:"350g"},{price:5,name:"Baked Alaska Cake",image:"./static/react/images/toa48.png",size:"300g"},{price:4,name:"Carrot Cake",image:"./static/react/images/toa49.png",size:"300g"},{price:4,name:"Tiramisu",image:"./static/react/images/toa50.png",size:"250g"},{price:5,name:"Chocolate Mousse",image:"./static/react/images/toa51.png",size:"250g"}],icon:Object(r.jsx)("i",{class:"fas fa-ice-cream"}),image:"./static/react/images/toa13.png"},{title:"Drinks",items:[{price:3,name:"Lemonade",image:"./static/react/images/toa52.png",size:"350ml"},{price:2,name:"Coffee",image:"./static/react/images/toa53.png",size:"250ml"},{price:3,name:"Hot Chocolate",image:"./static/react/images/toa54.png",size:"300ml"},{price:1,name:"Water",image:"./static/react/images/toa55.png",size:"500ml"},{price:4,name:"Orange Juice",image:"./static/react/images/toa56.png",size:"400ml"},{price:3,name:"Latte",image:"./static/react/images/toa57.png",size:"300ml"},{price:4,name:"Mocha Latte",image:"./static/react/images/toa58.png",size:"300ml"},{price:4,name:"Flat White",image:"./static/react/images/toa59.png",size:"300ml"}],icon:Object(r.jsx)("i",{class:"fas fa-glass-cheers"}),image:"./static/react/images/toa16.png"}],total:0,cart:[],user:{}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(H.a)(Object(H.a)({},e),{},{cart:[],total:0});case u:return Object(H.a)(Object(H.a)({},e),{},{user:t.payload});case h:return Object(H.a)(Object(H.a)({},e),{},{cart:e.cart.some((function(e){return void 0!==e?e.name===t.payload.item.name:0}))?e.cart.filter((function(e){return void 0!==e?e.name!==t.payload.item.name:""})):e.cart,total:parseInt(e.total)-t.payload.total});case b:return Object(H.a)(Object(H.a)({},e),{},{cart:function(){if(e.cart.some((function(e){return e.name===t.payload.item.name}))){var a=e.cart;return a.forEach((function(e){return e.name===t.payload.item.name?e.qty++:""})),a}return[].concat(Object(ue.a)(e.cart),[t.payload.item])}(),total:parseInt(e.total)+t.payload.total});default:return e}},Oe=a(38),ge=Object(Oe.b)({menu:he}),pe=Object(Oe.c)(ge);s.a.render(Object(r.jsx)(l.a,{store:pe,children:Object(r.jsx)(de,{})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.fb7d87c3.chunk.js.map