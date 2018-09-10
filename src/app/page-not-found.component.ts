import { Component } from '@angular/core';

@Component({
	selector: 'page-404',
	template: `
    <div class='center'>
      <img src="http://forum.bravefrontier-rpg.com/attachments/tmp_32747-kaamelott-alexandre-astier-h%C3%A9r%C3%A9tique-500430750-jpg.23924/"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/eleves" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }
