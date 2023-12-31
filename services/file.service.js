const { castToBytes } = require("../utilities");
const { config } = require("../config");
const fs = require("fs");

class FileService {
  constructor() {
    this.filePath = `${process.cwd()}/${config.appStatusFilePath}`;
  }

  async generateDirectory() {
    try {
      if (!fs.existsSync(this.filePath)) {
        fs.mkdirSync(this.filePath, { recursive: true });
      }
    } catch (error) {
      console.error("[ERROR - generateDirectory]:", error);
    }
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
      await fs.writeFileSync(`${this.filePath}/${fileName}`, data);
    } catch (error) {
      console.error("[ERROR - updateFile]:", error);
    }
  }

  async deleteRef(fileName) {
    let isDeleted;
    try {
      await fs.unlinkSync(`${this.basePath}/${fileName}`);
      isDeleted = true;
    } catch (error) {
      console.error("[ERROR - deleteRef]:", error);
      isDeleted = false;
    }
    return isDeleted;
  }
}

module.exports = FileService;
