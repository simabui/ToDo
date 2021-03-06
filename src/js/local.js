import template from "./template";
import { obj } from "./createNote";

export function saveToLocal() {
  try {
    localStorage.setItem("collection", JSON.stringify(obj.collection));
  } catch (err) {
    console.error("Set state error: ", err);
  }
}

//render from local
function renderFromLocal() {
  const collection = JSON.parse(localStorage.getItem("collection"));
  const grid = document.querySelector("#task-list");
  try {
    // if local empty - exit
    if (collection === null) return;
    // render from local
    const tempCollection = collection.reduce(
      (acc, item) => acc + template(item),
      ""
    );
    grid.insertAdjacentHTML("beforeend", tempCollection);
  } catch (err) {
    console.error("Set state error: ", err);
  }
}
renderFromLocal();

// after refresh arr of collection get erase,
// to avoid it and have saved arr
// put arr from local
export function saveLocalToArr() {
  try {
    const ParsedCollection = JSON.parse(localStorage.getItem("collection"));
    if (ParsedCollection === null) return;
    obj.collection.push(...ParsedCollection);
  } catch (err) {
    console.error(err);
  }
}
