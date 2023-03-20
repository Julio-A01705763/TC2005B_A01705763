//http es el módulo que permite crear un servidor que pueda atender peticiones http
const http = require('http');

const server = http.createServer( (request, response) => {    

    console.log(request.url);

    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>League of Legends</h1>");
        response.write('<a href="/Macro">Macro Estrategia</a>');
        response.write('<a href="/nombre">Ingresar Nombre</a>');
        response.end();
    } else if (request.url === "/nombre" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write("<h1>Nombre de Invocador</h1>");
        let html = `
        <form action="nombre" method="POST">
        <label for="jugador">Nombre de Invocador:</label>
        <input type="text" id="jugador" name="jugador">
        <input type="submit" value="Enviar">
        </form>
        `;
        response.write(html);
        response.write('</body></html>');
        response.end();
        

    } else if (request.url === "/nombre" && request.method === "POST") {

        const filesystem = require('fs');
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Bienvenido Invocador</h1><br>");
        response.end();

        
    } else {
        response.statusCode = 404;
        response.write("ERROR 404 La pagina no existe");
        response.end();
    }

    
    
});

server.listen(3000);