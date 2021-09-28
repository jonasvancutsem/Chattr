import { Pipe, PipeTransform } from '@angular/core';
import { Message } from './chat.model';

@Pipe({
  name: 'messageFilter',
  pure: false
})
export class ChatFilterPipe implements PipeTransform {

  transform(messages: Message[], text: string): Message[] {
    if (!text || text.length === 0) {
      return messages;
    }
    return messages.filter(rec =>
      rec.text.toLowerCase().startsWith(text.toLowerCase())
    );
  }

}