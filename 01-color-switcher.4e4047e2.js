!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");e(!1);t.addEventListener("click",(function(){setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3);e(!0)}));function e(e){t.disabled=e,n.disabled=!e}n.addEventListener("click",(function(){clearInterval(timerId),e(!1)}))}();
//# sourceMappingURL=01-color-switcher.4e4047e2.js.map
