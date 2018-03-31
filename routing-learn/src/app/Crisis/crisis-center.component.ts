import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-crisiscenter',
    template: `<h2>Crisis Center</h2>
               <router-outlet></router-outlet>`
})

export class CrisisCenterComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
        
    }
}