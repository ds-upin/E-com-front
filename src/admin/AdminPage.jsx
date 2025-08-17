import AdminSidebar from "../adminComponent/AdminSidebar";
import AdminNavbar from "../adminComponent/AdminNavbar";
import AdminDashboardCard from '../adminComponent/AdminDashboardCard';
import PendingOrdersTable from "../adminComponent/PendingOrderTable";

const AdminPage = () => {
    
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <AdminSidebar />
      <div className="flex-grow-1">
        <AdminNavbar />
        <div className="container-fluid p-4">
          <AdminDashboardCard />
          <PendingOrdersTable/>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;