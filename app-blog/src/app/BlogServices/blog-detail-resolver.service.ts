import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Blog } from '../BlogAppModels/blog.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogDetailResolver implements Resolve<Blog> {

    constructor(private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Blog> {
        let id = route.paramMap.get('id');
        return null;
    }
}
