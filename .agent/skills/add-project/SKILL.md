---
name: add-project
description: 在網站 Projects 區塊新增專案卡片。當用戶要求新增專案、作品、案例時使用此 Skill。
---

# 新增專案卡片

此 Skill 指導如何在 Personal Website 的 Projects 區塊新增新專案。

## 專案資料夾結構

每個專案須在 `Projects/` 資料夾內建立子資料夾，包含以下檔案：

```
Projects/
└── 專案名稱/
    ├── 專案名稱.pdf        # PDF 報告 (供下載)
    └── 專案名稱.md         # 卡片顯示內容 (Markdown 格式)
```

### MD 檔案格式

```markdown
專案標題

專案描述文字，此內容會直接顯示在卡片上。
```

> **重要**: MD 檔案的第一行為標題，其餘為卡片描述內容。

---

## 新增步驟

### Step 1: 建立專案資料夾

在 `Projects/` 資料夾內建立子資料夾，並放入 PDF 與 MD 檔案。

### Step 2: 新增 HTML 卡片

在 `index.html` 的 `#projects` 區塊內 (`<div class="section-container">` 內)，新增：

```html
<div class="project-card reveal">
    <div class="project-header">
        <h3>專案名稱</h3>
        <div class="project-links">
            <a href="Projects/專案資料夾/檔案名.pdf" target="_blank" rel="noopener" 
                class="btn btn-primary" aria-label="View Project">
                View PDF Report 📄
            </a>
        </div>
    </div>
    <p class="project-description">
        <!-- 從 MD 檔案複製描述內容到這裡 -->
        專案描述文字...
    </p>
    <div class="card-tags">
        <span class="tag">標籤1</span>
        <span class="tag">標籤2</span>
    </div>
</div>
```

### Step 3: 自訂內容

| 欄位 | 說明 | 來源 |
|------|------|------|
| `<h3>` | 專案標題 | MD 檔案第一行 |
| `href` | PDF 連結 | 專案資料夾內的 PDF 路徑 |
| `<p class="project-description">` | 專案描述 | MD 檔案第 3 行起 |
| `<span class="tag">` | 技術標籤 | 自行定義 (2-4 個) |

### Step 4: 測試

1. 重新整理瀏覽器 (F5 或 Ctrl+Shift+R)
2. 確認卡片顯示正常
3. 測試 PDF 連結是否正確開啟

---

## 現有專案參考

### 資料夾結構
```
Projects/
└── Digital Twin/
    ├── Digital Twin(Display) .pdf
    └── Digital twin(Display).md
```

### MD 檔案內容
```markdown
Digital twin(Display)

此為Digital twin report Demo，說明對Digital twin的認知，以及AgentIDE的開發工作流作，為保護實驗室資產，已將開發資料及敏感內部內容資料隱藏
```

### 對應 HTML 卡片
```html
<div class="project-card reveal">
    <div class="project-header">
        <h3>Digital Twin (Display)</h3>
        <div class="project-links">
            <a href="Projects/Digital Twin/Digital Twin(Display) .pdf" target="_blank" rel="noopener"
                class="btn btn-primary" aria-label="View Project">
                View PDF Report 📄
            </a>
        </div>
    </div>
    <p class="project-description">
        此為 Digital Twin report Demo，說明對 Digital Twin 的認知，以及 Agent IDE 的開發工作流程。為保護實驗室資產，已將開發資料及敏感內部內容資料隱藏。
    </p>
    <div class="card-tags">
        <span class="tag">Digital Twin</span>
        <span class="tag">Report</span>
        <span class="tag">Demo</span>
    </div>
</div>
```

---

## 注意事項

- ✅ 檔案路徑使用相對路徑
- ✅ PDF 檔名避免特殊字元 (空格可接受)
- ✅ 每個專案卡片需包含 `reveal` class 以啟用動畫
- ✅ MD 檔案內容手動複製到 HTML 的 `<p class="project-description">` 中
