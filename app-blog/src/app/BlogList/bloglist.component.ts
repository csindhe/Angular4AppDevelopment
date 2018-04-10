import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-bloglist',
    templateUrl: "./bloglist.component.html",
    styleUrls: ["./bloglist.component.css"]
})

export class BlogListComponent implements OnInit {

    constructor(private router: Router) {
        
    }

    ngOnInit() {
        
    }
}