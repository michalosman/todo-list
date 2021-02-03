import Task from "./Task";
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

  getTask(taskName) {
    return this.tasks.find((task) => task.name === taskName);
  }

  addTask(task) {
    if (this.tasks.indexOf(task) > 0) return;
    this.tasks.push(task);
  }

  deleteTask(taskName) {
    const task = this.tasks.find((task) => task.name === taskName);
    this.tasks.splice(this.tasks.indexOf(task), 1);
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
    const today = format(new Date(), "yyyy-MM-dd");
    return this.tasks.filter((task) => task.dueDate === today);
  }
}
