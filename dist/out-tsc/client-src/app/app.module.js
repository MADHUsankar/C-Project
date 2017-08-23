"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var user_component_1 = require("./user/user.component");
var user_login_component_1 = require("./user/user-login/user-login.component");
var user_register_component_1 = require("./user/user-register/user-register.component");
var user_service_1 = require("./user.service");
var listings_component_1 = require("./listings/listings.component");
var mylisting_component_1 = require("./mylisting/mylisting.component");
var filter_pipe_1 = require("./filter.pipe");
var shoppage_component_1 = require("./shoppage/shoppage.component");
var showprod_component_1 = require("./showprod/showprod.component");
var cart_component_1 = require("./cart/cart.component");
var navigation_component_1 = require("./navigation/navigation.component");
var product_service_1 = require("./product.service");
var delivery_options_service_1 = require("./delivery-options.service");
var shoppingcart_service_1 = require("./shoppingcart.service");
var storage_service_1 = require("./storage.service");
var checkout_component_1 = require("./checkout/checkout.component");
var order_confirmation_component_1 = require("./order-confirmation/order-confirmation.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            user_component_1.UserComponent,
            user_login_component_1.UserLoginComponent,
            user_register_component_1.UserRegisterComponent,
            listings_component_1.ListingsComponent,
            mylisting_component_1.MylistingComponent,
            filter_pipe_1.FilterPipe,
            shoppage_component_1.ShoppageComponent,
            showprod_component_1.ShowprodComponent,
            cart_component_1.CartComponent,
            navigation_component_1.NavigationComponent,
            checkout_component_1.CheckoutComponent,
            order_confirmation_component_1.OrderConfirmationComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        providers: [
            user_service_1.UserService,
            product_service_1.productService,
            delivery_options_service_1.DeliveryOptionsDataService,
            // PopulatedCartRouteGuard,
            storage_service_1.LocalStorageServie,
            { provide: storage_service_1.StorageService, useClass: storage_service_1.LocalStorageServie },
            {
                deps: [storage_service_1.StorageService,
                    product_service_1.productService,
                    delivery_options_service_1.DeliveryOptionsDataService],
                provide: shoppingcart_service_1.ShoppingCartService,
                useClass: shoppingcart_service_1.ShoppingCartService
            }
        ]
        // bootstrap: [AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map