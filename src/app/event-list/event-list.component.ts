import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { EventListResolverService } from '../event-list-resolver.service';
import { ActivatedRoute } from '@angular/router';
declare let toastr;

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any;
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // this.eventService.getEvents().subscribe(events => {
    //   this.events = events;

    // });
    this.events = this.route.snapshot.data['events'];
  }

  OnClick(what: string) {
    console.log(what);
  }

  handleClick(data: string) {
    toastr.success(data);
  }
}
