package com.FrontEnd.calculator.model;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/keys")
public class Keys {
    Key keys[] = {
            new Key("%", "rgb(233, 233, 233)"),
            new Key("CE", "rgb(233, 233, 233)"),
            new Key("C", "rgb(233, 233, 233)"),
            new Key("Del", "rgb(233, 233, 233)"),
            new Key("1/x", "rgb(233, 233, 233)"),
            new Key("x\u00B2", "rgb(233, 233, 233)"),
            new Key("\u221Ax", "rgb(233, 233, 233)"),
            new Key("\u00F7", "rgb(233, 233, 233)"),
            new Key("7", "white"),
            new Key("8", "white"),
            new Key("9", "white"),
            new Key("\u00D7", "rgb(233, 233, 233)"),
            new Key("4", "white"),
            new Key("5", "white"),
            new Key("6", "white"),
            new Key("-", "rgb(233, 233, 233)"),
            new Key("1", "white"),
            new Key("2", "white"),
            new Key("3", "white"),
            new Key("+", "rgb(233, 233, 233)"),
            new Key("\u00B1", "white"),
            new Key("0", "white"),
            new Key(".", "white"),
            new Key("=", "lightblue")
    };
    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/findKeys")
    public Key[] getKeys() {
        return keys;
    }
}
