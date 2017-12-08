import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PERSONAJES} from "../../data/personajes.data";
import { Personaje} from "../../interfaces/personaje.interface";
import {Pagina2Page} from "../pagina2/pagina2";

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
  pagina2:any = Pagina2Page;
  personajes: Personaje[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personajes = PERSONAJES.slice(0);
  }
  irPagina2(personaje:any){
    console.log(personaje);
    this.navCtrl.push( Pagina2Page, {'personaje': personaje} )
  }

}
