package com.FrontEnd.calculator.service;

public class Percentage {
    private String result;
    Percentage(double first, double second){
        double result = (first * second)/100;
        this.result = Double.toString(result);
        result = result * 1;
    }

    public String getResult() {
        return result;
    }
}
