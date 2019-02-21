import { Injectable } from '@angular/core';
import { Action } from '../models/redux.model';
import { Todo } from '../models/todo.model';

export const todoActionsTypes = {
  LOAD_TODOS : '[TODO] Carga Todos',
  LOAD_TODOS_SUCCESSFUL : '[TODO] Todos Cargados correctamente',
  TODOS_FAIL : '[TODO] Fallo en la carga de todos',
  ADD_TODO : '[TODO] Agregar todo',
  ADD_TODO_SUCCESSFULL : '[TODO] Todo agregado correctamente',
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

  loadTodosSuccessful(todo: Todo[]): Action {
    return {
      type: todoActionsTypes.LOAD_TODOS_SUCCESSFUL,
      payload: todo
    };
  }

  todosFail(error): Action {
    return {
      type: todoActionsTypes.TODOS_FAIL,
      payload: error
    };
  }

  addTodo(texto: string): Action {
    return {
      type: todoActionsTypes.ADD_TODO,
      payload: texto
    };
  }

  addTodoSuccessful(todo: Todo): Action {
    return {
      type: todoActionsTypes.ADD_TODO_SUCCESSFULL,
      payload: todo
    };
  }

  toggleTodo(id: string): Action {
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

  editarTodo(id: string, texto: string): Action {
    return {
      type: todoActionsTypes.EDIT_TODO,
      payload: {id , texto}
    };
  }

  borrarTodo(id: string): Action {
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
