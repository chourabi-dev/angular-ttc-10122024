package com.ttc.ttcgroup3.dto;

public class CustomReponse {

	private boolean success;
	private String message;
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public CustomReponse() {
		super();
	}
	public CustomReponse(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}
	
	
	
}
