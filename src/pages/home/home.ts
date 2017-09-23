import { MyStashPage } from './../my-stash/my-stash';
import { CapturePage } from './../capture/capture';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  pushbutton(){
    this.navCtrl.push(CapturePage);
  }
  stashbutton(){
    this.navCtrl.push(MyStashPage);
  }

}
