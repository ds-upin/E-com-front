import { Link } from 'react-router-dom';
import { useContext } from 'react';
import styles from '../stylesheets/Navbar.module.css';
import { ModeContext } from '../context/Mode';

const Navbar = () => {
    const {mode,toggleMode} = useContext(ModeContext);


    return(
    <div className="container-fluid p-0">
        <div className={`row p-0 ${styles.navRowHeight} ${styles.mainHeading}`}>
            <div className="col text-center p-0 d-flex justify-content-center align-items-center"><h2>E-Commerce: Your Own Shop</h2></div>
        </div>
        <div className={`row p-0 ${styles.navRowHeight}`}>
            
            <Link to="/" className={`col-md-1 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Home</Link>
            <div className={`col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Kids</div>
            <div className={`col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Ladies</div>
            {/* <div className={`col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Mens</div> */}
            <Link to="/cart" className={`col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Cart</Link>
            <Link to="/login" className={`col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Login</Link>
            <Link to="/profile" className={`col-md-1 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Profile</Link>
            <button style={{borderWidth:'0px'}} className={`col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`} onClick={toggleMode}>{mode==='light'?'Dark Mode':'Light Mode'}</button>
        </div>
    </div>
    );
}
export default Navbar;