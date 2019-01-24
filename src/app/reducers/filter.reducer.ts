import { Action } from '../models/redux.model';
import { filtrosValidos, actions } from '../actions/filter.actions';

const estadoInicial: filtrosValidos = 'todos';

export function filtroReducer(
  state = estadoInicial,
  action: Action
): filtrosValidos {
  switch (action.type) {
    case actions.SET_FILTRO:
      return action.payload;
    default:
      return state;
  }
}


