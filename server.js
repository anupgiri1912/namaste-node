const http = require("node:http");
const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("there is secret data");
  }
  res.end("Hi I am Anup");
});
server.listen(7777);
