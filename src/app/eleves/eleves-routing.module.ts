import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListEleveComponent }    from './list-eleve.component';
import { DetailEleveComponent }  from './detail-eleve.component';

// les routes du module Pokémon
const elevesRoutes: Routes = [
	{ path: 'eleves', component: ListEleveComponent },
	{ path: 'eleve/:id', component: DetailEleveComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(elevesRoutes)
	],
	exports: [
		RouterModule
	]
})
export class EleveRoutingModule { }
