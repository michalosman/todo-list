import Storage from "./Storage";
import TodoList from "./TodoList";
import Project from "./Project";
import Task from "./Task";

export default class UI {
  static load() {
    UI.loadProjects();
    UI.initProjectButtons();
  }

  static loadProjects() {
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => this.createProject(project.name));
  }

  // PROJECT BUTTONS

  static initProjectButtons() {
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
    const projectButtons = document.querySelectorAll("[data-project-button]");

    inboxProjectsButton.addEventListener("click", UI.openInboxTasks);
    todayProjectsButton.addEventListener("click", UI.openTodayTasks);
    weekProjectsButton.addEventListener("click", UI.openWeekTasks);
    addProjectButton.addEventListener("click", UI.openAddProjectPopup);
    addProjectPopupButton.addEventListener("click", UI.addProject);
    cancelProjectPopupButton.addEventListener("click", UI.closeAddProjectPopup);
    projectButtons.forEach((projectButton) =>
      projectButton.addEventListener("click", UI.handleProjectButton)
    );
  }

  static openInboxTasks() {
    //setup event listeners
    //store in localStorage as Inbox
  }

  static openTodayTasks() {}

  static openWeekTasks() {}

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
    const projectName = projectInput.value;

    if (projectName !== "" && !Storage.getTodoList().contains(projectName)) {
      UI.createProject(projectName);
      Storage.addProject(new Project(projectName));
    }
    UI.closeAddProjectPopup();
  }

  static createProject(name) {
    const userProjects = document.getElementById("user-projects");
    userProjects.innerHTML += ` 
      <button class="button-project" data-project-button>
        <div class="left-project-panel">
          <i class="fas fa-tasks"></i>
          <span>${name}</span>
        </div>
        <div class="right-project-panel">
          <i class="fas fa-times"></i>
        </div>
      </button>`;
    UI.initProjectButtons();
  }

  static handleProjectButton(e) {
    const projectName = this.children[0].children[1].textContent;
    if (e.target.classList.contains("fas")) {
      UI.deleteProject(projectName);
      return;
    }
    UI.openProject(projectName);
  }

  static openProject(projectName) {
    const projectPreview = document.getElementById("project-preview");
    projectPreview.innerHTML = `
    <h1>${projectName}</h1>
      <div class="tasks-list" id="tasks-list"></div>
      <button class="button-add-task" id="button-add-task">
        <i class="fas fa-plus"></i>
        Add Task
      </button>
      <div class="add-task-popup" id="add-task-popup">
        <input
          class="input-add-task-popup"
          id="input-add-task-popup"
          type="text"
        />
        <div class="add-task-popup-buttons">
          <button class="button-add-task-popup" id="button-add-task-popup">
            Add
          </button>
          <button
            class="button-cancel-task-popup"
            id="button-cancel-task-popup"
          >
            Cancel
          </button>
        </div>
      </div>`;
    UI.renderTasks(projectName);
    UI.initAddTaskButtons();
  }

  static deleteProject(projectName) {
    Storage.deleteProject(projectName);
    UI.loadProjects();
    UI.clear();
  }

  static clear() {
    const userProjects = document.getElementById("user-projects");
    userProjects.textContent = "";

    const projectPreview = document.getElementById("project-preview");
    projectPreview.textContent = "";
  }

  // TASK BUTTONS

  static initAddTaskButtons() {
    const addTaskButton = document.getElementById("button-add-task");
    const addTaskPopupButton = document.getElementById("button-add-task-popup");
    const cancelTaskPopupButton = document.getElementById(
      "button-cancel-task-popup"
    );
    const taskButtons = document.querySelectorAll("[data-task-button]");

    addTaskButton.addEventListener("click", UI.openAddTaskPopup);
    addTaskPopupButton.addEventListener("click", UI.addTask);
    cancelTaskPopupButton.addEventListener("click", UI.closeAddTaskPopup);
    taskButtons.forEach((taskButton) =>
      taskButton.addEventListener("click", UI.handleTaskButton)
    );
  }

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
    const taskName = addTaskPopupInput.value;

    const projectPreview = document.getElementById("project-preview");
    const projectName = projectPreview.children[0].textContent;

    if (
      taskName !== "" &&
      !Storage.getTodoList().getProject(projectName).contains(taskName)
    ) {
      UI.createTask(taskName, "No date");
      Storage.addTask(projectName, new Task(taskName));
    }
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
          <i class="fas fa-times"></i>
        </div>
      </button>`;
  }

  static renderTasks(projectName) {
    const tasks = Storage.getTodoList().getProject(projectName).getTasks();
    tasks.forEach((task) => UI.createTask(task.name, task.dueDate));
  }

  // Tasks button handlers

  static handleTaskButton() {}

  static setTaskCompleted() {}

  static deleteTask() {}

  static renameTask() {}

  static setTaskDate() {}
}
