import styles from '../stylesheets/Register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRef,useState } from 'react';
import { registerApi } from '../services/auth.api';
import VerifyEmail from '../components/VerifyEmail';

const Register = () => {
    const [showVerify, setShowVerify] = useState(false);
    const [emailForVerification, setEmailForVerification] = useState('');

    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const addrRef = useRef();
    const pinRef = useRef();
    const mobileRef = useRef();
    const passRef = useRef();
    const confRef = useRef();

    const register = async () => {
        if (passRef.current.value !== confRef.current.value) return alert("Password does not match");
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            address: addrRef.current.value,
            pincode: Number(pinRef.current.value),
            mobile: Number(mobileRef.current.value),
            password: passRef.current.value,
        };
        try {
            const res = await registerApi(data);
            if (res.status === 201) {
                alert("Successfully Registered! Please verify your email.");
                setEmailForVerification(data.email);
                setShowVerify(true);
            } else if (res.status === 409) {
                alert("User already exists. Redirecting to login.");
                navigate('/login');
            } else {
                alert(res.err?.message || "Signup failed!");
            }
        } catch (err) {
            console.log("Network error", err);
            alert("Network error during registration");
        }

    }
    if (showVerify) {
        return <VerifyEmail email={emailForVerification} />;
    }
    return (
        <>
            <div className={`${styles.authContainer} min-vh-100 d-flex align-items-center justify-content-center`}>
                <div className={`card ${styles.authCard}`}>
                    <div className={`d-flex justify-content-center align-items-center ${styles.headline}`}>Create your new account</div>
                    <div className={`${styles.wrap}`}>
                        <label htmlFor="name">Name</label>
                        <input type='text' placeholder='Full Name' id="name" ref={nameRef} />
                    </div>
                    <div className={`${styles.wrap}`}>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='email@xyz.com' id="email" ref={emailRef} />
                    </div>
                    <div className={`${styles.wrap}`}>
                        <label htmlFor="add">Address</label>
                        <input type='text' placeholder='Address' id="add" ref={addrRef} />
                    </div>
                    <div className={`${styles.wrap}`}>
                        <label htmlFor="pincode">Pin Code</label>
                        <input type="number" placeholder='111111' id="pincode" ref={pinRef} />
                    </div>
                    <div className={`${styles.wrap}`}>
                        <label htmlFor="phone">Mobile Number</label>
                        <input type="number" placeholder='111111' id="phone" ref={mobileRef} />
                    </div>
                    <div className={`${styles.wrap}`}>
                        <label htmlFor="password">Set Password</label>
                        <input type='password' placeholder='sdfg45tg' id="password" ref={passRef} />
                    </div>
                    <div className={`${styles.wrap}`}>
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type='password' placeholder='sdfg45tg' id="cpassword" ref={confRef} />
                    </div>
                    <button className="btn btn-primary" onClick={register}>Register</button>
                    <Link to="../login"><div className="text-center text-light">Have Account? Login here</div></Link>
                </div>
            </div>
        </>
    );
};

export default Register;
