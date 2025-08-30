import AdminSidebar from "../adminComponent/AdminSidebar";
import AdminNavbar from "../adminComponent/AdminNavbar";
import AdminProductTable from "../adminComponent/AdminProductTable";
import { getAdminAllProduct } from "../services/product.api";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  const [product,setProduct] = useState([]);
  const getProduct = async() =>{
    try{
      const res = await getAdminAllProduct();
      if(res.status===401){
        navigate("/");
      }
      setProduct(res);
    }catch(err){
      console.log("network error",err);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
    
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <AdminSidebar />
      <div className="flex-grow-1">
        <AdminNavbar />
        <div className="container-fluid p-4">
          <AdminProductTable products={product}/>
        </div>
      </div>
    </div>
  );
};
export default EditProduct;