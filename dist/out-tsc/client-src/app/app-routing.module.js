"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_component_1 = require("./user/user.component");
var listings_component_1 = require("./listings/listings.component");
var mylisting_component_1 = require("./mylisting/mylisting.component");
var shoppage_component_1 = require("./shoppage/shoppage.component");
var showprod_component_1 = require("./showprod/showprod.component");
var cart_component_1 = require("./cart/cart.component");
var checkout_component_1 = require("./checkout/checkout.component");
var order_confirmation_component_1 = require("./order-confirmation/order-confirmation.component");
var routes = [
    { path: "", component: user_component_1.UserComponent },
    { path: "listings", component: listings_component_1.ListingsComponent },
    { path: "mylisting", component: mylisting_component_1.MylistingComponent },
    { path: "shoppage", component: shoppage_component_1.ShoppageComponent },
    { path: "product/:title", component: showprod_component_1.ShowprodComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
    { path: 'checkout', component: checkout_component_1.CheckoutComponent },
    { path: 'confirmed', component: order_confirmation_component_1.OrderConfirmationComponent },
    { path: "", pathMatch: "full", redirectTo: "/" },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map