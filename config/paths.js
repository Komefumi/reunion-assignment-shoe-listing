const path = require("path");

const entryFilePath = path.join(__dirname, "..", "src/index.tsx");
const tsconfigFilePath = path.join(__dirname, "..", "tsconfig.json");
const distPath = path.join(__dirname, "..", "dist");

module.exports = {
  entryFilePath,
  tsconfigFilePath,
  distPath,
};
