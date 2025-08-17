import AdminSidebar from "../adminComponent/AdminSidebar";
import AdminNavbar from "../adminComponent/AdminNavbar";
import AdminAddProduct from "../adminComponent/AdminAddProduct";
import AdminProductTable from "../adminComponent/AdminProductTable";

const AddProduct = () => {
    
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <AdminSidebar />
      <div className="flex-grow-1">
        <AdminNavbar />
        <div className="container-fluid p-4">
          <AdminAddProduct />
        </div>
      </div>
    </div>
  );
};
export default AddProduct;