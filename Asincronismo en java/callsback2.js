function pruebaCallback(Callback1,Callback2, name) {
    Callback1(name)
    setTimeout(() => {
       console.log("Dentro de pruebaCallback") 
    }, 2000);
    Callback2(name)
 }
 function saludo(nombre) {
    console.log(`hola ${nombre}`)
 }
 function cuentaletras(nombre) {
    console.log(nombre.length);
 }
pruebaCallback(cuentaletras,saludo,"Ana")
// pruebaCallback(saludo,"ana")

function desviacion(callback1, callback2, callback3) {
   callback1();
   console.log("PROMEDIO OBTENIDO");
   callback2();
   console.log("ACABADO SEGUNDO CALL");
   callback3()
}

function saludo1() {
   console.log("PRIMER")
}

function saludo2 () {
   console.log("SEGUNDO")
}

function saludo3() {
   console.log("TERCER")
}

desviacion(saludo2,saludo2,saludo1)