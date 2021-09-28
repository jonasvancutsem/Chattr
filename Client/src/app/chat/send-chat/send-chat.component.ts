import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder  } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ChattrDataService } from 'src/app/chattr-data.service';
import { Message } from '../chat.model';


@Component({
  selector: 'app-send-chat',
  templateUrl: './send-chat.component.html',
  styleUrls: ['./send-chat.component.css']
})


export class SendChatComponent implements OnInit {
  @Output() public newMessage = new EventEmitter<Message>();
  public message: FormGroup
  public errorMessage: string = '';
  public confirmationMessage: string = '';

  constructor(private fb: FormBuilder, private _chattrDataService: ChattrDataService) { }
  

  ngOnInit(){
    this.message = this.fb.group({
      text: ['', Validators.minLength(1)],
      date: ['',],
      sender: ['',],
    })
  }

  // addMessage(messageText: HTMLInputElement,messageDate: HTMLInputElement): boolean {
  //   const message = new Message(messageText.value,messageDate.valueAsDate);
  //   this.newMessage.emit(message);
  //   return false;
  // }


  
  onSubmit() {
    // this.newMessage.emit(new Message(this.message.value.text,this.message.value.date));
    this._chattrDataService
    .addNewMessage(new Message(this.message.value.text, this.message.value.date, this.message.value.sender))
    .pipe(
      catchError((err)=>{
        this.errorMessage = err;
        return EMPTY;
      })
    )
    .subscribe((mes: Message)=>{
      this.confirmationMessage = 'het bericht is succesvol verstuurd';
    });
    this.message = this.fb.group({
      text : ['', Validators.minLength(1)],
      date: ['',],
      sender: ['', Validators.minLength(1)],
    });
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
