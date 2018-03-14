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
    listObservable: Observable<Blog[]>;
    blogList: any = [];

    constructor(private blogService: BlogService){

    }

    ngOnInit (){
        // this.listObservable = this.blogService.getBlogListSubject();
        this.blogService.getBlogListSubject().subscribe((x) => {
            this.blogList.push(x);
            console.log(this.blogList);
        });
    }
}