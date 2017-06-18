import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { Bee } from '../../models/bee';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() bee;

  constructor() {

  }

  ngOnInit() {
  }

}
