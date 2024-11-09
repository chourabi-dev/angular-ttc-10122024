package com.ttc.ttcgroup3.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ttc.ttcgroup3.entities.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {

}
