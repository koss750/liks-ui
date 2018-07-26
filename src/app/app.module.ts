import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoclistComponent } from './doclist/doclist.component';
import { DocserviceService } from './docservice.service';

@NgModule({
  declarations: [
    AppComponent,
    DoclistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DocserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
