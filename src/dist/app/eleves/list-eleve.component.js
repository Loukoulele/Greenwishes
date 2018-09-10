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
var router_1 = require("@angular/router");
var eleves_service_1 = require("./eleves.service");
var ListEleveComponent = (function () {
    function ListEleveComponent(router, elevesService) {
        this.router = router;
        this.elevesService = elevesService;
        this.name = 'Angular';
        this.title = "Ma classe d'élèves";
    }
    ListEleveComponent.prototype.ngOnInit = function () {
        this.getEleves();
    };
    ListEleveComponent.prototype.getEleves = function () {
        var _this = this;
        this.elevesService.getEleves()
            .subscribe(function (eleves) { return _this.eleves = eleves; });
    };
    ListEleveComponent.prototype.selectEleve = function (eleve) {
        var link = ['/eleve', eleve.id];
        this.router.navigate(link);
    };
    ListEleveComponent = __decorate([
        core_1.Component({
            selector: 'list-eleve',
            templateUrl: "./app/eleves/list-eleve.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, eleves_service_1.ElevesService])
    ], ListEleveComponent);
    return ListEleveComponent;
}());
exports.ListEleveComponent = ListEleveComponent;
//# sourceMappingURL=list-eleve.component.js.map