import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  declarations: [AddUserComponent, UserItemComponent, UsersListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddUserComponent,
  ]
})
export class UserModule { }
