export class EventModel {
    public title: string;
    public description: string;
    public date: string;
    public image: string;

    constructor(title: string, description: string, date: string, image: string){
        this.title = title;
        this.description = description;
        this.date = date;
        this.image = image;
    }
}
