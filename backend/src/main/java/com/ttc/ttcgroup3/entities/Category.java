package com.ttc.ttcgroup3.entities;

import jakarta.persistence.*;

@Entity
@Table( name="categories" )  
public class Category {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	
	@Column( name="category_label", nullable=false )
	private String label;


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getLabel() {
		return label;
	}


	public void setLabel(String label) {
		this.label = label;
	}


	public Category(long id, String label) {
		super();
		this.id = id;
		this.label = label;
	}


	public Category() {
		super();
	}
	
	
	
	
}
