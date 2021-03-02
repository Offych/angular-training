import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTestComponentComponent } from './first-test-component/first-test-component.component';
import { SecondTestComponent } from './second-test/second-test.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTestComponentComponent,
    SecondTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
