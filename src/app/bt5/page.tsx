"use client";
import React, { useState } from 'react';
import Popup from './Popup';

const page = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const handleDelete = () => {
        // Xử lý logic xóa bài viết ở đây
        console.log('Đã xóa bài viết');
        closePopup();
    };

    return (
        <div>
            <h1>Trang Blog</h1>
            <button onClick={openPopup}>Xóa bài viết</button>
            <Popup
                isOpen={isPopupOpen}
                onClose={closePopup}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default page;