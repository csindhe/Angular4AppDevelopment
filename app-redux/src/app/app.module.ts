import { PostListComponent } from './Post/postlist.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostService } from './Services/post.service';
import { AppState } from './Services/appstate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [PostService, AppState],
  bootstrap: [AppComponent]
})
export class AppModule { }
