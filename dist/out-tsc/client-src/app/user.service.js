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
var http_1 = require("@angular/http");
require("rxjs");
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
        return this.http.get("/getAllBikes")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map