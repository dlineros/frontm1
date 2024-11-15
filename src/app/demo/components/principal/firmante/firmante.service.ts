import { Injectable } from '@angular/core';
import { Setfirma } from '../../../interfaces/setfirma.interface';

/*export interface Setfirma {
  Nombre: string;
  ApellidoPaterno: string;
  ApellidoMaterno: string;
  Email: string;
  CantidadDoctos: number;
  TipoFirma: number;
  Celular: string;
}
*/

@Injectable({
  providedIn: 'root'
})
export class FirmanteService {
  private firmantes: Setfirma[] = [
    {
      Nombre: 'Danilo Lineros',
      ApellidoPaterno: 'danilo.lineros@gmail.com',
      ApellidoMaterno: '',
      Email: '',
      CantidadDoctos: 0,
      TipoFirma: 1,
      Celular: '944639884'
    }
  ];

  getFirmantes() {
    return this.firmantes;
  }

  addFirmante(firmante: Setfirma) {
    this.firmantes.push(firmante);
  }

  updateFirmante(index: number, updatedFirmante: Setfirma) {
    this.firmantes[index] = updatedFirmante;
  }

  deleteFirmante(index: number) {
    this.firmantes.splice(index, 1);
  }
}
