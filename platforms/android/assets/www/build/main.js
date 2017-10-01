webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SearchPage = class SearchPage {
    constructor(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    ionViewDidLoad() {
        this.loadMap();
    }
    loadMap() {
        this.geolocation.getCurrentPosition().then((position) => {
            console.log("position.coords.latitude, position.coords.longitude", position.coords.latitude, position.coords.longitude);
            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            console.log("A this.map", this.map);
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            console.log("B this.map", this.map);
        }, (err) => {
            console.log(err);
        });
    }
    addMarker() {
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        let content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    }
    addInfoWindow(marker, content) {
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], SearchPage.prototype, "mapElement", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'search-page',template:/*ion-inline-start:"/home/gabriel/Documentos/StashApp/StashAppFinal/novo/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Buscar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="map" id="map"><img src="assets/icon/maps.jpg"></div>\n</ion-content>\n'/*ion-inline-end:"/home/gabriel/Documentos/StashApp/StashAppFinal/novo/src/pages/search/search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_capture_capture__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_my_stash_my_stash__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_capture_capture__["a" /* CapturePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_my_stash_my_stash__["a" /* MyStashPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_capture_capture__["a" /* CapturePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_my_stash_my_stash__["a" /* MyStashPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/gabriel/Documentos/StashApp/StashAppFinal/novo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/gabriel/Documentos/StashApp/StashAppFinal/novo/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_stash_my_stash__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__capture_capture__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let HomePage = class HomePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    pushbutton() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__capture_capture__["a" /* CapturePage */]);
    }
    stashbutton() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__my_stash_my_stash__["a" /* MyStashPage */]);
    }
    searchbutton() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/gabriel/Documentos/StashApp/StashAppFinal/novo/src/pages/home/home.html"*/'\n<ion-header>\n  <ion-toolbar color=\'primary\'>\n    <ion-navbar color=\'primary\'>\n      <ion-title>\n        StashBag\n      </ion-title>\n    </ion-navbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid justify>\n    <ion-col col-4>\n      <ion-row justify-content-center>\n        <button ion-button clear icon-only (click)="stashbutton()">\n            <ion-icon name="briefcase" style="zoom:2.0;"></ion-icon>\n        </button>\n      </ion-row>\n    </ion-col>\n  </ion-grid>\n\n\n  <div padding class="btnlist">\n  <button ion-button block large icon-left (click)="pushbutton()"> <ion-icon name="barcode" ></ion-icon>Capturar</button>\n  <button ion-button block large icon-left (click)="searchbutton()"> <ion-icon name="search" ></ion-icon>Buscar</button>\n  <button ion-button block large icon-left> <ion-icon name="calendar" ></ion-icon>Agendar</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/gabriel/Documentos/StashApp/StashAppFinal/novo/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_stash_my_stash__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let CapturePage = class CapturePage {
    constructor(navCtrl, navParams, qrscanner, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrscanner = qrscanner;
        this.alertCtrl = alertCtrl;
        this.hours = 0;
        this.price = 0;
        this.displayform = false;
    }
    ionViewDidLoad() {
        this.scanqr();
    }
    scanqr() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.qrscanner.scan().then(data => {
                this.qrdata = data;
                if (this.qrdata.text == "Helloworld") {
                    this.displayform = true;
                }
                if (this.qrdata.cancelled == true || this.qrdata.text != "Helloworld") {
                    this.showConfirm();
                }
            });
            console.log(this.qrdata);
        });
    }
    addValue() {
        this.hours += 1;
        this.price += 20;
    }
    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: 'Error!!',
            message: 'user cancelled or incorrect QRcode',
            buttons: [
                {
                    text: 'OK',
                    handler: () => {
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        confirm.present();
    }
    minusValue() {
        if (this.hours != 0) {
            this.hours -= 1;
            this.price -= 20;
        }
    }
    setValue() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__my_stash_my_stash__["a" /* MyStashPage */], {
            hours: this.hours,
            price: this.price
        });
    }
};
CapturePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-capture',template:/*ion-inline-start:"/home/gabriel/Documentos/StashApp/StashAppFinal/novo/src/pages/capture/capture.html"*/'<!--\n  Generated template for the CapturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>StashBag</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-grid justify>\n        <ion-row justify-content-around>\n          <ion-col col-7>\n            <ion-item no-lines>\n              <ion-avatar item-start>\n                <img src="assets/icon/images.jpg">\n              </ion-avatar>\n              <h3>Marty McFly</h3>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  <div *ngIf="displayform" padding>\n <!-- <div padding> -->\n    <ion-row justify-content-center>\n      <ion-item text-center>\n        <h1> R$ {{price}}</h1>\n      </ion-item>\n\n    </ion-row>\n\n\n  <div padding>\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col col-3>\n          <ion-item no-lines>\n            <h1>{{hours}}</h1>\n          </ion-item>\n          <h6>horas</h6>\n        </ion-col>\n      </ion-row>\n      <ion-row justify-content-around align-items-center>\n          <ion-col>\n            <button ion-button block large icon-only (click)="addValue()">\n              <ion-icon name="add"></ion-icon> </button>\n              </ion-col>\n              <ion-col>\n                  <button ion-button block large icon-only (click)="minusValue()">\n                      <ion-icon name="remove"></ion-icon></button>\n              </ion-col>\n      </ion-row> <!-- big row -->\n      <ion-row>\n          <button ion-button block large icon-left (click)="setValue()" color = "secondary">\n            <ion-icon name="checkmark"></ion-icon>Confirmar</button>\n      </ion-row>\n      <ion-row>\n          <button ion-button block large icon-left> <ion-icon name="calendar" ></ion-icon>Agendar</button>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/gabriel/Documentos/StashApp/StashAppFinal/novo/src/pages/capture/capture.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], CapturePage);

//# sourceMappingURL=capture.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyStashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capture_capture__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let MyStashPage = class MyStashPage {
    constructor(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.countdown = 0;
        this.countdownmin = 0;
        this.lockStatus = true;
        this.lockStatusText = "Fechado";
        this.lockicon = "lock";
        this.startClock = "";
        this.stopClock = "";
        this.navHours = 0;
        this.navPrice = 0;
        this.price = 0;
        this.timer = 0;
        this.lockbtndisable = false;
        if (navParams.get("hours") == NaN) {
            this.showConfirm();
        }
        else {
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
            this.lockStatusText = "Aberto";
            this.showStatus();
            this.lockicon = "unlock";
            if (this.countdownmin == 0 && this.countdown == 0) {
                this.countdownTimer();
            }
            else {
                this.param = {
                    lock: "Unlocked"
                };
            }
            this.restUnlock(this.param);
        }
        else {
            this.lockbtndisable = false;
            this.lockStatusText = "Fechado";
            this.showStatus();
            this.lockicon = "lock";
            this.param = {
                lock: "Locked"
            };
            this.restLock(this.param);
        }
    }
    countdownTimer() {
        let d = new Date();
        let hr = d.getHours();
        let mn = d.getMinutes();
        this.timer = this.navHours;
        this.param = {
            hours: this.navHours,
            min: mn,
            start: hr,
            stash: this.navPrice,
            lock: "Unlocked"
        };
        this.price = this.navPrice;
        this.startClock = hr + ":" + mn;
        this.stopClock = (hr + this.navHours) + ":" + mn;
        this.countdown = this.timer - 1;
        this.lockStatusText = "Aberto";
        this.lockicon = "unlock";
        this.lockbtndisable = false;
        this.countdownmin = 59;
        this.intervaltimer = setInterval(() => {
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
    //
    getdata(data) {
        return new Promise(resolve => {
            this.http
                .post("https://us-central1-test-fd89a.cloudfunctions.net/restapi/gt", data)
                .subscribe(data => {
                resolve(data.json());
                console.log(data);
            });
        });
    }
    restLock(data) {
        return new Promise(resolve => {
            this.http
                .get("http://192.168.1.200:5002/close")
                .subscribe(data => {
                resolve(data.json());
                console.log(data);
            });
        });
    }
    restUnlock(data) {
        return new Promise(resolve => {
            this.http
                .get("http://192.168.1.200:5002/open")
                .subscribe(data => {
                resolve(data.json());
                console.log(data);
            });
        });
    }
    //
    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: "Erro!!",
            message: "QRCode não encontrado!",
            buttons: [
                {
                    text: "OK",
                    handler: () => {
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__capture_capture__["a" /* CapturePage */]);
                    }
                }
            ]
        });
        confirm.present();
    }
    finalizar() {
        const alert = this.alertCtrl.create({
            title: 'Deseja encerrar?',
            message: 'Sua sessão no Stash será encerrada',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: () => {
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        alert.present();
    }
    showStatus() {
        const alert = this.alertCtrl.create({
            title: 'Stash ' + this.lockStatusText,
            buttons: ['OK']
        });
        alert.present();
    }
};
MyStashPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: "page-my-stash",template:/*ion-inline-start:"/home/gabriel/Documentos/StashApp/StashAppFinal/novo/src/pages/my-stash/my-stash.html"*/'<!--\n  Generated template for the MyStashPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Meu Stash</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-grid justify>\n        <ion-row justify-content-around>\n          <ion-col col-7>\n            <ion-item no-lines>\n              <ion-avatar item-start>\n                <img src="assets/icon/images.jpg">\n              </ion-avatar>\n              <h3>Marty McFly</h3>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n<div margin-top>\n<ion-card>\n  <ion-item  text-center>\n    <h1 icon-left margin > <ion-icon name="stopwatch"></ion-icon> {{countdown}}:{{countdownmin}}</h1>\n </ion-item>\n <ion-item >\n   <ion-row justify-content-center>\n   <ion-col col-3 margin-left>\n      <button ion-fab icon-only (click)="lockbtn()" large [disabled]="lockbtndisable">\n          <ion-icon [name]="lockicon"></ion-icon>\n        </button>\n   </ion-col>\n   <!--<ion-col col-3 margin-left>\n      <button ion-fab icon-only large>\n          <ion-icon name="clock"></ion-icon>\n        </button>\n   </ion-col>  -->\n   <!--novo-->\n   <ion-col col-3 margin-left>\n      <button ion-fab icon-only (click)="finalizar()" large>\n          <ion-icon name="log-in"></ion-icon>\n        </button>\n   </ion-col>\n   <!---->\n  </ion-row>\n  </ion-item>\n\n<!--<ion-item text-center>\n  <h3>Lock Status: {{lockStatusText}}</h3>\n</ion-item> -->\n\n  <ion-item>\n    <ion-row  justify-content-center >\n      <ion-col col-6 align-self-center>\n        <div text-end>\n            <ion-icon name="briefcase" style="zoom:4.0;"></ion-icon>\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n                <ion-item>\n                  <ion-row>\n                      <ion-icon name="clock"></ion-icon>\n                      <ion-icon name="arrow-forward"></ion-icon>\n                      <h3 margin-left>{{startClock}}</h3>\n                  </ion-row>\n\n                </ion-item>\n\n                <ion-item>\n                  <ion-row>\n                      <ion-icon name="clock"></ion-icon>\n                      <ion-icon name="arrow-back"> </ion-icon>\n                      <h3 margin-left>{{stopClock}}</h3>\n                  </ion-row>\n\n                </ion-item>\n                <ion-item>\n                  <ion-row>\n                      <ion-icon name="cash"></ion-icon>\n\n                      <h3 padding-left margin-left>{{price}}</h3>\n                  </ion-row>\n\n                </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-card>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/gabriel/Documentos/StashApp/StashAppFinal/novo/src/pages/my-stash/my-stash.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], MyStashPage);

//# sourceMappingURL=my-stash.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map