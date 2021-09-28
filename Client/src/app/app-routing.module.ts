import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { AddFriendComponent } from './friends/add-friend/add-friend.component';
 import { AuthGuard } from './user/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  {
    path: 'friends',
    canActivate: [ AuthGuard ],
     loadChildren: () => import('./friends/friends.module').then(mod => mod.FriendsModule),
    data: { preload: true },
  },
  
  { path: 'friend/list', component: FriendsListComponent },
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(appRoutes,
      {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule]
   

})
export class AppRoutingModule { }
