export interface Pedido {
    Id: number,
    Cliente: string,
    Nombre: string,
    Apellidos: string,
    Cuenta_cliente: number,
    Pais: string,
    Direccion: string,
    Codigo_postal: number,
    Población: string,
    Provincia: string,
    Telefono: number,
    Email: string,
    Notas: Text,
    Metodo_pago: string,
    Estado: number,
    Subtotal: number,
    Total: string,
    Nombre_descuento: string,
    Tipo_descuento: string,
    Descuento: number,
    Fecha: Date,
    Productos: Pedidoitem[]
    
}

export interface Pedidoitem {
    Id: number,
    Id_pedido: number,
    Producto: number,
    Subtotal: number,
    Cantidad: number,
    Total: number
}
