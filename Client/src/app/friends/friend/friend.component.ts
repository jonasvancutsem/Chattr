import { Component, Input, OnInit } from '@angular/core';
import { Friend } from '../friends.model';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  @Input() public friend: Friend;


  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
