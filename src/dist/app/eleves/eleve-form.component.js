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
var eleve_1 = require("./eleve");
var EleveFormComponent = (function () {
    //notes: Array<number>; // notes disponibles pour un eleve
    function EleveFormComponent(elevesService, router) {
        this.elevesService = elevesService;
        this.router = router;
    }
    /*ngOnInit() {
      // Initialisation de la propriété notes
      this.notes = this.elevesService.getEleveNotes();
    }
  
    // Détermine si une note passé en paramètres appartient ou non a l'éleve en cours d'édition.
    /*hasNote(note: number): boolean {
      let index = this.eleve.notes.indexOf(note);
      if (~index) return true;
      return false;
    }
  
    // Méthode appelée lorsque l'utilisateur ajoute ou retire une note a l'éleve en cours d'édition.
    selectNote($event: any, note: number): void {
      let checked = $event.target.checked;
      if ( checked ) {
        this.eleve.notes.push(note);
      } else {
        let index = this.eleve.notes.indexOf(note);
        if (~index) {
          this.eleve.notes.splice(index, 1);
        }
      }
    }
  
    isNotesValid(note: number): boolean {
      if(this.eleve.notes.length >= 5 && !this.hasNote(note))
      {
        return false;
      }
      return true;
    }*/
    // La méthode appelée lorsque le formulaire est soumis.
    EleveFormComponent.prototype.onSubmit = function () {
        console.log("Submit form !");
        var link = ['/eleve', this.eleve.id];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", eleve_1.Eleve)
    ], EleveFormComponent.prototype, "eleve", void 0);
    EleveFormComponent = __decorate([
        core_1.Component({
            selector: 'eleve-form',
            templateUrl: './app/eleves/eleve-form.component.html',
            styleUrls: ['app/eleves/eleve-form.component.css']
        }),
        __metadata("design:paramtypes", [eleves_service_1.ElevesService,
            router_1.Router])
    ], EleveFormComponent);
    return EleveFormComponent;
}());
exports.EleveFormComponent = EleveFormComponent;
//# sourceMappingURL=eleve-form.component.js.map