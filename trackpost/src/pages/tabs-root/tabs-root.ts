import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs-root',
  templateUrl: 'tabs-root.html',
})
export class TabsRoot {

  tab1Root = 'Lista';
  tab2Root = 'Sobre';

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

}
