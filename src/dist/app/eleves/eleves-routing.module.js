"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var list_eleve_component_1 = require("./list-eleve.component");
var detail_eleve_component_1 = require("./detail-eleve.component");
// les routes du module Pokémon
var elevesRoutes = [
    { path: 'eleves', component: list_eleve_component_1.ListEleveComponent },
    { path: 'eleve/:id', component: detail_eleve_component_1.DetailEleveComponent }
];
var EleveRoutingModule = (function () {
    function EleveRoutingModule() {
    }
    EleveRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(elevesRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], EleveRoutingModule);
    return EleveRoutingModule;
}());
exports.EleveRoutingModule = EleveRoutingModule;
//# sourceMappingURL=eleves-routing.module.js.map