"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var my_eleves_1 = require("./eleves/my-eleves");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var eleves = my_eleves_1.ELEVES;
        return { eleves: eleves };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map