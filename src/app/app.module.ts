import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap'

import { AppComponent } from './app.component';
//import { LittleTourComponent } from './little-tour.component'
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    //LittleTourComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
