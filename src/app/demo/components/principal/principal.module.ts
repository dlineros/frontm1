import { NgModule } from '@angular/core';
import { PrincipalRoutingModule } from './principal-routing.module';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { SubirdocumentoComponent } from './subirdocumento/subirdocumento/subirdocumento.component';
import { SubirdocumentoModule } from './subirdocumento/subirdocumento/subirdocumento.module';
import { firmanteModule } from './firmante/firmante.module';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';







@NgModule({

    imports:[
        CommonModule,
        PrincipalRoutingModule,
        SubirdocumentoModule,
        firmanteModule,
        FormsModule,
        CommonModule,
        TodoComponent

    ],
    declarations:[
        PrincipalComponent,
        ]

})
export class PrincipalModule{}
