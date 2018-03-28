import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewPlacePage} from "../new-place/new-place";
import {PlacesServices} from "../../services/places.services";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places : {title:string}[] = [];
  constructor(public navCtrl: NavController, private placesServices:PlacesServices) {

  }

  ionViewWillEnter() {
    this.places = this.placesServices.getPlaces();
  }

  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }

}
