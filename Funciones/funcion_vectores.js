//tarea crear funciones para el vector con operaciones basicas

vector = [0];
for (let i = 0; i < 20; i++) {
    vector[i] = Math.round((Math.random()) * 100)

}
//console.log(vector)

function sumavector(a, b) {
    for (let i = 0; i < a; i++) {
        vector[i] = Math.round((Math.random()) * b)
    }
    vs = 0;
    for (let i = 0; i < vector.length; i++) {
        vs = vs + vector[i]
    }
    console.log(vs)
}
sumavector(1, 10)