"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bicycle = (function () {
    function Bicycle() {
        this.title = '';
        this.description = '';
        this.price = null;
        this.image = null;
        this.location = '';
        this.user_id = '';
    }
    Bicycle.prototype.updateFrom = function (src) {
        this.title = src.title;
        this.description = src.description;
        this.price = src.price;
        this.image = src.image;
    };
    return Bicycle;
}());
exports.Bicycle = Bicycle;
//# sourceMappingURL=bicycle.js.map