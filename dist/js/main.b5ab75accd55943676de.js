(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{ch6i:function(e,t,n){},e6Wu:function(e,t,n){"use strict";n.r(t);n("ch6i");function r(){try{localStorage.setItem("collection",JSON.stringify(o))}catch(e){console.error("Set state error: ",e)}}!function(){const e=JSON.parse(localStorage.getItem("collection")),t=document.querySelector("#task-list");try{if(null===e)return;const n=e.reduce((e,t)=>e+a(t),"");t.insertAdjacentHTML("beforeend",n)}catch(e){console.error("Set state error: ",e)}}();let o=[];const s={pushtoCollection(e){o.push(e)},createTemplate(e,t,n){const o={id:Date.now(),status:"open",title:e,desc:t,prio:n};this.pushtoCollection(o);const s=a(o);this.insertTemplate(s),r()},insertTemplate(e){i.list.insertAdjacentHTML("beforeend",e)},remove(e){o=o.filter(t=>t.id!==e),r()},setStatus(e){o.find(t=>t.id===e).status="done",r()},renderFromTemplate(e){const t=e.reduce((e,t)=>e+a(t),"");i.list.innerHTML="",this.insertTemplate(t)},filterInput(e){const t=o.filter(t=>{if(t.title.includes(e))return t});this.renderFromTemplate(t)},filterStatus(e){const t=o.filter(t=>"all"===e?t:t.status===e);this.renderFromTemplate(t)},filterPrio(e){const t=o.filter(t=>"all"===e?t:t.prio===e);this.renderFromTemplate(t)}};function a(e){return`\n  <div class="note" data-status="${e.status}" data-id="${e.id}">\n    <h2 class="note__title">${e.title}</h2>\n    <div class="note__description">${e.desc}</div>\n    <div class="note__block">\n      <span class="note__priority note__priority-${e.prio}">${e.prio}</span>\n      <div class="note__option">\n      <span>...</span>\n      <ul class="note__additional">\n      <li class="note__list note__top" data-type="done">done</li>\n      <li class="note__list" data-type="edit">edit</li>\n      <li class="note__list" data-type="delete">delete</li>\n    </ul>\n      </div>\n    </div>\n  </div>`}!function(){try{const e=JSON.parse(localStorage.getItem("collection"));if(null===e)return;o.push(...e)}catch(e){console.error(e)}}(),n.d(t,"refs",(function(){return i}));const i={inputSearch:document.querySelector("#task-search"),create:document.querySelector("#button-create"),overlay:document.querySelector(".overlay"),cancel:document.querySelector("#cancel"),save:document.querySelector("#save"),createForm:document.querySelector(".create-form"),list:document.querySelector("#task-list"),taskStatus:document.querySelector("#task-status"),taskPrio:document.querySelector("#task-priority")};function c(e){e.preventDefault(),i.overlay.classList.add("is-open")}function l(){i.overlay.classList.remove("is-open")}function u(e){e.remove();const t=Number(e.dataset.id);s.remove(t)}i.create.addEventListener("click",c),i.overlay.addEventListener("click",(function(e){e.preventDefault(),(e.target===e.currentTarget||e.target===i.cancel)&&l();return!1})),i.save.addEventListener("click",(function(e){e.preventDefault();const t=i.createForm.elements.title.value,n=i.createForm.elements.description.value,r=i.createForm.priority.value;if(0===t.length||0===n.length)return void alert("Fill title and description before Save");s.createTemplate(t,n,r),i.createForm.reset(),l()})),i.list.addEventListener("click",(function(e){const t=e.target.closest(".note");"done"===e.target.dataset.type&&function(e){const t=Number(e.dataset.id);s.setStatus(t),e.dataset.status="done"}(t);"delete"===e.target.dataset.type&&u(t);"edit"===e.target.dataset.type&&(c(e),u(t))})),i.inputSearch.addEventListener("input",(function(){const e=i.inputSearch.value;s.filterInput(e)})),i.taskStatus.addEventListener("change",(function(){const e=i.taskStatus.value;s.filterStatus(e)})),i.taskPrio.addEventListener("change",(function(){const e=i.taskPrio.value;s.filterPrio(e)}))}},[["e6Wu",1]]]);