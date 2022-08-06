var vector = [];
for (let i = 0; i < 20; i++) {
    vector[i] = Math.round((Math.random()) * 100);
}
vs = 0
for (let i = 0; i < 20; i++) {
    vs = vs + vector[i]
}
console.log(vector, 'suma = ' + vs)
for (let i = 0; i < 20; i++) {
    vs = vs + vector[i]
    vprom = vs / 20
}
console.log('Promedio = ' + vprom)
    //////////////////////////////////////
vmax = 0;
for (let i = 0; i < 20; i++) {
    if (vector[i] > vmax) {
        vmax = vector[i]
    }
}
console.log('valor maximo = ' + vmax)
    ///////////////////////////////////////
for (let i = 0; i < vector.length; i++) {

    vmed = vector.lenght + 1
    med = vmed / 2
    pos = vector[med]
}
if (vmed % 2 == 0) {
    console.log(med, pos)
}
console.log('Media = ' + vmed) //no funciono -_-
    ///////////////////////////////////////////////////
suma = 0
cont = 0
for (let i = 0; i < vector.length; i++) {
    var par = vector[i] % 2;
    if (par == 0) {;
        suma += vector[i]
        cont = cont + 1

    }
}
console.log(`La suma de los pares es ${suma}`)
console.log('La cantidad de pares es', cont);
////////////////////////////////////////////////////////