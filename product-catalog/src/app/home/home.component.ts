import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { productModel } from "../data/data";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    topFiveProdList: productModel[];

    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.topFiveProdList = data.topFive;
        }); 
    }
}