package com.dev.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dev.dsdeliver.dto.OrderDTO;
import com.dev.dsdeliver.dto.ProductDTO;
import com.dev.dsdeliver.model.Order;
import com.dev.dsdeliver.model.OrderStatus;
import com.dev.dsdeliver.model.Product;
import com.dev.dsdeliver.repositories.OrderRepository;
import com.dev.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = orderRepository.findAll();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public List<OrderDTO> findAllOrdenado() {
		List<Order> list = orderRepository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}

	@SuppressWarnings("deprecation")
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLongitude(), dto.getLatitude(), Instant.now(),
				OrderStatus.PENDING);
		for (ProductDTO p : dto.getList()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		order = orderRepository.save(order);
		return new OrderDTO(order);
	}
}
