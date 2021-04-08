import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from 'src/app/core/events.service';
import { EventModel } from 'src/app/models/event.model';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-CreateEvent',
  templateUrl: './CreateEvent.component.html',
  styleUrls: ['./CreateEvent.component.css']
})
export class CreateEventComponent implements OnInit {

  model = new EventModel();
  errorMessage!: string;

  constructor(private eventsService: EventsService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService) { }

  onSubmit(form: NgForm) {
    this.spinner.show();
    
    if (this.model.isValid() == false) 
    {
      this.notifier.hideAll();

      setTimeout(() => {
        this.spinner.hide();
        this.notifier.notify('error', 'Enter all fields!');
      }, 5000);
    } 
    else 
    {
      this.errorMessage = "";
      this.eventsService.addEvent(this.model);

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        this.notifier.notify('success', 'Success add new event!');
      }, 5000);
      form.resetForm();
    }
  }

  ngOnInit() {
  }
}
