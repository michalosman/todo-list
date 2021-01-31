import Storage from "./Storage.js";

export default class UI {
  static load() {
    UI.renderContent();
    UI.initRenderedButtons();
    UI.initDefaultButtons();
    UI.openInboxProjects();
  }

  static renderContent() {}

  static initRenderedButtons() {
    const projectButtons = document.querySelectorAll("[data-project-button]");
    projectButtons.forEach((projectButton) =>
      projectButton.addEventListener("click", UI.handleProjectButton)
    );
  }

  static initDefaultButtons() {
    const inboxProjectsButton = document.getElementById(
      "button-inbox-projects"
    );
    const todayProjectsButton = document.getElementById(
      "button-today-projects"
    );
    const weekProjectsButton = document.getElementById("button-week-projects");
    const addProjectButton = document.getElementById("button-add-project");
    const addProjectPopupButton = document.getElementById(
      "button-add-project-popup"
    );
    const cancelProjectPopupButton = document.getElementById(
      "button-cancel-project-popup"
    );
    const addTaskButton = document.getElementById("button-add-task");
    const addTaskPopupButton = document.getElementById("button-add-task-popup");
    const cancelTaskPopupButton = document.getElementById(
      "button-cancel-task-popup"
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
    //setup event listeners
  }

  static openTodayProjects() {}

  static openWeekProjects() {}

  // Add project button handlers

  static openAddProjectPopup() {
    const projectPopup = document.getElementById("add-project-popup");
    projectPopup.classList.add("active");
    this.classList.add("active");
  }

  static closeAddProjectPopup() {
    const projectPopup = document.getElementById("add-project-popup");
    projectPopup.classList.remove("active");

    const projectInput = document.getElementById("input-add-project-popup");
    projectInput.value = "";

    const addProjectButton = document.getElementById("button-add-project");
    addProjectButton.classList.remove("active");
  }

  static addProject() {
    const projectInput = document.getElementById("input-add-project-popup");
    if (projectInput.value !== "") UI.createProject(projectInput.value);
    UI.closeAddProjectPopup();
  }

  static createProject(name) {
    const userProjects = document.getElementById("user-projects");
    userProjects.innerHTML += ` 
      <button class="button-project" data-project-button>
        <div class="left-project-panel">
          <i class="fas fa-tasks"></i>
          ${name}
        </div>
        <div class="right-project-panel">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </button>`;
    UI.initRenderedButtons();
  }

  // Add task button handlers

  static openAddTaskPopup() {
    const addTaskPopup = document.getElementById("add-task-popup");
    addTaskPopup.classList.add("active");
    this.classList.add("active");
  }

  static closeAddTaskPopup() {
    const addTaskPopup = document.getElementById("add-task-popup");
    addTaskPopup.classList.remove("active");

    const addTaskInput = document.getElementById("input-add-task-popup");
    addTaskInput.value = "";

    const addTaskButton = document.getElementById("button-add-task");
    addTaskButton.classList.remove("active");
  }

  static addTask() {
    const addTaskPopupInput = document.getElementById("input-add-task-popup");
    if (addTaskPopupInput.value !== "")
      UI.createTask(addTaskPopupInput.value, "No date");
    UI.closeAddTaskPopup();
  }

  static createTask(name, dueDate) {
    const tasksList = document.getElementById("tasks-list");
    tasksList.innerHTML += `
      <button class="button-task">
        <div class="left-task-panel">
          <i class="far fa-circle"></i>
          <p class="task-content">${name}</p>
        </div>
        <div class="right-task-panel">
          <div class="due-date">${dueDate}</div>
        </div>
      </button>`;
  }

  // Project button handlers

  static handleProjectButton(e) {
    if (e.target.classList.contains("fas")) {
      UI.openProjectSettings();
      return;
    }
    UI.openProject();
  }

  static openProject() {
    console.log("project");
  }

  static openProjectSettings() {
    console.log("settings");
  }

  static renameProject() {}

  static deleteProject() {}

  // Tasks button handlers

  static handleTaskButton() {}

  static setTaskCompleted() {}

  static deleteTask() {}

  static renameTask() {}

  static setTaskDate() {}
}
