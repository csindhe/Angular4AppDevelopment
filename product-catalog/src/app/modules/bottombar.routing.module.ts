import { NgModule } from "@angular/core";
import { Routes, Router, RouterModule } from "@angular/router";
import { MedicalEquipmentComponent } from "../medicalequipment/medicalequipment.component";
import { MobileServicesComponent } from "../mobileservices/mobileservices.component";
import { HomeComponent } from "../home/home.component";
import { HomePageDataResolverService } from "../services/homepagedataresolver.service";
import { MedicalEquipmentDataResolverService } from "../services/medicalequipmentdataresolver.service";
import { MedicalServicesDataResolverService } from "../services/medicalservicesdataresolver.service";
import { ProductComponent } from "../product/product.component";
import { ProductDataResolverService } from "../services/productdataresolver.service";
import { OrderSummaryComponent } from "../ordersummary/ordersummary.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full'},
    { 
        path: 'Home', 
        component: HomeComponent, 
        resolve: { topFive: HomePageDataResolverService }
    },
    { 
        path: 'MedicalEquipment', 
        component: MedicalEquipmentComponent,
        resolve: { medEquip: MedicalEquipmentDataResolverService }
    },
    { 
        path: 'MobileServices', 
        component: MobileServicesComponent,
        resolve: { mobService: MedicalServicesDataResolverService}
    },
    {
        path: 'Product/:id',
        component: ProductComponent,
        resolve: { product: ProductDataResolverService }
    },
    {
        path: 'OrderSummary/:id',
        component: OrderSummaryComponent
        // resolve: { order: OrderSummaryDataResolverService }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
       RouterModule 
    ],
    providers: [ 
                 HomePageDataResolverService,
                 MedicalEquipmentDataResolverService,
                 MedicalServicesDataResolverService,
                 ProductDataResolverService
               ]
})

export class BottomBarRoutingModule { }
