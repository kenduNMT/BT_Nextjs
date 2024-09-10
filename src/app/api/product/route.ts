import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Đường dẫn đến file products.json
const filePath = path.join(process.cwd(), "data", "products.json");

// Hàm đọc dữ liệu từ file products.json
const readProductsFile = () => {
    const fileData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileData);
};

// Hàm ghi dữ liệu vào file products.json
const writeProductsFile = (data: any) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

// Xử lý POST request để thêm sản phẩm mới
export async function POST(request: Request) {
    try {
        // Lấy dữ liệu sản phẩm từ body của request
        const { id, product_name, price } = await request.json();

        // Đọc dữ liệu hiện tại từ file products.json
        const products = readProductsFile();

        // Thêm sản phẩm mới vào mảng
        const newProduct = { id, product_name, price };
        products.push(newProduct);

        // Ghi lại mảng sản phẩm đã cập nhật vào file
        writeProductsFile(products);

        return NextResponse.json(
            {
                message: "Thêm mới sản phẩm thành công",
                product: newProduct,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Lỗi khi thêm sản phẩm",
                error: error.message,
            },
            { status: 500 }
        );
    }
}
