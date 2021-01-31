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
    return this.projects.find((project) => project.name === projectName);
  }

  getProjects() {
    return this.projects;
  }

  //getTasksToday
  //getTasksThisWeek
}
