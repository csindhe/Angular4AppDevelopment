import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogModule } from './BlogAppModules/blog.module';
import { BlogCommentsModule } from './BlogAppModules/blogcomment.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BlogModule,
    BlogCommentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
