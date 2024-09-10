import { NextResponse } from 'next/server';

// Danh sách người dùng mẫu (dùng để kiểm tra)
let users = [
    { id: 1, name: 'Nguyen Van A', email: 'a@example.com' },
    { id: 2, name: 'Tran Thi B', email: 'b@example.com' },
    { id: 3, name: 'Le Van C', email: 'c@example.com' },
];

// Hàm xử lý DELETE request với id từ route động
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    // Kiểm tra xem id có hợp lệ không
    if (!id) {
        return NextResponse.json({ message: 'Vui lòng cung cấp id hợp lệ' });
    }

    // Tìm người dùng dựa trên id
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        // Nếu không tìm thấy người dùng với id đã cung cấp
        return NextResponse.json({ message: `Không tìm thấy người dùng có id = ${id}` });
    }

    // Xóa người dùng
    users.splice(userIndex, 1);

    // Trả về thông báo thành công
    return NextResponse.json({ message: 'Xóa thông tin người dùng thành công' });
}

// Hàm xử lý GET request để lấy danh sách người dùng hiện tại
export async function GET() {
    return NextResponse.json(users);
}
