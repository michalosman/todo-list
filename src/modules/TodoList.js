import Project from "./Project";

export default class TodoList {
  constructor() {
    this.projects = [];
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

  getProject(projectName) {
    return Object.assign(
      new Project(),
      this.projects.find((project) => project.name === projectName)
    );
  }

  getProjects() {
    return this.projects;
  }

  contains(projectName) {
    return this.projects.some((project) => project.name === projectName);
  }

  //getTasksToday
  //getTasksThisWeek
}
