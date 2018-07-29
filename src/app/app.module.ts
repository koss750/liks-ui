import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoclistComponent } from './doclist/doclist.component';
import { DocService } from './doc.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {AuthService} from './auth.service';
import {SessionService} from './session.service';

@NgModule({
  declarations: [
    AppComponent,
    DoclistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
      AppRoutingModule
  ],
  providers: [DocService, AuthService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
