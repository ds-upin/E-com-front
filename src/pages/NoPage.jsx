import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../stylesheets/NoPage.module.css';

const NoPage = () => {
    return (
        <div className={`${styles.noPage} text-center`}>
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/">Go back home</Link>
        </div>
    );
};

export default NoPage;
