import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { Setfirma } from '../../../interfaces/setfirma.interface';

//import { ItemService } from 'src/app/demo/service/item.service';
//import { FirmanteService } from './firmante.service';
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
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Firmante } from 'src/app/store/model/firmante.model';
import * as acciones from 'src/app/store/actions/principal.actions';
import { addFirmante } from '../../../../store/actions/principal.actions';



@Component({
    selector: 'app-listfirmante',
    templateUrl: './listfirmante.component.html',
    styleUrls: ['./listfirmante.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule, ButtonModule, ListboxModule, CardModule, AutoCompleteModule, ChipsModule, DropdownModule, InputMaskModule,
        InputNumberModule, CascadeSelectModule, MultiSelectModule, InputTextareaModule, InputTextModule, TableModule
             ],

})



export class listfirmanteComponent {
    firmantes: Firmante[] = [];
    selectedFirmante: Firmante | null = null; // Agrega esta propiedad
    editIndex: number | null = null;
    newFirmante: Firmante;

    constructor(private store: Store<{ firmantes: Firmante[] }>) {
        this.store.select('firmantes').subscribe(firmantes => {
            this.firmantes = firmantes;
        });
    }

    editFirmante(index: number) {
        this.newFirmante = { ...this.firmantes[index] };
        this.editIndex = index;
    }

    deleteFirmante(index: number) {
        this.deleteFirmante(index);
        // this.resetForm();
    }



}








