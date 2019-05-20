import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { ConciergeComponent } from './concierge.component';

import { MatCardModule, MatIconModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';

const routes = [
  {
    path: 'Concierge',
    component: ConciergeComponent,
 
  }

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],

  declarations: [ConciergeComponent],

  exports: [
    ConciergeComponent,
  ]
})
export class ConciergeModule { }
