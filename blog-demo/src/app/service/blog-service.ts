import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { initialBlogList } from '../service/blog.data';
import { Observable } from 'rxjs/Observable';
import { Blog, BlogEdit } from '../service/blog.model';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/from';

export class BlogService {
   private blogListSubject: BehaviorSubject<Blog[]> = new BehaviorSubject(initialBlogList);
   blogCreateCompletion: Subject<Boolean> = new Subject();

   getBlogListSubject(): BehaviorSubject<Blog[]> {
       return this.blogListSubject;
   }

   editBlog(data: BlogEdit) {
        let currentBlogList: Blog[], updateBlog: Blog, currIndex: number;
        this.blogListSubject.subscribe((iniList) => {
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
   }

   createBlog(title: string, content: string, author: string){
        let newBlog = new Blog(title, content, author);
        let currentList: Blog[];
        this.blogListSubject.subscribe((List) => { 
            currentList = List;
        });
        currentList.push(newBlog);
        this.blogListSubject.next(currentList);
        this.evalCreationComplete();
   }

   evalCreationComplete() {
       this.blogCreateCompletion.next(true);
   }

   commentBlog() {
       
   }
}
