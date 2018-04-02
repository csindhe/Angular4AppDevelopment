export class Post {
    message: string;
    id?: number;

    constructor(message, id) {
        this.id = id;
        this.message = message;
    }
}