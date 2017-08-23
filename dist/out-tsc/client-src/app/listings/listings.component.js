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
var ListingsComponent = (function () {
    function ListingsComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
        this.newBike = new bicycle_1.Bicycle();
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
    core_1.Component({
        selector: 'app-listings',
        templateUrl: './listings.component.html',
        styleUrls: ['./listings.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], ListingsComponent);
exports.ListingsComponent = ListingsComponent;
//# sourceMappingURL=listings.component.js.map