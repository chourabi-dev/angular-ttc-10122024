package com.ttc.ttcgroup3.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table( name="products" )  
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	
	@Column( name="product_label", nullable=false )
	private String label;
	
	@Column( name="product_price", nullable=false )
	private float price;
	
	@Column( name="product_quantity", nullable=false )
	private int quantity;
	
	
	// MANY TO ONE
	@ManyToOne
	private Category category;


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


	public float getPrice() {
		return price;
	}


	public void setPrice(float price) {
		this.price = price;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}


	public Product() {
		super();
	}


	public Product(long id, String label, float price, int quantity, Category category) {
		super();
		this.id = id;
		this.label = label;
		this.price = price;
		this.quantity = quantity;
		this.category = category;
	}
	
	
	
	
}
