import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { ModeProvider } from "../context/Mode";
const Home = () => {

    const product = [{name:"Samsung",slug:"Samsung Phone", sellingPrice:2000, id:0},
        {name:"Samsung",slug:"Samsung Phone", sellingPrice:2000, id:1},
        {name:"Samsung",slug:"Samsung Phone", sellingPrice:2000, id:2},
        {name:"Samsung",slug:"Samsung Phone", sellingPrice:2000, id:3},
        {name:"Samsung",slug:"Samsung Phone", sellingPrice:2000, id:4}];

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
                        <div className="col-md-4 " key={item.id}>
                            <ProductCard name={item.name} slug={item.slug} price={item.sellingPrice} />
                        </div>
                        )
                })}
                </div>
            </div>
        </div>

    </>);
}
export default Home;