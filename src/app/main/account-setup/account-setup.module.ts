import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountSetupComponent } from './account-setup.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
const routes = [
  {
      path     : 'AccountSetup',
      component: AccountSetupComponent
  }
];


@NgModule({
  declarations: [
    AccountSetupComponent
  ],
  imports     : [
      RouterModule.forChild(routes),

      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      MatStepperModule,
      ReactiveFormsModule,
      CommonModule,
      BrowserModule,
  ]
})
export class AccountSetupModule { }
