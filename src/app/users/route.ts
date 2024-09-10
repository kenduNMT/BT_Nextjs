import { NextResponse } from 'next/server';

// Danh sách người dùng mẫu
const users = [
    { id: 1, name: 'Nguyen Van A', email: 'a@example.com' },
    { id: 2, name: 'Tran Thi B', email: 'b@example.com' },
    { id: 3, name: 'Le Van C', email: 'c@example.com' },
];

// Hàm xử lý GET request với query parameter name
export async function GET(request: Request) {
    // Lấy URL của request
    const { searchParams } = new URL(request.url);

    // Lấy giá trị của parameter 'name' từ URL
    const name = searchParams.get('name');

    if (name) {
        // Tìm kiếm người dùng dựa trên tên
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(name.toLowerCase())
        );

        if (filteredUsers.length > 0) {
            // Nếu tìm thấy người dùng, trả về danh sách người dùng phù hợp
            return NextResponse.json(filteredUsers);
        } else {
            // Nếu không tìm thấy, trả về thông báo lỗi
            return NextResponse.json({ message: `Không tìm thấy người dùng với tên "${name}"` });
        }
    }

    // Nếu không có query parameter 'name', trả về toàn bộ danh sách người dùng
    return NextResponse.json(users);
}
