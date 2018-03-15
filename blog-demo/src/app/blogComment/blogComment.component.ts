import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog-service';

@Component({
    selector: "app-blogComment",
    templateUrl: "./blogComment.component.html",
    styleUrls: ["./blogComment.component.css"]
})
export class BlogCommentComponent implements OnInit {
    myForm: FormGroup
    constructor(private blogService: BlogService, private fb: FormBuilder) {
        this.initializeForm()
    }

    initializeForm() {
        this.myForm = this.fb.group({
            content: ['', Validators.required],
            author: ['', Validators.required]
        });
    }

    ngOnInit() {

    }

    onSubmit() {

    }
}