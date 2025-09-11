import styles from '../stylesheets/Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../services/auth.api';
import { useContext, useRef } from 'react';
import { AuthContext } from '../context/Auth';
import { fetchUserData } from '../services/auth.api';

const Login = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passRef = useRef();

    const handleLogin = async () => {
        const data = {
            email: emailRef.current.value.trim(),
            password: passRef.current.value,
        };
        const loadUser = async () => {
            try {
                const res = await fetchUserData();

                if (res.status === 200) {
                    //console.log(res.user)
                    setAuth(res.user);
                } else {
                    console.warn("Not logged in:", res.message);
                }
            } catch (err) {
                console.error("Failed to fetch user:", err);
            }
        };

        try {
            const res = await loginApi(data);
            if (res.status === 200) {
                alert("Login successful!");
                loadUser();
                navigate("/");
            } else {
                alert(res.err?.message || "Login failed");
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            alert("An unexpected error occurred.");
        }
    };

    return (
        <>
            <div className={`${styles.authContainer} min-vh-100 d-flex align-items-center justify-content-center`}>
                <div className={`card ${styles.authCard}`}>
                    <div className={`d-flex justify-content-center align-items-center ${styles.headline}`}>Welcome Back! Login</div>
                    <div className={`${styles.wrap}`}>
                        <label htmlFor="email">Email</label>
                        <input type='email' placeholder='eg,.xyz@domain.com' id="email" ref={emailRef} />
                    </div>
                    <div className={`${styles.wrap}`}>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='password' id="password" ref={passRef} />
                    </div>

                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    <Link to="../register"><div className="text-center text-light">No account? Register here</div></Link>
                </div>
            </div>
        </>
    );
};

export default Login;
