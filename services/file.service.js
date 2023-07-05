const castToBytes = require("../utilities")
const { config } = require("../config");
const fs = require("fs");

class FileService {
  constructor() {
    this.filePath = `${process.cwd()}/${config.appStatusFilePath}`;
  }

  async getFiles() {
    const files = await fs.readdirSync(this.appStatusFilePath);
    return files;
  }

  async getFileInfo() {
    const files = await this.getFiles();
    const info = [];

    files.forEach((file) => {
      const data = fs.statSync(`${this.filePath}/${file}`);
      info.push({
        size: castToBytes(data.size),
        name: file,
      });
    });

    return info;
  }
}

module.exports = FileService;
