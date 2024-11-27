import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';


import { Firmante } from 'src/app/store/model/firmante.model';
import * as acciones from 'src/app/store/actions/principal.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-addfirmante',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule, ButtonModule, ListboxModule, CardModule, AutoCompleteModule, ChipsModule, DropdownModule, InputMaskModule,
        InputNumberModule, CascadeSelectModule, MultiSelectModule, InputTextareaModule, InputTextModule, TableModule,
        ReactiveFormsModule
    ],
    templateUrl: './addfirmante.component.html',
    styleUrl: './addfirmante.component.css',
})
export class AddfirmanteComponent implements OnInit {

    txtInputNombre: FormControl;

    firmantes: Firmante[] = [];
    newFirmante: Firmante = {
        Nombre: '',
        ApellidoPaterno: '',
        ApellidoMaterno: '',
        Email: '',
        CantidadDoctos: 0, // Valor predeterminado
        TipoFirma: 1,       // Valor predeterminado
        Celular: ''


    };

    constructor(private store: Store<{ firmantes: Firmante[] }>) {
        this.txtInputNombre = new FormControl('Nombre', Validators.required)

        this.store.select('firmantes').subscribe(firmantes => {
            this.firmantes = firmantes;
        });
    }
    ngOnInit(): void {

    }

    selectedFirmante: Firmante | null = null; // Agrega esta propiedad
    editIndex: number | null = null;

    agregar() {
        if (this.txtInputNombre.invalid){return;}


        console.log(this.txtInputNombre.value);
        console.log(this.txtInputNombre.valid)
     }

    onAddFirmante(firmante: Firmante) {
        const newFirmante: Firmante = {
            id: Date.now(),
            Nombre: firmante.Nombre,
            ApellidoPaterno: firmante.ApellidoPaterno,
            ApellidoMaterno: firmante.ApellidoMaterno,
            Email: firmante.Email,
            Celular: firmante.Celular,
            CantidadDoctos: 0,
            TipoFirma: 1
        };

        this.store.dispatch(acciones.addFirmante({ firmante: newFirmante }));
        this.txtInputNombre.reset();
    }


    addFirmante() {
        if (this.editIndex === null) {

            this.onAddFirmante(this.newFirmante);
        }

        else {

            this.onUpdateFirmante(this.editIndex, this.newFirmante);
            this.editIndex = null;
        }
        this.resetForm();
    }

    onUpdateFirmante(index: number, updatedFirmante: Firmante) {
        this.store.dispatch(acciones.editFirmante({ firmante: updatedFirmante }));

    }

    onDeleteFirmante(index: number) {

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
