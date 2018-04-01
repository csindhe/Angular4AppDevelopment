import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { AuthGuard } from './auth-guard.service';
import { CrisisCenterComponent } from './Crisis/crisis-center.component';
import { HeroService } from './Services/hero.service';
import { HeroDetailComponent } from './HeroDetail/herodetail.component';
import { PageNotFoundComponent } from './PageNotFound/pagenotfound.component';
import { HeroListComponent } from './HeroList/herolist.component';
import { CrisisListComponent } from './Crisis/crisislist.component';


import { RouterModule, Routes, CanDeactivate, PreloadAllModules } from '@angular/router';
import { NgModule, enableProdMode } from '@angular/core';
import { ComposeMessageComponent } from './Message/composemessage.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

const appRoutes: Routes = [
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    },
    {
        path: 'admin',
        loadChildren: 'app/Admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'crisis-center',
        loadChildren: 'app/Crisis/crisis.module#CrisisCenterModule',
        data: { preload: true }
    },
    {
      path: '', redirectTo: '/superheroes', pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        // SelectivePreloadingStrategy,
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: SelectivePreloadingStrategy
        }) //, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ],
    providers: [ CanDeactivateGuard, SelectivePreloadingStrategy ]
})
export class AppRoutingModule {}