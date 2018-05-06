import { NgModule } from "@angular/core";
import { BottomBarComponent } from "../bottombar/bottombar.component";
import { CommonModule } from "@angular/common";
import { BottomBarRoutingModule } from "./bottombar.routing.module";
import { MedicalEquipmentComponent } from "../medicalequipment/medicalequipment.component";
import { MobileServicesComponent } from "../mobileservices/mobileservices.component";
import { HomeComponent } from "../home/home.component";
import { HomePageService } from "../services/homepage.service";
import { MedicalEquipmentService } from "../services/medicalequipment.service";
import { MedicalServicesService } from "../services/medicalservices.service";
import { ProductComponent } from "../product/product.component";
import { ProductService } from "../services/product.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderSummaryService } from "../services/ordersummary.service";

@NgModule({
    declarations: [
        BottomBarComponent,
        MedicalEquipmentComponent,
        MobileServicesComponent,
        HomeComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BottomBarRoutingModule
    ],
    providers: [ HomePageService, MedicalEquipmentService, MedicalServicesService, ProductService, OrderSummaryService ],
    exports: [
        BottomBarComponent,
        MedicalEquipmentComponent,
        MobileServicesComponent,
        HomeComponent,
        ProductComponent,
        BottomBarRoutingModule
    ]
})

export class BottomBarModule { }