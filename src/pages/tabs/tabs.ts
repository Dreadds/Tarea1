import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {Tab1Page, Tab2Page, Tab3Page} from "../index.paginas";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;

  constructor() {
    this.tab1 = Tab1Page;
    this.tab2 = Tab2Page;
    this.tab3 = Tab3Page;
  }


}
