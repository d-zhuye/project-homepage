(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var A={},a=[],i=0;i<n.length;i++){var s=n[i],c=r.base?s[0]+r.base:s[0],l=A[c]||0,p="".concat(c," ").concat(l);A[c]=l+1;var d=t(p),C={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(C);else{var E=o(C,r);r.byIndex=i,e.splice(i,0,{identifier:p,updater:E,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var A=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<A.length;a++){var i=t(A[a]);e[i].references--}for(var s=r(n,o),c=0;c<A.length;c++){var l=t(A[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}A=s}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==A&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=A),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),A="/*# ".concat(o," */");return[e].concat([A]).join("\n")}return[e].join("\n")}},365:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(354),o=t.n(r),A=t(314),a=t.n(A)()(o());a.push([n.id,':root {\n  --main-color: rgb(0, 0, 128);\n  --main-color-light: rgb(065, 105, 225);\n  --secondary: rgb(255, 215, 0);\n  font-size: 20px;\n}\n\nhtml, body {\n  max-width: 100vw;\n  min-height: 100vh;\n  overflow-x: hidden;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nfooter {\n  width: 100vw;\n  background-color: var(--main-color);\n  position: relative;\n  bottom: 0;\n  margin: 0;\n}\n\nfooter > * {\n  color: white;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\nli a {\n  text-decoration: none;\n  color: inherit;\n}\n\nbutton:hover {\n  cursor: pointer;\n  font-weight: 900;\n}\n\nh1 {\n  font-size: 2.5rem;\n  letter-spacing: 0.2rem;\n}\n\n@media screen and (min-width: 320px) {\n\n  #content > *, footer > * {\n    padding: 5px 10px;\n  }\n\n  header {\n    height: 50px;\n    background-color: white;\n    box-shadow: 0px 0px 20px black;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n  }  \n\n  #hero {\n    min-height: calc(100vh - 50px);\n    padding-top: 15vh;\n    background-color: navy;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: top;\n    align-items: center;\n    letter-spacing: 0.25rem;\n  }\n\n  #hero-img-container {\n    background-color: white;\n    width: clamp(100px, 45vw, 400px);\n    aspect-ratio: 1 / 1;\n    border-radius: 50%;\n    margin-bottom: 5vh;\n    overflow: hidden;\n    object-fit: cover;\n    box-shadow: 0px 0px 5px white;\n  }\n\n  #hero-img-container > img {\n    transform: scale(2);\n  }\n\n  #hero > h1 {\n    text-shadow: 0px 0px 1px white;\n  }\n\n  #hero > span > p {\n    font-size: 1rem;\n    font-weight: 500;\n    overflow: hidden;\n    white-space: nowrap;\n    margin: 0 auto;\n    border-right: 0.15rem solid white; \n    border-left: 0.15rem solid transparent;\n\n    animation: \n      typewriter 2.75s steps(23, end), \n      blink-caret 1s step-end infinite;\n  }\n\n  @keyframes typewriter {\n    0% {\n      width: 0;\n    }\n\n    100% {\n      width: 100%;\n    }\n  }\n\n  @keyframes blink-caret {\n    0% {\n      border-right-color: transparent;\n    }\n\n    50% {\n      border-right-color: white;\n    }\n  }\n\n  #overlay {\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(1.5px);\n    z-index: 20;\n  }\n\n  nav {\n    display: flex;\n  }\n\n  .navbar-container {\n    background-color: white;\n    height: 100vh;\n    position: absolute;\n    z-index: 30;\n    right: 0;\n    top: 0;\n    display: none;\n  }\n\n  #navbar-close-btn {\n    background-color: transparent;\n    display: block;\n    margin: 5px 0px 0px auto;\n  }\n\n  #navbar-close-btn > svg {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n  }\n\n  .navbar-container > button > svg:hover {\n    background-color: lightgray;\n  }\n\n  #navbar-open-btn {\n    width: 40px;\n    height: 40px;\n    margin-right: 10px;\n    background-image: url("https://img.icons8.com/ios-filled/50/menu--v1.png");\n    background-size: contain;\n    background-color: transparent;\n  }\n\n  #navbar-icon:hover{\n    cursor: pointer;\n  }\n\n  .navbar-container > *{\n    padding-top: 0px;\n  }\n\n  .navbar-visible {\n    animation: expand 0.75s ease-in-out forwards;\n    transform-origin: right;\n  }\n\n  @keyframes expand {\n    0% {\n      width: 0;\n    }\n    100% {\n      width: clamp(100px, 60vw, 800px);\n    }\n  }\n\n  .navbar-hidden {\n    animation: retract 0.75s ease-in-out;\n    transform-origin: left;\n  }\n\n  @keyframes retract {\n    0% {\n      width: clamp(100px, 60vw, 800px);\n    }\n\n    100% {\n      width: 0;\n    }\n  }\n\n  .navbar > li {\n    padding: 5px 0px;\n    padding-left: 10px;\n    background-color: white;\n    font-size: 1.5rem;\n  }\n\n  .navbar > li:hover {\n    font-weight: 900;\n    transition: background-color 1s ease;\n  }\n\n  .navbar > li::before {\n    content: "⟢";\n  }\n\n  main > * {\n    margin-bottom: 40px;\n  }\n\n  main h1 {\n    font-size: 2.5rem;\n  }\n\n  #carousel-center-title {\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: bold;\n    margin: 2vh 0;\n  }\n\n  #project-carousel {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 15px;\n  }\n\n  #project-carousel > img {\n    background-image: cover;\n    border-radius: 10px;\n  }\n  \n  .carousel-center {\n    width: clamp(50px, 55vw, 800px);\n    aspect-ratio: 1 / 1;\n    flex-shrink: 0;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);\n    z-index: 2;\n  }\n\n  .carousel-center:hover {\n    transform: scale(1.05);\n  }\n\n  .carousel-left, .carousel-right {\n    width: clamp(50px, 45vw, 700px);\n    aspect-ratio: 1 / 1;\n    flex-shrink: 0;\n    filter: blur(2px);\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);\n\n    position: relative;\n  }\n\n  .carousel-left {\n    left: 25vw;\n  }\n\n  .carousel-right {\n    left: -25vw;\n  }\n\n  #carousel-nav {\n    display: flex;\n    justify-content: center;\n    margin-top: 3vh;\n    gap: 20%;\n    font-size: 1.15rem;\n  }\n\n  .carousel-left-btn, .carousel-right-btn {\n    background-color: transparent;\n  }\n\n  .carousel-left-btn::before {\n    content: "←";\n  }\n\n  .carousel-right-btn::after {\n    content: "→"\n  }\n\n  .newsletter {\n    color: white;\n    background-color: var(--main-color-light);\n    margin: 0px 15px;\n    padding: 20px 20px 30px;\n    border-radius: 10px;\n    text-align: left;\n  }\n\n  .newsletter label {\n    display: block;\n    color: transparent;\n  }\n\n  .newsletter form > div {\n    display: flex;\n    justify-content: center;\n    height: 2rem;\n  }\n\n  .newsletter input {\n    height: 2rem;\n    padding-left: 10px;\n    border: 0;\n    border-radius: 10px 0px 0px 10px;\n    width: 70%;\n  }\n\n  .newsletter input:focus {\n    outline: 3px solid var(--secondary);\n    outline-offset: -3px;\n  }\n\n  .newsletter button {\n    font-weight: 700;\n    border-width: 0;\n    border-radius: 0px 10px 10px 0px;\n    background-color: var(--secondary);\n    width: 30%;\n  }\n\n  .social-container {\n    display: flex;\n    justify-content: space-around;\n    padding: 10px 25px;\n  }\n\n  .social-container > a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    text-decoration: none;\n  }\n\n  .social-icons {\n    width: 32px;\n    height: 32px;\n  }\n\n  .twitter {\n    background-color: black;\n  }\n\n  .twitter > svg {\n    padding: 3px;\n  }\n\n  footer > .contact > *:not(:first-child) {\n    margin-bottom: 5px;\n  }\n}\n\n@media screen and (min-width: 481px) {\n  #content > *:not(#hero), footer > * {\n    padding: 10px 30px;\n  }\n\n  header {\n    height: 100px;\n  }\n\n  .newsletter {\n    margin: 80px 60px 20px;\n  }\n\n  footer {\n    display: grid;\n    grid-template: minmax(60px, 100px) 1fr 1fr / 1fr 1fr;\n  }\n\n  footer > h1 {\n    grid-column: 1 / 3;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  #content > *:not(#hero), footer > * {\n    padding: 40px 5vw;\n  }\n\n  .carousel-left {\n    left: 10vw;\n  }\n\n  .carousel-right {\n    left: -10vw;\n  }\n\n  .newsletter {\n    padding: 60px 150px;\n  }\n\n}\n',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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",sourcesContent:[':root {\n  --main-color: rgb(0, 0, 128);\n  --main-color-light: rgb(065, 105, 225);\n  --secondary: rgb(255, 215, 0);\n  font-size: 20px;\n}\n\nhtml, body {\n  max-width: 100vw;\n  min-height: 100vh;\n  overflow-x: hidden;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nfooter {\n  width: 100vw;\n  background-color: var(--main-color);\n  position: relative;\n  bottom: 0;\n  margin: 0;\n}\n\nfooter > * {\n  color: white;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\nli a {\n  text-decoration: none;\n  color: inherit;\n}\n\nbutton:hover {\n  cursor: pointer;\n  font-weight: 900;\n}\n\nh1 {\n  font-size: 2.5rem;\n  letter-spacing: 0.2rem;\n}\n\n@media screen and (min-width: 320px) {\n\n  #content > *, footer > * {\n    padding: 5px 10px;\n  }\n\n  header {\n    height: 50px;\n    background-color: white;\n    box-shadow: 0px 0px 20px black;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n  }  \n\n  #hero {\n    min-height: calc(100vh - 50px);\n    padding-top: 15vh;\n    background-color: navy;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: top;\n    align-items: center;\n    letter-spacing: 0.25rem;\n  }\n\n  #hero-img-container {\n    background-color: white;\n    width: clamp(100px, 45vw, 400px);\n    aspect-ratio: 1 / 1;\n    border-radius: 50%;\n    margin-bottom: 5vh;\n    overflow: hidden;\n    object-fit: cover;\n    box-shadow: 0px 0px 5px white;\n  }\n\n  #hero-img-container > img {\n    transform: scale(2);\n  }\n\n  #hero > h1 {\n    text-shadow: 0px 0px 1px white;\n  }\n\n  #hero > span > p {\n    font-size: 1rem;\n    font-weight: 500;\n    overflow: hidden;\n    white-space: nowrap;\n    margin: 0 auto;\n    border-right: 0.15rem solid white; \n    border-left: 0.15rem solid transparent;\n\n    animation: \n      typewriter 2.75s steps(23, end), \n      blink-caret 1s step-end infinite;\n  }\n\n  @keyframes typewriter {\n    0% {\n      width: 0;\n    }\n\n    100% {\n      width: 100%;\n    }\n  }\n\n  @keyframes blink-caret {\n    0% {\n      border-right-color: transparent;\n    }\n\n    50% {\n      border-right-color: white;\n    }\n  }\n\n  #overlay {\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(1.5px);\n    z-index: 20;\n  }\n\n  nav {\n    display: flex;\n  }\n\n  .navbar-container {\n    background-color: white;\n    height: 100vh;\n    position: absolute;\n    z-index: 30;\n    right: 0;\n    top: 0;\n    display: none;\n  }\n\n  #navbar-close-btn {\n    background-color: transparent;\n    display: block;\n    margin: 5px 0px 0px auto;\n  }\n\n  #navbar-close-btn > svg {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n  }\n\n  .navbar-container > button > svg:hover {\n    background-color: lightgray;\n  }\n\n  #navbar-open-btn {\n    width: 40px;\n    height: 40px;\n    margin-right: 10px;\n    background-image: url("https://img.icons8.com/ios-filled/50/menu--v1.png");\n    background-size: contain;\n    background-color: transparent;\n  }\n\n  #navbar-icon:hover{\n    cursor: pointer;\n  }\n\n  .navbar-container > *{\n    padding-top: 0px;\n  }\n\n  .navbar-visible {\n    animation: expand 0.75s ease-in-out forwards;\n    transform-origin: right;\n  }\n\n  @keyframes expand {\n    0% {\n      width: 0;\n    }\n    100% {\n      width: clamp(100px, 60vw, 800px);\n    }\n  }\n\n  .navbar-hidden {\n    animation: retract 0.75s ease-in-out;\n    transform-origin: left;\n  }\n\n  @keyframes retract {\n    0% {\n      width: clamp(100px, 60vw, 800px);\n    }\n\n    100% {\n      width: 0;\n    }\n  }\n\n  .navbar > li {\n    padding: 5px 0px;\n    padding-left: 10px;\n    background-color: white;\n    font-size: 1.5rem;\n  }\n\n  .navbar > li:hover {\n    font-weight: 900;\n    transition: background-color 1s ease;\n  }\n\n  .navbar > li::before {\n    content: "⟢";\n  }\n\n  main > * {\n    margin-bottom: 40px;\n  }\n\n  main h1 {\n    font-size: 2.5rem;\n  }\n\n  #carousel-center-title {\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: bold;\n    margin: 2vh 0;\n  }\n\n  #project-carousel {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 15px;\n  }\n\n  #project-carousel > img {\n    background-image: cover;\n    border-radius: 10px;\n  }\n  \n  .carousel-center {\n    width: clamp(50px, 55vw, 800px);\n    aspect-ratio: 1 / 1;\n    flex-shrink: 0;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);\n    z-index: 2;\n  }\n\n  .carousel-center:hover {\n    transform: scale(1.05);\n  }\n\n  .carousel-left, .carousel-right {\n    width: clamp(50px, 45vw, 700px);\n    aspect-ratio: 1 / 1;\n    flex-shrink: 0;\n    filter: blur(2px);\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);\n\n    position: relative;\n  }\n\n  .carousel-left {\n    left: 25vw;\n  }\n\n  .carousel-right {\n    left: -25vw;\n  }\n\n  #carousel-nav {\n    display: flex;\n    justify-content: center;\n    margin-top: 3vh;\n    gap: 20%;\n    font-size: 1.15rem;\n  }\n\n  .carousel-left-btn, .carousel-right-btn {\n    background-color: transparent;\n  }\n\n  .carousel-left-btn::before {\n    content: "←";\n  }\n\n  .carousel-right-btn::after {\n    content: "→"\n  }\n\n  .newsletter {\n    color: white;\n    background-color: var(--main-color-light);\n    margin: 0px 15px;\n    padding: 20px 20px 30px;\n    border-radius: 10px;\n    text-align: left;\n  }\n\n  .newsletter label {\n    display: block;\n    color: transparent;\n  }\n\n  .newsletter form > div {\n    display: flex;\n    justify-content: center;\n    height: 2rem;\n  }\n\n  .newsletter input {\n    height: 2rem;\n    padding-left: 10px;\n    border: 0;\n    border-radius: 10px 0px 0px 10px;\n    width: 70%;\n  }\n\n  .newsletter input:focus {\n    outline: 3px solid var(--secondary);\n    outline-offset: -3px;\n  }\n\n  .newsletter button {\n    font-weight: 700;\n    border-width: 0;\n    border-radius: 0px 10px 10px 0px;\n    background-color: var(--secondary);\n    width: 30%;\n  }\n\n  .social-container {\n    display: flex;\n    justify-content: space-around;\n    padding: 10px 25px;\n  }\n\n  .social-container > a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    text-decoration: none;\n  }\n\n  .social-icons {\n    width: 32px;\n    height: 32px;\n  }\n\n  .twitter {\n    background-color: black;\n  }\n\n  .twitter > svg {\n    padding: 3px;\n  }\n\n  footer > .contact > *:not(:first-child) {\n    margin-bottom: 5px;\n  }\n}\n\n@media screen and (min-width: 481px) {\n  #content > *:not(#hero), footer > * {\n    padding: 10px 30px;\n  }\n\n  header {\n    height: 100px;\n  }\n\n  .newsletter {\n    margin: 80px 60px 20px;\n  }\n\n  footer {\n    display: grid;\n    grid-template: minmax(60px, 100px) 1fr 1fr / 1fr 1fr;\n  }\n\n  footer > h1 {\n    grid-column: 1 / 3;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  #content > *:not(#hero), footer > * {\n    padding: 40px 5vw;\n  }\n\n  .carousel-left {\n    left: 10vw;\n  }\n\n  .carousel-right {\n    left: -10vw;\n  }\n\n  .newsletter {\n    padding: 60px 150px;\n  }\n\n}\n'],sourceRoot:""}]);const i=a},464:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(354),o=t.n(r),A=t(314),a=t.n(A)()(o());a.push([n.id,"/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\nbutton {\n  border: 0;\n}","",{version:3,sources:["webpack://./src/modules/reset.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;AACA;;;;;;EAME,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,SAAS;AACX",sourcesContent:["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\nbutton {\n  border: 0;\n}"],sourceRoot:""}]);const i=a},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var A=e[r]={id:r,exports:{}};return n[r](A,A.exports,t),A.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var r=t(72),o=t.n(r),A=t(825),a=t.n(A),i=t(659),s=t.n(i),c=t(56),l=t.n(c),p=t(540),d=t.n(p),C=t(113),E=t.n(C),h=t(365),u={};u.styleTagTransform=E(),u.setAttributes=l(),u.insert=s().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=d(),o()(h.A,u),h.A&&h.A.locals&&h.A.locals;var g=t(464),B={};B.styleTagTransform=E(),B.setAttributes=l(),B.insert=s().bind(null,"head"),B.domAPI=a(),B.insertStyleElement=d(),o()(g.A,B),g.A&&g.A.locals&&g.A.locals;const m=t.p+"42b84357b6393272b94d.png",f=t.p+"bbba53b605f322da9503.png",b=t.p+"a1fc803b867e19eb513d.png";class x{constructor(n,e){this.name=n,this.image=e}}const v=new class{constructor(){this.projects=[]}addToPortfolio(n){if(!n.name||!n.image)throw new Error("Cannot add project. Check that project name and image values are defined.");this.projects.push(n)}},w=new x("Weather App",m);v.addToPortfolio(w);const I=new x("Admin Dashboard",f);v.addToPortfolio(I);const y=new x("Odin's Library",b);v.addToPortfolio(y),function(){const n=document.getElementById("navbar-open-btn"),e=document.getElementById("navbar-close-btn"),t=document.querySelector(".navbar-container"),r=document.getElementById("overlay");n.addEventListener("click",(()=>{t.style.display="block",t.classList.toggle("navbar-visible"),t.classList.toggle("navbar-hidden")})),e.addEventListener("click",(()=>{t.style.display="block",t.classList.toggle("navbar-visible"),t.classList.toggle("navbar-hidden")})),document.getElementById("overlay").addEventListener("click",(n=>{t.style.display="block",t.classList.toggle("navbar-visible"),t.classList.toggle("navbar-hidden")})),t.addEventListener("animationstart",(n=>{"expand"===n.animationName&&(r.style.display="block")})),t.addEventListener("animationend",(n=>{console.log(n),"retract"===n.animationName&&(t.style.display="none",r.style.display="none")}))}(),(()=>{let n=0;const e=v.projects.length-1,t=document.querySelector(".carousel-left"),r=document.querySelector(".carousel-center"),o=document.querySelector(".carousel-right"),A=document.getElementById("carousel-center-title"),a=document.querySelector(".carousel-left-btn"),i=document.querySelector(".carousel-right-btn");function s(){const s=0===n?e:n-1;t.src=v.projects[s].image,a.textContent=v.projects[s].name,r.src=v.projects[n].image,A.textContent=v.projects[n].name;const c=n===e?0:n+1;o.src=v.projects[c].image,i.textContent=v.projects[c].name}let c,l;s(),[a,t].forEach((n=>{n.addEventListener("click",d)})),[i,o].forEach((n=>{n.addEventListener("click",C)}));const p=document.getElementById("project-carousel");function d(){n=0===n?e:n-1,s()}function C(){n=n===e?0:n+1,s()}p.addEventListener("touchstart",(n=>{c=n.changedTouches[0].screenX})),p.addEventListener("touchend",(n=>{l=n.changedTouches[0].screenX,c>l?C():d()})),function t(){setTimeout((()=>{n=n===e?0:n+1,t(),s()}),7e3)}()})()})();
//# sourceMappingURL=project-homepage.bundle.js.map