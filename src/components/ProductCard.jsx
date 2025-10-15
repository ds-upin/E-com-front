import styles from '../stylesheets/ProductCard.module.css';
import altImage from '../assets/download.jpg';
import { AddItemCart } from '../services/cart.api';
import { useEffect, useState } from 'react';

const ProductCard = (props) => {
    const { name = '', slug = '', price = 0, image = [], id = 0 } = props;
    const [incart, setIncart] = useState(false);
    const addCart = async () => {

        const data = { productId: id, quantity: 1 };
        try {
            const res = await AddItemCart(data);

            if (res.status === 200 || res.success) {
                //console.log("Item added to cart:", res);
                setIncart(true);
            }else if(res.status===401){
                console.log("Login to proceed");
            } else {
                console.warn("Failed to add item:", res.message || res);
                alert("Failed to add item to cart");
            }
        } catch (err) {
            console.error("Error adding item to cart:", err);
            alert("An error occurred while adding item to cart");
        }
    };

    return (
        <div className={`container ${styles.cardStyle} d-flex flex-column justify-content-between align-items-center`}>
            <div className={`${styles.imageStyle} d-flex justify-content-center align-items-center`}>
                <img src={`${image[0]?.url}` || altImage} height="250px" alt={name || slug || 'Product'} />
            </div>
            <h2 className="text-white mt-2">{slug}</h2>
            <p className="text-white">Rs. {price}</p>
            <button className={`${styles.buttonStyle}`} disabled={incart} onClick={addCart}>{!incart ? 'Add to Cart' : 'Added to Cart'}</button>
        </div>
    );
};

export default ProductCard;
