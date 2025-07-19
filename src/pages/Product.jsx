import Navbar from "../components/Navbar";
import styles from "../stylesheets/Product.module.css";

const Products = (props) => {
    return(<>
    <div className="container-fluid p-0">
            <div className="p-0 g-0 fixed-top">
                <Navbar/>
            </div>
            <div className="container">
                <div className="row" style={{height:"100px"}}></div>
                <div className="row d-flex align-items-center justify-content-center">
                
                </div>
            </div>
        </div>
    </>);
}
export default Products;