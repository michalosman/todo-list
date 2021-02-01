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

  addTask(task) {
    if (this.tasks.indexOf(task) > 0) return;
    this.tasks.push(task);
  }

  deleteTask(taskName) {
    const task = this.tasks.find((task) => task.name === taskName);
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  getTask(taskName) {
    return Object.assign(
      new Task(),
      this.tasks.find((task) => (task.name = taskName))
    );
  }

  getTasks() {
    return this.tasks;
  }

  contains(taskName) {
    return this.tasks.some((task) => task.name === taskName);
  }
}
