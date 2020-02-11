import { refs } from "./index";
import { buildTemplate } from "./template";
import { saveToLocal, saveLocalToArr } from "./local";

export const obj = {
  collection: [],

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
    const item = buildTemplate(noteList);
    this.insertTemplate(item);
    saveToLocal();
  },

  insertTemplate(element) {
    refs.list.insertAdjacentHTML("beforeend", element);
  },

  //remove button
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

  // filtered arr and render
  renderFromTemplate(arr) {
    const newItems = arr.reduce((acc, item) => acc + buildTemplate(item), "");
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
