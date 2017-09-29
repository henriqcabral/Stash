import { MyStashPage } from './../my-stash/my-stash';
import { CapturePage } from './../capture/capture';
import { SearchPage } from './../search/search';
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
  searchbutton(){
    this.navCtrl.push(SearchPage);
  }

}
