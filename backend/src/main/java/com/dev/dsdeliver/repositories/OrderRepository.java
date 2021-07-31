package com.dev.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;import com.dev.dsdeliver.model.Order;

@Repository
public interface OrderRepository  extends JpaRepository<Order, Long>{

}
