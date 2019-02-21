import { TodoState } from '../models/todo.model';
import { Action } from '../models/redux.model';
import { todoActionsTypes } from '../actions/todo.actions';

const estadoInicial: TodoState = {
  todos: [],
  error: {}
};

export function todoReducer(state = estadoInicial, action: Action): TodoState {
  switch (action.type) {
    case todoActionsTypes.LOAD_TODOS_SUCCESSFUL:
      return {
        ...state,
        todos: action.payload
      };
    case todoActionsTypes.TODOS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case todoActionsTypes.ADD_TODO_SUCCESSFULL:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case todoActionsTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map( todoEdit => { // Recorremos todos los todos
                if (todoEdit.id === action.payload) {
                  // Debemos devolver un nuevo objeto de tipo TODO, del cual editaremos la propiedad completado y lo demás se quedará igual
                  return {
                    ...todoEdit,
                    completado: !todoEdit.completado
                  };
                } else {
                  return todoEdit;
                }
              })
      };
    // case todoActionsTypes.TOGGLE_ALL_TODOS:
    //   return state.map( todoEdit => {
    //     return {
    //       ...todoEdit,
    //       completado: action.payload
    //     };
    //   });
    case todoActionsTypes.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map( todoEdit => { // Recorremos todos los todos
          if (todoEdit.id === action.payload['id']) {
            return {
              ...todoEdit,
              texto: action.payload['texto']
            };
          } else {
            return todoEdit;
          }
        })
      };
    case todoActionsTypes.BORRAR_TODO:
      return {
        ...state,
        // Filter: recorre el array y crea uno nuevo excluyendo los elementos que no cumplan la condición.
        todos: state.todos.filter( todoEdit => todoEdit.id !== action.payload)
      };

    // case todoActionsTypes.BORRAR_TODOS_COMP:
    //   return state.filter( todoEdit => !todoEdit.completado );
    default:
      return state;
  }
}
