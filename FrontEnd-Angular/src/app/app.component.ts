import { Component } from '@angular/core';
import { keys } from './keys';
import { CalculatorService } from './calculator.service';
import {Observable,of, from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title: string = 'Calculator';
  buttons = keys;
  numbers : string = "0.123456789";
  binaryOperations: string = "\u00F7" + "\u00D7" + "-" + "+";
  unaryOperations:string = "1/x" + "x\u00B2" + "\u221Ax";
  previous: string="";
  current: string="0";
  isReadyToNewInput: boolean=true;
  isReadyToNewOperation: boolean=true;
  previousValue:number=0;
  currentValue:number=0;
  hasCurrentOperation:boolean=false;
  currentOperation:string="";
  output!:string;
  isEqualPressed:boolean=false;
  message:string="";
  tempMessage:string="";
  hasUnary:boolean=false;
  currentUnary:string="";
  isPercentage:boolean=false;
  constructor(private httpService:CalculatorService) { }
  ngOnInit(){}
  updateResult(output: string){
    if(!(output.includes("Error"))){
      if((this.previous.length + this.current.length) > 20){
        this.previous = output;
      }else if(this.isPercentage){
        this.current = output;
        this.currentValue = parseFloat(this.current);
        this.tempMessage = this.currentOperation;
        this.clicked("=");
        this.isPercentage = false;
      }else if(!this.hasUnary){
        this.previous = this.previous + this.current;
      }else if(this.hasUnary && !this.hasCurrentOperation){
        if(this.currentUnary.includes("1/")){
          this.previous = this.previous + this.currentUnary.replace("1/x","^-1");
        }else{
          this.previous = this.previous + this.currentUnary.replace("x","");
        }
        this.hasUnary = false;
      }else if(this.hasUnary && this.hasCurrentOperation){
        this.current = output;
        this.currentValue = parseFloat(this.current);
        this.tempMessage = this.currentOperation;
        this.clicked("=");
      }
      this.current = output;
      this.currentValue = parseFloat(this.current);
      this.previousValue = this.currentValue;
      this.isReadyToNewInput = true;
      this.hasCurrentOperation = false;
      this.isReadyToNewOperation = true;
      this.isEqualPressed = true;
    }else{
      alert(output);
      this.clear();
    }
  }
  clicked(messege: string){
    this.message = messege;
    if(this.numbers.includes(messege)){
      this.append(messege);
    }else if(messege == "Del"){
      this.deleteLastDigit();
    }else if(messege == "\u00B1"){
      this.addNegativeSign();
    }else if(messege == "C" || messege == "CE"){
      this.clear();
    }else if(this.binaryOperations.includes(messege)){
      this.message = messege;
      if(messege.includes("\u00F7")){
        this.tempMessage = "div";
      }else if(messege.includes("\u00D7")){
        this.tempMessage = "mul"
      }else{
        this.tempMessage = messege;
      }
      console.log("mes: "+this.tempMessage);
      this.binaryOperation(this.tempMessage);
    }else if(messege.includes("=") && !(this.isEqualPressed)){
      this.currentValue = parseFloat(this.current);
      this.equal(this.previousValue, this.currentValue, this.tempMessage);
    }else if(this.unaryOperations.includes(messege)){
      this.hasUnary = true;
      this.currentUnary = messege;
      this.message = messege;
      console.log("messss" + messege);
      if(this.message == "1/x"){
        console.log("messss" + this.message);
        this.tempMessage = "inverse";
      }else if(this.message == "x\u00B2"){
        this.tempMessage = "sq";
      }else{
        this.tempMessage = "rt";
      }
      if(!this.hasCurrentOperation){
        this.currentValue = parseFloat(this.current);
        this.equal(this.currentValue,0,this.tempMessage);
        this.previous = this.current;
        this.previousValue = this.currentValue;
      }else{
        
        this.currentValue = parseFloat(this.current);
        this.equal(this.currentValue,0,this.tempMessage);
      }
    }else if(messege == "%"){
      if(!this.hasCurrentOperation){
        this.current = this.previous = "0";
        this.currentValue = this.previousValue = 0;
      }else{
        this.isPercentage = true;
        this.currentValue = parseFloat(this.current);
        this.equal(this.currentValue,this.previousValue,"percent");
      }
    } 
  }
  append(digit:string){
    this.isEqualPressed = false;
    if(this.current.length >= 20 && !this.isReadyToNewInput){
      alert("Too long input");
      return;
    }
    if((digit=="." && this.current.includes(".")) || (this.current == "0" && digit=="0")){
      return;
    }else if(this.isReadyToNewInput){
      this.current = digit;
      this.isReadyToNewInput = false;
    }else{
      this.current = this.current + digit;
    }
    if(!this.hasCurrentOperation){
      this.previous = "";
      this.previousValue = 0;
    }
  }
  deleteLastDigit(){
    this.isEqualPressed = false;
    if(this.current == "0" || this.current.length == 1 || (this.current.length==2 && this.current.charAt(0)=="-")){
      this.isReadyToNewInput = true;
      this.current = "0";
      return;
    }else{
      this.current = this.current.substring(0,this.current.length - 1);
    }
  }
  addNegativeSign(){
    this.isEqualPressed = false;
    if(this.current.charAt(0) == "-"){
      this.current = this.current.substring(1,this.current.length);
    }else if(!(this.current=="0")){
      this.current = "-" + this.current;
    }
  }
  clear(){
    this.previous="";
    this.current="0";
    this.isReadyToNewInput=true;
    this.previousValue=0;
    this.currentValue=0;
    this.hasCurrentOperation=false;
    this.currentOperation = "";
    this.isReadyToNewOperation = true;
    this.isEqualPressed = false;
    this.hasUnary = false;
  }
  binaryOperation(message:string){
    this.isEqualPressed = false;
    if(!this.hasCurrentOperation){
      this.currentOperation =this.message;
      this.hasCurrentOperation = true;
      this.previousValue = parseFloat(this.current);
      this.previous = this.previousValue.toString() + this.message;
    }else{
      alert("Press = first to make new operation");
    }
    this.current = "0";
    this.currentValue = 0;
    this.isReadyToNewInput = true;
  }
  equal(first:number, second:number, operation: string){
    this.httpService.calculate(first,second,operation).subscribe(
      (response) => {
        console.log("try to get");
        this.output = response.toString();
        console.log("get: " + this.output);
        this.updateResult(this.output);
      },
      (error) => {
        this.output = "Mathematical Error: don't divide by 0 nor sqrt(negative)";
        console.log(error + "Error");
        this.updateResult(this.output);
      }
    )
  }
}
