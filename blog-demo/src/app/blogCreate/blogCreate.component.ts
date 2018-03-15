import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog-service';

@Component({
    selector: "app-blogCreate",
    templateUrl: "./blogCreate.component.html",
    styleUrls: ["./blogCreate.component.css"]
})
export class blogCreateComponent implements OnInit {
    myForm: FormGroup

    constructor(private blogService: BlogService, private fb: FormBuilder) {
        this.initiateForm();
    }

    ngOnInit() {
        
    }

    onSubmit() {
        let title: string, content: string, author: string;
        
        title = this.myForm.get("title").value;
        content = this.myForm.get("content").value;
        author = this.myForm.get("author").value;

        this.blogService.createBlog(title, content, author);
    }

    initiateForm() {
        this.myForm = this.fb.group({
            title: ['', Validators.required],
            content: ['', Validators.required],
            author: ['', Validators.required]
        });
    }

    exitCreateBlog() {
        this.blogService.blogCreateCompletion.next(true);
    }

}