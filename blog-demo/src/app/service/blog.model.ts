export class Blog {
    id: any;
    title: string;
    content: string;
    author: string;
    thumbsup: number;
    thumbsdown: number;
    editMode?: boolean;
    commentMode?: boolean;
    voted?: boolean;
    voteToolTip?: string;

    constructor(title: string, content: string, author: string) {
        this.title = title;
        this.author = author;
        this.content = content;
        this.id = new Date().getTime();
        this.thumbsdown = 0;
        this.thumbsup = 0;
    }

}

export class BlogEdit {
    id: any;
    title: string;
    content: string;
    author: string;
}

