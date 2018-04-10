import { Blog, BlogComment } from '../BlogAppModels/blog.model';

export function rootReducer(state, action) {
     
}

function getAllBlogs(state, action) {
    switch(action.type){
        case "GET_ALL_BLOGS":
            let newState = state.map((blogs: Blog[]) => {
                return newState;
            });
    }
}