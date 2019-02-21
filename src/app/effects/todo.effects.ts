import { Injectable, Pipe } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { TodoService } from '../services/todo.service';
import { Action } from '../models/redux.model';
import { Todo } from '../models/todo.model';
import { todoActionsTypes, TodoActions } from '../actions/todo.actions';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';



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
          map( (todos: Todo[]) => this.todoActions.loadTodosSuccessful(todos))
        )
      ),
      catchError( error => of(this.todoActions.todosFail(error)))
    );

  @Effect()
  newTodo$ = this.actions$.pipe(
    ofType(todoActionsTypes.ADD_TODO),
    switchMap( (action: Action) => this.todoService.addTodo(action.payload)
      .pipe(
        map( (todo: Todo) => this.todoActions.addTodoSuccessful(todo) ),
        catchError( error => of(this.todoActions.todosFail(error)))
      )
    )
  );

  // Este efecto no dispara ninguna acción. (O Podríamos hacer que disparase una acción inventada)
  @Effect({ dispatch: false })
  deleteTodos$ = this.actions$
    .pipe(
      ofType(todoActionsTypes.BORRAR_TODO),
      map( (action: Action) => this.todoService.deleteTodo(action.payload) ),
      catchError( error => error )
    );

  @Effect({ dispatch: false })
  toggleTodo$ = this.actions$
    .pipe(
      ofType(todoActionsTypes.TOGGLE_TODO),
      map( (action: Action) => this.todoService.editarToggleTodo(action.payload, true)),
      catchError( error => error )
    );

  @Effect({ dispatch: false })
  editTextTodo$ = this.actions$
    .pipe(
      ofType(todoActionsTypes.EDIT_TODO),
      map( (action: Action) => {
        const id = action.payload['id'];
        const texto = action.payload['texto'];
        this.todoService.editarTextoTodo(id, texto);
      }),
      catchError( error => error )
    );

}
