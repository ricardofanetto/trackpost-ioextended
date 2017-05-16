import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Visualizar } from './visualizar';

@NgModule({
  declarations: [
    Visualizar,
  ],
  imports: [
    IonicPageModule.forChild(Visualizar),
  ],
  exports: [
    Visualizar
  ]
})
export class VisualizarModule {}
