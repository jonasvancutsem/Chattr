import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';

import {FriendComponent} from './friend/friend.component'
import {AddFriendComponent} from './add-friend/add-friend.component'
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FriendFilterPipe } from './friend-filter.pipe'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'list', component: FriendsListComponent },
  { path: 'add', component: AddFriendComponent }
  
];

@NgModule({
  declarations: [
    FriendComponent,
    FriendsListComponent,
    AddFriendComponent, 
    FriendFilterPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)],
  exports: [FriendsListComponent]
})
export class FriendsModule { }
