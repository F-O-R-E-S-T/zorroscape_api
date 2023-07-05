const FileService = require("./file.service.js");

class IdleService extends FileService {
  constructor() {
    super();
  }
  getCurrent() {}
  win() {}
  start() {}
  die() {}
}

module.exports = new IdleService();
