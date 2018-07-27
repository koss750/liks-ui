import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoclistComponent } from './doclist/doclist.component';
import { DocService } from './doc.service';

@NgModule({
  declarations: [
    AppComponent,
    DoclistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
