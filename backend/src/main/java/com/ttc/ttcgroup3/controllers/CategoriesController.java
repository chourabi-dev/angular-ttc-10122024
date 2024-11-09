package com.ttc.ttcgroup3.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ttc.ttcgroup3.dto.CategoryModel;
import com.ttc.ttcgroup3.dto.CustomReponse;
import com.ttc.ttcgroup3.entities.Category;
import com.ttc.ttcgroup3.repositories.CategoryRepository;

@RestController
@RequestMapping("/api/categories")
public class CategoriesController {

	
	// INJECT CATEGORY REPO
	@Autowired
	private CategoryRepository repo;  // select insert delete update
	
	
	@PostMapping("/add")
	public ResponseEntity<?> createCategory( @RequestBody CategoryModel model ){
		// create Entity
		Category c = new Category();
		c.setLabel( model.getLabel() );
		
		// save it !!
		this.repo.save(c); // INSERET INTO ...
		
		// success !!
		return ResponseEntity.ok( new CustomReponse(true,"Inserted successfully") );
	}
	
	
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateCategory( @PathVariable long id,  @RequestBody CategoryModel model ){
		// search for it
		Category c =  this.repo.findById(id).get();
		
		
		c.setLabel( model.getLabel() );
		
		// save it !!
		this.repo.save(c); // INSERET INTO ...
		
		// success !!
		return ResponseEntity.ok( new CustomReponse(true,"Inserted successfully") );
	}
	
	
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getALLDATA( ){
		
		List<Category> tmp = this.repo.findAll();
		 
		return ResponseEntity.ok( tmp );
	}
	
	
	
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteCategory( @PathVariable long id ){
		// search for it
		Category c =  this.repo.findById(id).get();
		
		 
		// delete it !!
		this.repo.delete(c); // delete from table ...
		
		// success !!
		return ResponseEntity.ok( new CustomReponse(true,"deleted successfully") );
	}
	
	
}
