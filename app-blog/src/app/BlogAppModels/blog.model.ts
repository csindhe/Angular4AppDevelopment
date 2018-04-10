export class Blog {
    id: any;
    title: string;
    content: string;
    author: string;
    time: any;
    thumbsUp: number;
    thumbsDown: number;
    directedby: string;

    constructor(title: string, author: string, content: string,
                thumbsup?: number, thumbsdown?: number, directedby?: string) {
        this.id = new Date().getTime();
        this.title = title;
        this.content = content;
        this.author = author;
        this.thumbsUp = thumbsup;
        this.thumbsDown = thumbsdown;
        this.directedby = directedby;
        this.time = new Date().getTime();
    }
}

export class BlogEdit {
    id: any;
    content: string;
    title: string;
    author: string;
}

export class BlogComment {
    id: any;
    blogId: any;
    parentId: any;
    content: string;
    author: string;
    time: any;

    constructor(blogId: any, content: string, author: string, parentId?: any, ) {
        this.id = new Date().getTime();
        this.blogId = blogId;
        this.parentId = parentId;
        this.content = content;
        this.author = author;
        this.time = new Date().getTime();
    }
}

export const reducerActionMap = {
    "GET_ALL_BLOGS": "getAllBlogs",
    "GET_BLOG_WITH_ID": "getBlogWithId"

}