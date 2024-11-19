import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output,OnInit, ViewEncapsulation  } from '@angular/core';
import { Setfirma } from '../../../interfaces/setfirma.interface';
import { ItemService } from 'src/app/demo/service/item.service';
import { FirmanteService } from './firmante.service';



@Component({
    selector: 'app-firmante',
    templateUrl: './firmante.component.html',
    styleUrl: './firmante.component.css',


  })
  export class firmanteComponent {

    firmantes: Setfirma[] = [];
    selectedFirmante: Setfirma | null = null; // Agrega esta propiedad
    newFirmante: Setfirma = {
      Nombre: '',
      ApellidoPaterno: '',
      ApellidoMaterno: '',
      Email: '',
      CantidadDoctos: 0, // Valor predeterminado para CantidadDoctos
      TipoFirma: 1,       // Valor predeterminado para TipoFirma
      Celular: ''
    };
    editIndex: number | null = null;

    constructor(private firmanteService: FirmanteService) {
      this.firmantes = this.firmanteService.getFirmantes();
    }

    addFirmante() {
      if (this.editIndex === null) {
        this.firmanteService.addFirmante(this.newFirmante);
      } else {
        this.firmanteService.updateFirmante(this.editIndex, this.newFirmante);
        this.editIndex = null;
      }
      this.resetForm();
    }

    editFirmante(index: number) {
      this.newFirmante = { ...this.firmantes[index] };
      this.editIndex = index;
    }

    deleteFirmante(index: number) {
      this.firmanteService.deleteFirmante(index);
      this.resetForm();
    }

    cancelEdit() {
      this.resetForm();
    }

    private resetForm() {
      this.newFirmante = {
        Nombre: '',
        ApellidoPaterno: '',
        ApellidoMaterno: '',
        Email: '',
        CantidadDoctos: 0, // Valor predeterminado
        TipoFirma: 1,       // Valor predeterminado
        Celular: ''
      };
      this.editIndex = null;
    }
  }





/* export class firmanteComponent implements OnInit {
    items: any[] = [];  // Almacena los items obtenidos del servicio
  constructor(private itemService: ItemService) {}
  ngOnInit(): void {
    this.loadItems();
  }
//CARGA DE ITEM DESDE MONGO
  loadItems(): void {
    this.itemService.getItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error al cargar los items:', error);
      }
    );
  } */









