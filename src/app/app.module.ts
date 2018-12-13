import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsApp } from './events-app.component';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './shared/event.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './create-event/create-event.component';
import { ErrorNotFoundComponent } from './error/error-not-found/error-not-found.component';
import { EventRouteActivatorService } from './event-details/event-route-activator.service';
import { EventListResolverService } from './event-list-resolver.service';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    EventsApp,
    EventComponent,
    EventListComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolverService,
    AuthService
  ],
  bootstrap: [EventsApp]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('you want to leave without saving?');
  }
  return true;
}

