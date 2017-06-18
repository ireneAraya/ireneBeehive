import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../models/album';
import { Bee } from '../../models/bee';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input() bee;

  constructor() { }

  ngOnInit() {
  }

}
