import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/events.service';
import { EventModel } from 'src/app/models/event.model'

@Component({
  selector: 'ListEvents',
  templateUrl: './ListEvents.component.html',
  styleUrls: ['./ListEvents.component.css']
})
export class ListEventsComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  eventsList!:EventModel[];
  visibleEventsList!:EventModel[];
  hiddenEventsList!:EventModel[];

  ngOnInit() {
    this.eventsList = this.eventsService.getEvents();
    this.visibleEventsList=this.eventsService.getVisibleEvents();
    this.hiddenEventsList=this.eventsService.getHiddenEvents();

    this.eventsService.changeEvents.subscribe(data => {
      this.eventsList=this.eventsService.getEvents();
      this.visibleEventsList=this.eventsService.getVisibleEvents();
      this.hiddenEventsList=this.eventsService.getHiddenEvents();
    })

    console.log(this.eventsList)
  }

}
