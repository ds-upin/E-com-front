import styles from '../stylesheets/Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <div className={`${styles.authContainer} min-vh-100 d-flex align-items-center justify-content-center`}>
      <div className={`card ${styles.authCard}`}>
        <div className={`d-flex justify-content-center align-items-center ${styles.headline}`}>Welcome Back! Login</div>
        <div className={`${styles.wrap}`}>
            <label htmlFor="email">Email</label>
            <input type='email' placeholder='eg,.xyz@domain.com' id="email" value="nothing"/>
        </div>
        <div className={`${styles.wrap}`}>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='password' id="password" value="password"/>
        </div>
        
        <button className="btn btn-primary">Login</button>
        <Link to="../register"><div className="text-center text-light">No account? Register here</div></Link>
      </div>
    </div>
    </>
  );
};

export default Login;
