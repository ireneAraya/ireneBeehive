import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { BeesComponent } from '../app/components/bees/bees.component';
import { BeeActivityComponent } from '../app/components/bee-activity/bee-activity.component';
import { TodosComponent } from '../app/components/todos/todos.component';
import { TodoComponent } from '../app/components/todo/todo.component';
import { AlbumComponent } from '../app/components/album/album.component';
import { PhotoComponent } from '../app/components/photo/photo.component';
import { PostsComponent } from '../app/components/posts/posts.component';
import { PostComponent } from '../app/components/post/post.component';
import { CommentComponent } from '../app/components/comment/comment.component';
import { BeeComponent } from '../app/components/bee/bee.component';
import { NewPostComponent } from '../app/components/new-post/new-post.component';
import { NewCommentComponent } from '../app/components/new-comment/new-comment.component';
import { NewTodoComponent } from '../app/components/new-todo/new-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeesComponent,
    BeeActivityComponent,
    TodosComponent,
    TodoComponent,
    AlbumComponent,
    PhotoComponent,
    PostsComponent,
    PostComponent,
    CommentComponent,
    BeeComponent,
    NewPostComponent,
    NewCommentComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
