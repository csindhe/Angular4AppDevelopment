import { LoggedInGuard } from './loggedinguard.service';
import { NgModule } from '@angular/core';
import { ProductComponent } from './../Products/product.component';
import { LoginComponent } from './../Login/login.component';
import { ContactComponent } from './../Contact/contact.component';
import { AboutComponent } from './../About/about.component';
import { HomeComponent } from './../Home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedComponent } from '../Protected/protected.component';
import { LoginService } from './login.service';

const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contactus', redirectTo: 'contact' },

    //authentication demo
    { path: 'login', component: LoginComponent },
    {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [ LoggedInGuard, LoginService ] 
    }

    //nested
    // {
    //     path: 'products',
    //     component: ProductComponent,
    //     children: childRoutes
    // }

];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [],
    exports: [RouterModule]
})

export class AppRoutingModule { }