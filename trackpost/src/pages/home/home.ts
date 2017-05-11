import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewCodePage } from "../new-code/new-code";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tracks: any = [];
  constructor(public navCtrl: NavController) {
    this.populateData();
  }
  private populateData() {
    this.tracks.push({ code: 'OC093948863BR', title: 'Meu rastreio' });
    this.tracks.push({ code: 'PN958651234BR', title: 'Meu rastreio 2' });
  }

  public newCode() {
    this.navCtrl.push(NewCodePage, {});
  }
}
