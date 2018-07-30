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

@NgModule({
  declarations: [
    AppComponent,
    DoclistComponent,
    LoginComponent,
    PageNotFoundComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
