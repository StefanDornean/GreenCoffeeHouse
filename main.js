(self["webpackChunkangular_website_example"] = self["webpackChunkangular_website_example"] || []).push([["main"],{

/***/ 2605:
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPageComponent: () => (/* binding */ AboutPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _about_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-page.component.html?ngResource */ 554);
/* harmony import */ var _about_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-page.component.scss?ngResource */ 8658);
/* harmony import */ var _about_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _screen_size_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screen-size/screen-size.service */ 2661);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/config.service */ 5565);
/* harmony import */ var _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/scroll.service */ 5879);
var _class;








let AboutPageComponent = (_class = class AboutPageComponent {
  constructor(config, scrollService, screenSizeService, translate) {
    this.config = config;
    this.scrollService = scrollService;
    this.screenSizeService = screenSizeService;
    this.translate = translate;
  }
  ngOnInit() {
    // Example: Scroll to the third registered element
    this.scrollService.scrollToElement(2);
    this.getPageData('about' + 'ro');
    this.translate.onLangChange.subscribe(() => {
      this.getPageData('about' + this.translate.currentLang);
    });
  }
  getPageData(database) {
    this.about$ = this.config.getSettings(database);
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
}, {
  type: _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__.ScrollService
}, {
  type: _screen_size_screen_size_service__WEBPACK_IMPORTED_MODULE_2__.ScreenSizeService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
}], _class.propDecorators = {
  carouselContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['carouselExampleIndicators']
  }]
}, _class);
AboutPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-about-page',
  template: _about_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_about_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AboutPageComponent);

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 4320)).then(mod => mod.HomeModule)
}, {
  path: '404',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./notfound/notfound.module */ 8892)).then(mod => mod.NotfoundModule)
}, {
  path: '**',
  redirectTo: '/404'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
  declarations: []
})], AppRoutingModule);

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/scroll.service */ 5879);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
var _class;





let AppComponent = (_class = class AppComponent {
  constructor(scrollService, elementRef, translate) {
    this.scrollService = scrollService;
    this.elementRef = elementRef;
    this.translate = translate;
    this.title = 'Green Coffee House';
    translate.setDefaultLang('ro');
  }
  switchLang(lang) {
    this.translate.use(lang);
  }
  ngAfterViewInit() {
    // Register all elements with specific IDs
    const elements = this.elementRef.nativeElement.querySelectorAll('[id]');
    elements.forEach(element => {
      this.scrollService.registerElementWithId(element.id, element);
    });
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_1__.ScrollService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService
}], _class);
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AppComponent);

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-in-memory-web-api */ 5402);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 6515);
/* harmony import */ var _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navmenu/navmenu.component */ 3722);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ 2603);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ 4320);
/* harmony import */ var _notfound_notfound_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notfound/notfound.module */ 8892);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/config.service */ 5565);
/* harmony import */ var _shared_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/in-memory-data.service */ 8786);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home-page/home-page.component */ 7433);
/* harmony import */ var _offer_page_offer_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./offer-page/offer-page.component */ 6078);
/* harmony import */ var _attractions_page_attractions_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attractions-page/attractions-page.component */ 9536);
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-page/contact-page.component */ 6456);
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-page/about-page.component */ 2605);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 2459);
/* harmony import */ var ngx_bootstrap_navbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap-navbar */ 3080);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 6605);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ 614);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 5939);






// Components




// Modules



// Services















function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__.NavigationComponent, _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_2__.NavmenuComponent, _home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__.HomePageComponent, _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_13__.AboutPageComponent, _offer_page_offer_page_component__WEBPACK_IMPORTED_MODULE_10__.OfferPageComponent, _attractions_page_attractions_page_component__WEBPACK_IMPORTED_MODULE_11__.AttractionsPageComponent, _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_12__.ContactPageComponent],
  imports: [_home_home_module__WEBPACK_IMPORTED_MODULE_5__.HomeModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _notfound_notfound_module__WEBPACK_IMPORTED_MODULE_6__.NotfoundModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__.LayoutModule, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_21__.CarouselModule, ngx_bootstrap_navbar__WEBPACK_IMPORTED_MODULE_22__.NgxNavbarModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_23__.CollapseModule.forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_25__.ModalModule.forRoot(), angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_26__.HttpClientInMemoryWebApiModule.forRoot(_shared_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_8__.InMemoryDataService, {
    dataEncapsulation: false,
    passThruUnknownUrl: true
  }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient]
    }
  })],
  providers: [_shared_services_config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);

/***/ }),

/***/ 9536:
/*!****************************************************************!*\
  !*** ./src/app/attractions-page/attractions-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttractionsPageComponent: () => (/* binding */ AttractionsPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _attractions_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attractions-page.component.html?ngResource */ 3374);
/* harmony import */ var _attractions_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attractions-page.component.scss?ngResource */ 4698);
/* harmony import */ var _attractions_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_attractions_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _screen_size_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screen-size/screen-size.service */ 2661);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/config.service */ 5565);
/* harmony import */ var _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/scroll.service */ 5879);
var _class;








let AttractionsPageComponent = (_class = class AttractionsPageComponent {
  constructor(config, scrollService, screenSizeService, translate) {
    this.config = config;
    this.scrollService = scrollService;
    this.screenSizeService = screenSizeService;
    this.translate = translate;
  }
  ngOnInit() {
    // Example: Scroll to the third registered element
    this.scrollService.scrollToElement(4);
    this.getPageData('attractions' + 'ro');
    this.translate.onLangChange.subscribe(() => {
      this.getPageData('attractions' + this.translate.currentLang);
    });
    document.addEventListener('DOMContentLoaded', function () {
      const iconCardsContent = document.querySelector('.icon-cards_small_size__content');
      if (iconCardsContent) {
        iconCardsContent.addEventListener('click', function () {
          iconCardsContent.classList.toggle('paused');
        });
      }
    });
  }
  getPageData(database) {
    this.attractions$ = this.config.getSettings(database);
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
}, {
  type: _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__.ScrollService
}, {
  type: _screen_size_screen_size_service__WEBPACK_IMPORTED_MODULE_2__.ScreenSizeService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
}], _class);
AttractionsPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-attractions-page',
  template: _attractions_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_attractions_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AttractionsPageComponent);

/***/ }),

/***/ 6456:
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactPageComponent: () => (/* binding */ ContactPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _contact_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-page.component.html?ngResource */ 7844);
/* harmony import */ var _contact_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-page.component.css?ngResource */ 4888);
/* harmony import */ var _contact_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contact_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/scroll.service */ 5879);
var _class;





let ContactPageComponent = (_class = class ContactPageComponent {
  constructor(scrollService) {
    this.scrollService = scrollService;
  }
  ngOnInit() {
    // Example: Scroll to the third registered element
    this.scrollService.scrollToElement(5);
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_2__.ScrollService
}], _class);
ContactPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-contact-page',
  template: _contact_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_contact_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ContactPageComponent);

/***/ }),

/***/ 6515:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 2811);
/* harmony import */ var _footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css?ngResource */ 3727);
/* harmony import */ var _footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/config.service */ 5565);
var _class;






let FooterComponent = (_class = class FooterComponent {
  constructor(config) {
    this.config = config;
    // footer$: Observable<IFooter> = new Observable<IFooter>();
    this.footer$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable();
  }
  ngOnInit() {
    this.getPageData('footer');
  }
  getPageData(database, id) {
    this.footer$ = this.config.getSettings(database, id);
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
}], _class);
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FooterComponent);

/***/ }),

/***/ 7433:
/*!*******************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _home_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.component.html?ngResource */ 1361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/config.service */ 5565);
/* harmony import */ var _screen_size_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../screen-size/screen-size.service */ 2661);
/* harmony import */ var src_app_shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/scroll.service */ 5879);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
var _class;







let HomePageComponent = (_class = class HomePageComponent {
  constructor(config, scrollService, screenSizeService, translate) {
    this.config = config;
    this.scrollService = scrollService;
    this.screenSizeService = screenSizeService;
    this.translate = translate;
  }
  ngOnInit() {
    this.getPageData('home' + 'ro');
    this.translate.onLangChange.subscribe(() => {
      this.getPageData('home' + this.translate.currentLang);
    });
    this.scrollService.scrollToElement(1);
  }
  getPageData(database, id) {
    this.header$ = this.config.getSettings(database, id);
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService
}, {
  type: src_app_shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__.ScrollService
}, {
  type: _screen_size_screen_size_service__WEBPACK_IMPORTED_MODULE_2__.ScreenSizeService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService
}], _class);
HomePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-home-page',
  template: _home_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], HomePageComponent);

/***/ }),

/***/ 6058:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page.component */ 7433);




const routes = [{
  path: '',
  component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent
}];
let HomeRoutingModule = class HomeRoutingModule {};
HomeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HomeRoutingModule);

/***/ }),

/***/ 4320:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6058);




let HomeModule = class HomeModule {};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  //declarations: [HomePageComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule]
})], HomeModule);

/***/ }),

/***/ 2603:
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.component.html?ngResource */ 8334);
/* harmony import */ var _navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.component.css?ngResource */ 7510);
/* harmony import */ var _navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/config.service */ 5565);
/* harmony import */ var _screen_size_screen_size_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../screen-size/screen-size.service */ 2661);
/* harmony import */ var _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/scroll.service */ 5879);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
var _class;









let NavigationComponent = (_class = class NavigationComponent {
  constructor(scrollService, elementRef, location, config, screenSizeService, translate) {
    this.scrollService = scrollService;
    this.elementRef = elementRef;
    this.location = location;
    this.config = config;
    this.screenSizeService = screenSizeService;
    this.translate = translate;
    this.menuStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.database = 'menuro';
    this.databaseToggle = 'menuTogglero';
    this.isDropdownOpen = false;
    this.selectedLanguageImg = 'assets/images/logo-images/flag-ro.png';
    this.translate.onLangChange.subscribe(() => {
      this.database = 'menu' + this.translate.currentLang;
      this.databaseToggle = 'menuToggle' + this.translate.currentLang;
      this.getMenu();
    });
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  switchLang(lang, selectedLanguageImg) {
    this.translate.use(lang);
    this.selectedLanguageImg = selectedLanguageImg;
    this.isDropdownOpen = false;
  }
  ngOnInit() {
    this.menuOpen = false;
    this.getMenu();
  }
  toggleMenu(status) {
    this.menuOpen = status;
  }
  getMenu() {
    this.config.getSettings(this.database).subscribe(setting => {
      this.menu = setting;
    });
    this.config.getSettings(this.databaseToggle).subscribe(setting => {
      this.menuToggle = setting;
    });
  }
  ngAfterViewInit() {
    this.scrollService.registerElement(this.elementRef.nativeElement.parentElement);
  }
  // toggleMenu() {
  // 	this.menuStatus.emit(!this.menuOpen);
  // }
  scrollTo(pageId) {
    this.scrollService.scrollToElementById(pageId);
    this.toggleMenu(!this.menuOpen);
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__.ScrollService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location
}, {
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
}, {
  type: _screen_size_screen_size_service__WEBPACK_IMPORTED_MODULE_3__.ScreenSizeService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
}], _class.propDecorators = {
  menuStatus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }]
}, _class);
NavigationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-navigation',
  template: _navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NavigationComponent);

/***/ }),

/***/ 3722:
/*!**********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavmenuComponent: () => (/* binding */ NavmenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _navmenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navmenu.component.html?ngResource */ 6724);
/* harmony import */ var _navmenu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navmenu.component.scss?ngResource */ 5912);
/* harmony import */ var _navmenu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navmenu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _screen_size_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screen-size/screen-size.service */ 2661);
/* harmony import */ var _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/scroll.service */ 5879);
var _class;






let NavmenuComponent = (_class = class NavmenuComponent {
  constructor(scrollService, elementRef, screenSizeService) {
    this.scrollService = scrollService;
    this.elementRef = elementRef;
    this.screenSizeService = screenSizeService;
    this.menuStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngAfterViewInit() {
    this.scrollService.registerElement(this.elementRef.nativeElement.parentElement);
  }
  toggleMenu() {
    this.menuStatus.emit(!this.menuOpen);
  }
  scrollTo(pageId) {
    this.scrollService.scrollToElementById(pageId);
    this.toggleMenu();
  }
}, _class.ctorParameters = () => [{
  type: _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__.ScrollService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
}, {
  type: _screen_size_screen_size_service__WEBPACK_IMPORTED_MODULE_2__.ScreenSizeService
}], _class.propDecorators = {
  menu: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  menuOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  menuStatus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }]
}, _class);
NavmenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-navmenu',
  template: _navmenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_navmenu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NavmenuComponent);

/***/ }),

/***/ 3028:
/*!*******************************************************************!*\
  !*** ./src/app/notfound/notfound-page/notfound-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotfoundPageComponent: () => (/* binding */ NotfoundPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _notfound_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notfound-page.component.html?ngResource */ 9548);
/* harmony import */ var _notfound_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notfound-page.component.css?ngResource */ 6042);
/* harmony import */ var _notfound_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notfound_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let NotfoundPageComponent = class NotfoundPageComponent {};
NotfoundPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-notfound-page',
  template: _notfound_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_notfound_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NotfoundPageComponent);

/***/ }),

/***/ 5022:
/*!*****************************************************!*\
  !*** ./src/app/notfound/notfound-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotfoundRoutingModule: () => (/* binding */ NotfoundRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notfound-page/notfound-page.component */ 3028);




const routes = [{
  path: '',
  component: _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_0__.NotfoundPageComponent
}];
let NotfoundRoutingModule = class NotfoundRoutingModule {};
NotfoundRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], NotfoundRoutingModule);

/***/ }),

/***/ 8892:
/*!*********************************************!*\
  !*** ./src/app/notfound/notfound.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotfoundModule: () => (/* binding */ NotfoundModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _notfound_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notfound-routing.module */ 5022);
/* harmony import */ var _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notfound-page/notfound-page.component */ 3028);





let NotfoundModule = class NotfoundModule {};
NotfoundModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_1__.NotfoundPageComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _notfound_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotfoundRoutingModule]
})], NotfoundModule);

/***/ }),

/***/ 6078:
/*!****************************************************!*\
  !*** ./src/app/offer-page/offer-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfferPageComponent: () => (/* binding */ OfferPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _offer_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer-page.component.html?ngResource */ 301);
/* harmony import */ var _offer_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer-page.component.scss?ngResource */ 3916);
/* harmony import */ var _offer_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_offer_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7962);
/* harmony import */ var _screen_size_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screen-size/screen-size.service */ 2661);
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/config.service */ 5565);
/* harmony import */ var _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/scroll.service */ 5879);
var _class;









let OfferPageComponent = (_class = class OfferPageComponent {
  constructor(modalService, config, scrollService, screenSizeService, translate) {
    this.modalService = modalService;
    this.config = config;
    this.scrollService = scrollService;
    this.screenSizeService = screenSizeService;
    this.translate = translate;
    this.loadImages('offer' + 'ro');
    this.selectedIndex = 0;
  }
  ngOnInit() {
    this.scrollService.scrollToElement(2);
    this.getPageData('offer' + 'ro');
    this.translate.onLangChange.subscribe(() => {
      this.getPageData('offer' + this.translate.currentLang);
    });
  }
  loadImages(database) {
    this.config.getSettings(database).subscribe(data => {
      this.imagesTwin = data.twinRoom.images;
      this.imagesDouble = data.doubleRoom.images;
    });
  }
  getPageData(database) {
    this.offerdata$ = this.config.getSettings(database);
    this.offerdata$.subscribe(t => t);
  }
  openModal(imageUrl, type, index) {
    this.selectedImage = imageUrl;
    this.selectedIndex = index;
    this.type = type;
    this.modalRef = this.modalService.show(this.modalTemplate);
  }
  closeModal() {
    this.modalRef.hide();
  }
  nextImage() {
    if (this.type == 'twin') {
      this.selectedIndex = (this.selectedIndex + 1) % this.imagesTwin.length;
    } else {
      this.selectedIndex = (this.selectedIndex + 1) % this.imagesDouble.length;
    }
  }
  previousImage() {
    if (this.type == 'twin') {
      this.selectedIndex = (this.selectedIndex - 1 + this.imagesTwin.length) % this.imagesTwin.length;
    } else {
      this.selectedIndex = (this.selectedIndex - 1 + this.imagesDouble.length) % this.imagesDouble.length;
    }
  }
}, _class.ctorParameters = () => [{
  type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.BsModalService
}, {
  type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
}, {
  type: _shared_services_scroll_service__WEBPACK_IMPORTED_MODULE_4__.ScrollService
}, {
  type: _screen_size_screen_size_service__WEBPACK_IMPORTED_MODULE_2__.ScreenSizeService
}, {
  type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
}], _class.propDecorators = {
  modalTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['modalTemplate']
  }]
}, _class);
OfferPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-offer-page',
  template: _offer_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_offer_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], OfferPageComponent);

/***/ }),

/***/ 2661:
/*!****************************************************!*\
  !*** ./src/app/screen-size/screen-size.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenSizeService: () => (/* binding */ ScreenSizeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
var _class;



let ScreenSizeService = (_class = class ScreenSizeService {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.Breakpoints.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.Breakpoints.Small]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }
}, _class.ctorParameters = () => [{
  type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.BreakpointObserver
}], _class);
ScreenSizeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ScreenSizeService);

/***/ }),

/***/ 5565:
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigService: () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2389);
var _class;





let ConfigService = (_class = class ConfigService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'api/posts';
  }
  handleError(operation = 'operation', result) {
    return error => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(result);
    };
  }
  getSettings(database, id) {
    const url = id ? `api/${database}/${id}` : `api/${database}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(`Error getting data from ${database}`, [])));
  }
}, _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}], _class);
ConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], ConfigService);

/***/ }),

/***/ 8786:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/in-memory-data.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InMemoryDataService: () => (/* binding */ InMemoryDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


let InMemoryDataService = class InMemoryDataService {
  createDb() {
    const aboutro = {
      id: 1,
      name: 'Despre Noi',
      tagline: 'SUCCESS',
      title: 'Despre noi',
      description: ['Fie că o parte din suflet ați lăsat-o demult pe malurile Dunării, fie că ați cunoscut Sulina doar din paginile romanului lui Jean Bart, vă provocăm să uitați de freamătul marilor orașe, de grijile cotidiene și să vă lăsați purtați pe valurile Dunării până aproape de vărsarea ei în Marea Neagră, pe aleea Europolis 60.', 'Uitați de voi și acceptați invitația noastră la o ceașcă aromată de cafea, la o vorbă bună, la momente de relaxare și liniște... Lăsați în urmă grijile și frământările zilnice și bucurați-vă de peisajul de basm, de zilele însorite și redesoperiți starea de bine trecându-ne pragul...', 'Vă oferim condiții excelente de cazare, vă recomandăm cei mai ospitalieri localnici, cele mai gustoase preparate și modalități personalizate de petrecere a timpului liber, toate pentru a vă ajuta să trăiți farmecul de altădată al acestui oraș unic în lume...'],
      images: ['assets/images/green-coffee-house/IMG_2010.jpg', 'assets/images/green-coffee-house/IMG_2012.jpg', 'assets/images/green-coffee-house/IMG_2014.jpg', 'assets/images/green-coffee-house/IMG_2016.jpg', 'assets/images/green-coffee-house/IMG_2035.jpg']
    };
    const abouten = {
      id: 1,
      name: 'About us',
      tagline: 'SUCCESS',
      title: 'About us',
      description: ['Whether you left a part of your soul long ago on the banks of the Danube, or you have only known Sulina from the pages of Jean Bart novel, we challenge you to forget the hustle and bustle of big cities, the daily worries, and let yourselves be carried on the waves of the Danube until almost its mouth into the Black Sea, on Europolis Alley 60.', 'Forget about yourselves and accept our invitation to a fragrant cup of coffee, to a good chat, to moments of relaxation and peace... Leave behind the daily worries and anxieties and enjoy the fairy-tale landscape, the sunny days, and rediscover the feeling of well-being by crossing our threshold...', 'We offer excellent accommodation conditions, we recommend the most hospitable locals, the tastiest dishes, and personalized ways to spend your free time, all to help you experience the charm of this unique city in the world...'],
      images: ['assets/images/green-coffee-house/IMG_2010.jpg', 'assets/images/green-coffee-house/IMG_2012.jpg', 'assets/images/green-coffee-house/IMG_2014.jpg', 'assets/images/green-coffee-house/IMG_2016.jpg', 'assets/images/green-coffee-house/IMG_2035.jpg']
    };
    const photoGallery = ['assets/images/green-coffee-house/exterior.jpg', 'assets/images/green-coffee-house/exterior-1.jpg', 'assets/images/green-coffee-house/exterior-2.jpg', 'assets/images/green-coffee-house/exterior-3.jpg', 'assets/images/green-coffee-house/exterior-4.jpg', 'assets/images/green-coffee-house/exterior-5.jpg', 'assets/images/green-coffee-house/exterior-6.jpg', 'assets/images/green-coffee-house/exterior-7.jpg', 'assets/images/green-coffee-house/exterior-8.jpg', 'assets/images/green-coffee-house/exterior-9.jpg', 'assets/images/green-coffee-house/exterior-10.jpg', 'assets/images/green-coffee-house/exterior-11.jpg', 'assets/images/green-coffee-house/interior.jpg', 'assets/images/green-coffee-house/interior-1.jpg', 'assets/images/green-coffee-house/interior-2.jpg', 'assets/images/green-coffee-house/interior-3.jpg', 'assets/images/green-coffee-house/interior-4.jpg', 'assets/images/green-coffee-house/restaurant.jpg', 'assets/images/green-coffee-house/restaurant1.jpg'];
    const offerro = {
      doubleRoom: {
        title: 'Cameră dublă',
        mainimg: 'assets/images/green-coffee-house/dubla1.jpg',
        images: ['assets/images/green-coffee-house/dubla1.jpg', 'assets/images/green-coffee-house/dubla2.jpg', 'assets/images/green-coffee-house/camera-1.jpg', 'assets/images/green-coffee-house/camera-2.jpg', 'assets/images/green-coffee-house/camera-2-1.jpg', 'assets/images/green-coffee-house/camera-3.jpg', 'assets/images/green-coffee-house/camera-4.jpg', 'assets/images/green-coffee-house/camera-matrimoniala.jpg', 'assets/images/green-coffee-house/baie.jpg', 'assets/images/green-coffee-house/baie-4.jpg', 'assets/images/green-coffee-house/balcon.jpg', 'assets/images/green-coffee-house/balcon2.jpg']
      },
      twinRoom: {
        title: 'Cameră twin',
        mainimg: 'assets/images/green-coffee-house/twin.jpg',
        images: ['assets/images/green-coffee-house/twin.jpg', 'assets/images/green-coffee-house/camera-twin.jpg', 'assets/images/green-coffee-house/camera-twin1.jpg', 'assets/images/green-coffee-house/camera-twin2.jpg', 'assets/images/green-coffee-house/camera-twin3.jpg', 'assets/images/green-coffee-house/twin3.jpg', 'assets/images/green-coffee-house/twin4.jpg', 'assets/images/green-coffee-house/baie.jpg', 'assets/images/green-coffee-house/baie-4.jpg', 'assets/images/green-coffee-house/balcon.jpg', 'assets/images/green-coffee-house/balcon2.jpg']
      },
      description1: ['Camerele spațioase, mobilate elegant, cu plase de țânțari și obloane, beneficiază de serviciu zilnic de menaj.', 'Prosoapele şi lenjeria de pat sunt incluse în tarif. Pentru un plus de confort, există articole de toaletă gratuite şi uscător de păr.'],
      description2: ['Orice tip de pat suplimentar sau pătuţ de copil este furnizat la cerere şi trebuie să fie confirmat de hotel. Suplimentele nu sunt calculate automat în preţul total şi vor fi plătite separat în timpul sejurului.', 'Prețul include și micul dejun.'],
      prices: [{
        dates: '01.05 – 15.06',
        price: '380',
        other: '*mic dejun inclus'
      }, {
        dates: '16.06 – 31.08',
        price: '480',
        other: '*mic dejun inclus'
      }, {
        dates: '31.08 - 30.09',
        price: '380',
        other: '*mic dejun inclus'
      }],
      facilities: [{
        name: 'Aer condiționat',
        icon: ''
      }, {
        name: 'Baie privată cu duș',
        icon: ''
      }, {
        name: 'TV Led',
        icon: ''
      }, {
        name: 'WiFi',
        icon: ''
      }, {
        name: 'Minibar',
        icon: ''
      }, {
        name: 'Vedere la mare',
        icon: ''
      }]
    };
    const offeren = {
      doubleRoom: {
        title: 'Double room',
        mainimg: 'assets/images/green-coffee-house/dubla1.jpg',
        images: ['assets/images/green-coffee-house/dubla2.jpg', 'assets/images/green-coffee-house/camera-1.jpg', 'assets/images/green-coffee-house/camera-2.jpg', 'assets/images/green-coffee-house/camera-2-1.jpg', 'assets/images/green-coffee-house/camera-3.jpg', 'assets/images/green-coffee-house/camera-4.jpg', 'assets/images/green-coffee-house/camera-matrimoniala.jpg', 'assets/images/green-coffee-house/baie.jpg', 'assets/images/green-coffee-house/baie-4.jpg', 'assets/images/green-coffee-house/balcon.jpg', 'assets/images/green-coffee-house/balcon2.jpg']
      },
      twinRoom: {
        title: 'Twin room',
        mainimg: 'assets/images/green-coffee-house/twin.jpg',
        images: ['assets/images/green-coffee-house/camera-twin.jpg', 'assets/images/green-coffee-house/camera-twin1.jpg', 'assets/images/green-coffee-house/camera-twin2.jpg', 'assets/images/green-coffee-house/camera-twin3.jpg', 'assets/images/green-coffee-house/twin3.jpg', 'assets/images/green-coffee-house/twin4.jpg', 'assets/images/green-coffee-house/baie.jpg', 'assets/images/green-coffee-house/baie-4.jpg', 'assets/images/green-coffee-house/balcon.jpg', 'assets/images/green-coffee-house/balcon2.jpg']
      },
      description1: ['The spacious rooms, elegantly furnished, with mosquito nets and shutters, benefit from daily maid service.', 'Towels and bed linen are included in the rate. For added comfort, there are complimentary toiletries and a hairdryer.'],
      description2: ['Any type of extra bed or crib is provided upon request and must be confirmed by the hotel. Supplements are not automatically calculated in the total cost and will be paid for separately during your stay.', 'The price includes breakfast.'],
      prices: [{
        dates: '01.05 – 15.06',
        price: '380',
        other: '*breakfast included'
      }, {
        dates: '16.06 – 31.08',
        price: '480',
        other: '*breakfast included'
      }, {
        dates: '31.08 - 30.09',
        price: '380',
        other: '*breakfast included'
      }],
      facilities: [{
        name: 'Air conditioning',
        icon: ''
      }, {
        name: 'Private bathroom with shower',
        icon: ''
      }, {
        name: 'LED TV',
        icon: ''
      }, {
        name: 'WiFi',
        icon: ''
      }, {
        name: 'Minibar',
        icon: ''
      }, {
        name: 'Sea view',
        icon: ''
      }]
    };
    const homero = {
      id: 7,
      name: 'header',
      tagline: 'GREEN COFEE HOUSE',
      title: 'Uitați de voi și acceptați invitația noastră la o ceașcă aromată de cafea, la o vorbă bună, la momente de relaxare și liniște... Lăsați în urmă grijile și frământările zilnice și bucurați-vă de peisajul de basm, de zilele însorite și redescoperiți starea de bine trecându-ne pragul.',
      buttontext: 'Contactează-ne!',
      buttonlink: '/home',
      image: 'bg-web-3.jpg'
    };
    const homeen = {
      id: 7,
      name: 'header',
      tagline: 'GREEN COFEE HOUSE',
      title: 'Forget about yourselves and accept our invitation to a fragrant cup of coffee, to a good chat, to moments of relaxation and peace... Leave behind the daily worries and anxieties and enjoy the fairy-tale landscape, the sunny days, and rediscover the feeling of well-being by crossing our threshold.',
      buttontext: 'Contactează-ne!',
      buttonlink: '/home',
      image: 'bg-web-3.jpg'
    };
    const footer = [{
      id: 6,
      name: 'footer',
      tagline: 'Made with ❤ by SculptCode',
      developer: 'SculptCode',
      developerlink: 'sculptcode.com'
    }];
    const attractionsro = [{
      id: 1,
      name: 'Catedrala Sfântul Alexandru',
      description: ['Catedrala ortodoxă din Alexandria, județul Teleorman, cu hramul „Sfântul Alexandru”, a fost construită în perioada 1869 - 1898. Este realizată în stil bizantino-romanic. Prăznuit pe 30 august, sfântul Alexandru a fost episcop la Constantinopol sub domnia împăratului Constantin cel Mare (313-337), luând parte la sinodul ecumenic de la Niceea în anul 325.', 'Picturile murale interioare în ulei au fost realizate în anul 1898 de către o echipă formată din Constantin Artachino, Constantin Pascali și Ștefan Luchian. Picturile au fost executate în stil bizantin, iar catapeteasma a fost realizată în stil neogotic, având înălțimea de 10 metri.. După cutremurul din 1940, frescele au fost restaurate de pictorii Constantin Artachino și Ștefan Panciu.', 'Inițial a fost construită din lemn, în 1836, la doi ani de la înființarea orașului de către domnitorul Țării Românești, Alexandru D. Ghica (aprilie 1834 - 7 octombrie 1842). Până în 1996 a funcționat ca Biserica Sf. Alexandru. Din 1996 a devenit catedrală episcopală. DIn anul 2004 a fost clasată ca monument istoric, cod LMI TR-II-m-A-14255.'],
      pictures: ['assets/images/green-coffee-house/Alexandria_Catedrala.jpg']
    }, {
      id: 2,
      name: 'Delta Dunării',
      description: ['La 50 de metri de Green Coffee House este punctul de întâlnire cu "Domnul Edy". Cu el veți porni în aventură pe canalele Dunării... Când? Unde? Care? Cum? Totul se stabilește la o ceașcă de cafea, pe terasa Green Coffee House. Credem că tu ești cel care trebuie să decidă ora plecării, durata și destinația. Odată stabilite detaliile aventurii, uitați de griji, de frământările zilnice și bucurați-vă de peisajul de basm, de zilele însorite, lăsându-vă purtați pe valurile Dunării...'],
      pictures: ['assets/images/green-coffee-house/Delta_Dunarii_500.jpg']
    }, {
      id: 3,
      name: 'Pădurea Letea',
      description: ['Pădurea Letea ( 2825 ha ) : Pădurea Letea este situată în partea de nord a Deltei, la est de comuna C.A.Rosetti. Zona strict protejată cuprinde doar o parte din suprafața totală a pădurii, parte ce a fost pusă sub ocrotire încă din anul 1930 și devenită rezervație naturală începând cu 1938.', 'Pădurea s-a dezvoltat sub forma unor fâșii late (“hasmacuri”) în spațiile dintre dunele de nisip și este formată din stejar de lunca, stejar brumariu, plop alb, frasin de lunca, tei alb.', 'O caracteristică a pădurii o constituie abundența de plante cataratoare: vița sălbatică, hameiul, curpenul de pădure și nu în ultimul rând liana grecească (Periploca graeca), cea care dă pădurii un aspect mediteranean. Totodată, aici au fost identificate peste 2.000 de specii de insecte, vipera de nisip (Vipera ursinii), vulturul codalb (Haliaeetus albicilla) - care cuibărește aici, trei specii de șoim, corbul, etc.', 'Toate aceste specii de plante și animale, unele dintre ele foarte rare sau cu caracteristici deosebite au făcut ca această pădure să necesite o atenție deosebită pentru conservarea și păstrarea valorilor ei naturale.'],
      pictures: ['assets/images/green-coffee-house/padurea-letea.jpg']
    }, {
      id: 4,
      name: 'Parcul AFDJ',
      description: ['Palatul Comisiei Europene a Dunării este un monument istoric situat pe Strada I din orașul Sulina, România. Palatul a fost sediul Comisiunii Europene a Dunării până în anul 1921, intrând apoi în administrarea statului român. Clădirea este acum sediul Secției Căilor Navigabile Sulina din cadrul Administrației Fluviale a Dunării de Jos.', 'Construcția palatului a fost demarată de Comisiunea Europeană a Dunării în anul 1860 și s-a încheiat în 1868. Scopul ridicării clădirii era de a găzdui membrii Comisiei precum și activitatea Secretariatului General al acesteia. De-a lungul timpului, palatul a avut parte de mai multe renovări.', 'În 1917, în timpul Primului Război Mondial, palatul a fost grav afectat de bombardamentele armatei germane. După război clădirea a fost refăcută și a continuat să fie administrată de Comisia Dunării până în 1921, când a intrat în patrimoniul statului român. Ea a fost reproiectată între anii 1922 – 1923, când a fost reconstruită pe o fundație de piatră și cu ziduri din cărămidă și cuprindea un subsol, o mansardă și două etaje.'],
      pictures: ['assets/images/green-coffee-house/parcul-afdj.jpg']
    }, {
      id: 5,
      name: 'Plaja Sulina',
      description: ['Situată la numai 200 de metri de Green Coffee House, plaja Sulina este locul ideal unde îți poți petrece o zi de vacanță... sau chiar mai multe. Cât e ziua de lungă te poți relaxa la soare, pe nisipul fin, sau pe șezlong, la umbră. Seara te poți distra la o petrecere pe plajă sau la un foc de tabără, iar dacă te prinde dimineața tot aici, poți începe ziua cu o alergare ușoară, o baie în mare sau o sesiune de yoga la răsărit.', 'Situată la aproximativ 3km de orașul Sulina, poți ajunge pe jos în 20-30 de minute, sau cu maxi-taxi, pe un drum ce seamănă cu un drum prin preerie. Nisipul este fin, apa mării este mică ca adâncime până în larg și este foarte limpede, lipsită de alge.', 'Plaja Sulina, este o zonă de importanță ecologică, aici se dezvoltă volbura de nisip, o plantă de pe lista roșie a speciilor protejate.', 'Anul acesta, se pare că prin Proiectul de amenajare a plajei de la Sulina se va compromite unicitatea acestui loc. Se ajunge cu un mijloc de transport naval din Tulcea până în localitatea Sulina și apoi la picior sau cu maxi-taxi până la plajă.'],
      pictures: ['assets/images/green-coffee-house/plaja-sulina.jpg']
    }];
    const attractionsen = [{
      "id": 1,
      "name": "Saint Alexander Cathedral",
      "description": ["The Orthodox cathedral in Alexandria, Teleorman County, dedicated to 'Saint Alexander', was built between 1869 and 1898. It is constructed in the Byzantine-Romanesque style. Celebrated on August 30th, Saint Alexander was a bishop in Constantinople during the reign of Emperor Constantine the Great (313-337), participating in the ecumenical council of Nicaea in the year 325.", "The interior oil mural paintings were executed in 1898 by a team consisting of Constantin Artachino, Constantin Pascali, and Ștefan Luchian. The paintings were done in the Byzantine style, and the iconostasis was crafted in the neo-Gothic style, reaching a height of 10 meters. After the earthquake of 1940, the frescoes were restored by the painters Constantin Artachino and Ștefan Panciu.", "Originally built of wood in 1836, two years after the founding of the city by the ruler of Wallachia, Alexandru D. Ghica (April 1834 - October 7, 1842). Until 1996, it functioned as the Church of St. Alexander. Since 1996, it has been the Episcopal Cathedral. In 2004, it was classified as a historical monument, with LMI code TR-II-m-A-14255."],
      "pictures": ["assets/images/green-coffee-house/Alexandria_Catedrala.jpg"]
    }, {
      "id": 2,
      "name": "Danube Delta",
      "description": ["Located 50 meters from Green Coffee House is the meeting point with 'Mr. Edy'. With him, you will embark on an adventure through the channels of the Danube... When? Where? Which? How? Everything is settled over a cup of coffee, on the terrace of Green Coffee House. We believe that you should be the one to decide the departure time, duration, and destination. Once the adventure details are settled, forget about worries, daily anxieties, and enjoy the fairy-tale landscape, the sunny days, letting yourself be carried away on the waves of the Danube...", "Situated approximately 3km from the town of Sulina, you can reach it on foot in 20-30 minutes, or by maxi-taxi, on a road that resembles a prairie. The sand is fine, the sea water is shallow, and very clear, free of algae.", "Sulina Beach is an ecologically important area where sand couchgrass grows, a plant from the Red List of protected species.", "This year, it seems that through the Sulina Beach Arrangement Project, the uniqueness of this place will be compromised. You can reach it by boat from Tulcea to the locality of Sulina and then by foot or by maxi-taxi to the beach."],
      "pictures": ["assets/images/green-coffee-house/Delta_Dunarii_500.jpg"]
    }, {
      "id": 3,
      "name": "Letea Forest",
      "description": ["Letea Forest (2825 ha): Letea Forest is located in the northern part of the Delta, east of the C.A.Rosetti commune. The strictly protected area covers only a part of the total forest area, a part that has been under protection since 1930 and became a natural reserve starting in 1938.", "The forest has developed in the form of wide strips ('hasmacuri') in the spaces between the sand dunes and is composed of riparian oak, downy oak, white poplar, riparian ash, and white lime.", "A characteristic of the forest is the abundance of climbing plants: wild grapevine, hops, wild cucumber, and last but not least, the Greek privet (Periploca graeca), which gives the forest a Mediterranean aspect. At the same time, over 2,000 species of insects have been identified here, including the sand viper (Vipera ursinii), the white-tailed eagle (Haliaeetus albicilla) - which nests here, three species of falcon, the raven, etc.", "All these plant and animal species, some of them very rare or with special characteristics, have made this forest require special attention for the conservation and preservation of its natural values."],
      "pictures": ["assets/images/green-coffee-house/padurea-letea.jpg"]
    }, {
      "id": 4,
      "name": "AFDJ Park",
      "description": ["The Palace of the European Commission of the Danube is a historic monument located on I Street in the town of Sulina, Romania. The Palace served as the headquarters of the European Commission of the Danube until 1921, when it came under the administration of the Romanian state. The building is now the headquarters of the Sulina Waterways Section of the Lower Danube River Administration.", "Construction of the palace was initiated by the European Commission of the Danube in 1860 and was completed in 1868. The purpose of building the structure was to accommodate Commission members as well as the activities of its General Secretariat. Over time, the palace has undergone several renovations.", "In 1917, during the First World War, the palace was heavily damaged by German army bombardments. After the war, the building was rebuilt and continued to be administered by the Danube Commission until 1921, when it entered the Romanian state's heritage. It was redesigned between 1922-1923, when it was rebuilt on a stone foundation with brick walls and comprised a basement, an attic, and two floors."],
      "pictures": ["assets/images/green-coffee-house/parcul-afdj.jpg"]
    }, {
      "id": 5,
      "name": "Sulina Beach",
      "description": ["Located just 200 meters from Green Coffee House, Sulina Beach is the ideal place to spend a day... or even more. Throughout the day, you can relax in the sun, on the fine sand, or on a sun lounger in the shade. In the evening, you can enjoy a beach party or a campfire, and if you catch the morning here, you can start the day with a light jog, a swim in the sea, or a yoga session at sunrise.", "Sulina Beach, situated approximately 3km from the town of Sulina, can be reached on foot in 20-30 minutes, or by maxi-taxi, on a road that resembles a prairie. The sand is fine, the sea water is shallow, and very clear, free of algae.", "Sulina Beach is an ecologically important area where sand couchgrass grows, a plant from the Red List of protected species.", "This year, it seems that through the Sulina Beach Arrangement Project, the uniqueness of this place will be compromised. You can reach it by boat from Tulcea to the locality of Sulina and then by foot or by maxi-taxi to the beach."],
      "pictures": ["assets/images/green-coffee-house/plaja-sulina.jpg"]
    }];
    const images = [{
      id: 1,
      name: 'gallery-image-1.jpg'
    }, {
      id: 2,
      name: 'gallery-image-2.jpg'
    }, {
      id: 3,
      name: 'gallery-image-3.jpg'
    }, {
      id: 4,
      name: 'gallery-image-4.jpg'
    }, {
      id: 5,
      name: 'gallery-image-5.jpg'
    }, {
      id: 6,
      name: 'gallery-image-6.jpg'
    }];
    const menuro = [{
      id: 2,
      pageId: "about",
      title: 'Despre Noi',
      type: 1,
      link: '/about'
    }, {
      id: 3,
      pageId: "offer",
      title: 'Ofertă',
      type: 1,
      link: '/offer'
    }, {
      id: 4,
      pageId: "home",
      title: 'Logo',
      type: 2,
      logoImg: 'assets/images/logo.png',
      link: '/home'
    }, {
      id: 5,
      pageId: "attractions",
      title: 'Atracții',
      type: 1,
      link: '/attractions'
    }, {
      id: 6,
      pageId: "contact",
      title: 'Contact',
      type: 1,
      link: '/contact'
    }];
    const menuen = [{
      id: 2,
      pageId: "about",
      title: 'About',
      type: 1,
      link: '/about'
    }, {
      id: 3,
      pageId: "offer",
      title: 'Offer',
      type: 1,
      link: '/offer'
    }, {
      id: 4,
      pageId: "home",
      title: 'Logo',
      type: 2,
      logoImg: 'assets/images/logo.png',
      link: '/home'
    }, {
      id: 5,
      pageId: "attractions",
      title: 'Attractions',
      type: 1,
      link: '/attractions'
    }, {
      id: 6,
      pageId: "contact",
      title: 'Contact',
      type: 1,
      link: '/contact'
    }];
    const menuTogglero = [{
      id: 2,
      pageId: "about",
      title: 'Despre Noi',
      type: 1,
      link: '/about'
    }, {
      id: 3,
      pageId: "offer",
      title: 'Ofertă',
      type: 1,
      link: '/offer'
    }, {
      id: 5,
      pageId: "attractions",
      title: 'Atracții',
      type: 1,
      link: '/attractions'
    }, {
      id: 6,
      pageId: "contact",
      title: 'Contact',
      type: 1,
      link: '/contact'
    }];
    const menuToggleen = [{
      id: 2,
      pageId: "about",
      title: 'About',
      type: 1,
      link: '/about'
    }, {
      id: 3,
      pageId: "offer",
      title: 'Offer',
      type: 1,
      link: '/offer'
    }, {
      id: 5,
      pageId: "attractions",
      title: 'Attractions',
      type: 1,
      link: '/attractions'
    }, {
      id: 6,
      pageId: "contact",
      title: 'Contact',
      type: 1,
      link: '/contact'
    }];
    return {
      aboutro,
      abouten,
      offerro,
      offeren,
      photoGallery,
      menuro,
      menuen,
      menuTogglero,
      menuToggleen,
      attractionsen,
      attractionsro,
      homero,
      homeen,
      images,
      footer
    };
  }
};
InMemoryDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], InMemoryDataService);

/***/ }),

/***/ 5879:
/*!***************************************************!*\
  !*** ./src/app/shared/services/scroll.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollService: () => (/* binding */ ScrollService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);

// scroll.service.ts

let ScrollService = class ScrollService {
  constructor() {
    this.elementsToScroll = [];
    this.elementsToScrollId = {};
  }
  registerElement(element) {
    this.elementsToScroll.push(element);
  }
  scrollToElement(index) {
    if (index >= 0 && index < this.elementsToScroll.length) {
      this.elementsToScroll[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  registerElementWithId(id, element) {
    this.elementsToScrollId[id] = element;
  }
  scrollToElementById(id) {
    const element = this.elementsToScrollId[id];
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};
ScrollService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], ScrollService);

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 4888:
/*!********************************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3727:
/*!********************************************************!*\
  !*** ./src/app/footer/footer.component.css?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer-social app-social {
  float: right;
  right: 10px;
  margin-right: 0;
  margin-left: 15px;
}
`, "",{"version":3,"sources":["webpack://./src/app/footer/footer.component.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,iBAAiB;AACnB","sourcesContent":[".footer-social app-social {\r\n  float: right;\r\n  right: 10px;\r\n  margin-right: 0;\r\n  margin-left: 15px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7510:
/*!****************************************************************!*\
  !*** ./src/app/navigation/navigation.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#header {
  margin-top: 15px;
}

.fixed-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/app/navigation/navigation.component.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":["#header {\r\n  margin-top: 15px;\r\n}\r\n\r\n.fixed-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: green;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6042:
/*!*******************************************************************************!*\
  !*** ./src/app/notfound/notfound-page/notfound-page.component.css?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.big-text {

  font-size: 15em;
}.big-text {

  font-size: 15em;
}
`, "",{"version":3,"sources":["webpack://./src/app/notfound/notfound-page/notfound-page.component.css"],"names":[],"mappings":"AAAA;;EAEE,eAAe;AACjB,CAAC;;EAEC,eAAe;AACjB","sourcesContent":[".big-text {\r\n\r\n  font-size: 15em;\r\n}.big-text {\r\n\r\n  font-size: 15em;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8658:
/*!*****************************************************************!*\
  !*** ./src/app/about-page/about-page.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.title_offer_after {
  background: #d2b356;
  display: block;
  width: 30px;
  height: 5px;
  margin-top: 10px;
}

.border_img {
  border: 5px solid #d2b356; /* Adjust border width and color */
  border-radius: 20px; /* Adjust the radius as needed */
  padding: 20px; /* Add padding for white space */
  display: inline-block; /* Ensure the container wraps around the content */
}

.border_img img {
  border-radius: 15px; /* Make the image rounded */
  display: block; /* Ensure the image fills the container */
  width: 100%; /* Make the image responsive */
}`, "",{"version":3,"sources":["webpack://./src/app/about-page/about-page.component.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;AACJ;;AAGA;EACI,yBAAA,EAAA,kCAAA;EACA,mBAAA,EAAA,gCAAA;EACA,aAAA,EAAA,gCAAA;EACA,qBAAA,EAAA,kDAAA;AAAJ;;AAGA;EACI,mBAAA,EAAA,2BAAA;EACA,cAAA,EAAA,yCAAA;EACA,WAAA,EAAA,8BAAA;AAAJ","sourcesContent":[".title_offer_after {\r\n    background: #d2b356;\r\n    display: block;\r\n    width: 30px;\r\n    height: 5px;\r\n    margin-top: 10px;\r\n  } \r\n\r\n\r\n.border_img {\r\n    border: 5px solid #d2b356; /* Adjust border width and color */\r\n    border-radius: 20px; /* Adjust the radius as needed */\r\n    padding: 20px; /* Add padding for white space */\r\n    display: inline-block; /* Ensure the container wraps around the content */\r\n}\r\n\r\n.border_img img {\r\n    border-radius: 15px; /* Make the image rounded */\r\n    display: block; /* Ensure the image fills the container */\r\n    width: 100%; /* Make the image responsive */\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4698:
/*!*****************************************************************************!*\
  !*** ./src/app/attractions-page/attractions-page.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.carousel-item {
  position: relative;
  overflow: hidden;
}

.carousel-image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Fit the image down the container */
  border-radius: 20px;
  /* Rounded corners */
  /*box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);  Shadow effect */
  transition: transform 0.3s ease;
  /* Add transition effect */
}

.carousel-caption h5 {
  color: #fff;
  margin: 0;
  font-size: 16px;
}

.carousel-caption-small h5 {
  color: #fff;
  margin: 0;
  font-size: 10px;
}

.attraction-description {
  color: #fff;
  margin: 10px 0 0;
  /* Margin for description */
  font-size: 12px;
  line-height: 14px;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  /* Background color for caption */
  padding: 40px;
  box-sizing: border-box;
  opacity: 0;
  /* Initially hide the caption */
  border-radius: 20px;
  transition: opacity 0.3s ease;
  /* Add transition effect */
}

.carousel-caption-small {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  /* Background color for caption */
  padding: 5px;
  box-sizing: border-box;
  /* Initially hide the caption */
  border-radius: 20px;
  transition: opacity 0.3s ease;
  /* Add transition effect */
}

.carousel-image-container:hover .carousel-caption {
  opacity: 1;
  /* Show the caption on hover */
}

.icon-cards_small_size {
  position: relative;
  width: 45vw;
  height: 35vw;
  max-width: 450px;
  max-height: 300px;
  margin: 0;
  color: white;
  perspective: 2000px;
  transform-origin: center;
}
.icon-cards_small_size__content {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: translateZ(-30vw) rotateY(0);
  animation: carousel 15s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;
}
.icon-cards_small_size__content.step-animation {
  animation: carousel 15s infinite steps(1) forwards;
}
.icon-cards_small_size__item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 45vw;
  height: 35vw;
  max-width: 450px;
  max-height: 300px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transform-origin: center;
}
.icon-cards_small_size__item:nth-child(1) {
  transform: rotateY(0) translateZ(45vw);
}
.icon-cards_small_size__item:nth-child(2) {
  transform: rotateY(72deg) translateZ(45vw);
}
.icon-cards_small_size__item:nth-child(3) {
  transform: rotateY(144deg) translateZ(45vw);
}
.icon-cards_small_size__item:nth-child(4) {
  transform: rotateY(216deg) translateZ(45vw);
}
.icon-cards_small_size__item:nth-child(5) {
  transform: rotateY(288deg) translateZ(45vw);
}
.icon-cards_small_size:hover .icon-cards__content {
  animation-play-state: paused;
}

.icon-cards {
  position: relative;
  width: 70vw;
  height: 50vw;
  max-width: 600px;
  max-height: 450px;
  margin: 0;
  color: white;
  perspective: 2500px;
  transform-origin: center;
}
.icon-cards__content {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: translateZ(-30vw) rotateY(0);
  animation: carousel 15s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;
}
.icon-cards__content.step-animation {
  animation: carousel 15s infinite steps(1) forwards;
}
.icon-cards__item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 70vw;
  height: 50vw;
  max-width: 600px;
  max-height: 450px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transform-origin: center;
}
.icon-cards__item:nth-child(1) {
  transform: rotateY(0) translateZ(40vw);
}
.icon-cards__item:nth-child(2) {
  transform: rotateY(72deg) translateZ(40vw);
}
.icon-cards__item:nth-child(3) {
  transform: rotateY(144deg) translateZ(40vw);
}
.icon-cards__item:nth-child(4) {
  transform: rotateY(216deg) translateZ(40vw);
}
.icon-cards__item:nth-child(5) {
  transform: rotateY(288deg) translateZ(40vw);
}
.icon-cards:hover .icon-cards__content {
  animation-play-state: paused;
}

@keyframes carousel {
  0%, 10% {
    transform: translateZ(-35vw) rotateY(0);
  }
  17%, 27% {
    transform: translateZ(-35vw) rotateY(-72deg);
  }
  34%, 44% {
    transform: translateZ(-35vw) rotateY(-144deg);
  }
  51%, 61% {
    transform: translateZ(-35vw) rotateY(-216deg);
  }
  68%, 78% {
    transform: translateZ(-35vw) rotateY(-288deg);
  }
  85%, 100% {
    transform: translateZ(-35vw) rotateY(-360deg);
  }
}
.title_offer_after {
  background: #d2b356;
  display: block;
  width: 30px;
  height: 5px;
  margin-top: 10px;
}`, "",{"version":3,"sources":["webpack://./src/app/attractions-page/attractions-page.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,gBAAA;AACF;;AAEA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,qCAAA;EACA,mBAAA;EACA,oBAAA;EACA,+DAAA;EACA,+BAAA;EACA,0BAAA;AACF;;AAEA;EACE,WAAA;EACA,SAAA;EACA,eAAA;AACF;;AACA;EACE,WAAA;EACA,SAAA;EACA,eAAA;AAEF;;AACA;EACE,WAAA;EACA,gBAAA;EACA,2BAAA;EACA,eAAA;EACA,iBAAA;AAEF;;AACA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,oCAAA;EACA,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,UAAA;EACA,+BAAA;EACA,mBAAA;EACA,6BAAA;EACA,0BAAA;AAEF;;AACA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,oCAAA;EACA,iCAAA;EACA,YAAA;EACA,sBAAA;EACA,+BAAA;EACA,mBAAA;EACA,6BAAA;EACA,0BAAA;AAEF;;AACA;EACE,UAAA;EACA,8BAAA;AAEF;;AAIA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;EACA,YAAA;EACA,mBAAA;EACA,wBAAA;AADF;AAKE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,4BAAA;EACA,uCAAA;EACA,yEAAA;AAHJ;AAKI;EACE,kDAAA;AAHN;AAOE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;EACA,wBAAA;AALJ;AAOI;EACE,sCAAA;AALN;AAQI;EACE,0CAAA;AANN;AASI;EACE,2CAAA;AAPN;AAUI;EACE,2CAAA;AARN;AAWI;EACE,2CAAA;AATN;AAaE;EACE,4BAAA;AAXJ;;AAeA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;EACA,YAAA;EACA,mBAAA;EACA,wBAAA;AAZF;AAgBE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,4BAAA;EACA,uCAAA;EACA,yEAAA;AAdJ;AAgBI;EACE,kDAAA;AAdN;AAoBE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,yCAAA;EACA,kBAAA;EACA,wBAAA;AAlBJ;AAoBI;EACE,sCAAA;AAlBN;AAqBI;EACE,0CAAA;AAnBN;AAsBI;EACE,2CAAA;AApBN;AAuBI;EACE,2CAAA;AArBN;AAwBI;EACE,2CAAA;AAtBN;AA0BE;EACE,4BAAA;AAxBJ;;AA8BA;EAEE;IAEE,uCAAA;EA7BF;EAgCA;IAEE,4CAAA;EA/BF;EAkCA;IAEE,6CAAA;EAjCF;EAoCA;IAEE,6CAAA;EAnCF;EAsCA;IAEE,6CAAA;EArCF;EAwCA;IAEE,6CAAA;EAvCF;AACF;AA2CA;EACE,mBAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;AAzCF","sourcesContent":[".carousel-item {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.carousel-image-container {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.carousel-image-container img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  /* Fit the image down the container */\r\n  border-radius: 20px;\r\n  /* Rounded corners */\r\n  /*box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);  Shadow effect */\r\n  transition: transform 0.3s ease;\r\n  /* Add transition effect */\r\n}\r\n\r\n.carousel-caption h5 {\r\n  color: #fff;\r\n  margin: 0;\r\n  font-size: 16px;\r\n}\r\n.carousel-caption-small h5 {\r\n  color: #fff;\r\n  margin: 0;\r\n  font-size: 10px;\r\n}\r\n\r\n.attraction-description {\r\n  color: #fff;\r\n  margin: 10px 0 0;\r\n  /* Margin for description */\r\n  font-size: 12px;\r\n  line-height: 14px;\r\n}\r\n\r\n.carousel-caption {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  /* Background color for caption */\r\n  padding: 40px;\r\n  box-sizing: border-box;\r\n  opacity: 0;\r\n  /* Initially hide the caption */\r\n  border-radius: 20px;\r\n  transition: opacity 0.3s ease;\r\n  /* Add transition effect */\r\n}\r\n\r\n.carousel-caption-small{\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  /* Background color for caption */\r\n  padding: 5px;\r\n  box-sizing: border-box;\r\n  /* Initially hide the caption */\r\n  border-radius: 20px;\r\n  transition: opacity 0.3s ease;\r\n  /* Add transition effect */\r\n}\r\n\r\n.carousel-image-container:hover .carousel-caption {\r\n  opacity: 1;\r\n  /* Show the caption on hover */\r\n}\r\n\r\n\r\n// Cards Carousel\r\n// ----------------------------------------------\r\n.icon-cards_small_size {\r\n  position: relative;\r\n  width: 45vw;\r\n  height: 35vw;\r\n  max-width: 450px;\r\n  max-height: 300px;\r\n  margin: 0;\r\n  color: white;\r\n  perspective: 2000px;\r\n  transform-origin: center;\r\n\r\n  // This is the element that rotates with the animation\r\n\r\n  &__content {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    transform-origin: center;\r\n    transform-style: preserve-3d;\r\n    transform: translateZ(-30vw) rotateY(0);\r\n    animation: carousel 15s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;\r\n\r\n    &.step-animation {\r\n      animation: carousel 15s infinite steps(1) forwards;\r\n    }\r\n  }\r\n\r\n  &__item {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 45vw;\r\n    height: 35vw;\r\n    max-width: 450px;\r\n    max-height: 300px;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, .1);\r\n    border-radius: 6px;\r\n    transform-origin: center;\r\n\r\n    &:nth-child(1) {\r\n      transform: rotateY(0) translateZ(45vw);\r\n    }\r\n\r\n    &:nth-child(2) {\r\n      transform: rotateY(72deg) translateZ(45vw);\r\n    }\r\n\r\n    &:nth-child(3) {\r\n      transform: rotateY(144deg) translateZ(45vw);\r\n    }\r\n\r\n    &:nth-child(4) {\r\n      transform: rotateY(216deg) translateZ(45vw);\r\n    }\r\n\r\n    &:nth-child(5) {\r\n      transform: rotateY(288deg) translateZ(45vw);\r\n    }\r\n  }\r\n\r\n  &:hover .icon-cards__content {\r\n    animation-play-state: paused;\r\n  }\r\n}\r\n\r\n.icon-cards {\r\n  position: relative;\r\n  width: 70vw;\r\n  height: 50vw;\r\n  max-width: 600px;\r\n  max-height: 450px;\r\n  margin: 0;\r\n  color: white;\r\n  perspective: 2500px;\r\n  transform-origin: center;\r\n\r\n  // This is the element that rotates with the animation\r\n\r\n  &__content {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    transform-origin: center;\r\n    transform-style: preserve-3d;\r\n    transform: translateZ(-30vw) rotateY(0);\r\n    animation: carousel 15s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;\r\n\r\n    &.step-animation {\r\n      animation: carousel 15s infinite steps(1) forwards;\r\n    }\r\n  }\r\n\r\n  // Individual cards\r\n\r\n  &__item {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 70vw;\r\n    height: 50vw;\r\n    max-width: 600px;\r\n    max-height: 450px;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, .1);\r\n    border-radius: 6px;\r\n    transform-origin: center;\r\n\r\n    &:nth-child(1) {\r\n      transform: rotateY(0) translateZ(40vw);\r\n    }\r\n\r\n    &:nth-child(2) {\r\n      transform: rotateY(72deg) translateZ(40vw);\r\n    }\r\n\r\n    &:nth-child(3) {\r\n      transform: rotateY(144deg) translateZ(40vw);\r\n    }\r\n\r\n    &:nth-child(4) {\r\n      transform: rotateY(216deg) translateZ(40vw);\r\n    }\r\n\r\n    &:nth-child(5) {\r\n      transform: rotateY(288deg) translateZ(40vw);\r\n    }\r\n  }\r\n\r\n  &:hover .icon-cards__content {\r\n    animation-play-state: paused;\r\n  }\r\n}\r\n\r\n// Carousel animation\r\n\r\n@keyframes carousel {\r\n\r\n  0%,\r\n  10% {\r\n    transform: translateZ(-35vw) rotateY(0);\r\n  }\r\n\r\n  17%,\r\n  27% {\r\n    transform: translateZ(-35vw) rotateY(-72deg);\r\n  }\r\n\r\n  34%,\r\n  44% {\r\n    transform: translateZ(-35vw) rotateY(-144deg);\r\n  }\r\n\r\n  51%,\r\n  61% {\r\n    transform: translateZ(-35vw) rotateY(-216deg);\r\n  }\r\n\r\n  68%,\r\n  78% {\r\n    transform: translateZ(-35vw) rotateY(-288deg);\r\n  }\r\n\r\n  85%,\r\n  100% {\r\n    transform: translateZ(-35vw) rotateY(-360deg);\r\n  }\r\n}\r\n\r\n\r\n.title_offer_after {\r\n  background: #d2b356;\r\n  display: block;\r\n  width: 30px;\r\n  height: 5px;\r\n  margin-top: 10px;\r\n} "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5912:
/*!***********************************************************!*\
  !*** ./src/app/navmenu/navmenu.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3916:
/*!*****************************************************************!*\
  !*** ./src/app/offer-page/offer-page.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.middle_price_offer {
  background-color: #d2b356;
  color: #fff;
  padding: 25px;
}

.normal_price_offer {
  background: #f5f5f5;
  padding: 25px;
  box-shadow: gray;
}

.box_shaddow_offer:hover {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.title_offer_after {
  background: #d2b356;
  width: 30px;
  height: 5px;
  margin-bottom: 10px;
}

.simple_line {
  background: #d2b356;
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 10px;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: #000;
  background-color: transparent;
  border: none;
  z-index: 1000;
}

.image-container {
  width: 100%; /* Ensure all containers have the same width */
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Add transition for smooth shadow effect */
}

.image-container:hover img {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Add shadow effect on hover */
  cursor: pointer; /* Change cursor to pointer on hover */
}

.gold-overlay {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.gold-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: gold; /* Change this to your desired gold color */
  mix-blend-mode: color; /* This mode blends the gold color with the underlying black */
  z-index: 1;
}

.gold-overlay img {
  display: block;
  width: 35px; /* Adjust the width to make the icons smaller */
  height: auto;
  margin: 0 auto; /* Center the icons horizontally */
  z-index: 2;
}`, "",{"version":3,"sources":["webpack://./src/app/offer-page/offer-page.component.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,WAAA;EACA,aAAA;AACJ;;AAGA;EACI,mBAAA;EACA,aAAA;EACA,gBAAA;AAAJ;;AAGA;EACI,0CAAA;AAAJ;;AAGA;EACE,mBAAA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;AAAF;;AAGA;EACI,mBAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,MAAA;EACA,QAAA;EACA,eAAA;EACA,iBAAA;EACA,WAAA;EACA,6BAAA;EACA,YAAA;EACA,aAAA;AAAJ;;AAOA;EACI,WAAA,EAAA,8CAAA;AAJJ;;AAOA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,qDAAA,EAAA,4CAAA;AAJJ;;AAOA;EACI,wCAAA,EAAA,+BAAA;EACA,eAAA,EAAA,sCAAA;AAJJ;;AAOA;EACI,kBAAA;EACA,qBAAA;EACA,gBAAA;AAJJ;;AAOA;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA,EAAA,2CAAA;EACA,qBAAA,EAAA,8DAAA;EACA,UAAA;AAJJ;;AAOA;EACI,cAAA;EACA,WAAA,EAAA,+CAAA;EACA,YAAA;EACA,cAAA,EAAA,kCAAA;EACA,UAAA;AAJJ","sourcesContent":[".middle_price_offer{\r\n    background-color: #d2b356;\r\n    color: #fff;\r\n    padding: 25px;\r\n    \r\n}\r\n\r\n.normal_price_offer{\r\n    background: #f5f5f5;\r\n    padding: 25px;\r\n    box-shadow: gray;\r\n}\r\n\r\n.box_shaddow_offer:hover{\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.title_offer_after {\r\n  background: #d2b356;\r\n  width: 30px;\r\n  height: 5px;\r\n  margin-bottom: 10px;\r\n} \r\n\r\n.simple_line {\r\n    background: #d2b356;\r\n    display: block;\r\n    width: 100%;\r\n    height: 2px;\r\n    margin-top: 10px;\r\n  } \r\n\r\n.close-btn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 0.5rem;\r\n    font-size: 1.5rem;\r\n    color: #000;\r\n    background-color: transparent;\r\n    border: none;\r\n    z-index: 1000;\r\n}\r\n\r\n.modal-body {\r\n}\r\n\r\n\r\n.image-container {\r\n    width: 100%; /* Ensure all containers have the same width */\r\n}\r\n\r\n.image-container img {\r\n    width: 100%;\r\n    height: auto;\r\n    display: block;\r\n    transition: box-shadow 0.3s ease, transform 0.3s ease; /* Add transition for smooth shadow effect */\r\n}\r\n\r\n.image-container:hover img {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Add shadow effect on hover */\r\n    cursor: pointer; /* Change cursor to pointer on hover */\r\n}\r\n\r\n.gold-overlay {\r\n    position: relative;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n}\r\n\r\n.gold-overlay::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: gold; /* Change this to your desired gold color */\r\n    mix-blend-mode: color; /* This mode blends the gold color with the underlying black */\r\n    z-index: 1;\r\n}\r\n\r\n.gold-overlay img {\r\n    display: block;\r\n    width: 35px; /* Adjust the width to make the icons smaller */\r\n    height: auto;\r\n    margin: 0 auto; /* Center the icons horizontally */\r\n    z-index: 2;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 554:
/*!*****************************************************************!*\
  !*** ./src/app/about-page/about-page.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container pb-5\" *ngIf=\"about$ | async as header\">\n    <h2> {{ header.title }} </h2>\n    <div class=\"title_offer_after\"></div>\n    <div class=\"row text-center mt-4\">\n        <div class=\"col-md-6\">\n            <p *ngFor=\"let elem of header.description\">{{ elem }}</p>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"container d-flex justify-content-center\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-6\">\n                        <h3>200m</h3>\n                        <p>{{ 'about.distplaja' | translate}}</p>\n                    </div>\n                    <div class=\"col-md-6 col-6\">\n                        <h3>1500m</h3>\n                        <p>{{ 'about.distfaleza' | translate}}</p>\n                    </div>\n                </div>\n               \n            </div>\n            <div class=\"border_img p-2\">\n                <img class=\"w-100\" src=\"../../assets/images/green-coffee-house/slide3.jpg\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<carousel *ngIf=\"about$ | async as header\" class=\"w-100\">\n    <slide  *ngFor=\"let elem of header.images\">\n        <img [src]=\"elem\" alt=\"Slide\" class=\"w-100\">\n    </slide>\n</carousel>";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<main id=\"content\">\r\n\t<app-navigation></app-navigation>\r\n\t<app-home-page id=\"home\"></app-home-page>\r\n\t<app-about-page id=\"about\"></app-about-page>\r\n\t<app-offer-page id=\"offer\"></app-offer-page>\r\n\t<app-attractions-page id=\"attractions\"></app-attractions-page>\r\n\t<app-contact-page id=\"contact\"></app-contact-page>\r\n\t<app-footer></app-footer>\r\n\r\n\t\t<!-- <router-outlet></router-outlet> -->\r\n</main>\r\n";

/***/ }),

/***/ 3374:
/*!*****************************************************************************!*\
  !*** ./src/app/attractions-page/attractions-page.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"pb-5\" style=\"background-color: darkgray;\">\n  <div class=\"container\">\n    <h2 class=\"text-white\">{{ 'attractions.title' | translate}}</h2>\n    <div class=\"title_offer_after\"></div>\n  </div>\n  <br>\n  <div class=\"d-flex align-items-center justify-content-center\">\n    <figure class=\"mt-3\" [class]=\"screenSizeService.isSmallScreen ? 'icon-cards_small_size' : 'icon-cards'\">\n      <div [class]=\"screenSizeService.isSmallScreen ? 'icon-cards_small_size__content' : 'icon-cards__content'\">\n        <div *ngFor=\"let attraction of attractions$ | async; let i = index\" \n        class=\"d-flex align-items-center justify-content-center\"\n        [class]=\"screenSizeService.isSmallScreen ? 'icon-cards_small_size__item' : 'icon-cards__item'\"\n        >\n          <div class=\"carousel-image-container\">\n            <img src=\"{{attraction.pictures[0]}}\" class=\"d-block w-100\" alt=\"Attraction Image\">\n            <diV *ngIf=\"screenSizeService.isSmallScreen\" class=\"carousel-caption-small d-md-block\">\n              <h5 class=\"text-center\">{{ attraction.name }}</h5>\n            </diV>\n            <div *ngIf=\"!screenSizeService.isSmallScreen\" class=\"carousel-caption d-none d-md-block\">\n              <h5>{{ attraction.name }}</h5>\n              <p *ngFor=\"let description of attraction.description\" class=\"attraction-description\">{{ description }}</p>\n            </div>\n          </div>\n        </div>\n      </div>      \n    </figure>\n  </div>\n</div>";

/***/ }),

/***/ 7844:
/*!*********************************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n    <h2 class=\"text-center\">{{ 'contact.title' | translate }}</h2>\n    <hr>\n    <div class=\"d-flex justify-content-center\">\n        <ul class=\"list-unstyled text-center\">\n            <li>\n                <p><i class=\"fa fa-envelope\"></i><a href=\"mailto:info@greencoffeehouse.ro\"> info@greencoffeehouse.ro</a></p>\n            </li>\n            <li>\n                <p><i class=\"fa fa-whatsapp\"></i><a href=\"https://wa.me/+40751111230\"> +40 751 111 230</a></p>\n            </li>\n        </ul>\n    </div>\n    <div class=\"d-flex justify-content-center\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6 col-6\">\n                <a href=\"https://www.facebook.com/GreenCoffeeHouseSulina/\" target=\"_blank\">\n                    <img width=\"40\" src=\"../../assets/images/logo-images/facebook.png\" alt=\"Facebook\">\n                </a>\n            </div>\n            <div class=\"col-md-6 col-sm-6 col-6\">\n                <a href=\"https://www.booking.com/hotel/ro/green-coffee-house.en-gb.html\" target=\"_blank\">\n                    <img width=\"40\" src=\"../../assets/images/logo-images/booking.png\" alt=\"Booking\">\n                </a>\n            </div>\n        </div>\n    </div>\n    <br>\n    <div class=\"d-flex justify-content-center\">\n        <form>\n            <div class=\"form-group\">\n                <label for=\"name\">{{ 'contact.name' | translate }}:</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">Email:</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"message\">{{ 'contact.message' | translate }}:</label>\n                <textarea class=\"form-control\" id=\"message\" name=\"message\" rows=\"5\" required></textarea>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-block\">{{ 'contact.send' | translate }}</button>\n        </form>\n    </div>\n</div>\n<br>";

/***/ }),

/***/ 2811:
/*!*********************************************************!*\
  !*** ./src/app/footer/footer.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<footer id=\"landing-footer\" *ngIf=\"footer$ | async as footer\">\r\n\t<div class=\"container d-flex justify-content-center\">\r\n\t\t<div class=\"row text-center\">\r\n\t\t\t<p id=\"copyright\" >\r\n\t\t\t\t{{ footer.tagline }}\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n</footer>\r\n";

/***/ }),

/***/ 1361:
/*!********************************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"header$ | async as header\">\r\n\t<header\r\n\t\tid=\"banner\"\r\n\t\tclass=\"scrollto clearfix shift-left w-100\"\r\n\t\tdata-enllax-ratio=\".5\"\r\n\t\t[style.background]=\"screenSizeService.isSmallScreen ?\r\n\t\t\t'url(../assets/images/banner-images/bg_phone_4.jpg) no-repeat center top; background-size: cover;'\r\n\t\t\t:\r\n\t\t\t'url(../assets/images/banner-images/' +\r\n\t\t\theader.image +\r\n\t\t\t' ) no-repeat center top; background-size: cover;'\r\n\t\t\">\r\n\r\n\t\t<div id=\"banner-content\" class=\"row justify-content-lg-end justify-content-end\">\r\n\t\t\t<div class=\"col-lg-5 col-md-6 col-sm-6 col-6 text-lg-end text-end\">\r\n\t\t\t\t<div class=\"container\" >\r\n\t\t\t\t\t<div *ngIf=\"screenSizeService.isSmallScreen\">\r\n\t\t\t\t\t\t<div class=\"pr-lg-4\">\r\n\t\t\t\t\t\t\t<h5><strong>{{ header.tagline }}</strong></h5>\r\n\t\t\t\t\t\t\t<p style=\"font-size: 11px;line-height: 1.2;\">{{ header.title }}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"!screenSizeService.isSmallScreen\" style=\"padding-right: 25px;\">\r\n\t\t\t\t\t\t<div class=\"pr-lg-4\">\r\n\t\t\t\t\t\t\t<h3><strong>{{ header.tagline }}</strong></h3>\r\n\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t<p>{{ header.title }}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t</header>\r\n</div>\r\n";

/***/ }),

/***/ 8334:
/*!*****************************************************************!*\
  !*** ./src/app/navigation/navigation.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"header\" class=\"navbar nav-solid navbar-fixed-top\" style=\"margin-top: 0px;\">\r\n\r\n\t<div class=\"row w-100\" *ngIf=\"screenSizeService.isSmallScreen\">\r\n\t\t<div class=\"col-md-5 col-sm-5 col-5\">\r\n\t\t\t<div id=\"logo\">\r\n\t\t\t\t<img src=\"assets/images/logo.png\" id=\"navigation-logo\" alt=\"Landing Page\" />\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"col-md-5 col-sm-5 col-5 text-right\">\r\n\t\t\t<div id=\"nav-trigger\">\r\n\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleMenu(!menuOpen)\">\r\n\t\t\t\t\t<span [ngClass]=\"{'open': menuOpen}\"></span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-2 col-sm-2 col-2 text-right\">\r\n\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"toggleDropdown()\">\r\n\t\t\t\t<img src=\"{{ selectedLanguageImg }}\" alt=\"ro\" style=\"width: 30px;\">\r\n\t\t\t</button>\r\n\t\t\t<div class=\"dropdown-menu\" [ngClass]=\"{ 'show': isDropdownOpen }\">\r\n\t\t\t\t<button class=\"dropdown-item\" (click)=\"switchLang('ro', 'assets/images/logo-images/flag-ro.png')\">\r\n\t\t\t\t\t<img src=\"assets/images/logo-images/flag-ro.png\" alt=\"ro\" style=\"width: 30px;\">\r\n\t\t\t\t</button>\r\n\t\t\t\t<button class=\"dropdown-item\" (click)=\"switchLang('en', 'assets/images/logo-images/flag-en.png')\">\r\n\t\t\t\t\t<img src=\"assets/images/logo-images/flag-en.png\" alt=\"en\" style=\"width: 30px;\">\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div *ngIf=\"!screenSizeService.isSmallScreen\" class=\"container d-flex justify-content-center\">\r\n\t\t<nav class=\"navbar-expand-lg navbar-expand\">\r\n\t\t\t<app-navmenu [menu]=\"menu\" [menuOpen]=\"true\"></app-navmenu>\r\n\t\t</nav>\r\n\t</div>\r\n\r\n\t<div *ngIf=\"menuOpen\" class=\"container d-flex justify-content-center\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<nav [ngClass]=\"{'collapse': !menuOpen, 'd-block': menuOpen}\">\r\n\t\t\t\t<app-navmenu [menu]=\"menuToggle\" *ngIf=\"menuOpen\" (menuStatus)=\"toggleMenu($event)\"\r\n\t\t\t\t\t[menuOpen]=\"menuOpen\"></app-navmenu>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\t<div *ngIf=\"!screenSizeService.isSmallScreen\" class=\"dropdown\">\r\n\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"toggleDropdown()\">\r\n\t\t\t<img src=\"{{ selectedLanguageImg }}\" alt=\"ro\" style=\"width: 30px;\">\r\n\t\t</button>\r\n\t\t<div class=\"dropdown-menu\" [ngClass]=\"{ 'show': isDropdownOpen }\">\r\n\t\t\t<button class=\"dropdown-item\" (click)=\"switchLang('ro', 'assets/images/logo-images/flag-ro.png')\">\r\n\t\t\t\t<img src=\"assets/images/logo-images/flag-ro.png\" alt=\"ro\" style=\"width: 30px;\">\r\n\t\t\t</button>\r\n\t\t\t<button class=\"dropdown-item\" (click)=\"switchLang('en', 'assets/images/logo-images/flag-en.png')\">\r\n\t\t\t\t<img src=\"assets/images/logo-images/flag-en.png\" alt=\"en\" style=\"width: 30px;\">\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),

/***/ 6724:
/*!***********************************************************!*\
  !*** ./src/app/navmenu/navmenu.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul *ngIf=\"!screenSizeService.isSmallScreen\" class=\"navbar-nav\" [class.expanded]=\"menuOpen === true\">\r\n\t<li class=\"nav-item text-center\" *ngFor=\"let menuItem of menu\">\r\n\t\t<a *ngIf=\"menuItem.type == 2\" id=\"logo\"\r\n\t\t\t(click)=\"scrollTo(menuItem.pageId)\"\r\n\t\t\trouterLinkActive=\"active\"\r\n\t\t>\r\n\t\t\t<img\r\n\t\t\t\tsrc=\"assets/images/logo.png\"\r\n\t\t\t\tid=\"navigation-logo\"\r\n\t\t\t\talt=\"Landing Page\"\r\n\t\t\t\tstyle=\"max-height: 45px;\" />\r\n\t\t</a>\r\n\t\t<a *ngIf=\"menuItem.type === 1\"\r\n\t\t(click)=\"scrollTo(menuItem.pageId)\"\r\n\t\t>{{ menuItem.title }}</a>\r\n\r\n\t</li>\r\n</ul>\r\n\r\n<div *ngIf=\"screenSizeService.isSmallScreen\" class=\"container d-flex justify-content-center\">\r\n\t<ul class=\"navbar-nav\" [class.expanded]=\"menuOpen === true\">\r\n\t\t<li class=\"pr-2 nav-item text-center\" *ngFor=\"let menuItem of menu\" >\r\n\t\t\t<a *ngIf=\"menuItem.type === 1\"  \r\n\t\t\t(click)=\"scrollTo(menuItem.pageId)\"\r\n\t\t\tclass=\"text-center\"\r\n\t\t\t>{{ menuItem.title }}</a>\r\n\t\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\r\n";

/***/ }),

/***/ 9548:
/*!********************************************************************************!*\
  !*** ./src/app/notfound/notfound-page/notfound-page.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section id=\"notfound\" class=\"secondary-color text-center scrollto clearfix\">\r\n\t<div class=\"row clearfix\">\r\n\t\t<h1 class=\"big-text\">404</h1>\r\n\t\t<h2>Nothing Found Here!! try our <a routerLink=\"/home\">Home Page</a></h2>\r\n\t</div>\r\n</section>\r\n";

/***/ }),

/***/ 301:
/*!*****************************************************************!*\
  !*** ./src/app/offer-page/offer-page.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"offerdata$ | async as offer\">\n    <div class=\"container\">\n        <h2>{{ 'offer.rooms' | translate }}</h2>\n        <div class=\"title_offer_after\"></div>\n\n        <div class=\"row container d-flex justify-content-center\">\n            <div class=\"col-md-6 col-12\">\n                <ul>\n                    <li *ngFor=\"let desc of offer.description1\">{{ desc }}</li>\n                </ul>\n            </div>\n            <div class=\"col-md-6 col-12\">\n                <ul>\n                    <li *ngFor=\"let desc of offer.description2\">{{ desc }}</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"row m-4\">\n            <div class=\"col-md-2 col-sm-2 col-4\">\n                <div class=\"gold-overlay text-center\">\n                    <img src=\"../../assets/images/green-coffee-house/airConditioner.png\" alt=\"Your Image\">\n                    <p>{{ 'offer.air' | translate }}</p>\n                </div>\n            </div>\n            <div class=\"col-md-2 col-sm-2 col-4\">\n                <div class=\"gold-overlay text-center\">\n                    <img src=\"../../assets/images/green-coffee-house/bathroom.png\" alt=\"Your Image\">\n                    <p>{{ 'offer.shower' | translate }}</p>\n                </div>\n            </div>\n            <div class=\"col-md-2 col-sm-2 col-4\">\n                <div class=\"gold-overlay text-center\">\n                    <img src=\"../../assets/images/green-coffee-house/seaSight.png\" alt=\"Your Image\">\n                    <p>{{ 'offer.sea' | translate }}</p>\n                </div>\n            </div>\n            <div class=\"col-md-2 col-sm-2 col-4\">\n                <div class=\"gold-overlay\">\n                    <img src=\"../../assets/images/green-coffee-house/wifi.png\" alt=\"Your Image\">\n                    <p>WiFi</p>\n                </div>\n            </div>\n            <div class=\"col-md-2 col-sm-2 col-4\">\n                <div class=\"gold-overlay text-center\">\n                    <img src=\"../../assets/images/green-coffee-house/minibar.png\" alt=\"Your Image\">\n                    <p>Minibar</p>\n                </div>\n            </div>\n            <div class=\"col-md-2 col-sm-2 col-4\">\n                <div class=\"gold-overlay text-center\">\n                    <img src=\"../../assets/images/green-coffee-house/TV.png\" alt=\"Your Image\">\n                    <p>TV Led</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"m-3\">\n                    <h3>{{ offer.doubleRoom.title }}</h3>\n                    <div class=\"mr-3 title_offer_after\"></div>\n                </div>\n                <div class=\"row m-2\">\n                    <img src=\"{{ offer.doubleRoom.mainimg }}\" class=\"img-fluid mb-2\" alt=\"Room Image\"\n                        (click)=\"openModal(offer.doubleRoom.mainimg, 'double', 0)\">\n                    <div class=\"col-md-2 col-sm-2 col-3\" *ngFor=\"let image of offer.doubleRoom.images; let i = index\">\n                        <div class=\"image-container\">\n                            <img src=\"{{ image }}\" class=\"img-fluid mb-2\" alt=\"Room Image\"\n                                (click)=\"openModal(image, 'double', i)\">\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"m-2\">\n                    <h3>{{ offer.twinRoom.title }}</h3>\n                    <div class=\"mr-3 pr-3 title_offer_after\"></div>\n                </div>\n                <div class=\"row m-2\">\n                    <img src=\"{{ offer.twinRoom.mainimg }}\" class=\"img-fluid mb-2\" alt=\"Room Image\"\n                        (click)=\"openModal(offer.twinRoom.mainimg, 'twin', 0)\">\n                    <div class=\"col-md-2 col-sm-2 col-3\" *ngFor=\"let image of offer.twinRoom.images; let i = index\">\n                        <div class=\"image-container\">\n                            <img src=\"{{ image }}\" class=\"img-fluid mb-2\" alt=\"Room Image\"\n                                (click)=\"openModal(image, 'twin', i)\">\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #modalTemplate>\n    <div class=\"modal-body\">\n        <img *ngIf=\"type=='twin'\" [src]=\"imagesTwin[selectedIndex]\" class=\"img-fluid\">\n        <img *ngIf=\"type=='double'\" [src]=\"imagesDouble[selectedIndex]\" class=\"img-fluid\">\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-sm btn-primary\" (click)=\"previousImage()\">{{ 'offer.back' | translate }}</button>\n        <button class=\"btn btn-sm btn-primary\" (click)=\"nextImage()\">{{ 'offer.next' | translate }}</button>\n        <button class=\"btn btn-sm btn-secondary\" (click)=\"closeModal()\">{{ 'offer.close' | translate }}</button>\n    </div>\n</ng-template>\n\n<div style=\"background-color: #f5f5f5; margin-top: 0px !important;\">\n    <div *ngIf=\"offerdata$ | async as offer\">\n        <div class=\"container\">\n            <h2>{{ 'offer.title' | translate}}</h2>\n            <div class=\"title_offer_after\"></div>\n            <div class=\"text-center mt-4 pb-4\">\n                <div class=\"row m-2 pl-3 pr-3\" style=\"margin-left: 0.5em; margin-right: 0.5em;\">\n                    <div *ngFor=\"let price of offer.prices; let i = index \" class=\"col-md-4 mt-4\">\n                        <div class=\"p-2 box_shaddow_offer\" style=\"background-color: #fff;\">\n                            <h3>{{ price.dates }}</h3>\n                            <p>{{ price.other }}</p>\n                            <div [class]=\"i==1 ? 'middle_price_offer' : 'normal_price_offer'\">\n                                <strong>\n                                    <h1 style=\"font-weight: bold;\">{{ price.price }} <span\n                                            style=\"font-size: 0.5em;\">RON</span>\n                                    </h1>\n                                </strong>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map