export interface Mensajescontacto {
    Id: number,
    Nombre: string,
    Apellidos: string,
    Email: string,
    Asunto: string,
    Mensaje: string,
    Fecha: Date
}

// Se ponen los nombres en mayúsculas ya que se han escrito así en MessagesResource en Laravel para que los escriba correctamente en el header de la tabla directamente
// sin necesidad de hacer nada en Angular.