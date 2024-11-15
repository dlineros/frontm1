import { NgModule } from '@angular/core';
import { firmanteComponent } from './firmante.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        ListboxModule
    ],
    exports: [firmanteComponent],
    declarations: [firmanteComponent],
    providers: [],
})
export class firmanteModule { }
