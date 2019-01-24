import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/models/mainState.model';
import { Todo } from '../../../models/todo.model';
import { filtrosValidos } from '../../../actions/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: filtrosValidos;

  constructor(private store: Store<MainState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }

}
