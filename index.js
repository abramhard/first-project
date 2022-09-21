
const http = require('http');
const server = http.createServer(() => {
    console.log('Пришёл запрос!');
});

server.listen(3000);


const { PORT = 3000 } = process.env;
const server = http.createServe((req, res) => {
    res.writeHead()

})
server.listen(PORT)