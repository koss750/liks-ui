import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoclistComponent } from './doclist/doclist.component';
import { DocService } from './doc.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './app-routing.module';
import {AuthService} from './auth.service';
import {SessionService} from './session.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DoclistResolver} from './doclist/doclist.resolver';
import {AccessGuard} from './access.guard';
import { TravelComponent } from './travel/travel.component';
import {TravelResolver} from './travel/travel.resolver';
import {TravelService} from './travel.service';

@NgModule({
  declarations: [
    AppComponent,
    DoclistComponent,
    LoginComponent,
    PageNotFoundComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [
      DocService,
      AuthService,
      SessionService,
      DoclistResolver,
      AccessGuard,
      TravelResolver,
      TravelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
