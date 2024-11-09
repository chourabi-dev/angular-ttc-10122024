package com.ttc.ttcgroup3.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ttc.ttcgroup3.dto.CustomReponse;
import com.ttc.ttcgroup3.dto.ProductModel;

@RestController
@RequestMapping("/api")
public class HelloWorldController {

	// GET
	
	@GetMapping("/hello")
	public String helloWorld() {
		return "hello world";
	}
	
	
	// /calcul?x=5&y=18  retunr x + y
	
	
	@GetMapping("/calcul")
	public int somme( @RequestParam( required=true ) int x, @RequestParam int y) {
		return x+y;
	}
	 
	// RequestParam  PathVariable
	
	
	@GetMapping("/details/employee/{id}")
	public int employee( @PathVariable int id ) {
		return id;
	}
	
	
	// POST
	// RequestBody
	@PostMapping("/add-product")
	public void addProduct( @RequestBody ProductModel model ) {
		
		
		System.out.println(model.getName());
		System.out.println(model.getPrice());
		
	}
	
	
	// PUT  == POST 
	// DELETE  == GET
	
	// ResponseEntity
	
	
	
	@PostMapping("/add-product-2")
	public ResponseEntity<?> addProduct2( @RequestBody ProductModel model ) {
		
		
		System.out.println(model.getName());
		System.out.println(model.getPrice());
		
		// db insert
		CustomReponse rep = new CustomReponse();
		
		// ... 
		
		rep.setSuccess(false);
		rep.setMessage("product name already exist"); 
		return ResponseEntity.status(401).body( rep );       // TYPE WEB 200 404 400 500
		
	}
	
	
	
	
	
}
