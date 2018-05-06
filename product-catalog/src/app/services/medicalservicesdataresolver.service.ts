import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { productModel } from "../data/data";
import { MedicalServicesService } from "./medicalservices.service";

@Injectable()
export class MedicalServicesDataResolverService implements Resolve<Observable<productModel[]>> {

    constructor(private router: Router, private service: MedicalServicesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<productModel[]> {
        return this.service.getMedicalServicesProdList();
    }
}