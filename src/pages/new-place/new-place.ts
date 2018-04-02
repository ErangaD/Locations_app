import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {PlacesServices} from "../../services/places.services";
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  location: {lat:number, lng:number} = {lat:0, lng:0};

  constructor(private placesSerivces: PlacesServices,
              private navCtrl:NavController,
              private geolocation: Geolocation) {
  }

  onAddPlace(value:{title:string}) {
    this.placesSerivces.addPlace({
      title: value.title,
      location: this.location}
      );
    this.navCtrl.pop();
  }

  onLocateUser() {
    this.geolocation.getCurrentPosition()
      .then((location) => {
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
