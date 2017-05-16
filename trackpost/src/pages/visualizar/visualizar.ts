import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-visualizar',
  templateUrl: 'visualizar.html',
})
export class Visualizar {
  rastreio: any = [];
  track: any = {};
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private http: Http,
    private loadingCtrl: LoadingController) {

    this.track = this.navParams.get('track');
    this.checkRastreio(this.track);

  }

  private checkRastreio(track) {
    let carregando = this.loadingCtrl.create({ content: 'Consultando dados...' });
    carregando.present();
    this.http.get(`http://api.postmon.com.br/v1/rastreio/ect/${track.code}`)
      .map(res => res.json())
      .subscribe(data => {
        this.rastreio = data.historico.reverse();
        carregando.dismiss();
      }, err => {
        console.log('Erro', err);
        carregando.dismiss();
      });
  }

}
