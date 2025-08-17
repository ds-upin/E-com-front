import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { getAllProduct } from "../services/product.api";
import { useState, useEffect } from "react";
import { AddItemCart } from "../services/cart.api";

const Home = () => {

    const [product,setProduct] = useState([]);
    const getProduct = async() =>{
        try{
            const res = await getAllProduct();
            //console.log(res);
            setProduct(res);
        }catch(err){
            console.log("network error",err);
        }
    }
      useEffect(() => {
        getProduct();
      }, []);

    return(<>
        <div className="container-fluid p-0">
            <div className="p-0 g-0 fixed-top">
                <Navbar/>
            </div>
            <div className="container">
                <div className="row" style={{height:"100px"}}></div>
                <div className="row d-flex align-items-center justify-content-center">
                {product.map((item) => {
                        return (
                        <div className="col-md-4 " key={item._id}>
                            <ProductCard name={item.name} slug={item.slug} id={item._id} price={item.sellingPrice} image={item.image} />
                        </div>
                        )
                })}
                </div>
            </div>
        </div>

    </>);
}
export default Home;