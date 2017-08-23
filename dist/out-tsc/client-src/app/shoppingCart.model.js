"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShoppingCart = (function () {
    function ShoppingCart() {
        this.items = new Array();
        this.grossTotal = 0;
        this.deliveryTotal = 0;
        this.itemsTotal = 0;
    }
    ShoppingCart.prototype.updateFrom = function (src) {
        this.items = src.items;
        this.deliveryOptionId = src.deliveryOptionId;
        this.grossTotal = src.grossTotal;
        this.deliveryTotal = src.deliveryTotal;
        this.itemsTotal = src.itemsTotal;
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
//# sourceMappingURL=shoppingCart.model.js.map