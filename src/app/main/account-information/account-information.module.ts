import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountInformationComponent } from './account-information.component';
import { BrowserModule } from '@angular/platform-browser';

const routes = [
    {
        path     : 'AccountInformation',
        component: AccountInformationComponent
    }
  ];
@NgModule({
    declarations: [
        AccountInformationComponent
      ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes),
  ]
})
export class AccountInformationModule { }
