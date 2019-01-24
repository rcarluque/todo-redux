import { ActionReducerMap } from '@ngrx/store';
import { MainState } from '../models/mainState.model';
import { todoReducer } from './todo.reducer';
import { filtroReducer } from './filter.reducer';

export const reducers: ActionReducerMap<MainState> = {
  todos: todoReducer,
  filtro: filtroReducer
};
