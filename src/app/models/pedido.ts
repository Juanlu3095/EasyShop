export interface Pedido {
    Id: number,
    Cliente: string,
    Nombre: string,
    Apellidos: string,
    Cuenta_cliente: number,
    Pais: string,
    Direccion: string,
    Codigo_postal: number,
    Poblacion: string,
    Provincia: string,
    Telefono: number,
    Email: string,
    Notas: string,
    Metodo_pago: string,
    Estado: string,
    Estado_id: number,
    Subtotal: number,
    Total: string,
    Nombre_descuento: string,
    Tipo_descuento: string,
    Descuento: number | null,
    Metodoenvio_id: number,
    Gastos_envio: number,
    Fecha: Date,
    Productos: Pedidoitem[]
    
}

export interface Pedidoitem {
    Id: number,
    Id_pedido: number,
    Producto: string,
    Producto_id: number,
    Subtotal: number,
    Cantidad: number,
    Total: number
}
