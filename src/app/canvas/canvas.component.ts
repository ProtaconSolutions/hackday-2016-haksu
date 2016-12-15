import {Component, OnInit} from '@angular/core';
declare var fabric, window: any;

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
      oImg.scale(0.5);
      canvas.add(oImg.set());
    });
  }

  addMane(){
    let canvas = this.canvas;

    fabric.Image.fromURL('/assets/img/tail.png', function(oImg) {
      oImg.scale(0.5);
      canvas.add(oImg.set());
    });
  }

  addColor(color: string){
    let canvas = this.canvas;
    let oImg = canvas.getActiveObject();

    let activegroup = canvas.getActiveGroup();

    if ((oImg === null || oImg === undefined) && activegroup === null) {
      alert('Select element(s) to colorize!');
    } else {
      let filters = fabric.Image.filters;

      let selectedElements = [];

      if (activegroup === null) {
        selectedElements = [oImg];
      } else {
        selectedElements = activegroup._objects;
      }

      for (let i=0; i<selectedElements.length; i++) {
        selectedElements[i].filters[0] = new filters.Blend({
          color: color
        });
        selectedElements[i].applyFilters(canvas.renderAll.bind(canvas));
      }
    }
  }

  saveImage() {
    let canvas = this.canvas;
    //var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.open(this.canvas.toDataURL('png'));
  }

  constructor() {
  }

  ngOnInit() {
    let cWidth = 800;
    let cHeight = 400;

    let canvas = new fabric.Canvas('c', {
      width: cWidth,
      height: cHeight,
      preserveObjectStacking: true
    });

    fabric.Image.fromURL('/assets/img/body.png', function(oImg) {
      oImg.scale(0.5);
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
