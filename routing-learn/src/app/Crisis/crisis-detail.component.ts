import { Observable } from 'rxjs/Observable';
import { DialogService } from './dialog.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Crisis, CrisisService } from './crisis.service';
import { Component, OnInit, style, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../Animations/animations';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-crisisdetail',
    template: `<div *ngIf="crisis"><!--$ | async as crisis"-->
        <h3>"{{ editName }}"</h3>
        <div>
            <label>Id: </label>{{ crisis.id }}
        </div>
        <div>
            <label>Name: </label>
            <input [(ngModel)]="editName" placeholder="name"/>
        </div>
        <p>
            <button (click)="save()">Save</button>
            <button (click)="cancel()">Cancel</button>
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
    edited: boolean = false;
    cancelled: boolean = false;

    constructor(private route: ActivatedRoute, 
                private router: Router,
                private dialogService: DialogService,
                private service: CrisisService) {

    }

    ngOnInit() {
        // this.crisis$ = this.route.paramMap.switchMap((params: ParamMap) => 
        //      this.service.getCrisis(params.get('id'))
        // );

        this.route.data.subscribe((data: { crisis: Crisis }) => {
            this.editName = data.crisis.name;
            this.crisis = data.crisis;
        });
    }

    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    gotoCrises() {
        let crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    }

    canDeactivate(): Observable<boolean> | boolean {
        if(!this.crisis || this.crisis.name === this.editName){
            return true;
        }
        return this.dialogService.confirm('Discard Changes');
    }

}