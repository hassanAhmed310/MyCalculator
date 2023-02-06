package com.FrontEnd.calculator.service;

import org.springframework.stereotype.Service;

@Service
public class CalculatorService {
    public String evaluate(double first, double second, String operation){
        if(operation.contains("+")){
            Adder adder = new Adder(first,second);
            return adder.getResult();
        }else if(operation.contains("-")){
            Subtractor subtractor = new Subtractor(first,second);
            return subtractor.getResult();
        }
        else if(operation.contains("mul")){
            Multiplier multiplier = new Multiplier(first,second);
            return multiplier.getResult();
        }else if(operation.contains("div")){
            System.out.println("#" + first + "#" + second);
            Divider divider = new Divider(first,second);
            return divider.getResult();
        }else if(operation.contains("rt")){
            Root root = new Root(first);
            return root.getResult();
        }else if(operation.contains("sq")){
            Square square = new Square(first);
            return square.getResult();
        }else if(operation.contains("inverse")){
            Inverse inverse = new Inverse(first);
            return inverse.getResult();
        }else if(operation.contains("percent")) {
            Percentage percentage = new Percentage(first, second);
            return percentage.getResult();
        }
        return "error";
    }
}
