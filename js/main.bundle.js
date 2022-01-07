!function(){"use strict";var e,t={941:function(){},178:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var n=a(294),r=l(a(935)),u=a(973),c=function(){function e(){this.render()}return e.prototype.render=function(){r.default.render((0,n.createElement)(u.Main,{app:this}),document.getElementById("app")||document.createElement("div"))},e}();t.App=c,new c},973:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Main=void 0;var n=l(a(294)),r=a(370),u=a(879),c=a(372),o=a(126),f=a(593);t.Main=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(u.BrowserRouter,null,n.default.createElement(r.Header,null),n.default.createElement(u.Routes,null,n.default.createElement(u.Route,{path:"/",element:n.default.createElement(c.Home,null)}),n.default.createElement(u.Route,{path:"/shop",element:n.default.createElement(o.Shop,null)}),n.default.createElement(u.Route,{path:"/blog",element:n.default.createElement(f.Blog,null)}))))}},755:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Banner=void 0;var n=l(a(294));t.Banner=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:"banner section-m1"},n.default.createElement("h4",null,"Repair services"),n.default.createElement("h2",null,"Up to ",n.default.createElement("span",null,"70% off")," - All t-shirts & accessories"),n.default.createElement("button",{className:"normal"},"Explore more")))}},161:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BannerInfo=void 0;var n=l(a(294));t.BannerInfo=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:"banner-info"},n.default.createElement("div",{className:"banner-box"},n.default.createElement("h2",null,"season sale"),n.default.createElement("h3",null,"winter collection -50% OFF")),n.default.createElement("div",{className:"banner-box banner-box2"},n.default.createElement("h2",null,"new footwear collection"),n.default.createElement("h3",null,"Spring / summer 2022")),n.default.createElement("div",{className:"banner-box banner-box3"},n.default.createElement("h2",null,"T-shorts"),n.default.createElement("h3",null,"new trendy prints"))))}},884:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BlogBox=void 0;var n=l(a(294));t.BlogBox=function(e){var t=e.source;return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:"blog"},t.map((function(e,t){return n.default.createElement("div",{className:"blog-box",key:t.toString()},n.default.createElement("div",{className:"blog-img"},n.default.createElement("img",{src:e,alt:""})),n.default.createElement("div",{className:"blog-details"},n.default.createElement("h4",null,"The cotton-jercy Zip-up hoodie"),n.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aut illum similique vero voluptatem?"),n.default.createElement("a",{href:"#"},"Continued reading")),n.default.createElement("h1",null,"13/01"))}))))}},195:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Features=void 0;var u=r(a(294));t.Features=function(e){var t=(0,u.useState)([]),a=t[0],l=t[1];(0,u.useEffect)((function(){n(e.table)}),[e.table]);var n=function(e){fetch("https://react-e-commerce-51a58-default-rtdb.firebaseio.com/"+e+".json").then((function(e){return e.json()})).then((function(e){l(a.concat(e))})).catch((function(e){}))};return u.default.createElement(u.default.Fragment,null,u.default.createElement("section",{className:"features section-p1"},a.map((function(e,t){return u.default.createElement("div",{className:"fe-box",key:t},u.default.createElement("img",{src:e.imgSource,alt:"features"}),u.default.createElement("h6",null,e.title))}))))}},23:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0;var n=l(a(294));t.Footer=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("footer",{className:"footer section-p1"},n.default.createElement("div",{className:"col"},n.default.createElement("img",{className:"logo",src:"./img/logo.png",alt:"logo"}),n.default.createElement("h4",null,"Contact"),n.default.createElement("p",null,n.default.createElement("strong",null,"Adress: ")," Mira, 8, Lysva"),n.default.createElement("p",null,n.default.createElement("strong",null,"Phone: ")," + 555 898552483 add (55) "),n.default.createElement("p",null,n.default.createElement("strong",null,"Hours: "),"10:00 - 18:00, Mon - Sat"),n.default.createElement("div",{className:"follow"},n.default.createElement("h4",null,"Follow us"),n.default.createElement("div",{className:"icon"},n.default.createElement("i",{className:"fab fa-facebook-f"}),n.default.createElement("i",{className:"fab fa-twitter"}),n.default.createElement("i",{className:"fab fa-instagram"}),n.default.createElement("i",{className:"fab fa-prinerest-p"}),n.default.createElement("i",{className:"fab fa-youtube"})))),n.default.createElement("div",{className:"col"},n.default.createElement("h4",null,"About"),n.default.createElement("a",{href:"#"},"About us"),n.default.createElement("a",{href:"#"},"Delivery Inforamion"),n.default.createElement("a",{href:"#"},"Privacy Policy"),n.default.createElement("a",{href:"#"},"Term & Conditions"),n.default.createElement("a",{href:"#"},"Contact US")),n.default.createElement("div",{className:"col"},n.default.createElement("h4",null,"My Account"),n.default.createElement("a",{href:"#"},"Sign In"),n.default.createElement("a",{href:"#"},"View Cart"),n.default.createElement("a",{href:"#"},"My Wishlist"),n.default.createElement("a",{href:"#"},"Track My Order"),n.default.createElement("a",{href:"#"},"Help")),n.default.createElement("div",{className:"col install"},n.default.createElement("h4",null,"Install App"),n.default.createElement("p",null,"From App store or Google Play"),n.default.createElement("div",{className:"row"},n.default.createElement("img",{src:"./img/pay/app.jpg",alt:"app"}),n.default.createElement("img",{src:"./img/pay/play.jpg",alt:"google"})),n.default.createElement("p",null,"Secured Payment Gateways"),n.default.createElement("img",{src:"./img/pay/pay.png",alt:"pay"})),n.default.createElement("div",{className:"copyright"},n.default.createElement("p",null,"2021, Tech, E-commerce"))))}},370:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var u=r(a(294)),c=a(879);t.Header=function(){var e=(0,u.useState)(!1),t=e[0],a=e[1];return u.default.createElement(u.default.Fragment,null,u.default.createElement("header",{className:"header"},u.default.createElement("a",{href:"#"},u.default.createElement("img",{src:"./img/logo.png",alt:"logo"})),u.default.createElement("div",null,u.default.createElement("ul",{className:t?"navbar active":"navbar"},u.default.createElement("li",null,u.default.createElement("a",null,u.default.createElement(c.Link,{to:"/"},"Home"))),u.default.createElement("li",null,u.default.createElement("a",null,u.default.createElement(c.Link,{to:"/shop"},"Shop"))),u.default.createElement("li",null,u.default.createElement("a",null,u.default.createElement(c.Link,{to:"/blog"},"Blog"))),u.default.createElement("li",null,u.default.createElement("a",{href:"about.html"},"About us")),u.default.createElement("li",null,u.default.createElement("a",{href:"contact.html"},"Contact")),u.default.createElement("li",{className:"lg-bar"},u.default.createElement("a",{href:""},u.default.createElement("i",{className:"fas fa-shopping-cart"}))),u.default.createElement("div",{onClick:function(){return a(!t)},className:"close"},u.default.createElement("i",{className:"far fa-times"})))),u.default.createElement("div",{className:"burger"},u.default.createElement("a",{href:"#"},u.default.createElement("i",{className:"fas fa-shopping-cart"})),u.default.createElement("i",{onClick:function(){return a(!t)},className:"bar fas fa-outdent"}))))}},331:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Hero=void 0;var n=l(a(294));t.Hero=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:"hero"},n.default.createElement("h4",null,"Trade in offer"),n.default.createElement("h2",null,"Super value deals"),n.default.createElement("h1",null,"On all products"),n.default.createElement("p",null,"Save more with coupons & up to 70% off!"),n.default.createElement("button",null,"Shop now")))}},432:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NewsLatter=void 0;var n=l(a(294));t.NewsLatter=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:"news-latter section-p1 section-m1"},n.default.createElement("div",{className:"news-text"},n.default.createElement("h4",null,"sign up for news letter"),n.default.createElement("p",null,"get e-mail updates about our latest shop and ",n.default.createElement("span",null,"special offers."))),n.default.createElement("form",{action:"",className:"form",name:"news",method:"get"},n.default.createElement("input",{type:"text",placeholder:"Your email address"}),n.default.createElement("button",{className:"normal"},"Sign Up"))))}},930:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PageHeader=void 0;var n=l(a(294));t.PageHeader=function(e){return n.default.createElement("section",{className:e.classSection},n.default.createElement("h2",null,e.title),n.default.createElement("p",null,e.detail))}},804:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Pagination=void 0;var n=l(a(294));t.Pagination=function(){return n.default.createElement("section",{className:"pagination section-p1"},n.default.createElement("a",{href:"#"},"1"),n.default.createElement("a",{href:"#"},"2"),n.default.createElement("a",{href:"#"},n.default.createElement("i",{className:"fal fa-long-arrow-alt-right"})))}},50:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Product=void 0;var u=r(a(294));t.Product=function(e){var t=e.prod,a=e.table,l=(0,u.useState)([]),n=l[0],r=l[1];return(0,u.useEffect)((function(){!function(e,t){fetch("https://react-e-commerce-51a58-default-rtdb.firebaseio.com/"+t+e+".json").then((function(e){return e.json()})).then((function(e){r(n.concat(e))})).catch((function(e){}))}(t,a)}),[t]),u.default.createElement(u.default.Fragment,null,u.default.createElement("section",{className:"product section-p1"},u.default.createElement("div",{className:"pro-container"},n.map((function(e,t){return u.default.createElement("div",{className:"pro",key:t},u.default.createElement("img",{src:e.imgSource,alt:""}),u.default.createElement("div",{className:"des"},u.default.createElement("span",null,e.brand),u.default.createElement("h5",null,"Cartoon astronaut t-shirts"),u.default.createElement("div",{className:"star"},u.default.createElement("i",{className:"fas fa-star"}),u.default.createElement("i",{className:"fas fa-star"}),u.default.createElement("i",{className:"fas fa-star"}),u.default.createElement("i",{className:"fas fa-star"}),u.default.createElement("i",{className:"fas fa-star"})),u.default.createElement("h4",null,"$",e.price)),u.default.createElement("a",{href:"#"},u.default.createElement("i",{className:"fal fa-shopping-cart cart"})))})))))}},286:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SmBanner=void 0;var n=l(a(294));t.SmBanner=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:"sm-banner section-p1"},n.default.createElement("div",{className:"banner-box"},n.default.createElement("h4",null,"crazy deals"),n.default.createElement("h2",null,"buy 1 get 1 free"),n.default.createElement("span",null,"the best classic dress is on sale at cara"),n.default.createElement("button",{className:"white"},"learn more")),n.default.createElement("div",{className:"banner-box banner-box2"},n.default.createElement("h4",null,"spring/summer"),n.default.createElement("h2",null,"upcomming season"),n.default.createElement("span",null,"the best classic dress is on sale at cara"),n.default.createElement("button",{className:"white"},"collections"))))}},593:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Blog=void 0;var n=l(a(294)),r=a(23),u=a(930),c=a(884);t.Blog=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(u.PageHeader,{classSection:"page-header blog-header",title:"#readmore",detail:"Read all case studies about our products!"}),n.default.createElement(c.BlogBox,{source:["./img/blog/blog1.jpg","./img/blog/blog2.jpg","./img/blog/blog3.jpg","./img/blog/blog4.jpg"]}),n.default.createElement(r.Footer,null))}},372:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Home=void 0;var n=l(a(294)),r=a(331),u=a(195),c=a(50),o=a(755),f=a(286),i=a(161),d=a(432),s=a(23);t.Home=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(r.Hero,null),n.default.createElement(u.Features,{table:"features/"}),n.default.createElement("section",{className:"product section-p1"},n.default.createElement("h2",null,"Featured Products"),n.default.createElement("p",null,"Summer collaction new morden design"),n.default.createElement(c.Product,{prod:0,table:"producs/"})),n.default.createElement(o.Banner,null),n.default.createElement("section",{className:"product section-p1"},n.default.createElement("h2",null,"New Arrivals"),n.default.createElement("p",null,"Summer Collaction New Morden Design"),n.default.createElement(c.Product,{prod:1,table:"producs/"})),n.default.createElement(f.SmBanner,null),n.default.createElement(i.BannerInfo,null),n.default.createElement(d.NewsLatter,null),n.default.createElement(s.Footer,null))}},126:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Shop=void 0;var n=l(a(294)),r=a(50),u=a(432),c=a(23),o=a(930),f=a(804);t.Shop=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(o.PageHeader,{classSection:"page-header",title:"#stayhome",detail:"Save more with coupons & up to 70% off!"}),n.default.createElement("section",{className:"product section-p1"},n.default.createElement("h2",null,"Featured Products"),n.default.createElement("p",null,"Summer collection new modern design"),n.default.createElement(r.Product,{prod:0,table:"producs/"}),n.default.createElement(r.Product,{prod:1,table:"producs/"})),n.default.createElement(f.Pagination,null),n.default.createElement(u.NewsLatter,null),n.default.createElement(c.Footer,null))}}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var r=a[e]={exports:{}};return t[e].call(r.exports,r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,a,n,r){if(!a){var u=1/0;for(i=0;i<e.length;i++){a=e[i][0],n=e[i][1],r=e[i][2];for(var c=!0,o=0;o<a.length;o++)(!1&r||u>=r)&&Object.keys(l.O).every((function(e){return l.O[e](a[o])}))?a.splice(o--,1):(c=!1,r<u&&(u=r));if(c){e.splice(i--,1);var f=n();void 0!==f&&(t=f)}}return t}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[a,n,r]},l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,u=a[0],c=a[1],o=a[2],f=0;if(u.some((function(t){return 0!==e[t]}))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(o)var i=o(l)}for(t&&t(a);f<u.length;f++)r=u[f],l.o(e,r)&&e[r]&&e[r][0](),e[u[f]]=0;return l.O(i)},a=self.webpackChunkreact_typescript_webpack_starter=self.webpackChunkreact_typescript_webpack_starter||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}(),l.O(void 0,[441],(function(){return l(178)}));var n=l.O(void 0,[441],(function(){return l(941)}));n=l.O(n)}();