import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
    preloadedModules: string[] = [];

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if(route.data && route.data['preload']){
            this.preloadedModules.push(route.path);
            console.log('Preloaded: ' + route.path);
            return load();
        }else{
            return Observable.of(null);
        }
    }
}