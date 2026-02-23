const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3000);
const publicDir = path.join(__dirname, 'public');

const mimeMap = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf'
};

function resolveRequestedPath(urlPath) {
  const cleanPath = decodeURIComponent((urlPath || '/').split('?')[0]);
  const relativePath = cleanPath === '/' ? 'index.html' : cleanPath.replace(/^\/+/, '');
  return path.resolve(publicDir, relativePath);
}

function serveFile(filePath, res) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not found');
        return;
      }
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Internal server error');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const cacheControl = ['.html', '.css', '.js'].includes(ext)
      ? 'no-store, no-cache, must-revalidate'
      : 'public, max-age=86400';
    res.writeHead(200, {
      'Content-Type': mimeMap[ext] || 'application/octet-stream',
      'Cache-Control': cacheControl
    });
    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  const filePath = resolveRequestedPath(req.url || '/');

  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      serveFile(path.join(filePath, 'index.html'), res);
      return;
    }

    serveFile(filePath, res);
  });
});

server.listen(PORT, () => {
  console.log(`Portfolio site running at http://localhost:${PORT}`);
});
