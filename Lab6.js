let password = document.getElementById("contraseña");
let password2 = document.getElementById("re_contraseña");
let mayus = document.getElementById("mayuscula");
let min = document.getElementById("minuscula");
let esp = document.getElementById("caracter_especial");
let num = document.getElementById("numero");
let len = document.getElementById("longitud");


function validar(){
    // Comparaciones
    if (pass.value.match(/[0-9]/)){
        num.style.color = "green";
    }else {
        num.style.color = "red";
    }
    if (pass.value.match(/[A-Z]/)){
        mayus.style.color = "green";
    }else {
        mayus.style.color = "red";
    }
    if (password.value.match(/[a-z]/)){
        min.style.color = "green";
    }else {
        min.style.color = "red";
    }
    if (password.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\:\;\'\"\<\>\?\/]/)){
        esp.style.color = "green";
    }else {
        esp.style.color = "red";
    }
    if (password.value.length >= 6){
        len.style.color = "green";
    }else {
        len.style.color = "red";
    }
}
function comparar(){

    if (password.value == password2.value && may.style.color == "green" && min.style.color == "green" && car.style.color == "green" && num.style.color == "green" && len.style.color == "green"){
        mayus.style.display = 'none';
        min.style.display = 'none';
        esp.style.display = 'none';
        num.style.display = 'none';
        len.style.display = 'none';
        alert("Las contraseñas son iguales!");
    }
    else {
        mayus.style.display = 'block';
        min.style.display = 'block';
        esp.style.display = 'block';
        num.style.display = 'block';
        len.style.display = 'block';
    }
}