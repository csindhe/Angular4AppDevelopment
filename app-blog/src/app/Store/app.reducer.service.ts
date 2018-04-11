import { actions } from './../../../src_raj/src/app/state/actions';
import { Blog, BlogComment } from '../BlogAppModels/blog.model';
import { appState } from './app.store.service';

export function rootReducer(state: appState, action) {
     return {
        getallBlogs: getAllBlogs(state.getallBlogs, action),
        getActiveBlog: getActiveBlog(state.getActiveBlog, action),
        newBlog: postNewBlog(state.newBlog, action),
        editBlog: putActiveBlog(state.EditBlog, action),
        getBlogCommments: getBlogComments(state.getBlogCommments, action),
        newBlogComment: postNewBlogComment(state.newBlogComment, action)
     }
}

function getAllBlogs(state = [], action): Blog[] {
    switch(action.type){
        case actions.getAllBlog:
            return action.payload;
        default: 
            return state;
    }
}

function getActiveBlog(state, action): Blog {
    switch(action.type){
        case actions.getActiveBlog:
            return action.payload;
        default: 
            return state;
    }
}

function postNewBlog(state, action): Blog {
    switch(action.type){
        case actions.postNewBlog:
            return action.payload;
        default:
            return state;
    }
}

function putActiveBlog(state, action): Blog {
    switch(action.type){
        case actions.editBlog:
            return action.payload;
        default:
            return state;
    }
}

function getBlogComments(state= [], action): BlogComment[] {
    switch(action.type){
        case actions.getActiveComments:
            return action.payload;
        default:
            return state;
    }
}

function postNewBlogComment(state, action): BlogComment {
    switch(action.type){
        case actions.postNewComment:
            return action.payload;
        default:
            return state;
    }
}
