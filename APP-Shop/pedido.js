const Producto = require('./producto.js')
class Pedido extends Producto {
    constructor(sku, nombre, proveedor, cantidad, precioCompra, recibo) {
        super(sku, nombre, proveedor, cantidad)
        this._precioCompra = precioCompra
        this._recibo = recibo
    }
    get precioCompra() {
        return this._precioCompra;
    }
    set precioCompra(precioCompra) {
        this._precioCompra = precioCompra;
    }
    get recibo() {
        return this._recibo;
    }
    set recibo(recibo) {
        this._recibo = recibo;
    }
    hacerPedido() { console.log(`${this._precioCompra} ${this._recibo}`) }
}
//var pedido1 = new Pedido("Prada S.A.S", 65483, "Gafas prada", 20, 600000, "factura numero: N01");
//var pedido2 = new Pedido("Estuches Ltda ", 795214, " Estuche negro ", 15, 25000, "factura numero: N02");
// push pedido a inventario
//console.log(pedido1.hacerPedido())
console.log(pedido2.hacerPedido())

module.exports = Pedido;