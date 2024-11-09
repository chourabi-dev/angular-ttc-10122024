package com.ttc.ttcgroup3.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ttc.ttcgroup3.dto.CategoryModel;
import com.ttc.ttcgroup3.dto.CustomReponse;
import com.ttc.ttcgroup3.dto.ProductDto;
import com.ttc.ttcgroup3.entities.Category;
import com.ttc.ttcgroup3.entities.Product;
import com.ttc.ttcgroup3.repositories.CategoryRepository;
import com.ttc.ttcgroup3.repositories.ProductRepository;

@RestController
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	private CategoryRepository categoryRepo;  // select insert delete update
	
	
	@Autowired
	private ProductRepository productRepo;  // select insert delete update
	
	
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getALLDATA( ){
		
		List<Product> tmp = this.productRepo.findAll();
		 
		return ResponseEntity.ok( tmp );
	}
	
	
	
	
	@PostMapping("/add")
	public ResponseEntity<?> createProduct( @RequestBody ProductDto model ){
	 
		Product p = new Product();
		
		p.setLabel(model.getLabel());
		p.setPrice(model.getPrice());
		p.setQuantity(model.getQuantity());
		
		// search for category ;
		Category category = this.categoryRepo.findById(model.getCategory()).get();
		
		p.setCategory(category);
		
		
		this.productRepo.save(p);
		
		return ResponseEntity.ok( new CustomReponse(true,"Inserted successfully") );
	}
	
	
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateProduct(@PathVariable long id, @RequestBody ProductDto model ){
	 
		Product p =  this.productRepo.findById(id).get();
		
		p.setLabel(model.getLabel());
		p.setPrice(model.getPrice());
		p.setQuantity(model.getQuantity());
		
		// search for category ;
		Category category = this.categoryRepo.findById(model.getCategory()).get();
		
		p.setCategory(category);
		
		
		this.productRepo.save(p);
		
		return ResponseEntity.ok( new CustomReponse(true,"Updated successfully") );
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable long id, @RequestBody ProductDto model ){
	 
		Product p =  this.productRepo.findById(id).get();
		
		
		this.productRepo.delete(p);
		
		return ResponseEntity.ok( new CustomReponse(true,"deleted successfully") );
	}
	
}
