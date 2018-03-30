import {Storage} from '@ionic/storage';
import {Injectable} from "@angular/core";

@Injectable()
export class PlacesServices {
  private places: {title:string,location:{lat:number, lng:number}}[] = [];

  constructor(private storage:Storage){

  }

  addPlace(place: {title:string, location:{lat:number, lng:number}}) {
    this.places.push(place);
    this.storage.set('places', this.places);
  }

  getPlaces() {
    return this.storage.get('places')
      .then(
        (places) => {
          this.places = places == null ? []: places;
          return this.places.slice();
        }
      );

    //brand new array
  }
}
