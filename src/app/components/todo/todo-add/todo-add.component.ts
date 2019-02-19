import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/models/mainState.model';
import { TodoActions } from '../../../actions/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<MainState>, private todoActions: TodoActions) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo() {
    if (this.txtInput.invalid) {
      return;
    }
    this.store.dispatch(this.todoActions.agregarTodo(this.txtInput.value));
    this.txtInput.setValue('');
  }

}
