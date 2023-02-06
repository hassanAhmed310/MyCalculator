package com.FrontEnd.calculator.controller;

import com.FrontEnd.calculator.service.CalculatorService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/calculate")
public class Calculator {
    private final CalculatorService service;

    public Calculator(CalculatorService service) {
        this.service = service;
    }

    @GetMapping("/{first}/{second}/{operation}")
    public String calculate(@PathVariable("first") double first,
                            @PathVariable("second") double second,
                            @PathVariable("operation") String operation) {
        System.out.println("F: "+ first + " S: " + second + " O: " + operation);
        String output =  service.evaluate(first, second, operation);
        System.out.println("Out : " + output);
        return output;
    }
}