import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { TodoService } from '../services/todo.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Todo } from '../models/todo.model';
import { todoActionsTypes, TodoActions } from '../actions/todo.actions';
import { Action } from '../models/redux.model';

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private todoActions: TodoActions
  ) {}

  @Effect()
  initTodos$ = this.actions$
    .pipe(
      ofType(todoActionsTypes.LOAD_TODOS),
      mergeMap(() => this.todoService.getTodos()
        .pipe(
          map( (todos: Todo[]) => this.todoActions.initTodos(todos),
          catchError( error => error )
        ))
      )
    );

  // Este efecto no dispara ninguna acción. (O Podríamos hacer que disparase una acción inventada)
  @Effect({ dispatch: false })
  deleteTodos$ = this.actions$
    .pipe(
      ofType(todoActionsTypes.BORRAR_TODO),
      map( (action: Action) => this.todoService.deleteTodo(action.payload) ),
      catchError( error => {
        console.error(error);
        return error;
      } )
    );

}
