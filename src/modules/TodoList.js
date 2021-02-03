import Project from "./Project";

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
    return this.projects.find((project) => project.name === projectName);
  }

  contains(projectName) {
    return this.projects.some((project) => project.name === projectName);
  }
}
