import { Post } from './Services/post.model';
import { Component } from '@angular/core';
import { PostService } from './Services/post.service';
import { AppState } from './Services/appstate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post: Post;
  message: string;
  postId: number = 0;

  constructor(private postService: PostService) {

  }

  addPost() {
    this.post = new Post(this.message, this.postId++);
    // this.post.id = +this.postId;
    // this.post.message = this.message;
    // this.appState.appstate.push(this.post);
    this.postService.addPost(this.post);
  }
}
