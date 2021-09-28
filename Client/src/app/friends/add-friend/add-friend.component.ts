import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ChattrDataService } from 'src/app/chattr-data.service';
import { Friend } from '../friends.model';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  @Output() public newFriend = new EventEmitter<Friend>();
  public friend: FormGroup;

  constructor(private fb: FormBuilder, private _chattrDataService: ChattrDataService) { }

  ngOnInit(){
    this.friend = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(1)]],
      email: ['',[Validators.required, Validators.minLength(5)]],
      age: ['',[Validators.required, Validators.minLength(5)]]
    })
  }

  addFriend(friendName: HTMLInputElement, friendEmail: HTMLInputElement, friendAge: HTMLInputElement): boolean {
    const friend = new Friend(friendName.value, friendEmail.value ,friendAge.valueAsNumber);
    this.newFriend.emit(friend);
    return false;
  }
  onSubmit() {
    // this.newFriend.emit(new Friend(this.friend.value.name,this.friend.value.email,this.friend.value.age));
    this._chattrDataService.addNewFriend(new Friend(this.friend.value.name, this.friend.value.email,this.friend.value.age));
  }

  getErrorMessage(errors: any): string {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} 
        characters (got ${errors.minlength.actualLength})`;
    }
  }
}
