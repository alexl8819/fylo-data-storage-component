document.addEventListener("DOMContentLoaded",(()=>{let e,t,o,n=!1,r=0;const d=l=>{void 0===e&&(e=l);const s=Math.floor(l-e);if(s>=2900&&!o&&(document.querySelector(".storage__loading").style.display="none",document.querySelector(".storage__content").style.display="flex",o=!0),s>=3e3&&t!==l){const e=document.querySelector(".storage__used");if(75===r)return e.style.width="75.5%",void(n=!0);r+=.25,e.style.width=`${Math.floor(r)}%`}n?t=l:window.requestAnimationFrame(d)};document.querySelector(".storage__loading").style.display="block",document.querySelector(".storage__content").style.display="none",window.requestAnimationFrame(d)}));
//# sourceMappingURL=index.e61f988f.js.map