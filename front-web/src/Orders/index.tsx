import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "../api";
import OrderLocation from "./OrderLocation";
import ProductList from "./ProductList";
import StepHeader from "./StepHeader";
import "./style.css";
import { Product } from "./types";

function Orders(){
    
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []); 

    return (
        <div className="order-container">
            <StepHeader></StepHeader>
            <ProductList products={products}></ProductList>
            <OrderLocation></OrderLocation>
        </div>
    )
}

export default Orders;