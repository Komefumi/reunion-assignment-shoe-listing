const liveServer = require("live-server");
const { distPath } = require("./paths");

const params = {
  port: 8181, // Set the server port. Defaults to 8080.
  host: "localhost",
  root: distPath,
  watch: distPath,
  open: false,
  file: "index.html",
  wait: 50,
  logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
};

liveServer.start(params);
