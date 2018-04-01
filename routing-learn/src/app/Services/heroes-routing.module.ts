import { HeroDetailComponent } from './../HeroDetail/herodetail.component';
import { HeroListComponent } from './../HeroList/herolist.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const heroesRoutes: Routes = [
    { path: 'heroes', redirectTo: '/superheroes'},
    { path: 'hero/:id', redirectTo: '/superhero/:id'},
    { path: 'superheroes', component: HeroListComponent},
    { path: 'superhero/:id', component: HeroDetailComponent}
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