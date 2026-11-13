
const http = require('http');

const server = http.createServer((req, res) => {
    // Truy cập trang chủ
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>Xin chào!</h1>
            <p>Họ tên: Nguyễn Anh Quân</p>
            <p>Mã sinh viên: cdcntt18a23</p>
        `);
    }

    // Truy cập trang giới thiệu
    else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>Giới thiệu bản thân</h1>
            <p>Họ tên: Nguyễn Anh Quân</p>
            <p>Tuổi: 20</p>
            <p>Sinh viên ngành Công nghệ thông tin.</p>
        `);
    }

    // Đường dẫn không tồn tại
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end('<h1>404 - Không tìm thấy trang!</h1>');
    }
});

// Khởi động Web Server tại cổng 3000
server.listen(3000, () => {
    console.log('Web Server đang chạy tại http://localhost:3000');
});
