import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { ConciergeModule } from 'app/main/concierge/concierge.module';
import { IntegrationsModule} from 'app/main/integrations/integrations.module';
import { AccountSetupModule } from 'app/main/account-setup/account-setup.module';

import { AccountInformationModule } from './main/account-information/account-information.module';


import { GetStartedModule} from 'app/main/get-started/get-started.module';
import { UploadDirectoryHomeModule } from 'app/main/upload-directory-home/upload-directory-home.module';
import { UploadLogoModule} from 'app/main/upload-logo/upload-logo.module';
import { Error404Module } from 'app/navigation/error404/error404.module';



const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'sample'
    }
   


];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatCardModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        ConciergeModule,
        IntegrationsModule,
        AccountSetupModule,

        AccountInformationModule,

        GetStartedModule,
        UploadDirectoryHomeModule,
        UploadLogoModule,
        Error404Module


    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
