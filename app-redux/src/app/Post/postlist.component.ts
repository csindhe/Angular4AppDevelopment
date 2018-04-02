import { PostService } from './../Services/post.service';
import { Post } from './../Services/post.model';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'app-postlist',
    template: `
        <div *ngFor="let post of posts | async" class="container">
            <p>{{ post.message }}</p>
        </div>
    `
})
export class PostListComponent implements OnInit {
    posts: Observable<Post[]>;
    plainposts: Post[];

    constructor(private postService: PostService) {

    }

    ngOnInit() {
        // this.postService.getPostObservable().subscribe((posts: Post[]) => {
        //     this.posts = posts;
        // });
        this.posts = this.postService.getPostObservable();
    }
}