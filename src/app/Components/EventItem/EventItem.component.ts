import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'EventItem',
  templateUrl: './EventItem.component.html',
  styleUrls: ['./EventItem.component.css']
})
export class EventItemComponent implements OnInit {

  constructor() { }

  @Input() myEvent!: EventModel;
  isPriority: boolean = false;
  isHidden: boolean = false;

  ngOnInit() {

  }

  changePriority(): void {
    this.isPriority = !this.isPriority;
  }

  hideCard(): void {
    this.isHidden = !this.isHidden;
    
  }

}
