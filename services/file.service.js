const { castToBytes } = require("../utilities");
const { config } = require("../config");
const fs = require("fs");

class FileService {
  constructor() {
    this.filePath = `${process.cwd()}/${config.appStatusFilePath}`;
  }

  async getFiles() {
    try {
      const files = await fs.readdirSync(this.filePath);
      return files;
    } catch (error) {
      console.error("[ERROR - getFiles]:", error);
    }
  }

  async getFileInfo() {
    try {
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
    } catch (error) {
      console.error("[ERROR - getFileInfo]:", error);
    }
  }

  async getFileData() {
    try {
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
    } catch (error) {
      console.error("[ERROR - getFileData]:", error);
    }
  }

  async updateFile(fileName, rawData) {
    try {
      let data = JSON.stringify(rawData);
      fs.writeFileSync(`${this.filePath}/${fileName}`, data);
    } catch (error) {
      console.error("[ERROR - updateFile]:", error);
    }
  }

  deleteRef(fileName) {
    let deleted = true;
    fs.unlink(`${this.basePath}/${fileName}.${fileType}`, (error) => {
      if (error) {
        console.error("[ERROR - deleteRef]:", error);
        deleted = !deleted;
      }
    });

    return deleted;
  }
}

module.exports = FileService;
