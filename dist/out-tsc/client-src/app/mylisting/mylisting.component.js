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
var MylistingComponent = (function () {
    function MylistingComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
        // login_user = new User
        this.newBike = new bicycle_1.Bicycle();
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
            .then(function (bikes) { _this.myBikes = bikes; })
            .catch(function (err) { console.log(err); });
    };
    MylistingComponent.prototype.addBike = function () {
        var _this = this;
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
    core_1.Component({
        selector: 'app-mylisting',
        templateUrl: './mylisting.component.html',
        styleUrls: ['./mylisting.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], MylistingComponent);
exports.MylistingComponent = MylistingComponent;
//# sourceMappingURL=mylisting.component.js.map