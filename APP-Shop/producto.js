class Producto {
    constructor(sku, nombre, precio, decripcion, proveedor, cantidad) {
        this._sku = sku;
        this._nombre = nombre;
        this._precio = precio;
        this._decripcion = decripcion;
        this._proveedor = proveedor;
        this._cantidad = cantidad;
    };

    get sku() { return this._sku }
    get nombre() { return this._nombre }
    get precio() { return this._precio }
    get decripcion() { return this._decripcion }
    get proveedor() { return this._proveedor }
    get cantidad() { return this._cantidad }

    set nombre(nombre) { this._nombre = nombre }
    set precio(precio) { this._precio = precio }
    set decripcion(decripcion) { this._decripcion = decripcion }
    set proveedor(proveedor) { this._proveedor = proveedor }
    set cantidad(cantidad) { this._cantidad = cantidad }

    publicar() { return (`${this._sku}${this._nombre}${this._precio}${this._decripcion}${this._proveedor}${this._cantidad}`) }
        //insertar_inventario(producto) {
        // this._producto.push(inventario1)
        // }
}
var gafa1 = new Producto(15478, " Gafa prada ", 100000, " Gafa en material de metal con variedad de lentes, ", " PRADA ", 25)
console.log(gafa1.publicar())
module.exports = Producto;