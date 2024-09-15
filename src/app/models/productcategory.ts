import { Image } from "./image"

export interface Productcategory {
    Id: number,
    Nombre: string,
    Slug: string,
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
