import { Injectable } from '@angular/core';
import { IUser } from 'src/app/modules/user/user.interface';

@Injectable()
export class HelperService {
  
  public firstName: string = '';
  
  public getUsers(): IUser[] {
    return [
      {
        firstName: 'Vasya',
        lastName: 'Nepupkin',
        age: 20
      },
      {
        firstName: 'Lesha',
        lastName: 'Pupkin',
        age: 30
      },
      {
        firstName: 'Dima',
        lastName: 'Oboltusov',
        age: 17
      }
    ]
  }
  
  constructor() { }
  
  public showFirstName(): string {
    return this.firstName;
  }
  public putSomethingToTheConsole (name) {
    console.log(name);
  }
}
