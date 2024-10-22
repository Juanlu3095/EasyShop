export interface Product {
    Id: number,
    Nombre: string,
    Descripcion: string,
    Descripcion_corta: string,
    Categoria_id: number,
    Categoria: string,
    Marca_id: number,
    Marca: string,
    Estado_producto: string,
    Precio_euros: number,
    Precio_rebajado_euros: number,
    SKU: string,
    ISBN_EAN: string,
    Inventario: number,
    Ultima_modificacion: Date,
    Imagen: Imagen[]
}

interface Imagen {
    'Id': number,
    'Nombre_imagen': string,
    'Alt': string,
    'Descripcion': string,
    'Leyenda': string,
    'Ruta_archivo': string
}
