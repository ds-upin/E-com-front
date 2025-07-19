import image from '../assets/download.jpg';
import styles from '../stylesheets/CartCard.module.css';

const CartCard = (props) => {
  const {name, slug ,price, description} = props;
     return (
        <>
        <div className={`container ${styles.mainCard}`}>
         <div className={`row ${styles.rowStyle}`}>
            <div className={`col-md-6 d-flex justify-content-center align-items-center ${styles.imageWrapper}`}>
                  <img src={image} height="250px"/>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <h4 className="text-white">{name}</h4>
            <p className="text-light">Slug: {slug}</p>
            <h5 className="text-white">Price:Rs.{price}</h5>

            <div className={`${styles.descriptionBox} text-light mb-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              convallis felis nec arcu cursus, nec lacinia erat euismod. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem.
            </div>

            <div className="my-2">
              <button className="btn btn-success">Buy: Rs.{price}</button>
            </div>

            <div className="d-flex align-items-center">
              <button className="btn btn-outline-light mx-2">-</button>
              <span className="text-white">1</span>
              <button className="btn btn-outline-light mx-2">+</button>
            </div>
          </div>
         </div>
        </div>
        </>
     );
};

export default CartCard;