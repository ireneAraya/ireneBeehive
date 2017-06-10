import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {

  title: string = "Bees";

  @Input() bees;

  constructor() { }

  ngOnInit() {
  }

}