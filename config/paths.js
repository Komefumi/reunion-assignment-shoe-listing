const path = require("path");

const entryFilePath = path.join(__dirname, "..", "src/index.tsx");
const tsconfigFilePath = path.join(__dirname, "..", "tsconfig.json");
const webpageTemplatePath = path.join(__dirname, "webpage-template.html");
const distPath = path.join(__dirname, "..", "dist");

module.exports = {
  entryFilePath,
  tsconfigFilePath,
  webpageTemplatePath,
  distPath,
};
