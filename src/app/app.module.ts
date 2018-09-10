import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { ElevesModule } from './eleves/eleves.module';
import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  imports:      [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    ElevesModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
