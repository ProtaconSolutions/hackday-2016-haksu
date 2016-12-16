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


  addHorn(){
    let canvas = this.canvas;

    fabric.Image.fromURL('/assets/img/horn.png', function(oImg) {
      oImg.scale(0.5);
      canvas.add(oImg.set());
    });
  }

  addHorn2(){
    let canvas = this.canvas;

    fabric.Image.fromURL('/assets/img/horn2.png', function(oImg) {
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
        if(selectedElements[i].get('type')==="text") {
          selectedElements[i].setColor(color);
        } else {
          selectedElements[i].filters[0] = new filters.Blend({
            color: color
          });
          selectedElements[i].applyFilters(canvas.renderAll.bind(canvas));
        }
      }

      canvas.renderAll();
    }
  }

  addText(text: string) {
    let canvas = this.canvas;
    let oText = new fabric.Text(text, {
      fontFamily: 'Arial'
    });
    canvas.add(oText.set({
      top: 20,
      left: (canvas.width - oText.getWidth()) / 2
    }));
  }

  saveImage() {
    let canvas = this.canvas;
    window.open(this.canvas.toDataURL('png'));
  }

  resetCanvas() {
    let canvas = this.canvas;
    let oImg = canvas.getActiveObject();
    let activeGroup = canvas.getActiveGroup();

    if ((oImg === null || oImg === undefined) && activeGroup === null) {
      alert('Select element(s) to delete!');
    } else if (activeGroup !== null) {
      alert('You can remove only one element at time.');
    } else {

      // Works if only one element is selected, crashes if more elements are selected
      // Works outside angular app
      if(canvas.getActiveGroup()){
        canvas.getActiveGroup().forEachObject(function(o){ canvas.remove(o) });
        canvas.discardActiveGroup().renderAll();
      } else {
        canvas.remove(canvas.getActiveObject());
      }
    }
  }

  initImage() {
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

    return canvas;
  }

  constructor() {
  }

  ngOnInit() {
    this.canvas = this.initImage();
  }
}
