export interface Marca {
    Id: number,
    Nombre: string,
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