import Navbar from "../components/Navbar";
import CartCard from "../components/CartCard";

const Cart = () => {
    return(<>
    <div className="container-fluid">
        <div className="p-0 g-0 fixed-top">
            <Navbar/>
        </div>
        <div className="container">
            <div className="row" style={{height:"100px"}}></div>
            <div className="d-flex flex-wrap">
                <CartCard/>
                <CartCard/>
                <CartCard/>
                <CartCard/>
                <CartCard/>
                <CartCard/>
                <CartCard/>
                <CartCard/>
            </div>
            <div className="row d-flex align-items-center" style={{height:"50px", backgroundColor:'#27445D', color:'white'}}>Rs. 1000000.00</div>
        </div>
    </div>
    </>);
}
export default Cart;