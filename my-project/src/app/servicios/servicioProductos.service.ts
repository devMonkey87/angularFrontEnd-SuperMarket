import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../Entidades/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({ providedIn: 'root' })

export class ProductService {



  private heroesUrl = 'http://localhost:4200/api/produs/all';  // URL to web api
  private baseApiUrl = 'http://localhost:4200/api/produs/search';  // URL to web api
  private baseApiUrl2 = 'http://localhost:4200/api/produs';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduct(referencia: string): Observable<Product> {
    const url = `${this.baseApiUrl2}/${referencia}`;
    console.log(url);
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>(`getHero id=${referencia}`))
    );
  }

  deleteProduct(producto: Product | string): Observable<Product> {
    const codigoProduct = typeof producto === 'string' ? producto : producto.referencia;
    const url = `${this.baseApiUrl}/${codigoProduct}`;
    return this.http.delete<Product>(url, httpOptions).pipe(
      catchError(this.handleError<Product>('deleteHero'))
    );
  }


  getProdsByName(nombre: string): Observable<Product[]> {
    const url = `${this.baseApiUrl}/${nombre}`;
    console.log(url);
    return this.http.get<Product[]>(url)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
