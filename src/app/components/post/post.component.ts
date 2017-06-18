import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

}
