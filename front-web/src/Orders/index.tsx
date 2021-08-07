import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "../api";
import Footer from "../Footer";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import ProductList from "./ProductList";
import StepHeader from "./StepHeader";
import "./style.css";
import { OrderLocationData, Product } from "./types";

function Orders(){
    
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const [orderLocation, setOrderLocation] = useState<OrderLocationData>(); 

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []); 

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = selectedProducts.some(item => item.id === product.id);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

    return (
        <>
        <div className="orders-container">
            <StepHeader></StepHeader>
            <ProductList 
            products={products}
            onSelectProduct={handleSelectProduct}
            ></ProductList>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}></OrderLocation>
            <OrderSummary></OrderSummary>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Orders;