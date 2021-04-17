const http = require('http');
const chalk = require('chalk');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(chalk.green('req.headers'), req.headers);
  console.log(chalk.green('req.url'), req.url)

  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>404 Pae Not Found</h1>\n')
})

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})