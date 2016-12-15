import {Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  outputs: ['addTailEvent', 'addManeEvent', 'addHornEvent', 'addColorEvent', 'saveImageEvent'],
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  addTailEvent: EventEmitter<string>;
  addManeEvent: EventEmitter<string>;
  addHornEvent: EventEmitter<string>;
  addColorEvent: EventEmitter<string>;
  saveImageEvent : EventEmitter<string>;

  color: string;

  constructor() {
    this.addTailEvent = new EventEmitter();
    this.addManeEvent = new EventEmitter();
    this.addHornEvent = new EventEmitter();
    this.addColorEvent = new EventEmitter();
    this.saveImageEvent = new EventEmitter();
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

  addColor(){
    this.addColorEvent.emit(this.color);
  }
  
  saveImage() {
    this.saveImageEvent.emit();
  }

  ngOnInit() {
  }

}
