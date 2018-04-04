import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogListComponent } from '../BlogList/bloglist.component';
import { BlogPageComponent } from '../BlogPage/blogpage.component';
import { BlogEditComponent } from '../BlogEdit/blogedit.component';
import { BlogAddComponent } from '../BlogAdd/blogadd.component';
import { BlogAppRoutingModule } from '../blogApp-routing.module';
import { BlogDetailResolver } from '../BlogServices/blog-detail-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BlogAppRoutingModule
    ],
    declarations: [
        BlogListComponent,
        BlogPageComponent,
        BlogEditComponent,
        BlogAddComponent
    ],
    providers: [
        BlogDetailResolver
    ]
})

export class BlogModule { }