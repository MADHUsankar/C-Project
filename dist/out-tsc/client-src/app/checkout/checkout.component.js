"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var delivery_options_service_1 = require("./../delivery-options.service");
var product_service_1 = require("./../product.service");
var shoppingcart_service_1 = require("./../shoppingcart.service");
var router_1 = require("@angular/router");
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
                    var product = _this.products.find(function (p) { return p.title === item.title; });
                    return __assign({}, item, { product: product, totalCost: product.price * item.quantity });
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
    core_1.Component({
        selector: 'app-checkout',
        templateUrl: './checkout.component.html',
        styleUrls: ['./checkout.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.productService,
        delivery_options_service_1.DeliveryOptionsDataService,
        shoppingcart_service_1.ShoppingCartService, router_1.Router])
], CheckoutComponent);
exports.CheckoutComponent = CheckoutComponent;
//# sourceMappingURL=checkout.component.js.map