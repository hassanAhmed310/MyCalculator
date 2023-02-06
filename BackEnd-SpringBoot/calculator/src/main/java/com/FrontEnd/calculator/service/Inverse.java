package com.FrontEnd.calculator.service;

public class Inverse {
    private String result;
    Inverse(double first){
        if(first == 0){
            this.result = "Error: division by zero";
        }else{
            double result = 1/first;
            result = result * 1;
            this.result = Double.toString(result);
        }
    }

    public String getResult() {
        return result;
    }
}
