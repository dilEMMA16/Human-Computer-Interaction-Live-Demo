webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPalettePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_email__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__saved_saved__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customfont_customfont__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomPalettePage = /** @class */ (function () {
    function CustomPalettePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reds = navParams.get('reds');
        this.browns = navParams.get('browns');
        this.blues = navParams.get('blues');
        this.greens = navParams.get('greens');
        this.yellows = navParams.get('yellows');
        this.creams = navParams.get('creams');
        this.purples = navParams.get('purples');
        this.oranges = navParams.get('oranges');
        this.pinks = navParams.get('pinks');
        this.grays = navParams.get('grays');
        this.chosenColors = new Array();
        this.headerfonts = navParams.get('headerfonts');
        this.bodyfonts = navParams.get('bodyfonts');
    }
    CustomPalettePage.prototype.navigateToHomePage = function () {
        this.navCtrl.pop();
    };
    CustomPalettePage.prototype.navigateToCustomFontPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__customfont_customfont__["a" /* CustomFontPage */], {
            'data': 'assets/imgs/custom.png',
            'color1': this.chosenColors[0],
            'color2': this.chosenColors[1],
            'color3': this.chosenColors[2],
            'color4': this.chosenColors[3],
            'font1': "Calibri",
            'font2': "Times New Roman",
            'font1code': 'Calibri',
            'font2code': 'Times New Roman',
            'headerfonts': this.headerfonts,
            'bodyfonts': this.bodyfonts
        });
    };
    CustomPalettePage.prototype.navigateToEmailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__email_email__["a" /* EmailPage */], {
            'data': 'assets/imgs/custom.png',
            'color1': this.chosenColors[0],
            'color2': this.chosenColors[1],
            'color3': this.chosenColors[2],
            'color4': this.chosenColors[3],
            'font1': "Calibri",
            'font2': "Times New Roman",
            'font1code': 'Calibri',
            'font2code': 'Times New Roman'
        });
    };
    CustomPalettePage.prototype.savedThemes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__saved_saved__["a" /* SavedPage */], {
            test: "test"
        });
    };
    CustomPalettePage.prototype.selectColor = function (colorcode) {
        //check if element has class inactive or active = toggle to whatever one
        var element = document.getElementById(colorcode);
        if (element.classList.contains("selected")) {
            //remove classes
            element.classList.remove("selected");
            //remove from chosenColors array
            this.remove(this.chosenColors, colorcode);
            //make splat not display and drop show
            var idOfSplat = colorcode + "splat";
            document.getElementById(idOfSplat).style.display = "none";
            document.getElementById(colorcode).style.display = "block";
            //reorder selected colors
            var number = 1;
            for (var _i = 0, _a = this.chosenColors; _i < _a.length; _i++) {
                var choice = _a[_i];
                var content = document.getElementById(idOfSplat);
                content.innerHTML = "<br><div class='tear2'id='" + choice + "tear'style='margin-right:auto; margin-left:auto;background-color:" + choice + "'><p id='" + idOfSplat + "p' style='padding-bottom:25px;padding-left:45px;transform:rotate(225deg);color:#9c9c9c;'></p></div>';";
                var content2 = document.getElementById(choice + "splat" + "p");
                content2.innerHTML = number + "";
                number++;
            }
            //if length == 4 ---> go to font page
            if (this.chosenColors.length == 4) {
                this.navigateToCustomFontPage();
            }
            return;
        }
        if (!element.classList.contains("selected")) {
            //add  class
            element.classList.add("selected");
            //add to chosenColors array
            this.chosenColors.push(colorcode);
            //make splat display and drop hide
            var idOfSplat = colorcode + "splat";
            document.getElementById(idOfSplat).style.display = "block";
            document.getElementById(colorcode).style.display = "none";
            //reorder selected colors
            var number = 1;
            for (var _b = 0, _c = this.chosenColors; _b < _c.length; _b++) {
                var choice = _c[_b];
                var content = document.getElementById(idOfSplat);
                content.innerHTML = "<br><div class='tear2'id='" + choice + "tear'style='margin-right:auto; margin-left:auto;background-color:" + choice + "'><p id='" + idOfSplat + "p' style='padding-bottom:25px;padding-left:45px;transform:rotate(225deg);color:#9c9c9c;'>" + "</p></div>";
                var content2 = document.getElementById(choice + "splat" + "p");
                content2.innerHTML = number + "";
                number++;
            }
        }
        //if length == 4 ---> go to font page
        if (this.chosenColors.length == 4) {
            this.navigateToCustomFontPage();
        }
    };
    CustomPalettePage.prototype.remove = function (array, element) {
        var index = array.indexOf(element);
        if (index !== -1) {
            array.splice(index, 1);
        }
    };
    CustomPalettePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-custompalette',template:/*ion-inline-start:"C:\Users\emmas\Desktop\hucomm\src\pages\custompalette\custompalette.html"*/'\n\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n    <!-- BOOKMARK AT TOP TO GO TO SAVED THEMES -->\n\n    <div (click)="savedThemes()" id=savedThemesBookmark>saved themes\n\n    </div>\n\n    <ion-grid class="vertical-align-content" style="padding:0px;">\n\n\n\n\n\n\n\n      <!-- INSTRUCTIONS FOR THE PAGE -->\n\n        <ion-row id=instructionRow>\n\n            <ion-col col-12 style="padding:15px;padding-top:30px;">\n\n                <span id=formattedinstructiontext>choose four colors</span>\n\n            </ion-col>\n\n        </ion-row>\n\n        <br>\n\n\n\n\n\n\n\n        <!-- COLOR SECTIONS FOR ALL THE COLORS IN THE PROGRAM -->\n\n        <ion-row >\n\n            <ion-col class = "col col-12 sectiontitle">reds</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n        <div style="width: 100%;">\n\n          <div *ngFor="let color of reds" class="divforcolors" >\n\n                <div class="tear" (click) = "selectColor(color)" [id]="color" [style.background-color]="color"></div>\n\n                <div class="splat" (click)="selectColor(color)" id="{{color}}splat"></div>\n\n          </div>\n\n        </div>\n\n      </ion-row>\n\n        <br><br>\n\n        <ion-row >\n\n            <ion-col class = "col col-12 sectiontitle">oranges</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div style="width: 100%;">\n\n                <div *ngFor="let color of oranges; let i = index" class=divforcolors >\n\n                  <div class="tear" (click) = "selectColor(color)" [id]="color" [style.background-color]="color"></div>\n\n                  <div class="splat" (click)="selectColor(color)" id="{{color}}splat"></div>\n\n                </div>\n\n            </div>\n\n        </ion-row>\n\n        <br><br>\n\n        <ion-row >\n\n            <ion-col class = "col col-12 sectiontitle">yellows</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div style="width: 100%;">\n\n                <div *ngFor="let color of yellows" class=divforcolors >\n\n                  <div class="tear" (click) = "selectColor(color)" [id]="color" [style.background-color]="color"></div>\n\n                  <div class="splat" (click)="selectColor(color)" id="{{color}}splat"></div>\n\n                </div>\n\n            </div>\n\n        </ion-row>\n\n        <br><br>\n\n        <ion-row >\n\n            <ion-col class = "col col-12 sectiontitle">greens</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div style="width: 100%;">\n\n                <div *ngFor="let color of greens" class=divforcolors >\n\n                  <div class="tear" (click) = "selectColor(color)" [id]="color" [style.background-color]="color"></div>\n\n                  <div class="splat" (click)="selectColor(color)" id="{{color}}splat"></div>\n\n                </div>\n\n            </div>\n\n        </ion-row>\n\n        <br><br>\n\n        <ion-row >\n\n            <ion-col class = "col col-12 sectiontitle">blues</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div style="width: 100%;">\n\n                <div *ngFor="let color of blues" class=divforcolors >\n\n                  <div class="tear" (click) = "selectColor(color)" [id]="color" [style.background-color]="color"></div>\n\n                  <div class="splat" (click)="selectColor(color)" id="{{color}}splat"></div>\n\n                </div>\n\n            </div>\n\n        </ion-row>\n\n        <br><br>\n\n        <ion-row >\n\n            <ion-col class = "col col-12 sectiontitle">purples</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div style="width: 100%;">\n\n                <div *ngFor="let color of purples" class=divforcolors>\n\n                  <div class="tear" (click) = "selectColor(color)" [id]="color" [style.background-color]="color"></div>\n\n                  <div class="splat" (click)="selectColor(color)" id="{{color}}splat"></div>\n\n                </div>\n\n            </div>\n\n        </ion-row>\n\n        <br><br>\n\n        <ion-row >\n\n            <ion-col class = "col col-12 sectiontitle">pinks</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div style="width: 100%;">\n\n                <div *ngFor="let color of pinks" class=divforcolors>\n\n                  <div class="tear" (click) = "selectColor(color)" [id]="color" [style.background-color]="color"></div>\n\n                  <div class="splat" (click)="selectColor(color)" id="{{color}}splat"></div>\n\n                </div>\n\n            </div>\n\n        </ion-row>\n\n        <br><br>\n\n        <ion-row >\n\n            <ion-col class = "col col-12 sectiontitle">grays</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div style="width: 100%;">\n\n                <div *ngFor="let color of grays" class=divforcolors>\n\n                  <div class="tear" (click) = "selectColor(color)" [id]="color" [style.background-color]="color"></div>\n\n                  <div class="splat" (click)="selectColor(color)" id="{{color}}splat"></div>\n\n                </div>\n\n            </div>\n\n        </ion-row>\n\n        <br><br>\n\n        <ion-row >\n\n            <ion-col class = "col col-12 sectiontitle">creams</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div style="width: 100%;">\n\n                <div *ngFor="let color of creams" class=divforcolors>\n\n                  <div class="tear" (click) = "selectColor(color)" [id]="color" [style.background-color]="color"></div>\n\n                  <div class="splat" (click)="selectColor(color)" id="{{color}}splat"></div>\n\n                </div>\n\n            </div>\n\n        </ion-row>\n\n        <ion-row >\n\n            <ion-col class = "col col-12 sectiontitle">browns</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <div style="width: 100%;">\n\n                <div *ngFor="let color of browns" class=divforcolors>\n\n                  <div class="tear" (click) = "selectColor(color)" [id]="color" [style.background-color]="color"></div>\n\n                  <div class="splat" (click)="selectColor(color)" id="{{color}}splat"></div>\n\n                </div>\n\n            </div>\n\n        </ion-row>\n\n        <div style="height:7vh;"></div>\n\n\n\n\n\n        <!-- BOTTOM MENU -->\n\n        <ion-row id="menubottom">\n\n            <ion-col col-4 (click)="navigateToHomePage()" id=categorytab>\n\n                     <img style="height:20px;width:20px;"id=chosenTheme src= "assets/imgs/custom.png">\n\n            </ion-col>\n\n            <ion-col col-4 id=palettetab>\n\n                colors\n\n            </ion-col>\n\n            <ion-col col-4 id=fonttab>\n\n                fonts\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n\n\n    </ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\emmas\Desktop\hucomm\src\pages\custompalette\custompalette.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CustomPalettePage);
    return CustomPalettePage;
}());

//# sourceMappingURL=custompalette.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__palette_palette__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custompalette_custompalette__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__saved_saved__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__randomemail_randomemail__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.savedThemes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__saved_saved__["a" /* SavedPage */], {
            test: "test"
        });
    };
    HomePage.prototype.customThemeChosen = function () {
        var blues = ["#5d667b", "#45547b", "#5765b0", "#39457b", "#236c75", "#34a0ae", "#040f7b", "#6dbdc9", "#7ab2b9", "#678997", "#80a9b0", "#6683d0", "#82bdd3", "#33377b", "#61808f", "#64c8c6", "#121f7b", "#a4afe3", "#477aed", "#7baefb", "#5a717b", "#2360bf", "#6f9df8", "#aacaf4", "#6f7fbe", "#60b5c1", "#4d687b", "#7698b8", "#2badb8", "#1f40b8"];
        var browns = ["#968663", "#7b6156", "#7b6972", "#7b6e58", "#7b6a72", "#baa994", "#594446", "#bca67f", "#67697b", "#7b4600", "#7b625e", "#7b403b", "#7b5a43", "#7b4424", "#b7866d", "#7b615b", "#7b5650"];
        var greens = ["#617b66", "#848b8c", "#727b63", "#6c7b4c", "#c5be8b", "#848b8c", "#8cae87", "#7acdad", "#d5ef9a", "#afc185", "#5c7b69", "#6c818f", "#74ab86", "#2e717b", "#589a1f", "#157b5c", "#617b62", "#787b39", "#acd247", "#83d780", "#68ad74", "#cae67c", "#caeff4", "#61c277", "#499259", "#647a7b", "#b8b14e", "#77b800"];
        var yellows = ["#d3af86", "#e3a83e", "#b79533", "#fdcb73", "#c29a50", "#d9a42e", "#f8e997", "#bfb06b", "#d6a149", "#ffb822", "#ffbd4a", "#feba08", "#dbff6b"];
        var creams = ["#e3d6cc", "#c9beb5", "#e3d6cc", "#cdb98f", "#e1d9d3"];
        var purples = ["#918696", "#9a82ae", "#524c7b", "#a275a5", "#b958c0", "#3e427d", "#57017b", "#584e9a", "#7a3a7b", "#6f467b", "#4b407b", "#7b1877", "#b760e6", "#dfd1ef", "#5546b8", "#9e38b8", "#575db8", "#cb07bd"];
        var oranges = ["#bf834e", "#8e6350", "#eb7244", "#e98441", "#cd745f", "#ee9547", "#d3725b", "#cd7746", "#eb8119", "#ab6141", "#ba6a00", "#e8926e", "#ffab37"];
        var reds = ["#c94300", "#7b1416", "#d7000b", "#8c412a", "#e76753", "#ea4627", "#b80716"];
        var pinks = ["#7b536e", "#d9b1b0", "#f3bbaa", "#a16c6a", "#745a7b", "#e76753", "#e8926e", "#7b3446", "#ff9aac", "#ef447a", "#cdaad2", "#b83e81"];
        var grays = ["#c5bde1", "#a8a8a8", "#78787b"];
        //Fonts
        var h1 = ["Raleway", "'Raleway', sans-serif"];
        var h2 = ["Sail", "'Sail', cursive"];
        var h3 = ["Space Mono", "'Space Mono', monospace"];
        var h4 = ["Domine", "'Domine', serif"];
        var h5 = ["Playfair Display", "'Playfair Display', serif"];
        var h6 = ["Abril Fatface", "'Abril Fatface', cursive"];
        var h7 = ["Cookie", "'Cookie', cursive"];
        var h8 = ["Poiret One", "'Poiret One', cursive"];
        var h9 = ["Cabin Sketch", "'Cabin Sketch', cursive"];
        var h10 = ["Merriweather", "'Merriweather', serif"];
        var h11 = ["Righteous", "'Righteous', cursive"];
        var h12 = ["Passion One", "'Passion One', cursive"];
        var h13 = ["Special Elite", "'Special Elite', cursive"];
        var h14 = ["Hanalei Fill", "'Hanalei Fill', cursive"];
        var h15 = ["Averia Libre", "'Averia Libre', cursive"];
        var h16 = ["Pacifico", "'Pacifico', cursive"];
        var h17 = ["Alegreya", "'Alegreya', serif"];
        var h18 = ["Sacramento", "'Sacramento', cursive"];
        var h19 = ["IM Fell English SC", "'IM Fell English SC', serif"];
        var h20 = ["Londrina Outline", "'Londrina Outline', cursive"];
        var h21 = ["Inconsolata", "'Inconsolata', monospace"];
        var h22 = ["Bitter", "'Bitter', serif"];
        var h23 = ["Oswald", "'Oswald', sans-serif"];
        var h24 = ["Fredericka the Great", "'Fredericka the Great', cursive"];
        var h25 = ["Barrio", "'Barrio', cursive"];
        var h26 = ["Roboto Mono", "'Roboto Mono', monospace"];
        var h27 = ["Libre Barcode", "'Libre Barcode 39 Text', cursive"];
        var h28 = ["Ubuntu Mono", "'Ubuntu Mono', monospace"];
        var h29 = ["Zilla Slab", "'Zilla Slab Highlight', cursive"];
        var h30 = ["Monofett", "'Monofett', cursive"];
        var h31 = ["Archivo Black", "'Archivo Black', sans-serif"];
        var h32 = ["Oleo Script", "'Oleo Script', cursive"];
        var h33 = ["Shrikhand", "'Shrikhand', cursive"];
        var h34 = ["Lily Script One", "'Lily Script One', cursive"];
        var h35 = ["Molengo", "'Molengo', sans-serif"];
        var h36 = ["Arvo", "'Arvo', serif"];
        var h37 = ["Josefin Slab", "'Josefin Slab', serif"];
        var h38 = ["Lustria", "'Lustria', serif"];
        var h39 = ["Nixie One", "'Nixie One', cursive"];
        var h40 = ["Walter Turncoat", "'Walter Turncoat', cursive"];
        var h41 = ["Baloo Tammudu", "'Baloo Tammudu', cursive"];
        var h42 = ["Lobster", "'Lobster', cursive"];
        var h43 = ["Fugaz One", "'Fugaz One', cursive"];
        var h44 = ["Frijole", "'Frijole', cursive"];
        var h45 = ["Ovo", "'Ovo', serif"];
        var h46 = ["Ruslan Display", "'Ruslan Display', cursive"];
        var h47 = ["Monoton", "'Monoton', cursive"];
        var h48 = ["VT323", "'VT323', monospace"];
        var h49 = ["Bungee Inline", "'Bungee Inline', cursive"];
        var h50 = ["Rye", "'Rye', cursive"];
        var headerfonts = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20, h21, h22, h23, h24, h25, h26, h27, h28, h29, h30, h31, h32, h33, h34, h35, h36, h37, h38, h39, h40, h41, h42, h43, h44, h45, h46, h47, h48, h49, h50];
        var b1 = ["Roboto Slab", "'Roboto Slab', serif"];
        var b2 = ["Overpass", "'Overpass', sans-serif"];
        var b3 = ["Nanum Gothic", "'Nanum Gothic', sans-serif"];
        var b4 = ["Inconsolata", "'Inconsolata', monospace"];
        var b5 = ["Source Sans Pro", "'Source Sans Pro', sans-serif"];
        var b6 = ["Courier New", "Courier"];
        var b7 = ["Calibri", "Calibri"];
        var b8 = ["EB Garamond", "'EB Garamond', serif"];
        var b9 = ["Merriweather", "'Montserrat', sans-serif"];
        var b10 = ["Roboto", "'Roboto', sans-serif"];
        var b11 = ["Roboto Condensed", "'Roboto Condensed', sans-serif"];
        var b12 = ["Karla", "'Karla', sans-serif"];
        var b13 = ["PT Sans", "'PT Sans', sans-serif"];
        var b14 = ["Electrolize", "'Electrolize', sans-serif"];
        var b15 = ["Open Sans", "'Open Sans', sans-serif"];
        var b16 = ["Lato", "'Lato', sans-serif"];
        var b17 = ["Josefin Sans", "'Josefin Sans', sans-serif"];
        var b18 = ["Kreon", "'Kreon', serif"];
        var b19 = ["Muli", "'Muli', sans-serif"];
        var bodyfonts = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__custompalette_custompalette__["a" /* CustomPalettePage */], {
            'blues': blues,
            'browns': browns,
            'greens': greens,
            'yellows': yellows,
            'creams': creams,
            'purples': purples,
            'oranges': oranges,
            'reds': reds,
            'pinks': pinks,
            'grays': grays,
            'theme': 'assets/imgs/custom.png',
            'headerfonts': headerfonts,
            'bodyfonts': bodyfonts
        });
    };
    HomePage.prototype.navigateToPalettePage = function (theme) {
        var palette1;
        var palette2;
        var palette3;
        var palette4;
        //based on what theme is = pass in palettes
        if (theme.includes("natural")) {
            palette1 = ["#baa994", "#968663", "#5d667b", "#617b66"];
            palette2 = ["#7b6156", "#e3d6cc", "#848b8c", "#c9beb5"];
            palette3 = ["#918696", "#7b6972", "#727b63", "#d3af86"];
            palette4 = ["#617b66", "#c9beb5", "#d3af86", "#7b6e58"];
        }
        if (theme.includes("summer")) {
            palette1 = ["#60d1d3", "#477aed", "#ef447a", "#cae67c"];
            palette2 = ["#acd247", "#e76753", "#e8926e", "#f8e997"];
            palette3 = ["#b760e6", "#68ad74", "#6f9df8", "#cae67c"];
            palette4 = ["#ef447a", "#ffab37", "#6f9df8", "#cae67c"];
        }
        if (theme.includes("fall")) {
            palette1 = ["#4b407b", "#5a717b", "#787b39", "#7b4424"];
            palette2 = ["#7b5a43", "#787b39", "#8c412a", "#ba6a00"];
            palette3 = ["#787b39", "#7b4424", "#d9a42e", "#cdb98f"];
            palette4 = ["#7b615b", "#7b4600", "#ba6a00", "#cdb98f"];
        }
        if (theme.includes("tech")) {
            palette1 = ["#263c75", "#34a0ae", "#7acdad", "#a8a8a8"];
            palette2 = ["#040f7b", "#eb7244", "#6dbdc9", "#b958c0"];
            palette3 = ["#7ab2b9", "#d5ef9a", "#fdcb73", "#e98441"];
            palette4 = ["#678997", "#a275a5", "#cd745f", "#f3bbaa"];
        }
        if (theme.includes("warm")) {
            palette1 = ["#d9a42e", "#e76753", "#ba6a00", "#7b4600"];
            palette2 = ["#e8926e", "#7b625e", "#bf834e", "#eb8119"];
            palette3 = ["#f8e997", "#bfb06b", "#d6a149", "#7b403b"];
            palette4 = ["#c94300", "#7b1416", "#d7000b", "#ffb822"];
        }
        if (theme.includes("sophisticated")) {
            palette1 = ["#ee9547", "#d3725b", "#6683d0", "#82bdd3"];
            palette2 = ["#afc185", "#80a9b0", "#3e427d", "#baa994"];
            palette3 = ["#cd7746", "#594446", "#bca67f", "#a16c6a"];
            palette4 = ["#c29a50", "#e3d6cc", "#33377b", "#61808f"];
        }
        if (theme.includes("wellbeing")) {
            palette1 = ["#caeff4", "#aacaf4", "#cdaad2", "#dfd1ef"];
            palette2 = ["#caeff4", "#6f7fbe", "#ee9547", "#647a7b"];
            palette3 = ["#dfd1ef", "#60b5c1", "#4d687b", "#647a7b"];
            palette4 = ["#ffbd4a", "#acd247", "#ee9547", "#4d687b"];
        }
        if (theme.includes("bold")) {
            palette1 = ["#ee9547", "#5546b8", "#b83e81", "#4aae4e"];
            palette2 = ["#ee9547", "#5546b8", "#9e38b8", "#7698b8"];
            palette3 = ["#2badb8", "#ea4627", "#b80716", "#575db8"];
            palette4 = ["#7698b8", "#dbff6b", "#575db8", "#cb07bd"];
        }
        if (theme.includes("cool")) {
            palette1 = ["#64c8c6", "#5c7b69", "#6c818f", "#74ab86"];
            palette2 = ["#121g7b", "#a4afe3", "#745a7b", "#2e717b"];
            palette3 = ["#a4afe3", "#57017b", "#584e9a", "#2e717b"];
            palette4 = ["#74ab86", "#2e717b", "#584e9a", "#7baefb"];
        }
        if (theme.includes("rustic")) {
            palette1 = ["#bf834e", "#7b536e", "#55707b", "#6c7b4c"];
            palette2 = ["#c5bde1", "#c5be8b", "#5765b0", "#c9beb5"];
            palette3 = ["#7b536e", "#c5be8b", "#848b8c", "#8e6350"];
            palette4 = ["#d9b1b0", "#848b8c", "#5765b0", "#6c7b4c"];
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__palette_palette__["a" /* PalettePage */], {
            'data': theme,
            'palette1': palette1,
            'palette2': palette2,
            'palette3': palette3,
            'palette4': palette4
        });
    };
    HomePage.prototype.randomThemeChosen = function () {
        var blues = ["#5d667b", "#45547b", "#5765b0", "#39457b", "#236c75", "#34a0ae", "#040f7b", "#6dbdc9", "#7ab2b9", "#678997", "#80a9b0", "#6683d0", "#82bdd3", "#33377b", "#61808f", "#64c8c6", "#121f7b", "#a4afe3", "#477aed", "#7baefb", "#5a717b", "#2360bf", "#6f9df8", "#aacaf4", "#6f7fbe", "#60b5c1", "#4d687b", "#7698b8", "#2badb8", "#1f40b8"];
        var browns = ["#968663", "#7b6156", "#7b6972", "#7b6e58", "#7b6a72", "#baa994", "#594446", "#bca67f", "#67697b", "#7b4600", "#7b625e", "#7b403b", "#7b5a43", "#7b4424", "#b7866d", "#7b615b", "#7b5650"];
        var greens = ["#617b66", "#848b8c", "#727b63", "#6c7b4c", "#c5be8b", "#848b8c", "#8cae87", "#7acdad", "#d5ef9a", "#afc185", "#5c7b69", "#6c818f", "#74ab86", "#2e717b", "#589a1f", "#157b5c", "#617b62", "#787b39", "#acd247", "#83d780", "#68ad74", "#cae67c", "#caeff4", "#61c277", "#499259", "#647a7b", "#b8b14e", "#77b800"];
        var yellows = ["#d3af86", "#e3a83e", "#b79533", "#fdcb73", "#c29a50", "#d9a42e", "#f8e997", "#bfb06b", "#d6a149", "#ffb822", "#ffbd4a", "#feba08", "#dbff6b"];
        var creams = ["#e3d6cc", "#c9beb5", "#e3d6cc", "#cdb98f", "#e1d9d3"];
        var purples = ["#918696", "#9a82ae", "#524c7b", "#a275a5", "#b958c0", "#3e427d", "#57017b", "#584e9a", "#7a3a7b", "#6f467b", "#4b407b", "#7b1877", "#b760e6", "#dfd1ef", "#5546b8", "#9e38b8", "#575db8", "#cb07bd"];
        var oranges = ["#bf834e", "#8e6350", "#eb7244", "#e98441", "#cd745f", "#ee9547", "#d3725b", "#cd7746", "#eb8119", "#ab6141", "#ba6a00", "#e8926e", "#ffab37"];
        var reds = ["#c94300", "#7b1416", "#d7000b", "#8c412a", "#e76753", "#ea4627", "#b80716"];
        var pinks = ["#7b536e", "#d9b1b0", "#f3bbaa", "#a16c6a", "#745a7b", "#e76753", "#e8926e", "#7b3446", "#ff9aac", "#ef447a", "#cdaad2", "#b83e81"];
        var grays = ["#c5bde1", "#a8a8a8", "#78787b"];
        //Fonts
        var h1 = ["Raleway", "'Raleway', sans-serif"];
        var h2 = ["Sail", "'Sail', cursive"];
        var h3 = ["Space Mono", "'Space Mono', monospace"];
        var h4 = ["Domine", "'Domine', serif"];
        var h5 = ["Playfair Display", "'Playfair Display', serif"];
        var h6 = ["Abril Fatface", "'Abril Fatface', cursive"];
        var h7 = ["Cookie", "'Cookie', cursive"];
        var h8 = ["Poiret One", "'Poiret One', cursive"];
        var h9 = ["Cabin Sketch", "'Cabin Sketch', cursive"];
        var h10 = ["Merriweather", "'Merriweather', serif"];
        var h11 = ["Righteous", "'Righteous', cursive"];
        var h12 = ["Passion One", "'Passion One', cursive"];
        var h13 = ["Special Elite", "'Special Elite', cursive"];
        var h14 = ["Hanalei Fill", "'Hanalei Fill', cursive"];
        var h15 = ["Averia Libre", "'Averia Libre', cursive"];
        var h16 = ["Pacifico", "'Pacifico', cursive"];
        var h17 = ["Alegreya", "'Alegreya', serif"];
        var h18 = ["Sacramento", "'Sacramento', cursive"];
        var h19 = ["IM Fell English SC", "'IM Fell English SC', serif"];
        var h20 = ["Londrina Outline", "'Londrina Outline', cursive"];
        var h21 = ["Inconsolata", "'Inconsolata', monospace"];
        var h22 = ["Bitter", "'Bitter', serif"];
        var h23 = ["Oswald", "'Oswald', sans-serif"];
        var h24 = ["Fredericka the Great", "'Fredericka the Great', cursive"];
        var h25 = ["Barrio", "'Barrio', cursive"];
        var h26 = ["Roboto Mono", "'Roboto Mono', monospace"];
        var h27 = ["Libre Barcode", "'Libre Barcode 39 Text', cursive"];
        var h28 = ["Ubuntu Mono", "'Ubuntu Mono', monospace"];
        var h29 = ["Zilla Slab", "'Zilla Slab Highlight', cursive"];
        var h30 = ["Monofett", "'Monofett', cursive"];
        var h31 = ["Archivo Black", "'Archivo Black', sans-serif"];
        var h32 = ["Oleo Script", "'Oleo Script', cursive"];
        var h33 = ["Shrikhand", "'Shrikhand', cursive"];
        var h34 = ["Lily Script One", "'Lily Script One', cursive"];
        var h35 = ["Molengo", "'Molengo', sans-serif"];
        var h36 = ["Arvo", "'Arvo', serif"];
        var h37 = ["Josefin Slab", "'Josefin Slab', serif"];
        var h38 = ["Lustria", "'Lustria', serif"];
        var h39 = ["Nixie One", "'Nixie One', cursive"];
        var h40 = ["Walter Turncoat", "'Walter Turncoat', cursive"];
        var h41 = ["Baloo Tammudu", "'Baloo Tammudu', cursive"];
        var h42 = ["Lobster", "'Lobster', cursive"];
        var h43 = ["Fugaz One", "'Fugaz One', cursive"];
        var h44 = ["Frijole", "'Frijole', cursive"];
        var h45 = ["Ovo", "'Ovo', serif"];
        var h46 = ["Ruslan Display", "'Ruslan Display', cursive"];
        var h47 = ["Monoton", "'Monoton', cursive"];
        var h48 = ["VT323", "'VT323', monospace"];
        var h49 = ["Bungee Inline", "'Bungee Inline', cursive"];
        var h50 = ["Rye", "'Rye', cursive"];
        var headerfonts = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20, h21, h22, h23, h24, h25, h26, h27, h28, h29, h30, h31, h32, h33, h34, h35, h36, h37, h38, h39, h40, h41, h42, h43, h44, h45, h46, h47, h48, h49, h50];
        var b1 = ["Roboto Slab", "'Roboto Slab', serif"];
        var b2 = ["Overpass", "'Overpass', sans-serif"];
        var b3 = ["Nanum Gothic", "'Nanum Gothic', sans-serif"];
        var b4 = ["Inconsolata", "'Inconsolata', monospace"];
        var b5 = ["Source Sans Pro", "'Source Sans Pro', sans-serif"];
        var b6 = ["Courier New", "Courier"];
        var b7 = ["Calibri", "Calibri"];
        var b8 = ["EB Garamond", "'EB Garamond', serif"];
        var b9 = ["Merriweather", "'Montserrat', sans-serif"];
        var b10 = ["Roboto", "'Roboto', sans-serif"];
        var b11 = ["Roboto Condensed", "'Roboto Condensed', sans-serif"];
        var b12 = ["Karla", "'Karla', sans-serif"];
        var b13 = ["PT Sans", "'PT Sans', sans-serif"];
        var b14 = ["Electrolize", "'Electrolize', sans-serif"];
        var b15 = ["Open Sans", "'Open Sans', sans-serif"];
        var b16 = ["Lato", "'Lato', sans-serif"];
        var b17 = ["Josefin Sans", "'Josefin Sans', sans-serif"];
        var b18 = ["Kreon", "'Kreon', serif"];
        var b19 = ["Muli", "'Muli', sans-serif"];
        var bodyfonts = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19];
        //select random colors
        var colorsChosen = new Array();
        var i;
        for (i = 0; i < 4; i++) {
            var colorChoice = Math.floor((Math.random() * 10) + 1); //random number between 1 - 10
            if (colorChoice == 1) {
                var hexcode = Math.floor((Math.random() * (blues.length - 1)));
                colorsChosen.push(blues[hexcode]);
            }
            else if (colorChoice == 2) {
                var hexcode = Math.floor((Math.random() * (browns.length - 1)));
                colorsChosen.push(browns[hexcode]);
            }
            else if (colorChoice == 3) {
                var hexcode = Math.floor((Math.random() * (greens.length - 1)));
                colorsChosen.push(greens[hexcode]);
            }
            else if (colorChoice == 4) {
                var hexcode = Math.floor((Math.random() * (yellows.length - 1)));
                colorsChosen.push(yellows[hexcode]);
            }
            else if (colorChoice == 5) {
                var hexcode = Math.floor((Math.random() * (creams.length - 1)));
                colorsChosen.push(creams[hexcode]);
            }
            else if (colorChoice == 6) {
                var hexcode = Math.floor((Math.random() * (purples.length - 1)));
                colorsChosen.push(purples[hexcode]);
            }
            else if (colorChoice == 7) {
                var hexcode = Math.floor((Math.random() * (oranges.length - 1)));
                colorsChosen.push(oranges[hexcode]);
            }
            else if (colorChoice == 8) {
                var hexcode = Math.floor((Math.random() * (reds.length - 1)));
                colorsChosen.push(reds[hexcode]);
            }
            else if (colorChoice == 9) {
                var hexcode = Math.floor((Math.random() * (pinks.length - 1)));
                colorsChosen.push(pinks[hexcode]);
            }
            else if (colorChoice == 10) {
                var hexcode = Math.floor((Math.random() * (grays.length - 1)));
                colorsChosen.push(grays[hexcode]);
            }
        }
        //select header
        var headerFontChoice = Math.floor((Math.random() * (headerfonts.length - 1)));
        var headerFont = headerfonts[headerFontChoice];
        //select body
        var bodyFontChoice = Math.floor((Math.random() * (bodyfonts.length - 1)));
        var bodyFont = bodyfonts[bodyFontChoice];
        //go to randomemail page = send all necessary information
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__randomemail_randomemail__["a" /* RandomEmailPage */], {
            'color1': colorsChosen[0],
            'color2': colorsChosen[1],
            'color3': colorsChosen[2],
            'color4': colorsChosen[3],
            'data': 'assets/imgs/random.png',
            'font1': headerFont[0],
            'font2': bodyFont[0],
            'font1code': headerFont[1],
            'font2code': bodyFont[1]
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\emmas\Desktop\hucomm\src\pages\home\home.html"*/'\n\n\n\n<ion-content no-padding>\n\n\n\n  <!-- BOOK MARK TO GO TO SAVED THEMES PAGE -->\n\n  <div (click)="savedThemes()" id=savethemesbookmark>saved themes\n\n  </div>\n\n  <ion-grid class="vertical-align-content" style="padding:0px;">\n\n\n\n    <!-- PAGE INSTRUCTIONS -->\n\n    <ion-row id=instructrow>\n\n      <ion-col col-12 style="padding:15px;padding-top:30px;">\n\n        <span id=instructformat>choose a category</span>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- MENU OPTIONS = ICONS AND TITLES -->\n\n    <ion-row class="align-bottom imagerow">\n\n      <ion-col col-4  (click)="navigateToPalettePage(\'assets/imgs/natural.png\')"><img  src="assets/imgs/natural.png"></ion-col>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/summer.png\')"><img  src="assets/imgs/summer.png"></ion-col>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/fall.png\')"><img  src="assets/imgs/fall.png"></ion-col>\n\n    </ion-row>\n\n    <ion-row class=titlerow>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/natural.png\')">natural<br><br></ion-col>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/summer.png\')">summer<br><br></ion-col>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/fall.png\')">fall<br><br></ion-col>\n\n    </ion-row>\n\n    <ion-row class="align-bottom imagerow">\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/tech.png\')"><img  src="assets/imgs/tech.png"></ion-col>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/warm.png\')"><img  src="assets/imgs/warm.png"></ion-col>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/sophisticated.png\')"><img  src="assets/imgs/sophisticated.png"></ion-col>\n\n    </ion-row>\n\n    <ion-row class=titlerow>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/tech.png\')">tech<br><br></ion-col>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/warm.png\')">warm<br><br></ion-col>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/sophisticated.png\')">sophisticated<br><br></ion-col>\n\n    </ion-row>\n\n    <ion-row class="align-bottom imagerow">\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/wellbeing.png\')"><img src="assets/imgs/wellbeing.png"></ion-col>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/bold.png\')"><img  src="assets/imgs/bold.png"></ion-col>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/cool.png\')"><img  src="assets/imgs/cool.png"></ion-col>\n\n    </ion-row>\n\n    <ion-row class=titlerow>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/wellbeing.png\')">wellbeing<br><br></ion-col>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/bold.png\')">bold<br><br></ion-col>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/cool.png\')">cool<br><br></ion-col>\n\n    </ion-row>\n\n    <ion-row class="align-bottom imagerow">\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/rustic.png\')"><img src="assets/imgs/rustic.png"></ion-col>\n\n      <ion-col col-4 (click)=\'randomThemeChosen()\'><img  src="assets/imgs/random.png"></ion-col>\n\n      <ion-col col-4 (click) = "customThemeChosen()"><img  src="assets/imgs/custom.png"></ion-col>\n\n    </ion-row>\n\n    <ion-row class=titlerow>\n\n      <ion-col col-4 (click)="navigateToPalettePage(\'assets/imgs/rustic.png\')">rustic<br><br></ion-col>\n\n      <ion-col col-4>random<br><br></ion-col>\n\n      <ion-col col-4 (click) = "customThemeChosen()">custom<br><br></ion-col>\n\n    </ion-row>\n\n    <hr>\n\n\n\n\n\n    <!-- BOTTOM MENU -->\n\n    <ion-row id="menubottom">\n\n      <ion-col col-4 id=categorytab>\n\n        category\n\n      </ion-col>\n\n      <ion-col col-4 id=palletetab>\n\n        colors\n\n      </ion-col>\n\n      <ion-col col-4 id=fonttab>\n\n        fonts\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\emmas\Desktop\hucomm\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PalettePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__font_font__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__saved_saved__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PalettePage = /** @class */ (function () {
    function PalettePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.theme = navParams.get('data');
        this.p1 = navParams.get('palette1');
        this.p2 = navParams.get('palette2');
        this.p3 = navParams.get('palette3');
        this.p4 = navParams.get('palette4');
    }
    PalettePage.prototype.savedThemes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__saved_saved__["a" /* SavedPage */], {
            test: "test"
        });
    };
    PalettePage.prototype.navigateToHomePage = function () {
        this.navCtrl.pop();
    };
    PalettePage.prototype.navigateToFontPage = function (chosenPalette) {
        var fontcombo1 = new Array();
        var fontcombo2 = new Array();
        var fontcombo3 = new Array();
        var fontcombo4 = new Array();
        var fontcombo5 = new Array();
        //based on what theme is = pass in palettes
        if (this.theme.includes("sophisticated")) {
            fontcombo1 = ["Raleway", "Roboto Slab", "'Raleway', sans-serif", "'Roboto Slab', serif"];
            fontcombo2 = ["Sail", "Overpass", "'Sail', cursive", "'Overpass', sans-serif"];
            fontcombo3 = ["Space Mono", "Nanum Gothic", "'Space Mono', monospace", "'Nanum Gothic', sans-serif"];
            fontcombo4 = ["Domine", "Inconsolata", "'Domine', serif", "'Inconsolata', monospace"];
            fontcombo5 = ["Playfair Display", "Source Sans Pro", "'Playfair Display', serif", "'Source Sans Pro', sans-serif"];
        }
        else if (this.theme.includes("cool")) {
            fontcombo1 = ["Abril Fatface", "Courier New", "'Abril Fatface', cursive", "Courier"];
            fontcombo2 = ["Cookie", "Calibri", "'Cookie', cursive", "Calibri"];
            fontcombo3 = ["Poiret One", "EB Garamond", "'Poiret One', cursive", "'EB Garamond', serif"];
            fontcombo4 = ["Cabin Sketch", "Nanum Gothic", "'Cabin Sketch', cursive", "'Nanum Gothic', sans-serif"];
            fontcombo5 = ["Merriweather", "Montserrat", "'Merriweather', serif", "'Montserrat', sans-serif"];
        }
        else if (this.theme.includes("warm")) {
            fontcombo1 = ["Righteous", "Roboto", "'Righteous', cursive", "'Roboto', sans-serif"];
            fontcombo2 = ["Passion One", "Roboto Condensed", "'Passion One', cursive", "'Roboto Condensed', sans-serif"];
            fontcombo3 = ["Special Elite", "Open Sans", "'Special Elite', cursive", "'Open Sans', sans-serif"];
            fontcombo4 = ["Hanalei Fill", "Karla", "'Hanalei Fill', cursive", "'Karla', sans-serif"];
            fontcombo5 = ["Averia Libre", "Montserrat", "'Averia Libre', cursive", "'Montserrat', sans-serif"];
        }
        else if (this.theme.includes("natural")) {
            fontcombo1 = ["Pacifico", "Overpass", "'Pacifico', cursive", "'Overpass', sans-serif"];
            fontcombo2 = ["Alegreya", "EB Garamond", "'Alegreya', serif", "'EB Garamond', serif"];
            fontcombo3 = ["Sacramento", "Calibri", "'Sacramento', cursive", "Calibri"];
            fontcombo4 = ["IM Fell English SC", "Montserrat", "'IM Fell English SC', serif", "'Montserrat', sans-serif"];
            fontcombo5 = ["Londrina Outline", "Courier New", "'Londrina Outline', cursive", "Courier"];
        }
        else if (this.theme.includes("rustic")) {
            fontcombo1 = ["Inconsolata", "Inconsolata", "'Inconsolata', monospace", "'Inconsolata', monospace"];
            fontcombo2 = ["Bitter", "PT Sans", "'Bitter', serif", "'PT Sans', sans-serif"];
            fontcombo3 = ["Oswald", "EB Garamond", "'Oswald', sans-serif", "'EB Garamond', serif"];
            fontcombo4 = ["Fredericka the Great", "Montserrat", "'Fredericka the Great', cursive", "'Montserrat', sans-serif"];
            fontcombo5 = ["Barrio", "Calibri", "'Barrio', cursive", "Calibri"];
        }
        else if (this.theme.includes("tech")) {
            fontcombo1 = ["Roboto Mono", "Roboto Condensed", "'Roboto Mono', monospace", "'Roboto Condensed', sans-serif"];
            fontcombo2 = ["Libre Barcode", "Inconsolata", "'Libre Barcode 39 Text', cursive", "'Inconsolata', monospace"];
            fontcombo3 = ["Ubuntu Mono", "Nanum Gothic", "'Ubuntu Mono', monospace", "'Nanum Gothic', sans-serif"];
            fontcombo4 = ["Zilla Slab", "Courier New", "'Zilla Slab Highlight', cursive", "Courier"];
            fontcombo5 = ["Monofett", "Electrolize", "'Monofett', cursive", "'Electrolize', sans-serif"];
        }
        else if (this.theme.includes("wellbeing")) {
            fontcombo1 = ["Archivo Black", "Karla", "'Archivo Black', sans-serif", "'Karla', sans-serif"];
            fontcombo2 = ["Oleo Script", "Overpass", "'Oleo Script', cursive", "'Overpass', sans-serif"];
            fontcombo3 = ["Shrikhand", "Open Sans", "'Shrikhand', cursive", "'Open Sans', sans-serif"];
            fontcombo4 = ["Lily Script One", "Montserrat", "'Lily Script One', cursive", "'Montserrat', sans-serif"];
            fontcombo5 = ["Molengo", "Calibri", "'Molengo', sans-serif", "Calibri"];
        }
        else if (this.theme.includes("fall")) {
            fontcombo1 = ["Arvo", "Lato", "'Arvo', serif", "'Lato', sans-serif"];
            fontcombo2 = ["Josefin Slab", "Josefin Sans", "'Josefin Slab', serif", "'Josefin Sans', sans-serif"];
            fontcombo3 = ["Lustria", "Roboto Condensed", "'Lustria', serif", "'Roboto Condensed', sans-serif"];
            fontcombo4 = ["Nixie One", "Nanum Gothic", "'Nixie One', cursive", "'Nanum Gothic', sans-serif"];
            fontcombo5 = ["Walter Turncoat", "Kreon", "'Walter Turncoat', cursive", "'Kreon', serif"];
        }
        else if (this.theme.includes("summer")) {
            fontcombo1 = ["Baloo Tammudu", "Calibri", "'Baloo Tammudu', cursive", "Calibri"];
            fontcombo2 = ["Lobster", "EB Garamond", "'Lobster', cursive", "'EB Garamond', serif"];
            fontcombo3 = ["Fugaz One", "PT Sans", "'Fugaz One', cursive", "'PT Sans', sans-serif"];
            fontcombo4 = ["Frijole", "Karla", "'Frijole', cursive", "'Karla', sans-serif"];
            fontcombo5 = ["Ovo", "Muli", "'Ovo', serif", "'Muli', sans-serif"];
        }
        else if (this.theme.includes("bold")) {
            fontcombo1 = ["Ruslan Display", "EB Garamond", "'Ruslan Display', cursive", "'EB Garamond', serif"];
            fontcombo2 = ["Monoton", "Electrolize", "'Monoton', cursive", "'Electrolize', sans-serif"];
            fontcombo3 = ["VT323", "PT Sans", "'VT323', monospace", "'PT Sans', sans-serif"];
            fontcombo4 = ["Bungee Inline", "Montserrat", "'Bungee Inline', cursive", "'Montserrat', sans-serif"];
            fontcombo5 = ["Rye", "Roboto Slab", "'Rye', cursive", "'Roboto Slab', serif"];
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__font_font__["a" /* FontPage */], {
            'data': this.theme,
            'color1': chosenPalette[0],
            'color2': chosenPalette[1],
            'color3': chosenPalette[2],
            'color4': chosenPalette[3],
            'font1': fontcombo1,
            'font2': fontcombo2,
            'font3': fontcombo3,
            'font4': fontcombo4,
            'font5': fontcombo5
        });
    };
    PalettePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-palette',template:/*ion-inline-start:"C:\Users\emmas\Desktop\hucomm\src\pages\palette\palette.html"*/'\n\n\n\n<ion-content no-padding>\n\n\n\n  <!-- BOOKMARK TO GO TO SAVED THEMES PAGE -->\n\n  <div (click)="savedThemes()" id=savedthemebookmark>saved themes\n\n  </div>\n\n  <ion-grid class="vertical-align-content" style="padding:0px;">\n\n\n\n    <!-- PAGE INSTRUCTIONS -->\n\n    <ion-row id=instructrow>\n\n      <ion-col col-12 style="padding:15px;padding-top:30px;">\n\n        <span id=formatinstruct>choose a color palette</span>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row (click)="navigateToFontPage(p1)" style="padding:20px;">\n\n      <ion-col class = "col col-16 palettebox">palette #1 </ion-col>\n\n      <div *ngFor="let color of p1"  class="palettediv" style="border-top: 1px solid #cecece;">\n\n          <ion-col class="col">\n\n            <div class="tear" [style.background-color]="color" style="display:inline-block !important;"></div>\n\n            <br><br>{{color}}\n\n          </ion-col>\n\n      </div>\n\n    </ion-row>\n\n    <ion-row (click)="navigateToFontPage(p2)"  style="padding:20px;">\n\n      <ion-col class = "col col-16 palettebox">palette #2 </ion-col>\n\n      <div *ngFor="let color of p2" class="palettediv">\n\n          <ion-col class="col" style="">\n\n            <div class="tear" [style.background-color]="color" style="display:inline-block !important;"></div>\n\n            <br><br>{{color}}\n\n          </ion-col>\n\n      </div>\n\n    </ion-row>\n\n    <ion-row (click)="navigateToFontPage(p3)"  style="padding:20px;">\n\n      <ion-col class = "col col-16 palettebox">palette #3 </ion-col>\n\n      <div *ngFor="let color of p3"  class="palettediv">\n\n          <ion-col class="col">\n\n            <div class="tear" [style.background-color]="color" style="display:inline-block !important;"></div>\n\n            <br><br>{{color}}\n\n          </ion-col>\n\n      </div>\n\n    </ion-row>\n\n    <ion-row (click)="navigateToFontPage(p4)"  style="padding:20px;">\n\n      <ion-col class = "col col-16 palettebox">palette #4 </ion-col>\n\n      <div *ngFor="let color of p4"  class="palettediv">\n\n          <ion-col class="col">\n\n            <div class="tear" [style.background-color]="color" style="display:inline-block !important;"></div>\n\n            <br><br>{{color}}\n\n          </ion-col>\n\n      </div>\n\n    </ion-row>\n\n\n\n    <ion-row id="menubottom">\n\n      <ion-col col-4 (click)="navigateToHomePage()" id=categorytab>\n\n        <img style="height:20px;width:20px;"id=chosenTheme [src]= "theme">\n\n      </ion-col>\n\n      <ion-col col-4 id=palletetab>\n\n        colors\n\n      </ion-col>\n\n      <ion-col col-4 id=fonttab>\n\n        fonts\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\emmas\Desktop\hucomm\src\pages\palette\palette.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PalettePage);
    return PalettePage;
}());

//# sourceMappingURL=palette.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saved_saved__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_email__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FontPage = /** @class */ (function () {
    function FontPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fontcombo1 = new Array();
        this.fontcombo2 = new Array();
        this.fontcombo3 = new Array();
        this.fontcombo4 = new Array();
        this.fontcombo5 = new Array();
        this.color1 = navParams.get('color1');
        this.color2 = navParams.get('color2');
        this.color3 = navParams.get('color3');
        this.color4 = navParams.get('color4');
        this.theme = "" + navParams.get('data') + "";
        this.fontcombo1 = navParams.get('font1');
        this.fontcombo2 = navParams.get('font2');
        this.fontcombo3 = navParams.get('font3');
        this.fontcombo4 = navParams.get('font4');
        this.fontcombo5 = navParams.get('font5');
        this.font1nameheader = this.fontcombo1[0];
        this.font1namebody = this.fontcombo1[1];
        this.font1codeheader = this.fontcombo1[2];
        this.font1codebody = this.fontcombo1[3];
        this.font2nameheader = this.fontcombo2[0];
        this.font2namebody = this.fontcombo2[1];
        this.font2codeheader = this.fontcombo2[2];
        this.font2codebody = this.fontcombo2[3];
        this.font3nameheader = this.fontcombo3[0];
        this.font3namebody = this.fontcombo3[1];
        this.font3codeheader = this.fontcombo3[2];
        this.font3codebody = this.fontcombo3[3];
        this.font4nameheader = this.fontcombo4[0];
        this.font4namebody = this.fontcombo4[1];
        this.font4codeheader = this.fontcombo4[2];
        this.font4codebody = this.fontcombo4[3];
        this.font5nameheader = this.fontcombo5[0];
        this.font5namebody = this.fontcombo5[1];
        this.font5codeheader = this.fontcombo5[2];
        this.font5codebody = this.fontcombo5[3];
    }
    FontPage.prototype.navigateToHomePage = function () {
        this.navCtrl.pop();
        this.navCtrl.pop();
    };
    FontPage.prototype.navigateToPalletePage = function () {
        this.navCtrl.pop();
    };
    FontPage.prototype.navigateToEmailPage = function (comboChosen) {
        var font1 = "";
        var font2 = "";
        var font1code = "";
        var font2code = "";
        if (comboChosen == 1) {
            font1 = this.font1nameheader;
            font2 = this.font1namebody;
            font1code = this.font1codeheader;
            font2code = this.font1codebody;
        }
        if (comboChosen == 2) {
            font1 = this.font2nameheader;
            font2 = this.font2namebody;
            font1code = this.font2codeheader;
            font2code = this.font2codebody;
        }
        if (comboChosen == 3) {
            font1 = this.font3nameheader;
            font2 = this.font3namebody;
            font1code = this.font3codeheader;
            font2code = this.font3codebody;
        }
        if (comboChosen == 4) {
            font1 = this.font4nameheader;
            font2 = this.font4namebody;
            font1code = this.font4codeheader;
            font2code = this.font4codebody;
        }
        if (comboChosen == 5) {
            font1 = this.font5nameheader;
            font2 = this.font5namebody;
            font1code = this.font5codeheader;
            font2code = this.font5codebody;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__email_email__["a" /* EmailPage */], {
            'color1': this.color1,
            'color2': this.color2,
            'color3': this.color3,
            'color4': this.color4,
            'data': this.theme,
            'font1': font1,
            'font2': font2,
            'font1code': font1code,
            'font2code': font2code
        });
    };
    FontPage.prototype.savedThemes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__saved_saved__["a" /* SavedPage */], {
            test: "test"
        });
    };
    FontPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-font',template:/*ion-inline-start:"C:\Users\emmas\Desktop\hucomm\src\pages\font\font.html"*/'\n\n\n\n\n\n<ion-content no-padding>\n\n    <div (click)="savedThemes()" id=savedthemesbookmark>saved themes\n\n    </div>\n\n    <ion-grid class="vertical-align-content" style="padding:0px;">\n\n\n\n        <ion-row id=instructrow>\n\n            <ion-col col-12 style="padding:15px;padding-top:30px;">\n\n                <span id=formatinstruct>choose a font combo</span>\n\n            </ion-col>\n\n        </ion-row>\n\n        <br>\n\n\n\n        <ion-row class="rowforpair" (click)=navigateToEmailPage(1)>\n\n            <ion-col col-2 class = "col title" style="padding-left:5px;">combo #1 </ion-col>\n\n            <ion-col class = "col fontpairbox" col-10 style="border-top: 1px solid #cecece;">\n\n                <span class="head" [style.font-family]=font1codeheader >{{font1nameheader}}</span><br>\n\n                <span class="body" [style.font-family]=font1codebody >{{font1namebody}}</span>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="rowforpair" (click)=navigateToEmailPage(2)>\n\n            <ion-col col-2 class = "col title">combo #2 </ion-col>\n\n            <ion-col class = "col fontpairbox" col-10>\n\n                <span class="head" [style.font-family]=font2codeheader >{{font2nameheader}}</span><br>\n\n                <span class="body" [style.font-family]=font2codebody >{{font2namebody}}</span>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row class="rowforpair" (click)=navigateToEmailPage(3)>\n\n            <ion-col col-2 class = "col title">combo #3 </ion-col>\n\n            <ion-col class = "col fontpairbox" col-10 >\n\n                <span class="head" [style.font-family]=font3codeheader >{{font3nameheader}}</span><br>\n\n                <span class="body" [style.font-family]=font3codebody >{{font3namebody}}</span>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row class="rowforpair" (click)=navigateToEmailPage(4)>\n\n            <ion-col col-2 class = "col title">combo #4 </ion-col>\n\n            <ion-col class = "col fontpairbox" col-10 >\n\n                <span class="head" [style.font-family]=font4codeheader >{{font4nameheader}}</span><br>\n\n                <span class="body" [style.font-family]=font4codebody >{{font4namebody}}</span>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row class="rowforpair" (click)=navigateToEmailPage(5)>\n\n            <ion-col col-2 class = "col title">combo #5 </ion-col>\n\n            <ion-col class = "col fontpairbox" col-10 >\n\n                <span class="head" [style.font-family]=font5codeheader >{{font5nameheader}}</span><br>\n\n                <span class="body" [style.font-family]=font5codebody >{{font5namebody}}</span>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n        <ion-row id="menubottom">\n\n            <ion-col col-4 (click)="navigateToHomePage()" id=categorytab>\n\n                     <img style="height:23px;width:23px;"id=chosenTheme [src]= "theme">\n\n            </ion-col>\n\n            <ion-col col-4 (click)="navigateToPalletePage()" id=palletetab>\n\n                <div class="tear3" [style.background-color]="color1" style="display:inline-block !important;"></div>\n\n                <div class="tear3" [style.background-color]="color2" style="display:inline-block !important;"></div>\n\n                <div class="tear3" [style.background-color]="color3" style="display:inline-block !important;"></div>\n\n                <div class="tear3" [style.background-color]="color4" style="display:inline-block !important;"></div>\n\n            </ion-col>\n\n            <ion-col col-4 id=fonttab>\n\n                fonts\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\emmas\Desktop\hucomm\src\pages\font\font.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FontPage);
    return FontPage;
}());

//# sourceMappingURL=font.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFontPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saved_saved__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_email__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomFontPage = /** @class */ (function () {
    function CustomFontPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.color1 = navParams.get('color1');
        this.color2 = navParams.get('color2');
        this.color3 = navParams.get('color3');
        this.color4 = navParams.get('color4');
        this.theme = "" + navParams.get('data') + "";
        this.headerfonts = navParams.get('headerfonts');
        this.bodyfonts = navParams.get('bodyfonts');
        this.headerfontisselected = false;
        this.bodyfontisselected = false;
    }
    CustomFontPage.prototype.navigateToHomePage = function () {
        this.navCtrl.pop();
        this.navCtrl.pop();
    };
    CustomFontPage.prototype.navigateToPalletePage = function () {
        this.navCtrl.pop();
    };
    CustomFontPage.prototype.savedThemes = function () {
        var element = document.getElementById("headerDiv");
        if (element.classList.contains("opened")) {
            //remove classes
            element.classList.remove("opened");
        }
        var element2 = document.getElementById("bodyDiv");
        if (element2.classList.contains("opened")) {
            //remove classes
            element2.classList.remove("opened");
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__saved_saved__["a" /* SavedPage */], {
            test: "test"
        });
    };
    CustomFontPage.prototype.showheaderDiv = function () {
        var element = document.getElementById("headerDiv");
        if (element.classList.contains("opened")) {
            //remove classes
            element.classList.remove("opened");
            element.style.display = "none";
            if (!this.headerfontisselected) {
                var element2_1 = document.getElementById("headerbutton");
                element2_1.style.paddingTop = "10vh";
                element2_1.style.paddingBottom = "11vh";
                return;
            }
        }
        else {
            element.classList.add("opened");
            element.style.display = "block";
            var element2_2 = document.getElementById("headerbutton");
            element2_2.style.paddingTop = "5vh !important";
            element2_2.style.paddingBottom = "5vh !important";
        }
        var element2 = document.getElementById("headerbutton");
        element2.style.paddingTop = "5vh";
        element2.style.paddingBottom = "5vh";
    };
    CustomFontPage.prototype.headerfontClicked = function (font) {
        var element = document.getElementById("headerDiv");
        element.style.display = "none";
        this.headerfontisselected = true;
        this.font1 = font[0];
        this.font1code = font[1];
        var element1 = document.getElementById("showclickedheaderDiv");
        element1.style.fontFamily = font[1];
        element1.style.display = "block";
        element1.innerHTML = "<span style='font-size:1.8rem;  font-family: Josefin Slab, serif !important;'>your selected header font:</span><br>" + this.font1 + "";
        var element2 = document.getElementById("headerbutton");
        element2.style.paddingTop = "5vh";
        element2.style.paddingBottom = "5vh";
        if (this.headerfontisselected && this.bodyfontisselected) {
            var element2_3 = document.getElementById("confirmError");
            element2_3.style.display = "none";
        }
    };
    CustomFontPage.prototype.bodyfontClicked = function (font) {
        var element = document.getElementById("bodyDiv");
        element.style.display = "none";
        this.bodyfontisselected = true;
        this.font2 = font[0];
        this.font2code = font[1];
        var element2 = document.getElementById("showclickedbodyDiv");
        element2.style.fontFamily = font[1];
        element2.style.display = "block";
        element2.innerHTML = "<span style='font-size:1.8rem; font-family: Josefin Slab, serif !important;'>your selected body font:</span><br>" + this.font2 + "";
        var element3 = document.getElementById("bodybutton");
        element3.style.paddingTop = "5vh";
        element3.style.paddingBottom = "5vh";
        if (this.headerfontisselected && this.bodyfontisselected) {
            var element2_4 = document.getElementById("confirmError");
            element2_4.style.display = "none";
        }
    };
    CustomFontPage.prototype.showbodyDiv = function () {
        var element = document.getElementById("bodyDiv");
        if (element.classList.contains("opened")) {
            //remove classes
            element.classList.remove("opened");
            element.style.display = "none";
            if (!this.bodyfontisselected) {
                var element2 = document.getElementById("bodybutton");
                element2.style.paddingTop = "10vh";
                element2.style.paddingBottom = "11vh";
            }
        }
        else {
            element.classList.add("opened");
            element.style.display = "block";
            var element2 = document.getElementById("bodybutton");
            element2.style.paddingTop = "5vh";
            element2.style.paddingBottom = "5vh";
        }
    };
    CustomFontPage.prototype.confirm = function () {
        if (this.headerfontisselected && this.bodyfontisselected) {
            var element = document.getElementById("headerDiv");
            if (element.classList.contains("opened")) {
                //remove classes
                element.classList.remove("opened");
            }
            var element2 = document.getElementById("bodyDiv");
            if (element2.classList.contains("opened")) {
                //remove classes
                element2.classList.remove("opened");
            }
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__email_email__["a" /* EmailPage */], {
                'color1': this.color1,
                'color2': this.color2,
                'color3': this.color3,
                'color4': this.color4,
                'data': this.theme,
                'font1': this.font1,
                'font2': this.font2,
                'font1code': this.font1code,
                'font2code': this.font2code
            });
        }
        else {
            var element2 = document.getElementById("confirmError");
            element2.style.display = "block";
            element2.innerHTML = "Please make sure you have both the header and body fonts selected!";
        }
    };
    CustomFontPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customfont',template:/*ion-inline-start:"C:\Users\emmas\Desktop\hucomm\src\pages\customfont\customfont.html"*/'\n\n\n\n<ion-content no-padding>\n\n\n\n    <!-- BOOKMARK FOR GOING TO SAVED THEMES PAGE -->\n\n    <div (click)="savedThemes()" id=savedthemesbookmark>saved themes</div>\n\n    <ion-grid style="padding:0px;">\n\n\n\n\n\n        <!-- INSTRUCTIONS FOR THE PAGE -->\n\n        <ion-row id=instructionrow>\n\n            <ion-col col-12 style="padding:15px;padding-top:30px;">\n\n                <span id=formattedinstructions>choose custom fonts</span>\n\n            </ion-col>\n\n        </ion-row>\n\n        <br>\n\n\n\n\n\n        <!-- ERROR MESSAGE IF TRY TO CONTINUE WITHOUT SELECTIONS -->\n\n        <div id = confirmError></div>\n\n\n\n\n\n\n\n        <!-- CHOOSE HEADER FONT MATERIAL -->\n\n        <button id=headerbutton (click)="showheaderDiv()">1<br><br>select header font</button>\n\n        <div id = headerDiv>\n\n            <ion-row *ngFor ="let font of headerfonts" (click)="headerfontClicked(font)" [id] = "font[0]" [style.font-family]= "font[1]" class="fontsToChooseFromRow">\n\n                <h1 class=fontsToChooseFrom>\n\n                    {{font[0]}}</h1>\n\n            </ion-row>\n\n        </div>\n\n        <div id = showclickedheaderDiv></div>\n\n\n\n\n\n\n\n        <!-- CHOOSE BODY FONT MATERIAL -->\n\n        <button id=bodybutton  (click)="showbodyDiv()">2<br><br>select body font</button>\n\n        <div id = bodyDiv>\n\n            <ion-row *ngFor ="let font of bodyfonts" (click)="bodyfontClicked(font)"  [id] = "font[0]" [style.font-family]= "font[1]" class=fontsToChooseFromRow>\n\n                <h1 class=fontsToChooseFrom>\n\n                    {{font[0]}}</h1>\n\n            </ion-row>\n\n        </div>\n\n        <div id = showclickedbodyDiv></div>\n\n\n\n\n\n        <!-- BUTTON TO CONFIRM FONTS AND CONTINUE TO NEXT PAGE -->\n\n        <button (click) ="confirm()" id=confirmButton>confirm selections</button>\n\n\n\n\n\n\n\n        <!-- BOTTOM MENU -->\n\n        <ion-row id="menubottom">\n\n            <ion-col col-4 (click)="navigateToHomePage()" id=categorytab>\n\n                     <img style="height:23px;width:23px;" [src]= "theme">\n\n            </ion-col>\n\n            <ion-col col-4 (click)="navigateToPalletePage()" id=palettetab>\n\n                <div class="tear3 tearblock" [style.background-color]="color1"></div>\n\n                <div class="tear3 tearblock" [style.background-color]="color2"></div>\n\n                <div class="tear3 tearblock" [style.background-color]="color3"></div>\n\n                <div class="tear3 tearblock" [style.background-color]="color4"></div>\n\n            </ion-col>\n\n            <ion-col col-4 id=fonttab>\n\n                fonts\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n\n\n\n\n\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\emmas\Desktop\hucomm\src\pages\customfont\customfont.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CustomFontPage);
    return CustomFontPage;
}());

//# sourceMappingURL=customfont.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__saved_saved__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_save_theme_save_theme__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RandomEmailPage = /** @class */ (function () {
    function RandomEmailPage(navCtrl, navParams, emailComposer, saveThemeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.saveThemeProvider = saveThemeProvider;
        this.color1 = navParams.get('color1');
        this.color2 = navParams.get('color2');
        this.color3 = navParams.get('color3');
        this.color4 = navParams.get('color4');
        this.email = "";
        this.theme = navParams.get('data');
        this.font1 = navParams.get('font1');
        this.font2 = navParams.get('font2');
        this.font1code = navParams.get('font1code');
        this.font2code = navParams.get('font2code');
        this.themeName = "";
    }
    RandomEmailPage.prototype.navigateToHomePage = function () {
        this.navCtrl.pop();
    };
    RandomEmailPage.prototype.savedThemes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__saved_saved__["a" /* SavedPage */], {
            dummy: "dummy",
            dummy2: "dummy2"
        });
    };
    RandomEmailPage.prototype.startNewTheme = function () {
        this.navCtrl.popToRoot();
    };
    RandomEmailPage.prototype.triggerSaveTheme = function () {
        var element = document.getElementById("saveThemeCard");
        element.style.display = "block";
        var saveButton = document.getElementById("saveButton");
        var themeNameInput = document.getElementById("themeNameInput");
        saveButton.style.display = "block";
        themeNameInput.style.display = "block";
        document.getElementById("newTheme").style.height = "6vh";
    };
    RandomEmailPage.prototype.saveTheme = function () {
        console.log(this.themeName);
        var element = document.getElementById("inputofname");
        element.style.backgroundColor = "#e8f7ca";
        element.style.color = "#abbc89";
        element.innerHTML = "your theme " + this.themeName + " was saved successfully!";
        this.saveThemeProvider.saveTheme(this.themeName, this.color1, this.color2, this.color3, this.color4, this.font1, this.font2);
        console.log(this.saveThemeProvider.getAllSavedThemesArray());
    };
    RandomEmailPage.prototype.remove = function (array, element) {
        var index = array.indexOf(element);
        if (index !== -1) {
            array.splice(index, 1);
        }
    };
    RandomEmailPage.prototype.sendEmail = function () {
        //replace all spaces in font names with a +
        var replaced1 = this.font1.split(' ').join('+');
        var replaced2 = this.font2.split(' ').join('+');
        var importLink1 = "//put in FIRST line of css file <br>  @import url('https://fonts.googleapis.com/css?family=" + replaced1 + "');<br><br>";
        var importLink2 = "//put in SECOND line of css file <br>  @import url('https://fonts.googleapis.com/css?family=" + replaced2 + "');<br><br>";
        var cssstyle1 = " //put in css file <br> h1,h2,h3,h4,h5,h6 {font-family:" + this.font1code + ";}";
        var cssstyle2 = " //put in css file <br> p {font-family:" + this.font2code + ";}";
        var emailContent = "COLORS:<br>//put in css file:<br>:root{<br>--color-one:" + this.color1 + ";<br>--color-two:" + this.color2 + ";<br>--color-three:" + this.color3 + ";<br>--color-four:" + this.color4 + ";<br>}<br>//to use these css variables =   background-color: var(--color-one);<br><br>FONTS:<br>" + importLink1 + "<br>" + importLink2 + "<br>" + cssstyle1 + "<br>" + cssstyle2;
        var email = {
            to: '',
            cc: '',
            attachments: [],
            subject: 'Eye for Design Theme',
            body: emailContent,
            isHtml: true
        };
        this.emailComposer.open(email);
        console.log("send email");
    };
    RandomEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-randomemail',template:/*ion-inline-start:"C:\Users\emmas\Desktop\hucomm\src\pages\randomemail\randomemail.html"*/'\n\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n\n\n\n\n\n<script>\n\nvar emailDoc = version.document || version.contentDocument;\n\ncurrentEmail = versionDoc.getElementById("selectedEmail").value;\n\n</script>\n\n\n\n<ion-content no-padding>\n\n\n\n  <!-- BOOKMARK TO GO TO SAVED THEME PAGE -->\n\n  <div (click)="savedThemes()" id=savedthemebookmark>saved themes\n\n  </div>\n\n  <ion-grid class="vertical-align-content" style="padding:0px;">\n\n\n\n    <!-- PAGE INFO -->\n\n    <ion-row id=instructrow>\n\n      <ion-col col-12 style="padding:15px;padding-top:30px;">\n\n        <span id=instructformat>your completed theme</span>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- THEME COLORS -->\n\n    <ion-row >\n\n      <ion-col class = "col col-12" id=colortitle>colors</ion-col>\n\n    </ion-row>\n\n    <ion-row style="padding: 0 15px;">\n\n      <ion-col class="col col-3">\n\n        <div class="tear" [style.background-color]="color1" style="display:inline-block !important;"></div>\n\n      </ion-col>\n\n      <ion-col class="col col-3">\n\n        <div class="tear" [style.background-color]="color2" style="display:inline-block !important;"></div>\n\n      </ion-col>\n\n      <ion-col class="col col-3">\n\n        <div class="tear" [style.background-color]="color3" style="display:inline-block !important;"></div>\n\n      </ion-col>\n\n      <ion-col class="col col-3">\n\n        <div class="tear" [style.background-color]="color4" style="display:inline-block !important;"></div>\n\n      </ion-col>\n\n    </ion-row><br>\n\n    <ion-row style="font-size: 80%; padding: 0 15px;">\n\n      <ion-col class="col col-3" >{{color1}}</ion-col>\n\n      <ion-col class="col col-3">{{color2}}</ion-col>\n\n      <ion-col class="col col-3">{{color3}}</ion-col>\n\n      <ion-col class="col col-3">{{color4}}</ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n    <!-- FONTS FOR THEME -->\n\n    <br><br>\n\n    <ion-row style="margin-bottom:1vh;">\n\n      <ion-col class = "col col-12" id=fonttitle>fonts</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class="col col-12"[style.font-family]=font1code id=head><h1>{{font1}}</h1></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class="col col-12" [style.font-family]=font2code id=body><h2>{{font2}}</h2></ion-col>\n\n    </ion-row>\n\n    <br>\n\n\n\n    <!-- OPTIONS TO SAVE, START NEW, SEND EMAIL FOR THEME -->\n\n    <button  (click)="triggerSaveTheme()" id=triggersavebutton>save your theme</button>\n\n    <div id=saveThemeCard style="display:none !important;">\n\n      <ion-item id=themeNameInput>\n\n        <ion-input id=inputofname placeholder="name your theme..." type="text" [(ngModel)]="themeName" ></ion-input>\n\n      </ion-item>\n\n      <button ion-button full  id="saveButton" (click)="saveTheme()">save</button>\n\n    </div>\n\n    <button id=newTheme (click)="startNewTheme()" >back to categories</button>\n\n    <button  (click)="sendEmail()" id=emailbutton>email the css code</button>\n\n\n\n\n\n\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\emmas\Desktop\hucomm\src\pages\randomemail\randomemail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_4__providers_save_theme_save_theme__["a" /* SaveThemeProvider */]])
    ], RandomEmailPage);
    return RandomEmailPage;
}());

//# sourceMappingURL=randomemail.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_randomemail_randomemail__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_palette_palette__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_custompalette_custompalette__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_email_email__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_font_font__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_saved_saved__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_customfont_customfont__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_save_theme_save_theme__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_palette_palette__["a" /* PalettePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_custompalette_custompalette__["a" /* CustomPalettePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_font_font__["a" /* FontPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_saved_saved__["a" /* SavedPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_customfont_customfont__["a" /* CustomFontPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_randomemail_randomemail__["a" /* RandomEmailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_palette_palette__["a" /* PalettePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_custompalette_custompalette__["a" /* CustomPalettePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_font_font__["a" /* FontPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_saved_saved__["a" /* SavedPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_customfont_customfont__["a" /* CustomFontPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_randomemail_randomemail__["a" /* RandomEmailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_15__providers_save_theme_save_theme__["a" /* SaveThemeProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_save_theme_save_theme__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SavedPage = /** @class */ (function () {
    function SavedPage(navCtrl, cd, emailComposer, navParams, saveThemeProvider, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.cd = cd;
        this.emailComposer = emailComposer;
        this.navParams = navParams;
        this.saveThemeProvider = saveThemeProvider;
        this.alertCtrl = alertCtrl;
        this.saveThemeProvider.getAllSavedThemes().then(function (result) {
            console.log("local storage for themes on saved page" + result);
            _this.savedThemes = result;
        });
        console.log(this.savedThemes);
    }
    SavedPage_1 = SavedPage;
    SavedPage.prototype.navigateToHomePage = function () {
        this.navCtrl.pop();
    };
    SavedPage.prototype.emailTheme = function (theme) {
        //replace all spaces in font names with a +
        var replaced1 = theme.font1.split(' ').join('+');
        var replaced2 = theme.font2.split(' ').join('+');
        var importLink1 = "//put in FIRST line of css file <br>  @import url('https://fonts.googleapis.com/css?family=" + replaced1 + "');<br><br>";
        var importLink2 = "//put in SECOND line of css file <br>  @import url('https://fonts.googleapis.com/css?family=" + replaced2 + "');<br><br>";
        var cssstyle1 = " //put in css file <br> h1,h2,h3,h4,h5,h6 {font-family:" + theme.font1code + ";}";
        var cssstyle2 = " //put in css file <br> p {font-family:" + theme.font2code + ";}";
        var emailContent = "COLORS:<br>//put in css file:<br>:root{<br>--color-one:" + theme.color1 + ";<br>--color-two:" + theme.color2 + ";<br>--color-three:" + theme.color3 + ";<br>--color-four:" + theme.color4 + ";<br>}<br>//to use these css variables =   background-color: var(--color-one);<br><br>FONTS:<br>" + importLink1 + "<br>" + importLink2 + "<br>" + cssstyle1 + "<br>" + cssstyle2;
        var email = {
            to: '',
            cc: '',
            attachments: [],
            subject: 'Eye for Design Theme',
            body: emailContent,
            isHtml: true
        };
        this.emailComposer.open(email);
        console.log("send email");
    };
    SavedPage.prototype.deleteTheme = function (index) {
        var _this = this;
        this.saveThemeProvider.deleteTheme(index);
        this.saveThemeProvider.getAllSavedThemes().then(function (result) {
            console.log("local storage for themes on saved page" + result);
            _this.savedThemes = result;
        });
    };
    //taken from the ionic framework docs https://ionicframework.com/docs/api/components/alert/AlertController/
    SavedPage.prototype.presentConfirm = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm delete',
            cssClass: 'grayText',
            message: 'Are you sure you want to delete this theme?',
            buttons: [
                {
                    text: 'Yes, Delete it',
                    cssClass: 'redText',
                    handler: function () {
                        _this.deleteTheme(index);
                        _this.navCtrl.pop();
                        _this.navCtrl.push(SavedPage_1, {
                            dummy: "dummy",
                            dummy2: "dummy2"
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SavedPage = SavedPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-saved',template:/*ion-inline-start:"C:\Users\emmas\Desktop\hucomm\src\pages\saved\saved.html"*/'\n\n\n\n<ion-content no-padding>\n\n\n\n    <!-- BUTTON TO GO BACK TO PREVIOUS PAGE -->\n\n    <div (click)="navigateToHomePage()" id=backbutton>back\n\n    </div>\n\n    <ion-grid class="vertical-align-content" style="padding:5px;height:14%;">\n\n\n\n        <!-- PAGE INTO -->\n\n        <ion-row id=inforow>\n\n            <ion-col col-12 style="padding:15px;padding-top:30px;">\n\n                <span id=formatinfo>your saved themes</span>\n\n            </ion-col>\n\n        </ion-row>\n\n        <br>\n\n\n\n    </ion-grid>\n\n\n\n    <!-- LISTING ALL SAVED THEMES -->\n\n    <div id=savedthemesdiv>\n\n        <div *ngFor="let t of savedThemes; let i = index" id=savedDiv>\n\n            {{t.name}}<hr>\n\n            <button color=light id=email ion-button clear (click)="emailTheme(t)">email</button>\n\n            <span class=gray>|</span>\n\n            <button color=light id=delete ion-button clear (click)="presentConfirm(i)">delete</button>\n\n            <br><br>\n\n            <ion-grid>\n\n                <ion-row style="padding: 0 15px;">\n\n                    <ion-col class="col col-3">\n\n                        <div class=tear [style.background-color]="t.color1"></div>\n\n                    </ion-col>\n\n                    <ion-col class="col col-3">\n\n                        <div class=tear [style.background-color]="t.color2"></div>\n\n                    </ion-col>\n\n                    <ion-col class="col col-3">\n\n                        <div class=tear [style.background-color]="t.color3"></div>\n\n                    </ion-col>\n\n                    <ion-col class="col col-3">\n\n                        <div class=tear [style.background-color]="t.color4"></div>\n\n                    </ion-col>\n\n                </ion-row><br><br>\n\n                <ion-row style="font-size: 80%; padding: 0 15px;">\n\n                    <ion-col class="col col-3">{{t.color1}}</ion-col>\n\n                    <ion-col class="col col-3">{{t.color2}}</ion-col>\n\n                    <ion-col class="col col-3">{{t.color3}}</ion-col>\n\n                    <ion-col class="col col-3">{{t.color4}}</ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col class="col col-6 gray"><h1 [style.font-family]="t.font1">{{t.font1}}</h1></ion-col>\n\n                    <ion-col class="col col-6 gray"><h2 [style.font-family]="t.font2">{{t.font2}}</h2></ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\emmas\Desktop\hucomm\src\pages\saved\saved.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_save_theme_save_theme__["a" /* SaveThemeProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SavedPage);
    return SavedPage;
    var SavedPage_1;
}());

//# sourceMappingURL=saved.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\emmas\Desktop\hucomm\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\emmas\Desktop\hucomm\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveThemeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var STORAGE_KEY = 'savedThemes';
/*
  Generated class for the SaveGameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SaveThemeProvider = /** @class */ (function () {
    function SaveThemeProvider(storage) {
        this.storage = storage;
        console.log('Hello SaveThemeProvider');
    }
    SaveThemeProvider.prototype.saveTheme = function (themeName, c1, c2, c3, c4, f1, f2) {
        var _this = this;
        var theme = { name: themeName, color1: c1, color2: c2, color3: c3, color4: c4, font1: f1, font2: f2 };
        return this.getAllSavedThemes().then(function (result) {
            console.log("local storage for save theme " + result);
            if (result) {
                result.push(theme);
                return _this.storage.set(STORAGE_KEY, result);
            }
            else {
                return _this.storage.set(STORAGE_KEY, [theme]);
            }
        });
    };
    SaveThemeProvider.prototype.reSaveTheme = function (index, themeName, c1, c2, c3, c4, f1, f2) {
        var _this = this;
        var theme = { name: themeName, color1: c1, color2: c2, color3: c3, color4: c4, font1: f1, font2: f2 };
        return this.getAllSavedThemes().then(function (result) {
            console.log("local storage for save theme " + result);
            if (result) {
                result.splice(index, 1, theme);
                return _this.storage.set(STORAGE_KEY, result);
            }
        });
    };
    SaveThemeProvider.prototype.deleteTheme = function (index) {
        var _this = this;
        return this.getAllSavedThemes().then(function (result) {
            if (result) {
                result.splice(index, 1);
                return _this.storage.set(STORAGE_KEY, result);
            }
        });
    };
    SaveThemeProvider.prototype.getAllSavedThemes = function () {
        var _this = this;
        return this.storage.ready().then(function () {
            return _this.storage.get(STORAGE_KEY);
        });
    };
    SaveThemeProvider.prototype.getAllSavedThemesArray = function () {
        var savedThemes = new Array();
        this.getAllSavedThemes().then(function (result) {
            savedThemes = result;
            console.log("local storage gave " + result);
            return savedThemes;
        });
    };
    SaveThemeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], SaveThemeProvider);
    return SaveThemeProvider;
}());

//# sourceMappingURL=save-theme.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custompalette_custompalette__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__saved_saved__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_save_theme_save_theme__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmailPage = /** @class */ (function () {
    function EmailPage(navCtrl, navParams, emailComposer, saveThemeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.saveThemeProvider = saveThemeProvider;
        this.color1 = navParams.get('color1');
        this.color2 = navParams.get('color2');
        this.color3 = navParams.get('color3');
        this.color4 = navParams.get('color4');
        this.email = "";
        this.theme = navParams.get('data');
        this.font1 = navParams.get('font1');
        this.font2 = navParams.get('font2');
        this.font1code = navParams.get('font1code');
        this.font2code = navParams.get('font2code');
        this.themeName = "";
    }
    EmailPage.prototype.navigateToHomePage = function () {
        this.navCtrl.pop();
        this.navCtrl.pop();
        this.navCtrl.pop();
    };
    EmailPage.prototype.navigateToPalletePage = function () {
        this.navCtrl.pop();
        this.navCtrl.pop();
    };
    EmailPage.prototype.navigateToFontPage = function () {
        this.navCtrl.pop();
    };
    EmailPage.prototype.savedThemes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__saved_saved__["a" /* SavedPage */], {
            dummy: "dummy",
            dummy2: "dummy2"
        });
    };
    EmailPage.prototype.startNewTheme = function () {
        this.navCtrl.popToRoot();
    };
    EmailPage.prototype.triggerSaveTheme = function () {
        var element = document.getElementById("saveThemeCard");
        element.style.display = "block";
        var saveButton = document.getElementById("saveButton");
        var themeNameInput = document.getElementById("themeNameInput");
        saveButton.style.display = "block";
        themeNameInput.style.display = "block";
    };
    EmailPage.prototype.saveTheme = function () {
        console.log(this.themeName);
        var element = document.getElementById("inputofname");
        element.style.backgroundColor = "#e8f7ca";
        element.style.color = "#abbc89";
        element.innerHTML = "your theme " + this.themeName + " was saved successfully!";
        this.saveThemeProvider.saveTheme(this.themeName, this.color1, this.color2, this.color3, this.color4, this.font1, this.font2);
        console.log(this.saveThemeProvider.getAllSavedThemesArray());
    };
    EmailPage.prototype.remove = function (array, element) {
        var index = array.indexOf(element);
        if (index !== -1) {
            array.splice(index, 1);
        }
    };
    EmailPage.prototype.sendEmail = function () {
        //replace all spaces in font names with a +
        var replaced1 = this.font1.split(' ').join('+');
        var replaced2 = this.font2.split(' ').join('+');
        var importLink1 = "//put in FIRST line of css file <br>  @import url('https://fonts.googleapis.com/css?family=" + replaced1 + "');<br><br>";
        var importLink2 = "//put in SECOND line of css file <br>  @import url('https://fonts.googleapis.com/css?family=" + replaced2 + "');<br><br>";
        var cssstyle1 = " //put in css file <br> h1,h2,h3,h4,h5,h6 {font-family:" + this.font1code + ";}";
        var cssstyle2 = " //put in css file <br> p {font-family:" + this.font2code + ";}";
        var emailContent = "COLORS:<br>//put in css file:<br>:root{<br>--color-one:" + this.color1 + ";<br>--color-two:" + this.color2 + ";<br>--color-three:" + this.color3 + ";<br>--color-four:" + this.color4 + ";<br>}<br>//to use these css variables =   background-color: var(--color-one);<br><br>FONTS:<br>" + importLink1 + "<br>" + importLink2 + "<br>" + cssstyle1 + "<br>" + cssstyle2;
        console.log(emailContent);
        var email = {
            to: '',
            cc: '',
            attachments: [],
            subject: 'Eye for Design Theme',
            body: emailContent,
            isHtml: true
        };
        this.emailComposer.open(email);
        console.log("send email");
    };
    EmailPage.prototype.customThemeChosen = function () {
        var blues = ["#5d667b", "#55707b", "#45547b", "#5765b0", "#39457b", "#236c75", "#34a0ae", "#040f7b", "#6dbdc9", "#7ab2b9", "#678997", "#80a9b0", "#6683d0", "#82bdd3", "#33377b", "#61808f", "#64c8c6", "#121f7b", "#a4afe3", "#477aed", "#7baefb", "#5a717b", "#60d1d3", "#477aed", "#2360bf", "#6f9df8", "#aacaf4", "#6f7fbe", "#60b5c1", "#4d687b", "#7698b8", "#2badb8", "#1f40b8"];
        var browns = ["#baa994", "#968663", "#7b6156", "#7b6972", "#7b6e58", "#7b6a72", "#594446", "#bca67f", "#67697b", "#7b4600", "#7b625e", "#bf834e", "#7b403b", "#7b5a43", "#7b4424", "#b7866d", "#7b615b", "#7b5650"];
        var greens = ["#617b66", "#727b63", "#6c7b4c", "#c5be8b", "#848b8c", "#8cae87", "#7acdad", "#d5ef9a", "#afc185", "#5c7b69", "#6c818f", "#74ab86", "#2e717b", "#589a1f", "#157b5c", "#617b62", "#787b39", "#acd247", "#83d780", "#68ad74", "#cae67c", "#caeff4", "#61c277", "#499259", "#647a7b", "#b8b14e", "#77b800"];
        var yellows = ["#d3af86", "#e3a83e", "#b79533", "#fdcb73", "#c29a50", "#bfb06b", "#d6a149", "#ffb822", "#d9a42e", "#f8e997", "#ffbd4a", "#feba08", "#dbff6b"];
        var creams = ["#e3d6cc", "#c9beb5", "#c9beb5", "#e3d6cc", "#cdb98f", "#e1d9d3"];
        var purples = ["#918696", "#9a82ae", "#524c7b", "#a275a5", "#b958c0", "#3e427d", "#57017b", "#584e9a", "#7a3a7b", "#6f467b", "#4b407b", "#7b1877", "#b760e6", "#dfd1ef", "#5546b8", "#9e38b8", "#575db8", "#cb07bd"];
        var oranges = ["#bf834e", "#8e6350", "#eb7244", "#e98441", "#cd745f", "#ee9547", "#d3725b", "#cd7746", "#ba6a00", "#eb8119", "#ab6141", "#e8926e", "#ffab37", "#ee9547"];
        var reds = ["#c94300", "#7b1416", "#d7000b", "#8c412a", "#e76753", "#ea4627", "#b80716"];
        var pinks = ["#7b536e", "#d9b1b0", "#f3bbaa", "#a16c6a", "#745a7b", "#e76753", "#e8926e", "#7b3446", "#ff9aac", "#ef447a", "#cdaad2", "#b83e81"];
        var grays = ["#c5bde1", "#a8a8a8", "#78787b"];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__custompalette_custompalette__["a" /* CustomPalettePage */], {
            'blues': blues,
            'browns': browns,
            'greens': greens,
            'yellows': yellows,
            'creams': creams,
            'purples': purples,
            'oranges': oranges,
            'reds': reds,
            'pinks': pinks,
            'grays': grays,
            'theme': "custom"
        });
    };
    EmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email',template:/*ion-inline-start:"C:\Users\emmas\Desktop\hucomm\src\pages\email\email.html"*/'\n\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n\n\n\n\n\n<script>\n\n    var emailDoc = version.document || version.contentDocument;\n\n    currentEmail = versionDoc.getElementById("selectedEmail").value;\n\n</script>\n\n\n\n<ion-content no-padding>\n\n\n\n    <!-- BOOKMARK TO GO TO SAVED THEMES PAGE -->\n\n    <div (click)="savedThemes()" id=savedthemebookmark>saved themes\n\n    </div>\n\n    <ion-grid class="vertical-align-content" style="padding:0px;">\n\n\n\n        <!-- PAGE TITLE -->\n\n        <ion-row id=instructrow>\n\n            <ion-col col-12 style="padding:15px;padding-top:30px;">\n\n                <span id=formattedinstruct>your completed theme</span>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <!-- COLORS CHOSEN FOR THEME -->\n\n        <ion-row >\n\n            <ion-col class = "col col-12" id=colortitle>colors</ion-col>\n\n        </ion-row>\n\n        <ion-row style="padding: 0 15px;">\n\n            <ion-col class="col col-3">\n\n                <div class="tear" [style.background-color]="color1" style="display:inline-block !important;"></div>\n\n            </ion-col>\n\n            <ion-col class="col col-3">\n\n                <div class="tear" [style.background-color]="color2" style="display:inline-block !important;"></div>\n\n            </ion-col>\n\n            <ion-col class="col col-3">\n\n                <div class="tear" [style.background-color]="color3" style="display:inline-block !important;"></div>\n\n            </ion-col>\n\n            <ion-col class="col col-3">\n\n                <div class="tear" [style.background-color]="color4" style="display:inline-block !important;"></div>\n\n            </ion-col>\n\n        </ion-row><br>\n\n        <ion-row style="font-size: 80%;    padding: 0 15px;">\n\n            <ion-col class="col col-3" >{{color1}}</ion-col>\n\n            <ion-col class="col col-3">{{color2}}</ion-col>\n\n            <ion-col class="col col-3">{{color3}}</ion-col>\n\n            <ion-col class="col col-3">{{color4}}</ion-col>\n\n        </ion-row>\n\n        <br><br>\n\n\n\n\n\n        <!-- FONTS CHOSEN FOR THEME -->\n\n        <ion-row style="margin:8px;">\n\n            <ion-col class = "col col-12" id=fonttitle>fonts</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col class="col col-12"[style.font-family]=font1code id=divforhead><h1 style="margin-bottom: 0.6rem;">{{font1}}</h1></ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col class="col col-12" [style.font-family]=font2code id=divforbody><h2>{{font2}}</h2></ion-col>\n\n        </ion-row>\n\n        <br>\n\n\n\n\n\n        <!-- SAVE THEME / START NEW / SEND EMAIL OPTIONS -->\n\n        <button (click)="triggerSaveTheme()" id=triggersavebutton>save your theme</button>\n\n        <div id=saveThemeCard style="display:none !important">\n\n            <ion-item id=themeNameInput>\n\n                <ion-input id=inputofname placeholder="name your theme..." type="text" [(ngModel)]="themeName"></ion-input>\n\n            </ion-item>\n\n            <button ion-button full  id="saveButton" (click)="saveTheme()">save</button>\n\n        </div>\n\n        <button  (click)="startNewTheme()" id=startnewbutton>start new theme</button>\n\n        <button  (click)="sendEmail()" id=sendemailbutton>email the css code</button>\n\n\n\n\n\n        <!-- BOTTOM MENU -->\n\n        <ion-row id="menubottom">\n\n            <ion-col col-4 (click)="navigateToHomePage()" id=categorytab>\n\n                     <img style="height:20px;width:20px;"id=chosenTheme [src]= "theme">\n\n            </ion-col>\n\n            <ion-col col-4 (click)="navigateToPalletePage()" id=palletetab>\n\n                <div class="tear3" [style.background-color]="color1" style="display:inline-block !important;"></div>\n\n                <div class="tear3" [style.background-color]="color2" style="display:inline-block !important;"></div>\n\n                <div class="tear3" [style.background-color]="color3" style="display:inline-block !important;"></div>\n\n                <div class="tear3" [style.background-color]="color4" style="display:inline-block !important;"></div>\n\n            </ion-col>\n\n            <ion-col (click)=navigateToFontPage() col-4 id="fonttab">\n\n                <span [style.font-family]=font1code>A</span><span [style.font-family]=font2code>a</span>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n\n\n    </ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\emmas\Desktop\hucomm\src\pages\email\email.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_5__providers_save_theme_save_theme__["a" /* SaveThemeProvider */]])
    ], EmailPage);
    return EmailPage;
}());

//# sourceMappingURL=email.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map