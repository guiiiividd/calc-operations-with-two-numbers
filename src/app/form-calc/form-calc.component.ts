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

  onClickSum(){
    this.result = this.num1 + this.num2;
    this.operation = `(${this.num1} + ${this.num2})`;
    this.generateResponse("soma", this.operation, this.result);
  }

  onClickSubtraction(){
    this.result = this.num1 - this.num2;
    this.operation =  `(${this.num1} - ${this.num2})`;
    this.generateResponse("subtração", this.operation, this.result);
  }

  onClickMultiplication(){
    this.result = this.num1 * this.num2;
    this.operation =  `(${this.num1} * ${this.num2})`;
    this.generateResponse("multiplicação", this.operation, this.result);
  }

  onClickDivision(){
    this.result = this.num1 / this.num2;
    this.operation =  `(${this.num1} / ${this.num2})`;
    this.generateResponse("divisão", this.operation, this.result);
  }

  onClickPercentage(){
    this.result = (this.num2 / 100) * this.num2;
    this.operation =  `(${this.num1} % ${this.num2})`;
    this.generateResponse("porcentagem", this.operation, this.result);
  }

  onClickSquareRoot(){
    this.result = Math.pow(this.num1, this.num2);
    this.operation =  `(${this.num1} ^ ${this.num2})`;
    this.generateResponse("potência", this.operation, this.result);
  }

  generateResponse(option: string, operation: string, resultOperation: number){
    this.response = `O resultado da ${option} entre ${this.num1} e ${this.num2} ${operation} é: ${resultOperation}`;
  }
}
