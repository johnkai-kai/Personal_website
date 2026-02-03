---
name: deploy-github-pages
description: 將個人網站部署至 GitHub Pages 的完整流程。當用戶要求部署、上線、發布網站時使用此 Skill。
---

# 部署至 GitHub Pages

此 Skill 指導如何將 Personal Website 部署至 GitHub Pages。

## 前置需求

1. 已安裝 Git
2. 擁有 GitHub 帳號
3. 網站在本地測試正常

## 部署步驟

### Step 1: 初始化 Git Repository

```bash
cd c:\Users\ASUS\Desktop\Personal_Website
git init
```

### Step 2: 建立 .gitignore (可選)

如果有不需要版控的檔案：
```bash
echo "node_modules/" > .gitignore
echo ".DS_Store" >> .gitignore
```

### Step 3: 新增所有檔案

```bash
git add .
git commit -m "Initial commit: Personal Website"
```

### Step 4: 在 GitHub 建立 Repository

1. 前往 https://github.com/new
2. Repository 名稱建議: `personal-website` 或 `portfolio`
3. 選擇 **Public**
4. **不要** 勾選 "Add a README file" (我們已有)
5. 點擊 "Create repository"

### Step 5: 連結遠端並推送

```bash
git remote add origin https://github.com/<USERNAME>/<REPO-NAME>.git
git branch -M main
git push -u origin main
```

### Step 6: 啟用 GitHub Pages

1. 進入 Repository → **Settings**
2. 左側選單選擇 **Pages**
3. Source 選擇 **Deploy from a branch**
4. Branch 選擇 **main**，資料夾選擇 **/ (root)**
5. 點擊 **Save**
6. 等待 1-2 分鐘，重新整理頁面

### Step 7: 取得網址

部署完成後，網址格式為：
```
https://<USERNAME>.github.io/<REPO-NAME>/
```

## 驗證部署

1. 訪問 GitHub Pages 網址
2. 確認所有區塊正常顯示
3. 測試互動功能 (點擊複製、PDF 連結)

## 更新網站

日後更新網站內容：
```bash
git add .
git commit -m "Update: 說明變更內容"
git push
```

GitHub Pages 會自動重新部署。

## 常見問題

### 問題: CSS/JS 沒有載入
- 確認檔案路徑使用相對路徑 (如 `css/style.css`)
- 確認沒有使用絕對路徑 (`/css/style.css`)

### 問題: PDF 無法開啟
- 確認 PDF 檔案已加入 Git
- 檔名避免使用特殊字元或空格

### 問題: 頁面 404
- 確認 `index.html` 在根目錄
- 等待 GitHub Pages 重新部署
