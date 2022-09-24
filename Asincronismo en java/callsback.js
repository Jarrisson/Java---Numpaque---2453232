 
 
 function pruebaCallback(Callback, name) {
    setTimeout(() => {
       console.log("Dentro de pruebaCallback") 
    }, 2000);
    Callback(name)
 }
 function saludo(nombre) {
    console.log(`hola ${nombre}`)
 }
pruebaCallback(saludo,"ana")