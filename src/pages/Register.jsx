import styles from '../stylesheets/Register.module.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
    <div className={`${styles.authContainer} min-vh-100 d-flex align-items-center justify-content-center`}>
      <div className={`card ${styles.authCard}`}>
        <div className={`d-flex justify-content-center align-items-center ${styles.headline}`}>Create your new account</div>
        <div className={`${styles.wrap}`}>
            <label htmlFor="name">Name</label>
            <input type='text' placeholder='Full Name' id="name" value="My Name"/>
        </div>
        <div className={`${styles.wrap}`}>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='email@xyz.com' id="email" value="abcd@xyz.com"/>
        </div>
        <div className={`${styles.wrap}`}>
            <label htmlFor="add">Address</label>
            <input type='text' placeholder='Address' id="add" value="Address"/>
        </div>
        <div className={`${styles.wrap}`}>
            <label htmlFor="pincode">Pin Code</label>
            <input type="number" placeholder='111111' id="pincode" value="000000"/>
        </div>
        <div className={`${styles.wrap}`}>
            <label htmlFor="phone">Mobile Number</label>
            <input type="number" placeholder='111111' id="phone" value="000000"/>
        </div>
        <div className={`${styles.wrap}`}>
            <label htmlFor="password">Set Password</label>
            <input type='password' placeholder='sdfg45tg' id="password" value="*"/>
        </div>
        <div className={`${styles.wrap}`}>
            <label htmlFor="cpassword">Confirm Password</label>
            <input type='password' placeholder='sdfg45tg' id="cpassword" value="*"/>
        </div>
        <button className="btn btn-primary">Register</button>
        <Link to="../login"><div className="text-center text-light">Have Account? Login here</div></Link>
      </div>
    </div>
    </>
  );
};

export default Register;
