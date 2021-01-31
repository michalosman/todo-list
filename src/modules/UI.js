import TodoList from "./TodoList.js";
import Storage from "./Storage.js";

export default class UI {
  static loadWebsite() {
    this.initDefaultButtons();
    this.loadStorageContent(); //from local storage
  }

  static initDefaultButtons() {
    const inboxProjectsButton = document.getElementById("button-index");
    const todayProjectsButton = document.getElementById("button-today");
    const weekProjectsButton = document.getElementById("button-this-week");
    const addProjectButton = document.getElementById("button-add-project");
    const addProjectPopupButton = document.getElementBy(
      "button-add-project-confirm"
    );
    const cancelProjectPopupButton = document.getElementBy(
      "button-add-project-cancel"
    );
    const addTaskButton = document.getElementById("button-add-task");
    const addTaskPopupButton = document.getElementBy("button-add-task-confirm");
    const cancelTaskPopupButton = document.getElementBy(
      "button-add-task-cancel"
    );

    inboxProjectsButton.addEventListener("click", UI.openInboxProjects);
    todayProjectsButton.addEventListener("click", UI.openTodayProjects);
    weekProjectsButton.addEventListener("click", UI.openWeekProjects);
    addProjectButton.addEventListener("click", UI.openAddProjectPopup);
    addProjectPopupButton.addEventListener("click", UI.addProject);
    cancelProjectPopupButton.addEventListener("click", UI.closeAddProjectPopup);
    addTaskButton.addEventListener("click", UI.openAddTaskPopup);
    addTaskPopupButton.addEventListener("click", UI.addTask);
    cancelTaskPopupButton.addEventListener("click", UI.closeAddTaskPopup);
  }

  // Default project button handlers

  static openInboxProjects() {
    //for other random tasks which can't be assign as a project
  }

  static openTodayProjects() {
    //get all today tasks
  }

  static openWeekProjects() {
    //get all this week tasks
  }

  // Add project button handlers

  static openAddProjectPopup() {
  }

  static closeAddProjectPopup() {
    //show popup
    //cancel - hide popup
    //add - create popup
    //create element and addEventListener (handleProjectNutton)
    //add to todolist
    //add to UI
    //save local
    //hide popup}

  static addProject() {}

  // Add task button handlers

  static openAddTaskPopup() {
    //show popup
    //cancel - hide popup
    //create element and addEventListener (handleTaskButton)
    //add to todolist/project
    //add to UI
    //save local
    //hide popup
  }

  static closeAddTaskPopup() {}

  static addTask() {}

  // Creating DOM elements

  createProject(project) {
    //creates an element in DOM
  }

  createTask(task) {
    //creates an element in DOM
  }

  // Project button handlers

  handleProjectButton() {
    //name clicked -> openProject
    //options clicked -> openProjectSettings
  }

  openProject() {
    //update UI
  }

  openProjectSettings() {
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

  // Tasks button handlers

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
