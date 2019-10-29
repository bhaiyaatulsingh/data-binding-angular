import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public message="";

  constructor() { }

  @Output() public eventemitter = new EventEmitter();

  ngOnInit() {
  }
  fire(){
  this.eventemitter.emit(this.message);
  }
}