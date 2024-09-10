import { NextResponse } from 'next/server';

// Danh sách người dùng mẫu (dùng để kiểm tra)
let users = [
    { id: 1, name: 'Nguyen Van A', email: 'a@example.com' },
    { id: 2, name: 'Tran Thi B', email: 'b@example.com' },
    { id: 3, name: 'Le Van C', email: 'c@example.com' },
];

// Hàm xử lý POST request để thêm người dùng mới
export async function POST(request: Request) {
    // Lấy dữ liệu từ body của request
    const body = await request.json();

    // Kiểm tra nếu không có dữ liệu hợp lệ
    if (!body.name || !body.email) {
        return NextResponse.json({ message: 'Vui lòng cung cấp đầy đủ thông tin người dùng' }, { status: 400 });
    }

    // Tạo một ID mới cho người dùng
    const newUserId = users.length ? users[users.length - 1].id + 1 : 1;

    // Thêm người dùng mới vào danh sách
    const newUser = { id: newUserId, name: body.name, email: body.email };
    users.push(newUser);

    // Trả về thông báo thành công
    return NextResponse.json({ message: 'Thêm mới thông tin người dùng thành công', user: newUser });
}

// Hàm xử lý GET request để lấy danh sách người dùng hiện tại
export async function GET() {
    return NextResponse.json(users);
}
