package com.FrontEnd.calculator.service;

public class Adder {
    private String result;
    Adder(double first, double second){
        double result = first + second;
        result = result * 1;
        this.result = Double.toString(result);
    }

    public String getResult() {
        return result;
    }
}
