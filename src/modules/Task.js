class Task {
  constructor(name) {
    this.name = name;
  }

  getAge() {
    return this.age;
  }
}

const task = new Task("xdddd");
console.log(task.name);
console.log(task.getAge());
