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
var my_eleves_1 = require("./my-eleves");
var DetailEleveComponent = (function () {
    function DetailEleveComponent(route, router) {
        this.route = route;
        this.router = router;
        this.eleves = null;
        this.eleve = null;
    }
    DetailEleveComponent.prototype.ngOnInit = function () {
        this.eleves = my_eleves_1.ELEVES;
        var id = +this.route.snapshot.paramMap.get('id');
        for (var i = 0; i < this.eleves.length; i++) {
            if (this.eleves[i].id == id) {
                this.eleve = this.eleves[i];
            }
        }
    };
    DetailEleveComponent.prototype.goBack = function () {
        this.router.navigate(['/eleves']);
    };
    DetailEleveComponent = __decorate([
        core_1.Component({
            selector: 'detail-eleve',
            templateUrl: './app/detail-eleve.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], DetailEleveComponent);
    return DetailEleveComponent;
}());
exports.DetailEleveComponent = DetailEleveComponent;
//# sourceMappingURL=detail-eleve.component.js.map