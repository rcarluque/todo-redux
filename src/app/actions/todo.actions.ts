import { Injectable } from '@angular/core';
import { Action } from '../models/redux.model';
import { Todo } from '../models/todo.model';

export const todoActionsTypes = {
  LOAD_TODOS : '[TODO] Carga Todos',
  INIT_TODOS : '[TODO] Inicializar Todos',
  AGREGAR_TODO : '[TODO] Agregar todo',
  TOGGLE_TODO : '[TODO] Toggle todo',
  TOGGLE_ALL_TODOS : '[TODO] Toggle All todos',
  EDIT_TODO : '[TODO] Edit todo',
  BORRAR_TODO : '[TODO] Borrar todo',
  BORRAR_TODOS_COMP : '[TODO] Borrar todos completados'
};

@Injectable({
  providedIn: 'root'
})
export class TodoActions {

  loadTodos(): Action {
    return {
      type: todoActionsTypes.LOAD_TODOS
    };
  }

  initTodos(todo: Todo[]): Action {
    return {
      type: todoActionsTypes.INIT_TODOS,
      payload: todo
    };
  }

  agregarTodo(texto: string): Action {
    return {
      type: todoActionsTypes.AGREGAR_TODO,
      payload: texto
    };
  }

  toggleTodo(id: number): Action {
    return {
      type: todoActionsTypes.TOGGLE_TODO,
      payload: id
    };
  }

  toggleAllTodos(completado: boolean): Action {
    return {
      type: todoActionsTypes.TOGGLE_ALL_TODOS,
      payload: completado
    };
  }

  editarTodo(id: number, texto: string): Action {
    return {
      type: todoActionsTypes.EDIT_TODO,
      payload: {id , texto}
    };
  }

  borrarTodo(id: number): Action {
    return {
      type: todoActionsTypes.BORRAR_TODO,
      payload: id
    };
  }

  borrarTodosComp(): Action {
    return {
      type: todoActionsTypes.BORRAR_TODOS_COMP
    };
  }

}
