function impresora() {
    console.log("Soy una impresora, que desea imprimir?");
}
impresora();


//tarea
function cuadratica(a, b, c) {
    rp = (b * -1 + Math.sqrt(Math.pow(b, 2)) - 4 * a * c)
    rn = (b * -1 - Math.sqrt(Math.pow(b, 2)) - 4 * a * c)
    console.log(rp)
    console.log(rn)
}
cuadratica(15, 12, 8)