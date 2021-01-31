export default class Storage {
  static saveData(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  static getData(name) {
    return JSON.parse(localStorage.getItem(name));
  }
}
