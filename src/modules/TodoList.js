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

  setProjects(projects) {
    this.projects = projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  }

  contains(projectName) {
    return this.projects.some((project) => project.getName() === projectName);
  }

  addProject(project) {
    if (this.projects.indexOf(project) > 0) return;
    this.projects.push(project);
  }

  deleteProject(projectName) {
    const project = this.projects.find(
      (project) => project.getName() === projectName
    );
    this.projects.splice(this.projects.indexOf(project), 1);
  }

  updateTodayProject() {
    this.getProject("Today").tasks = [];

    this.projects.forEach((project) => {
      if (project.getName() === "Today" || project.getName() === "This week")
        return;

      const todayTasks = project.getTasksToday();
      todayTasks.forEach((task) => {
        const taskName = task.getName() + ` (${project.getName()})`;
        this.getProject("Today").addTask(new Task(taskName, task.getDate()));
      });
    });
  }
}
