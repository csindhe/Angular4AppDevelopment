import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { productModel, productList } from "../data/data";
import { ProductService } from "./product.service";

@Injectable()

export class ProductDataResolverService implements Resolve<Observable<productModel[]>> {

    constructor(private router: Router, private service: ProductService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<productModel[]> {
        let productId = route.paramMap.get('id');
        return this.service.getProdDetail(productId);
    }
}