const e=document.querySelector("[data-start]");e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,d=setInterval((()=>{document.querySelector("body").style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)}));const t=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,clearInterval(d)})),t.disabled=!0;let d=null;
//# sourceMappingURL=01-color-switcher.143c6408.js.map
