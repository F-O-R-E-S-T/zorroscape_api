const FileService = require("./file.service");

class MovementService extends FileService {
  constructor() {
    super();
  }
  setRight() {}
  setLeft() {}
  setDown() {}
  setUp() {}
}

module.exports = new MovementService();
