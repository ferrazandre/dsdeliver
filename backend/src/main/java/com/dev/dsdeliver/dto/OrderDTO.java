package com.dev.dsdeliver.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.dev.dsdeliver.model.Order;
import com.dev.dsdeliver.model.OrderStatus;

public class OrderDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String address;
	private Double longitude;
	private Double latitude;
	private Instant moment;
	private OrderStatus status;
	private List<ProductDTO> list = new ArrayList<ProductDTO>();

	public OrderDTO() {

	}

	public OrderDTO(Long id, String address, Double longitude, Double latitude, Instant moment, OrderStatus status) {
		this.id = id;
		this.address = address;
		this.longitude = longitude;
		this.latitude = latitude;
		this.moment = moment;
		this.status = status;
	}

	public OrderDTO(Order order) {
		id = order.getId();
		address = order.getAddress();
		longitude = order.getLongitude();
		latitude = order.getLatitude();
		moment = order.getMoment();
		status = order.getStatus();
		list = order.getProducts().stream()
				.map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Instant getMoment() {
		return moment;
	}

	public void setMoment(Instant moment) {
		this.moment = moment;
	}

	public OrderStatus getStatus() {
		return status;
	}

	public void setStatus(OrderStatus status) {
		this.status = status;
	}

	public List<ProductDTO> getList() {
		return list;
	}
}
