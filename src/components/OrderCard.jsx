

const OrderCard = (props) => {
    const {name, slug, quantity, price, date, status} = props;
  return (
      <div className="card h-40" style={{color:'white', backgroundColor:'#27445D',margin:'5px'}}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2">-{slug}</h6>
          <div className="row mb-2">
            <div className="col-6">Quantity: {quantity}</div>
            <div className="col-6">Total Price: Rs.{price}</div>
          </div>
          <div className="row">
            <div className="col-6">Date: {date}</div>
            <div className="col-6">Status: {status}</div>
          </div>
          <button className='btn btn-danger'>Cancel Order</button>
        </div>
      </div>
    
  );
};
export default OrderCard;