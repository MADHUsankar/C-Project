"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var shoppingcart_service_1 = require("./shoppingcart.service");
describe('ShoppingcartService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [shoppingcart_service_1.ShoppingcartService]
        });
    });
    it('should be created', testing_1.inject([shoppingcart_service_1.ShoppingcartService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=shoppingcart.service.spec.js.map