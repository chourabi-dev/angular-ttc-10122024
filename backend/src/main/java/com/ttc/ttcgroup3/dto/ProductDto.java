package com.ttc.ttcgroup3.dto;
 
public class ProductDto { 
	
	private String label;
	 
	private float price;
	 
	private int quantity;

	private long category;

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

	public long getCategory() {
		return category;
	}

	public void setCategory(long category) {
		this.category = category;
	}

	public ProductDto() {
		super();
	}
	
	
	
	
}
