import { Injectable, OnInit  } from '@angular/core';
import { HttpClient, HttpErrorResponse,  HttpParams, } from '@angular/common/http';
import { map, catchError, tap, shareReplay, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Message } from './chat/chat.model';
import { Friend } from './friends/friends.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChattrDataService {
  private _reloadFriends$ = new BehaviorSubject<boolean>(true);
  private _reloadMessages$ = new BehaviorSubject<boolean>(false);
  

  constructor(private http: HttpClient) { }


  get friends$(): Observable<Friend[]> {
    return this.http.get(`${environment.apiUrl}/Friend/`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Friend[] => list.map(Friend.fromJSON))
    );
  }

  get messages$(): Observable<Message[]> {
    return this.http
    .get(`${environment.apiUrl}/Message/`)
    .pipe(
      catchError(this.handleError),
      map((list: any[]): Message[] => list.map(Message.fromJSON))
    );
    
  }

   getFriends$(name?: string, email?: string, age?: number) {
    return this._reloadFriends$.pipe(
      switchMap(() => this.fetchFriends$(name, email, age))
    );
  }

  getmessages$(text?: string, date?: Date, sender?: string) {
    return this._reloadMessages$.pipe(
      switchMap(() => this.fetchMessages$(text, date, sender))
    );
  }

  getMessage$(id: string): Observable<Message> {
    return this.http
      .get(`${environment.apiUrl}/Message/${id}`)
      .pipe(catchError(this.handleError), map(Message.fromJSON)); // returns just one message, as json
  }


  fetchFriends$(name?: string, email?: string, age?: number) {
    let params = new HttpParams();
    params = name ? params.append('name', name) : params;
    params = email ? params.append('email', email) : params;
    params = age ? params.append('20', age.toString()) : params; //string != number
    return this.http.get(`${environment.apiUrl}/Friend/`, { params }).pipe(
      catchError(this.handleError),
      map((list: any[]): Friend[] => list.map(Friend.fromJSON))
    );
  }

  fetchMessages$(text?: string, date?: Date, sender?: string) {
    let params = new HttpParams();
    params = text ? params.append('text', text) : params;
    params = date ? params.append('date', date.toString()) : params; //string != date
    params = sender ? params.append('sender', sender) : params;
    return this.http.get(`${environment.apiUrl}/Message/`, { params }).pipe(
      catchError(this.handleError),
      map((list: any[]): Message[] => list.map(Message.fromJSON))
    );
  }

  
   addNewFriend(friend: Friend) {
     return this.http
     .post(`${environment.apiUrl}/Friend/`, friend.toJSON())
     .pipe(catchError(this.handleError), map(Friend.fromJSON))
     .pipe(
      catchError((err)=> {
        return throwError(err)
      }),
      tap((rec: Friend)=>{
        this._reloadFriends$.next(true);
      })

     );
    //  .subscribe((rec: Friend) => {
    //    this._friends = [...this._friends, rec];
    //  });
   }

   addNewMessage(message: Message) {
    return this.http
    .post(`${environment.apiUrl}/Message/`, message.toJSON())
    .pipe(catchError(this.handleError), map(Message.fromJSON))
    .pipe(
      catchError((err)=> {
        return throwError(err)
      }),
      tap((mes: Message)=>{
        this._reloadMessages$.next(true);
      })

     );
    // .subscribe((mes: Message) => {
    //   this._messages = [...this._messages, mes];
    // });
  }

  // addNewFriend(friend: Friend) {
  //   this._friends.push(friend);
    
  // }
  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = `an unknown error occurred ${err}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}

