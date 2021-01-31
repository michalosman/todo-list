import TodoList from "./TodoList.js";

export default class UI {
  static loadWebsite() {
    this.initDefaultButtons();
    //const todoList = Storage.getTodoList()
    //todolist/projects foreach createProject(project)
    //todolist/project/tasks foreach createTask(task)
  }

  static initDefaultButtons() {
    const inboxProjectsButton = document.getElementById("button-index");
    const todayProjectsButton = document.getElementById("button-today");
    const weekProjectsButton = document.getElementById("button-this-week");
    const addProjectButton = document.getElementById("button-add-project");
    const addTaskButton = document.getElementById("button-add-task");

    inboxProjectsButton.addEventListener("click", UI.openInboxProjects);
    todayProjectsButton.addEventListener("click", UI.openTodayProjects);
    weekProjectsButton.addEventListener("click", UI.openWeekProjects);
    addTaskButton.addEventListener("click", UI.addTask);
    addProjectButton.addEventListener("click", UI.addProject);
  }

  static openInboxProjects() {
    //for other random tasks which can't be assign as a project
  }

  static openTodayProjects() {
    //get all today tasks
  }

  static openWeekProjects() {
    //get all this week tasks
  }

  static addProject() {
    //show popup
    //cancel - hide popup
    //add - create popup
    //create element and addEventListener (handleProjectNutton)
    //add to todolist
    //add to UI
    //save local
    //hide popup
  }

  static addTask() {
    //show popup
    //cancel - hide popup
    //create element and addEventListener (handleTaskButton)
    //add to todolist/project
    //add to UI
    //save local
    //hide popup
  }

  createProject(project) {
    //creates an element in DOM
  }

  createTask(task) {
    //creates an element in DOM
  }

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
