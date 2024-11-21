import { createReducer, on } from '@ngrx/store';
import { loadFirmantesSuccess, addFirmante, toggleFirmante } from '../actions/principal.actions';
import { Firmante } from '../model/firmante.model';

// Estado inicial
export const initialState: Firmante[] = [];

// Reducer
export const todoReducer = createReducer(
  initialState,
  on(loadFirmantesSuccess, (state, { firmantes }) => [...firmantes]),
  on(addFirmante, (state, { firmante }) => [...state, firmante]),
  on(toggleFirmante, (state, { id }) =>
    state.map(firmante =>
      firmante.id === id ? { ...firmante } : firmante
    )
  )
);
