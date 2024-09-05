"use client";
import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>b</span>
                    logoipsum
                </Link>
                <ul className={styles.navLinks}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/updates">Updates</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/features">Features</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                </ul>
                <div className={styles.userIcon}>
                    <span className={styles.icon}>👤</span>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;