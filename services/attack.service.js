const FileService = require("./file.service");
const { config } = require("../config");

class AttackService extends FileService {
  constructor() {
    super();
    this.speed = config.attackSpeed;
    this.distance = config.attackDistance;
  }

  async setRight() {
    let current = await this.getFileData();

    const update = {
      ...current[0],
    };
    update.data.x = current[0].data.x + this.speed;
    update.data.attacking = current[0].data.attacking + this.distance;

    await this.updateFile(update.fileName, update.data);
    return update.data;
  }

  async setLeft() {
    let current = await this.getFileData();

    const update = {
      ...current[0],
    };
    update.data.x = current[0].data.x - this.speed;
    update.data.attacking = current[0].data.attacking - this.distance;

    await this.updateFile(update.fileName, update.data);
    return update.data;
  }
}

module.exports = new AttackService();
