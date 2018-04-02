import { Injectable } from "@angular/core";
import * as Redux from 'redux';
import { Post } from "./post.model";

@Injectable()
export class AppState {

    private store: Redux.Store<Post[]>;
    appstate: Post[];

    constructor() {
        let initialState: Post[] = [];
        this.store = Redux.createStore(this.appReducer, initialState);
    }

    getCurrentState() {
        return this.store.getState();
    }

    dispatchAction(action) {
        this.store.dispatch(action);
    }

    subscribe(observer) {
        this.store.subscribe(observer);
    }

    appReducer(state, action) {
        switch(action.type){
            case "addPost":
                let nState = state.map((post: Post) => {
                    return post;
                })
                nState.push(action.post);
                return nState;
            default: 
                return state
        }
    }

}