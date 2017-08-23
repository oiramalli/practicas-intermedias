import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { Informe1Component } from './informe-1/informe-1.component';
import { Informe2Component } from './informe-2/informe-2.component';

const MODULE_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'informe-1', component: Informe1Component },
    { path: 'informe-2', component: Informe2Component },
    { path: '**', redirectTo: 'home'},
];

export const MODULE_COMPONENTS = [
  MainComponent,
  AboutComponent,
  Informe1Component,
  Informe2Component,
];
@NgModule({
  imports: [ RouterModule.forRoot(MODULE_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
