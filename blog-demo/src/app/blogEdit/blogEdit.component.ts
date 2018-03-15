import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../service/blog-service';
import { Blog } from '../service/blog.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-blogedit',
    templateUrl: './blogEdit.component.html',
    styleUrls: ['./blogEdit.component.css']
})
export class BlogEditComponent implements OnInit{
    @Input() blog: Blog;
    myForm: FormGroup;

    constructor(private blogService: BlogService, private fb: FormBuilder) {
        this.initiateForm();
    }

    initiateForm() {
        this.myForm = this.fb.group({
            title: ['', Validators.required],
            content: ['', Validators.required],
            author: ['', Validators.required]
        });
    }

    ngOnInit (){
        this.setInitialValues();
    }

    setInitialValues() {
        this.myForm.setValue({
            title: this.blog.title,
            author: this.blog.author,
            content: this.blog.content
        })
    }
    
    onSubmit() {
        let title: string, author: string, content: string;

        author = this.myForm.get("author").value;
        title = this.myForm.get("title").value;
        content = this.myForm.get("content").value;

        this.blogService.editBlog({id: this.blog.id, title: title, content: content, author: author});
    }

    private toggleEditMode() {
        this.blog.editMode = !this.blog.editMode;
    }
}