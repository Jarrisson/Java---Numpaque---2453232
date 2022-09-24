//Porque cambia con let y var
for (let i = 0; i <10; i++) {
setTimeout(()=>{
    console.log(i)
},(1000*i))
}
setInterval(() => {
   console.log("Amo el SENA") 
}, 1000);

//Repetir con el intervalo de 2 segundos
let=timerId=setInterval(() => {
    console.log("tick")
}, 2000);
//Despues de 5 segundos parar
setInterval(() => {
    clearInterval(timerId)
    console.log("Fin")
}, 5000);