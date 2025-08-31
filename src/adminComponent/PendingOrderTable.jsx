import { editOrderStatus } from "../services/admin.api";

const PendingOrdersTable = (props) => {
    const { order, setOrder } = props;
    const editOrder = async ({ id, status }) => {
        try {
            console.log(id,status);
            const res = await editOrderStatus({ id, status });
            if (res.status == 200) {
                alert("Updated status for", id);
            }
        } catch (error) {
            console.log("Error in updating", error);
        }
    }

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
                        <th>Amount</th>
                        <th>Order Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-dark">
                    {
                        order.map((o) => (
                            <tr key={o._id}>
                                <td>{1}</td>
                                <td>{o.user.name}</td>
                                <td>{o.shippingAddress}</td>
                                <td>{o.pincode}</td>
                                <td>{o._id}</td>
                                <td>Rs.{o.totalAmount}/-</td>
                                <td>2025-07-2{2}</td>
                                <td>
                                    <select defaultValue={o.status} onChange={(e) => editOrder({id:o._id, status:e.target.value})}>
                                        <option value="pending">Pending</option>
                                        <option value="paid">Paid</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="delivered">Delivered</option>
                                        <option value="cancelled">Cancel</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default PendingOrdersTable;
