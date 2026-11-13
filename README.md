1. Nội dung bài tập

Sử dụng module http để tạo Web Server.

Khởi động Web Server tại cổng 3000.

Truy cập / để hiển thị lời chào và mã sinh viên.

Truy cập /about để hiển thị thông tin giới thiệu bản thân.

Đường dẫn không tồn tại trả về mã trạng thái HTTP 404.

2. Các bước thực hiện

Bước 1: Tạo thư mục Bt02 trong Bai03.

Bước 2: Tạo file bai02.js và nhập mã nguồn chương trình.

Bước 3: Mở Terminal tại thư mục Bt02.

Bước 4: Chạy chương trình bằng lệnh:

node bai02.js

Bước 5: Mở trình duyệt và truy cập các địa chỉ sau:

Trang chủ: http://localhost:3000

Trang giới thiệu: http://localhost:3000/about

Trang không tồn tại: http://localhost:3000/test

3. Kết quả thực hiện

Trang chủ hiển thị lời chào và mã sinh viên.

Trang /about hiển thị thông tin giới thiệu bản thân.

Trang không tồn tại trả về lỗi HTTP 404.