import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { AppState } from './appstate.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PostService {
    postObservable: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>(null);
    constructor(private appState: AppState) {
        this.appState.subscribe((posts: Post[]) => {
            let state = this.appState.getCurrentState();
            this.postObservable.next(state);
        })
    }

    getPostObservable() {
        return this.postObservable;
    }

    addPost(post: Post) {
        this.appState.dispatchAction({ type: 'addPost', post: post });
    }

}

