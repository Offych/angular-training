import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  
  public firstName: string = '';
  
  constructor() { }
  
  public showFirstName(): string {
    return this.firstName;
  }
  public putSomethingToTheConsole (name) {
    console.log(name);
  }
}
