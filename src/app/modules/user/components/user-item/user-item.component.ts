import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  
  public name = 'Sasha';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.name = 'Pokemon'
    }, 3000);
  }
}
