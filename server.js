const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DIR = __dirname;

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  let cleanUrl = urlPath.replace(/^\/+|\/+$/g, '');
  if (!cleanUrl) cleanUrl = 'index.html';
  if (!path.extname(cleanUrl) && fs.existsSync(path.join(DIR, cleanUrl + '.html'))) {
    cleanUrl += '.html';
  }
  let filePath = path.join(DIR, cleanUrl);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIR, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.vcf': 'text/vcard; charset=utf-8'
  };

  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Digital Business Card server running at http://localhost:${PORT}/`);
});
