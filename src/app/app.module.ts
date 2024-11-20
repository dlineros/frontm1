import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';

import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/reducers/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/effects/todo.effects';


@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule,
              AppLayoutModule,
              BrowserModule,
              StoreModule.forRoot({ todos: todoReducer }),
              StoreDevtoolsModule.instrument({ maxAge: 25 }),
              EffectsModule.forRoot([TodoEffects])

            ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,




    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
