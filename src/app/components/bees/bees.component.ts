import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bee } from '../../models/bee';

@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {

  title: string = "Bees";

  @Input() bees;
  @Output() sendBeeSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  reveicedBeeSelected(bee: Bee) {
    this.sendBeeSelected.emit(bee);
  }

}
