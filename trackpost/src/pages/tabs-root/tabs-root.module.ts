import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsRoot } from './tabs-root';

@NgModule({
  declarations: [
    TabsRoot,
  ],
  imports: [
    IonicPageModule.forChild(TabsRoot),
  ],
  exports: [
    TabsRoot
  ]
})
export class TabsRootModule {}
