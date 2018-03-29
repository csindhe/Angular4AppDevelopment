import { HEROES } from './hero.mock';
import { Hero } from './hero';
import { MessageService } from './message.service';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

    constructor(private messageService: MessageService) {

    }

    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }
}