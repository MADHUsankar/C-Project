"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/share");
var CachcingServiceBase = (function () {
    function CachcingServiceBase() {
    }
    CachcingServiceBase.prototype.cache = function (getter, setter, retreive) {
        var cached = getter();
        if (cached !== undefined) {
            return cached;
        }
        else {
            var val = retreive().share();
            setter(val);
            return val;
        }
    };
    return CachcingServiceBase;
}());
exports.CachcingServiceBase = CachcingServiceBase;
//# sourceMappingURL=caching.service.js.map