import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { productModel, productList } from "../data/data";

@Injectable()

export class MedicalEquipmentService {
    
    constructor() {

    }

    getMedicalEquipmentProductList() {
        let medicalEquipObs = Observable.create((observer) => {
            observer.next(productList.filter((product: productModel) => {
                return (product.category === 'Medical Equipment') ? true: false;
            }));
            observer.complete();
        });

        return medicalEquipObs;
    }
}