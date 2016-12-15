import {Component, OnInit} from '@angular/core';
declare var fabric: any;

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  canvas:any = null;

  addTail(){
    let canvas = this.canvas;

    fabric.Image.fromURL('/assets/img/hair.png', function(oImg) {
      oImg.scale(0.5); //.setFlipX(true);
      canvas.add(oImg.set());
    });
  }

  addMane(){
    let canvas = this.canvas;

    fabric.Image.fromURL('/assets/img/tail.png', function(oImg) {
      oImg.scale(0.5); //.setFlipX(true);
      canvas.add(oImg.set());
    });
  }

  constructor() {
  }

  ngOnInit() {
    let cWidth = 800;
    let cHeight = 400;

    let canvas = new fabric.Canvas('c', {width: cWidth, height: cHeight});

    fabric.Image.fromURL('/assets/img/body.png', function(oImg) {
      oImg.scale(0.5); //.setFlipX(true);
      let width = oImg.getWidth();
      let height = oImg.getHeight();

      canvas.add(oImg.set({
        top: (cHeight - height) / 2,
        left: (cWidth - width) / 2
      }));
    });

    this.canvas = canvas;

  }

}
