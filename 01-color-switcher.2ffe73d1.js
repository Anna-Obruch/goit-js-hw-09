!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null;o(!1);t.addEventListener("click",(function(){e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),o(!0)}));function o(e){t.disabled=e,n.disabled=!e}n.addEventListener("click",(function(){clearInterval(e),o(!1)}))}();
//# sourceMappingURL=01-color-switcher.2ffe73d1.js.map
