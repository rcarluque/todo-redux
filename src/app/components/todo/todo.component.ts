import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/models/mainState.model';
import { TodoActions } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./loading.css']
})
export class TodoComponent implements OnInit {

  completado = false;
  load: boolean;

  constructor(public store: Store<MainState>, private todoActions: TodoActions) { }

  ngOnInit() {
    this.load = true;
    this.store.dispatch(this.todoActions.loadTodos());
    this.load = false;
  }

  toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch(this.todoActions.toggleAllTodos(this.completado));
  }

}
