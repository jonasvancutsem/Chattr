interface FriendJson {
  
  name: string;
  email: string;
  age: number;
}

export class Friend {
  
  constructor(
    private _name: string,
    private _email: string,
    private _age: number,
    
  ) {}

  toJSON(): FriendJson {
    return <FriendJson>{
      name: this.name,
      email: this.email,
      age: this.age
    };
  }

  static fromJSON(json: FriendJson): Friend {
    const rec = new Friend(json.name, json.email, json.age);
    return rec;
  }

  // [...] other getters
  get name(): string {
    return this._name;
  }
 
  get email(): string {
    return this._email;
  }

  get age(): number {
    return this._age;
  }



}