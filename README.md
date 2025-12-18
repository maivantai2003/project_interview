Cấu trúc project: React, .NET

/Project
 ├── backend/WebAPI 
 ├── frontend/
 ├── docker-compose.yml
 ├── .env
 └── README.md

Frontend
POSScreen:
 Hiển thị danh sách sản phẩm (Tên, Giá)
 Thêm sản phẩm vào giỏ hàng
 Hiển thị tổng tiền
 Nút Thanh toán
 Khi thanh toán:
  Gửi request tạo đơn hàng lên Backend
  Hiển thị thông báo "Thanh toán thành công"
  Xóa giỏ hàng

RealtimeScreen:
 Hiển thị danh sách đơn hàng realtime
 Tự động cập nhật (không cần reload)
 Mỗi đơn hàng gồm:
  Mã đơn hàng
  Tổng tiền
  Thời gian thanh toán
Backend
 GET api/products – Lấy danh sách sản phẩm
 POST api/orders – Tạo đơn hàng
 GET api/orders – Lấy danh sách đơn hàng
 SignalR realtime: mỗi khi thanh toán thành công sẽ phát sự kiện CreatedOrder để tự động cập nhật danh sách orders mà không cần load trang
Lưu dữ liệu SQL Server

Frontend
React + TypeScript
React Function Component
Axios (gọi API)
SignalR Client

Backend
ASP.NET Web API (.NET 7 / .NET 8)
SignalR (Realtime)
Lưu dữ liệu: In-memory (List) hoặc DB đơn giản
Seed sẵn danh sách sản phẩm

Docker
Docker Compose

Cách chạy Backend không dùng docker
clone project: git clone https://github.com/maivantai2003/project_interview.git
cd backend/WebAPI
dotnet restore
dotnet run
port: https://localhost:7148
Cách chạy Frontend không dùng docker
cd frontend
npm install
npm run dev
port: http://localhost:3000
Chạy frontend, backend bằng docker-compose
docker-compose up --build
Truy cập
Thành phần	URL
POSScreen	    http://localhost:3000
RealtimeScreen	http://localhost:3000/realtime
Backend API	    http://localhost:5100
SignalR Hub	    http://localhost:5100/order-hub
⚡ Realtime (SignalR)
Hub: /order-hub
Khi tạo đơn hàng thành công gọi event OrderCreated Frontend Realtime Screen sẽ tự động nhận và cập nhật UI.
✅ Ghi chú
Sản phẩm được seed sẵn, không cần CRUD sản phẩm
Dữ liệu đơn hàng có thể reset khi restart backend
Người thực hiện
Mai Văn Tài
📜 License
MIT License