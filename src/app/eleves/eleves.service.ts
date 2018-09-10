import { Injectable } from '@angular/core';
import { Eleve } from './eleve';
import { ELEVES } from './my-eleves';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ElevesService {

    constructor(private http: HttpClient) { }

    private elevesUrl = 'api/eleves';

    private log(log: string){
      console.info(log);
    }

    private handleError<T>(operation='operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(error);
        console.log(`${operation} failed: ${error.message}`);

        return of(result as T);
      };
    }

    searchEleves(term: string): Observable<Eleve[]> {
      if(!term.trim()) {
        return of([]);
      }

      return this.http.get<Eleve[]>(`${this.elevesUrl}/?name${term}`).pipe(
        tap(_ => this.log(`found eleves matching "${term}"`)),
        catchError(this.handleError<Eleve[]>('searchEleves', []))
      );

    }

    // Retourne tous les pokémons
    getEleves(): Observable<Eleve[]> {
      return this.http.get<Eleve[]>(this.elevesUrl).pipe(
        tap(_ => this.log(`fetched eleves`)),
        catchError(this.handleError(`getEleves`, []))
      );
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getEleve(id: number): Observable<Eleve> {
      const url = `${this.elevesUrl}/${id}`;

      return this.http.get<Eleve>(url).pipe(
        tap(_ => this.log(`fetched eleve id=${id}`)),
        catchError(this.handleError<Eleve>(`getEleve id=${id}`))
      );
      }
    }
