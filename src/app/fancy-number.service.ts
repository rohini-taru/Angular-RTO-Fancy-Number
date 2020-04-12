import { Injectable } from '@angular/core';

@Injectable() 
export class FancyNumberService {
  contructor() { 
  }

  getDigits(num: number): Array<String> {
    let numDigits = num.toString().split('');
    return numDigits;
  }

  compareSum(num: number, singleDigit: number): Boolean {
    let numDigits = this.getDigits(num);
    let sum = 0;
    numDigits.forEach(x => {
      sum += +x;
    });
    //alert('sum = ' + sum);
    let sumFlag = (+singleDigit == +sum )? true : false;
    return sumFlag;
  }

  compareDigits(num: number, singleDigit: number): Boolean {
    let numDigits = this.getDigits(num);
    let presentFlag = false;
    numDigits.forEach(x => {
      +singleDigit == +x ? presentFlag = true : null;
    });
    ///alert('present = ' + presentFlag);
    return presentFlag;
  }

  compareConditions(num: number, singleDigit: number): Boolean {
    if(this.compareDigits(num, singleDigit) === true && this.compareSum(num, singleDigit) === true )
    {
      return true
    }
    return false;
  }





}