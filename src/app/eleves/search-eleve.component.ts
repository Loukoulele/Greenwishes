import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import {
	debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { ElevesService } from './eleves.service';
import { Eleve } from './eleve';

@Component({
	selector: 'eleve-search',
	templateUrl: './app/eleves/search-eleve.component.html'
})
export class EleveSearchComponent implements OnInit {

	private searchTerms = new Subject<string>();
	eleves$: Observable<Eleve[]>;

	constructor(
		private elevesService: ElevesService,
		private router: Router) { }

	// Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.eleves$ = this.searchTerms.pipe(
			// attendre 300ms de pause entre chaque requête
			debounceTime(300),
			// ignorer la recherche en cours si c'est la même que la précédente
			distinctUntilChanged(),
			// on retourne la liste des résultats correpsondant aux termes de la recherche
			switchMap((term: string) => this.elevesService.searchEleves(term)),
		);
	}

	gotoDetail(eleve: Eleve): void {
		let link = ['/eleve', eleve.id];
		this.router.navigate(link);
	}
}
