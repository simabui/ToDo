"use strict";
import "./../sass/styles.scss";
import "./createNote.js";
import { obj } from "./createNote.js";

export const refs = {
  inputSearch: document.querySelector("#task-search"),
  create: document.querySelector("#button-create"),
  overlay: document.querySelector(".overlay"),
  cancel: document.querySelector("#cancel"),
  save: document.querySelector("#save"),
  createForm: document.querySelector(".create-form"),
  list: document.querySelector("#task-list"),
  taskStatus: document.querySelector("#task-status"),
  taskPrio: document.querySelector("#task-priority")
};

refs.create.addEventListener("click", handleOverlay);
refs.overlay.addEventListener("click", handleCancel);
refs.save.addEventListener("click", handleCreate);
refs.list.addEventListener("click", handleOptions);
refs.inputSearch.addEventListener("input", handleInput);
refs.taskStatus.addEventListener("change", handleStatus);
refs.taskPrio.addEventListener("change", handlePrio);

function handleOverlay(e) {
  e.preventDefault();
  refs.overlay.classList.add("is-open");
}

//cancel button
function handleCancel(e) {
  e.preventDefault();
  if (e.target === e.currentTarget || e.target === refs.cancel) {
    closeOverlay();
  }
  return false;
}

function closeOverlay() {
  refs.overlay.classList.remove("is-open");
}

//create button
function handleCreate(e) {
  e.preventDefault();
  const input = refs.createForm.elements.title.value;
  const description = refs.createForm.elements.description.value;
  const priority = refs.createForm.priority.value;

  if (input.length === 0 || description.length === 0) {
    alert("Fill title and description before Save");
    return;
  }
  //render
  obj.createTemplate(input, description, priority);
  //reset inputs
  refs.createForm.reset();
  closeOverlay();
}

// set option
function handleOptions(e) {
  const parent = e.target.closest(".note");

  if (e.target.dataset.type === "done") {
    changeStatus(parent);
  }

  if (e.target.dataset.type === "delete") {
    deleteItem(parent);
  }

  if (e.target.dataset.type === "edit") {
    handleOverlay(e);
    deleteItem(parent);
  }
}

function changeStatus(node) {
  const id = Number(node.dataset.id);
  obj.setStatus(id);
  // set background-color to done
  node.dataset.status = "done";
}

function deleteItem(node) {
  node.remove();
  const id = Number(node.dataset.id);
  obj.remove(id);
}

//filter form
function handleInput() {
  const title = refs.inputSearch.value;
  obj.filterInput(title);
}

function handleStatus() {
  const status = refs.taskStatus.value;
  obj.filterStatus(status);
}

function handlePrio() {
  const prio = refs.taskPrio.value;
  obj.filterPrio(prio);
}
