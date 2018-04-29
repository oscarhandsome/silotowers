import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent, LevelTopDirective} from './app.component';
import {TowerComponent} from "./tower/tower.component";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    TowerComponent,
      LevelTopDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
