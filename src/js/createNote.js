import { refs } from "./index";
import template from "./template";
import { saveToLocal, saveLocalToArr } from "./local";

export const obj = {
  collection: [],
  editObj: {},

  pushtoCollection(obj) {
    this.collection.push(obj);
  },

  //create obj,push to arr and render
  createTemplate(title, desc, prio) {
    const noteList = {
      id: Date.now(),
      status: "open",
      title,
      desc,
      prio
    };

    this.pushtoCollection(noteList);
    const item = template(noteList);
    this.insertTemplate(item);
    saveToLocal();
  },

  insertTemplate(element) {
    refs.list.insertAdjacentHTML("beforeend", element);
  },

  //remove
  remove(id) {
    this.collection = this.collection.filter(note => note.id !== id);
    saveToLocal();
  },
  // add status to obj
  setStatus(el) {
    const obj = this.collection.find(note => note.id === el);
    //change status in obj
    obj.status = "done";
    saveToLocal();
  },
  //Open edit overlay
  edit(id) {
    this.editObj = this.collection.find(note => note.id === id);
    refs.edit.classList.add("is-open");
    const { title, description, priority } = refs.edit.children[0].elements;
    //display note data in overlay
    title.value = this.editObj.title;
    description.value = this.editObj.desc;
    priority.value = this.editObj.prio;
  },
  // Render Edit
  renderEdit(title, desc, prio) {
    this.editObj.title = title;
    this.editObj.desc = desc;
    this.editObj.prio = prio;
    this.renderFromTemplate(this.collection);
    saveToLocal();
  },
  // filtered arr and render
  renderFromTemplate(arr) {
    const newItems = arr.reduce((acc, item) => acc + template(item), "");
    refs.list.innerHTML = "";
    this.insertTemplate(newItems);
  },

  //filter by input
  filterInput(val) {
    const newCollection = this.collection.filter(note => {
      if (note.title.includes(val)) {
        return note;
      }
    });

    this.renderFromTemplate(newCollection);
  },

  //filter by status
  filterStatus(status) {
    const newCollection = this.collection.filter(note => {
      if (status === "all") {
        return note;
      }
      return note.status === status;
    });

    this.renderFromTemplate(newCollection);
  },

  //filter by prio
  filterPrio(prio) {
    const newCollection = this.collection.filter(note => {
      if (prio === "all") {
        return note;
      }
      return note.prio === prio;
    });

    this.renderFromTemplate(newCollection);
  }
};

saveLocalToArr();
