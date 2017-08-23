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
var user_service_1 = require("./../../user.service");
var user_1 = require("./../user");
var router_1 = require("@angular/router");
var UserRegisterComponent = (function () {
    function UserRegisterComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
        this.reg_user = new user_1.User;
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
        this.reg_user = new user_1.User;
    };
    return UserRegisterComponent;
}());
UserRegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-user-register',
        templateUrl: './user-register.component.html',
        styleUrls: ['./user-register.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], UserRegisterComponent);
exports.UserRegisterComponent = UserRegisterComponent;
//# sourceMappingURL=user-register.component.js.map