import { NextResponse } from 'next/server';

// Danh sách người dùng mẫu (dùng để kiểm tra)
let users = [
    { id: 1, name: 'Nguyen Van A', email: 'a@example.com' },
    { id: 2, name: 'Tran Thi B', email: 'b@example.com' },
    { id: 3, name: 'Le Van C', email: 'c@example.com' },
];

// Hàm xử lý PUT request để cập nhật thông tin người dùng
export async function PUT(request: Request) {
    const body = await request.json();
    const { id, name, email } = body;

    // Kiểm tra nếu không cung cấp đủ thông tin
    if (!id || !name || !email) {
        return NextResponse.json({ message: 'Vui lòng cung cấp đầy đủ thông tin' }, { status: 400 });
    }

    // Tìm người dùng theo ID
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return NextResponse.json({ message: `Không tìm thấy người dùng có id = ${id}` }, { status: 404 });
    }

    // Cập nhật thông tin người dùng
    users[userIndex] = { id, name, email };

    return NextResponse.json({ message: 'Cập nhật thông tin người dùng thành công', user: users[userIndex] });
}

// Hàm xử lý GET request để lấy thông tin người dùng theo ID
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));

    // Kiểm tra nếu không có ID
    if (!id) {
        return NextResponse.json({ message: 'Vui lòng cung cấp id người dùng' }, { status: 400 });
    }

    // Tìm người dùng theo ID
    const user = users.find(user => user.id === id);

    if (!user) {
        return NextResponse.json({ message: `Không tìm thấy người dùng có id = ${id}` }, { status: 404 });
    }

    return NextResponse.json(user);
}
