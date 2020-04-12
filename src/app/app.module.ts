import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FancyNumberService } from './fancy-number.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatFormFieldModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ FancyNumberService ]
})
export class AppModule { }
