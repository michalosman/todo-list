import TodoList from "./TodoList";

export default class Storage {
  static saveTodoList(data) {
    localStorage.setItem("todoList", JSON.stringify(data));
  }

  static getTodoList() {
    return Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem("todoList"))
    );
  }

  static addProject(project) {
    let todoList = new TodoList();
    if (Storage.getTodoList() !== null)
      todoList = Object.assign(new TodoList(), Storage.getTodoList());
    todoList.addProject(project);
    Storage.saveTodoList(todoList);
  }

  static deleteProject(projectName) {
    const todoList = Object.assign(new TodoList(), Storage.getTodoList());
    todoList.deleteProject(projectName);
    Storage.saveTodoList(todoList);
  }

  static addTask(projectName, task) {
    const todoList = Object.assign(new TodoList(), Storage.getTodoList());
    todoList.getProject(projectName).addTask(task);
    Storage.saveTodoList(todoList);
  }

  static deleteTask(projectName, taskName) {
    const todoList = Object.assign(new TodoList(), Storage.getTodoList());
    todoList.getProject(projectName).deleteTask(taskName);
    Storage.saveTodoList(todoList);
  }
}
