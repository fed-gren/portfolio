(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=(n(13),n(14),n(15),n(16),function(e){var t=e.title;return r.a.createElement("header",null,r.a.createElement("h1",null,t))}),u=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout"},r.a.createElement(l,{title:"Portfolio"}),t))},i=n(1),s=n.n(i),m=n(4),f=n(6),h=(n(18),function(e){var t=e.thumb,n=e.title;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"thumb",style:{backgroundImage:"url(".concat(t,")")}}),r.a.createElement("div",{className:"title"},n))}),d=n(5),v=n.n(d),E=function(e){var t=e.color;return r.a.createElement("div",{className:"loader"},r.a.createElement(v.a,{type:"bubbles",color:t,height:"2rem",width:"3rem"}))},p=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],o=function(){return fetch("https://gren-apis.herokuapp.com/api/projects").then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return console.log(e)})},l=function(){var e=Object(m.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:t=e.sent,o().then(function(e){return console.log(e)}),c(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){l()},[]);return r.a.createElement("div",{className:0===n.length?"loading":"gallery"},0===n.length?r.a.createElement(E,{color:"#aaa"}):n.map(function(e,t){return r.a.createElement(h,{title:e.title,thumb:e.thumb,key:t})}))},g=function(){return r.a.createElement("div",null,r.a.createElement(u,null,r.a.createElement(p,null)))};n(19);var w=function(){return r.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.11aa7486.chunk.js.map