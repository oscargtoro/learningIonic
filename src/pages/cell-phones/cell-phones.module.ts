import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CellPhonesPage } from './cell-phones';

@NgModule({
  declarations: [
    CellPhonesPage,
  ],
  imports: [
    IonicPageModule.forChild(CellPhonesPage),
  ],
})
export class CellPhonesPageModule {}
