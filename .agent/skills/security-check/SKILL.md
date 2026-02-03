---
name: security-check
description: 檢查專案資安狀態與 Public Repository 安全性說明。當用戶詢問資安問題或擔心程式碼公開時使用此 Skill。
---

# 資安檢查 Skill

此 Skill 用於檢查 Personal Website 專案的資安狀態。

## 快速檢查清單

| 項目 | 安全狀態 | 說明 |
|------|----------|------|
| 後端程式碼 | ✅ 無 | 純前端靜態網站 |
| 資料庫連線 | ✅ 無 | 無資料庫 |
| API 金鑰 | ✅ 無 | 無任何金鑰 |
| .env 檔案 | ✅ 無 | 無環境變數 |
| 使用者驗證 | ✅ 無 | 無登入系統 |
| 外部依賴 | ✅ 安全 | 僅 Google Fonts CDN |

## Public Repository 安全性

### ✅ 安全的原因

1. **GitHub 無法存取您的電腦**
   - 只儲存您主動推送的檔案
   - 無法讀取其他資料夾

2. **Git 推送需要認證**
   - 別人無法推送到您的 Repository
   - 需要您的帳號密碼或 SSH Key

3. **README 中的指令無害**
   - 指令只是文字說明
   - 只有在您電腦上執行才有效
   - 別人電腦沒有對應路徑

## 不應上傳的內容

- ❌ 密碼、API 金鑰
- ❌ .env 檔案
- ❌ 私人憑證 (SSL、SSH Key)
- ❌ 個人身分證件
- ❌ 銀行帳戶資料

## 已公開的內容

以下內容是您選擇公開的：
- ✅ Email: 6304john@gmail.com
- ✅ Phone: 0907370007
- ✅ PDF 報告內容

## 誤傳敏感資料處理

如果不小心上傳了敏感資料：

### Step 1: 刪除檔案
```bash
git rm 敏感檔案.txt
git commit -m "Remove sensitive file"
git push
```

### Step 2: 清除歷史 (如果需要)
```bash
# 使用 BFG Repo-Cleaner
bfg --delete-files 敏感檔案.txt
git push --force
```

## 定期檢查

建議定期執行：
1. 檢查 `.gitignore` 是否包含敏感檔案類型
2. 推送前使用 `git status` 確認變更內容
3. 避免在程式碼中硬編碼密碼
