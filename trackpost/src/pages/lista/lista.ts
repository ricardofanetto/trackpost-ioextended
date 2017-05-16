import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class Lista {
  tracks: any = [];
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
    this.populateData();
  }

  private populateData() {
    this.tracks = [];
    this.storage.ready().then(() => {
      let loading = this.loadingCtrl.create({ content: 'Carregando lista...' });
      loading.present();
      this.storage.keys().then(allkeys => {
        allkeys.forEach(key => {
          this.storage.get(key).then(row => {
            this.tracks.push(JSON.parse(row));
          });
        });
        loading.dismiss();
      });
    });
  }

  public remove(code) {
    let confirm = this.alertCtrl.create({
      title: 'Exluir?',
      message: 'Deseja realmente excluir o código de rastreio?',
      buttons: [
        {
          text: 'Não',
          handler: () => { }
        },
        {
          text: 'Sim',
          handler: () => {
            this.storage.remove(code).then(() => { });
            this.populateData();
          }
        }
      ]
    });
    confirm.present();
  }

  public newCode() {
    let prompt = this.alertCtrl.create({
      title: 'Novo rastreamento',
      inputs: [
        {
          name: 'title',
          placeholder: 'Nome'
        },
        {
          name: 'code',
          placeholder: 'Código'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => { }
        },
        {
          text: 'Salvar',
          handler: data => {
            this.storage.set(data.code, JSON.stringify(data));
            this.populateData();
          }
        }
      ]
    });
    prompt.present();
  }

  public visualizar(item) {
    this.navCtrl.push('Visualizar', { track: item });
  }

}
// this.tracks.push({ code: 'OC093948863BR', title: 'Meu rastreio' });
// this.tracks.push({ code: 'PN958651234BR', title: 'Meu rastreio 2' });