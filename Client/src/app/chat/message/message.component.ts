import { Component, Input, OnInit } from '@angular/core';
import { ChattrDataService } from 'src/app/chattr-data.service';
import { Message } from '../chat.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() public message: Message;


  constructor(private _chattrDataService: ChattrDataService) { }

  ngOnInit() {
  }

}
