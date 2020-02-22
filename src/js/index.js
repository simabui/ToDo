"use strict";
import "./../sass/styles.scss";
import { obj } from "./createNote";

export const refs = {
  inputSearch: document.querySelector("#task-search"),
  create: document.querySelector("#button-create"),
  form: document.querySelector("#create-form"),
  edit: document.querySelector("#edit-form"),
  cancel: document.querySelector("#cancel"),
  cancelEdit: document.querySelector("#cancel-edit"),
  save: document.querySelector("#save"),
  saveEdit: document.querySelector("#save-edit"),
  cancelEdit: document.querySelector("#cancel-edit"),
  createForm: document.querySelector(".create-form"),
  list: document.querySelector("#task-list"),
  taskStatus: document.querySelector("#task-status"),
  taskPrio: document.querySelector("#task-priority")
};

refs.create.addEventListener("click", handleOverlay);
refs.form.addEventListener("click", handleCancel);
refs.save.addEventListener("click", handleCreate);
refs.saveEdit.addEventListener("click", handleEdit);
refs.cancelEdit.addEventListener("click", handleCloseEdit);
refs.list.addEventListener("click", handleOptions);
refs.inputSearch.addEventListener("input", handleInput);
refs.taskStatus.addEventListener("change", handleStatus);
refs.taskPrio.addEventListener("change", handlePrio);

function handleOverlay(e) {
  e.preventDefault();
  refs.form.classList.add("is-open");
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
  refs.form.classList.remove("is-open");
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

// Create Edit
function handleEdit(e) {
  e.preventDefault();
  const input = refs.edit.children[0].elements.title.value;
  const description = refs.edit.children[0].elements.description.value;
  const priority = refs.edit.children[0].priority.value;
  obj.renderEdit(input, description, priority);
  handleCloseEdit(e);
}
// Close Edit
function handleCloseEdit(e) {
  e.preventDefault();
  refs.edit.classList.remove("is-open");
}
// set option
function handleOptions(e) {
  const parent = e.target.closest(".note");
  const dataType = e.target.dataset.type;
  //show add options
  if (e.target.nodeName === "SPAN") {
    parent.querySelector(".note__additional").classList.toggle("note-open");
  }

  if (dataType === "done") {
    changeStatus(parent);
  }

  if (dataType === "delete") {
    deleteItem(parent);
  }

  if (dataType === "edit") {
    editItem(parent);
  }
}

function changeStatus(node) {
  const id = +node.dataset.id;
  obj.setStatus(id);
  // set background-color to done
  node.dataset.status = "done";
}

function deleteItem(node) {
  node.remove();
  const id = +node.dataset.id;
  obj.remove(id);
}

function editItem(node) {
  const id = +node.dataset.id;
  obj.edit(id);
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
