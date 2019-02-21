import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from 'src/app/models/mainState.model';
import { filtrosValidos, FilterActions } from '../../../actions/filter.actions';
import { TodoActions } from '../../../actions/todo.actions';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: filtrosValidos;
  tareasPendientes: number;

  constructor(private store: Store<MainState>, private todoActions: TodoActions, private filtrosActions: FilterActions) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos.todos);
    });
  }

  cambiarFiltro(filtro: filtrosValidos) {
    this.store.dispatch(this.filtrosActions.setFiltro(filtro));
  }

  contarPendientes(todos: Todo[]) {
    this.tareasPendientes = todos.filter( todo => !todo.completado).length;
  }

  eliminarCompletados() {
    this.store.dispatch(this.todoActions.borrarTodosComp());
  }

}
