import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NotifierModule } from 'angular-notifier';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { CreateEventComponent } from './Components/CreateEvent/CreateEvent.component';
import { EventInfoComponent } from './Components/EventInfo/EventInfo.component';
import { EventItemComponent } from './Components/EventItem/EventItem.component';
import { ListEventsComponent } from './Components/ListEvents/ListEvents.component';
import { NavItemComponent } from './Components/NavItem/NavItem.component';
import { Page404Component } from './Components/Page404/Page404.component';
import { HomeComponent } from './Components/Home/Home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EditEventComponent } from './Components/EditEvent/EditEvent.component';

@NgModule({
  declarations: [
    AppComponent,
    EventItemComponent,
    ListEventsComponent,
    NavItemComponent,
    CreateEventComponent,
    EventInfoComponent,
    Page404Component,
    HomeComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'left',
        },
        vertical: {
          position: 'bottom',
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
