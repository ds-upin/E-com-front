import imagex from '../assets/download.jpg';
import styles from '../stylesheets/CartCard.module.css';

const CartCard = (props) => {
    //console.log(props);
    const { name, id, image, slug, price, description, quantity, removeItem, upgradeQuantity } = props;
    const increament =async () => {
        await upgradeQuantity({ "productId": id, "quantity": quantity + 1 })
    }
    const decrement =async () => {
        await upgradeQuantity({ "productId": id, "quantity": quantity - 1 })
    }
    return (
        <>
            <div className={`container ${styles.mainCard}`}>
                <div className={`row ${styles.rowStyle}`}>
                    <div className={`col-md-6 d-flex justify-content-center align-items-center ${styles.imageWrapper}`}>
                        <img src={`${image}`} height="250px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <h4 className="text-white">{name}</h4>
                        <p className="text-light">Slug: {slug}</p>
                        <h5 className="text-white">Price:Rs.{price}</h5>

                        <div className={`${styles.descriptionBox} text-light mb-3`}>
                            Description: {description}
                        </div>

                        <div className="my-2">
                            <button className="btn btn-success">Buy: Rs.{price}</button>
                            <button className="btn btn-danger ms-2" onClick={() => { removeItem(id) }}>Remove</button>
                        </div>

                        <div className="d-flex align-items-center">
                            <button className="btn btn-outline-light mx-2" onClick={decrement}>-</button>
                            <span className="text-white">{quantity}</span>
                            <button className="btn btn-outline-light mx-2" onClick={increament}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartCard;