import { HEROES } from './hero.mock';
import { Hero } from './hero';
import { MessageService } from './message.service';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

    constructor(private messageService: MessageService) {

    }

    getHeroes(): Observable<Hero[]> {
        return  of(HEROES);
    }

    getHero(id: number | string) {
       return this.getHeroes().map((heroes) => {
           return heroes.find((hero) => hero.id === +id);
       })
    }
}