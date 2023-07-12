const FileService = require("./file.service");

class IdleService extends FileService {
  constructor() {
    super();
    this.template = {
      x: 0,
      y: 0,
      attacking: 0,
      jumping: false,
    };
  }

  async getCurrent() {
    const gameStatus = await this.getFileData();
    return gameStatus[0].data;
  }

  win() {
    /**
     TO DO

    Ask for win conditions
    */
  }

  async start() {
    await this.generateDirectory()
    await this.updateFile("gameStatus.json", this.template);
  }

  async die() {
    let gameFile = await this.getFileData();
    const isDeath = await this.deleteRef(gameFile[0].fileName);
    return isDeath;
  }
}

module.exports = new IdleService();
