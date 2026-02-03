---
name: add-project
description: 在網站 Projects 區塊新增專案卡片。當用戶要求新增專案、作品、案例時使用此 Skill。
---

# 新增專案卡片

此 Skill 指導如何在 Personal Website 的 Projects 區塊新增新專案。

## 檔案位置

- **HTML**: `index.html` (第 160-190 行附近，`#projects` 區塊)
- **專案資料**: `Projects/` 資料夾

## 新增步驟

### Step 1: 準備專案資料

1. 在 `Projects/` 資料夾內建立子資料夾：
   ```
   Projects/
   └── 新專案名稱/
       ├── 報告.pdf
       └── (其他相關檔案)
   ```

### Step 2: 新增 HTML 卡片

在 `index.html` 的 `#projects` 區塊內，找到現有的 `project-card`，在其後新增：

```html
<div class="project-card reveal">
    <div class="project-header">
        <h3>專案名稱</h3>
        <div class="project-links">
            <a href="Projects/專案資料夾/檔案名.pdf" target="_blank" rel="noopener" class="btn btn-primary" aria-label="View Project">
                View PDF Report 📄
            </a>
        </div>
    </div>
    <p class="project-description">
        專案描述文字，簡述專案目的與成果。
    </p>
    <div class="card-tags">
        <span class="tag">標籤1</span>
        <span class="tag">標籤2</span>
        <span class="tag">標籤3</span>
    </div>
</div>
```

### Step 3: 自訂內容

修改以下欄位：
| 欄位 | 說明 |
|------|------|
| `<h3>` | 專案標題 |
| `href` | PDF 或 Demo 連結 |
| `<p class="project-description">` | 專案描述 |
| `<span class="tag">` | 技術標籤 (可多個) |

### Step 4: 測試

1. 重新整理瀏覽器 (F5)
2. 確認卡片顯示正常
3. 測試連結是否正確開啟

## 範例

### 現有專案參考

```html
<div class="project-card reveal">
    <div class="project-header">
        <h3>Digital Twin (Display)</h3>
        <div class="project-links">
            <a href="Projects/Digital Twin/Digital Twin(Display) .pdf" target="_blank" rel="noopener" class="btn btn-primary" aria-label="View Project">
                View PDF Report 📄
            </a>
        </div>
    </div>
    <p class="project-description">
        此為 Digital Twin report demo 版，為保護實驗室資產，已將開發資料及敏感內部內容資料隱藏。
    </p>
    <div class="card-tags">
        <span class="tag">Digital Twin</span>
        <span class="tag">Report</span>
        <span class="tag">Demo</span>
    </div>
</div>
```

## 連結類型

### PDF 報告
```html
<a href="Projects/資料夾/檔案.pdf" target="_blank" class="btn btn-primary">
    View PDF Report 📄
</a>
```

### GitHub Repository
```html
<a href="https://github.com/username/repo" target="_blank" class="btn btn-primary">
    View on GitHub 🔗
</a>
```

### 外部 Demo
```html
<a href="https://demo-url.com" target="_blank" class="btn btn-primary">
    Live Demo 🚀
</a>
```

## 注意事項

- 檔案路徑使用相對路徑
- PDF 檔名避免空格與特殊字元
- 每個專案卡片需包含 `reveal` class 以啟用動畫
