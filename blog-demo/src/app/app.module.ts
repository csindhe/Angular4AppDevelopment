import { blogCommentReplyComponent } from './blogCommentReply/blogCommentReply.component';
import { BlogCommentComponent } from './blogComment/blogComment.component';
import { BlogEditComponent } from './blogEdit/blogEdit.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BlogService, blogCommentService } from './service/blog-service';
import { blogListComponent } from './blogList/blogList.component';
import { blogCreateComponent } from './blogCreate/blogCreate.component';


@NgModule({
  declarations: [
    AppComponent,
    blogListComponent,
    BlogEditComponent,
    blogCreateComponent,
    BlogCommentComponent
    //blogCommentReplyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [BlogService, blogCommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
