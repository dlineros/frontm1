import { NgModule } from '@angular/core';
import { firmanteComponent } from './firmante.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        ListboxModule,
        CardModule
    ],
    exports: [firmanteComponent],
    declarations: [firmanteComponent],
    providers: [],
})
export class firmanteModule { }
