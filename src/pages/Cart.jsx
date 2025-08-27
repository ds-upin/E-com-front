import Navbar from "../components/Navbar";
import CartCard from "../components/CartCard";
import { useEffect, useState,useContext } from "react";
import { getCart, deleteItemCart,UpdateQuantity } from "../services/cart.api";
import { AuthContext } from "../context/Auth";

const Cart = () => {
    const {auth,  setAuth} = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    const cartItem = async () => {
        try {
            const res = await getCart();
            if (res.status === 200) {
                setCart(res.data);
                console.log(res.data)
            }
        } catch (error) {
            console.log('Network Error', error);
        }
    }
    useEffect(() => {
        cartItem();
    }, [setAuth]);
    const upgradeQuantity = async (data)=>{
        try{
            const res = await UpdateQuantity(data);
            console.log(res);
            if(res.status==200){
                cartItem();
            }
        } catch(error){
            console.log("Error",error);
        }
    }
    const removeItem = async (id) => {
        try {
            const res = await deleteItemCart(id);
            if (res.status === 200) {
                await cartItem();
            }
        } catch (error) {
            console.log('Error removing item:', error);
        }
    };



    return (<>
        <div className="container-fluid">
            <div className="p-0 g-0 fixed-top">
                <Navbar />
            </div>
            <div className="container">
                <div className="row" style={{ height: "100px" }}></div>
                <div className="d-flex flex-wrap">
                    {
                        Array.isArray(cart.items) && cart.items.length > 0 ? (
                            cart.items.map((item) => (
                                <CartCard
                                    name={item.product.name}
                                    id={item.product._id}
                                    image={item.product.image[0].url}
                                    slug={item.product.slug}
                                    description={item.product.description}
                                    price={item.product.sellingPrice}
                                    quantity={item.quantity}
                                    key={item.product._id}
                                    upgradeQuantity={upgradeQuantity}
                                    removeItem={removeItem}
                                />
                            ))
                        ) : (<p>Your cart is empty.</p>)
                    }
                </div>

                <div className="row d-flex align-items-center" style={{ height: "50px", backgroundColor: '#27445D', color: 'white' }}>Rs. {cart.total}</div>
            </div>
        </div>
    </>);
}
export default Cart;