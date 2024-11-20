import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { loadTodos, loadTodosSuccess } from '../actions/todo.actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.http.get('/api/todos').pipe(
          map((todos: any) => loadTodosSuccess({ todos })),
          catchError(() => of({ type: '[Todo] Load Todos Error' }))
        )
      )
    )
  );
}
