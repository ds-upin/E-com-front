import { useState } from "react";
import AdminTable from "./AdminTable";

const AdminProductTable = ({products}) => {
  return (
    <div className="mt-4">
      <h5>Product List</h5>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Cost Price</th>
            <th>Selling Price</th>
            <th>Description</th>
            <th>Slug</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-dark">
          {products.map((i) => (
            <AdminTable key={i._id} value={i}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductTable;
