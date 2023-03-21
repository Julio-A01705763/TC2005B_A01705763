//Prueba 1 ---------------------------------------------------------
const arreglo = [10, 9, 6, 9, 8, 10, 7, 10, 7, 9, 10, 9, 8, 6];
let suma=0;

for (let item of arreglo) {
    suma += item;
} 
let promedio=suma/arreglo.length;

const { response } = require('express');
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
let invVal = invertir(1234567);
function invertir(val){
    let invVal = 0;
    while(val > 0){
        invVal *= 10;
        invVal = invVal + (val % 10);
        val = Math.floor(val/10);
    }
    return invVal;
}
//------------------------------------------------------------------

//Imprimimnos en HTML ---------------------------------------------------------
const http = require('http');
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1> Laboratorio 8 </h1>");
    response.write("<h2> Prueba 1 </h2>");
    response.write("Promedio= "+ promedio);
    response.write("<h2> Prueba 2 </h2>");
    response.write("Se guardo correctamente en el archivo");
    response.write("<h2>Prueba 3</h2>");
    response.write("1234567 invertido es: "+ invVal)
    response.write("<h2> Imprimimos el Lab 1 </h2>");
    const fs = require('fs');
    const lab1 = fs.readFileSync('Lab1_A01705763.html');
    response.end(lab1);
    
});

server.listen(3000);
//------------------------------------------------------------------

