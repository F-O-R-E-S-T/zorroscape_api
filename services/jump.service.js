const FileService = require("./file.service");
const { config } = require("../config");

class JumpService extends FileService {
  constructor() {
    super();
    this.high = config.jumpingHigh;
    this.speed = config.jumpingSpeed;
  }

  async setRight() {
    let current = await this.getFileData();

    const update = {
      ...current[0],
    };
    update.data.y = current[0].data.y + this.high;
    update.data.x = current[0].data.x + this.speed;
    update.data.jumping = !current[0].data.jumping;

    await this.updateFile(update.fileName, update.data);
    return update.data;
  }

  async setLeft() {
    let current = await this.getFileData();

    const update = {
      ...current[0],
    };
    update.data.y = current[0].data.y + this.high;
    update.data.x = current[0].data.x - this.speed;
    update.data.jumping = !current[0].data.jumping;

    await this.updateFile(update.fileName, update.data);
    return update.data;
  }
}

module.exports = new JumpService();
