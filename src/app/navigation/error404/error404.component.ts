import { Component } from '@angular/core';

import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component  {


 constructor( private _fuseConfigService: FuseConfigService )    {
  // Configure the layout
  this._fuseConfigService.config = {
      layout: {
          navbar   : {
              hidden: true
          },
          toolbar  : {
              hidden: true
          },
          footer   : {
              hidden: true
          },
          sidepanel: {
              hidden: true
          }
      }
  };
}



}
