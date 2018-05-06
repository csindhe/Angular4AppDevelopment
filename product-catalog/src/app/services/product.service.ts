import { Injectable } from "@angular/core";
import { productModel, productList } from "../data/data";
import { Observable } from "rxjs/Observable";

@Injectable()

export class ProductService {

    constructor() {

    }

    getProdDetail(productId: any): Observable<productModel[]> {
        let prodObs = Observable.create((observer) => {
            let abc = productList.filter((product) => {
                return (product.id.toString() === productId.toString()) ? true : false;
            });
            observer.next(abc);
            observer.complete();
        });
        return prodObs;
    }
}