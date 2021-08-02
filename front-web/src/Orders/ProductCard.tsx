import { Product } from './types';

type Props = {
    product: Product;
}
 function formatPrice(price: number){
     const formatter = new Intl.NumberFormat('pt-BR', {
         style: 'currency',
         currency: 'BRL',
        minimumFractionDigits: 2
     });

     return formatter.format(price)
 }
function ProductCard({product}: Props){
    return(
        <div className="order-card-container">
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img src={product.imageUri} alt={product.name} className="order-card-image" />
            <h3 className="order-card-price">
                {formatPrice(product.price)}
            </h3>
            <h3 className="order-card-description">
                {product.description}
            </h3>
        </div>
    )
}

export default ProductCard;