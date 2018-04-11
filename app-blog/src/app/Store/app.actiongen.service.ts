import { HttpClient } from '@angular/common/http';

import { AppState } from './app.store.service';

export class ActionGenerator {

    actionMap = {
        GET_ALL_BLOGS: getAllBlogsGen
    }

    constructor(private http: HttpClient, private AppState: AppState) {

    }

    ActionHandler(actionType: string, componentCallBack, options?){

        this.actionMap[actionType]({
            callback: this.asyncHandler,
            http: this.http
        });
    }

    asyncHandler(action) {
        this.AppState.dispatchAction(action);
    }
}

function getAllBlogsGen(options) {
    let http: HttpClient = options.http;
    http.get("/getAllBlogs").subscribe((data) => {
        options.callback({ type: "GET_ALL_BLOGS", payload: data })
    });
}