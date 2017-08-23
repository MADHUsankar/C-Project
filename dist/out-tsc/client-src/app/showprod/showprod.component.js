"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("./../user.service");
var shoppingcart_service_1 = require("./../shoppingcart.service");
var bicycle_1 = require("./../bicycle");
var Observable_1 = require("rxjs/Observable");
var ShowprodComponent = (function () {
    function ShowprodComponent(_route, user_service, router, shoppingCartService) {
        var _this = this;
        this._route = _route;
        this.user_service = user_service;
        this.router = router;
        this.shoppingCartService = shoppingCartService;
        this.newBike = new bicycle_1.Bicycle();
        this.product_title = " ";
        this.product = new bicycle_1.Bicycle;
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
        return Observable_1.Observable.create(function (obs) {
            var sub = _this.shoppingCartService
                .get()
                .subscribe(function (cart) {
                obs.next(cart.items.some(function (i) { return i.title === product.title; }));
                obs.complete();
            });
            // sub.unsubscribe();
        });
    };
    return ShowprodComponent;
}());
ShowprodComponent = __decorate([
    core_1.Component({
        selector: 'app-showprod',
        templateUrl: './showprod.component.html',
        styleUrls: ['./showprod.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, user_service_1.UserService, router_1.Router,
        shoppingcart_service_1.ShoppingCartService])
], ShowprodComponent);
exports.ShowprodComponent = ShowprodComponent;
//# sourceMappingURL=showprod.component.js.map