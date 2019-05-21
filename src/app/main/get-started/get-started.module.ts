import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GetStartedComponent } from './get-started.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule, MatIconModule,MatButtonModule } from '@angular/material';

const routes = [
  {
      path     : 'GetStarted',
      component: GetStartedComponent
  }
];


@NgModule({
  declarations: [
    GetStartedComponent,
  ],

  imports     : [
    RouterModule.forChild(routes),
    CommonModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
]
})

export class GetStartedModule { }
