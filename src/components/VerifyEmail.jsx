import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../stylesheets/Login.module.css';
import { verifyEmail } from '../services/auth.api';

const VerifyEmail = ({ email }) => {
    const [code, setCode] = useState('');
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const verifyCode = async () => {
        if (code.length !== 6) {
            return alert('Please enter a 6-digit verification code');
        }

        setLoading(true);
        try {
            const res = await verifyEmail({ email, code });
            const data = await res.json();
            if (res.ok) {
                navigate('/login');
            } else {
                alert(data.mess || 'Verification failed. Please try again.');
            }
        } catch (error) {
            console.error('Verification error:', error);
            alert('Network error during verification');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`${styles.authContainer} min-vh-100 d-flex align-items-center justify-content-center`}>
            <div className={`card ${styles.authCard}`}>
                <h3 className={`text-center ${styles.headline}`}>Verify Your Email</h3>

                <div className={`${styles.wrap}`}>
                    <label>Email</label>
                    <input type="email" value={email} readOnly />
                </div>

                <div className={`${styles.wrap}`}>
                    <label>Verification Code</label>
                    <input
                        type="text"
                        placeholder="Enter 6-digit code"
                        value={code}
                        maxLength={6}
                        onChange={(e) => setCode(e.target.value.trim())}
                    />
                </div>

                <button className="btn btn-primary" onClick={verifyCode} disabled={loading}>
                    {loading ? 'Verifying...' : 'Verify Email'}
                </button>
            </div>
        </div>
    );
};

export default VerifyEmail;
