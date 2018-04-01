import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Crisis, CrisisService } from './crisis.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {

    constructor(private cs: CrisisService, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
        let id = route.paramMap.get('id');
        return this.cs.getCrisis(id).take(1).map((crisis) => {
            if(crisis){
                return crisis;
            }else{
                this.router.navigate(['/crisis-center']);
                return null;
            }
        })
    }
}