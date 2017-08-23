"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeliveryOption = (function () {
    function DeliveryOption() {
    }
    DeliveryOption.prototype.updateFrom = function (src) {
        this.id = src.id;
        this.name = src.name;
        this.description = src.description;
        this.price = src.price;
    };
    return DeliveryOption;
}());
exports.DeliveryOption = DeliveryOption;
//# sourceMappingURL=delivery-option.model.js.map