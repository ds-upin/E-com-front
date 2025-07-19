import Navbar from "../components/Navbar";
import CartCard from "../components/CartCard";

const Cart = () => {
    const cart = [{name:"Product Name",slug:"product-slug",sellingPrice:2000,id:1,description:"lorem"},
        {name:"Product Name",slug:"product-slug",sellingPrice:2000,id:2,description:"lorem"},
        {name:"Product Name",slug:"product-slug",sellingPrice:2000,id:3,description:"lorem"},
        {name:"Product Name",slug:"product-slug",sellingPrice:2000,id:4,description:"lorem"},
        {name:"Product Name",slug:"product-slug",sellingPrice:2000,id:5,description:"lorem"},
        {name:"Product Name",slug:"product-slug",sellingPrice:2000,id:6,description:"lorem"},
        {name:"Product Name",slug:"product-slug",sellingPrice:2000,id:7,description:"lorem"},
        {name:"Product Name",slug:"product-slug",sellingPrice:2000,id:8,description:"lorem"},
    ];
    
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
                        return <CartCard name={item.name} slug={item.slug} description={item.description} price={item.sellingPrice} key={item.id}/>;
                    })
                }
            </div>
            <div className="row d-flex align-items-center" style={{height:"50px", backgroundColor:'#27445D', color:'white'}}>Rs. 1000000.00</div>
        </div>
    </div>
    </>);
}
export default Cart;