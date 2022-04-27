import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Calculator';
  firstNumber!: number;
  secondNumber!: number;
  result!: number;
 
  getNumber(value: any, which: number) {
    console.log(typeof value);
    const parseNumber = parseInt(value);
    console.log(parseNumber);
    if (!isNaN(parseNumber)) {
      which === 0
        ? (this.firstNumber = parseNumber)
        : (this.secondNumber = parseNumber);
    }
  }
 
  add() {
    this.result = this.firstNumber + this.secondNumber;
  }
  subtract() {
    this.result = this.firstNumber - this.secondNumber;
  }
  multiply() {
    this.result = this.firstNumber * this.secondNumber;
  }
  divide() {
    this.result = this.firstNumber / this.secondNumber;
  }
}