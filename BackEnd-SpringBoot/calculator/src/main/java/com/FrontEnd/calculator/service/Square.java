package com.FrontEnd.calculator.service;

public class Square {
    private String result;
    Square(double first){
        double result = first * first;
        result = result * 1;
        this.result = Double.toString(result);
    }

    public String getResult() {
        return result;
    }
}
