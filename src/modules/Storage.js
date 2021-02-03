import Project from "./Project";
import Task from "./Task";
import TodoList from "./TodoList";

export default class Storage {
  static saveTodoList(data) {
    localStorage.setItem("todoList", JSON.stringify(data));
  }

  static getTodoList() {
    // local storage doesn't store type of data so we have to convert it

    const todoList = Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem("todoList"))
    );

    todoList.projects = todoList.projects.map(
      (project) => (project = Object.assign(new Project(), project))
    );

    todoList.projects.forEach(
      (project) =>
        (project.tasks = project.tasks.map((task) =>
          Object.assign(new Task(), task)
        ))
    );

    return todoList;
  }

  static addProject(project) {
    const todoList = Storage.getTodoList();
    todoList.addProject(project);
    Storage.saveTodoList(todoList);
  }

  static deleteProject(projectName) {
    const todoList = Storage.getTodoList();
    todoList.deleteProject(projectName);
    Storage.saveTodoList(todoList);
  }

  static addTask(projectName, task) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).addTask(task);
    Storage.saveTodoList(todoList);
  }

  static deleteTask(projectName, taskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).deleteTask(taskName);
    Storage.saveTodoList(todoList);
  }

  static renameTask(projectName, taskName, newTaskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).setTaskName(taskName, newTaskName);
    Storage.saveTodoList(todoList);
  }

  static setTaskDate(projectName, taskName, newDueDate) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).setTaskDate(taskName, newDueDate);
    Storage.saveTodoList(todoList);
  }

  static updateTodayProject() {
    const todoList = Storage.getTodoList();
    todoList.updateTodayProject();
    Storage.saveTodoList(todoList);
  }
}
