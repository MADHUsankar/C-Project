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
var UserLoginComponent = (function () {
    function UserLoginComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
        this.login_user = new user_1.User;
        this.login_error = { status: false, message: {} };
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.prototype.login = function () {
        var _this = this;
        console.log("login attempt", this.login_user);
        this.user_service.login(this.login_user)
            .then(function () {
            console.log("login success in componnent");
            _this.user_service.checkadmin()
                .then(function () {
                console.log("admin ts.....");
                _this.router.navigate(['mylisting']);
            })
                .catch(function (err) {
                console.log("non-admin ts", err);
                _this.router.navigate(['shoppage']);
            });
        })
            .catch(function (err) { console.log("login fail component", err); _this.login_error.status = true; _this.login_error.message = err; });
        //   login(){
        //   console.log("login attempt", this.login_user)
        //   this.user_service.login(this.login_user)
        //   .then(() =>
        //           {console.log("login success in componnent");
        //             this.user_service.checkadmin()    
        // .then(()=>
        //   {console.log("admin")
        //   this.router.navigate(['shoppage'])
        //   })
        //           .catch((err) => { 
        //             if (err.status == '401') {
        //               {
        //                 console.log("admin401");
        //                 this.router.navigate(['mylisting'])
        //               }
        //             }
        //             if (err.status == '402')  {console.log("login fail component402", err); this.login_error.status = true; this.login_error.message=err})
        //           })
        //   .catch(err => console.log(err))
        // }
        // }
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    core_1.Component({
        selector: 'app-user-login',
        templateUrl: './user-login.component.html',
        styleUrls: ['./user-login.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], UserLoginComponent);
exports.UserLoginComponent = UserLoginComponent;
//# sourceMappingURL=user-login.component.js.map