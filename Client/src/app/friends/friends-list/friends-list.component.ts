import { Component, OnInit } from '@angular/core';
import { ChattrDataService } from 'src/app/chattr-data.service';
import { Friend } from '../friends.model';
import { FRIENDS } from '../mock-friends';
import { EMPTY, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime,
  map, filter, catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  private _fetchFriends$: Observable<Friend[]> 
  public errorMessage: string = '';
  private _friends: Friend[];
  public filterFriendName: string;
  public filterFriend$ = new Subject<string>();
  
  constructor(private _chattrDataService: ChattrDataService, private _router: Router,
    private _route: ActivatedRoute
   ) {
    this.filterFriend$
      .pipe(
      distinctUntilChanged(),
      debounceTime(250),
      map(val => val.toLowerCase()),
      filter(val => !val.startsWith('s'))
      )
    .subscribe(
      val => this.filterFriendName = val);
  }

  applyFilter(filter: string) {
    this.filterFriendName = filter;
  }

  get friends$() : Observable<Friend[]>{
    return this._fetchFriends$;
  }

   addNewFriend(friend) {
     this._chattrDataService.addNewFriend(friend);
   }

  ngOnInit(): void {
    this._fetchFriends$ = this._chattrDataService.friends$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }

}


