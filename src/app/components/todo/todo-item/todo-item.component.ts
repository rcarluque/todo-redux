import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/models/mainState.model';
import { Todo } from '../../../models/todo.model';
import { TodoActions } from '../../../actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  // Recogemos un elemento # del html.
  @ViewChild('inputEditar') inputEditar: ElementRef;

  @Input() todo: Todo;
  checkField: FormControl;
  txtInput: FormControl;
  editando: Boolean;

  constructor(private store: Store<MainState>, private todoActions: TodoActions) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
// llamar aqui al subcribe del servicio
    this.checkField.valueChanges.subscribe( () => /*this.store.dispatch(this.todoActions.toggleTodo(this.todo.id)) */ console.log(this.todo.completado)  );
  }

  editar() {
    this.editando = true;
    // Relentizamos el select puesto que a veces lo hace demasiado rápido
    // Y no hay tiempo a que se active el elemento.
    setTimeout( () => this.inputEditar.nativeElement.select(), 1 );
  }

  terminarEdicion() {
    this.editando = false;

    if ( this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.texto) {
      return;
    }

    this.store.dispatch(this.todoActions.editarTodo(this.todo.id, this.txtInput.value));
  }

  eliminarTodo() {
    this.store.dispatch(this.todoActions.borrarTodo(this.todo.id));
  }

}
