---
name: website-overview
description: 網站架構總覽與 Agent 接手指南。新 Agent 接手此專案時應先閱讀此 Skill。
---

# Personal Website 架構總覽

此 Skill 提供網站完整架構說明，供新 Agent 快速了解專案狀態。

## 專案資訊

| 項目 | 內容 |
|------|------|
| 擁有者 | 張祐愷 (Yu-Kai Chang) |
| 類型 | 個人作品集網站 |
| 技術棧 | HTML5, CSS3, JavaScript (ES6+) |
| 託管 | GitHub Pages (待部署) |
| 本地開發 | `python -m http.server 3000` |

## 目錄結構

```
Personal_Website/
├── index.html              # 主頁面 (單頁應用)
├── css/
│   └── style.css           # 設計系統 (CSS Variables + Modal Styles)
├── js/
│   └── main.js             # 互動邏輯 (Modal, 捲動, 複製)
├── Projects/
│   └── Digital Twin/       # 專案資料夾
│       ├── *.pdf           # PDF 報告 (供下載)
│       └── *.md            # 燈箱內容 (Markdown)
├── README.md               # 專案說明文件
└── .agent/
    └── skills/             # Agent Skills
        ├── deploy-github-pages/
        ├── add-project/    # ⭐ 新增專案指南 (含 Modal 格式)
        ├── update-contact/
        └── website-overview/
```

## 網站區塊

| 區塊 ID | 功能 | 備註 |
|---------|------|------|
| `#hero` | 首屏介紹 | 含 CTA 按鈕 |
| `#about` | 關於我 | GPA, TOEIC |
| `#skills` | 技術能力 | 5 張技能卡片 |
| `#projects` | 專案展示 | 直接連結 PDF |
| `#toolkit` | 工具箱 | 4 類工具列表 |
| `#contact` | 聯絡資訊 | 點擊複製功能 |
| `footer` | 頁尾 | 版權資訊 |

## 設計系統

### 色彩 (CSS Variables)
```css
--color-bg-primary: #0a192f;     /* 深藍背景 */
--color-accent: #64ffda;          /* 青綠強調色 */
--color-text-primary: #ccd6f6;    /* 主要文字 */
```

### 字體
- **標題**: Orbitron (Google Fonts)
- **內文**: Space Mono (Google Fonts)

## 主要功能

### 1. 點擊複製 (Contact Section)
- 檔案: `js/main.js` 的 `initCopyFunctionality()`
- 點擊 Email/Phone 會複製到剪貼簿
- 顯示「✅ Copied!」回饋

### 2. 平滑捲動
- 檔案: `js/main.js` 的 `initSmoothScroll()`
- 點擊導航連結會平滑捲動到對應區塊

### 3. 捲動顯示動畫
- 檔案: `js/main.js` 的 `initScrollReveal()`
- 使用 IntersectionObserver API
- 元素進入視窗時淡入顯示

## 常見維護任務

| 任務 | 對應 Skill |
|------|-----------|
| 部署至 GitHub Pages | `deploy-github-pages` |
| 新增專案卡片 | `add-project` |
| 更新聯絡資訊 | `update-contact` |

## 待完成項目

- [ ] 部署至 GitHub Pages
- [ ] SEO 優化 (meta tags)
- [ ] 新增 favicon
- [ ] 深淺色模式切換

## 相關文件

- [README.md](file:///c:/Users/ASUS/Desktop/Personal_Website/README.md) - 詳細說明
- [style.css](file:///c:/Users/ASUS/Desktop/Personal_Website/css/style.css) - 樣式系統
- [main.js](file:///c:/Users/ASUS/Desktop/Personal_Website/js/main.js) - 互動邏輯
