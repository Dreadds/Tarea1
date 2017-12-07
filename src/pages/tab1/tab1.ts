import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PERSONAJES} from "../../data/personajes.data";
import { Personaje} from "../../interfaces/personaje.interface";

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  personajes: Personaje[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personajes = PERSONAJES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

}
