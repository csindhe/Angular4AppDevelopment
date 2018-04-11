import * as Redux from 'redux';
import { Blog, BlogComment } from '../BlogAppModels/blog.model';
import { Injectable } from '@angular/core';
import { rootReducer } from './app.reducer.service';

export interface appState  {
    getallBlogs?: Blog[],
    getActiveBlog?: Blog,
    EditBlog?: Blog,
    newBlog?: Blog,
    getBlogCommments?: BlogComment[],
    newBlogComment?: BlogComment
}

@Injectable()
export class AppState {

    private store: Redux.Store<appState>;

    constructor() {
        this.store = Redux.createStore(rootReducer);
    }

    subscribe(observer) {
        this.store.subscribe(observer);
    }
    
    dispatchAction(action) {
        this.store.dispatch(action);
    }
}