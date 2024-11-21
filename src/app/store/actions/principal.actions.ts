import { Firmante } from './../model/firmante.model';
import { createAction, props } from '@ngrx/store';



// Acciones para cargar, agregar y actualizar ToDos
export const loadFirmantes = createAction('[Firmante] Load Firmantes');
export const loadFirmantesSuccess = createAction(
  '[Firmante] Load Todos Success',
  props<{ firmantes: Firmante[] }>()
);

export const addFirmante = createAction(
  '[Todo] Add Todo',
  props<{ firmante: Firmante }>()
);

export const toggleFirmante = createAction(
  '[Todo] Toggle Todo',
  props<{ id: number }>()
);



