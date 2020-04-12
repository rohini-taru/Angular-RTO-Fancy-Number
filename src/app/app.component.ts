import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FancyNumberService } from './fancy-number.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  minRange: number = 18;
  maxRange: number = 22;
  singleDigit: number = 2;
  resultFlag: Boolean = false;
  resultArr = [];

constructor(private fns: FancyNumberService) {

}
  printFancyNumber(event) {
    //event.stopPropagation();
    this.resultArr = [];
    this.resultFlag = false;

    for(let i = this.minRange; i <= this.maxRange; i++ )
    {
      if(this.fns.compareConditions(i, this.singleDigit)) {
        this.resultArr.push(i);
      }
    }
    this.resultFlag = true;
  }
}
