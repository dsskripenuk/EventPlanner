import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './Components/CreateEvent/CreateEvent.component';
import { EventInfoComponent } from './Components/EventInfo/EventInfo.component';
import { EventItemComponent } from './Components/EventItem/EventItem.component';
import { ListEventsComponent } from './Components/ListEvents/ListEvents.component';
import { NavItemComponent } from './Components/NavItem/NavItem.component';

@NgModule({
  declarations: [
    AppComponent,
    EventItemComponent,
    ListEventsComponent,
    NavItemComponent,
    CreateEventComponent,
    EventInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
