import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlogListComponent } from './BlogList/bloglist.component';
import { BlogPageComponent } from './BlogPage/blogpage.component';
import { BlogEditComponent } from './BlogEdit/blogedit.component';
import { BlogAddComponent } from './BlogAdd/blogadd.component';
import { BlogDetailResolver } from './BlogServices/blog-detail-resolver.service';

const blogRoutes: Routes = [
    {
        path: "", redirectTo: "blogList", pathMatch: 'full'
    },
    {
        path: "blogList", component: BlogListComponent, children: [
            {
                path: "blog/:id", 
                component: BlogPageComponent, 
                resolve: {blog: BlogDetailResolver}
            },
            {
                path: "editBlog/:id", component: BlogEditComponent, resolve: {blog: BlogDetailResolver}
            }
        ]
    },
    {
        path: "newBlog", component: BlogAddComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(blogRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BlogAppRoutingModule { }