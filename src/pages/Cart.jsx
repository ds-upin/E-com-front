import Navbar from "../components/Navbar";
import CartCard from "../components/CartCard";
import { useEffect, useState } from "react";
import { getCart } from "../services/cart.api";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const cartItem = async () => {
        try{
            const res = await getCart();
            if(res.status===200){
                setCart(res.data.items||[]);
            }
        }catch(error){
            console.log('Network Error',error);
        }
    }
    useEffect(()=>{
        cartItem();
    },[]);
    
    
    return(<>
    <div className="container-fluid">
        <div className="p-0 g-0 fixed-top">
            <Navbar/>
        </div>
        <div className="container">
            <div className="row" style={{height:"100px"}}></div>
            <div className="d-flex flex-wrap">
                {
                    cart.map((item)=>{
                        return <CartCard name={item.product.name}
                        id={item.product._id} 
                        image={item.product.image[0].url} 
                        slug={item.product.slug} 
                        description={item.product.description} 
                        price={item.product.sellingPrice} 
                        quantity={item.quantity}
                        key={item._id}/>;
                    })
                }
            </div>
            <div className="row d-flex align-items-center" style={{height:"50px", backgroundColor:'#27445D', color:'white'}}>Rs. 1000000.00</div>
        </div>
    </div>
    </>);
}
export default Cart;