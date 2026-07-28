import CartProducts from "../component/CartProducts";
import Payment from "../component/Payment";
import useShop from "../shopContext";

const Cart=()=>{
  const { products} = useShop();
  if(products.length<=0) return <h1>Cart is Empty</h1>
  return (
    <div className="cart-container">
     <CartProducts/>
     <Payment/>

    </div>

  )
}
export default Cart;