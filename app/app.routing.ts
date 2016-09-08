import {ModuleWithProviders}  from '@angular/core';
import {Routes,RouterModule}  from  '@angular/router';
import {HeroesComponent}  from './heroes.component' ;
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {TabsWrapper} from "./tabs/tabs-wrapper.component";
const appRoutes:Routes=[
    {
        path:'detail/:id',
        component:HeroDetailComponent
    },
    {
        path:'heroes',
        component:HeroesComponent
    },
    {
        path:'tabs-showcase',
        component:TabsWrapper
    },
    {
        path:'dashboard',
        component:DashboardComponent
    }
    ,{
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    }
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);