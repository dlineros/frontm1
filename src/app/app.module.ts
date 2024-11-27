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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';







import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/effects/todo.effects';
import { environment } from 'src/environments/environment';
import { principalReducer } from './store/reducers/principal.reducer';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule,
              AppLayoutModule,
              BrowserModule,
              ReactiveFormsModule,
              StoreModule.forRoot({ principal: principalReducer }),
              StoreDevtoolsModule.instrument({ maxAge: 25 }),
              EffectsModule.forRoot([TodoEffects]),

              StoreDevtoolsModule.instrument({
                maxAge: 25, // Retains last 25 states
                logOnly: environment.production, // Restrict extension to log-only mode
                autoPause: true, // Pauses recording actions and state changes when the extension window is not open
                trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
                traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
                connectInZone: true // If set to true, the connection is established within the Angular zone
              }),


            ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,




    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
