import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { productModel, productList } from "../data/data";

@Injectable()

export class HomePageService {

    constructor() {

    }

    getTopFivePropducts(): Observable<productModel[]> {
        let topfiveProdList = Observable.create((observer) => {
            observer.next(productList.filter((value: productModel) => {
                return (value.rating === 5) ? true : false;
            }));
            observer.complete();
        });
        return topfiveProdList;
    }
}