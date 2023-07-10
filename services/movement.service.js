const FileService = require("./file.service");
const { config } = require("../config");

class MovementService extends FileService {
  constructor() {
    super();
    this.speed = config.movementSpeed;
  }

  async setRight() {
    let current = await this.getFileData();

    const update = {
      ...current[0],
    };
    update.data.x = current[0].data.x + this.speed;

    await this.updateFile(update.fileName, update.data);
    return update.data;
  }

  async setLeft() {
    let current = await this.getFileData();

    const update = {
      ...current[0],
    };
    update.data.x = current[0].data.x - this.speed;

    await this.updateFile(update.fileName, update.data);
    return update.data;
  }

  async setDown() {
    let current = await this.getFileData();

    const update = {
      ...current[0],
    };
    update.data.y = current[0].data.y - this.speed;

    await this.updateFile(update.fileName, update.data);
    return update.data;
  }

  async setUp() {
    let current = await this.getFileData();

    const update = {
      ...current[0],
    };
    update.data.y = current[0].data.y + this.speed;

    await this.updateFile(update.fileName, update.data);
    return update.data;
  }
}

module.exports = new MovementService();
