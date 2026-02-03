# 張祐愷 (Yu-Kai Chang) 個人網站

## 專案概述
這是一個使用純 HTML、CSS、JavaScript 建構的個人作品集網站，專為 GitHub Pages 靜態託管設計。

## 技術棧
- **HTML5**: 語義化結構
- **CSS3**: 設計系統 (CSS Variables)、Flexbox、Grid、動畫
- **JavaScript (ES6+)**: 互動效果、平滑捲動、點擊複製
- **字體**: Orbitron (標題)、Space Mono (內文)
- **託管**: GitHub Pages

---

## 專案結構
```
Personal_Website/
├── index.html          # 主頁面 (單頁應用)
├── css/
│   └── style.css       # 設計系統與所有樣式
├── js/
│   └── main.js         # 所有互動邏輯
├── Projects/           # 專案展示資料夾
│   └── Digital Twin/   # Digital Twin 報告 (PDF)
├── README.md           # 本說明文件
└── .nojekyll           # GitHub Pages 設定 (如需)
```

---

## 網站區塊說明

| 區塊 ID | 區塊名稱 | 功能描述 |
|---------|----------|----------|
| `#hero` | Hero | 首屏介紹、姓名、標語、CTA 按鈕 |
| `#about` | About Me | 個人簡介、GPA、TOEIC、核心技能標籤 |
| `#skills` | Skills | 技術能力卡片 (ROM、Agent IDE、PMA 薄膜) |
| `#projects` | Projects | 專案展示卡片 (含 PDF 連結) |
| `#kit` | Kit | 工具箱 (儀器操作、簡報製作) |
| `#contact` | Contact | 聯絡資訊 (點擊複製功能) |

---

## 部署至 GitHub Pages

### 方法一：透過 GitHub 網頁介面
1. 將專案資料夾推送至 GitHub Repository
2. 進入 Repository → Settings → Pages
3. Source 選擇 `main` branch，資料夾選 `/ (root)`
4. 點擊 Save，等待幾分鐘後即可訪問 `https://<username>.github.io/<repo-name>/`

### 方法二：使用 Git 命令
```bash
# 初始化 Git (若尚未初始化)
git init

# 添加所有檔案
git add .

# 提交變更
git commit -m "Initial commit: Personal Website"

# 連結遠端 Repository
git remote add origin https://github.com/<username>/<repo-name>.git

# 推送至 main 分支
git push -u origin main
```

---

## 本地開發

### 啟動開發伺服器
```bash
# 使用 Python
python -m http.server 3000

# 或使用 Node.js (需先安裝 http-server)
npx http-server -p 3000
```

### 訪問網站
開啟瀏覽器前往 `http://localhost:3000`

---

## 維護指南

### 更新聯絡資訊
編輯 `index.html` 中的 `#contact` 區塊：
```html
<div class="contact-link copy-item" data-value="新的Email">
    <div class="contact-info">✉️ Email: 新的Email</div>
    <small class="copy-hint">📋 Click to Copy</small>
</div>
```

### 新增專案
1. 在 `Projects/` 資料夾內新增子資料夾
2. 在 `index.html` 的 `#projects` 區塊內新增卡片：
```html
<div class="project-card reveal">
    <div class="project-header">
        <h3>專案名稱</h3>
        <div class="project-links">
            <a href="Projects/資料夾/檔案.pdf" target="_blank" class="btn btn-primary">
                View PDF Report 📄
            </a>
        </div>
    </div>
    <p class="project-description">專案描述</p>
    <div class="card-tags">
        <span class="tag">標籤1</span>
        <span class="tag">標籤2</span>
    </div>
</div>
```

### 樣式調整
所有樣式變數定義在 `css/style.css` 的 `:root` 區塊：
```css
:root {
    --color-bg-primary: #0a192f;     /* 主背景色 */
    --color-accent: #64ffda;          /* 強調色 */
    --font-display: 'Orbitron';       /* 標題字體 */
    --font-primary: 'Space Mono';     /* 內文字體 */
}
```

---

## 待改進項目

### 高優先級
- [ ] SEO 優化：新增 meta description、Open Graph 標籤
- [ ] 新增 favicon.ico
- [ ] 圖片優化：使用 WebP 格式、懶加載

### 中優先級
- [ ] 新增更多專案內容
- [ ] 加入專案截圖/預覽圖
- [ ] 深色/淺色模式切換

### 低優先級
- [ ] 加入動態粒子背景
- [ ] 多語言支援 (中/英切換)
- [ ] 加入 Google Analytics

---

## 相依性

本專案為純前端靜態網站，**無需安裝任何依賴**。

外部資源 (CDN):
- Google Fonts: Orbitron, Space Mono

---

## 授權
© 2026 張祐愷 (Yu-Kai Chang). All rights reserved.
