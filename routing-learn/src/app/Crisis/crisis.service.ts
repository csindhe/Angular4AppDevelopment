import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

export class Crisis {
    constructor(public id: number, public name: string) {
        
    } 
}

@Injectable()
export class CrisisService {
    static nextCrisisId = 100;
    private crises: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

    getCrises() {
        return this.crises;
    }

    getCrisis(id: number | string) {
        return this.getCrises().map((crises) => {
            return crises.find(crisis => crisis.id === +id)
        })
    }

    addCrisis(name: string) {
        name = name.trim();
        if(name){
            let crisis = new Crisis(CrisisService.nextCrisisId++, name);
            CRISES.push(crisis);
            this.crises.next(CRISES);
        }
    }
}

export const CRISES = [
    new Crisis(1, 'Joker creating mayhem in Gotham'),
    new Crisis(2, 'Thanos creating mayhem in New York'),
    new Crisis(3, 'Stryker creating mayhem in Wakanda')
]
    