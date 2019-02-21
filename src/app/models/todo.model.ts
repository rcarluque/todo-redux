export class Todo {
  public id?: string;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    this.texto = texto.charAt(0).toLocaleUpperCase() + texto.slice(1);
    this.completado = false;
  }

}

export interface TodoState {
  todos: Todo[];
  error: {};
}


