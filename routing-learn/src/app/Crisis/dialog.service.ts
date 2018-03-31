import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

@Injectable()
export class DialogService {

    confirm(message?: string): Observable<boolean> {
        const confirmation = window.confirm(message || 'Is it Ok?');
        return Observable.of(confirmation);
    }
}