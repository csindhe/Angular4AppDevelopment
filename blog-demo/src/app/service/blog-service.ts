import { initialCommentList } from './blog.data';
import { blogComment } from './blogComment.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { initialBlogList } from '../service/blog.data';
import { Observable } from 'rxjs/Observable';
import { Blog, BlogEdit } from '../service/blog.model';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/from';
import { Subscription } from 'rxjs/Subscription';

export class BlogService {
   private blogListSubject: BehaviorSubject<Blog[]> = new BehaviorSubject(initialBlogList);
   blogCreateCompletion: Subject<Boolean> = new Subject();
   

   getBlogListSubject(): BehaviorSubject<Blog[]> {
       return this.blogListSubject;
   }

   editBlog(data: BlogEdit) {
        let localSubscription: Subscription;
        let currentBlogList: Blog[], updateBlog: Blog, currIndex: number;
        localSubscription = this.blogListSubject.subscribe((iniList) => {
            currentBlogList = iniList;
        });
        updateBlog = currentBlogList.filter((blog, index) => {
            return blog.id === data.id ? (currIndex = index) || true : false;
        }).map((blog) => {
            return {
                id: blog.id,
                title: data.title,
                content: data.content,
                author: data.author,
                thumbsdown: blog.thumbsdown,
                thumbsup: blog.thumbsup,
                voted: blog.voted || false,
                voteToolTip: blog.voteToolTip
            };
        })[0];
        currentBlogList[currIndex] = updateBlog;
        this.blogListSubject.next(currentBlogList);
        localSubscription.unsubscribe();
   }

   createBlog(title: string, content: string, author: string){
        let localSubscription: Subscription;
        let newBlog = new Blog(title, content, author);
        let currentList: Blog[];
        localSubscription = this.blogListSubject.subscribe((List) => { 
            currentList = List;
        });
        currentList.push(newBlog);
        this.blogListSubject.next(currentList);
        this.evalCreationComplete();
        localSubscription.unsubscribe();
   }

   evalCreationComplete() {
       this.blogCreateCompletion.next(true);
   }
   
}

export class blogCommentService {
    iniCommentList: blogComment[] = [];
    blogCommentCompletion: Subject<Boolean> = new Subject();
    private overallCommentListSubject: BehaviorSubject<blogComment[]> = new BehaviorSubject(initialCommentList);

    addCommentBlog(blogId: string, author: string, content: string) {
        let localSubscription: Subscription;
        let currList: blogComment[];
        let newComment: blogComment = new blogComment(blogId, content, author);
        localSubscription = this.overallCommentListSubject.subscribe((List) => {
            currList = List;
        });
        currList.push(newComment);
        this.overallCommentListSubject.next(currList);
        localSubscription.unsubscribe();
    }

    getCommentBlog(blogId: any) {
        let blogCommentListSubject: BehaviorSubject<blogComment[]> = new BehaviorSubject([]);
        let blogComment: blogComment[];
        let blogCommentService: blogComment;
        this.overallCommentListSubject.subscribe((List) => {
            blogComment = List.map((x) => {
                return x; //this.transformComment(x);
            }).filter((blogComm) => {
                return (blogComm.blogId === blogId) ? true : false;
            });
            blogCommentListSubject.next(blogComment);
        });
        return blogCommentListSubject;
    }

    // transformComment(item: blogComment) {
    //     if(item.parentId !== undefined){
    //         item.replyComment.push(item);
    //     }
    //     return item;
    // }

    addReplyCommentBlog(blogId: any, content: string, author: string, parentId: any) {
        let localSubscription: Subscription;
        let currList: blogComment[];
        let currComm: blogComment;
        let newReplyComment: blogComment = new blogComment(blogId, content, author, parentId);
        localSubscription = this.overallCommentListSubject.subscribe((List) => {
            currList = List;
        });
        currList.filter((x) => {
            return (x.blogId === blogId && x.id === parentId) ? true : false;
        }).map((x) => {
            x.replyComment.push(newReplyComment);
        });
        this.overallCommentListSubject.next(currList);
        localSubscription.unsubscribe();
    }
}