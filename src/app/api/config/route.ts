import { NextResponse } from 'next/server';

// Biến toàn cục để lưu trữ thông tin cấu hình tạm thời
let config = {
    username: '',
    theme: 'light',
    language: 'en',
    timezone: 'UTC'
};

// Hàm xử lý POST request để lưu trữ thông tin cấu hình
export async function POST(request: Request) {
    const body = await request.json();
    const { username, theme, language, timezone } = body;

    // Kiểm tra các thông tin được gửi lên
    if (!username || !theme || !language || !timezone) {
        return NextResponse.json({ message: 'Vui lòng cung cấp đầy đủ thông tin cấu hình' }, { status: 400 });
    }

    // Lưu trữ thông tin cấu hình vào biến toàn cục
    config = { username, theme, language, timezone };

    return NextResponse.json({
        message: 'Lưu trữ thông tin cấu hình thành công',
        config
    });
}

// Hàm xử lý GET request để trả về thông tin cấu hình hiện tại
export async function GET() {
    return NextResponse.json(config);
}
