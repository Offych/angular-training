import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HelperService } from 'src/app/modules/services/helper.service';
import { IUser } from '../../user.interface';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  providers: [HelperService]
})
export class UserItemComponent implements OnInit {
  @Input() userData: IUser;
  @Output() buttonClick = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit(): void {
    console.log(this.userData)
  }
  
  public onButtonClick(): void {
    console.log('Button clicked!');
    const middleName = this.userData.firstName + ' ' + this.userData.lastName;
    this.buttonClick.emit(middleName);
  }
}
