import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UploadDirectoryHomeComponent } from './upload-directory-home.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

const routes = [
  {
      path     : 'UploadDirectory',
      component: UploadDirectoryHomeComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    UploadDirectoryHomeComponent
  ]
})
export class UploadDirectoryHomeModule { }
