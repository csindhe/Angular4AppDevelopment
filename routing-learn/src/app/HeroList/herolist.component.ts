import { Observable } from 'rxjs/Observable';
import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Hero } from './../Services/hero';
import { Component, OnInit } from "@angular/core";
import { HeroService } from '../Services/hero.service';

@Component({
    selector: 'app-herolist',
    templateUrl: './herolist.component.html',
    styleUrls: ['./herolist.component.css']
})

export class HeroListComponent implements OnInit {
    selectedHero: Hero;
    heroes: Observable<Hero[]>;
    // heroes: Hero[];
    selectedId: number;

    constructor(private heroService: HeroService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        // this.heroService.getHeroes().subscribe(heroes => {
        //     this.heroes = heroes;
        // })
        this.heroes = this.route.paramMap.switchMap((params: ParamMap) =>{
            this.selectedId = +params.get('id');
            return this.heroService.getHeroes();
        })

    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

}