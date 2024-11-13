export interface Cupon {
    Id: number,
    Nombre: string,
    Codigo: string,
    Tipo: string,
    Descuento: number,
    Descripcion: string,
    Estado: string,
    Caducidad: Date,
    Gasto_minimo: number,
    Limite_uso: number,
    Fecha_creacion: Date
}
