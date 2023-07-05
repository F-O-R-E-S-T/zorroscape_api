const FileService = require("./file.service.js");

class AttackService extends FileService {
  constructor() {
    super();
  }
  setRight() {}
  setLeft() {}
}

module.exports = new AttackService();
