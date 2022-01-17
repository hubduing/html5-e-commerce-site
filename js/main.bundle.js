!function(){"use strict";var e,t={941:function(){},957:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(294)),r=l(a(935)),u=a(879),c=a(973);r.default.render(n.default.createElement(u.BrowserRouter,null,n.default.createElement(c.Main,null)),document.getElementById("app"))},973:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Main=void 0;var n=l(a(294)),r=a(370),u=a(879),c=a(372),o=a(126),i=a(593),d=a(243),f=a(683),s=a(23);t.Main=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(u.Routes,null,n.default.createElement(u.Route,{path:"/",element:n.default.createElement(r.Header,null)},n.default.createElement(u.Route,{index:!0,element:n.default.createElement(c.Home,null)}),n.default.createElement(u.Route,{path:"shop",element:n.default.createElement(o.Shop,null)}),n.default.createElement(u.Route,{path:"blog",element:n.default.createElement(i.Blog,null)}),n.default.createElement(u.Route,{path:"about",element:n.default.createElement(f.About,null)}),n.default.createElement(u.Route,{path:"contact",element:n.default.createElement(c.Home,null)}),n.default.createElement(u.Route,{path:"*",element:n.default.createElement(d.Welcome,null)}))),n.default.createElement(s.Footer,null))}},755:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Banner=void 0;var n=l(a(294));t.Banner=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:"banner section-m1"},n.default.createElement("h4",null,"Repair services"),n.default.createElement("h2",null,"Up to ",n.default.createElement("span",null,"70% off")," - All t-shirts & accessories"),n.default.createElement("button",{className:"normal"},"Explore more")))}},161:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BannerInfo=void 0;var n=l(a(294));t.BannerInfo=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:"banner-info"},n.default.createElement("div",{className:"banner-box"},n.default.createElement("h2",null,"season sale"),n.default.createElement("h3",null,"winter collection -50% OFF")),n.default.createElement("div",{className:"banner-box banner-box2"},n.default.createElement("h2",null,"new footwear collection"),n.default.createElement("h3",null,"Spring / summer 2022")),n.default.createElement("div",{className:"banner-box banner-box3"},n.default.createElement("h2",null,"T-shorts"),n.default.createElement("h3",null,"new trendy prints"))))}},884:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BlogBox=void 0;var n=l(a(294));t.BlogBox=function(e){var t=e.source;return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:"blog"},t.map((function(e,t){return n.default.createElement("div",{className:"blog-box",key:t.toString()},n.default.createElement("div",{className:"blog-img"},n.default.createElement("img",{src:e,alt:""})),n.default.createElement("div",{className:"blog-details"},n.default.createElement("h4",null,"The cotton-jercy Zip-up hoodie"),n.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aut illum similique vero voluptatem?"),n.default.createElement("a",{href:"#"},"Continued reading")),n.default.createElement("h1",null,"13/01"))}))))}},195:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Features=void 0;var u=r(a(294)),c=a(151);t.Features=function(e){var t=e.table,a=(0,u.useState)([]),l=a[0],n=a[1];(0,u.useEffect)((function(){r(t)}),[t]);var r=function(e){fetch(c.URLFETCH+e+".json").then((function(e){return e.json()})).then((function(e){n(l.concat(e))})).catch((function(e){}))};return u.default.createElement(u.default.Fragment,null,u.default.createElement("section",{className:"features section-p1"},l.map((function(e,t){return u.default.createElement("div",{className:"fe-box",key:t.toString()},u.default.createElement("img",{src:e.imgSource,alt:"features"}),u.default.createElement("h6",null,e.title))}))))}},23:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0;var n=l(a(294));t.Footer=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("footer",{className:"footer section-p1"},n.default.createElement("div",{className:"col"},n.default.createElement("img",{className:"logo",src:"./img/logo.png",alt:"logo"}),n.default.createElement("h4",null,"Contact"),n.default.createElement("p",null,n.default.createElement("strong",null,"Adress: ")," Mira, 8, Lysva"),n.default.createElement("p",null,n.default.createElement("strong",null,"Phone: ")," + 555 898552483 add (55) "),n.default.createElement("p",null,n.default.createElement("strong",null,"Hours: "),"10:00 - 18:00, Mon - Sat"),n.default.createElement("div",{className:"follow"},n.default.createElement("h4",null,"Follow us"),n.default.createElement("div",{className:"icon"},n.default.createElement("i",{className:"fab fa-facebook-f"}),n.default.createElement("i",{className:"fab fa-twitter"}),n.default.createElement("i",{className:"fab fa-instagram"}),n.default.createElement("i",{className:"fab fa-prinerest-p"}),n.default.createElement("i",{className:"fab fa-youtube"})))),n.default.createElement("div",{className:"col"},n.default.createElement("h4",null,"About"),n.default.createElement("a",{href:"#"},"About us"),n.default.createElement("a",{href:"#"},"Delivery Inforamion"),n.default.createElement("a",{href:"#"},"Privacy Policy"),n.default.createElement("a",{href:"#"},"Term & Conditions"),n.default.createElement("a",{href:"#"},"Contact US")),n.default.createElement("div",{className:"col"},n.default.createElement("h4",null,"My Account"),n.default.createElement("a",{href:"#"},"Sign In"),n.default.createElement("a",{href:"#"},"View Cart"),n.default.createElement("a",{href:"#"},"My Wishlist"),n.default.createElement("a",{href:"#"},"Track My Order"),n.default.createElement("a",{href:"#"},"Help")),n.default.createElement("div",{className:"col install"},n.default.createElement("h4",null,"Install App"),n.default.createElement("p",null,"From App store or Google Play"),n.default.createElement("div",{className:"row"},n.default.createElement("img",{src:"./img/app.jpg",alt:"app"}),n.default.createElement("img",{src:"./img/play.jpg",alt:"google"})),n.default.createElement("p",null,"Secured Payment Gateways"),n.default.createElement("img",{src:"./img/pay.png",alt:"pay"})),n.default.createElement("div",{className:"copyright"},n.default.createElement("p",null,"2021, Tech, E-commerce"))))}},370:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var u=r(a(294)),c=a(879);t.Header=function(){var e=(0,u.useState)(!1),t=e[0],a=e[1];return u.default.createElement(u.default.Fragment,null,u.default.createElement("header",{className:"header"},u.default.createElement("a",null,u.default.createElement(c.Link,{to:"/"},u.default.createElement("img",{src:"./img/logo.png",alt:"logo"}))),u.default.createElement("div",null,u.default.createElement("ul",{className:t?"navbar active":"navbar"},u.default.createElement("li",null,u.default.createElement("a",{className:"active"},u.default.createElement(c.Link,{to:"/"},"Home"))),u.default.createElement("li",null,u.default.createElement("a",null,u.default.createElement(c.Link,{to:"/shop"},"Shop"))),u.default.createElement("li",null,u.default.createElement("a",null,u.default.createElement(c.Link,{to:"/blog"},"Blog"))),u.default.createElement("li",null,u.default.createElement("a",null,u.default.createElement(c.Link,{to:"/about"},"About us"))),u.default.createElement("li",null,u.default.createElement("a",null,u.default.createElement(c.Link,{to:"/contact"},"Contact"))),u.default.createElement("li",{className:"lg-bar"},u.default.createElement("a",{href:""},u.default.createElement("i",{className:"fas fa-shopping-cart"}))),u.default.createElement("div",{onClick:function(){return a(!t)},className:"close"},u.default.createElement("i",{className:"far fa-times"})))),u.default.createElement("div",{className:"burger"},u.default.createElement("a",{href:"#"},u.default.createElement("i",{className:"fas fa-shopping-cart"})),u.default.createElement("i",{onClick:function(){return a(!t)},className:"bar fas fa-outdent"}))),u.default.createElement(c.Outlet,null))}},331:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Hero=void 0;var n=l(a(294));t.Hero=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:"hero"},n.default.createElement("h4",null,"Trade in offer"),n.default.createElement("h2",null,"Super value deals"),n.default.createElement("h1",null,"On all products"),n.default.createElement("p",null,"Save more with coupons & up to 70% off!"),n.default.createElement("button",null,"Shop now")))}},432:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NewsLatter=void 0;var n=l(a(294));t.NewsLatter=function(e){var t=e.classNews;return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:t},n.default.createElement("div",{className:"news-text"},n.default.createElement("h4",null,"sign up for news letter"),n.default.createElement("p",null,"get e-mail updates about our latest shop and ",n.default.createElement("span",null,"special offers."))),n.default.createElement("form",{action:"",className:"form",name:"news",method:"get"},n.default.createElement("input",{type:"text",placeholder:"Your email address"}),n.default.createElement("button",{className:"normal"},"Sign Up"))))}},930:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PageHeader=void 0;var n=l(a(294));t.PageHeader=function(e){return n.default.createElement("section",{className:e.classSection},n.default.createElement("h2",null,e.title),n.default.createElement("p",null,e.detail))}},804:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Pagination=void 0;var n=l(a(294));t.Pagination=function(){return n.default.createElement("section",{className:"pagination section-p1"},n.default.createElement("a",{href:"#"},"1"),n.default.createElement("a",{href:"#"},"2"),n.default.createElement("a",{href:"#"},n.default.createElement("i",{className:"fal fa-long-arrow-alt-right"})))}},50:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Product=void 0;var u=r(a(294)),c=a(151);t.Product=function(e){var t=e.prod,a=e.table,l=(0,u.useState)([]),n=l[0],r=l[1];return(0,u.useEffect)((function(){!function(e,t){fetch(c.URLFETCH+t+e+".json").then((function(e){return e.json()})).then((function(e){r(n.concat(e))})).catch((function(e){}))}(t,a)}),[t]),u.default.createElement(u.default.Fragment,null,u.default.createElement("section",{className:"product section-p1"},u.default.createElement("div",{className:"pro-container"},n.map((function(e,t){return u.default.createElement("div",{className:"pro",key:t},u.default.createElement("img",{src:e.imgSource,alt:""}),u.default.createElement("div",{className:"des"},u.default.createElement("span",null,e.brand),u.default.createElement("h5",null,"Cartoon astronaut t-shirts"),u.default.createElement("div",{className:"star"},u.default.createElement("i",{className:"fas fa-star"}),u.default.createElement("i",{className:"fas fa-star"}),u.default.createElement("i",{className:"fas fa-star"}),u.default.createElement("i",{className:"fas fa-star"}),u.default.createElement("i",{className:"fas fa-star"})),u.default.createElement("h4",null,"$",e.price)),u.default.createElement("a",{href:"#"},u.default.createElement("i",{className:"fal fa-shopping-cart cart"})))})))))}},286:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SmBanner=void 0;var n=l(a(294));t.SmBanner=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:"sm-banner section-p1"},n.default.createElement("div",{className:"banner-box"},n.default.createElement("h4",null,"crazy deals"),n.default.createElement("h2",null,"buy 1 get 1 free"),n.default.createElement("span",null,"the best classic dress is on sale at cara"),n.default.createElement("button",{className:"white"},"learn more")),n.default.createElement("div",{className:"banner-box banner-box2"},n.default.createElement("h4",null,"spring/summer"),n.default.createElement("h2",null,"upcomming season"),n.default.createElement("span",null,"the best classic dress is on sale at cara"),n.default.createElement("button",{className:"white"},"collections"))))}},151:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SRCIMAGE=t.URLFETCH=void 0,t.URLFETCH="https://react-e-commerce-51a58-default-rtdb.firebaseio.com/",t.SRCIMAGE=["./img/blog1.jpg","./img/blog2.jpg","./img/blog3.jpg","./img/blog4.jpg"]},683:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.About=void 0;var n=l(a(294)),r=a(432);t.About=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement("section",{className:"page-header about-header"},n.default.createElement("h2",null,"#knowUs"),n.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptates.")),n.default.createElement("section",{className:"about-head section-p1"},n.default.createElement("img",{src:"./img/about/a6.jpg",alt:""}),n.default.createElement("div",null,n.default.createElement("h2",null,"Who We Are"),n.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex illo necessitatibus quas voluptate. Adipisci, aperiam blanditiis earum fugiat magnam magni, maiores minima molestias, nemo possimus provident quam quo velit.Beatae blanditiis commodi culpa cum deserunt dicta dignissimos doloremque dolores eos expedita incidunt inventore itaque maxime modi, numquam quam qui rem repellat tempora voluptatem. Ab consequatur distinctio eum quaerat rerum! Culpa debitis dicta, dolor explicabo laboriosam minima nesciunt, non obcaecati perferendis quo repellendus sequi velit? Eligendi et eveniet ex, facere, hic ipsum labore laudantium modi molestiae quia quod reprehenderit ut. Amet culpa dolor et in nostrum nulla, possimus! Aliquid dolore ducimus nulla odit quam reprehenderit veritatis. Aut eius est et, exercitationem facere ipsam labore laborum numquam, perferendis quos, reiciendis veniam."),n.default.createElement("abbr",{title:""},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis dicta ea earum eum explicabo in iste magni nobis voluptate? A aperiam distinctio dolore ex expedita optio totam vitae."))),n.default.createElement("section",{className:"about-app section-p1"},n.default.createElement("h1",null,"Download Our ",n.default.createElement("a",{href:"#"},"App")),n.default.createElement("div",{className:"video"},n.default.createElement("video",{autoPlay:!0,muted:!0,loop:!0,src:"./img/about/1.mp4"}))),n.default.createElement(r.NewsLatter,{classNews:"news-latter blue section-p1 section-m1"}))}},593:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Blog=void 0;var n=l(a(294)),r=a(930),u=a(884),c=a(151);t.Blog=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(r.PageHeader,{classSection:"page-header blog-header",title:"#readmore",detail:"Read all case studies about our products!"}),n.default.createElement(u.BlogBox,{source:c.SRCIMAGE}))}},372:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Home=void 0;var n=l(a(294)),r=a(331),u=a(195),c=a(50),o=a(755),i=a(286),d=a(161),f=a(432);t.Home=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(r.Hero,null),n.default.createElement(u.Features,{table:"features/"}),n.default.createElement("section",{className:"product section-p1"},n.default.createElement("h2",null,"Featured Products"),n.default.createElement("p",null,"Summer collaction new morden design"),n.default.createElement(c.Product,{prod:0,table:"producs/"})),n.default.createElement(o.Banner,null),n.default.createElement("section",{className:"product section-p1"},n.default.createElement("h2",null,"New Arrivals"),n.default.createElement("p",null,"Summer Collaction New Morden Design"),n.default.createElement(c.Product,{prod:1,table:"producs/"})),n.default.createElement(i.SmBanner,null),n.default.createElement(d.BannerInfo,null),n.default.createElement(f.NewsLatter,{classNews:"news-latter red section-p1 section-m1"}))}},126:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Shop=void 0;var n=l(a(294)),r=a(50),u=a(432),c=a(930),o=a(804);t.Shop=function(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(c.PageHeader,{classSection:"page-header",title:"#stayhome",detail:"Save more with coupons & up to 70% off!"}),n.default.createElement("section",{className:"product section-p1"},n.default.createElement("h2",null,"Featured Products"),n.default.createElement("p",null,"Summer collection new modern design"),n.default.createElement(r.Product,{prod:0,table:"producs/"}),n.default.createElement(r.Product,{prod:1,table:"producs/"})),n.default.createElement(o.Pagination,null),n.default.createElement(u.NewsLatter,{classNews:"news-latter green section-p1 section-m1"}))}},243:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Welcome=void 0;var n=l(a(294)),r=a(879);t.Welcome=function(){return n.default.createElement("div",{className:"welcome"},n.default.createElement("h2",null,"Welcome to my site"),n.default.createElement("p",null,"My name is Alexey and I am a beginner web developer"),n.default.createElement("button",{className:"normal button"},n.default.createElement(r.Link,{to:"/"},n.default.createElement("span",null,"Go to home page"))))}}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var r=a[e]={exports:{}};return t[e].call(r.exports,r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,a,n,r){if(!a){var u=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],r=e[d][2];for(var c=!0,o=0;o<a.length;o++)(!1&r||u>=r)&&Object.keys(l.O).every((function(e){return l.O[e](a[o])}))?a.splice(o--,1):(c=!1,r<u&&(u=r));if(c){e.splice(d--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,n,r]},l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,u=a[0],c=a[1],o=a[2],i=0;if(u.some((function(t){return 0!==e[t]}))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(o)var d=o(l)}for(t&&t(a);i<u.length;i++)r=u[i],l.o(e,r)&&e[r]&&e[r][0](),e[u[i]]=0;return l.O(d)},a=self.webpackChunkreact_typescript_webpack_starter=self.webpackChunkreact_typescript_webpack_starter||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}(),l.O(void 0,[441],(function(){return l(957)}));var n=l.O(void 0,[441],(function(){return l(941)}));n=l.O(n)}();