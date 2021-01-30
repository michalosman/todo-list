import TodoList from "./TodoList.js";

export default class UI {
  constructor() {
    this.todoList = new TodoList();
    //load saved data

    this.addProjectButton = document.getElementById("button-add-project");
    this.addProjectButton.addEventListener("click", this.addProject);

    this.projectDefaultButtons = document.querySelectorAll(
      "[data-default-project-button]"
    );
    this.projectDefaultButtons.forEach(
      button.addEventListener("click", this.openProject)
    );

    this.projectButtons = document.querySelectorAll("[data-project-button]");
    this.projectButtons.forEach((button) =>
      button.addEventListener("click", this.handleProjectButton)
    );

    this.taskButtons = document.querySelectorAll("[data-task-button]");
    this.taskButtons.forEach((button) =>
      button.addEventListener("click", this.handleTaskButton)
    );
  }

  addProject() {
    //show popup
    //cancel - hide popup
    //add - create popup
    //add to todolist
    //add to UI
    //save local
    //hide popup
  }

  addTask() {
    //show popup
    //cancel - hide popup
    //add to todolist/project
    //add to UI
    //save local
    //hide popup
  }

  handleProjectButton() {
    //name clicked -> openProject
    //options clicked -> setProject
  }

  openProject() {
    //update UI
  }

  setProject() {
    //show popup
    //rename clicked -> renameProject
    //remove clicked -> removeProject
    //hide popup
  }

  renameProject() {
    //show popup (same size as setProject popup)
    //cancel - hide popup
    //update todo (setName)
    //update UI (textContent)
    //save local
    //hide popup
  }

  removeProject() {
    //remove from todolist
    //remove from UI
    //save local
  }

  handleTaskButton() {
    //tick -> setTaskCompleted
    //text -> renameTask
    //date -> setTaskDate
  }

  setTaskCompleted() {
    //set UI tick completed
    //cross task out (setTimeout)
    //removeTask
  }

  removeTask() {
    //remove from todoist/project
    //remove from UI
    //save local
  }

  renameTask() {
    //show popup
    //cancel - hide popup
    //update todolist/project (setName)
    //update UI (textContent)
    //save local
    //hide popup
  }

  setTaskDate() {
    //show popup
    //cancel - hide popup
    //update todoist/project (setDate)
    //update UI (textContent)
    //save local
    //hide popup
  }
}
