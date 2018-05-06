import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { productList, productModel } from "../data/data";

@Injectable()

export class MedicalServicesService {

    constructor() {

    }

    getMedicalServicesProdList() {
        let medicalSerObs = Observable.create((Observer) => {
            Observer.next(productList.filter((product: productModel) => {
                return (product.category === "Mobile Services") ? true : false;
            }));
            Observer.complete();
        });

        return medicalSerObs;
    }
} 