export class blogComment {
    id: any;
    blogId: any;
    content: string;
    author: string;
    time: Date;

    constructor(content: string, author: string) {
        this.content = content;
        this.author = author;
        this.time = new Date();
        this.id = new Date().getTime();
    }
}