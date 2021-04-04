import { EventEmitter, Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events: EventModel[] = [
    new EventModel("Andrii Birthday", "...", "01/01/2021", "https://lh3.googleusercontent.com/PYz4clZRNgi1hxwIUvSXkDPM7_D6icY1bFUk_BfjL2RRDnQRVPT9a_mssEjat6aXMxj_gE4Q508l4q6ZOSLtFpA5K4E4dL9Ueyq4J7elV5frhZ0_fciZCuIi0UKk8hpSHvaxPIiRNQzwZ-PmLJHE5tOcuWoQG_eKto3oBeywJtRUs317uuaENROx6W1ZLQ6H3Q6BMkFWMZjYjTsLTDhdzYUdLfZ-hlqade5u89tWhtDcysciqUv6ij5J4L14UFIc8hMPoa0cPWHMfmkYEx6vY7LE5KMLdBof5s6hBNO9XuOLOZ643gsAD7vN0X6l5Y5DOlsVBVdsGjGnPvLeIO549U_Ll8Yd8bYSNeFCt0aGF6VlmtR-IhTZaovfxLEbVc97W4OaUL-3DlPdNEJx-W_aVdDzHXgA5ZzhFeZKaZMLT-DKWxAdXhW8iGO_Pr6fAnmsRGWvi6mBy2dzOZ-H3H5Oiy4Do2p5x4pt5uNGd7CwVdxuI4xRpw9soTkt_MoJeaF6nmHrIyQG3JHYN5T5po4_5gLigTeYuhmZxPiUH4tYr6l7_0IloJ1Fud4ISQMXd8pt7dx3yqUTlmWvTsbKfqqYHoaMjt-TNjwc7bYXobl0HdKWNKN3D5HqkxrrLrnLNoUeSYwFNPG7uftPWrGCNEc-pqRugrFsMnSkGlmZNjvFHRrJLRh029yjTFn_Gyu8zp3SidikrScELWq4QZ14lqBYwYDWRg=w161-h169-no?authuser=0", true),
    new EventModel("Demo project", "...", "26/08/2021","https://lh3.googleusercontent.com/PYz4clZRNgi1hxwIUvSXkDPM7_D6icY1bFUk_BfjL2RRDnQRVPT9a_mssEjat6aXMxj_gE4Q508l4q6ZOSLtFpA5K4E4dL9Ueyq4J7elV5frhZ0_fciZCuIi0UKk8hpSHvaxPIiRNQzwZ-PmLJHE5tOcuWoQG_eKto3oBeywJtRUs317uuaENROx6W1ZLQ6H3Q6BMkFWMZjYjTsLTDhdzYUdLfZ-hlqade5u89tWhtDcysciqUv6ij5J4L14UFIc8hMPoa0cPWHMfmkYEx6vY7LE5KMLdBof5s6hBNO9XuOLOZ643gsAD7vN0X6l5Y5DOlsVBVdsGjGnPvLeIO549U_Ll8Yd8bYSNeFCt0aGF6VlmtR-IhTZaovfxLEbVc97W4OaUL-3DlPdNEJx-W_aVdDzHXgA5ZzhFeZKaZMLT-DKWxAdXhW8iGO_Pr6fAnmsRGWvi6mBy2dzOZ-H3H5Oiy4Do2p5x4pt5uNGd7CwVdxuI4xRpw9soTkt_MoJeaF6nmHrIyQG3JHYN5T5po4_5gLigTeYuhmZxPiUH4tYr6l7_0IloJ1Fud4ISQMXd8pt7dx3yqUTlmWvTsbKfqqYHoaMjt-TNjwc7bYXobl0HdKWNKN3D5HqkxrrLrnLNoUeSYwFNPG7uftPWrGCNEc-pqRugrFsMnSkGlmZNjvFHRrJLRh029yjTFn_Gyu8zp3SidikrScELWq4QZ14lqBYwYDWRg=w161-h169-no?authuser=0", false),
    new EventModel("Work with homework", "...", "23/11/2021","https://lh3.googleusercontent.com/PYz4clZRNgi1hxwIUvSXkDPM7_D6icY1bFUk_BfjL2RRDnQRVPT9a_mssEjat6aXMxj_gE4Q508l4q6ZOSLtFpA5K4E4dL9Ueyq4J7elV5frhZ0_fciZCuIi0UKk8hpSHvaxPIiRNQzwZ-PmLJHE5tOcuWoQG_eKto3oBeywJtRUs317uuaENROx6W1ZLQ6H3Q6BMkFWMZjYjTsLTDhdzYUdLfZ-hlqade5u89tWhtDcysciqUv6ij5J4L14UFIc8hMPoa0cPWHMfmkYEx6vY7LE5KMLdBof5s6hBNO9XuOLOZ643gsAD7vN0X6l5Y5DOlsVBVdsGjGnPvLeIO549U_Ll8Yd8bYSNeFCt0aGF6VlmtR-IhTZaovfxLEbVc97W4OaUL-3DlPdNEJx-W_aVdDzHXgA5ZzhFeZKaZMLT-DKWxAdXhW8iGO_Pr6fAnmsRGWvi6mBy2dzOZ-H3H5Oiy4Do2p5x4pt5uNGd7CwVdxuI4xRpw9soTkt_MoJeaF6nmHrIyQG3JHYN5T5po4_5gLigTeYuhmZxPiUH4tYr6l7_0IloJ1Fud4ISQMXd8pt7dx3yqUTlmWvTsbKfqqYHoaMjt-TNjwc7bYXobl0HdKWNKN3D5HqkxrrLrnLNoUeSYwFNPG7uftPWrGCNEc-pqRugrFsMnSkGlmZNjvFHRrJLRh029yjTFn_Gyu8zp3SidikrScELWq4QZ14lqBYwYDWRg=w161-h169-no?authuser=0", false),
    new EventModel("Study in STEP", "...", "11/05/2021","https://lh3.googleusercontent.com/PYz4clZRNgi1hxwIUvSXkDPM7_D6icY1bFUk_BfjL2RRDnQRVPT9a_mssEjat6aXMxj_gE4Q508l4q6ZOSLtFpA5K4E4dL9Ueyq4J7elV5frhZ0_fciZCuIi0UKk8hpSHvaxPIiRNQzwZ-PmLJHE5tOcuWoQG_eKto3oBeywJtRUs317uuaENROx6W1ZLQ6H3Q6BMkFWMZjYjTsLTDhdzYUdLfZ-hlqade5u89tWhtDcysciqUv6ij5J4L14UFIc8hMPoa0cPWHMfmkYEx6vY7LE5KMLdBof5s6hBNO9XuOLOZ643gsAD7vN0X6l5Y5DOlsVBVdsGjGnPvLeIO549U_Ll8Yd8bYSNeFCt0aGF6VlmtR-IhTZaovfxLEbVc97W4OaUL-3DlPdNEJx-W_aVdDzHXgA5ZzhFeZKaZMLT-DKWxAdXhW8iGO_Pr6fAnmsRGWvi6mBy2dzOZ-H3H5Oiy4Do2p5x4pt5uNGd7CwVdxuI4xRpw9soTkt_MoJeaF6nmHrIyQG3JHYN5T5po4_5gLigTeYuhmZxPiUH4tYr6l7_0IloJ1Fud4ISQMXd8pt7dx3yqUTlmWvTsbKfqqYHoaMjt-TNjwc7bYXobl0HdKWNKN3D5HqkxrrLrnLNoUeSYwFNPG7uftPWrGCNEc-pqRugrFsMnSkGlmZNjvFHRrJLRh029yjTFn_Gyu8zp3SidikrScELWq4QZ14lqBYwYDWRg=w161-h169-no?authuser=0", false),
   ]

  changeEvents = new EventEmitter<boolean>();


  getEvents(): EventModel[] {
    return this.events;
  }
 
  changeIsHidden(id:string): void {
    const index = this.events.findIndex(item => item.id === id);
    this.events[index].isHidden=!this.events[index].isHidden;
    console.log(this.events);
    this.changeEvents.emit(true);
  }


  changeIsPriority(id:string): void {
    const index = this.events.findIndex(item => item.id === id);
    this.events[index].isPriority=!this.events[index].isPriority;
    console.log(this.events);
    this.changeEvents.emit(true);
  }

  getVisibleEvents():EventModel[]{
    return  this.events.filter( (obj) => {
       return obj.isHidden===false;
     });
   }

   getHiddenEvents():EventModel[]{
    return  this.events.filter( (obj) => {
       return obj.isHidden===true;
     });
   }

  constructor() { }
}
