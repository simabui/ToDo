//template
export default function(obj) {
  return `
  <div class="note" data-status="${obj.status}" data-id="${obj.id}">
    <h2 class="note__title">${obj.title}</h2>
    <div class="note__description">${obj.desc}</div>
    <div class="note__block">
      <span class="note__priority note__priority-${obj.prio}">${obj.prio}</span>
      <div class="note__option">
      <span>...</span>
      <ul class="note__additional">
      <li class="note__list note__top" data-type="done">done</li>
      <li class="note__list" data-type="edit">edit</li>
      <li class="note__list" data-type="delete">delete</li>
    </ul>
      </div>
    </div>
  </div>`;
}
