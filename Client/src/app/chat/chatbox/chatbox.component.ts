import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { ChattrDataService } from 'src/app/chattr-data.service';
import { Message } from '../chat.model';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  private _fetchMessages$: Observable<Message[]> 
  public errorMessage: string = '';
  public filterMessageText: string;
  public filterMessage$ = new Subject<string>();

  constructor(private _chattrDataService: ChattrDataService, private _router: Router, private _route: ActivatedRoute) {
    this.filterMessage$
    .pipe(distinctUntilChanged(),debounceTime(250))
    .subscribe((val)=>{
      const params = val ? {queryParams: {filter: val } } : undefined;
      this._router.navigate(['/chat'], params);
    });

    this._fetchMessages$ = this._route.queryParams
    .pipe(
      switchMap((newParams) => {
        if (newParams['filter']){
          this.filterMessageText = newParams['filter'];
        }
        return this._chattrDataService.getmessages$(newParams['filter']);
      })
    )
    .pipe(
      catchError((err)=> {
        this.errorMessage = err;
        return EMPTY;
      })
    );
   }

   
  ngOnInit(): void { }


   applyFilter(filter: string) {
    this.filterMessageText = filter;
  }

  get messages$() : Observable<Message[]>{
    return this._fetchMessages$;
    // hier subscriben naar de dataservice
  }

  // addNewMessage(message) {
  //   this._chattrDataService.addNewMessage(message);
  // }

  

}
