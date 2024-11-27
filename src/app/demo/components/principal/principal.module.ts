import { NgModule } from '@angular/core';
import { PrincipalRoutingModule } from './principal-routing.module';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './principal.component';
import { SubirdocumentoComponent } from './subirdocumento/subirdocumento/subirdocumento.component';
import { FormsModule } from '@angular/forms';
import { listfirmanteComponent } from './listfirmante/listfirmante.component';
import { AddfirmanteComponent } from './addfirmante/addfirmante.component';







@NgModule({

    imports:[
        CommonModule,
        PrincipalRoutingModule,
        SubirdocumentoComponent,
        listfirmanteComponent,
        AddfirmanteComponent,
        FormsModule,
        CommonModule,

    ],
    declarations:[
        PrincipalComponent,
        ]

})
export class PrincipalModule{}
