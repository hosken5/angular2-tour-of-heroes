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
import {TabsWrapper} from "./tabs/tabs-wrapper.component";
import {TabsComponent} from "./tabs/tabs.component";
import {TabComponent} from "./tabs/tab.component";
// import {Tab2} from "./tabs/tab2.component";
// import {Tabs2} from "./tabs/tabs2.component";

@NgModule({
    imports:      [
        
        BrowserModule ,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing],
    declarations :[HeroesComponent,
        HeroDetailComponent,
        AppComponent,
        DashboardComponent,
        HeroSearchComponent,
        TabsWrapper,
        TabsComponent,
        TabComponent
    ],
    bootstrap:[AppComponent]
})

export class AppModule {}