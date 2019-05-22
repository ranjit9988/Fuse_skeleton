import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountInformationComponent } from './account-information.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';

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
    MatTabsModule,
    MatExpansionModule
  ]
})
export class AccountInformationModule { }
