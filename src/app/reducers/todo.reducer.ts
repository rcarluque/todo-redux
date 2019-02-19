import { Todo } from '../models/todo.model';
import { Action } from '../models/redux.model';
import { todoActionsTypes } from '../actions/todo.actions';

const estadoInicial: Todo[] = [];

export function todoReducer(state = estadoInicial, action: Action): Todo[] {
  switch (action.type) {
    case todoActionsTypes.INIT_TODOS:
      return action.payload;
    case todoActionsTypes.AGREGAR_TODO:
      const todo = new Todo(action.payload);
      return [...state, todo];
    case todoActionsTypes.TOGGLE_ALL_TODOS:
    // La función map recorre todo el array y devuelve uno nuevo.
    return state.map( todoEdit => {
      // Debemos devolver un nuevo objeto de tipo TODO, del cual editaremos la propiedad completado y lo demás se quedará igual
        return {
          ...todoEdit,
          completado: action.payload
        };
      });
    case todoActionsTypes.EDIT_TODO:
      return state.map( todoEdit => {
        if (todoEdit.id === action.payload['id']) {
          if (typeof(action.payload['textoOcompletado']) === 'string') {
            return {
              ...todoEdit,
              texto: action.payload['textoOcompletado']
            };
          } else {
            return {
              ...todoEdit,
              completado: action.payload['textoOcompletado']
            };
          }
        } else {
          return todoEdit;
        }
      });
    case todoActionsTypes.BORRAR_TODO:
    // Con recorremos el array yfilter creamos uno nuevo excluyendo los elementos que no cumplan la condición
      return state.filter( todoEdit => todoEdit.id !== action.payload);
    case todoActionsTypes.BORRAR_TODOS_COMP:
      return state.filter( todoEdit => !todoEdit.completado );
    default:
      return state;
  }
}