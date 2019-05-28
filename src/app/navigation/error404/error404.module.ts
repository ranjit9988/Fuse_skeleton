import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { Error404Component } from 'app/navigation/error404/error404.component';


const routes = [
  {
      path     : 'errors/error-404',
      component: Error404Component
  }
];

@NgModule({
 
  declarations: [Error404Component],

  imports     : [
    RouterModule.forChild(routes),
    CommonModule,
    MatIconModule,
]
})
export class Error404Module { }
