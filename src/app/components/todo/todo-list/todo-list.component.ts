import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/models/mainState.model';
import { Todo } from '../../../models/todo.model';
import { filtrosValidos } from '../../../actions/filter.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  todos: Todo[] = [];
  filtro: filtrosValidos;

  constructor(private store: Store<MainState>) { }

  ngOnInit() {
    this.subscription = this.store.subscribe( state => {
      this.todos = state.todos.todos;
      this.filtro = state.filtro;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
