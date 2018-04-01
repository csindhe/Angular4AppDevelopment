import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin',
    template: `
        <h3>ADMIN<h3>
        <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" routerLink="./" routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" routerLink="./crises" routerLinkActive="active">Manage Crises</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" routerLink="./heroes" routerLinkActive="active">Manage Heroes</a>
            </li>
        </ul>
        </div>
        <br>
        <router-outlet></router-outlet>
    `
})

export class AdminComponent /*implements OnInit*/ {

    constructor() {

    }

    ngOnInit() {

    }
}