import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { loadFirmantes, loadFirmantesSuccess } from '../actions/principal.actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FirmanteEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadFirmantes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFirmantes),
      mergeMap(() =>
        this.http.get('/api/firmantes').pipe(
          map((firmantes: any) => loadFirmantesSuccess({ firmantes })),
          catchError(() => of({ type: '[Firmante] Load Todos Error' }))
        )
      )
    )
  );
}
