const http = require('http');

http.createServer(function (req, res) {
  res.write("Hello from Jenkins CI/CD Pipeline!");
  res.end();
}).listen(4000);

