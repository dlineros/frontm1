import { NgModule } from '@angular/core';

import { SubirdocumentoComponent } from './subirdocumento.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
    imports: [
        CommonModule,
		FormsModule,
		FileUploadModule

    ],
    exports: [SubirdocumentoComponent],
    declarations: [SubirdocumentoComponent],
    providers: [],
})
export class SubirdocumentoModule { }
