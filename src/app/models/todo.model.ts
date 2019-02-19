export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    this.texto = texto.charAt(0).toLocaleUpperCase() + texto.slice(1);
    this.completado = false;

    // simulamos un id de una bbdd
    this.id = Math.random();
  }

}

export interface TodoI {
  id: number;
  texto?: string;
  completado?: boolean;
}
