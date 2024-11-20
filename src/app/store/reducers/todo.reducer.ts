import { createReducer, on } from '@ngrx/store';
import { loadTodosSuccess, addTodo, toggleTodo } from '../actions/todo.actions';
import { Todo } from '../model/todo.model';

// Estado inicial
export const initialState: Todo[] = [];

// Reducer
export const todoReducer = createReducer(
  initialState,
  on(loadTodosSuccess, (state, { todos }) => [...todos]),
  on(addTodo, (state, { todo }) => [...state, todo]),
  on(toggleTodo, (state, { id }) =>
    state.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  )
);
