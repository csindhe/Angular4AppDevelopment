import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { initialBlogList } from '../service/blog.data';
import { Observable } from  'rxjs/Observable';
import { Blog } from '../service/blog.model';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/from';

export class BlogService {
   private blogListSubject: BehaviorSubject<Blog[]> = new BehaviorSubject(initialBlogList);

   getBlogListSubject(): BehaviorSubject<Blog[]> {
       return this.blogListSubject;
   }
}
