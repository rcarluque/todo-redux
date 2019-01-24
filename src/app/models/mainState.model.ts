import { Todo } from './todo.model';
import { filtrosValidos } from '../actions/filter.actions';

export interface MainState {
  todos: Todo[];
  filtro: filtrosValidos;
}