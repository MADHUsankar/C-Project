"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var bicycle_service_1 = require("./bicycle.service");
describe('BicycleService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [bicycle_service_1.BicycleService]
        });
    });
    it('should be created', testing_1.inject([bicycle_service_1.BicycleService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=bicycle.service.spec.js.map