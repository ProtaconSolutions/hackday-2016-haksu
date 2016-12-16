import {Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  outputs: ['addTailEvent', 'addManeEvent', 'addHornEvent',  'addHorn2Event', 'addColorEvent', 'addTextEvent', 'saveImageEvent', 'resetCanvasEvent'],
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  addTailEvent: EventEmitter<string>;
  addManeEvent: EventEmitter<string>;
  addHornEvent: EventEmitter<string>;
  addHorn2Event: EventEmitter<string>;
  addColorEvent: EventEmitter<string>;
  addTextEvent: EventEmitter<string>;
  saveImageEvent : EventEmitter<string>;
  resetCanvasEvent : EventEmitter<string>;

  color: string;
  text: string;

  constructor() {
    this.addTailEvent = new EventEmitter();
    this.addManeEvent = new EventEmitter();
    this.addHornEvent = new EventEmitter();
    this.addHorn2Event = new EventEmitter();
    this.addColorEvent = new EventEmitter();
    this.addTextEvent = new EventEmitter();
    this.saveImageEvent = new EventEmitter();
    this.resetCanvasEvent = new EventEmitter();
  }

  addTail(){
    this.addTailEvent.emit();
  }

  addMane(){
    this.addManeEvent.emit();
  }

  addHorn(){
    this.addHornEvent.emit();
  }

  addHorn2(){
    this.addHorn2Event.emit();
  }

  addColor(){
    this.addColorEvent.emit(this.color);
  }

  addText(){
    this.addTextEvent.emit(this.text);
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
