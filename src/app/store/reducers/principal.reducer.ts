import { createReducer, on, props } from '@ngrx/store';
import * as acciones from '../actions/principal.actions';
import { Firmante } from '../model/firmante.model';

// Estado inicial
export const initialState: Firmante[] = [
    {
    id: Date.now(),
    Nombre: "firmante.Nombre",
    ApellidoPaterno: "firmante.ApellidoPaterno",
    ApellidoMaterno: "firmante.ApellidoMaterno",
    Email: "firmante.Email",
    Celular: "firmante.Celular",
    CantidadDoctos: 0,
    TipoFirma: 1
},
{
    id: Date.now(),
    Nombre: "2",
    ApellidoPaterno: "2a",
    ApellidoMaterno: "2m",
    Email: "2mail",
    Celular: "5435353",
    CantidadDoctos: 0,
    TipoFirma: 1
},











];

// Reducer
export const principalReducer = createReducer(
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
