import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { productModel } from "../data/data";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderSummaryService } from "../services/ordersummary.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    productData: productModel[];
    orderForm: FormGroup;
    name: string; address: string; quanity: number; phone: string;

    constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, 
                private service: OrderSummaryService) {
        this.initiateForm();
    }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.productData = data.product;
        });
    }

    initiateForm() {
        this.orderForm = this.fb.group({
            name : ['', Validators.required],
            address: ['', Validators.required],
            phone: ['', Validators.required],
            quantity: ['', Validators.required]
        });
    }

    onOrderSubmit(product: productModel) {
        this.name = this.orderForm.get('name').value;
        this.address = this.orderForm.get('address').value;
        this.phone = this.orderForm.get('phone').value;;
        this.quanity = this.orderForm.get('quanity').value;

        this.service.processOrderRequest(product, {name: this.name, address: this.address, phone: this.phone, qty: this.quanity})
    }
}