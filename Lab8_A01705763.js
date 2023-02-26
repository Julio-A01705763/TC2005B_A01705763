//Prueba 1 ---------------------------------------------------------
const arreglo = [10, 9, 6, 9, 8, 10, 7, 10, 7, 9, 10, 9, 8, 6];
let suma=0;

for (let item of arreglo) {
    suma += item;
} 
let promedio=suma/arreglo.length;

//------------------------------------------------------------------

//Prueba 2 ---------------------------------------------------------
const filesystem = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Identificate:', name => {
    filesystem.writeFileSync('Prueba2_Lab8.txt', 'Hi '+name);
    readline.close();
  });

//------------------------------------------------------------------

//Prueba 3 ---------------------------------------------------------

//------------------------------------------------------------------

//Imprimimnos en HTML ---------------------------------------------------------
const http = require('http');
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1> Laboratorio 8 </h1>");
    response.write("<h2> Prueba 1 </h2>");
    response.write("Promedio= "+ promedio);
    response.end();
});

server.listen(3000);
//------------------------------------------------------------------

