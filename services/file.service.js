const { castToBytes } = require("../utilities");
const { config } = require("../config");
const fs = require("fs");

class FileService {
  constructor() {
    this.filePath = `${process.cwd()}/${config.appStatusFilePath}`;
  }

  async getFiles() {
    const files = await fs.readdirSync(this.filePath);
    return files;
  }

  async getFileInfo() {
    const files = await this.getFiles();
    const info = [];

    files.forEach((file) => {
      const data = fs.statSync(`${this.filePath}/${file}`);
      info.push({
        fileSize: castToBytes(data.size),
        fileName: file,
      });
    });

    return info;
  }

  async getFileData() {
    const files = await this.getFiles();
    const info = [];

    files.forEach((file) => {
      const rawData = fs.readFileSync(`${this.filePath}/${file}`);
      info.push({
        fileName: file,
        data: JSON.parse(rawData),
      });
    });

    return info;
  }

  async updateFile(fileName, rawData) {
    let data = JSON.stringify(rawData);
    fs.writeFileSync(fileName, data);
  }
}

module.exports = FileService;
