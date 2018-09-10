"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var eleves_routing_module_1 = require("./eleves-routing.module");
var list_eleve_component_1 = require("./list-eleve.component");
var detail_eleve_component_1 = require("./detail-eleve.component");
var search_eleve_component_1 = require("./search-eleve.component");
var border_card_directive_1 = require("./border-card-directive");
var eleves_service_1 = require("./eleves.service");
var ElevesModule = (function () {
    function ElevesModule() {
    }
    ElevesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                eleves_routing_module_1.EleveRoutingModule
            ],
            declarations: [
                list_eleve_component_1.ListEleveComponent,
                detail_eleve_component_1.DetailEleveComponent,
                search_eleve_component_1.EleveSearchComponent,
                border_card_directive_1.BorderCardDirective
            ],
            providers: [eleves_service_1.ElevesService]
        })
    ], ElevesModule);
    return ElevesModule;
}());
exports.ElevesModule = ElevesModule;
//# sourceMappingURL=eleves.module.js.map