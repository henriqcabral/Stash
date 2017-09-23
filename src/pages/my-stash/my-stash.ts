import { CapturePage } from "./../capture/capture";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { AlertController } from "ionic-angular";

@Component({
  selector: "page-my-stash",
  templateUrl: "my-stash.html"
})
export class MyStashPage {
  countdown: number = 0;
  countdownmin: number = 0;
  lockStatus: boolean = true;
  lockStatusText = "Locked";
  lockicon = "lock";
  startClock = "";
  stopClock = "";
  navHours: number = 0;
  navPrice: number = 0;
  price: number = 0;
  timer: number = 0;
  lockbtndisable: boolean = false;
  param;
  intervaltimer;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController
  ) {
    if (navParams.get("hours") == NaN) {
      this.showConfirm();
    } else {
      this.navHours = navParams.get("hours");
      this.navPrice = navParams.get("price");
      console.log(this.navHours);
    }

    this.http = http;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyStashPage");
  }
  lockbtn() {
      this.lockStatus = !this.lockStatus;
      this.lockbtndisable = false;
      if (!this.lockStatus) {
        if (this.navParams.get("hours") == NaN) {
          this.showConfirm();
        }
        this.lockStatusText = "unlocked";
        this.lockicon = "unlock";
        if (this.countdownmin == 0 && this.countdown == 0) {
          this.countdownTimer();
        } else {
          this.param = {
            lock: "Unlocked"
          };
        }
        this.restUnlock(this.param);
      } else {
        this.lockbtndisable = false;
        this.lockStatusText = "locked";
        this.lockicon = "lock";
        this.param = {
          lock: "Locked"
        };
        this.restLock(this.param);
      }
    }
/**  lockbtn() {
    this.lockStatus = !this.lockStatus;
    this.lockbtndisable = true;
    if (!this.lockStatus) {
      if (this.navParams.get("hours") == NaN) {
        this.showConfirm();
      }

      if (this.countdownmin == 0 && this.countdown == 0) {
        this.countdownTimer();
      } else {
        this.param = {
          lock: "Unlocked"
        };
        this.getdata(this.param).then(data => {
          this.lockbtndisable = false;
          this.lockStatusText = "Unlocked";
          this.lockicon = "unlock";
        });
      }
    } else {
      this.lockbtndisable = true;
      this.lockStatusText = "locked";
      this.lockicon = "lock";
      this.param = {
        lock: "Locked"
      };
      this.getdata(this.param).then(data => {
        this.lockbtndisable = false;
      });
    }
  }
  countdownTimer() {
    let d = new Date();
    let hr = d.getHours();
    let mn = d.getMinutes();
    this.param = {
      hours: this.navHours,
      min: mn,
      start: hr,
      stash: this.navPrice,
      lock: "Unlocked"
    };
    this.getdata(this.param).then(data => {
      let newdata = JSON.parse(JSON.stringify(data));
      console.log(newdata);
      if (newdata.endTime > 24) {
        newdata.endTime = newdata.endTime - 24;
      }
      this.price = newdata.price;
      this.startClock = newdata.startTime + ":" + newdata.min;
      this.stopClock = newdata.endTime + ":" + newdata.min;
      this.price = newdata.stash;
      this.countdown = newdata.timer - 1;
      this.lockStatusText = "Unlocked";
      this.lockicon = "unlock";
      this.lockbtndisable = false;
      this.countdownmin = 59;
      this.intervaltimer = setInterval(function() {
        this.countdownmin -= 1;
        if (this.countdownmin == -1) {
          this.countdownmin = 59;
          if (this.countdown > 0) {
            this.countdown -= 1;
          }
          if (this.countdownmin == 0 && this.countdown == 0) {
            clearInterval(this.intervaltimer);
          }
        }
      }, 60000);
      this.lockbtndisable = false;
    });
  }
  **/

  countdownTimer() {
    let d = new Date();
    let hr = d.getHours();
    let mn = d.getMinutes();
    this.timer = 2
    this.param = {
      hours: this.navHours,
      min: mn,
      start: hr,
      stash: this.navPrice,
      lock: "Unlocked"
    };
    this.price = 40;
    this.startClock = "6:00";
    this.stopClock = "8:00";
    this.countdown = this.timer - 1;
    this.lockStatusText = "Unlocked";
    this.lockicon = "unlock";
    this.lockbtndisable = false;
    this.countdownmin = 59;
    this.intervaltimer = setInterval(function() {
    this.countdownmin -= 1;
      if (this.countdownmin == -1) {
        this.countdownmin = 59;
        if (this.countdown > 0) {
          this.countdown -= 1;
        }
        if (this.countdownmin == 0 && this.countdown == 0) {
          clearInterval(this.intervaltimer);
        }
      }
    }, 60000);
    this.lockbtndisable = false;
  }
  getdata(data) {
    return new Promise(resolve => {
      this.http
        .post(
          "https://us-central1-test-fd89a.cloudfunctions.net/restapi/gt",
          data
        )
        .subscribe(data => {
          resolve(data.json());
          console.log(data);
        });
    });
  }

  restLock(data) {
    return new Promise(resolve => {
      this.http
        .get(
          "http://192.168.1.200:5002/close"
        )
        .subscribe(data => {
          resolve(data.json());
          console.log(data);
        });
    });
  }
  restUnlock(data) {
    return new Promise(resolve => {
      this.http
        .get(
          "http://192.168.1.200:5002/open"
        )
        .subscribe(data => {
          resolve(data.json());
          console.log(data);
        });
    });
  }
 //
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: "Error!!",
      message: "Please Scan Qr Code and set Hours",
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.navCtrl.push(CapturePage);
          }
        }
      ]
    });
    confirm.present();
  }
}
