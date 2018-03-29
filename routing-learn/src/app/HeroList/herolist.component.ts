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
    heroes: Hero[];

    constructor(private heroService: HeroService) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes().subscribe(heroes => {
            this.heroes = heroes;
        })
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

}