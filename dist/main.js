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

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Storage\n/* harmony export */ });\nclass Storage {\n  static loadData() {}\n  static addProject() {}\n  static deleteProject() {}\n  static addTask() {}\n  static deleteTask() {}\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ UI\n/* harmony export */ });\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ \"./src/modules/Storage.js\");\n\n\nclass UI {\n  static load() {\n    UI.renderContent();\n    UI.initRenderedButtons();\n    UI.initDefaultButtons();\n    UI.openInboxProjects();\n  }\n\n  static renderContent() {}\n\n  static initRenderedButtons() {\n    const projectButtons = document.querySelectorAll(\"[data-project-button]\");\n    projectButtons.forEach((projectButton) =>\n      projectButton.addEventListener(\"click\", UI.handleProjectButton)\n    );\n  }\n\n  static initDefaultButtons() {\n    const inboxProjectsButton = document.getElementById(\n      \"button-inbox-projects\"\n    );\n    const todayProjectsButton = document.getElementById(\n      \"button-today-projects\"\n    );\n    const weekProjectsButton = document.getElementById(\"button-week-projects\");\n    const addProjectButton = document.getElementById(\"button-add-project\");\n    const addProjectPopupButton = document.getElementById(\n      \"button-add-project-popup\"\n    );\n    const cancelProjectPopupButton = document.getElementById(\n      \"button-cancel-project-popup\"\n    );\n    const addTaskButton = document.getElementById(\"button-add-task\");\n    const addTaskPopupButton = document.getElementById(\"button-add-task-popup\");\n    const cancelTaskPopupButton = document.getElementById(\n      \"button-cancel-task-popup\"\n    );\n\n    inboxProjectsButton.addEventListener(\"click\", UI.openInboxProjects);\n    todayProjectsButton.addEventListener(\"click\", UI.openTodayProjects);\n    weekProjectsButton.addEventListener(\"click\", UI.openWeekProjects);\n    addProjectButton.addEventListener(\"click\", UI.openAddProjectPopup);\n    addProjectPopupButton.addEventListener(\"click\", UI.addProject);\n    cancelProjectPopupButton.addEventListener(\"click\", UI.closeAddProjectPopup);\n    addTaskButton.addEventListener(\"click\", UI.openAddTaskPopup);\n    addTaskPopupButton.addEventListener(\"click\", UI.addTask);\n    cancelTaskPopupButton.addEventListener(\"click\", UI.closeAddTaskPopup);\n  }\n\n  // Default project button handlers\n\n  static openInboxProjects() {\n    //setup event listeners\n  }\n\n  static openTodayProjects() {}\n\n  static openWeekProjects() {}\n\n  // Add project button handlers\n\n  static openAddProjectPopup() {\n    const projectPopup = document.getElementById(\"add-project-popup\");\n    projectPopup.classList.add(\"active\");\n    this.classList.add(\"active\");\n  }\n\n  static closeAddProjectPopup() {\n    const projectPopup = document.getElementById(\"add-project-popup\");\n    projectPopup.classList.remove(\"active\");\n\n    const projectInput = document.getElementById(\"input-add-project-popup\");\n    projectInput.value = \"\";\n\n    const addProjectButton = document.getElementById(\"button-add-project\");\n    addProjectButton.classList.remove(\"active\");\n  }\n\n  static addProject() {\n    const projectInput = document.getElementById(\"input-add-project-popup\");\n    if (projectInput.value !== \"\") UI.createProject(projectInput.value);\n    UI.closeAddProjectPopup();\n  }\n\n  static createProject(name) {\n    const userProjects = document.getElementById(\"user-projects\");\n    userProjects.innerHTML += ` \n      <button class=\"button-project\" data-project-button>\n        <div class=\"left-project-panel\">\n          <i class=\"fas fa-tasks\"></i>\n          <span>${name}</span>\n        </div>\n        <div class=\"right-project-panel\">\n          <i class=\"fas fa-times\"></i>\n        </div>\n      </button>`;\n    UI.initRenderedButtons();\n  }\n\n  // Add task button handlers\n\n  static openAddTaskPopup() {\n    const addTaskPopup = document.getElementById(\"add-task-popup\");\n    addTaskPopup.classList.add(\"active\");\n    this.classList.add(\"active\");\n  }\n\n  static closeAddTaskPopup() {\n    const addTaskPopup = document.getElementById(\"add-task-popup\");\n    addTaskPopup.classList.remove(\"active\");\n\n    const addTaskInput = document.getElementById(\"input-add-task-popup\");\n    addTaskInput.value = \"\";\n\n    const addTaskButton = document.getElementById(\"button-add-task\");\n    addTaskButton.classList.remove(\"active\");\n  }\n\n  static addTask() {\n    const addTaskPopupInput = document.getElementById(\"input-add-task-popup\");\n    if (addTaskPopupInput.value !== \"\")\n      UI.createTask(addTaskPopupInput.value, \"No date\");\n    UI.closeAddTaskPopup();\n  }\n\n  static createTask(name, dueDate) {\n    const tasksList = document.getElementById(\"tasks-list\");\n    tasksList.innerHTML += `\n      <button class=\"button-task\">\n        <div class=\"left-task-panel\">\n          <i class=\"far fa-circle\"></i>\n          <p class=\"task-content\">${name}</p>\n        </div>\n        <div class=\"right-task-panel\">\n          <div class=\"due-date\">${dueDate}</div>\n          <i class=\"fas fa-times\"></i>\n        </div>\n      </button>`;\n  }\n\n  // Project button handlers\n\n  static handleProjectButton(e) {\n    const projectName = this.children[0].children[1].textContent;\n    console.log(projectName);\n    if (e.target.classList.contains(\"fas\")) {\n      UI.deleteProject(projectName);\n      return;\n    }\n    UI.openProject(projectName);\n  }\n\n  static openProject(project) {\n    //open project from memory by name\n  }\n\n  static deleteProject(project) {\n    //delete from memory\n    //render project from memory\n    //open inbox project\n  }\n\n  // Tasks button handlers\n\n  static handleTaskButton() {}\n\n  static setTaskCompleted() {}\n\n  static deleteTask() {}\n\n  static renameTask() {}\n\n  static setTaskDate() {}\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

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