const http = require('http')
const fs = require('fs')
const porta = 3000
const server = http.createServer((req, res) => {
    fs.readFile('site.html',(error,arquivo)=>{
       res.writeHead(200, {'Content-Type':'text/html'}) 
        if (error) {
            res.write('Erro ao ler o arquivo')
            console.error(error)
        } else {
            res.write(arquivo)
        }
        return res.end()
    })
})

server.listen(porta || 3000, () => {console.log('Servidor rodando na porta 3000')})