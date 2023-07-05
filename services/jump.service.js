const FileService = require("./file.service.js");

class JumpService extends FileService {
  constructor() {
    super();
  }
  setRight() {}
  setLeft() {}
}

module.exports = new JumpService();
