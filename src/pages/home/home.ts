import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {NewPlacePage} from "../new-place/new-place";
import {PlacesServices} from "../../services/places.services";
import {PlacePage} from "../place/place";
import {Place} from "../../model/place.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places : {title:string}[] = [];
  constructor(public navCtrl: NavController,
              private placesServices:PlacesServices,
              private modalController: ModalController) {

  }

  ionViewWillEnter() {
    this.placesServices.getPlaces()
      .then(
        (places)=> this.places = places
      );
  }

  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }

  onOpenPlace(place: Place) {
    this.modalController.create(PlacePage, place).present();
  }

}
