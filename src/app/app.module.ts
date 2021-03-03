import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondTestComponent } from './components/second-test/second-test.component';
import { FirstTestComponent } from './components/first-test/first-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondTestComponent,
    FirstTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
