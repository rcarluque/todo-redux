import * as todoActions from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: todoActions.Acciones): Todo[] {
  switch (action.type) {
    case todoActions.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];
    case todoActions.TOGGLE_TODO:
      // La función map recorre todo el array y devuelve uno nuevo.
      return state.map( todoEdit => {
        if (todoEdit.id === action.id) {
          // Debemos devolver un nuevo objeto de tipo TODO, del cual editaremos la propiedad completado y lo demás se quedará igual
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });
    case todoActions.TOGGLE_ALL_TODOS:
      return state.map( todoEdit => {
        return {
          ...todoEdit,
          completado: action.completado
        };
      });
    case todoActions.EDIT_TODO:
      return state.map( todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          };
        } else {
          return todoEdit;
        }
      });
    case todoActions.BORRAR_TODO:
    // Con recorremos el array yfilter creamos uno nuevo excluyendo los elementos que no cumplan la condición
      return state.filter( todoEdit => todoEdit.id !== action.id);
    case todoActions.BORRAR_TODOS_COMP:
      return state.filter( todoEdit => !todoEdit.completado );
    default:
      return state;
  }
}