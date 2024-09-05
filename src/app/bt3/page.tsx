"use client";

import React, { useState } from 'react';
import styles from './FormLogin.module.css';
import classNames from 'classnames';

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== 'admin') {
            setError('Please enter correct password');
        } else {
            setError('');
            // Logic xử lý đăng nhập
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.title}>Admin Login</h2>

            <div className={styles.field}>
                <label>Email Address</label>
                <input
                    type="email"
                    placeholder="hello@example.cl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                />
            </div>

            <div className={styles.field}>
                <label>Password</label>
                <div className={styles.passwordWrapper}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={classNames(styles.input, {
                            [styles.errorInput]: error,
                        })}
                    />
                    <a href="#" className={styles.forgotPassword}>Forgot Password</a>
                </div>
                {error && <span className={styles.errorMessage}>{error}</span>}
            </div>

            <div className={styles.checkboxWrapper}>
                <input type="checkbox" id="keepSignedIn" />
                <label htmlFor="keepSignedIn">Keep me signed in</label>
            </div>

            <button type="submit" className={styles.button}>Continue</button>

            <div className={styles.divider}>
                <span>or sign up with</span>
            </div>

            <div className={styles.socialLogin}>
                <button className={styles.socialButton}>Google</button>
                <button className={styles.socialButton}>Apple</button>
                <button className={styles.socialButton}>Facebook</button>
            </div>

            <p className={styles.signupText}>
                Don't have an Account? <a href="#">Sign up here</a>
            </p>
        </form>
    );
};

export default FormLogin;
