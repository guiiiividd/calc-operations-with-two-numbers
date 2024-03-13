import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  num1: number = 1;
  num2: number = 1;
  operation: string = "";
  result: number = 0;
  response: string = "";

  dataLocalStorage: string | null = null;
  classe: string = "";

  onClickSum(){
    this.result = this.num1 + this.num2;
    this.operation = `(${this.num1} + ${this.num2})`;
    this.generateResponse("soma");
  }

  onClickSubtraction(){
    this.result = this.num1 - this.num2;
    this.operation =  `(${this.num1} - ${this.num2})`;
    this.generateResponse("subtração");
  }

  onClickMultiplication(){
    this.result = this.num1 * this.num2;
    this.operation =  `(${this.num1} * ${this.num2})`;
    this.generateResponse("multiplicação");
  }

  onClickDivision(){
    this.result = this.num1 / this.num2;
    this.operation =  `(${this.num1} / ${this.num2})`;
    this.generateResponse("divisão");
  }

  onClickPercentage(){
    this.result = (this.num2 / 100) * this.num2;
    this.operation =  `(${this.num1} % ${this.num2})`;
    this.generateResponse("porcentagem");
  }

  onClickSquareRoot(){
    this.result = Math.pow(this.num1, this.num2);
    this.operation =  `(${this.num1} ^ ${this.num2})`;
    this.generateResponse("potência");
  }

  generateResponse(option: string){
    this.response = `O resultado da ${option} entre ${this.num1} e ${this.num2} ${this.operation} é: ${this.result}`;
  }

  timerDarkMode = setInterval(() => this.getDarkModeData(), 1000);

  getDarkModeData(){
    this.dataLocalStorage = localStorage.getItem('darkIsActivated');
    console.log(this.dataLocalStorage)
    if(this.dataLocalStorage == "true"){
      this.classe = 'dark';
    } else {
      this.classe = "";
    }
  }
}
