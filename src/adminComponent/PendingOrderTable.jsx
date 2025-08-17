const PendingOrdersTable = () => {
  return (
    <div className="mt-4">
      <h5>Pending Orders</h5>
      <table className="table table-bordered mt-2">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Product ID</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody className="table-dark">
          {[1, 2, 3].map((_, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>Customer {i + 1}</td>
              <td>123 Main St, City {i + 1}</td>
              <td>5600{i}</td>
              <td>PID00{i + 1}</td>
              <td>2025-07-2{i}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrdersTable;
