export class blogComment {
    id: any;
    parentId?: any;
    blogId: any;
    content: string;
    author: string;
    time: Date;
    voteup?: number;
    votedown?: number;
    voted?: boolean;
    vote?: number;
    voteToolTip?: string;

    constructor(blogId: any, content: string, author: string, parentId?: any) {
        this.blogId = blogId;
        this.content = content;
        this.author = author;
        this.time = new Date();
        this.id = new Date().getTime(); 
        this.voteup = 0;
        this.votedown = 0;
        this.vote = this.voteup - this.votedown;
        this.parentId = parentId;
    }
}