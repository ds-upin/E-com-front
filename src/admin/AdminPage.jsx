import AdminSidebar from "../adminComponent/AdminSidebar";
import AdminNavbar from "../adminComponent/AdminNavbar";
import AdminDashboardCard from '../adminComponent/AdminDashboardCard';
import PendingOrdersTable from "../adminComponent/PendingOrderTable";
import { getAdminOrders, getOrderByStatus } from "../services/admin.api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminPage = () => {
    const navigate = useNavigate();
    const [order, setOrder] = useState([]);
    useEffect(() => { fetchPendingProducts(); }, []);
    const getStatusOrder = async ({ status }) => {
        //console.log("Triggered",status);
        try {
            const res = await getOrderByStatus({ status });
            if (res.status == 200) {
                //console.log(res.data);
                setOrder(res.data);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };
    const fetchPendingProducts = async () => {
        try {
            const res = await getAdminOrders();
            if (res.status === 200) {
                setOrder(res.data);
                //console.log("hh", typeof res, res);

            } else if (res.status === 401) {
                navigate("/");
            }

        } catch (error) {
            console.log("Error in fetching pending products", error);
        }
    }


    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            <AdminSidebar />
            <div className="flex-grow-1">
                <AdminNavbar />

                <div className="container-fluid p-4">
                    <AdminDashboardCard />
                    <select defaultValue={"pending"} onChange={(e) => getStatusOrder({ status: e.target.value })}>
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancel</option>
                    </select>
                    <PendingOrdersTable order={order} setOrder={setOrder} />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;