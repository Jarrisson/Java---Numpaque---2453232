var coleccion = [
    { nombre: "Cien años de soledad", autor: "Gabriel Garcia Marquez", obras: ['la hojarasca', 'el coronel', 'el amor en los tiempos', 'el otoño'] },
    { nombre: "Pedro paramo", autor: "Jua Rulfo", obras: [] },
    { nombre: "Sierro sin tierra", autor: "Eduardo cabalero calderon", obras: [] },
]


coleccion.forEach(function(autor) {
    console.log(autor);
})

coleccion.forEach(function(autor) {
    for (const key in autor) {
        console.log(autor[key]);
    }
})