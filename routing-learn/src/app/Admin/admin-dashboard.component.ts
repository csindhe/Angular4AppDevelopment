import { SelectivePreloadingStrategy } from './../selective-preloading-strategy';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-admindashboard',
    template: `
        <p>Dashboard</p>
        <p>Session ID: {{ sessionId | async }}</p>
        <a id='anchor'></a>
        <p>Token: {{ token | async }}</p>

        Preloaded Modules
        <ul>
            <li *ngFor="let module of modules">{{ module }}</li>
        </ul>
    `
})

export class AdminDashboardComponent implements OnInit {
    sessionId: Observable<string>;
    token: Observable<string>;
    modules: string[];

    constructor(private route: ActivatedRoute, private preloadStrategy: SelectivePreloadingStrategy) {
        this.modules = preloadStrategy.preloadedModules;
    }

    ngOnInit() {
        this.sessionId = this.route.queryParamMap.map(params => params.get('session_id') || 'None');
        this.token = this.route.fragment.map(fragment => fragment || 'None');
    }
}