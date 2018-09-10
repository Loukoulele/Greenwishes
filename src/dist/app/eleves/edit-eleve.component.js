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
var EditEleveComponent = (function () {
    function EditEleveComponent(route, elevesService) {
        this.route = route;
        this.elevesService = elevesService;
        this.eleve = null;
    }
    EditEleveComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id'];
        this.eleve = this.elevesService.getEleve(id);
    };
    EditEleveComponent = __decorate([
        core_1.Component({
            selector: 'edit-eleve',
            template: "\n    <h2 class=\"header center\">Editer {{ eleve?.name }}</h2>\n\t\t<p class=\"center\">\n\t\t\t<img *ngIf=\"eleve\" [src]=\"eleve.picture\"/>\n\t\t</p>\n    <eleve-form [eleve]=\"eleve\"></eleve-form>\n  ",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            eleves_service_1.ElevesService])
    ], EditEleveComponent);
    return EditEleveComponent;
}());
exports.EditEleveComponent = EditEleveComponent;
//# sourceMappingURL=edit-eleve.component.js.map