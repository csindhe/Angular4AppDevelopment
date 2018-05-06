import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { Router, ActivatedRoute } from "@angular/router";
import { productModel } from "../data/data";

@Component({
    selector: 'app-medicalequipment',
    templateUrl: './medicalequipment.component.html',
    styleUrls: ['./medicalequipment.component.css']
})

export class MedicalEquipmentComponent implements OnInit {
    medicalEquipProdList: productModel[];
    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.medicalEquipProdList = data.medEquip;
        })
    }
}