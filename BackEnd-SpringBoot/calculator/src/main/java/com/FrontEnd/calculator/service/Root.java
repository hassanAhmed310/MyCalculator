package com.FrontEnd.calculator.service;

public class Root {
    private String result;
    Root(double first){
        if(first < 0){
            this.result = "Error square root of negative";
        }else{
            double result = Math.sqrt(first);
            result = result * 1;
            this.result = Double.toString(result);
        }
    }

    public String getResult() {
        return result;
    }
}
