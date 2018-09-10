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
var my_eleves_1 = require("./my-eleves");
var router_1 = require("@angular/router");
var ListEleveComponent = (function () {
    function ListEleveComponent(router) {
        this.router = router;
        this.name = 'Angular';
        this.title = "Ma classe d'éléves";
    }
    ListEleveComponent.prototype.ngOnInit = function () {
        this.eleves = my_eleves_1.ELEVES;
    };
    ListEleveComponent.prototype.selectEleve = function (eleve) {
        alert("vous avez cliqué sur " + eleve.nom);
        var link = ['/eleve', eleve.id];
        this.router.navigate(link);
    };
    ListEleveComponent = __decorate([
        core_1.Component({
            selector: 'list-eleve',
            templateUrl: "./app/list-eleve.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ListEleveComponent);
    return ListEleveComponent;
}());
exports.ListEleveComponent = ListEleveComponent;
//# sourceMappingURL=list.eleve.component.js.map