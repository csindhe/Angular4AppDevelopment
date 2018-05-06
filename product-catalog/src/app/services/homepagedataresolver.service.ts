import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { productModel } from "../data/data";
import { HomePageService } from "./homepage.service";

@Injectable()
export class HomePageDataResolverService implements Resolve<Observable<productModel[]>> {

    constructor(private router: Router, private service: HomePageService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<productModel[]> {
        return this.service.getTopFivePropducts();   
    }
}
