import { Injectable } from "@angular/core";
import { productModel } from "../data/data";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class OrderSummaryService {
    orderObs: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor() {

    }

    processOrderRequest(product: productModel, formOutput: any) {
        
        this.orderObs.next
    }
}