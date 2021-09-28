

interface ChatJson {
  
    text: string;
    date: Date;
    sender: string;
  }
  
  export class Message {
    
    constructor(
      private _text: string,
     private _date: Date,
      private _sender: string,
    ) {}
  
    toJSON(): ChatJson {
      return <ChatJson>{
        text: this._text, 
        date: this._date,
        sender: this._sender,
      };
    }
  
    static fromJSON(json: ChatJson): Message {
      const mes = new Message(json.text,json.date, json.sender);
      return mes;
    }
  
    // [...] other getters
    get text(): string {
      return this._text;
    }

    get date(): Date {
      return this._date;
    }
   
    get sender(): string {
      
      return this._sender;
    }
  
  
  
  }

