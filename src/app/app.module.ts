import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {IonicStorageModule} from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NewPlacePage} from "../pages/new-place/new-place";
import {PlacesServices} from "../services/places.services";
import { Geolocation } from '@ionic-native/geolocation';
import {PlacePage} from "../pages/place/place";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0xTZXcFK5JEfLaxFqWkzozW1CuMQECqE'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler} , PlacesServices,
    Geolocation]
})
export class AppModule {}
