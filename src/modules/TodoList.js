import Project from "./Project";
import Task from "./Task";

export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Inbox"));
    this.projects.push(new Project("Today"));
    this.projects.push(new Project("This week"));
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.name === projectName);
  }

  addProject(project) {
    if (this.projects.indexOf(project) > 0) return;
    this.projects.push(project);
  }

  deleteProject(projectName) {
    const project = this.projects.find(
      (project) => project.name === projectName
    );
    this.projects.splice(this.projects.indexOf(project), 1);
  }

  contains(projectName) {
    return this.projects.some((project) => project.name === projectName);
  }

  updateTodayProject() {
    this.getProject("Today").tasks = [];
    this.projects.forEach((project) => {
      if (project.name === "Today" || project.name === "This week") return;

      const todayTasks = project.getTasksToday();
      todayTasks.forEach((task) => {
        const taskName = task.name + ` (${project.name})`;
        if (this.getProject("Today").contains(taskName)) return;
        this.getProject("Today").addTask(new Task(taskName, task.dueDate));
      });
    });
  }
}
