import {Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  outputs: ['addTailEvent', 'addManeEvent', 'saveImageEvent', 'resetCanvasEvent'],
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  addTailEvent: EventEmitter<string>;
  addManeEvent: EventEmitter<string>;
  saveImageEvent : EventEmitter<string>;
  resetCanvasEvent : EventEmitter<string>;

  constructor() {
    this.addTailEvent = new EventEmitter();
    this.addManeEvent = new EventEmitter();
    this.saveImageEvent = new EventEmitter();
    this.resetCanvasEvent = new EventEmitter();
  }

  addTail(){
    this.addTailEvent.emit();
  }

  addMane(){
    this.addManeEvent.emit();
  }

  saveImage() {
    this.saveImageEvent.emit();
  }

  resetCanvas() {
    this.resetCanvasEvent.emit();
  }

  ngOnInit() {
  }

}
