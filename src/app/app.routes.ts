import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { FypComponent } from './fyp/fyp.component';
import { EspaceClasseComponent } from './espace-classe/espace-classe.component';
import { ErrorsComponent } from './errors/errors.component';

export const routes: Routes = [
    {path:'', component :FypComponent},
   { path:'fyp', component :FypComponent},
   {path:'espaceClasse', component:EspaceClasseComponent},
   {path:'**',component :ErrorsComponent}
];
