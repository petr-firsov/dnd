(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=Array.from(document.querySelectorAll(".card-box")),t=localStorage.getItem("formData");let n=JSON.parse(t);if(n){let t=[];for(let e in n)t.push(n[e]);for(let n=0;n<t.length;n++)for(let r=0;r<t[n].length;r++){let d=document.createElement("div");d.classList.add("card"),d.textContent=t[n][r];const o=document.createElement("div");o.classList.add("remove-button"),o.innerHTML="<div>&#x2715;</div>",d.append(o),o.addEventListener("click",(()=>{o.parentElement.remove()})),e[n].appendChild(d)}}}(),document.querySelectorAll(".add-link").forEach((e=>e.addEventListener("click",(e=>{const t=e.target;t.setAttribute("hidden","");const n=e.target.parentElement;n.insertAdjacentHTML("beforeend",'\n            <form class="add-card-form">\n                <textarea placeholder="Enter a title for this card..."></textarea>\n                <button class="add-button">Add button</button>\n                <div class="cancel-button">&#x2715</div>\n            </form>\n        '),n.querySelector("textarea").focus(),n.querySelector(".cancel-button").addEventListener("click",(e=>{e.target.parentElement.remove(),t.removeAttribute("hidden","")})),t.parentElement.querySelector(".add-card-form").addEventListener("submit",(e=>{e.preventDefault();const t=e.target;if(t.querySelector("textarea").value){const e=t.parentElement.querySelector(".card-box"),n=t.querySelector("textarea").value;e.insertAdjacentHTML("beforeend",`\n                    <div class="card">\n                        ${n}\n                        <div class="remove-button"></div>\n                    </div>\n                `);let r=e.lastElementChild.querySelector(".remove-button");r.innerHTML="<div>&#x2715;</div>",r.addEventListener("click",(()=>{r.parentElement.remove()}))}t.parentElement.querySelector(".add-link").removeAttribute("hidden",""),t.remove()}))}))))})),function(){const e=document.querySelector("#whiteboard");new MutationObserver((e=>{for(let t of e)for(let e of t.addedNodes)e instanceof HTMLElement&&e.matches(".card")&&(Array.from(document.querySelectorAll(".card")).forEach((e=>e.addEventListener("mousedown",(e=>{e.preventDefault();let t=e.target;t.classList.add("dragged");let n=e.target.parentElement;t.style.width=n.clientWidth-20+"px";let r=t.getBoundingClientRect(),d=e.clientY-r.y,o=e.clientX-r.x;document.documentElement.addEventListener("mousemove",(e=>{if(document.querySelector(".dragged")){let t=document.querySelector(".dragged");t.style.top=e.clientY-d+"px",t.style.left=e.clientX-o+"px"}})),document.documentElement.addEventListener("mouseup",(()=>{if(document.querySelector(".dragged")){let e=document.querySelector(".dragged");document.querySelector(".space")&&document.querySelector(".space").replaceWith(e),e.classList.remove("dragged"),e.style=void 0,e=void 0}}))})))),Array.from(document.querySelectorAll(".card")).forEach((e=>{let t=e.getBoundingClientRect().top,n=e.getBoundingClientRect().bottom,r=t+e.getBoundingClientRect().height/2,d=e.getBoundingClientRect().left,o=e.getBoundingClientRect().right;document.documentElement.addEventListener("mousemove",(c=>{if(document.querySelector(".dragged")&&!e.classList.contains(".dragged")&&t<=c.clientY&&c.clientY<=n&&d<=c.clientX&&c.clientX<=o){document.querySelector(".space")&&document.querySelector(".space").remove();let d=document.querySelector(".dragged"),o=document.createElement("div");o.style.width=d.getBoundingClientRect().width+"px",o.style.height=d.getBoundingClientRect().height+"px",o.classList.add("space"),t<=c.clientY&&c.clientY<r?e.insertAdjacentElement("beforebegin",o):r<c.clientY&&c.clientY<=n&&e.insertAdjacentElement("afterend",o)}}))})))})).observe(e,{childList:!0,subtree:!0})}(),window.addEventListener("beforeunload",(function(){const e=Array.from(document.querySelectorAll(".card-box"));let t={};for(let n=0;n<e.length;n++){let r=[];Array.from(e[n].children).forEach((e=>{let t=e.firstChild;r.push(t.textContent)})),t[n]=r}localStorage.setItem("formData",JSON.stringify(t))}))})();