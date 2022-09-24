class publicacion{
    constructor(titulo, precio){
        this._titulo= titulo;
        this._precio=precio
    }
    set titulo(titulo){
        this._titulo =titulo;
    }
    
    set precio(precio){
        this._precio = precio;
    }
    get titulo(){
         return this._titulo; 
    }
    
    get precio(){
         return this._precio; 
    }
    //metodo
    info(){`${this._titulo} ${this._precio}`}
    }

//clase hija libro

class libro extends publicacion{
    constructor(titulo, precio,numeroP){
        super(titulo, precio);
        this._numeroP = numeroP
    }
    set numeroP(numeroP){
        this._numeroP = numeroP;
    }
    get numeroP(){
        return this._numeroP; 
   } 
   info(){
    return (`${this._titulo} ${this._precio}${this._numeroP} `)
}
}
class disc extends publicacion{
    constructor(titulo, precio,tiempo){
        super(titulo, precio);
        this._tiempo = tiempo
    }
    set tiempo(tiempo){
        this._tiempo = tiempo;
    }

    get tiempo(){
        return this._tiempo;
   }
   info(){
    return(`${this._titulo} ${this._precio} ${this._tiempo} `)
}
}
var libro1 = new publicacion("Las aventuras de tilin",10000,150)
var disco1 = new publicacion("How Kanye save my life",250000, 4.5,)
console.log(libro1.info());
console.log(disco1.titulo)

//no guarda el atributo numerop, tiempo...


