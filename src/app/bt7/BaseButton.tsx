"use client";
import React from 'react';
import classNames from 'classnames';
import styles from './BaseButton.module.css';

const BaseButton = ({ type = 'primary', children, className, ...props }) => {
    const buttonClass = classNames(
        styles.button,
        styles[type],
        className
    );

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};

export default BaseButton;