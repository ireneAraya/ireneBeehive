import { Component, OnInit, Input } from '@angular/core';
import { Bee } from '../../models/bee';
import { Post } from '../../models/post'

@Component({
  selector: 'app-bee-activity',
  templateUrl: './bee-activity.component.html',
  styleUrls: ['./bee-activity.component.css']
})
export class BeeActivityComponent implements OnInit {

  @Input() bee;

  constructor() {
  }

  ngOnInit() {
  }

}
