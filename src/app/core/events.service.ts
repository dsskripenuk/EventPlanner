import { EventEmitter, Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events: EventModel[] = [
    new EventModel("Andrii Birthday", "...", "01/01/2021", "https://lh3.googleusercontent.com/1F-jcQc8sZ9nTJhIcLvKhyZw3sKozVnDXK2vE9AeYT_PcReujeDDf0OJFCmJwMuW91pDnjZ-24p3IXjs9N9ABQ8eYAW4JC8qgmPT_lUq-wdxLLIGrBvHbmIE_OrLbPWEvEAc5XS8xi5MeUb4h57pH22pezs8mW7zl5KcJsuhfsdB8gY_qsK-Ouv2LihgOUFdn_FTz_oQNDQN9SKCBpf0a1nxMJB9hAinAzDfh2JyQdqMfsdGAXi5eC6UhNRr34-YqMB3dC8LWru_MnakpuuAYWzjk4l-MLhQRQdWUWXosafK_IQWm5cCrT5xJr5YctgKJVQSeaf9QzJwODVdvhUpFSyTUbS8cKL9OlNmCRc9Kz5H7D34epX1JH11e5sh7nxUrUNDT47DLaMQKvlp7om5UYW4W-CVUyhgosTnmfrJNKCrGUpKI5nZR9MI7CeuFop7pf8Tb04FaLH7c26j_rx6MUzW0i5-6RAZZ-C9GEyD7qqACMJzE6Px_861c0m9jXN26sIz8jJngs_mxtkelaC26nDZQdIWX-JugJVIuRri3Md8yegDgwnLecRsySnzrneerdV0NgpvP3XbanUt_Zq6nDgjImhdQQ9ISfssvrugltYZR9Epx1ieM62rBKITKk-aBJpsQ2gyuL9pFbBZwsH1Y3T-uONdH1FmzgL5Ji296hC69yEOCE7TJtzsYIJSKYQAd52mO-XuPdvcN7Brkp4iuz_Wmw=w800-h799-no?authuser=0", true),
    new EventModel("Demo project", "...", "26/08/2021", "https://lh3.googleusercontent.com/1F-jcQc8sZ9nTJhIcLvKhyZw3sKozVnDXK2vE9AeYT_PcReujeDDf0OJFCmJwMuW91pDnjZ-24p3IXjs9N9ABQ8eYAW4JC8qgmPT_lUq-wdxLLIGrBvHbmIE_OrLbPWEvEAc5XS8xi5MeUb4h57pH22pezs8mW7zl5KcJsuhfsdB8gY_qsK-Ouv2LihgOUFdn_FTz_oQNDQN9SKCBpf0a1nxMJB9hAinAzDfh2JyQdqMfsdGAXi5eC6UhNRr34-YqMB3dC8LWru_MnakpuuAYWzjk4l-MLhQRQdWUWXosafK_IQWm5cCrT5xJr5YctgKJVQSeaf9QzJwODVdvhUpFSyTUbS8cKL9OlNmCRc9Kz5H7D34epX1JH11e5sh7nxUrUNDT47DLaMQKvlp7om5UYW4W-CVUyhgosTnmfrJNKCrGUpKI5nZR9MI7CeuFop7pf8Tb04FaLH7c26j_rx6MUzW0i5-6RAZZ-C9GEyD7qqACMJzE6Px_861c0m9jXN26sIz8jJngs_mxtkelaC26nDZQdIWX-JugJVIuRri3Md8yegDgwnLecRsySnzrneerdV0NgpvP3XbanUt_Zq6nDgjImhdQQ9ISfssvrugltYZR9Epx1ieM62rBKITKk-aBJpsQ2gyuL9pFbBZwsH1Y3T-uONdH1FmzgL5Ji296hC69yEOCE7TJtzsYIJSKYQAd52mO-XuPdvcN7Brkp4iuz_Wmw=w800-h799-no?authuser=0", false),
    new EventModel("Work with homework", "...", "23/11/2021", "https://lh3.googleusercontent.com/1F-jcQc8sZ9nTJhIcLvKhyZw3sKozVnDXK2vE9AeYT_PcReujeDDf0OJFCmJwMuW91pDnjZ-24p3IXjs9N9ABQ8eYAW4JC8qgmPT_lUq-wdxLLIGrBvHbmIE_OrLbPWEvEAc5XS8xi5MeUb4h57pH22pezs8mW7zl5KcJsuhfsdB8gY_qsK-Ouv2LihgOUFdn_FTz_oQNDQN9SKCBpf0a1nxMJB9hAinAzDfh2JyQdqMfsdGAXi5eC6UhNRr34-YqMB3dC8LWru_MnakpuuAYWzjk4l-MLhQRQdWUWXosafK_IQWm5cCrT5xJr5YctgKJVQSeaf9QzJwODVdvhUpFSyTUbS8cKL9OlNmCRc9Kz5H7D34epX1JH11e5sh7nxUrUNDT47DLaMQKvlp7om5UYW4W-CVUyhgosTnmfrJNKCrGUpKI5nZR9MI7CeuFop7pf8Tb04FaLH7c26j_rx6MUzW0i5-6RAZZ-C9GEyD7qqACMJzE6Px_861c0m9jXN26sIz8jJngs_mxtkelaC26nDZQdIWX-JugJVIuRri3Md8yegDgwnLecRsySnzrneerdV0NgpvP3XbanUt_Zq6nDgjImhdQQ9ISfssvrugltYZR9Epx1ieM62rBKITKk-aBJpsQ2gyuL9pFbBZwsH1Y3T-uONdH1FmzgL5Ji296hC69yEOCE7TJtzsYIJSKYQAd52mO-XuPdvcN7Brkp4iuz_Wmw=w800-h799-no?authuser=0", false),
    new EventModel("Study in STEP", "...", "11/05/2021", "https://lh3.googleusercontent.com/1F-jcQc8sZ9nTJhIcLvKhyZw3sKozVnDXK2vE9AeYT_PcReujeDDf0OJFCmJwMuW91pDnjZ-24p3IXjs9N9ABQ8eYAW4JC8qgmPT_lUq-wdxLLIGrBvHbmIE_OrLbPWEvEAc5XS8xi5MeUb4h57pH22pezs8mW7zl5KcJsuhfsdB8gY_qsK-Ouv2LihgOUFdn_FTz_oQNDQN9SKCBpf0a1nxMJB9hAinAzDfh2JyQdqMfsdGAXi5eC6UhNRr34-YqMB3dC8LWru_MnakpuuAYWzjk4l-MLhQRQdWUWXosafK_IQWm5cCrT5xJr5YctgKJVQSeaf9QzJwODVdvhUpFSyTUbS8cKL9OlNmCRc9Kz5H7D34epX1JH11e5sh7nxUrUNDT47DLaMQKvlp7om5UYW4W-CVUyhgosTnmfrJNKCrGUpKI5nZR9MI7CeuFop7pf8Tb04FaLH7c26j_rx6MUzW0i5-6RAZZ-C9GEyD7qqACMJzE6Px_861c0m9jXN26sIz8jJngs_mxtkelaC26nDZQdIWX-JugJVIuRri3Md8yegDgwnLecRsySnzrneerdV0NgpvP3XbanUt_Zq6nDgjImhdQQ9ISfssvrugltYZR9Epx1ieM62rBKITKk-aBJpsQ2gyuL9pFbBZwsH1Y3T-uONdH1FmzgL5Ji296hC69yEOCE7TJtzsYIJSKYQAd52mO-XuPdvcN7Brkp4iuz_Wmw=w800-h799-no?authuser=0", false),
  ]

  changeEvents = new EventEmitter<boolean>();

  addEvent(model: EventModel) {
    this.events.push(new EventModel(model.title, model.description, model.date, model.image, false));
    this.changeEvents.emit(true);
    console.log("Success added new event!")
  }

  getEvents(): EventModel[] {
    return this.events;
  }

  changeIsHidden(id: string): void {
    const index = this.events.findIndex(item => item.id === id);
    this.events[index].isHidden = !this.events[index].isHidden;
    console.log(this.events);
    this.changeEvents.emit(true);
  }

  changeIsPriority(id: string): void {
    const index = this.events.findIndex(item => item.id === id);
    this.events[index].isPriority = !this.events[index].isPriority;
    console.log(this.events);
    this.changeEvents.emit(true);
  }

  getVisibleEvents(): EventModel[] {
    return this.events.filter((obj) => {
      return obj.isHidden === false;
    });
  }

  getHiddenEvents(): EventModel[] {
    return this.events.filter((obj) => {
      return obj.isHidden === true;
    });
  }

  getEventById(id:string): EventModel{
    return this.events.find(x => x.id == id);
  }

  updateEvent(model: EventModel): EventModel {
    const index = this.events.findIndex(item => item.id === model.id);
    this.events[index] = model;
    console.log('updating event: ', model);
    this.changeEvents.emit(true);
    return model;
  }

  constructor() { }
}
