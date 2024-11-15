import { NgModule } from '@angular/core';

import { PrincipalRoutingModule } from './principal-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';

import { PrincipalComponent } from './principal.component';
import { SubirdocumentoComponent } from './subirdocumento/subirdocumento/subirdocumento.component';
import { SubirdocumentoModule } from './subirdocumento/subirdocumento/subirdocumento.module';
import { firmanteModule } from './firmante/firmante.module';
import { CommonModule } from '@angular/common';
import { ListboxModule } from 'primeng/listbox';





@NgModule({

    imports:[
        CommonModule,
        PrincipalRoutingModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        AccordionModule,
        TabViewModule,
        PanelModule,
        FieldsetModule,
        MenuModule,
        DividerModule,
        SplitterModule,
        SubirdocumentoModule,
        ListboxModule,
        ButtonModule,
        firmanteModule,


    ],
    declarations:[
        PrincipalComponent,
        ]

})
export class PrincipalModule{}
