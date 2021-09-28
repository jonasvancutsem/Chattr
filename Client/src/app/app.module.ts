import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';

import { FriendsModule } from './friends/friends.module';
import { MaterialModule } from './material/material.module';
import { ChatModule } from './chat/chat.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { AddFriendComponent } from './friends/add-friend/add-friend.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { httpInterceptorProviders } from './interceptors';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainNavComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FriendsModule,
    ChatModule,
    MaterialModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, UserModule,
    AppRoutingModule,
   
   
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }