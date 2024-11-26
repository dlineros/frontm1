import { createReducer, on, props } from '@ngrx/store';
import * as acciones from '../actions/principal.actions';
import { Firmante } from '../model/firmante.model';

// Estado inicial
export const initialState: Firmante[] = [];

// Reducer
export const todoReducer = createReducer(
  initialState,
  on(acciones.loadFirmantesSuccess, (state, { firmantes }) => [...firmantes]),
  on(acciones.addFirmante, (state, { firmante }) => [...state, firmante]),

 // on(acciones.addFirmante, (state,props ) => [...state, props.firmante]),

  /* on(acciones.editFirmante, acciones.editFirmante, (state, id) =>
    state.map(firmante =>
      firmante.id === id ? { ...firmante } : firmante
    )
  )*/
);
