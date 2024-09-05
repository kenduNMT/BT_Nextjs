"use client";
import React from 'react'
import classNames from 'classnames';
import styles from './FormRegister.module.css';

export default function page() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Form đăng ký</h2>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Họ tên</label>
                    <input type="text" id="name" placeholder="Nhập tên của bạn" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="you@company.com" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Số điện thoại</label>
                    <div className={styles.phoneInput}>
                        <select>
                            <option>VN</option>
                        </select>
                        <input type="tel" id="phone" placeholder="+84 (123) 456-789" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="address">Địa chỉ</label>
                    <textarea id="address" rows="3"></textarea>
                </div>
                <div className={styles.formGroup}>
                    <label>Kỹ năng</label>
                    <div className={styles.skills}>
                        {['HTML', 'JavaScript', 'UX design', 'ReactJS', 'CSS', 'Java'].map((skill) => (
                            <label key={skill} className={styles.skillCheckbox}>
                                <input type="checkbox" name="skills" value={skill} />
                                <span>{skill}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <button type="submit" className={styles.submitButton}>Đăng ký</button>
            </form>
        </div>
    )
}
