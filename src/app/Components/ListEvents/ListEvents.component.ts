import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/events.service';
import { EventModel } from 'src/app/models/event.model'

@Component({
  selector: 'ListEvents',
  templateUrl: './ListEvents.component.html',
  styleUrls: ['./ListEvents.component.css']
})
export class ListEventsComponent implements OnInit {

  constructor(private eventService: EventsService) { }

  eventsList!:EventModel[];

  ngOnInit() {
    this.eventsList = this.eventService.getEvents();
    console.log("Event list component");
  }

}
