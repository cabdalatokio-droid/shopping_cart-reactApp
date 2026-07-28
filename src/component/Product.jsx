import { useEffect, useState } from "react";
import useShop from "../shopContext";

const Product=({product})=>{
  const[isInCart,setCart]=useState(false);
  const{ AddToCart, removeFromCart,products}=useShop();
useEffect(() => {
  const isCart = products.filter(pro => pro.id === product.id);

  if (isCart.length > 0) {
    setCart(true);
  } else {
    setCart(false);
  }
}, [products, product.id]);

  const checktheProduct=()=>{
    if(isInCart){
      removeFromCart(product)
    }
    else{
         AddToCart(product);
    }
 
  }
 return(
 <div className="card"
    style={{minHeight:"100%", background:`linear-gradient(rgba(0,0 ,0 ,0.1),rgba(0, 0, 0, 0.1)),url(${product.urlImage})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"}}>
    <div className="info">
      <span>{product.name}</span>
      <span>${product.price}</span>
    </div>
   <button
    className={`btn ${isInCart ? "btn-secondary" : "btn-primary"}`}
    onClick={checktheProduct}
  >
    {isInCart ? "-" : "+"}
  </button>

     </div>
 )
}
export default Product;