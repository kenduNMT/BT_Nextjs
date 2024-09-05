"use client";
import Pagination from './Pagination';

export default function Home() {
    const handlePageChange = (page) => {
        console.log(`Chuyển đến trang ${page}`);
        // Xử lý logic chuyển trang ở đây
    };

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            {/* Nội dung trang */}
            <Pagination totalPages={20} onPageChange={handlePageChange} />
        </div>
    );
}