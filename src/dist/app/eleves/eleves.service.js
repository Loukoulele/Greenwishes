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
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var of_1 = require("rxjs/observable/of");
var ElevesService = (function () {
    function ElevesService(http) {
        this.http = http;
        this.elevesUrl = 'api/eleves';
    }
    ElevesService.prototype.log = function (log) {
        console.info(log);
    };
    ElevesService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            console.log(operation + " failed: " + error.message);
            return of_1.of(result);
        };
    };
    ElevesService.prototype.searchEleves = function (term) {
        var _this = this;
        if (!term.trim()) {
            return of_1.of([]);
        }
        return this.http.get(this.elevesUrl + "/?name" + term).pipe(operators_1.tap(function (_) { return _this.log("found eleves matching \"" + term + "\""); }), operators_1.catchError(this.handleError('searchEleves', [])));
    };
    // Retourne tous les pokémons
    ElevesService.prototype.getEleves = function () {
        var _this = this;
        return this.http.get(this.elevesUrl).pipe(operators_1.tap(function (_) { return _this.log("fetched eleves"); }), operators_1.catchError(this.handleError("getEleves", [])));
    };
    // Retourne le pokémon avec l'identifiant passé en paramètre
    ElevesService.prototype.getEleve = function (id) {
        var _this = this;
        var url = this.elevesUrl + "/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("fetched eleve id=" + id); }), operators_1.catchError(this.handleError("getEleve id=" + id)));
    };
    ElevesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ElevesService);
    return ElevesService;
}());
exports.ElevesService = ElevesService;
//# sourceMappingURL=eleves.service.js.map