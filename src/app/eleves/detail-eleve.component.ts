import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Eleve } from './eleve';
import { ElevesService } from './eleves.service';

@Component({
	selector: 'detail-eleve',
	templateUrl: './app/eleves/detail-eleve.component.html'
})
export class DetailEleveComponent implements OnInit {

	eleve: Eleve = null;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private elevesService: ElevesService) {}

	ngOnInit(): void {
		let id = +this.route.snapshot.paramMap.get('id');
		this.elevesService.getEleve(id)
			.subscribe(eleve => this.eleve = eleve);
	}

	goBack(): void {
		this.router.navigate(['/eleves']);
	}

	/*goEdit(eleve: Eleve): void {
		let link = ['/eleve/edit', eleve.id];
		this.router.navigate(link);
	}*/

}
