import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCalcComponent } from './form-calc/form-calc.component';
import { FormsModule } from '@angular/forms';
import { DarkModeSectionComponent } from './dark-mode-section/dark-mode-section.component';
import { NgClass } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FormCalcComponent,
    DarkModeSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgClass
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
