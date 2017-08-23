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
var Observable_1 = require("rxjs/Observable");
require("rxjs");
var storage_service_1 = require("./storage.service");
var shoppingCart_model_1 = require("./shoppingCart.model");
var cart_item_model_1 = require("./cart-item.model");
var delivery_options_service_1 = require("./delivery-options.service");
var product_service_1 = require("./product.service");
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
        this.subscriptionObservable = new Observable_1.Observable(function (observer) {
            _this.subscribers.push(observer);
            observer.next(_this.retrieve());
            return function () {
                _this.subscribers = _this.subscribers.filter(function (obs) { return obs !== observer; });
            };
        });
    }
    ShoppingCartService.prototype.retrieve = function () {
        var cart = new shoppingCart_model_1.ShoppingCart();
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
        var newCart = new shoppingCart_model_1.ShoppingCart();
        this.save(newCart);
        this.dispatch(newCart);
    };
    ShoppingCartService.prototype.addItem = function (product, quantity) {
        var cart = this.retrieve();
        var item = cart.items.find(function (p) { return p.title === product.title; });
        if (item === undefined) {
            item = new cart_item_model_1.CartItem();
            item.title = product.title;
            item.img = product.image;
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
            .map(function (item) { return item.quantity * _this.products.find(function (p) { return p.title === item.title; }).price; })
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [storage_service_1.StorageService, product_service_1.productService,
        delivery_options_service_1.DeliveryOptionsDataService])
], ShoppingCartService);
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shoppingcart.service.js.map