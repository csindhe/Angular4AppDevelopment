import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { productModel } from "../data/data";

@Component({
    selector: 'app-mobileservices',
    templateUrl: './mobileservices.component.html',
    styleUrls: ['./mobileservices.component.css']
})

export class MobileServicesComponent implements OnInit {
    mobSerProdList: productModel[];
    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.mobSerProdList = data.mobService;
        });
    }
}