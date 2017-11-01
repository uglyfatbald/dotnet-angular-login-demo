import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { AlertComponent } from './components/alert/alert.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { LocalStorageService } from './services/local-storage.service';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';

import { AuthGuard } from './guards/auth.guard'

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent
    ],
    providers: [
        LocalStorageService,
        AuthenticationService,
        AlertService,
        AuthGuard
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, canActivate: [AuthGuard] },
            { path: 'login', component: LoginComponent },
            // otherwise redirect to home
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
