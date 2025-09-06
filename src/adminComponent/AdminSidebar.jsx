import { Link } from "react-router-dom";

const AdminSidebar = () => (
    <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
        <h4>Admin Panel</h4>
        <ul className="nav flex-column mt-4">
            <li className="nav-item"><Link to="/admin-panel" className="nav-link text-white">Dashboard</Link></li>
            <li className="nav-item"><Link to="/admin-panel/add" className="nav-link text-white">Add Product</Link></li>
            <li className="nav-item"><Link to="/admin-panel/edit" className="nav-link text-white">Edit Products</Link></li>
        </ul>
    </div>
);

export default AdminSidebar;
