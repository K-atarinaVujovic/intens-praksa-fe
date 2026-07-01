const http = require("http")
const fs = require("fs")
const path = require("path")

const API_HOST = process.env.API_HOST || "localhost:8000"

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    let html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8")
    html = html.replace("__API_HOST__", API_HOST)
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(html)
    return
  }
  res.writeHead(404)
  res.end()
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Serving on ${PORT}`))