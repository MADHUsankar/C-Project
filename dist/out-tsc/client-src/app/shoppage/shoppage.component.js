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
var bicycle_1 = require("./../bicycle");
var shoppingcart_service_1 = require("./../shoppingcart.service");
var ShoppageComponent = (function () {
    function ShoppageComponent(user_service, router, shoppingCartService) {
        this.user_service = user_service;
        this.router = router;
        this.shoppingCartService = shoppingCartService;
        this.newBike = new bicycle_1.Bicycle();
        this.searchStr = '';
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
    ShoppageComponent.prototype.chooseProduct = function (bicyle) {
        this.router.navigate(['/product', bicyle.title]);
    };
    return ShoppageComponent;
}());
ShoppageComponent = __decorate([
    core_1.Component({
        selector: 'app-shoppage',
        templateUrl: './shoppage.component.html',
        styleUrls: ['./shoppage.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, shoppingcart_service_1.ShoppingCartService])
], ShoppageComponent);
exports.ShoppageComponent = ShoppageComponent;
//# sourceMappingURL=shoppage.component.js.map