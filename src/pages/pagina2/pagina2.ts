import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  personaje:any ={};
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    console.log(navParams);
    this.personaje = this.navParams.get("personaje");
  }

  irAtras() {
    this.navCtrl.pop();
  }

}
