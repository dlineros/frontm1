import { Firmante } from './../model/firmante.model';
import { createAction, props } from '@ngrx/store';




// Acciones para cargar, agregar y actualizar ToDos
export const loadFirmantes = createAction(
    '[Firmante] Load Firmantes'

);

export const loadFirmantesSuccess = createAction(
  '[Firmantes] Carga firmantes exitosa',
  props<{ firmantes: Firmante[] }>()
);

export const addFirmante = createAction(
  '[Firmante] Agregar Firmante',
  props<{ firmante: Firmante }>()
);

export const editFirmante = createAction(
'[Firmante] Edita Firmante',
props<{firmante:Firmante}>()
)

export const deleteFirmante = createAction(
    '[Firmante] Elimina Firmante',
    props<{firmante:Firmante }>()
    )

