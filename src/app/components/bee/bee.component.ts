import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.css']
})
export class BeeComponent implements OnInit {

  @Input() bee;
  @Output() sendBeeSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onBeeSelected() {
    //console.log('onBeeSelected', this.bee);
    this.sendBeeSelected.emit(this.bee);
  }

}
