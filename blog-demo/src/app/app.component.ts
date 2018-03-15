import { BlogService } from './service/blog-service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  createMode: boolean;
  creationComplete: Subject<Boolean>;

  constructor(private blogService: BlogService) {
    
  }

  ngOnInit() {
    this.blogService.blogCreateCompletion.subscribe((x) => {
      if(x){
        this.exitCreateMode();
      }
    });
  }

  initCreateMode() {
    this.createMode = true;
  }

  exitCreateMode() {
    this.createMode = false;
  }
}
