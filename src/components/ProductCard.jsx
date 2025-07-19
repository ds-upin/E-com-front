import styles from './ProductCard.module.css';
import image from '../assets/download.jpg';

const ProductCard = (props) => {
    const {name, slug, price} = props;
  return (
    <div className={`container ${styles.cardStyle} d-flex flex-column justify-content-between align-items-center`}>
      <div className={`${styles.imageStyle} d-flex justify-content-center align-items-center`}>
        <img src={image} height="250px" alt="Product" />
      </div>
      <h2 className="text-white mt-2">{slug}</h2>
      <p className="text-white">Rs. {price}</p>
      <button className={`${styles.buttonStyle}`}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
