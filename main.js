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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", _modules_UI__WEBPACK_IMPORTED_MODULE_0__.default.loadWebsite());\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Storage\n/* harmony export */ });\nclass Storage {}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TodoList\n/* harmony export */ });\nclass TodoList {\n  constructor() {\n    this.projects = [];\n  }\n\n  addProject(project) {\n    if (this.projects.indexOf(project) > 0) return;\n    this.projects.push(project);\n  }\n\n  removeProject(projectName) {\n    const project = this.projects.find(\n      (project) => project.name === projectName\n    );\n    this.projects.splice(this.projects.indexOf(project), 1);\n  }\n\n  getProject(projectName) {\n    return this.projects.find((project) => project.name === projectName);\n  }\n\n  getProjects() {\n    return this.projects;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/TodoList.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ UI\n/* harmony export */ });\n/* harmony import */ var _TodoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList.js */ \"./src/modules/TodoList.js\");\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage.js */ \"./src/modules/Storage.js\");\n\n\n\nclass UI {\n  static loadWebsite() {\n    this.initDefaultButtons();\n    this.loadContent(); //from local storage\n  }\n\n  static initDefaultButtons() {\n    const inboxProjectsButton = document.getElementById(\"button-index\");\n    const todayProjectsButton = document.getElementById(\"button-today\");\n    const weekProjectsButton = document.getElementById(\"button-this-week\");\n    const addProjectButton = document.getElementById(\"button-add-project\");\n    const addProjectPopupButton = document.getElementBy(\n      \"button-add-project-confirm\"\n    );\n    const cancelProjectPopupButton = document.getElementBy(\n      \"button-add-project-cancel\"\n    );\n    const addTaskButton = document.getElementById(\"button-add-task\");\n    const addTaskPopupButton = document.getElementBy(\"button-add-task-confirm\");\n    const cancelTaskPopupButton = document.getElementBy(\n      \"button-add-task-cancel\"\n    );\n\n    inboxProjectsButton.addEventListener(\"click\", UI.openInboxProjects);\n    todayProjectsButton.addEventListener(\"click\", UI.openTodayProjects);\n    weekProjectsButton.addEventListener(\"click\", UI.openWeekProjects);\n    addProjectButton.addEventListener(\"click\", UI.openAddProjectPopup);\n    addProjectPopupButton.addEventListener(\"click\", UI.addProject);\n    cancelProjectPopupButton.addEventListener(\"click\", UI.closeAddProjectPopup);\n    addTaskButton.addEventListener(\"click\", UI.openAddTaskPopup);\n    addTaskPopupButton.addEventListener(\"click\", UI.addTask);\n    cancelTaskPopupButton.addEventListener(\"click\", UI.closeAddTaskPopup);\n  }\n\n  // Default project button handlers\n\n  static openInboxProjects() {\n    //for other random tasks which can't be assign as a project\n  }\n\n  static openTodayProjects() {\n    //get all today tasks\n  }\n\n  static openWeekProjects() {\n    //get all this week tasks\n  }\n\n  // Created projects button handlers\n\n  static openAddProjectPopup() {\n    //show popup\n    //cancel - hide popup\n    //add - create popup\n    //create element and addEventListener (handleProjectNutton)\n    //add to todolist\n    //add to UI\n    //save local\n    //hide popup\n  }\n\n  static closeAddProjectPopup() {}\n\n  static addProject() {}\n\n  static openAddTaskPopup() {\n    //show popup\n    //cancel - hide popup\n    //create element and addEventListener (handleTaskButton)\n    //add to todolist/project\n    //add to UI\n    //save local\n    //hide popup\n  }\n\n  static closeAddTaskPopup() {}\n\n  static addTask() {}\n\n  createProject(project) {\n    //creates an element in DOM\n  }\n\n  createTask(task) {\n    //creates an element in DOM\n  }\n\n  handleProjectButton() {\n    //name clicked -> openProject\n    //options clicked -> openProjectSettings\n  }\n\n  openProject() {\n    //update UI\n  }\n\n  openProjectSettings() {\n    //show popup\n    //rename clicked -> renameProject\n    //remove clicked -> removeProject\n    //hide popup\n  }\n\n  renameProject() {\n    //show popup (same size as setProject popup)\n    //cancel - hide popup\n    //update todo (setName)\n    //update UI (textContent)\n    //save local\n    //hide popup\n  }\n\n  removeProject() {\n    //remove from todolist\n    //remove from UI\n    //save local\n  }\n\n  handleTaskButton() {\n    //tick -> setTaskCompleted\n    //text -> renameTask\n    //date -> setTaskDate\n  }\n\n  setTaskCompleted() {\n    //set UI tick completed\n    //cross task out (setTimeout)\n    //removeTask\n  }\n\n  removeTask() {\n    //remove from todoist/project\n    //remove from UI\n    //save local\n  }\n\n  renameTask() {\n    //show popup\n    //cancel - hide popup\n    //update todolist/project (setName)\n    //update UI (textContent)\n    //save local\n    //hide popup\n  }\n\n  setTaskDate() {\n    //show popup\n    //cancel - hide popup\n    //update todoist/project (setDate)\n    //update UI (textContent)\n    //save local\n    //hide popup\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

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