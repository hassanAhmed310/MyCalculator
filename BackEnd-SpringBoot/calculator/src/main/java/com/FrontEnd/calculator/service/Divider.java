package com.FrontEnd.calculator.service;

public class Divider {
    private String result;
    Divider(double first, double second){
        if(second == 0){
            this.result = "Error: division by zero";
        }else{
            double result = first / second;
            result = result * 1;
            this.result = Double.toString(result);
        }
    }
    public String getResult() {
        return result;
    }
}
