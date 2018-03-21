import { blogComment } from './../service/blogComment.model';
import { blogCommentService } from './../service/blog-service';
import { Blog } from './../service/blog.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../service/blog-service';

@Component({
    selector: 'app-blogComment',
    templateUrl: './blogComment.component.html',
    styleUrls: ['./blogComment.component.css']
})
export class BlogCommentComponent implements OnInit {
    myForm: FormGroup;
    commentMode: boolean;
    blogCommentList: blogComment[] = [];
    @Input() blog: Blog;

    constructor(private blogCommentService: blogCommentService, private fb: FormBuilder) {
        this.initializeForm();
    }

    initializeForm() {
        this.myForm = this.fb.group({
            content: ['', Validators.required],
            author: ['', Validators.required]
        });
    }

    ngOnInit() {
       this.blogCommentService.getCommentBlog(this.blog.id).subscribe((x) => {
            this.blogCommentList = x;
       })
    }

    onSubmit() {
        let author: string, content: string;
        author = this.myForm.get('author').value;
        content = this.myForm.get('content').value;
        this.blogCommentService.addCommentBlog(this.blog.id, author, content);
        this.clearCommentForm();
        this.exitCommentMode();
    }

    enterCommentMode() {
        this.commentMode = true;
    }

    exitCommentMode() {
        this.commentMode = false;
    }

    clearCommentForm() {
        this.myForm.setValue({
            content: "",
            author: ""
        })
    }

    voteCount(direction: string, comment: blogComment) {
        (!comment.voted) && (comment[direction]+=1) && (comment.vote = comment.voteup - comment.votedown);
        console.log(comment.voteup + "_" + comment.votedown + "_" + comment.vote);
        comment.voted = true;
        comment.voteToolTip = "You have voted already.";
    }

}