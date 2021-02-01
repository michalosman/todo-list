/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", _modules_UI__WEBPACK_IMPORTED_MODULE_0__.default.load());\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Project\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  addTask(task) {\n    if (this.tasks.indexOf(task) > 0) return;\n    this.tasks.push(task);\n  }\n\n  deleteTask(taskName) {\n    const task = this.tasks.find((task) => task.name === taskName);\n    this.tasks.splice(this.tasks.indexOf(task), 1);\n  }\n\n  getTask(taskName) {\n    return Object.assign(\n      new _Task__WEBPACK_IMPORTED_MODULE_0__.default(),\n      this.tasks.find((task) => (task.name = taskName))\n    );\n  }\n\n  getTasks() {\n    return this.tasks;\n  }\n\n  contains(taskName) {\n    return this.tasks.some((task) => task.name === taskName);\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Storage\n/* harmony export */ });\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/modules/TodoList.js\");\n\n\nclass Storage {\n  static saveTodoList(data) {\n    localStorage.setItem(\"todoList\", JSON.stringify(data));\n  }\n\n  static getTodoList() {\n    return Object.assign(\n      new _TodoList__WEBPACK_IMPORTED_MODULE_0__.default(),\n      JSON.parse(localStorage.getItem(\"todoList\"))\n    );\n  }\n\n  static addProject(project) {\n    let todoList = new _TodoList__WEBPACK_IMPORTED_MODULE_0__.default();\n    if (Storage.getTodoList() !== null)\n      todoList = Object.assign(new _TodoList__WEBPACK_IMPORTED_MODULE_0__.default(), Storage.getTodoList());\n    todoList.addProject(project);\n    Storage.saveTodoList(todoList);\n  }\n\n  static deleteProject(projectName) {\n    const todoList = Object.assign(new _TodoList__WEBPACK_IMPORTED_MODULE_0__.default(), Storage.getTodoList());\n    todoList.deleteProject(projectName);\n    Storage.saveTodoList(todoList);\n  }\n\n  static addTask(projectName, task) {\n    const todoList = Object.assign(new _TodoList__WEBPACK_IMPORTED_MODULE_0__.default(), Storage.getTodoList());\n    todoList.getProject(projectName).addTask(task);\n    Storage.saveTodoList(todoList);\n  }\n\n  static deleteTask(projectName, taskName) {\n    const todoList = Object.assign(new _TodoList__WEBPACK_IMPORTED_MODULE_0__.default(), Storage.getTodoList());\n    todoList.getProject(projectName).deleteTask(taskName);\n    Storage.saveTodoList(todoList);\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Task\n/* harmony export */ });\nclass Task {\n  constructor(name, dueDate = \"No date\") {\n    this.name = name;\n    this.dueDate = dueDate;\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setDate(dueDate) {\n    this.dueDate = dueDate;\n  }\n\n  getDate() {\n    return this.dueDate;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TodoList\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n\n\nclass TodoList {\n  constructor() {\n    this.projects = [];\n  }\n\n  addProject(project) {\n    if (this.projects.indexOf(project) > 0) return;\n    this.projects.push(project);\n  }\n\n  deleteProject(projectName) {\n    const project = this.projects.find(\n      (project) => project.name === projectName\n    );\n    this.projects.splice(this.projects.indexOf(project), 1);\n  }\n\n  getProject(projectName) {\n    return Object.assign(\n      new _Project__WEBPACK_IMPORTED_MODULE_0__.default(),\n      this.projects.find((project) => project.name === projectName)\n    );\n  }\n\n  getProjects() {\n    return this.projects;\n  }\n\n  contains(projectName) {\n    return this.projects.some((project) => project.name === projectName);\n  }\n\n  //getTasksToday\n  //getTasksThisWeek\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/TodoList.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ UI\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList */ \"./src/modules/TodoList.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\n\n\n\n\nclass UI {\n  static load() {\n    UI.renderProjects();\n    UI.initProjectButtons();\n  }\n\n  // RENDERING CONTENT\n\n  static renderProjects() {\n    _Storage__WEBPACK_IMPORTED_MODULE_0__.default.getTodoList()\n      .getProjects()\n      .forEach((project) => UI.createProject(project.name));\n  }\n\n  static renderTasks(projectName) {\n    _Storage__WEBPACK_IMPORTED_MODULE_0__.default.getTodoList()\n      .getProject(projectName)\n      .getTasks()\n      .forEach((task) => UI.createTask(task.name, task.dueDate));\n  }\n\n  static renderProject(projectName) {\n    const projectPreview = document.getElementById(\"project-preview\");\n    projectPreview.innerHTML = `\n    <h1>${projectName}</h1>\n      <div class=\"tasks-list\" id=\"tasks-list\"></div>\n      <button class=\"button-add-task\" id=\"button-add-task\">\n        <i class=\"fas fa-plus\"></i>\n        Add Task\n      </button>\n      <div class=\"add-task-popup\" id=\"add-task-popup\">\n        <input\n          class=\"input-add-task-popup\"\n          id=\"input-add-task-popup\"\n          type=\"text\"\n        />\n        <div class=\"add-task-popup-buttons\">\n          <button class=\"button-add-task-popup\" id=\"button-add-task-popup\">\n            Add\n          </button>\n          <button\n            class=\"button-cancel-task-popup\"\n            id=\"button-cancel-task-popup\"\n          >\n            Cancel\n          </button>\n        </div>\n      </div>`;\n    UI.renderTasks(projectName);\n    UI.initAddTaskButtons();\n  }\n\n  static createProject(name) {\n    const userProjects = document.getElementById(\"user-projects\");\n    userProjects.innerHTML += ` \n      <button class=\"button-project\" data-project-button>\n        <div class=\"left-project-panel\">\n          <i class=\"fas fa-tasks\"></i>\n          <span>${name}</span>\n        </div>\n        <div class=\"right-project-panel\">\n          <i class=\"fas fa-times\"></i>\n        </div>\n      </button>`;\n    UI.initProjectButtons();\n  }\n\n  // PROJECT EVENT LISTENERS\n\n  static initProjectButtons() {\n    const inboxProjectsButton = document.getElementById(\n      \"button-inbox-projects\"\n    );\n    const todayProjectsButton = document.getElementById(\n      \"button-today-projects\"\n    );\n    const weekProjectsButton = document.getElementById(\"button-week-projects\");\n    const addProjectButton = document.getElementById(\"button-add-project\");\n    const addProjectPopupButton = document.getElementById(\n      \"button-add-project-popup\"\n    );\n    const cancelProjectPopupButton = document.getElementById(\n      \"button-cancel-project-popup\"\n    );\n    const projectButtons = document.querySelectorAll(\"[data-project-button]\");\n\n    inboxProjectsButton.addEventListener(\"click\", UI.openInboxTasks);\n    todayProjectsButton.addEventListener(\"click\", UI.openTodayTasks);\n    weekProjectsButton.addEventListener(\"click\", UI.openWeekTasks);\n    addProjectButton.addEventListener(\"click\", UI.openAddProjectPopup);\n    addProjectPopupButton.addEventListener(\"click\", UI.addProject);\n    cancelProjectPopupButton.addEventListener(\"click\", UI.closeAddProjectPopup);\n    projectButtons.forEach((projectButton) =>\n      projectButton.addEventListener(\"click\", UI.handleProjectButton)\n    );\n  }\n\n  static openInboxTasks() {\n    //setup event listeners\n    //store in localStorage as Inbox\n  }\n\n  static openTodayTasks() {}\n\n  static openWeekTasks() {}\n\n  static openAddProjectPopup() {\n    const projectPopup = document.getElementById(\"add-project-popup\");\n    projectPopup.classList.add(\"active\");\n    this.classList.add(\"active\");\n  }\n\n  static closeAddProjectPopup() {\n    const projectPopup = document.getElementById(\"add-project-popup\");\n    projectPopup.classList.remove(\"active\");\n\n    const projectInput = document.getElementById(\"input-add-project-popup\");\n    projectInput.value = \"\";\n\n    const addProjectButton = document.getElementById(\"button-add-project\");\n    addProjectButton.classList.remove(\"active\");\n  }\n\n  static addProject() {\n    const projectInput = document.getElementById(\"input-add-project-popup\");\n    const projectName = projectInput.value;\n\n    if (projectName !== \"\" && !_Storage__WEBPACK_IMPORTED_MODULE_0__.default.getTodoList().contains(projectName)) {\n      UI.createProject(projectName);\n      _Storage__WEBPACK_IMPORTED_MODULE_0__.default.addProject(new _Project__WEBPACK_IMPORTED_MODULE_2__.default(projectName));\n    }\n    UI.closeAddProjectPopup();\n  }\n\n  static handleProjectButton(e) {\n    const projectName = this.children[0].children[1].textContent;\n    if (e.target.classList.contains(\"fas\")) {\n      UI.deleteProject(projectName);\n      return;\n    }\n    UI.renderProject(projectName);\n  }\n\n  static deleteProject(projectName) {\n    UI.clear();\n    _Storage__WEBPACK_IMPORTED_MODULE_0__.default.deleteProject(projectName);\n    UI.renderProjects();\n  }\n\n  static clear() {\n    const userProjects = document.getElementById(\"user-projects\");\n    userProjects.textContent = \"\";\n\n    const projectPreview = document.getElementById(\"project-preview\");\n    projectPreview.textContent = \"\";\n  }\n\n  // TASK EVENT LISTENERS\n\n  static initAddTaskButtons() {\n    const addTaskButton = document.getElementById(\"button-add-task\");\n    const addTaskPopupButton = document.getElementById(\"button-add-task-popup\");\n    const cancelTaskPopupButton = document.getElementById(\n      \"button-cancel-task-popup\"\n    );\n    const taskButtons = document.querySelectorAll(\"[data-task-button]\");\n\n    addTaskButton.addEventListener(\"click\", UI.openAddTaskPopup);\n    addTaskPopupButton.addEventListener(\"click\", UI.addTask);\n    cancelTaskPopupButton.addEventListener(\"click\", UI.closeAddTaskPopup);\n    taskButtons.forEach((taskButton) =>\n      taskButton.addEventListener(\"click\", UI.handleTaskButton)\n    );\n  }\n\n  static openAddTaskPopup() {\n    const addTaskPopup = document.getElementById(\"add-task-popup\");\n    addTaskPopup.classList.add(\"active\");\n    this.classList.add(\"active\");\n  }\n\n  static closeAddTaskPopup() {\n    const addTaskPopup = document.getElementById(\"add-task-popup\");\n    addTaskPopup.classList.remove(\"active\");\n\n    const addTaskInput = document.getElementById(\"input-add-task-popup\");\n    addTaskInput.value = \"\";\n\n    const addTaskButton = document.getElementById(\"button-add-task\");\n    addTaskButton.classList.remove(\"active\");\n  }\n\n  static addTask() {\n    const addTaskPopupInput = document.getElementById(\"input-add-task-popup\");\n    const taskName = addTaskPopupInput.value;\n\n    const projectPreview = document.getElementById(\"project-preview\");\n    const projectName = projectPreview.children[0].textContent;\n\n    if (\n      taskName !== \"\" &&\n      !_Storage__WEBPACK_IMPORTED_MODULE_0__.default.getTodoList().getProject(projectName).contains(taskName)\n    ) {\n      UI.createTask(taskName, \"No date\");\n      _Storage__WEBPACK_IMPORTED_MODULE_0__.default.addTask(projectName, new _Task__WEBPACK_IMPORTED_MODULE_3__.default(taskName));\n    }\n    UI.closeAddTaskPopup();\n  }\n\n  // Tasks button handlers\n\n  static handleTaskButton(e) {\n    const project = document.getElementById(\"project-preview\");\n    const projectName = project.children[0].textContent;\n    const taskName = this.children[0].children[1].textContent;\n\n    if (e.target.classList.contains(\"fa-circle\")) {\n      UI.setTaskCompleted(projectName, taskName);\n    } else if (e.target.classList.contains(\"task-content\")) {\n      UI.renameTask(projectName, taskName);\n    } else if (e.target.classList.contains(\"due-date\")) {\n      UI.setTaskDate(projectName, taskName);\n    } else if (e.target.classList.contains(\"fa-times\")) {\n      UI.deleteTask(projectName, taskName);\n    }\n  }\n\n  static setTaskCompleted(projectName, taskName) {\n    console.log(\"setCompleted\");\n    _Storage__WEBPACK_IMPORTED_MODULE_0__.default.deleteTask(projectName, taskName);\n    UI.clear();\n    UI.renderProjects();\n    UI.renderTasks(projectName);\n  }\n\n  static renameTask(projectName, taskName) {\n    console.log(\"renameTask\");\n  }\n\n  static setTaskDate(projectName, taskName) {\n    console.log(\"setTaskDate\");\n  }\n\n  static deleteTask(projectName, taskName) {\n    console.log(\"deleteTask\");\n    _Storage__WEBPACK_IMPORTED_MODULE_0__.default.deleteTask(projectName, taskName);\n    UI.renderTasks(projectName);\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;