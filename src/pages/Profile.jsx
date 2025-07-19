import Navbar from "../components/Navbar";
import OrderCard from "../components/OrderCard";
import styles from "../stylesheets/Product.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";

const Products = (props) => {
    const {auth,setAuth} = useContext(AuthContext);

    const orders = [{name:"Product Name", id:1, slug:"Product slug", quantity:4,date:"01/11/2009", sellingPrice:2000, status:"pending"},
        {name:"Product Name", id:2, slug:"Product slug", quantity:5, sellingPrice:2000,date:"01/11/2009", status:"pending"}];

    return(<>
    <div className="container-fluid p-0">
            <div className="p-0 g-0 fixed-top">
                <Navbar/>
            </div>
            <div className="container">
                <div className="row" style={{height:"100px"}}></div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="container mt-5">
                            <div className="row">
                            <div className="col-md-6">
                                <h2 className="text-center mb-4">Your Profile</h2>
                                <div className="row">

                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Full Name</label>
                                            <input type="text" className="form-control" placeholder="John Doe" value={auth.name} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" placeholder="john@example.com" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Address</label>
                                            <textarea className="form-control" rows="3" placeholder="Write your address..."></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Pincode</label>
                                            <input type="number" className="form-control" placeholder="000000"/>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <button type="submit" className="btn btn-success">Save</button>
                                            <button type="button" className="btn btn-secondary">Cancel</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="text-center mb-4">Your Order(s)</h2>
                                    {
                                    orders.map((item) => (
                                        <OrderCard key={item.id} slug={item.slug} name={item.name} date={item.date} quantity={item.quantity} price={item.sellingPrice} status={item.status}/>)) 
                                    }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Products;