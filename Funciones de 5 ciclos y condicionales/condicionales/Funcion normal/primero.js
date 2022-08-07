//Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.
//manera:
//Si trabaja 40 horas o menos se le paga $2.600 por hora
//Si trabaja más de 40 horas se le paga $2.600 por cada una de las primeras 40
//horas y $5.000 por cada hora 

function salario(t) {
    if (t <= 40) {
        salario = 2600 * t
        console.log(salario)
    }
    if (t > 40) {
        let h = t - 40
        extras = h * 5000
        salario = (2600 * 40) + extras
        console.log(`Horas extras: ${h}, Total de horas extras:  ${extras},Total de su salario semana: ${salario}`)
    }
}
salario(50)