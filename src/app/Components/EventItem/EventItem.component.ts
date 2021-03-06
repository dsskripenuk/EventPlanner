import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from 'src/app/core/events.service';

@Component({
  selector: 'EventItem',
  templateUrl: './EventItem.component.html',
  styleUrls: ['./EventItem.component.css']
})
export class EventItemComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  @Input() myEvent!: EventModel;
  isPriority: boolean = false;
  isHidden: boolean = false;
  modalVis: boolean = false;

  ngOnInit() {

  }

  changePriority(): void {
    // this.myEvent.isPriority != this.myEvent.isPriority;
    this.eventsService.changeIsPriority(this.myEvent.id)
    // this.isPriority = !this.isPriority;
  }

  modal():void{
    this.modalVis=true;
  }

  changeIsHidden(): void{
    this.eventsService.changeIsHidden(this.myEvent.id);
  }

}
