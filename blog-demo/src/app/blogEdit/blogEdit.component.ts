import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog-service';

@Component({
    selector: 'app-blogedit',
    templateUrl: './blogEdit.component.html',
    styleUrls: ['./blogEdit.component.css']
})
export class BlogEditComponent implements OnInit{

    constructor(private blogService: BlogService) {
        
    }

    ngOnInit (){

    }
}