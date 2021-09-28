import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';

import {MessageComponent} from './message/message.component'
import {SendChatComponent} from './send-chat/send-chat.component'
import { ChatboxComponent } from './chatbox/chatbox.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatFilterPipe } from './chat-filter.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const routes = [
  
  { path: 'chat', component: ChatboxComponent }
  
];

@NgModule({
  declarations: [
    MessageComponent,
    ChatboxComponent,
    SendChatComponent,
    ChatFilterPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)],
  exports: [ChatboxComponent]
})
export class ChatModule { }
