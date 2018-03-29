import { HeroRoutingModule } from './heroes-routing.module';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './../HeroDetail/herodetail.component';
import { HeroListComponent } from './../HeroList/herolist.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent
    ],
    providers: [HeroService]
})
export class HeroesModule {}