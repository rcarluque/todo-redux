import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/models/mainState.model';
import { ToggleAllTodosAction } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false;

  constructor(public store: Store<MainState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch(new ToggleAllTodosAction(this.completado));
  }

}
