import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output,OnInit  } from '@angular/core';
import { Setfirma } from '../../../interfaces/setfirma.interface';
import { ItemService } from 'src/app/demo/service/item.service';

@Component({
    selector: 'app-seleccionarfirmante',
    templateUrl: './seleccionarfirmante.component.html',
    styles: `
    :host {
      display: block;
    }
  `,
})
export class SeleccionarfirmanteComponent implements OnInit {

    items: any[] = [];  // Almacena los items obtenidos del servicio

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error al cargar los items:', error);
      }
    );
  }





    @Input()
    public SetfirmaList: Setfirma[]=[
     {nombre:'Danilo Lineros',
      email:'danilo.lineros@gmail.com'
     },
     {nombre:'Danilo Lineros 22',
        email:'danilo.lineros22@gmail.com'}
    ]
    @Output()
    public onDelete: EventEmitter<string>= new EventEmitter();

    onDeleteFirmante(id?:string): void{
        if (!id) return;
        this.onDelete.emit(id);
    }
 }
