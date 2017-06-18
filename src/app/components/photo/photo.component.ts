import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../models/album';
import { Photo } from '../../models/photo';
import { Bee } from '../../models/bee';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() photo;


  constructor() { }

  ngOnInit() {
  }

}
