import { Injectable } from '@angular/core';
import { Action } from '../models/redux.model';

export const actions = {
  SET_FILTRO: '[Filter] Set Filtro'
}

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

@Injectable({
  providedIn: 'root'
})
export class FilterActions {
  // Para devolver una acción, el método debe de retornar un objeto, con las propiedades type y payload
  setFiltro(filtro: filtrosValidos): Action {
    return {
      type: actions.SET_FILTRO,
      payload: filtro
    };
  }

}