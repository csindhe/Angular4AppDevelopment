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
        
    }

    enterReplyMode() {
        this.replyMode = true;
    }

    onSubmit() {
        
    }
}