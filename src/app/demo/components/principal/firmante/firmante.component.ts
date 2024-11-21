import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output,OnInit, ViewEncapsulation  } from '@angular/core';
//import { Setfirma } from '../../../interfaces/setfirma.interface';
import { Firmante } from 'src/app/store/model/firmante.model';
import { ItemService } from 'src/app/demo/service/item.service';
import { FirmanteService } from './firmante.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';



@Component({
    selector: 'app-firmante',
    templateUrl: './firmante.component.html',
    styleUrls: ['./firmante.component.css'],
    standalone:true,
    imports:[
    CommonModule,
    FormsModule,
    ButtonModule,
    ListboxModule,
    CardModule,
    CommonModule,
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    TableModule
],
  })



  export class FirmanteComponent implements OnInit {

    firmantes: Firmante[] = [];
    selectedFirmante: Firmante | null = null; // Agrega esta propiedad
    newFirmante: Firmante = {
      Nombre: '',
      ApellidoPaterno: '',
      ApellidoMaterno: '',
      Email: '',
      Celular: '',
      CantidadDoctos: 0, // Valor predeterminado para CantidadDoctos
      TipoFirma: 1      // Valor predeterminado para TipoFirma

    };
    editIndex: number | null = null;
    constructor(private firmanteService: FirmanteService) {}

    ngOnInit(): void {
      this.firmanteService.getFirmantes().subscribe(
        (data: Firmante[]) => {
          this.firmantes = data;
        },
        (error) => {
          console.error('Error al obtener los firmantes:', error);
        }
      );
    }





    addFirmante() {
      if (this.editIndex === null) {
        this.firmanteService.onAddFirmante(this.newFirmante);
      } else {
        this.firmanteService.onUpdateFirmante(this.editIndex, this.newFirmante);
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









