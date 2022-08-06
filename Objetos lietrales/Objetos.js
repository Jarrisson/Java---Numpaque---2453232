let fraccion = {
    numerador1: 20,
    numerador2: 5,
    denominador1: 8,
    denominador2: 8,
};
console.log(fraccion)
    //suma de fracciones
if (fraccion.denominador1 == fraccion.denominador2) {
    suma = fraccion.numerador1 + fraccion.numerador2
    console.log(`suma total: ${suma}/${fraccion.denominador1}`)
} else {
    let pc1 = fraccion.numerador1 * fraccion.denominador2
    let pc2 = fraccion.denominador1 * fraccion.numerador2
    let pc3 = fraccion.denominador1 * fraccion.denominador2
    let total = pc1 += pc2
    console.log(`total-suma: ${total}/${pc3}`)
}
//resta
if (fraccion.denominador1 == fraccion.denominador2) {
    suma = fraccion.numerador1 - fraccion.numerador2
    console.log(`Resta total: ${suma}/${fraccion.denominador1}`)
} else {
    let pc1 = fraccion.numerador1 * fraccion.denominador2
    let pc2 = fraccion.denominador1 * fraccion.numerador2
    let pc3 = fraccion.denominador1 * fraccion.denominador2
    let total = pc1 -= pc2
    console.log(`total-resta: ${total}/${pc3}`)
}
// Multiplicacion
pc1 = fraccion.numerador1 * fraccion.numerador2
pc2 = fraccion.denominador1 * fraccion.denominador2
console.log(`total-multi: ${pc1}/${pc2}`)
    //Division