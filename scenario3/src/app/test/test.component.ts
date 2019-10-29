import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
    <h2>{{"Parent says: " + parentData}}</h2> <!--This line displays the input from parent class-->
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData;
      //@Input() is a way to inform test component that this is an input property and it will reecieve it from parent

  constructor() { }

  ngOnInit() {
  }

}
