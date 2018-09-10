import { Component } from '@angular/core';
import { Eleve } from './eleve';
import { Router } from '@angular/router';
import { ElevesService } from './eleves.service';

@Component({
  selector: 'list-eleve',
  templateUrl: `./app/eleves/list-eleve.component.html`
})
export class ListEleveComponent {

  name = 'Angular';

  private eleves: Eleve[];
  private title: string = "Ma classe d'élèves";

  constructor(private router: Router, private elevesService: ElevesService) { }

  ngOnInit()
  {
    this.getEleves();
  }

  getEleves(): void {
    this.elevesService.getEleves()
    .subscribe(eleves => this.eleves = eleves);
  }

  selectEleve(eleve: Eleve)
  {
    let link = ['/eleve', eleve.id];
    this.router.navigate(link);
  }

}
