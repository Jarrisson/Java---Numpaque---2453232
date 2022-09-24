class Autos {
    constructor(numSeMo, marca, año, precio){
        this._numSeMo = numSeMo
        this._marca = marca
        this._año = año
        this._precio = precio
    }
}

class Autos_compactos extends Autos{
    constructor(numSeMo, marca, año, precio, pasajeros){
        super(numSeMo, marca, año, precio)
        this._pasajeros = pasajeros
    }
}

class Autos_lujo extends Autos{
    constructor(numSeMo, marca, año, precio, pasajeros){
        super(numSeMo, marca, año, precio)
        this._pasajeros = pasajeros
    }
}

class Camionetas extends Autos{
    constructor(numSeMo, marca, año, precio, capCarga, numEjes, rodada){
        super(numSeMo, marca, año, precio)
        this._capCarga = capCarga
        this._numEjes = numEjes
        this._rodada = rodada
    }
}

class Vagonetas extends Autos{
    constructor(numSeMo, marca, año, precio, pasajeros){
        super(numSeMo, marca, año, precio)
        this._pasajeros = pasajeros
    }
}

const Ac1 = new Autos_compactos ("12NJF", "chevorelt", 2017, 45000000, 4)
const Al1 = new Autos_lujo ("F2F4", "TOYOTA", 2002, 650000000, 2)
const Ca1 = new Camionetas ("AF68", "SUZUKI", 2010, 32000000, "650 klg", 2, "Doble")
const Va1 = new Vagonetas ("AV12F", "Chevrolet", 2019, 35000000, 15)

console.log(Ac1)
console.log(Al1)
console.log(Ca1)
console.log(Va1)
