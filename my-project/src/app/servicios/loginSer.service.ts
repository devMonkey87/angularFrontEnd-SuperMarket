import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';




const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'text/plain'})

};

@Injectable({ providedIn: 'root' })

export class LoginSer {



  private heroesUrl = 'http://localhost:4200/api/api/jwt';  // URL to web api
  private baseApiUrl = 'http://127.0.0.1:8080/clientes';  // URL to web api
  constructor(

    private http: HttpClient) {}



    getToken (username: String, password: String) {
      const body = {username: username, password: password};
      this.http.post<Object>(this.heroesUrl, body, httpOptions)
       .subscribe(
         data => {
           console.log(data);

          }
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
