import { Injectable } from '@angular/core';
//import { Setfirma } from '../../../interfaces/setfirma.interface';

import { Firmante } from 'src/app/store/model/firmante.model';
import { addFirmante, toggleFirmante, loadFirmantes } from 'src/app/store/actions/principal.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';



@Injectable({
  providedIn: 'root'
})
export class FirmanteService {
    firmantes$: Observable<Firmante[]>;

    constructor(private store: Store<{ firmantes: Firmante[] }>) {
        this.firmantes$ = this.store.select('firmantes');
      }


  private firmantes: Firmante[] = [
    {
      Nombre: 'Danilo Lineros',
      ApellidoPaterno: 'danilo.lineros@gmail.com',
      ApellidoMaterno: '',
      Email: '',
      Celular: '944639884',
      CantidadDoctos: 0,
      TipoFirma: 1,

    }
  ];


  onAddFirmante(firmante: Firmante) {
    const newFirmante: Firmante = {
         id: Date.now(),
         Nombre: firmante.Nombre,
         ApellidoPaterno:firmante.ApellidoPaterno,
         ApellidoMaterno: firmante.ApellidoMaterno,
         Email:firmante.Email,
         Celular:firmante.Celular,
         CantidadDoctos:0,
         TipoFirma:1
         };
    this.store.dispatch(addFirmante({ firmante: newFirmante }));
  }

  onUpdateFirmante(index: number, updatedFirmante: Firmante)
  {
    //this.firmantes[index] = updatedFirmante;
    //this.store.dispatch(updateFirmante({ firmante: newFirmante }));

  }

  ngOnInit() {
    this.store.dispatch(loadFirmantes());
  }

  getFirmantes()
  {
    this.store.dispatch(loadFirmantes());

  }


 /*  getFirmantes() {
    return this.firmantes;
  } */

  /*
  addFirmante(firmante: Setfirma) {
    this.firmantes.push(firmante);
  } */

  /* updateFirmante(index: number, updatedFirmante: Firmante) {
    this.firmantes[index] = updatedFirmante;
  } */

  deleteFirmante(index: number) {
    this.firmantes.splice(index, 1);
  }
}
