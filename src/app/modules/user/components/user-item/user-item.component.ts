import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/modules/services/helper.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  
  public name = 'Sasha';
  //private addName = ' the best'; //can be used inside a class only */

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    const someFirstName = this.helperService.showFirstName();
    debugger;
    
    //this.helperService.putSomethingToTheConsole(this.name)
    //this.name += this.addName;
   /*  setTimeout(() => {
      this.name = 'Pokemon'
    }, 3000); */
  }
}
