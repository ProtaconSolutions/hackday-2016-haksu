import {Component, OnInit} from '@angular/core';
declare var fabric: any;

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  canvas:any = null;

  constructor() {
  }

  ngOnInit() {
    this.canvas = new fabric.Canvas('c', {
      backgroundColor: 'rgb(100,100,200)',
    });
  }

}
