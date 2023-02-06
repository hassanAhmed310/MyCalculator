package com.FrontEnd.calculator.model;

public class Key {
    String symbol;
    String color;
    public Key(String symbol, String color){
        this.symbol = symbol;
        this.color = color;
    }
    public String getSymbol() {
        return symbol;
    }
    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }
    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }
}
