var startBtn=document.querySelector("[data-start]");startBtn.addEventListener("click",onStartBtnClick);var stopBtn=document.querySelector("[data-stop]");stopBtn.addEventListener("click",onStopBtnClick),stopBtn.disabled=!0;var timerId=null;function onStartBtnClick(){stopBtn.disabled=!1,startBtn.disabled=!0,timerId=setInterval((function(){changeBodyBgRandom()}),1e3)}function onStopBtnClick(){stopBtn.disabled=!0,startBtn.disabled=!1,clearInterval(timerId)}function changeBodyBgRandom(){document.querySelector("body").style.backgroundColor=getRandomHexColor()}function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}
//# sourceMappingURL=01-color-switcher.b8f75252.js.map