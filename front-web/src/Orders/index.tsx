import { useState } from "react";
import { useEffect } from "react";
import { toast } from 'react-toastify';

import { fetchProducts, saveOrder } from "../api";
import Footer from "../Footer";
import { checkIsSelected } from "./Helpers";
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
    const totalPrice = selectedProducts.reduce((sum, item) => {
      return sum + item.price;
    }, 0);
    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []); 

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      
      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }

        saveOrder(payload).then((response) => {
          toast.error(`Pedido enviado com sucesso! N° ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }

    return (
        <>
        <div className="orders-container">
            <StepHeader></StepHeader>
            <ProductList 
            products={products}
            onSelectProduct={handleSelectProduct}
            selectedProducts={selectedProducts}
            ></ProductList>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}></OrderLocation>
            <OrderSummary onSubmit={handleSubmit} amount={selectedProducts.length} totalPrice={totalPrice}></OrderSummary>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Orders;