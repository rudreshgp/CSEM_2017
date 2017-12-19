import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Owner} from './owner';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class OwnerService {
  private ownerUrl ="http://localhost:4000/owner";
  
  constructor(private http:HttpClient, private messageService:MessageService) { }
  getOwners():Observable<Owner[]>{
    return this.http.get<Owner[]>(this.ownerUrl)
    .pipe(
      tap(heroes => this.log(`fetched owners`)),
      catchError(this.handleError('getOwners', []))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
