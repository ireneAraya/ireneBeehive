import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post';
import { Bee } from '../../models/bee';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  @Input() bee;

  @Output() sendPost = new EventEmitter();
  id = 0;
  userID = 11;
  title = 'title';
  body = 'body';

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    let posts = this.bee.getPosts().length;
    this.id = posts + 1;

    let post = new Post(this.id, this.userID, this.title, this.body);
    this.bee.getPosts().push(post);

    this.id = 0;
    this.userID = 11;
    this.title = 'title';
    this.body = 'body';
  }

  onPostTitleChange(event) {
    this.title = event.target.value;
  }

  onPostBody(event) {
    this.body = event.target.value;
  }

}
