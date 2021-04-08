import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './Components/CreateEvent/CreateEvent.component';
import { EditEventComponent } from './Components/EditEvent/EditEvent.component';
import { EventInfoComponent } from './Components/EventInfo/EventInfo.component';
import { HomeComponent } from './Components/Home/Home.component';
import { ListEventsComponent } from './Components/ListEvents/ListEvents.component';
import { Page404Component } from './Components/Page404/Page404.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent, pathMatch:'full'},
  {path:'events', component: ListEventsComponent, pathMatch:'full'},
  {path:'addEvent', component: CreateEventComponent, pathMatch:'full'}, 
  {path:'event/:id', component: EventInfoComponent},
  {path:'editEvent/:id', component: EditEventComponent},
  {path:'**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

