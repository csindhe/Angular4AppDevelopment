import { ManageHeroesComponent } from './manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminComponent } from './admin.component';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ManageCrisesComponent,
        ManageHeroesComponent
    ],
    providers:[ AuthGuard, AuthService ]
})
export class AdminModule { }