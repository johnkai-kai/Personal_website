---
name: update-website
description: 網站更新懶人包。當用戶要更新網站內容並同步到 GitHub 時使用此 Skill。
---

# 網站更新懶人包

## 🚀 超快速更新 (3 步驟)

```bash
# 在 VS Code 終端機執行
git add .
git commit -m "Update: 說明變更"
git push
```

等 1-2 分鐘，網站自動更新！

---

## 📝 常見更新情境

### 1. 更新聯絡資訊

**檔案**: `index.html` (約第 255-265 行)

```html
<!-- 修改 data-value 和顯示文字 -->
<div class="contact-link copy-item" data-value="新Email">
    <div class="contact-info">✉️ Email: 新Email</div>
</div>
```

### 2. 新增專案

**檔案**: `index.html` (約第 165-190 行)

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
        <span class="tag">標籤</span>
    </div>
</div>
```

### 3. 修改個人簡介

**檔案**: `index.html` (約第 69-78 行)

直接修改 `<p>` 標籤內的文字。

### 4. 調整樣式

**檔案**: `css/style.css` (第 5-42 行)

```css
:root {
    --color-accent: #64ffda;     /* 強調色 */
    --color-bg-primary: #0a192f; /* 背景色 */
}
```

---

## 📋 完整更新流程

```
1. 開啟 VS Code
       ↓
2. 編輯檔案 (index.html / style.css / main.js)
       ↓
3. 儲存 (Ctrl + S)
       ↓
4. 開啟終端機 (Ctrl + `)
       ↓
5. 執行指令：
   git add .
   git commit -m "Update: 說明變更"
   git push
       ↓
6. 等待 1-2 分鐘
       ↓
7. 重新整理網站確認
```

---

## 💡 Commit 訊息範例

| 類型 | 訊息範例 |
|------|----------|
| 新增 | `git commit -m "Add: 新增 ABC 專案"` |
| 更新 | `git commit -m "Update: 更新聯絡電話"` |
| 修復 | `git commit -m "Fix: 修正連結錯誤"` |
| 樣式 | `git commit -m "Style: 調整卡片間距"` |
| 文件 | `git commit -m "Docs: 更新 README"` |

---

## ⚠️ 常見問題

### Push 被拒絕
```bash
git pull --rebase
git push
```

### 想取消未提交的修改
```bash
git checkout -- .
```

### 查看修改了哪些檔案
```bash
git status
```

---

## 🔗 相關連結

- **網站**: https://johnkai-kai.github.io/Personal_website/
- **GitHub**: https://github.com/johnkai-kai/Personal_website
