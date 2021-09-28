import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { Friend } from './friends.model';

const JsonFriends = [
  {
    name: 'Jonas Van Cutsem',
    email: 'jonas@jonas.be',
    age: 10
  },
  {
    name: 'Lowie Rollier',
    email: 'jonas@jonas.be',
    age: 20
 }
];
export const FRIENDS: Friend[] = JsonFriends.map(Friend.fromJSON);