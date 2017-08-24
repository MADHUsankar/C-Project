webpackJsonp(["main"],{

/***/ "../../../../../client-src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../client-src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../client-src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_component__ = __webpack_require__("../../../../../client-src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listings_listings_component__ = __webpack_require__("../../../../../client-src/app/listings/listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mylisting_mylisting_component__ = __webpack_require__("../../../../../client-src/app/mylisting/mylisting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shoppage_shoppage_component__ = __webpack_require__("../../../../../client-src/app/shoppage/shoppage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__showprod_showprod_component__ = __webpack_require__("../../../../../client-src/app/showprod/showprod.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart_component__ = __webpack_require__("../../../../../client-src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkout_checkout_component__ = __webpack_require__("../../../../../client-src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_confirmation_order_confirmation_component__ = __webpack_require__("../../../../../client-src/app/order-confirmation/order-confirmation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    // { path: "", component: ShoppageComponent },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */] },
    //{ path: "", component: ListingsComponent },
    { path: "listings", component: __WEBPACK_IMPORTED_MODULE_3__listings_listings_component__["a" /* ListingsComponent */] },
    { path: "mylisting", component: __WEBPACK_IMPORTED_MODULE_4__mylisting_mylisting_component__["a" /* MylistingComponent */] },
    { path: "shoppage", component: __WEBPACK_IMPORTED_MODULE_5__shoppage_shoppage_component__["a" /* ShoppageComponent */] },
    { path: "product/:title", component: __WEBPACK_IMPORTED_MODULE_6__showprod_showprod_component__["a" /* ShowprodComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_7__cart_cart_component__["a" /* CartComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_8__checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: 'confirmed', component: __WEBPACK_IMPORTED_MODULE_9__order_confirmation_order_confirmation_component__["a" /* OrderConfirmationComponent */] },
    { path: "", pathMatch: "full", redirectTo: "/" },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../client-src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../client-src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../client-src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../client-src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../client-src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_component__ = __webpack_require__("../../../../../client-src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_login_user_login_component__ = __webpack_require__("../../../../../client-src/app/user/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_register_user_register_component__ = __webpack_require__("../../../../../client-src/app/user/user-register/user-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_service__ = __webpack_require__("../../../../../client-src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__listings_listings_component__ = __webpack_require__("../../../../../client-src/app/listings/listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mylisting_mylisting_component__ = __webpack_require__("../../../../../client-src/app/mylisting/mylisting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__filter_pipe__ = __webpack_require__("../../../../../client-src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shoppage_shoppage_component__ = __webpack_require__("../../../../../client-src/app/shoppage/shoppage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__showprod_showprod_component__ = __webpack_require__("../../../../../client-src/app/showprod/showprod.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cart_cart_component__ = __webpack_require__("../../../../../client-src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navigation_navigation_component__ = __webpack_require__("../../../../../client-src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_service__ = __webpack_require__("../../../../../client-src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__delivery_options_service__ = __webpack_require__("../../../../../client-src/app/delivery-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shoppingcart_service__ = __webpack_require__("../../../../../client-src/app/shoppingcart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__storage_service__ = __webpack_require__("../../../../../client-src/app/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__checkout_checkout_component__ = __webpack_require__("../../../../../client-src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__order_confirmation_order_confirmation_component__ = __webpack_require__("../../../../../client-src/app/order-confirmation/order-confirmation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_7__user_user_login_user_login_component__["a" /* UserLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_user_register_user_register_component__["a" /* UserRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__listings_listings_component__["a" /* ListingsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__mylisting_mylisting_component__["a" /* MylistingComponent */],
            __WEBPACK_IMPORTED_MODULE_12__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_13__shoppage_shoppage_component__["a" /* ShoppageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__showprod_showprod_component__["a" /* ShowprodComponent */],
            __WEBPACK_IMPORTED_MODULE_15__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_16__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_21__checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_22__order_confirmation_order_confirmation_component__["a" /* OrderConfirmationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_17__product_service__["a" /* productService */],
            __WEBPACK_IMPORTED_MODULE_18__delivery_options_service__["a" /* DeliveryOptionsDataService */],
            // PopulatedCartRouteGuard,
            __WEBPACK_IMPORTED_MODULE_20__storage_service__["a" /* LocalStorageServie */],
            { provide: __WEBPACK_IMPORTED_MODULE_20__storage_service__["b" /* StorageService */], useClass: __WEBPACK_IMPORTED_MODULE_20__storage_service__["a" /* LocalStorageServie */] },
            {
                deps: [__WEBPACK_IMPORTED_MODULE_20__storage_service__["b" /* StorageService */],
                    __WEBPACK_IMPORTED_MODULE_17__product_service__["a" /* productService */],
                    __WEBPACK_IMPORTED_MODULE_18__delivery_options_service__["a" /* DeliveryOptionsDataService */]],
                provide: __WEBPACK_IMPORTED_MODULE_19__shoppingcart_service__["a" /* ShoppingCartService */],
                useClass: __WEBPACK_IMPORTED_MODULE_19__shoppingcart_service__["a" /* ShoppingCartService */]
            }
        ]
        // bootstrap: [AppComponent]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../client-src/app/bicycle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductInfo; });
var ProductInfo = (function () {
    function ProductInfo() {
        this.ProductName = '';
        this.Description = '';
        this.Price = null;
        this.Imageurl = null;
        // public CreatedAt: Date;
        // public UpdatedAt: Date;
        this.UserId = null;
    }
    ProductInfo.prototype.updateFrom = function (src) {
        this.ProductName = src.ProductName;
        this.Description = src.Description;
        this.Price = src.Price;
        this.Imageurl = src.Imageurl;
    };
    return ProductInfo;
}());

//# sourceMappingURL=bicycle.js.map

/***/ }),

/***/ "../../../../../client-src/app/caching.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CachcingServiceBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share__);

var CachcingServiceBase = (function () {
    function CachcingServiceBase() {
    }
    CachcingServiceBase.prototype.cache = function (getter, setter, retreive) {
        var cached = getter();
        if (cached !== undefined) {
            return cached;
        }
        else {
            var val = retreive().share();
            setter(val);
            return val;
        }
    };
    return CachcingServiceBase;
}());

//# sourceMappingURL=caching.service.js.map

/***/ }),

/***/ "../../../../../client-src/app/cart-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItem; });
var CartItem = (function () {
    function CartItem() {
        this.quantity = 0;
    }
    return CartItem;
}());

//# sourceMappingURL=cart-item.model.js.map

/***/ }),

/***/ "../../../../../client-src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#hyper{\r\n  text-decoration: underline;\r\n  color:blue;\r\n}\r\n\r\n\r\n/* nav bar styling */\r\n#flipkart-navbar {\r\n    background-color: #2874f0;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.row1{\r\n    padding-top: 10px;\r\n}\r\n\r\n.row2 {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.flipkart-navbar-input {\r\n    padding: 11px 16px;\r\n    border-radius: 2px 0 0 2px;\r\n    border: 0 none;\r\n    outline: 0 none;\r\n    font-size: 15px;\r\n}\r\n\r\n.flipkart-navbar-button {\r\n    background-color: #ffe11b;\r\n    border: 1px solid #ffe11b;\r\n    border-radius: 0 2px 2px 0;\r\n    color: #565656;\r\n    padding: 10px 0;\r\n    height: 43px;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-button {\r\n    background-color: #2469d9;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2);\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    height: 41px;\r\n    border-radius: 2px;\r\n    font-weight: 500;\r\n    width: 120px;\r\n    display: inline-block;\r\n    color: #FFFFFF;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.cart-button:hover{\r\n    text-decoration: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-svg {\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: middle;\r\n    margin-right: 8px;\r\n}\r\n\r\n.item-number {\r\n    border-radius: 3px;\r\n    background-color: rgba(0, 0, 0, .1);\r\n    height: 20px;\r\n    padding: 3px 6px;\r\n    font-weight: 500;\r\n    display: inline-block;\r\n    color: #fff;\r\n    line-height: 12px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.upper-links {\r\n    display: inline-block;\r\n    padding: 0 11px;\r\n    line-height: 23px;\r\n    font-family: 'Roboto', sans-serif;\r\n    letter-spacing: 0;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 12px;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.dropdown:hover {\r\n    background-color: #fff;\r\n}\r\n\r\n.dropdown:hover .links {\r\n    color: #000;\r\n}\r\n\r\n.dropdown:hover .dropdown-menu {\r\n    display: block;\r\n}\r\n\r\n.dropdown .dropdown-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    display: none;\r\n    background-color: #fff;\r\n    color: #333;\r\n    left: 0px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    box-shadow: 0 4px 8px -3px #555454;\r\n    margin: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.links {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.links:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.profile-links {\r\n    font-size: 12px;\r\n    font-family: 'Roboto', sans-serif;\r\n    border-bottom: 1px solid #e9e9e9;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    padding: 0 11px;\r\n    line-height: 23px;\r\n}\r\n\r\n.profile-li{\r\n    padding-top: 2px;\r\n}\r\n\r\n.largenav {\r\n    display: none;\r\n}\r\n\r\n.smallnav{\r\n    display: block;\r\n}\r\n\r\n.smallsearch{\r\n    margin-left: 15px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.menu{\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .largenav {\r\n        display: block;\r\n    }\r\n    .smallnav{\r\n        display: none;\r\n    }\r\n    .smallsearch{\r\n        margin: 0px;\r\n    }\r\n}\r\n\r\n/*Sidenav*/\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #fff;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 4px 8px -3px #555454;\r\n    padding-top: 0px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s\r\n}\r\n\r\n.item-count{\r\n    font-size: 20px;\r\n}\r\n/* -- */\r\n\r\n.js-cart-total{\r\n    color: green;\r\n  \r\n    font-size: 20px\r\n}\r\n.itemdisp{\r\n    font-size: 20px;\r\n}\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = " \n  <!-- <app-navigation></app-navigation> -->\n\n  \n    <!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- <meta charset=\"utf-8\"> -->\n    <!-- <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> -->\n    <title>ecommerce App</title>\n    <!-- Bootstrap -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n       <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\"> \n  </head>\n<body>\n \n<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n<div *ngIf=\"!cartonly\" id=\"flipkart-navbar\">\n    <div class=\"container\">\n        <div class=\"row row1\">\n            <ul class=\"largenav pull-right\">\n                <li class=\"upper-links\"><a class=\"links\" href=\"/shoppage\">Continue Shopping</a></li>\n                <li class=\"upper-links\"><a class=\"links\" href=\"/logout\">Logout</a></li>\n                           \n            </ul>\n        </div>\n        <div class=\"row row2\">\n            <div class=\"col-sm-2\">\n                <h2 style=\"margin:0px;\"><span class=\"smallnav menu\">☰ Brand</span></h2>\n                <h1 style=\"margin:0px;\"><span class=\"largenav\">DojoMart</span></h1>\n            </div>\n            <div class=\"flipkart-navbar-search smallsearch col-sm-8 col-xs-11\">\n                <div class=\"row\">\n                    <input class=\"flipkart-navbar-input col-xs-11\" type=\"text\" placeholder=\"Search for Products, Brands and more\" name=\"searchStr\"   [(ngModel)]=\"searchStr\">\n                    <button class=\"flipkart-navbar-button col-xs-1\">\n                        <svg width=\"15px\" height=\"15px\">\n                            <path d=\"M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 \"></path>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n            <div class=\"cart largenav col-sm-2\">\n                <a class=\"cart-button\" href=\"/cart\">\n                    <svg class=\"cart-svg \" width=\"16 \" height=\"16 \" viewBox=\"0 0 16 16 \">\n                        <path d=\"M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 \" fill=\"#fff \"></path>\n                    </svg>  \n                    <span class=\"item-count \">{{itemCount}}</span>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n <br>\n  \n\n <h4> Shopping Cart </h4>\n \n \n   \n  <div  class=\"col-sm-12\" *ngFor=\"let item of (cart|async).items\">\n   <p class=\"itemdisp\"> <img src={{item.img}} style=\"width:100px;height:100px;\" />\n    <span style=\"padding-left: 10px;padding-right:10px;\"></span>\n     <b>Title </b> : {{item.title}} \n     <span style=\"padding-left: 10px;padding-right:10px;\"></span>\n    <b>Quantity</b> : {{item.quantity}}\n   <!-- <b>Cost</b> : {{item.product.price | currency:'USD':true}}   -->\n</p>\n     \n    <hr>\n    </div>\n       <!-- <p> {{(cart|async).items[0].title}}</p> -->\n    \n       <div>\n    <h5 class=\"js-cart-total\">\n      Sub Total ({{itemCount}} items):\n   \n      <span class=\"text--red text--bold js-cart-total\">{{(cart | async).grossTotal | currency:'USD':true}}</span>\n    </h5>\n    </div>\n    <div *ngIf=\"!cartonly\">\n     <button class=\"success button btn-primary large expanded \"\n       [attr.disabled]=\"itemCount === 0 ? true : null\"\n       routerLink=\"/checkout\">Proceed To Checkout</button>\n  </div>\n  \n  <!-- </div>   -->\n<br/> \n\n<div class=\"row\" *ngIf=\"!cartonly\">\n  <div >\n    <button type=\"button\"\n            class=\"secondary button Large btn-danger expanded js-btn-empty-cart\"\n            (click)=\"emptyCart()\"\n            [attr.disabled]=\"itemCount === 0 ? true : null\">\n      Empty shopping basket\n    </button>\n  </div>\n</div>\n\n      <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n    <!-- Include all compiled plugins (below), or include individual files as needed -->\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n    </body>"

/***/ }),

/***/ "../../../../../client-src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shoppingcart_service__ = __webpack_require__("../../../../../client-src/app/shoppingcart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("../../../../../client-src/app/product.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = (function () {
    function CartComponent(shoppingCartService, productsService) {
        this.shoppingCartService = shoppingCartService;
        this.productsService = productsService;
    }
    CartComponent.prototype.emptyCart = function () {
        this.shoppingCartService.empty();
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart = this.shoppingCartService.get();
        // this.cartSubscription = this.cart.subscribe((cart) => {
        //   this.title = cart.items.map((x) => x.title) 
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.map(function (x) { return x.quantity; }).reduce(function (p, n) { return p + n; }, 0);
            _this.productsService.all().subscribe(function (products) {
                _this.products = products;
                _this.cartItems = cart.items
                    .map(function (item) {
                    var product = _this.products.find(function (p) { return p.ProductName === item.title; });
                    return __assign({}, item, { product: product, totalCost: product.Price * item.quantity });
                });
                console.log("cartItems", _this.cartItems);
            });
        });
    };
    CartComponent.prototype.ngOnDestroy = function () {
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
    };
    return CartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CartComponent.prototype, "cartonly", void 0);
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        selector: 'app-cart',
        template: __webpack_require__("../../../../../client-src/app/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shoppingcart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shoppingcart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* productService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* productService */]) === "function" && _b || Object])
], CartComponent);

var _a, _b;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " \r\n\r\n/* nav bar styling */\r\n#flipkart-navbar {\r\n    background-color: #2874f0;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.row1{\r\n    padding-top: 10px;\r\n}\r\n\r\n.row2 {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.flipkart-navbar-input {\r\n    padding: 11px 16px;\r\n    border-radius: 2px 0 0 2px;\r\n    border: 0 none;\r\n    outline: 0 none;\r\n    font-size: 15px;\r\n}\r\n\r\n.flipkart-navbar-button {\r\n    background-color: #ffe11b;\r\n    border: 1px solid #ffe11b;\r\n    border-radius: 0 2px 2px 0;\r\n    color: #565656;\r\n    padding: 10px 0;\r\n    height: 43px;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-button {\r\n    background-color: #2469d9;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2);\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    height: 41px;\r\n    border-radius: 2px;\r\n    font-weight: 500;\r\n    width: 120px;\r\n    display: inline-block;\r\n    color: #FFFFFF;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.cart-button:hover{\r\n    text-decoration: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-svg {\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: middle;\r\n    margin-right: 8px;\r\n}\r\n\r\n.item-number {\r\n    border-radius: 3px;\r\n    background-color: rgba(0, 0, 0, .1);\r\n    height: 20px;\r\n    padding: 3px 6px;\r\n    font-weight: 500;\r\n    display: inline-block;\r\n    color: #fff;\r\n    line-height: 12px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.upper-links {\r\n    display: inline-block;\r\n    padding: 0 11px;\r\n    line-height: 23px;\r\n    font-family: 'Roboto', sans-serif;\r\n    letter-spacing: 0;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 12px;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.dropdown:hover {\r\n    background-color: #fff;\r\n}\r\n\r\n.dropdown:hover .links {\r\n    color: #000;\r\n}\r\n\r\n.dropdown:hover .dropdown-menu {\r\n    display: block;\r\n}\r\n\r\n.dropdown .dropdown-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    display: none;\r\n    background-color: #fff;\r\n    color: #333;\r\n    left: 0px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    box-shadow: 0 4px 8px -3px #555454;\r\n    margin: 0;\r\n    padding: 0px;\r\n}\r\n  .checkout{\r\n    text-align: center\r\n  }\r\n\r\n  .text-right{\r\n    text-align: left;\r\n    padding-left: 30px;\r\n    color: green\r\n  }\r\n  .del{\r\n    padding-left: 60px;\r\n  }\r\n.links {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n.item-count{\r\n    font-size: 20px;\r\n}\r\n\r\n.links:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.profile-links {\r\n    font-size: 12px;\r\n    font-family: 'Roboto', sans-serif;\r\n    border-bottom: 1px solid #e9e9e9;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    padding: 0 11px;\r\n    line-height: 23px;\r\n}\r\n\r\n.profile-li{\r\n    padding-top: 2px;\r\n}\r\n\r\n.largenav {\r\n    display: none;\r\n}\r\n\r\n.smallnav{\r\n    display: block;\r\n}\r\n\r\n.smallsearch{\r\n    margin-left: 15px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.menu{\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .largenav {\r\n        display: block;\r\n    }\r\n    .smallnav{\r\n        display: none;\r\n    }\r\n    .smallsearch{\r\n        margin: 0px;\r\n    }\r\n}\r\n\r\n/*Sidenav*/\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #fff;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 4px 8px -3px #555454;\r\n    padding-top: 0px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s\r\n}\r\n\r\n\r\n/* -- */\r\n\r\n.js-cart-total{\r\n    color: green;\r\n  \r\n    font-size: 20px\r\n}\r\n.itemdisp{\r\n    font-size: 20px;\r\n}\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = " \n  <!-- <app-navigation></app-navigation> -->\n\n  \n    <!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- <meta charset=\"utf-8\"> -->\n    <!-- <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> -->\n    <title>ecommerce App</title>\n    <!-- Bootstrap -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n       <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\"> \n  </head>\n<body>\n \n<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n<div id=\"flipkart-navbar\">\n    <div class=\"container\">\n        <div class=\"row row1\">\n            <ul class=\"largenav pull-right\">\n                <li class=\"upper-links\"><a class=\"links\" href=\"/shoppage\">Continue Shopping</a></li>\n                <li class=\"upper-links\"><a class=\"links\" href=\"/logout\">Logout</a></li>\n                           \n            </ul>\n        </div>\n        <div class=\"row row2\">\n            <div class=\"col-sm-2\">\n                <h2 style=\"margin:0px;\"><span class=\"smallnav menu\">☰ Brand</span></h2>\n                <h1 style=\"margin:0px;\"><span class=\"largenav\">DojoMart</span></h1>\n            </div>\n            <div class=\"flipkart-navbar-search smallsearch col-sm-8 col-xs-11\">\n                <div class=\"row\">\n                    <input class=\"flipkart-navbar-input col-xs-11\" type=\"text\" placeholder=\"Search for Products, Brands and more\" name=\"searchStr\"   [(ngModel)]=\"searchStr\">\n                    <button class=\"flipkart-navbar-button col-xs-1\">\n                        <svg width=\"15px\" height=\"15px\">\n                            <path d=\"M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 \"></path>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n            <div class=\"cart largenav col-sm-2\">\n                <a class=\"cart-button\" href=\"/cart\">\n                    <svg class=\"cart-svg \" width=\"16 \" height=\"16 \" viewBox=\"0 0 16 16 \">\n                        <path d=\"M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 \" fill=\"#fff \"></path>\n                    </svg>  \n                    <!-- <span class=\"item-number \">{{cartItems.length}}</span> -->\n                     <span class=\"item-count \">{{itemCount}}</span>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n <br>\n  \n<div class=\"row\">\n \n  <div class=\"medium-4 columns text-right\">\n    <h4>\n      Order Total\n      <span class=\"text--red text--bold js-gross-total\">{{(cart | async).grossTotal | currency:'USD':true}}</span>\n    </h4>\n   \n    <h5 class=\"text--red\"\n       *ngIf=\"(cart | async).deliveryOptionId === undefined\">Please select a delivery option...</h5>\n       <button *ngIf=\"(cart | async).deliveryOptionId !== undefined\"\n       (click)=\"emptyCartcheckout()\">Purchase Order</button>\n        \n  </div>\n  <hr>\n</div>\n  \n   <div  class=\"col-sm-8 row checkout_row\" *ngFor=\"let item of cartItems\">\n   <p class=\"itemdisp\"> <img src={{item.product.image}} style=\"width:100px;height:100px;\" />\n    <span style=\"padding-left: 10px;padding-right:10px;\"></span>\n     <b>Title :</b>  {{item.product.title}}\n     <span style=\"padding-left: 10px;padding-right:10px;\"></span>\n    <b>Quantity  :</b>  {{item.quantity}}\n    <span style=\"padding-left: 10px;padding-right:10px;\"></span>\n     <b>Cost:</b> {{item.quantity}} x {{item.product.price | currency:'USD':true}}\n     <span style=\"padding-left: 10px;padding-right:10px;\"></span>\n     <b> Cost:</b>{{item.totalCost | currency:'USD':true}}</p>\n    <hr>\n    </div>\n  <div class=\"col-sm-8 del\">\n    <h4><b>Delivery Options</b></h4>\n\n    <div class=\"row delivery-option\"\n        *ngFor=\"let option of deliveryOptions | async\">\n        <div class=\"small-1 columns\">\n          <input type=\"radio\"\n                 name=\"delivery_option\"\n                 id=\"{{option.name}}\"\n                 [checked]=\"option.id === (cart | async).deliveryOptionId\"\n                 (click)=\"setDeliveryOption(option)\">\n        </div>\n        <div class=\"col-sm-12\">\n          <label class=\"text--bold js-option-name\" for=\"{{option.name}}\" (click)=\"setDeliveryOption(option)\">{{option.name}}</label>\n        </div>\n        <div class=\"col-sm-12\">\n          <p class=\"text--bold text--red js-option-price\">{{option.price | currency:'USD':true}}</p>\n        </div>\n        <div class=\"col-sm-12\">\n          <p>{{option.description}}</p>\n        </div>\n    </div>  \n  <!-- </div> -->\n\n\n  <div class=\"row\">\n    <div class=\"small-10 columns small-centered\">\n      <a class=\"warning button expanded\"\n        routerLink=\"/shoppage\">Continue Shopping</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client-src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delivery_options_service__ = __webpack_require__("../../../../../client-src/app/delivery-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("../../../../../client-src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shoppingcart_service__ = __webpack_require__("../../../../../client-src/app/shoppingcart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutComponent = (function () {
    function CheckoutComponent(productsService, deliveryOptionService, shoppingCartService, router) {
        this.productsService = productsService;
        this.deliveryOptionService = deliveryOptionService;
        this.shoppingCartService = shoppingCartService;
        this.router = router;
    }
    CheckoutComponent.prototype.emptyCart = function () {
        this.shoppingCartService.empty();
    };
    CheckoutComponent.prototype.emptyCartcheckout = function () {
        this.shoppingCartService.empty();
        this.router.navigate(['/confirmed']);
    };
    CheckoutComponent.prototype.setDeliveryOption = function (option) {
        this.shoppingCartService.setDeliveryOption(option);
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deliveryOptions = this.deliveryOptionService.all();
        this.cart = this.shoppingCartService.get();
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.map(function (x) { return x.quantity; }).reduce(function (p, n) { return p + n; }, 0);
            _this.productsService.all().subscribe(function (products) {
                _this.products = products;
                _this.cartItems = cart.items
                    .map(function (item) {
                    var product = _this.products.find(function (p) { return p.ProductName === item.title; });
                    return __assign({}, item, { product: product, totalCost: product.Price * item.quantity });
                });
                console.log("cartItems", _this.cartItems);
            });
        });
    };
    CheckoutComponent.prototype.ngOnDestroy = function () {
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../client-src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* productService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* productService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__delivery_options_service__["a" /* DeliveryOptionsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__delivery_options_service__["a" /* DeliveryOptionsDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shoppingcart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shoppingcart_service__["a" /* ShoppingCartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CheckoutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/delivery-option.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryOption; });
var DeliveryOption = (function () {
    function DeliveryOption() {
    }
    DeliveryOption.prototype.updateFrom = function (src) {
        this.id = src.id;
        this.name = src.name;
        this.description = src.description;
        this.price = src.price;
    };
    return DeliveryOption;
}());

//# sourceMappingURL=delivery-option.model.js.map

/***/ }),

/***/ "../../../../../client-src/app/delivery-options.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryOptionsDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delivery_option_model__ = __webpack_require__("../../../../../client-src/app/delivery-option.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__caching_service__ = __webpack_require__("../../../../../client-src/app/caching.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeliveryOptionsDataService = (function (_super) {
    __extends(DeliveryOptionsDataService, _super);
    function DeliveryOptionsDataService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    DeliveryOptionsDataService.prototype.all = function () {
        var _this = this;
        return this.cache(function () { return _this.deliveryOptions; }, function (val) { return _this.deliveryOptions = val; }, function () { return _this.http
            .get("./assets/delivery-options.json")
            .map(function (response) { return response.json()
            .map(function (item) {
            var model = new __WEBPACK_IMPORTED_MODULE_3__delivery_option_model__["a" /* DeliveryOption */]();
            model.updateFrom(item);
            return model;
        }); }); });
    };
    return DeliveryOptionsDataService;
}(__WEBPACK_IMPORTED_MODULE_4__caching_service__["a" /* CachcingServiceBase */]));
DeliveryOptionsDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DeliveryOptionsDataService);

var _a;
//# sourceMappingURL=delivery-options.service.js.map

/***/ }),

/***/ "../../../../../client-src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (bike_array, searchStr) {
        // if((searchStr=null))
        //   {
        //     searchStr = ""
        //   }
        //   else{
        //   }
        searchStr = searchStr.toLowerCase();
        return bike_array.filter(function (bike) {
            return bike.ProductName.toLowerCase().includes(searchStr);
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filter',
        pure: false
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../client-src/app/listings/listings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/listings/listings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  listings works!\n   <a [routerLink]=\"['/mylisting']\">My Listings</a>  \n    <a [routerLink]=\"['/shoppage']\">Shopping</a> \n     <!-- <a href=\"/shoppage\">Shopping</a>   -->\n    <a href=\"/logout\">Log out</a> \n</p>\n\n  <div class=\"bikes\" *ngFor=\"let b of allBikes; let idx = index\">\n    {{b.title}}\n   \n    {{b.image}}\n    <img [src]=b.image>\n  </div>"

/***/ }),

/***/ "../../../../../client-src/app/listings/listings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../client-src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bicycle__ = __webpack_require__("../../../../../client-src/app/bicycle.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingsComponent = (function () {
    function ListingsComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
        this.newBike = new __WEBPACK_IMPORTED_MODULE_3__bicycle__["a" /* ProductInfo */]();
    }
    ListingsComponent.prototype.ngOnInit = function () {
        this.getAllBikes();
    };
    ListingsComponent.prototype.getAllBikes = function () {
        var _this = this;
        this.user_service.getAllBikes()
            .then(function (bikes) { _this.allBikes = bikes; })
            .catch(function (err) { console.log(err); });
    };
    return ListingsComponent;
}());
ListingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listings',
        template: __webpack_require__("../../../../../client-src/app/listings/listings.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/listings/listings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ListingsComponent);

var _a, _b;
//# sourceMappingURL=listings.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/mylisting/mylisting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#hyper{\r\n  text-decoration: underline;\r\n  color:blue;\r\n}\r\n\r\n\r\n/* nav bar styling */\r\n#flipkart-navbar {\r\n    background-color: #2874f0;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.row1{\r\n    padding-top: 10px;\r\n}\r\n\r\n.row2 {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.flipkart-navbar-input {\r\n    padding: 11px 16px;\r\n    border-radius: 2px 0 0 2px;\r\n    border: 0 none;\r\n    outline: 0 none;\r\n    font-size: 15px;\r\n}\r\n\r\n.flipkart-navbar-button {\r\n    background-color: #ffe11b;\r\n    border: 1px solid #ffe11b;\r\n    border-radius: 0 2px 2px 0;\r\n    color: #565656;\r\n    padding: 10px 0;\r\n    height: 43px;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-button {\r\n    background-color: #2469d9;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2);\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    height: 41px;\r\n    border-radius: 2px;\r\n    font-weight: 500;\r\n    width: 120px;\r\n    display: inline-block;\r\n    color: #FFFFFF;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.cart-button:hover{\r\n    text-decoration: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-svg {\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: middle;\r\n    margin-right: 8px;\r\n}\r\n\r\n.item-number {\r\n    border-radius: 3px;\r\n    background-color: rgba(0, 0, 0, .1);\r\n    height: 20px;\r\n    padding: 3px 6px;\r\n    font-weight: 500;\r\n    display: inline-block;\r\n    color: #fff;\r\n    line-height: 12px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.upper-links {\r\n    display: inline-block;\r\n    padding: 0 11px;\r\n    line-height: 23px;\r\n    font-family: 'Roboto', sans-serif;\r\n    letter-spacing: 0;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 12px;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.dropdown:hover {\r\n    background-color: #fff;\r\n}\r\n\r\n.dropdown:hover .links {\r\n    color: #000;\r\n}\r\n\r\n.dropdown:hover .dropdown-menu {\r\n    display: block;\r\n}\r\n\r\n.dropdown .dropdown-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    display: none;\r\n    background-color: #fff;\r\n    color: #333;\r\n    left: 0px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    box-shadow: 0 4px 8px -3px #555454;\r\n    margin: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.links {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.links:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.profile-links {\r\n    font-size: 12px;\r\n    font-family: 'Roboto', sans-serif;\r\n    border-bottom: 1px solid #e9e9e9;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    padding: 0 11px;\r\n    line-height: 23px;\r\n}\r\n\r\n.profile-li{\r\n    padding-top: 2px;\r\n}\r\n\r\n.largenav {\r\n    display: none;\r\n}\r\n\r\n.smallnav{\r\n    display: block;\r\n}\r\n\r\n.smallsearch{\r\n    margin-left: 15px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.menu{\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .largenav {\r\n        display: block;\r\n    }\r\n    .smallnav{\r\n        display: none;\r\n    }\r\n    .smallsearch{\r\n        margin: 0px;\r\n    }\r\n}\r\n\r\n/*Sidenav*/\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #fff;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 4px 8px -3px #555454;\r\n    padding-top: 0px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/mylisting/mylisting.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- <app-navigation></app-navigation> -->\n\n  \n    <!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- <meta charset=\"utf-8\"> -->\n    <!-- <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> -->\n    <title>ecommerce App</title>\n    <!-- Bootstrap -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n       <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\"> \n  </head>\n<body>\n \n<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n<div id=\"flipkart-navbar\">\n    <div class=\"container\">\n        <div class=\"row row1\">\n            <ul class=\"largenav pull-right\">\n              <!-- <a [routerLink]=\"['/shoppage']\">Shopping</a>  -->\n                <li class=\"upper-links\"><a class=\"links\" [routerLink]=\"['/shoppage']\">Continue Shopping</a></li>\n                <li class=\"upper-links\"><a class=\"links\" href=\"/logout\">Logout</a></li>\n                           \n            </ul>\n        </div>\n        <div class=\"row row2\">\n            <div class=\"col-sm-2\">\n                <h2 style=\"margin:0px;\"><span class=\"smallnav menu\">☰ Brand</span></h2>\n                <h1 style=\"margin:0px;\"><span class=\"largenav\">DojoMart</span></h1>\n            </div>\n            <div class=\"flipkart-navbar-search smallsearch col-sm-8 col-xs-11\">\n                <div class=\"row\">\n                    <input class=\"flipkart-navbar-input col-xs-11\" type=\"text\" placeholder=\"Search for Products, Brands and more\" name=\"searchStr\"   [(ngModel)]=\"searchStr\">\n                    <button class=\"flipkart-navbar-button col-xs-1\">\n                        <svg width=\"15px\" height=\"15px\">\n                            <path d=\"M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 \"></path>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n            <div class=\"cart largenav col-sm-2\">\n                <a class=\"cart-button\" href=\"/cart\">\n                    <svg class=\"cart-svg \" width=\"16 \" height=\"16 \" viewBox=\"0 0 16 16 \">\n                        <path d=\"M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 \" fill=\"#fff \"></path>\n                    </svg>  \n                    <span class=\"item-number \"></span>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n <br>\n <br>\n <br>\n\n<!-- <div class=\"bikes\" > -->\n  \n\n<div class=\"create\">\n\n<h3>Manage Inventory</h3><br><br>\n  <div class=\"bike\">\n    <form (submit)=\"addBike(); bikeForm.reset()\" #bikeForm=\"ngForm\">\n      <div class=\"col-sm-3\">\n    <label>Image Upload (url): </label>\n     <input type=\"text\" name=\"Imageurl\" required [(ngModel)]='newBike.Imageurl' #Imageurl='ngModel'><br> \n      <!-- <img ng-src=\"http://cdn.mos.cms.futurecdn.net/05634a233decefea6571a8654a280ae0.jpg\" alt=\"click to add photo (required)\" > -->\n      </div><br>\n      <div class=\"col-sm-7\">\n        <div class=\"form-group\">\n          <label>Title</label> <span class=\"error\" *ngIf=\"ProductName.errors && (ProductName.dirty || ProductName.touched)\"> *required</span>\n          <input type=\"text\" name=\"ProductName\" class=\"form-control\" [(ngModel)]=\"newBike.ProductName\" #ProductName=\"ngModel\" required>\n          <label>Description</label> <span class=\"error\" *ngIf=\"Description.errors && (Description.dirty || Description.touched)\">\n            <span *ngIf=\"Description.errors.required\"> *required</span><span *ngIf=\"Description.errors.maxlength\"> *cannot exceed 200 characters</span></span>\n          <textarea class=\"form-control\" rows=\"3\" name=\"desc\" [(ngModel)]=\"newBike.Description\" #Description=\"ngModel\" required maxlength=\"200\"></textarea>\n        </div>\n      </div>\n      <div class=\"col-sm-2\">\n        <div class=\"form-group\">\n          <label>Price</label> <span class=\"error\" *ngIf=\"Price.errors && (Price.dirty || Price.touched)\">\n            <span *ngIf=\"Price.errors.required\"> *required</span><span *ngIf=\"!Price.errors.required && Price.errors.minValue\">*at least $1</span></span>\n          <input type=\"number\" class=\"form-control\" name=\"Price\" [(ngModel)]=\"newBike.Price\" #Price=\"ngModel\" required minValue=\"1\">\n         \n          <br><input type=\"submit\" value=\"Create\" class=\"btn btn-success\" [disabled]=\"!bikeForm.form.valid \">\n        </div>\n      </div>\n    </form>\n    <hr>\n    <br>\n<br>\n<br>\n<br>\n<hr>\n  </div>\n</div>\n\n\n<br>\n<br>\n<br>\n<br>\n \n<!-- {{mybikes}} -->\n  <div class=\"bikes\" *ngFor=\"let b of myBikes; let idx = index\"><br>\n    <div class=\"col-sm-7\">\n    <img md-card-image src={{b.imageurl}} style=\"width:100px;height:100px\">\n    {{b.productName}}\n    <br>\n    {{b.description}}\n    <br>{{b.price}}\n    <hr>\n    </div>\n  </div>\n \n      <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n    <!-- Include all compiled plugins (below), or include individual files as needed -->\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n    </body>"

/***/ }),

/***/ "../../../../../client-src/app/mylisting/mylisting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MylistingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../client-src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bicycle__ = __webpack_require__("../../../../../client-src/app/bicycle.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MylistingComponent = (function () {
    function MylistingComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
        // login_user = new User
        this.newBike = new __WEBPACK_IMPORTED_MODULE_3__bicycle__["a" /* ProductInfo */]();
        this.hasImage = false;
    }
    MylistingComponent.prototype.ngOnInit = function () {
        // this.getBikes()
        this.getAllBikes();
    };
    MylistingComponent.prototype.getBikes = function () {
        var _this = this;
        this.user_service.getAllUserBikes()
            .then(function (bikes) { _this.myBikes = bikes; })
            .catch(function (err) { console.log(err); });
    };
    MylistingComponent.prototype.getAllBikes = function () {
        var _this = this;
        this.user_service.getAllBikes()
            .then(function (bikes) {
            console.log("myBikes");
            _this.myBikes = bikes;
            console.log(_this.myBikes);
        })
            .catch(function (err) { console.log(err); });
    };
    MylistingComponent.prototype.addBike = function () {
        var _this = this;
        console.log(this.newBike);
        this.newBike.UserId = 19;
        this.user_service.addBike(this.newBike)
            .then(function () { _this.getAllBikes(); })
            .catch(function (err) { console.log(err); });
    };
    MylistingComponent.prototype.updateBike = function (idx) {
        var _this = this;
        this.user_service.updateBike(this.myBikes[idx])
            .then(function () { _this.getAllBikes(); })
            .catch(function (err) { console.log(err); });
    };
    MylistingComponent.prototype.deleteBike = function (idx) {
        var _this = this;
        this.user_service.deleteBike(this.myBikes[idx])
            .then(function () { _this.getAllBikes(); })
            .catch(function (err) { console.log(err); });
    };
    return MylistingComponent;
}());
MylistingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mylisting',
        template: __webpack_require__("../../../../../client-src/app/mylisting/mylisting.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/mylisting/mylisting.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MylistingComponent);

var _a, _b;
//# sourceMappingURL=mylisting.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Coiny);", ""]);

// module
exports.push([module.i, ".top-bar-title {\r\n    font-family: 'Coiny', cursive;\r\n    font-size: 22px;\r\n    color: #ffffff;\r\n}\r\n\r\n.nav-menu a {\r\n    color: #ffffff;\r\n}\r\n\r\n.cart{\r\n    padding-left: 20px;\r\n    border-right: 1px solid black\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "  <!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- <meta charset=\"utf-8\"> -->\n    <!-- <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> -->\n    <title>ecommerce App</title>\n    <!-- Bootstrap -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n       <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\"> \n  </head>\n<body>\n \n\n                 <nav class=\"navbar navbar-inverse\">\n      <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">eCommerce App</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n           \n  \n\n          <li class=\"active\"> <a href=\"/shoppage\">Shopping<span class=\"sr-only\">(current)</span></a> </li>\n                   \n                     <li><a href=\"/logout\">Logout</a></li>\n          </ul>\n                    <a href=\"/cart\"  class=\"btn btn-success \"><i class=\"fa fa-shopping-cart\"></i></a>\n        </div><!-- /.navbar-collapse -->\n      </div><!-- /.container-fluid -->\n    </nav>\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n    <!-- Include all compiled plugins (below), or include individual files as needed -->\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n    </body>"

/***/ }),

/***/ "../../../../../client-src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../client-src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/order-confirmation/order-confirmation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/order-confirmation/order-confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"medium-12 columns\">\n    <h1>Thank you for your order, it will be dispatched shortly!</h1>\n  </div>\n</div>\n<br/>\n<br/>\n<div class=\"row\">\n  <div class=\"medium-8 small-12 columns small-centered text-center\">\n    <a routerLink=\"/shoppage\" class=\"button success large expanded\">Continue Shopping!</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client-src/app/order-confirmation/order-confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderConfirmationComponent = (function () {
    function OrderConfirmationComponent() {
    }
    OrderConfirmationComponent.prototype.ngOnInit = function () {
    };
    return OrderConfirmationComponent;
}());
OrderConfirmationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-order-confirmation',
        template: __webpack_require__("../../../../../client-src/app/order-confirmation/order-confirmation.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/order-confirmation/order-confirmation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrderConfirmationComponent);

//# sourceMappingURL=order-confirmation.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__caching_service__ = __webpack_require__("../../../../../client-src/app/caching.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bicycle__ = __webpack_require__("../../../../../client-src/app/bicycle.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var productService = (function (_super) {
    __extends(productService, _super);
    function productService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    productService.prototype.all = function () {
        var _this = this;
        return this.cache(function () { return _this.products; }, function (val) { return _this.products = val; }, function () { return _this.http
            .get("/getAllBikes")
            .map(function (response) { return response.json()
            .map(function (item) {
            var model = new __WEBPACK_IMPORTED_MODULE_4__bicycle__["a" /* ProductInfo */]();
            model.updateFrom(item);
            return model;
        }); }); });
    };
    return productService;
}(__WEBPACK_IMPORTED_MODULE_3__caching_service__["a" /* CachcingServiceBase */]));
productService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], productService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../client-src/app/shoppage/shoppage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\r\n    padding : 5px;\r\n    display : inline-block;\r\n    min-width: 100px;\r\n    min-height: 50px;\r\n\r\n           \r\n}\r\n    /* .col-xs-2 {padding-left:5px; padding-right:5px;}\r\n    .row {margin-top:5px;}\r\n    p {margin:auto; text-align:center;}\r\n\r\n    img {margin:auto;}\r\n    button {margin-top:5px;} */\r\n* {\r\n  -webkit-user-select: none;\r\n  /* Chrome all / Safari all */\r\n  -moz-user-select: none;\r\n  /* Firefox all */\r\n  -ms-user-select: none;\r\n  /* IE 10+ */\r\n  user-select: none;\r\n  /* Likely future */\r\n}\r\n\r\n.cart{\r\n    padding-left: 20px;\r\n    border-right: 1px solid black\r\n}\r\n.product{\r\n  display:inline-block;\r\n  \r\n  margin-right:7%;\r\n}\r\nmd-card {\r\n  -webkit-transform: scale(1, 1);\r\n          transform: scale(1, 1);\r\n  transition : -webkit-transform .05s;\r\n  transition : transform .05s;\r\n  transition: transform .05s, -webkit-transform .05s;\r\n  -webkit-transition: -webkit-transform .05s\r\n}\r\n#hyper{\r\n  text-decoration: underline;\r\n  color:blue;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* nav bar styling */\r\n#flipkart-navbar {\r\n    background-color: #2874f0;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.row1{\r\n    padding-top: 10px;\r\n}\r\n\r\n.row2 {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.flipkart-navbar-input {\r\n    padding: 11px 16px;\r\n    border-radius: 2px 0 0 2px;\r\n    border: 0 none;\r\n    outline: 0 none;\r\n    font-size: 15px;\r\n}\r\n\r\n.flipkart-navbar-button {\r\n    background-color: #ffe11b;\r\n    border: 1px solid #ffe11b;\r\n    border-radius: 0 2px 2px 0;\r\n    color: #565656;\r\n    padding: 10px 0;\r\n    height: 43px;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-button {\r\n    background-color: #2469d9;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2);\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    height: 41px;\r\n    border-radius: 2px;\r\n    font-weight: 500;\r\n    width: 120px;\r\n    display: inline-block;\r\n    color: #FFFFFF;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.cart-button:hover{\r\n    text-decoration: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-svg {\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: middle;\r\n    margin-right: 8px;\r\n}\r\n.item-count{\r\n    font-size: 20px;\r\n}\r\n\r\n.item-number {\r\n    border-radius: 3px;\r\n    background-color: rgba(0, 0, 0, .1);\r\n    height: 20px;\r\n    padding: 3px 6px;\r\n    font-weight: 500;\r\n    display: inline-block;\r\n    color: #fff;\r\n    line-height: 12px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.upper-links {\r\n    display: inline-block;\r\n    padding: 0 11px;\r\n    line-height: 23px;\r\n    font-family: 'Roboto', sans-serif;\r\n    letter-spacing: 0;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 12px;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.dropdown:hover {\r\n    background-color: #fff;\r\n}\r\n\r\n.dropdown:hover .links {\r\n    color: #000;\r\n}\r\n\r\n.dropdown:hover .dropdown-menu {\r\n    display: block;\r\n}\r\n\r\n.dropdown .dropdown-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    display: none;\r\n    background-color: #fff;\r\n    color: #333;\r\n    left: 0px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    box-shadow: 0 4px 8px -3px #555454;\r\n    margin: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.links {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.links:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.profile-links {\r\n    font-size: 12px;\r\n    font-family: 'Roboto', sans-serif;\r\n    border-bottom: 1px solid #e9e9e9;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    padding: 0 11px;\r\n    line-height: 23px;\r\n}\r\n\r\n.profile-li{\r\n    padding-top: 2px;\r\n}\r\n\r\n.largenav {\r\n    display: none;\r\n}\r\n\r\n.smallnav{\r\n    display: block;\r\n}\r\n\r\n.smallsearch{\r\n    margin-left: 15px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.menu{\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .largenav {\r\n        display: block;\r\n    }\r\n    .smallnav{\r\n        display: none;\r\n    }\r\n    .smallsearch{\r\n        margin: 0px;\r\n    }\r\n}\r\n\r\n/*Sidenav*/\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #fff;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 4px 8px -3px #555454;\r\n    padding-top: 0px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s\r\n}\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n    color: #fff;        \r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav a {font-size: 18px;}\r\n}\r\n\r\n.sidenav-heading{\r\n    font-size: 36px;\r\n    color: #fff;\r\n}\r\n  .flipkart-navbar-input{\r\n    color: black\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/shoppage/shoppage.component.html":
/***/ (function(module, exports) {

module.exports = " \n  <!-- <app-navigation></app-navigation> -->\n\n  \n    <!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- <meta charset=\"utf-8\"> -->\n    <!-- <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> -->\n    <title>ecommerce App</title>\n    <!-- Bootstrap -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n       <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\"> \n  </head>\n<body>\n \n<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n<div id=\"flipkart-navbar\">\n    <div class=\"container\">\n        <div class=\"row row1\">\n            <ul class=\"largenav pull-right\">\n                <li class=\"upper-links\"><a class=\"links\" href=\"/shoppage\">Continue Shopping</a></li>\n                <li class=\"upper-links\"><a class=\"links\" href=\"/logout\">Logout</a></li>\n                           \n            </ul>\n        </div>\n        <div class=\"row row2\">\n            <div class=\"col-sm-2\">\n                <h2 style=\"margin:0px;\"><span class=\"smallnav menu\">☰ Brand</span></h2>\n                <h1 style=\"margin:0px;\"><span class=\"largenav\">DojoMart</span></h1>\n            </div>\n            <div class=\"flipkart-navbar-search smallsearch col-sm-8 col-xs-11\">\n                <div class=\"row\">\n                    <input class=\"flipkart-navbar-input col-xs-11\" type=\"text\" placeholder=\"Search for Products, Brands and more\" name=\"searchStr\"   [(ngModel)]=\"searchStr\">\n                    <button class=\"flipkart-navbar-button col-xs-1\">\n                        <svg width=\"15px\" height=\"15px\">\n                            <path d=\"M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 \"></path>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n            <div class=\"cart largenav col-sm-2\">\n                <a class=\"cart-button\" href=\"/cart\">\n                    <svg class=\"cart-svg \" width=\"16 \" height=\"16 \" viewBox=\"0 0 16 16 \">\n                        <path d=\"M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 \" fill=\"#fff \"></path>\n                    </svg>  \n                    <span class=\"item-count\"><b>{{itemCount}}</b></span>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n <br>\n <br>\n <br>\n\n<!-- <div class=\"bikes\" > -->\n  \n\n<div class=\"row bikes\"   >\n  \n      <div class=\"col-md-3 product\"  *ngFor=\"let b of allBikes \">\n         <img md-card-image src={{b.imageurl}}  style=\"width:100px;height:100px\"><br>\n          \n          <!-- <h4  >{{b.title}}</h4>   -->\n              <b>Price:</b> {{b.price | currency:'USD':true  }}<br>\n              <b> Description :</b> {{b.description}}\n                \n              <a id=\"hyper\" (click)=\"chooseProduct(b.productName)\">    \n                       <h4>{{b.productName}} </h4>\n        </a> \n                       <br>\n        <br>\n        </div>\n        <br>\n        <br>\n      </div>\n \n\n      <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n    <!-- Include all compiled plugins (below), or include individual files as needed -->\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n    </body>"

/***/ }),

/***/ "../../../../../client-src/app/shoppage/shoppage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../client-src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bicycle__ = __webpack_require__("../../../../../client-src/app/bicycle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shoppingcart_service__ = __webpack_require__("../../../../../client-src/app/shoppingcart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppageComponent = (function () {
    function ShoppageComponent(user_service, router, shoppingCartService) {
        this.user_service = user_service;
        this.router = router;
        this.shoppingCartService = shoppingCartService;
        this.newBike = new __WEBPACK_IMPORTED_MODULE_3__bicycle__["a" /* ProductInfo */]();
        this.searchStr = '';
        this.productName = '';
    }
    //  private cartSubscription: Subscription;
    ShoppageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllBikes();
        this.cart = this.shoppingCartService.get();
        // this.cartSubscription = this.cart.subscribe((cart) => {
        //   this.title = cart.items.map((x) => x.title) 
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.map(function (x) { return x.quantity; }).reduce(function (p, n) { return p + n; }, 0);
        });
    };
    ShoppageComponent.prototype.getAllBikes = function () {
        var _this = this;
        this.user_service.getAllBikes()
            .then(function (bikes) { _this.allBikes = bikes; })
            .catch(function (err) { console.log(err); });
    };
    ShoppageComponent.prototype.chooseProduct = function (productName) {
        console.log("bicyle.ProductName", productName);
        this.router.navigate(['/product', productName]);
    };
    return ShoppageComponent;
}());
ShoppageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-shoppage',
        template: __webpack_require__("../../../../../client-src/app/shoppage/shoppage.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/shoppage/shoppage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shoppingcart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shoppingcart_service__["a" /* ShoppingCartService */]) === "function" && _c || Object])
], ShoppageComponent);

var _a, _b, _c;
//# sourceMappingURL=shoppage.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/shoppingCart.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
var ShoppingCart = (function () {
    function ShoppingCart() {
        this.items = new Array();
        this.grossTotal = 0;
        this.deliveryTotal = 0;
        this.itemsTotal = 0;
    }
    ShoppingCart.prototype.updateFrom = function (src) {
        this.items = src.items;
        this.deliveryOptionId = src.deliveryOptionId;
        this.grossTotal = src.grossTotal;
        this.deliveryTotal = src.deliveryTotal;
        this.itemsTotal = src.itemsTotal;
    };
    return ShoppingCart;
}());

//# sourceMappingURL=shoppingCart.model.js.map

/***/ }),

/***/ "../../../../../client-src/app/shoppingcart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__("../../../../../client-src/app/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shoppingCart_model__ = __webpack_require__("../../../../../client-src/app/shoppingCart.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_item_model__ = __webpack_require__("../../../../../client-src/app/cart-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delivery_options_service__ = __webpack_require__("../../../../../client-src/app/delivery-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__("../../../../../client-src/app/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CART_KEY = "cart";
var ShoppingCartService = (function () {
    function ShoppingCartService(storageService, productservice, deliveryOptionsService) {
        var _this = this;
        this.storageService = storageService;
        this.productservice = productservice;
        this.deliveryOptionsService = deliveryOptionsService;
        this.myCart = [];
        this.subscribers = new Array();
        this.storage = this.storageService.get();
        this.productservice.all().subscribe(function (products) { return _this.products = products; });
        this.deliveryOptionsService.all().subscribe(function (options) { return _this.deliveryOptions = options; });
        this.subscriptionObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.subscribers.push(observer);
            observer.next(_this.retrieve());
            return function () {
                _this.subscribers = _this.subscribers.filter(function (obs) { return obs !== observer; });
            };
        });
    }
    ShoppingCartService.prototype.retrieve = function () {
        var cart = new __WEBPACK_IMPORTED_MODULE_4__shoppingCart_model__["a" /* ShoppingCart */]();
        var storedCart = this.storage.getItem(CART_KEY);
        console.log("storedCart", storedCart);
        if (storedCart) {
            cart.updateFrom(JSON.parse(storedCart));
        }
        console.log("cart", cart);
        return cart;
    };
    ShoppingCartService.prototype.get = function () {
        return this.subscriptionObservable;
    };
    ShoppingCartService.prototype.empty = function () {
        var newCart = new __WEBPACK_IMPORTED_MODULE_4__shoppingCart_model__["a" /* ShoppingCart */]();
        this.save(newCart);
        this.dispatch(newCart);
    };
    ShoppingCartService.prototype.addItem = function (product, quantity) {
        var cart = this.retrieve();
        console.log("product.ProductName", product.ProductName);
        var item = cart.items.find(function (p) { return p.title === product.ProductName; });
        if (item === undefined) {
            item = new __WEBPACK_IMPORTED_MODULE_5__cart_item_model__["a" /* CartItem */]();
            item.title = product.ProductName;
            item.img = product.Imageurl;
            cart.items.push(item);
        }
        item.quantity += quantity;
        cart.items = cart.items.filter(function (cartItem) { return cartItem.quantity > 0; });
        if (cart.items.length === 0) {
            cart.deliveryOptionId = undefined;
        }
        this.calculateCart(cart);
        this.save(cart);
        this.dispatch(cart);
    };
    ShoppingCartService.prototype.setDeliveryOption = function (deliveryOption) {
        var cart = this.retrieve();
        cart.deliveryOptionId = deliveryOption.id;
        this.calculateCart(cart);
        this.save(cart);
        this.dispatch(cart);
    };
    ShoppingCartService.prototype.calculateCart = function (cart) {
        var _this = this;
        cart.itemsTotal = cart.items
            .map(function (item) { return item.quantity * _this.products.find(function (p) { return p.ProductName === item.title; }).Price; })
            .reduce(function (previous, current) { return previous + current; }, 0);
        cart.deliveryTotal = cart.deliveryOptionId ?
            this.deliveryOptions.find(function (x) { return x.id === cart.deliveryOptionId; }).price :
            0;
        cart.grossTotal = cart.itemsTotal + cart.deliveryTotal;
    };
    ShoppingCartService.prototype.save = function (cart) {
        this.storage.setItem(CART_KEY, JSON.stringify(cart));
    };
    ShoppingCartService.prototype.dispatch = function (cart) {
        this.subscribers
            .forEach(function (sub) {
            try {
                sub.next(cart);
            }
            catch (e) {
                // we want all subscribers to get the update even if one errors.
            }
        });
    };
    return ShoppingCartService;
}());
ShoppingCartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__storage_service__["b" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__storage_service__["b" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* productService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* productService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__delivery_options_service__["a" /* DeliveryOptionsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__delivery_options_service__["a" /* DeliveryOptionsDataService */]) === "function" && _c || Object])
], ShoppingCartService);

var _a, _b, _c;
//# sourceMappingURL=shoppingcart.service.js.map

/***/ }),

/***/ "../../../../../client-src/app/showprod/showprod.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#hyper{\r\n  text-decoration: underline;\r\n  color:blue;\r\n}\r\n\r\n\r\n/* nav bar styling */\r\n#flipkart-navbar {\r\n    background-color: #2874f0;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.row1{\r\n    padding-top: 10px;\r\n}\r\n\r\n.row2 {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.flipkart-navbar-input {\r\n    padding: 11px 16px;\r\n    border-radius: 2px 0 0 2px;\r\n    border: 0 none;\r\n    outline: 0 none;\r\n    font-size: 15px;\r\n}\r\n\r\n.cartonly{\r\n     height: 700px;\r\n    width: 500px;\r\n    border-color: #8BC34A;\r\n    border-style: dotted;\r\n    position: relative;\r\n    right: -700px;\r\n    top:-300px;\r\n}\r\n.flipkart-navbar-button {\r\n    background-color: #ffe11b;\r\n    border: 1px solid #ffe11b;\r\n    border-radius: 0 2px 2px 0;\r\n    color: #565656;\r\n    padding: 10px 0;\r\n    height: 43px;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-button {\r\n    background-color: #2469d9;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2);\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    height: 41px;\r\n    border-radius: 2px;\r\n    font-weight: 500;\r\n    width: 120px;\r\n    display: inline-block;\r\n    color: #FFFFFF;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.cart-button:hover{\r\n    text-decoration: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-svg {\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: middle;\r\n    margin-right: 8px;\r\n}\r\n.item-numbershop{\r\n    font: 20px;\r\n}\r\n.item-count{\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.item-number {\r\n    border-radius: 3px;\r\n    background-color: rgba(0, 0, 0, .1);\r\n    height: 20px;\r\n    padding: 3px 6px;\r\n    font-weight: 500;\r\n    display: inline-block;\r\n    color: #fff;\r\n    line-height: 12px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.upper-links {\r\n    display: inline-block;\r\n    padding: 0 11px;\r\n    line-height: 23px;\r\n    font-family: 'Roboto', sans-serif;\r\n    letter-spacing: 0;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 12px;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.dropdown:hover {\r\n    background-color: #fff;\r\n}\r\n\r\n.dropdown:hover .links {\r\n    color: #000;\r\n}\r\n\r\n.dropdown:hover .dropdown-menu {\r\n    display: block;\r\n}\r\n\r\n.dropdown .dropdown-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    display: none;\r\n    background-color: #fff;\r\n    color: #333;\r\n    left: 0px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    box-shadow: 0 4px 8px -3px #555454;\r\n    margin: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.links {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.links:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.profile-links {\r\n    font-size: 12px;\r\n    font-family: 'Roboto', sans-serif;\r\n    border-bottom: 1px solid #e9e9e9;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    padding: 0 11px;\r\n    line-height: 23px;\r\n}\r\n\r\n.profile-li{\r\n    padding-top: 2px;\r\n}\r\n\r\n.largenav {\r\n    display: none;\r\n}\r\n\r\n.smallnav{\r\n    display: block;\r\n}\r\n\r\n.smallsearch{\r\n    margin-left: 15px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.menu{\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .largenav {\r\n        display: block;\r\n    }\r\n    .smallnav{\r\n        display: none;\r\n    }\r\n    .smallsearch{\r\n        margin: 0px;\r\n    }\r\n}\r\n\r\n/*Sidenav*/\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #fff;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 4px 8px -3px #555454;\r\n    padding-top: 0px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/showprod/showprod.component.html":
/***/ (function(module, exports) {

module.exports = "  \n  <!-- <app-navigation></app-navigation> -->\n\n  \n    <!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- <meta charset=\"utf-8\"> -->\n    <!-- <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> -->\n    <title>ecommerce App</title>\n    <!-- Bootstrap -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n       <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\"> \n  </head>\n<body>\n \n<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n<div id=\"flipkart-navbar\">\n    <div class=\"container\">\n        <div class=\"row row1\">\n            <ul class=\"largenav pull-right\">\n                <li class=\"upper-links\"><a class=\"links\" href=\"/shoppage\">Continue Shopping</a></li>\n                <li class=\"upper-links\"><a class=\"links\" href=\"/logout\">Logout</a></li>\n                           \n            </ul>\n        </div>\n        <div class=\"row row2\">\n            <div class=\"col-sm-2\">\n                <h2 style=\"margin:0px;\"><span class=\"smallnav menu\">☰ Brand</span></h2>\n                <h1 style=\"margin:0px;\"><span class=\"largenav\">DojoMart</span></h1>\n            </div>\n            <div class=\"flipkart-navbar-search smallsearch col-sm-8 col-xs-11\">\n                <div class=\"row\">\n                    <input class=\"flipkart-navbar-input col-xs-11\" type=\"text\" placeholder=\"Search for Products, Brands and more\" name=\"searchStr\"   [(ngModel)]=\"searchStr\">\n                    <button class=\"flipkart-navbar-button col-xs-1\">\n                        <svg width=\"15px\" height=\"15px\">\n                            <path d=\"M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 \"></path>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n            <div class=\"cart largenav col-sm-2\">\n                <a class=\"cart-button\" href=\"/cart\">\n                    <svg class=\"cart-svg \" width=\"16 \" height=\"16 \" viewBox=\"0 0 16 16 \">\n                        <path d=\"M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 \" fill=\"#fff \"></path>\n                    </svg>  \n                    <span class=\"item-count\">{{itemCount}}</span>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n <br>\n <br>\n <br>\n \n<div class=\"bikes\"  >\n<div class=\"row\">\n      <div class=\"col-sm-8\">\n         <img md-card-image src={{product.imageurl}} style=\"width:100px;height:100px\">\n          \n          <h4  >{{product.productName}}</h4>  \n                    <p> <b>Price:</b> {{product.price | currency:'USD':true  }}  </p>\n              <p><b> Description :</b> {{product.description}}</p>\n  \n           <p>\n                <button type=\"button\"\n                        class=\"button success large js-btn-add\"\n                        (click)=\"addProductToCart(product, 1)\">Add To Cart</button>\n           </p>\n                    <p>\n                <button type=\"button\"\n                        class=\"button large js-btn-remove\"\n                        *ngIf=\"productInCart(product) | async\"\n                        (click)=\"removeProductFromCart(product, 1)\">Remove Item from Cart</button>\n              </p>\n               \n        </div>\n        \n      </div>\n  </div>\n    <div class=\"cartonly\">\n<app-cart [cartonly]=\"true\"></app-cart>\n</div>\n      <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n    <!-- Include all compiled plugins (below), or include individual files as needed -->\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n    </body>"

/***/ }),

/***/ "../../../../../client-src/app/showprod/showprod.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowprodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../client-src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shoppingcart_service__ = __webpack_require__("../../../../../client-src/app/shoppingcart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bicycle__ = __webpack_require__("../../../../../client-src/app/bicycle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShowprodComponent = (function () {
    function ShowprodComponent(_route, user_service, router, shoppingCartService) {
        var _this = this;
        this._route = _route;
        this.user_service = user_service;
        this.router = router;
        this.shoppingCartService = shoppingCartService;
        this.newBike = new __WEBPACK_IMPORTED_MODULE_4__bicycle__["a" /* ProductInfo */]();
        this.product_title = " ";
        this.product = new __WEBPACK_IMPORTED_MODULE_4__bicycle__["a" /* ProductInfo */];
        this._route.params.subscribe(function (param) {
            _this.product_title = param.title;
        });
    }
    ShowprodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProduct();
        this.cart = this.shoppingCartService.get();
        // this.cartSubscription = this.cart.subscribe((cart) => {
        //   this.title = cart.items.map((x) => x.title) 
        this.cartSubscription = this.cart.subscribe(function (cart) {
            _this.itemCount = cart.items.map(function (x) { return x.quantity; }).reduce(function (p, n) { return p + n; }, 0);
        });
    };
    ShowprodComponent.prototype.getProduct = function () {
        var _this = this;
        this.user_service.getOneProduct(this.product_title).then(function (product) {
            console.log("got product");
            _this.product = product;
            console.log(_this.product);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ShowprodComponent.prototype.addProductToCart = function (product) {
        console.log("add cart prodtc", product);
        this.shoppingCartService.addItem(product, 1);
    };
    ShowprodComponent.prototype.removeProductFromCart = function (product) {
        this.shoppingCartService.addItem(product, -1);
    };
    ShowprodComponent.prototype.productInCart = function (product) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (obs) {
            var sub = _this.shoppingCartService
                .get()
                .subscribe(function (cart) {
                obs.next(cart.items.some(function (i) { return i.title === product.ProductName; }));
                obs.complete();
            });
            // sub.unsubscribe();
        });
    };
    return ShowprodComponent;
}());
ShowprodComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-showprod',
        template: __webpack_require__("../../../../../client-src/app/showprod/showprod.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/showprod/showprod.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shoppingcart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shoppingcart_service__["a" /* ShoppingCartService */]) === "function" && _d || Object])
], ShowprodComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=showprod.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageServie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StorageService = (function () {
    function StorageService() {
    }
    return StorageService;
}());
StorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], StorageService);

// tslint:disable-next-line:max-classes-per-file
var LocalStorageServie = (function (_super) {
    __extends(LocalStorageServie, _super);
    function LocalStorageServie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalStorageServie.prototype.get = function () {
        return localStorage;
    };
    return LocalStorageServie;
}(StorageService));
LocalStorageServie = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], LocalStorageServie);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../client-src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.registration = function (user) {
        return this.http.post("/register", user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.login = function (user) {
        return this.http.post("/login", user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.addBike = function (bike) {
        return this.http.post("/addbike", bike)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.updateBike = function (bike) {
        return this.http.post("/bikes/updateBike", bike)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.getOneProduct = function (product_title) {
        return this.http.get("/products/" + product_title).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.deleteBike = function (bike) {
        return this.http.post("/bikes/deleteBike", bike)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.getAllUserBikes = function () {
        return this.http.get("/getAllUserBikes")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.checkadmin = function () {
        console.log("admin service");
        return this.http.get("/checkadmin").map(function (data) { return data.json(); })
            .toPromise();
    };
    UserService.prototype.getAllBikes = function () {
        console.log("calling getallbikes");
        return this.http.get("getAllBikes")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../client-src/app/user/user-login/user-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/user/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = " <!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- <meta charset=\"utf-8\"> -->\n    <!-- <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> -->\n    <title>ecommerce App</title>\n    <!-- Bootstrap -->\n      <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  </head>\n<body>\n      <span style=\"color:red;\" *ngIf='login_error.status && login_error.message._body < 5'>Email or password is incorrect</span>\n  <span style=\"color:red;\" *ngIf='login_error.status && login_error.message._body >= 5'>You have made too many failures, login is disabled for one hour</span>\n  \n    <br>\n<form (submit)=\"login()\" #formData='ngForm'>\n  <p>\n    Email ID:<input \n    type=\"text\" \n    name=\"EmailAddress\" \n    required \n    minlength=\"4\" \n    required pattern=\"^([A-Za-z0-9._\\-]+)@([a-zA-Z0-9._\\-]+)\\.([a-zA-Z]+)$\" \n    maxlength=\"24\"\n    \n    [(ngModel)]=\"login_user.EmailAddress\"\n    #EmailAddress='ngModel'\n  />\n  </p>\n <span style=\"color: red;\" *ngIf=\"EmailAddress.errors && (EmailAddress.dirty ||EmailAddress.touched)\">Email id should atleast be 4 characters long</span> <br>\n<p> Password\n  <input \n    type=\"password\" \n    name=\"Password\" \n    required \n    minlength=\"10\" \n    maxlength=\"24\"\n    pattern=\"^([a-zA-Z0-9@*#]{8,15})$\"\n    [(ngModel)]=\"login_user.Password\"\n    #Password='ngModel'\n  />\n    </p>\n<span style=\"color: red;\" *ngIf=\"Password.errors && Password.touched\">Password  should atleast be 4 characters long</span> <br>\n \n  <button type=\"submit\" [disabled]=\"!formData.valid\">Login!</button>\n</form>\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n      <!-- Include all compiled plugins (below), or include individual files as needed -->\n      <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n      "

/***/ }),

/***/ "../../../../../client-src/app/user/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../client-src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../client-src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLoginComponent = (function () {
    function UserLoginComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
        this.login_user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* Userrecord */];
        this.login_error = { status: false, message: {} };
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.prototype.login = function () {
        var _this = this;
        console.log("login attempt", this.login_user);
        this.user_service.login(this.login_user)
            .then(function () {
            console.log("login success in componnent");
            // this.user_service.checkadmin() 
            //                   .then(()=>{
            //                           console.log("admin ts.....")
            //                           this.router.navigate(['mylisting'])
            //                   } )
            //                   .catch(err => {
            //                     console.log("non-admin ts", err)
            //                       this.router.navigate(['shoppage'])
            //               })
            _this.router.navigate(['mylisting']);
        })
            .catch(function (err) { console.log("login fail component", err); _this.login_error.status = true; _this.login_error.message = err; });
        //   login(){
        //   console.log("login attempt", this.login_user)
        //   this.user_service.login(this.login_user)
        //   .then(() =>
        //           {console.log("login success in componnent");
        //             this.user_service.checkadmin()    
        // .then(()=>
        //   {console.log("admin")
        //   this.router.navigate(['shoppage'])
        //   })
        //           .catch((err) => { 
        //             if (err.status == '401') {
        //               {
        //                 console.log("admin401");
        //                 this.router.navigate(['mylisting'])
        //               }
        //             }
        //             if (err.status == '402')  {console.log("login fail component402", err); this.login_error.status = true; this.login_error.message=err})
        //           })
        //   .catch(err => console.log(err))
        // }
        // }
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-login',
        template: __webpack_require__("../../../../../client-src/app/user/user-login/user-login.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/user/user-login/user-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserLoginComponent);

var _a, _b;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/user/user-register/user-register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\r\n    color:red\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/user/user-register/user-register.component.html":
/***/ (function(module, exports) {

module.exports = "  <!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- <meta charset=\"utf-8\"> -->\n    <!-- <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> -->\n    <title>Bicycle App</title>\n    <!-- Bootstrap -->\n      <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  </head>\n<body>\n<form (submit)=\"registration()\" #formData='ngForm'>\n  <p>\n    Email ID:<input \n    type=\"text\" \n    name=\"EmailAddress\" \n    required \n    minlength=\"4\" \n    maxlength=\"24\"\n    required pattern=\"^([A-Za-z0-9._\\-]+)@([a-zA-Z0-9._\\-]+)\\.([a-zA-Z]+)$\" \n    [(ngModel)]=\"reg_user.EmailAddress\"\n    #EmailAddress='ngModel'\n  />\n  </p>\n <span style=\"color: red;\" *ngIf=\"EmailAddress.errors && EmailAddress.touched\">Email id should atleast be 4 characters long</span> <br>\n<p>\n  First Name:<input \n    type=\"text\" \n    name=\"FirstName\" \n    required \n    minlength=\"4\" \n    maxlength=\"24\"\n    [(ngModel)]=\"reg_user.FirstName\"\n    #FirstName='ngModel'\n  />\n    </p>\n<span style=\"color: red;\" *ngIf=\"FirstName.errors && FirstName.touched\">First Name should atleast be 4 characters long</span> <br>\n  <p>\n    Last Name:\n  <input \n    type=\"text\" \n    name=\"LastName\" \n    required \n    minlength=\"4\" \n    maxlength=\"24\"\n    [(ngModel)]=\"reg_user.LastName\"\n    #LastName='ngModel'\n  />\n    </p>\n<span style=\"color: red;\" *ngIf=\"LastName.errors && LastName.touched\">Last Name  should atleast be 4 characters long</span> <br>\n  <p> Password\n  <input \n    type=\"password\" \n    name=\"Password\" \n    required \n    minlength=\"10\" \n    maxlength=\"24\"\n    pattern=\"^([a-zA-Z0-9@*#]{8,15})$\"\n    [(ngModel)]=\"reg_user.Password\"\n    #Password='ngModel'\n  />\n    </p>\n<span style=\"color: red;\" *ngIf=\"Password.errors && Password.touched\">Password  should atleast be 4 characters long</span> <br>\n   \n \n <button type=\"submit\" [disabled]=\"!formData.valid\">Register</button>\n</form>\n  \n\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n    <!-- Include all compiled plugins (below), or include individual files as needed -->\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n    "

/***/ }),

/***/ "../../../../../client-src/app/user/user-register/user-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../client-src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../client-src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserRegisterComponent = (function () {
    function UserRegisterComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
        this.reg_user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* Userrecord */];
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
    };
    UserRegisterComponent.prototype.registration = function () {
        var _this = this;
        console.log(this.reg_user);
        this.user_service.registration(this.reg_user)
            .then(function () {
            _this.router.navigate(['/shoppage']);
        })
            .catch(function (err) { return console.log(err); });
        // this.reg_user = new Userrecord
    };
    return UserRegisterComponent;
}());
UserRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-register',
        template: __webpack_require__("../../../../../client-src/app/user/user-register/user-register.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/user/user-register/user-register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserRegisterComponent);

var _a, _b;
//# sourceMappingURL=user-register.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-login></app-user-login>\n<app-user-register></app-user-register>\n \n"

/***/ }),

/***/ "../../../../../client-src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../client-src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Userrecord; });
var Userrecord = (function () {
    function Userrecord() {
        this.FirstName = "";
        this.LastName = "";
        this.EmailAddress = "";
        this.Password = "";
        this.ConfirmPassword = "";
    }
    return Userrecord;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../client-src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../client-src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client-src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client-src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client-src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map