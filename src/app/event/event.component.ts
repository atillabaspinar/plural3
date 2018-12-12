import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input('event') event;
  @Output() buttonClickEvent = new EventEmitter();

  someProperty = 'my property';

  constructor() { }

  ngOnInit() {
  }

  handleClick(data: string) {
    this.buttonClickEvent.emit(data);
  }

}
