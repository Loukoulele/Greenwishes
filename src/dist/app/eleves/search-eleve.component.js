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
var Subject_1 = require("rxjs/Subject");
var operators_1 = require("rxjs/operators");
var eleves_service_1 = require("./eleves.service");
var EleveSearchComponent = (function () {
    function EleveSearchComponent(elevesService, router) {
        this.elevesService = elevesService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
    EleveSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    EleveSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eleves$ = this.searchTerms.pipe(
        // attendre 300ms de pause entre chaque requête
        operators_1.debounceTime(300), 
        // ignorer la recherche en cours si c'est la même que la précédente
        operators_1.distinctUntilChanged(), 
        // on retourne la liste des résultats correpsondant aux termes de la recherche
        operators_1.switchMap(function (term) { return _this.elevesService.searchEleves(term); }));
    };
    EleveSearchComponent.prototype.gotoDetail = function (eleve) {
        var link = ['/eleve', eleve.id];
        this.router.navigate(link);
    };
    EleveSearchComponent = __decorate([
        core_1.Component({
            selector: 'eleve-search',
            templateUrl: './app/eleves/search-eleve.component.html'
        }),
        __metadata("design:paramtypes", [eleves_service_1.ElevesService,
            router_1.Router])
    ], EleveSearchComponent);
    return EleveSearchComponent;
}());
exports.EleveSearchComponent = EleveSearchComponent;
//# sourceMappingURL=search-eleve.component.js.map