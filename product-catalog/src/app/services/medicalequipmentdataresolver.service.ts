import { Injectable } from "@angular/core";
import { productModel } from "../data/data";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MedicalEquipmentService } from "./medicalequipment.service";

@Injectable()
export class MedicalEquipmentDataResolverService implements Resolve<Observable<productModel[]>> {

    constructor(private router: Router, private service: MedicalEquipmentService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.getMedicalEquipmentProductList();
    }
}