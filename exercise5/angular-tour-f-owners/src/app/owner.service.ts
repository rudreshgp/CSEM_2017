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
  private ownerUrl ="http://localhost:4000/owner/";
  
  constructor(private http:HttpClient, private messageService:MessageService) { }
  // getOwners():Observable<Owner[]>{
  //   return this.http.get<Owner[]>(this.ownerUrl,httpOptions)
  //   .pipe(
  //     tap(owners => this.log(`fetched owners`)),
  //     catchError(this.handleError('getOwners', []))
  //   );
  // }

  /** GET owners from the server */
  getOwners (): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.ownerUrl)
      .pipe(
        tap(owners => this.log(`fetched owners`)),
        catchError(this.handleError('getOwners', []))
      );
  }

  /** GET owner by id. Return `undefined` when id not found */
  getOwnerNo404<Data>(id: number): Observable<Owner> {
    const url = `${this.ownerUrl}/?id=${id}`;
    return this.http.get<Owner[]>(url)
      .pipe(
        map(owners => owners[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} owner id=${id}`);
        }),
        catchError(this.handleError<Owner>(`getOwner id=${id}`))
      );
  }

  /** GET owner by id. Will 404 if id not found */
  getOwner(id: number): Observable<Owner> {
    const url = `${this.ownerUrl}/${id}`;
    return this.http.get<Owner>(url).pipe(
      tap(_ => this.log(`fetched owner id=${id}`)),
      catchError(this.handleError<Owner>(`getOwner id=${id}`))
    );
  }

  // /* GET owners whose name contains search term */
  // searchOwner(term: string): Observable<Owner[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty owner array.
  //     return of([]);
  //   }
  //   return this.http.get<Owner[]>(`api/owners/?name=${term}`).pipe(
  //     tap(_ => this.log(`found owners matching "${term}"`)),
  //     catchError(this.handleError<Owner[]>('searchOwners', []))
  //   );
  // }

  //////// Save methods //////////

  /** POST: add a new owner to the server */
  addOwner (owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.ownerUrl, owner, httpOptions).pipe(
      tap((owner: Owner) => this.log(`added owner w/ id=${owner.id}`)),
      catchError(this.handleError<Owner>('addOwner'))
    );
  }

  // /** DELETE: delete the owner from the server */
  // deleteOwner (owner: Owner | number): Observable<Owner> {
  //   const id = typeof owner === 'number' ? owner : owner.id;
  //   const url = `${this.ownerUrl}/${id}`;

  //   return this.http.delete<Owner>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted owner id=${id}`)),
  //     catchError(this.handleError<Owner>('deleteOwner'))
  //   );
  // }

  /** PUT: update the owner on the server */
  updateOwner (owner: Owner): Observable<any> {
    return this.http.put(this.ownerUrl, owner, httpOptions).pipe(
      tap(_ => this.log(`updated owner id=${owner.id}`)),
      catchError(this.handleError<any>('updateOwner'))
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

  /** Log a OwnerService message with the MessageService */
  private log(message: string) {
    this.messageService.add('OwnerService: ' + message);
  }
}
