import { NextResponse } from 'next/server';

// Danh sách người dùng mẫu
const users = [
    { id: 1, name: 'Nguyen Van A', email: 'a@example.com' },
    { id: 2, name: 'Tran Thi B', email: 'b@example.com' },
    { id: 3, name: 'Le Van C', email: 'c@example.com' },
];

// Hàm xử lý GET request theo ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    // Tìm kiếm người dùng dựa trên ID
    const user = users.find((user) => user.id === parseInt(id));

    if (user) {
        // Nếu tìm thấy người dùng, trả về thông tin người dùng
        return NextResponse.json(user);
    } else {
        // Nếu không tìm thấy, trả về thông báo lỗi
        return NextResponse.json({ message: `Không tìm thấy người dùng có id = ${id}` });
    }
}
