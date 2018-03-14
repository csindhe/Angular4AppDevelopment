import { Component, OnInit } from "@angular/core";
import { BlogService } from "../service/blog-service";
import { Blog } from "../service/blog.model";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-blogList',
    templateUrl: './blogList.component.html',
    styleUrls: ['./blogList.component.css']
})
export class blogListComponent implements OnInit {
    // listObservable: Observable<Blog[]>;
    blogList: any = [];

    constructor(private blogService: BlogService){

    }

    ngOnInit (){
        // this.listObservable = this.blogService.getBlogListSubject();
        this.blogService.getBlogListSubject().subscribe((x) => {
            this.blogList = x;
        });
    }

    vote(direction: string, blog: Blog) {
        (!blog.voted) && (blog[direction]+=1);
        blog.voted=true;
        blog.voteToolTip="You have casted your vote for this blog already. Can vote only once!";
    }

    editBlog(event, blog){
        
    }

    toggleEditMode(blog: Blog){
        blog.editMode = !blog.editMode;
    }
}