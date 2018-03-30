import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  lat:number;
  lng:number;

  constructor(private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

}
