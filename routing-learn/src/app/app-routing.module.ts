import { HeroService } from './Services/hero.service';
import { HeroDetailComponent } from './HeroDetail/herodetail.component';
import { PageNotFoundComponent } from './PageNotFound/pagenotfound.component';
import { HeroListComponent } from './HeroList/herolist.component';
import { CrisisListComponent } from './Crisis/crisislist.component';


import { RouterModule, Routes } from '@angular/router';
import { NgModule, enableProdMode } from '@angular/core';

const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    {
      path: '', redirectTo: '/heroes', pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) //, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}