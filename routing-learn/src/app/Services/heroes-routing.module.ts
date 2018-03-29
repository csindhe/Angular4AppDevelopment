import { HeroDetailComponent } from './../HeroDetail/herodetail.component';
import { HeroListComponent } from './../HeroList/herolist.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const heroesRoutes: Routes = [
    { path: 'heroes', component: HeroListComponent},
    { path: 'hero/:id', component: HeroDetailComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HeroRoutingModule {}