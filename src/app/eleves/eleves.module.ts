import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EleveRoutingModule } from './eleves-routing.module';

import { ListEleveComponent } from './list-eleve.component';
import { DetailEleveComponent } from './detail-eleve.component';
import { EleveSearchComponent } from './search-eleve.component';
import { BorderCardDirective } from './border-card-directive';
import { ElevesService } from './eleves.service';



@NgModule({
	imports: [
		CommonModule,
    EleveRoutingModule
	],
	declarations: [
		ListEleveComponent,
		DetailEleveComponent,
		EleveSearchComponent,
		BorderCardDirective
	],
	providers: [ElevesService]
})
export class ElevesModule { }
