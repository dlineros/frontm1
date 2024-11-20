import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/store/model/todo.model';


// Acciones para cargar, agregar y actualizar ToDos
export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: Todo }>()
);

export const toggleTodo = createAction(
  '[Todo] Toggle Todo',
  props<{ id: number }>()
);
