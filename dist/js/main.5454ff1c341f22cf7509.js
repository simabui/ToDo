(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{ch6i:function(e,t,n){},e6Wu:function(e,t,n){"use strict";n.r(t);n("ch6i");function o(e){return`\n  <div class="note" data-status="${e.status}" data-id="${e.id}">\n    <h2 class="note__title">${e.title}</h2>\n    <div class="note__description">${e.desc}</div>\n    <div class="note__block">\n      <span class="note__priority note__priority-${e.prio}">${e.prio}</span>\n      <div class="note__option">\n      <span>...</span>\n      <ul class="note__additional">\n      <li class="note__list note__top" data-type="done">done</li>\n      <li class="note__list" data-type="edit">edit</li>\n      <li class="note__list" data-type="delete">delete</li>\n    </ul>\n      </div>\n    </div>\n  </div>`}function r(){try{localStorage.setItem("collection",JSON.stringify(i.collection))}catch(e){console.error("Set state error: ",e)}}!function(){const e=JSON.parse(localStorage.getItem("collection")),t=document.querySelector("#task-list");try{if(null===e)return;const n=e.reduce((e,t)=>e+o(t),"");t.insertAdjacentHTML("beforeend",n)}catch(e){console.error("Set state error: ",e)}}();const i={collection:[],pushtoCollection(e){this.collection.push(e)},createTemplate(e,t,n){const i={id:Date.now(),status:"open",title:e,desc:t,prio:n};this.pushtoCollection(i);const s=o(i);this.insertTemplate(s),r()},insertTemplate(e){s.list.insertAdjacentHTML("beforeend",e)},remove(e){this.collection=this.collection.filter(t=>t.id!==e),r()},setStatus(e){this.collection.find(t=>t.id===e).status="done",r()},renderFromTemplate(e){const t=e.reduce((e,t)=>e+o(t),"");s.list.innerHTML="",this.insertTemplate(t)},filterInput(e){const t=this.collection.filter(t=>{if(t.title.includes(e))return t});this.renderFromTemplate(t)},filterStatus(e){const t=this.collection.filter(t=>"all"===e?t:t.status===e);this.renderFromTemplate(t)},filterPrio(e){const t=this.collection.filter(t=>"all"===e?t:t.prio===e);this.renderFromTemplate(t)}};!function(){try{const e=JSON.parse(localStorage.getItem("collection"));if(null===e)return;i.collection.push(...e)}catch(e){console.error(e)}}(),n.d(t,"refs",(function(){return s}));const s={inputSearch:document.querySelector("#task-search"),create:document.querySelector("#button-create"),overlay:document.querySelector(".overlay"),cancel:document.querySelector("#cancel"),save:document.querySelector("#save"),createForm:document.querySelector(".create-form"),list:document.querySelector("#task-list"),taskStatus:document.querySelector("#task-status"),taskPrio:document.querySelector("#task-priority")};function c(e){e.preventDefault(),s.overlay.classList.add("is-open")}function l(){s.overlay.classList.remove("is-open")}function a(e){e.remove();const t=Number(e.dataset.id);i.remove(t)}s.create.addEventListener("click",c),s.overlay.addEventListener("click",(function(e){e.preventDefault(),(e.target===e.currentTarget||e.target===s.cancel)&&l();return!1})),s.save.addEventListener("click",(function(e){e.preventDefault();const t=s.createForm.elements.title.value,n=s.createForm.elements.description.value,o=s.createForm.priority.value;if(0===t.length||0===n.length)return void alert("Fill title and description before Save");i.createTemplate(t,n,o),s.createForm.reset(),l()})),s.list.addEventListener("click",(function(e){const t=e.target.closest(".note"),n=e.target.dataset.type;"SPAN"===e.target.nodeName&&t.querySelector(".note__additional").classList.toggle("note-open");"done"===n&&function(e){const t=Number(e.dataset.id);i.setStatus(t),e.dataset.status="done"}(t);"delete"===n&&a(t);"edit"===n&&(c(e),a(t))})),s.inputSearch.addEventListener("input",(function(){const e=s.inputSearch.value;i.filterInput(e)})),s.taskStatus.addEventListener("change",(function(){const e=s.taskStatus.value;i.filterStatus(e)})),s.taskPrio.addEventListener("change",(function(){const e=s.taskPrio.value;i.filterPrio(e)}))}},[["e6Wu",1]]]);