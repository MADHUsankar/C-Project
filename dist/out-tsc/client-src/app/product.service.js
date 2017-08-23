"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
require("rxjs/add/operator/map");
var caching_service_1 = require("./caching.service");
var bicycle_1 = require("./bicycle");
var productService = (function (_super) {
    __extends(productService, _super);
    function productService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    productService.prototype.all = function () {
        var _this = this;
        return this.cache(function () { return _this.products; }, function (val) { return _this.products = val; }, function () { return _this.http
            .get("/getAllBikes")
            .map(function (response) { return response.json()
            .map(function (item) {
            var model = new bicycle_1.Bicycle();
            model.updateFrom(item);
            return model;
        }); }); });
    };
    return productService;
}(caching_service_1.CachcingServiceBase));
productService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], productService);
exports.productService = productService;
//# sourceMappingURL=product.service.js.map