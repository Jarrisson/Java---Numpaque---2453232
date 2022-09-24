console.log(hola)
setTimeout(() => {
    console.log("INTERRUPCION POR TIMEOUT")
}, 2000);
setTimeout(function () {
    console.log("setTimeout con funcuin clasica ")
},1000);
function externa() {
    console.log("soy externa del settimeout")
}
setTimeout (externa,500)
console.log("mundo")
function saludos() {
    console.log("hola mundo")
}
setTimeout(saludos)
console.log("debo ejecutarme antes del settimeout")
function saludo(nombre,rol) {
    console.log("hola mi nombre es" +nombre);
    console.log("mi profesion es" +rol);
}
saludo("Jarrison", " Nigga")
setTimeout(saludo,3000,"jarrisson","Programador")




for (let i = 0; i < 20; i++) {
    console.log(i)
    setTimeout((i) => {
        for (let i = 0; i <5; i++) {
        }
    }, 3000);}

    function numeros(min,max) {
        Math.random() * (max - min) + min;    
    }
    