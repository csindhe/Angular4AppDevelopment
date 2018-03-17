import { blogComment } from './../service/blogComment.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { blogCommentService } from '../service/blog-service';

@Component({
    selector: "app-blogCommentReply",
    templateUrl: "./blogCommentReply.component.html",
    styleUrls: ["./blogCommentReply.component.css"]
})
export class blogCommentReplyComponent implements OnInit {
    @Input() comment: blogComment;
    myForm: FormGroup;
    replyMode: boolean;
    replyCommentList: blogComment[];

    constructor(private blogCommentService: blogCommentService, private fb: FormBuilder) {
        this.initiateForm();
    }

    initiateForm() {
        this.myForm = this.fb.group({
            content: ['', Validators.required],
            author: ['', Validators.required]
        });
    }

    ngOnInit() {
        this.blogCommentService
            .getReplyCommentBlog(this.comment.id, this.comment.blogId)
                .subscribe((List) => {
                    this.replyCommentList = List;
                });
    }

    enterReplyMode() {
        this.replyMode = true;
    }

    onSubmit() {
        let content: string, author: string;
        author = this.myForm.get("author").value;
        content = this.myForm.get("content").value;
        this.blogCommentService
            .addReplyCommentBlog(
                this.comment.blogId, 
                content, 
                author, 
                this.comment.id);
        this.clearForm();
        this.exitReplyCommentMode();
    }

    exitReplyCommentMode() {
        this.replyMode = false;
    }

    clearForm() {
        this.myForm.setValue({
            content: "",
            author: ""
        })
    }
}