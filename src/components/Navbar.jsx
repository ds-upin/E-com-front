import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import styles from '../stylesheets/Navbar.module.css';
import { ModeContext } from '../context/Mode';
import { AuthContext } from '../context/Auth';
import { logoutApi } from '../services/auth.api';

const Navbar = () => {
    const navigate = useNavigate();
    const { mode, toggleMode } = useContext(ModeContext);
    const { auth, setAuth } = useContext(AuthContext);
    const handeLogout = async () => {
        if (auth.email === '' || auth === null) {
            return navigate('/login');
        }
        try {
            const res = await logoutApi();
            if (res.status === 200) {
                setAuth({ id: '', name: 'Name', address: '', pincode: '', email: '', role: "user" });
                return;
            }
        } catch (err) {
            console.log("Network", err);
        }

    }

    return (
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
                <button to="/login" style={{ borderWidth: '0px' }} onClick={handeLogout} className={`col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`}>{auth.email === '' ? 'Login' : 'Logout'}</button>
                <Link to="/profile" className={`col-md-1 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Profile</Link>
                <button style={{ borderWidth: '0px' }} className={`col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`} onClick={toggleMode}>{mode === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
                {auth.role=='admin'?<Link to="/admin-panel" className={`col-md-1 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Admin</Link>:null}
            </div>
        </div>
    );
}
export default Navbar;