import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import  {HttpModule}  from '@angular/http' ;


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {FormsModule}  from  '@angular/forms';
import {HeroesComponent} from './heroes.component' ;
import {HeroDetailComponent} from "./hero-detail.component";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroSearchComponent}  from  "./hero-search.component" ;
import {routing}  from  './app.routing' ;

@NgModule({
    imports:      [
        BrowserModule ,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing],
    declarations :[HeroesComponent,HeroDetailComponent,AppComponent,DashboardComponent,HeroSearchComponent],
    bootstrap:[AppComponent]
})
export class AppModule {}