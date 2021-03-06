
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    console.log(this.eventService.getEvent(route.params['id']));
    const eventExits = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExits) {
      this.router.navigate(['/404']);
    }

    return eventExits;
  }

}
