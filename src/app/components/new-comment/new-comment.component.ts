import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post';
import { Comment } from '../../models/comment';
import { Bee } from '../../models/bee';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Input() post;

  @Output() sendComment = new EventEmitter();
  id = 0;
  postID = 0;
  name = 'name';
  body = 'body';
  email = 'email';

  constructor() { }

  ngOnInit() {
  }

  onAddComment() {
    let comments = this.post.getComments().length;
    this.id = comments + 1;

    this.postID = this.post.getId();

    let comment = new Comment(this.id, this.postID, this.name, this.body, this.email);
    this.post.getComments().push(comment);
    console.log(comment);
    console.log(this.post.getComments());

    this.id = 0;
    this.postID = 0;
    this.name = 'name';
    this.body = 'body';
    this.email = 'email'
  }

  onCommentNameChange(event) {
    this.name = event.target.value;
  }

  onCommentBodyChange(event) {
    this.body = event.target.value;
  }

  onCommentEmailChange(event) {
    this.email = event.target.value;
  }

}
