//o req é oque é passado geralmente podemos dizer que na url por exemplo/ methods

port = 4545
host = '127.0.0.1'
const http = require('http')
server = http.createServer((req, resp) => {
    //definir content type da pagina
    resp.setHeader("Content-Type", "text/plain; charset= utf-8")

    //resp.end(req.url)
    if (req.url == "/") {
        resp.end('Pagina Inical')
    }
    else if (req.url == "/new") {
        resp.end('Novas noticias')
    } else {
        resp.end('Pagina desconhecida')
    }
})
server.listen(port, host, () => {
    console.log('executando')
})
