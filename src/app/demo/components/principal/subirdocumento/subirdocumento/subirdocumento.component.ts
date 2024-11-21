import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
    selector: 'app-subirdocumento',
    templateUrl: './subirdocumento.component.html',
    styleUrl: './subirdocumento.component.css',
    standalone:true,
    imports: [
        CommonModule,
		FormsModule,
		FileUploadModule

    ],
    providers: [MessageService]
})
export class SubirdocumentoComponent {
    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'Bien', detail: 'Pdf subido' });
    }

    onBasicUpload() {
        this.messageService.add({ severity: 'info', summary: 'Bien', detail: 'File Uploaded with Basic Mode' });
    }

 }
