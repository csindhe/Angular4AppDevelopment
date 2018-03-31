import { Observable } from 'rxjs/Observable';
import { DialogService } from './dialog.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Crisis, CrisisService } from './crisis.service';
import { Component, OnInit, style, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../Animations/animations';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-crisisdetail',
    template: `<div *ngIf="crisis$ | async as crisis">
        <h3>"{{ crisis.name }}"</h3>
        <div>
            <label>Id: </label>{{ crisis.id }}
        </div>
        <div>
            <label>Name: </label>
            <input [(ngModel)]="crisis.name" placeholder="name"/>
        </div>
        <p>
            <button (click)="save(crisis)">Save</button>
            <button (click)="cancel(crisis)">Cancel</button>
        </p>
    </div>`, 
    styles: ['input { width: 20em }'],
    animations: [ slideInDownAnimation ]
})

export class CrisisDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    crisis$: Observable<Crisis>;
    crisis: Crisis;
    editName: string;

    constructor(private route: ActivatedRoute, 
                private router: Router,
                private dialogService: DialogService,
                private service: CrisisService) {

    }

    ngOnInit() {
        this.crisis$ = this.route.paramMap.switchMap((params: ParamMap) => 
             this.service.getCrisis(params.get('id'))
        );
    }

    cancel(crisis: Crisis) {
        this.gotoCrises(crisis);
    }

    save(crisis: Crisis) {
        // this.crisis.name = this.editName;
        this.gotoCrises(crisis);
    }

    gotoCrises(crisis?: Crisis) {
        let crisisId = crisis ? crisis.id : null;
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    }

    canDeactivate(): Observable<boolean> | boolean {
        if(!this.crisis || this.crisis.name === this.editName){
            return true;
        }
        return this.dialogService.confirm('Discard Changes');
    }
}