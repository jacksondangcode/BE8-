# 🏥 Health Tracker - Ứng dụng Theo dõi Sức khỏe

> Một ứng dụng web hiện đại để theo dõi và quản lý sức khỏe cá nhân, được xây dựng với React, TypeScript và Tailwind CSS.

## ✨ Tính năng chính

- 🔐 **Đăng nhập/Đăng ký**: Giao diện đăng nhập và đăng ký với thiết kế hiện đại
- 👤 **Hồ sơ cá nhân**: Quản lý thông tin cá nhân và chỉ số sức khỏe
- 📊 **Tính BMI tự động**: Tính toán và phân loại chỉ số BMI theo WHO
- 🎯 **Mục tiêu sức khỏe**: Đặt và theo dõi mục tiêu cá nhân
- 💡 **Lời khuyên sức khỏe**: Tips hằng ngày về dinh dưỡng và tập luyện
- 📱 **Responsive Design**: Hoạt động mượt mà trên mọi thiết bị

## 🎨 Giao diện

- **Thiết kế y tế chuyên nghiệp** với palette màu xanh lá cây và xanh ngọc
- **Glass morphism effects** với backdrop blur và transparency
- **Smooth animations** và hover effects
- **Icon system** nhất quán cho tất cả components

## 🛠️ Công nghệ sử dụng

- **Frontend Framework**: React 19.1.0 + TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **UI Components**: shadcn/ui với Radix UI
- **Routing**: React Router 7.6.2
- **Icons**: Lucide React
- **Package Manager**: npm

## 📋 Yêu cầu hệ thống

### Phần mềm cần thiết:
- **Node.js**: >= 18.0.0 (Recommended: LTS version)
- **npm**: >= 9.0.0 (đi kèm với Node.js)
- **Git**: Để clone repository

### Kiểm tra phiên bản:
```bash
node --version    # Cần >= 18.0.0
npm --version     # Cần >= 9.0.0
git --version     # Bất kỳ phiên bản nào
```

### Cài đặt Node.js (nếu chưa có):
- 🌐 **Windows/Mac**: Tải từ [nodejs.org](https://nodejs.org/)
- 🐧 **Linux**: 
  ```bash
  # Ubuntu/Debian
  curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

## 🚀 Hướng dẫn cài đặt

### Bước 1: Clone Repository
```bash
# Clone project từ GitHub
git clone https://github.com/[your-username]/health-tracker.git

# Di chuyển vào thư mục project
cd health-tracker
```

### Bước 2: Cài đặt Dependencies
```bash
# Cài đặt tất cả packages
npm install

# Chờ quá trình cài đặt hoàn tất...
# ✅ Dependencies installed successfully!
```

### Bước 3: Verify Installation
```bash
# Kiểm tra các packages chính
npm list --depth=0

# Kiểm tra shadcn/ui components
ls src/components/ui/
# Kết quả: button.tsx  input.tsx  label.tsx
```

### Bước 4: Chạy Development Server
```bash
# Khởi động server phát triển
npm run dev

# Kết quả mong đợi:
#   VITE v6.3.5  ready in 1234 ms
#   ➜  Local:   http://localhost:5173/
#   ➜  Network: use --host to expose
```

### Bước 5: Mở ứng dụng
🌐 Mở trình duyệt và truy cập: **http://localhost:5173**

## 📁 Cấu trúc thư mục

```
health-tracker/
├── 📂 public/                 # Static assets
│   └── vite.svg
├── 📂 src/                    # Source code
│   ├── 📂 assets/            # Images, fonts
│   │   └── 📂 ui/           # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   ├── 📂 lib/              # Utility functions
│   │   └── utils.ts
│   ├── 📂 pages/            # Page components
│   │   ├── Login.tsx        # 🔐 Trang đăng nhập
│   │   ├── Register.tsx     # 📝 Trang đăng ký
│   │   └── Profile.tsx      # 👤 Trang hồ sơ
│   ├── App.tsx              # 🏠 Main app component
│   ├── main.tsx             # 🎯 Entry point
│   └── index.css            # 🎨 Global styles
├── 📄 package.json          # Dependencies & scripts
├── 📄 vite.config.ts        # Vite configuration
├── 📄 tailwind.config.js    # Tailwind configuration
├── 📄 components.json       # shadcn/ui configuration
└── 📄 tsconfig.json         # TypeScript configuration
```

## 🎯 Scripts có sẵn

```bash
# Development
npm run dev          # Chạy development server
npm run build        # Build cho production  
npm run preview      # Preview production build

# Code Quality
npm run lint         # Kiểm tra ESLint errors
npm run type-check   # Kiểm tra TypeScript errors
```

## 🌐 Truy cập từ thiết bị khác

```bash
# Để truy cập từ mobile/tablet trong cùng mạng
npm run dev -- --host

# Server sẽ hiển thị:
# ➜  Local:   http://localhost:5173/
# ➜  Network: http://192.168.1.100:5173/
```

## 🔧 Troubleshooting

### ❌ Problem: "node: command not found"
```bash
# ✅ Solution: Cài đặt Node.js
# Tải từ: https://nodejs.org/
# Restart terminal sau khi cài đặt
```

### ❌ Problem: "npm install" fails
```bash
# ✅ Solution: Clear cache và reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### ❌ Problem: Port 5173 đã được sử dụng
```bash
# ✅ Solution: Sử dụng port khác
npm run dev -- --port 3000
# Hoặc tắt process đang sử dụng port 5173
```

### ❌ Problem: Tailwind styles không load
```bash
# ✅ Solution: Kiểm tra Tailwind config
# 1. Verify src/index.css có @import 'tailwindcss'
# 2. Restart development server
npm run dev
```

### ❌ Problem: TypeScript errors
```bash
# ✅ Solution: Check TypeScript
npx tsc --noEmit
# Nếu có lỗi, kiểm tra tsconfig.json
```
