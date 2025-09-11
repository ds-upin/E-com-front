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
                <div className="col text-center p-0 d-flex justify-content-center align-items-center">
                    <h2>E-Commerce: Your Own Shop</h2>
                </div>
            </div>

            <div className={`row p-0 ${styles.navRowHeight} flex-wrap`}>
                <Link to="/" className={`col-6 col-md-3 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Home</Link>
                {/* <div className={`col-6 col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Kids</div>
                <div className={`col-6 col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Ladies</div> */}
                <Link to="/cart" className={`col-6 col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Cart</Link>
                <button
                    onClick={handeLogout}
                    className={`col-6 col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`}
                    style={{ borderWidth: 0 }}
                >
                    {auth.email === '' ? 'Login' : 'Logout'}
                </button>
                <Link to="/profile" className={`col-6 col-md-2 d-flex justify-content-center align-items-center ${styles.textStyle}`}>Profile</Link>
                <button
                    onClick={toggleMode}
                    className={`col-6 col-md-3 d-flex justify-content-center align-items-center ${styles.textStyle}`}
                    style={{ borderWidth: 0 }}
                >
                    {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
                {auth.role === 'admin' && (
                    <Link to="/admin-panel" className={`col-6 col-md-1 d-flex justify-content-center align-items-center ${styles.textStyle}`}>
                        Admin
                    </Link>
                )}
            </div>
        </div>

    );
}
export default Navbar;