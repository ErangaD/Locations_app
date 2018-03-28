import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {PlacesServices} from "../../services/places.services";

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private placesSerivces: PlacesServices, private navCtrl:NavController) {
  }

  onAddPlace(val:{title:string}) {
    this.placesSerivces.addPlace(val);
    this.navCtrl.pop();
  }

}
