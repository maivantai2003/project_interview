
## 📌 Yêu cầu

Xây dựng một **hệ thống bán hàng (POS) đơn giản** gồm 2 màn hình:

* **POSScreen**: Màn hình bán hàng
* **RealtimeScreen**: Màn hình hiển thị danh sách đơn hàng realtime

---

## 🎯 Yêu cầu chức năng

### 1️⃣ POS Screen (Màn hình bán hàng)

* Hiển thị danh sách sản phẩm:

  * Tên sản phẩm
  * Giá bán
* Thêm sản phẩm vào giỏ hàng
* Hiển thị tổng tiền
* Nút **Thanh toán**

**Luồng thanh toán**:

1. Gửi request tạo đơn hàng lên Backend
2. Hiển thị thông báo **"Thanh toán thành công"**
3. Xóa giỏ hàng sau khi thanh toán

---

### 2️⃣ Realtime Screen (Màn hình phụ)

* Hiển thị danh sách đơn hàng **realtime**
* Tự động cập nhật khi có đơn hàng mới (không cần reload)
* Mỗi đơn hàng bao gồm:

  * Mã đơn hàng
  * Tổng tiền
  * Thời gian thanh toán

---

## ⚙️ Backend – Yêu cầu API

| Method | Endpoint      | Mô tả                  |
| ------ | ------------- | ---------------------- |
| GET    | /api/products | Lấy danh sách sản phẩm |
| POST   | /api/orders   | Tạo đơn hàng           |
| GET    | /api/orders   | Lấy danh sách đơn hàng |

### 🔔 Realtime (SignalR)

* Hub: `/order-hub`
* Khi tạo đơn hàng thành công, backend phát sự kiện **OrderCreated**
* Frontend (Realtime Screen) tự động nhận sự kiện và cập nhật UI

### 💾 Lưu trữ dữ liệu

* SQL Server
---

## 🖥️ Frontend

* React + TypeScript
* React Function Component
* Axios (gọi REST API)
* SignalR Client (realtime)

### 📄 Màn hình

#### POSScreen

* Hiển thị danh sách sản phẩm
* Thêm sản phẩm vào giỏ hàng
* Hiển thị tổng tiền
* Thanh toán & clear giỏ hàng

#### RealtimeScreen

* Hiển thị danh sách đơn hàng
* Cập nhật realtime
---

## 🏗️ Backend

* ASP.NET Web API (.NET 8)
* SignalR
* Lưu dữ liệu SQL Server
---

## 📁 Cấu trúc project

```bash
/Project
 ├── backend/
 │   └── WebAPI
 ├── frontend/
 ├── docker-compose.yml
 ├── .env
 └── README.md
```

---

## 🐳 Docker

* Dockerfile:

  * Backend (.NET)
  * Frontend (React)
* Docker Compose để chạy toàn bộ project

### ▶️ Chạy bằng Docker Compose

```bash
docker-compose up --build
```

---

## ▶️ Chạy project không dùng Docker

### 🔹 Backend

```bash
git clone https://github.com/maivantai2003/project_interview.git
cd backend/WebAPI
dotnet restore
dotnet run
```
### 🔹 Chạy các lệnh để tạo, cập nhật Database
```
Add-Migration initDb
Update-Database
```
### 🔹 Sửa lại chuỗi ConnectionStrings trong WebAPI/appsettings.json cho phù hợp và URL của Frontend khi cấu hình CORS
```
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=WebAPIDb;Trusted_Connection=True;MultipleActiveResultSets=true"
  },
  "Frontend": "http://localhost:xxxx"
}
```
* URL: `https://localhost:7148`

---

### 🔹 Frontend

```bash
cd frontend
npm install
npm run dev
```

* URL: `http://localhost:3000`
---

## 🌐 Truy cập hệ thống(không dùng docker)

| Thành phần      | URL                                                                |
| --------------- | ------------------------------------------------------------------ |
| POS Screen      | [http://localhost:3000](http://localhost:3000)                     |
| Realtime Screen | [http://localhost:3000/realtime](http://localhost:3000/realtime)   |
| Backend API     | [http://localhost:7148](https://localhost:7148)                     |
| SignalR Hub     | [http://localhost:7148/order-hub](http://localhost:7148/order-hub) |

---
---

## 🌐 Truy cập hệ thống(dùng docker)

| Thành phần      | URL                                                                |
| --------------- | ------------------------------------------------------------------ |
| POS Screen      | [http://localhost:3000](http://localhost:3000)                     |
| Realtime Screen | [http://localhost:3000/realtime](http://localhost:3000/realtime)   |
| Backend API     | [http://localhost:5100](http://localhost:5100)                     |
| SignalR Hub     | [http://localhost:5100/order-hub](http://localhost:5100/order-hub) |

---

## ⚡ Realtime với SignalR

* Hub: `/order-hub`
* Event: **OrderCreated**
* Khi đơn hàng được tạo:

  * Backend phát sự kiện
  * Frontend Realtime Screen nhận sự kiện
  * UI tự động cập nhật danh sách đơn hàng

---

## ✅ Ghi chú

* Danh sách sản phẩm được seed sẵn
* Không cần CRUD sản phẩm
* Dữ liệu đơn hàng có thể reset khi restart backend

---

## 👤 Người thực hiện

**Mai Văn Tài**
## Liên hệ
**0359277204**
---
## 📜 License

MIT License
