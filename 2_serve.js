/* const server = require('http')
server.createServer((req, res) => {
    res.end('teste dois')
}).listen(4545) */

//forma mas estruturada

const http = require('http');
const host = '127.0.0.1'
const port = 4747

server = http.createServer((req, res) => {
    res.end('Nova estrutura')
})
server.listen(port, host, () => {
    console.log('Servidor em execução')
})