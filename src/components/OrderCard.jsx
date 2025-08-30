import { cancelOrder } from "../services/order.api";

const OrderCard = ({ order, GetOrder }) => {
    const CancelOrder = async () => {
        try {
            const res = await cancelOrder(order._id);
            if(res.status===200){
                alert("Order Cancelled")
            }
            GetOrder();
        } catch (err) {
            console.log("Cancel Error:", err);
        }
    };

    return (
        <div
            className="card"
            style={{
                color: 'white',
                backgroundColor: '#27445D',
                margin: '5px',
                height: 'auto'
            }}
        >
            <div className="card-body">
                <h5 className="card-title">Order ID: {order._id}</h5>

                {order.items.map((item, index) => (
                    <div key={index} className="mb-2">
                        <h6>{item.product.name} <small>- {item.product.slug}</small></h6>
                        <div className="row">
                            <div className="col-6">Quantity: {item.quantity}</div>
                            <div className="col-6">Price: Rs.{item.price * item.quantity}</div>
                        </div>
                        <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                    </div>
                ))}

                <div className="row">
                    <div className="col-6">Date: {new Date(order.createdAt).toLocaleDateString('en-GB')}</div>
                    <div className="col-6">Status: {order.status}</div>
                </div>

                <div className="mt-3">
                    <strong>Total: Rs.{order.totalAmount}</strong>
                </div>

                <button
                    className="btn btn-danger mt-2"
                    onClick={CancelOrder}
                    disabled={["cancelled", "delivered", "shipped"].includes(order.status)}
                >
                    Cancel Order
                </button>
            </div>
        </div>
    );
};

export default OrderCard;
