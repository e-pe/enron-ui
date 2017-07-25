import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EnronSearch } from './enron/EnronSearch';

import { EnronSearchService } from './enron/services/EnronSearchService'

@NgModule({
  declarations: [
    AppComponent,
    EnronSearch
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  entryComponents: [
    EnronSearch
  ],
  providers: [
    EnronSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
