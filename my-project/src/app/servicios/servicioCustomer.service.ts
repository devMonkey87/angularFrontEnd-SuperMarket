import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Customer } from '../Entidades/Customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({ providedIn: 'root' })

export class PrimerServiceService {



  private heroesUrl = 'http://127.0.0.1:4200/api/clientes/allJson';  // URL to web api
  private baseApiUrl = 'http://127.0.0.1:8080/clientes';  // URL to web api
  constructor(
    private http: HttpClient) {}

    getClients (): Observable<Customer[]> {
      return this.http.get<Customer[]>(this.heroesUrl)
        .pipe(
          catchError(this.handleError('getHeroes', []))
        );
    }

    getClienteId(id: string): Observable<Customer> {
      const url = `${this.baseApiUrl}/${id}`;
      console.log(url);
      return this.http.get<Customer>(url).pipe(
        catchError(this.handleError<Customer>(`getHero id=${id}`))
      );
    }


    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
