import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{"Hello "+ says}}</h2>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input('parentData') public says;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Papa kal se pakka padhoonga');
  }

}
