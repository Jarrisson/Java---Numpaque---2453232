class usuario{
    constructor(id,nombre,edad)
    {
        this._id= id;
        this._nombre=nombre;
        this._edad=edad
    }
}
class estudiante extends usuario{
    constructor(id,nombre,edad, ficha,programa){
        super(id,nombre,edad)
        this._ficha=ficha;
        this._programa=programa;
    }
}


var e1 =new estudiante(123,"pepe",18,235323,"ADSI")
var e2 =new estudiante(123,"tilin",18,235323,"ADSI")
class moto{
    constructor(placa,estudiante){
        this._placa=placa
        this._estudiante=estudiante
    }
}
var m1= new moto ("ECM",e1)
console.log(m1)

class grupo {
    constructor(codGrupo,estudiantes){
        this._codGrupo=codGrupo
        this._estudiante=estudiante
    }
    incorporarEstudiantes(estudiante){
        this._estudiante.push(estudiante)
    }
}
var g1=[];
var grupo1 =new grupo(909,g1)
console.log(grupo1)
grupo1.incorporarEstudiantes(e1)
grupo1.incorporarEstudiantes(e2)
console.log(grupo1)