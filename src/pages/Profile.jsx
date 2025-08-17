import Navbar from "../components/Navbar";
import OrderCard from "../components/OrderCard";
import styles from "../stylesheets/Product.module.css";
import { useContext, useRef,useEffect, useState } from "react";
import { AuthContext } from "../context/Auth";
import { updateUserProfile } from "../services/user.api";

const Products = (props) => {
    const [edit, setEdit] = useState(true);
    const {auth,setAuth} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: auth.name || "",
        email: auth.email || "",
        address: auth.address || "",
        pincode: auth.pincode || "",
        mobile: auth.mobile || "",
    });
    useEffect(() => {
        setFormData({
            name: auth.name || "",
            email: auth.email || "",
            address: auth.address || "",
            pincode: auth.pincode || "",
            mobile:"",
        });
    }, [auth]);


    const updateUserData = async () => {
        try {
            const res = await updateUserProfile(formData);
            if (res.status === 200) {
                 setAuth({
                    id: res.data._id,
                    name: res.data.name,
                    address: res.data.address,
                    pincode: res.data.pincode,
                    email: res.data.email,
                    role: "user",
                });
            setEdit(true);
            } else {
                alert("Failed to update");
            }
        } catch (err) {
            console.error("Network Error", err);
        }
    };


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
                                            <input type="text" 
                                                className="form-control" 
                                                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                                                placeholder="John Doe" value={formData.name} 
                                                disabled={edit}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" 
                                                className="form-control"
                                                value={formData.email}
                                                
                                                placeholder="john@example.com" 
                                                disabled={true} 
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Address</label>
                                            <textarea 
                                                className="form-control" 
                                                rows="3" value={formData.address}
                                                onChange={(e) => setFormData({...formData, address: e.target.value})} 
                                                placeholder="Write your address..." 
                                                disabled={edit}>
                                            </textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Pincode</label>
                                            <input type="number"
                                                value={formData.pincode}
                                                className="form-control" 
                                                placeholder="000000" 
                                                onChange={(e) => setFormData({...formData, pincode: e.target.value})} 
                                                disabled={edit}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Mobile No.</label>
                                            <input type="number" 
                                                value={formData.mobile}
                                                onChange={(e) => setFormData({...formData, mobile: e.target.value})} 
                                                className="form-control" 
                                                placeholder="**********" 
                                                disabled={edit}
                                            />
                                        </div>
                                        <div className="d-flex gap-2">
                                            <button type="submit" className="btn btn-secondary" onClick={()=>setEdit(false)}>Edit</button>
                                            <button type="submit" className="btn btn-success" disabled={edit} onClick={updateUserData}>Save</button>
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