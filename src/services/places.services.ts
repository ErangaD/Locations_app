export class PlacesServices {
  private places: {title:string}[] = [];

  addPlace(place: {title:string}) {
    this.places.push(place);
  }

  getPlaces() {
    return this.places.slice();
    //brand new array
  }
}
