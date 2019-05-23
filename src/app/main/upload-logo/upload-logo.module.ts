import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {UploadLogoComponent} from './upload-logo.component';
import { FileDropModule} from 'ngx-file-drop';

const routes = [
  {
    path: 'UploadLogo',
    component: UploadLogoComponent,
  }

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FileDropModule,
  ],
  
  declarations: [UploadLogoComponent],

  exports: [
    UploadLogoComponent,
  ]
})
export class UploadLogoModule { }
