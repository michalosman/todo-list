import { format } from "date-fns";

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

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getName() === taskName);
  }

  contains(taskName) {
    return this.tasks.some((task) => task.getName() === taskName);
  }

  addTask(task) {
    if (this.tasks.indexOf(task) > 0) return;
    this.tasks.push(task);
  }

  deleteTask(taskName) {
    const task = this.tasks.find((task) => task.getName() === taskName);
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  getTasksToday() {
    const today = format(new Date(), "yyyy-MM-dd");
    return this.tasks.filter((task) => task.getDate() === today);
  }
}
