import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from './friends.model';

@Pipe({
  name: 'friendFilter',
  pure: false
})
export class FriendFilterPipe implements PipeTransform {

  transform(friends: Friend[], name: string): Friend[] {
    if (!name || name.length === 0) {
      return friends;
    }
    return friends.filter(rec =>
      rec.name.toLowerCase().startsWith(name.toLowerCase())
    );
  }

}
