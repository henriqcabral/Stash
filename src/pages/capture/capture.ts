import { MyStashPage } from './../my-stash/my-stash';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from "@ionic-native/barcode-scanner";
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-capture',
  templateUrl: 'capture.html',
})
export class CapturePage {
  qrdata;
  hours:number=0;
  price:number=0;
  displayform:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private qrscanner:BarcodeScanner, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.scanqr();
  }
async scanqr(){
 const result = await this.qrscanner.scan().then(data=>{
 this.qrdata=data;
 if(this.qrdata.text=="Helloworld" ){
this.displayform=true;
 }
if(this.qrdata.cancelled==true || this.qrdata.text !="Helloworld"){
this.showConfirm();
}

 });
console.log(this.qrdata);
}

addValue(){
this.hours +=1;
this.price +=20;
}
showConfirm() {
  let confirm = this.alertCtrl.create({
    title: 'Error!!',
    message: 'user cancelled or incorrect QRcode',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.navCtrl.push(HomePage);
        }
      }
    ]
  });
  confirm.present();
}
minusValue(){
  if(this.hours!=0){
    this.hours -=1;
    this.price -=20;
  }

}
setValue(){

  
  this.navCtrl.push(MyStashPage, {
    hours: this.hours,
    price: this.price
  });
}
}
