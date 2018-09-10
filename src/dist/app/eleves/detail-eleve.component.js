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
var DetailEleveComponent = (function () {
    function DetailEleveComponent(route, router, elevesService) {
        this.route = route;
        this.router = router;
        this.elevesService = elevesService;
        this.eleve = null;
    }
    DetailEleveComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.elevesService.getEleve(id)
            .subscribe(function (eleve) { return _this.eleve = eleve; });
    };
    DetailEleveComponent.prototype.goBack = function () {
        this.router.navigate(['/eleves']);
    };
    DetailEleveComponent = __decorate([
        core_1.Component({
            selector: 'detail-eleve',
            templateUrl: './app/eleves/detail-eleve.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            eleves_service_1.ElevesService])
    ], DetailEleveComponent);
    return DetailEleveComponent;
}());
exports.DetailEleveComponent = DetailEleveComponent;
//# sourceMappingURL=detail-eleve.component.js.map