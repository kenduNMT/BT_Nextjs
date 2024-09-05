import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Pagination.module.css';

const Pagination = ({ totalPages = 20, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={classNames(styles.pageNumber, {
                        [styles.active]: currentPage === i,
                    })}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className={styles.pagination}>
            <button
                className={styles.navButton}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                ← Prev
            </button>
            {renderPageNumbers()}
            <button
                className={styles.navButton}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next →
            </button>
        </div>
    );
};

export default Pagination;