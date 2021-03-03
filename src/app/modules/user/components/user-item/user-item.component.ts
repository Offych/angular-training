import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  
  public name = 'Sasha';
  private addName = ' the best'; //can be used inside a class only

  constructor() { }

  ngOnInit(): void {
    this.name += this.addName;
   /*  setTimeout(() => {
      this.name = 'Pokemon'
    }, 3000); */
  }
}
