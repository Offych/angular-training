import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondTestComponent } from './components/second-test/second-test.component';
import { FirstTestComponent } from './components/first-test/first-test.component';
import { AddUserComponent } from './modules/components/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondTestComponent,
    FirstTestComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
