import { Routes } from '@angular/router';
import { EventListComponent } from "./event-list/event-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { CreateEventComponent } from './create-event/create-event.component';
import { ErrorNotFoundComponent } from './error/error-not-found/error-not-found.component';
import { EventRouteActivatorService } from './event-details/event-route-activator.service';
import { EventListResolverService } from './event-list-resolver.service';

export const appRoutes: Routes = [
    { path: 'events', component: EventListComponent, resolve: { events: EventListResolverService } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: ErrorNotFoundComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
];
