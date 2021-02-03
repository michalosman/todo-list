import Task from "./Task";

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    if (this.tasks.indexOf(task) > 0) return;
    this.tasks.push(task);
  }

  deleteTask(taskName) {
    const task = this.tasks.find((task) => task.name === taskName);
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.name === taskName);
  }

  setTaskName(taskName, newTaskName) {
    this.tasks.find((task) => task.name === taskName).name = newTaskName;
  }

  setTaskDate(taskName, newDueDate) {
    this.tasks.find((task) => task.name === taskName).dueDate = newDueDate;
  }

  contains(taskName) {
    return this.tasks.some((task) => task.name === taskName);
  }

  getTasksToday() {
    const now = new Date();
    const today = `${now.getFullYear()}-${now.getDay()}-${now.getMonth() + 1}`;

    return this.tasks.filter((task) => task.dueDate === today);
  }

  //getTasksToday
  //getTasksThisWeek
}
