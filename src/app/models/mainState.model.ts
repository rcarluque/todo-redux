import { TodoState } from './todo.model';
import { filtrosValidos } from '../actions/filter.actions';

export interface MainState {
  todos: TodoState;
  filtro: filtrosValidos;
}