import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {PlacesServices} from "../../services/places.services";
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private placesSerivces: PlacesServices,
              private navCtrl:NavController,
              private geolocation: Geolocation) {
  }

  onAddPlace(val:{title:string}) {
    this.placesSerivces.addPlace(val);
    this.navCtrl.pop();
  }

  onLocateUser() {
    this.geolocation.getCurrentPosition()
      .then((location) => {
      console.log('Got location')
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
