import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntegrationsComponent } from './integrations.component';

const routes = [
    {
        path     : 'Integrations',
        component: IntegrationsComponent
    }
];

@NgModule({
    declarations: [
      IntegrationsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        
    ],
    exports     : [
      IntegrationsComponent
    ]
})
export class IntegrationsModule { }
