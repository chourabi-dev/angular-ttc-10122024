package com.ttc.ttcgroup3.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ttc.ttcgroup3.entities.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {
	
}
