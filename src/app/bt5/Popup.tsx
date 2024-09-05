"use client";
import React from 'react';
import styles from './Popup.module.scss';

const Popup = ({ isOpen, onClose, onDelete }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
                <div className={styles.iconWrapper}>
                    <span className={styles.icon}>!</span>
                </div>
                <h2 className={styles.title}>Xóa bài viết blog</h2>
                <p className={styles.message}>
                    Bạn có chắc chắn muốn xóa bài viết này không? Hành động này không thể hoàn tác.
                </p>
                <div className={styles.buttonGroup}>
                    <button className={styles.cancelButton} onClick={onClose}>
                        Hủy
                    </button>
                    <button className={styles.deleteButton} onClick={onDelete}>
                        Xóa
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;