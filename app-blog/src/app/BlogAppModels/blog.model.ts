export class Blog {
    id: any;
    title: string;
    content: string;
    author: string;
    directedby?: string;
    thumbsUp?: number;
    thumbsDown?: number;

    constructor(title: string, content: string, author: string, 
                directedby?: string, thumbsUp?: number, thumbsDown?: number){
                    this.id = new Date().getTime();
                    this.title = title;
                    this.content = content;
                    this.author = author;
                    this.directedby = directedby;
                    this.thumbsDown = thumbsDown;
                    this.thumbsUp = thumbsUp;
                }
}